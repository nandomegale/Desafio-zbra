import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-edit-player-modal',
  templateUrl: './edit-player-modal.component.html',
  styleUrls: ['./edit-player-modal.component.css']
})
export class EditPlayerModalComponent implements OnInit {

  @Input() player: any;

  @Output() editPlayerEvent = new EventEmitter();

  bsModalRef: BsModalRef;

  submitted: boolean;

  form: FormGroup;

  players: any = [];


  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      name: [this.player.name, [Validators.required]],
      cel: [this.player.cel, [Validators.required]],
      email: [this.player.email, [Validators.required, Validators.email]]
    });

  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  openModal(template: TemplateRef<any>) {

    this.bsModalRef = this.modalService.show(template);
  }

  closeModal() {
    this.submitted = false;
    this.bsModalRef.hide();
  }

  editPlayer() {
    this.submitted = true;
    if (this.form.valid) {
      this.players = JSON.parse(localStorage.getItem('players'));
      let index = this.players.findIndex(x => x.name == this.player.name);
      let newPlayers = [...this.players];
      newPlayers[index] = this.form.value;
      localStorage.setItem('players', JSON.stringify(newPlayers));
      this.editPlayerEvent.emit(this.form.value);
      this.bsModalRef.hide();
    }
  }

}
