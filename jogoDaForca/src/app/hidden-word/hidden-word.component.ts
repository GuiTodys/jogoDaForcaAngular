import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hidden-word',
  templateUrl: './hidden-word.component.html',
  styleUrls: ['./hidden-word.component.css']
})
export class HiddenWordComponent implements OnInit {

  @Input() word:string = ''
  @Input() description:string = ''
  @Input() palavraEscondida:string = ''
  @Input() tentativas:number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
