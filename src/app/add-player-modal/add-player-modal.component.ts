import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-player-modal',
  templateUrl: './add-player-modal.component.html',
  styleUrls: ['./add-player-modal.component.css']
})
export class AddPlayerModalComponent implements OnInit {

  bsModalRef: BsModalRef;

  form: FormGroup;

  players: any = [];

  submitted: boolean;

  @Output() addNewPlayerEvent = new EventEmitter();

  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      name: [null, [Validators.required]],
      cel: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]]
    });

  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  openModal(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template);
    localStorage.getItem('players') ? this.players = JSON.parse(localStorage.getItem('players')) : this.players = [];
  }

  closeModal() {
    this.submitted = false;
    this.form.reset();
    this.bsModalRef.hide();
  }

  addPlayer() {
    this.submitted = true;
    if (this.form.valid) {
      this.players.push(this.form.value);
      localStorage.setItem('players', JSON.stringify(this.players));
      this.addNewPlayerEvent.emit(this.form.value);
      this.form.reset();
      this.bsModalRef.hide();

    }

  }


}
