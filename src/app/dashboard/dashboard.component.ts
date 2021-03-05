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

  constructor() { }

  ngOnInit(): void {
    localStorage.getItem('players') ? this.players = JSON.parse(localStorage.getItem('players')) : this.players = [];

  }

  editPlayer(player) {
    console.log(player);
  }

  deletePlayer(player) {
    this.players = this.players.filter(p => p !== player);
    localStorage.setItem('players', JSON.stringify(this.players));

  }


}
