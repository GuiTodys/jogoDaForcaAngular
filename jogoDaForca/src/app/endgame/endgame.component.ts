import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-endgame',
  templateUrl: './endgame.component.html',
  styleUrls: ['./endgame.component.css']
})
export class EndgameComponent implements OnInit {

  @Input() winIndicator:boolean = false
  @Input() gameOverIndicator:boolean = false
  @Input() wordDisplay:string = ''

  constructor() { }

  @Output() resetForm = new EventEmitter()

  callResetForm(){
    this.resetForm.emit('')
  }

  ngOnInit(): void {
  }

}
