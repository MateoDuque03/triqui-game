import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-win',
  templateUrl: './modal-win.component.html',
  styleUrls: ['./modal-win.component.css']
})
export class ModalWinComponent implements OnInit {

  @Input() messageWin: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
