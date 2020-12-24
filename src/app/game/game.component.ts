import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public message: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  // code for tic tac toe game goes here...
  public isTurnX = true;
  public positions = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]

  public TicTacToe(row: any, col: any){
    let tipo = '';
    if(this.isTurnX){
      this.positions[row][col] = 'X';
      tipo = 'X';
      this.isTurnX = false;
    }
    else{
      this.positions[row][col] = 'O';
      tipo = 'O';
      this.isTurnX = true;
    }

    if(this.ValidateWinner(tipo)){
      this.message = "El ganador es: " + tipo;
      $('#modalAlert').modal('show');
    }
  }

  public ValidateWinner(tipo: any){
    const col1 = [ this.positions[0][0], this.positions[1][0], this.positions[2][0] ].every(t => t == tipo)
    const col2 = [ this.positions[0][1], this.positions[1][1], this.positions[2][1] ].every(t => t == tipo)
    const col3 = [ this.positions[0][2], this.positions[1][2], this.positions[2][2] ].every(t => t == tipo)
    const d1 = [ this.positions[0][0], this.positions[1][1], this.positions[2][2] ].every(t => t == tipo)
    const d2 = [ this.positions[0][2], this.positions[1][1], this.positions[2][0] ].every(t => t == tipo)
    const rows = this.positions.find( p => p.every( t => t == tipo) )
    if( col1 || col2 || col3 || rows || d1 || d2){
      return true
    }
    return false
  }

  public Reset(){
    this.positions = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ]
  }

}
