import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-letter-input',
  templateUrl: './letter-input.component.html',
  styleUrls: ['./letter-input.component.css']
})
export class LetterInputComponent implements OnInit {

  constructor() { }

  @Output() inputLetter = new EventEmitter()

  ngOnInit(): void {
  }

  okHandler(event: Event,letterInput:any){
    event.preventDefault()
    this.inputLetter.emit(letterInput.value)
    letterInput.value=''
  }

}
