import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  players: any = [];

  onAddNewPlayer(event) {
    this.players.push(event);
  }

  onEditPlayer(event) {
    this.players = JSON.parse(localStorage.getItem('players'));
  }

  constructor() { }

  ngOnInit(): void {
    localStorage.getItem('players') ? this.players = JSON.parse(localStorage.getItem('players')) : this.players = [];

  }

  deletePlayer(player) {
    this.players = this.players.filter(p => p !== player);
    localStorage.setItem('players', JSON.stringify(this.players));

  }


}
