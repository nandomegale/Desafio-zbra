import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament-bracket',
  templateUrl: './tournament-bracket.component.html',
  styleUrls: ['./tournament-bracket.component.css']
})
export class TournamentBracketComponent implements OnInit {

  players: any = [];

  semifinal1: any = [];

  semifinal2: any = [];

  final: any = [
    {
      name: "Finalista 1"
    },
    {
      name: "Finalista 2"
    }
  ];

  champion: any = {
    name: "Campeão"
  }


  constructor() { }

  ngOnInit(): void {
    this.players = JSON.parse(localStorage.getItem('players'));
    this.semifinal1 = this.players.slice(0, 2);
    this.semifinal2 = this.players.slice(-2);
  }

  setFinal1(player) {
    this.final[0] = player;
  }

  setFinal2(player) {
    this.final[1] = player;
  }

  setChampion(player) {
    this.champion = player;
  }



}
