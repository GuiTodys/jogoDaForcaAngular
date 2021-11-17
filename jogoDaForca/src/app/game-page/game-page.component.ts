import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {

  words:any = [{
    descricao:'Relacionado a natação',
    palavra:'Piscina'},
    {descricao:'Relacionado ao Natal',
    palavra:'Trenó'},
    {descricao:'É um esporte',
    palavra:'Esgrima'},
    {descricao:'Herói dos quadrinhos',
    palavra:'Lanterna Verde'},
    {descricao:'É um país',
    palavra:'Azerbaijão'},
    {descricao:'Fabricante de caminhões',
    palavra:'Volvo'},
    {descricao:'Série de TV',
    palavra:'The BIg Bang Theory'},
    {descricao:'Foi presidente do Brasil',
    palavra:'Itamar Franco'},
  ]

    choosenWord:string = ''
    chosenDescription:string =''
    escondida:string = ''

    choosenWordArray:string[]=[]
    escondidaArray:string[]=[]

    randomIndex:number = 0
    scoreIndicator:boolean = false
    remainingAttempts:number = 5

    letterInput:string = ''

    gameOver:boolean = false
    playerWins:boolean = false
    stopRunning:boolean = false

  constructor() {}

  ngOnInit(): void {
    this.randomIndex=Math.floor(Math.random()*(this.words.length))
    this.choosenWord = this.words[this.randomIndex].palavra
    this.chosenDescription = this.words[this.randomIndex].descricao
    this.escondida = '?'.repeat(this.choosenWord.length)
  }

  initializeGameData(){
    this.randomIndex=Math.floor(Math.random()*(this.words.length))
    this.choosenWord = this.words[this.randomIndex].palavra
    this.chosenDescription = this.words[this.randomIndex].descricao
    this.escondida = '?'.repeat(this.choosenWord.length)
  }

  tratarLetraEntrada(letra:string){

    if(this.stopRunning){
      return
    }

    this.letterInput = letra.toLowerCase()
    this.choosenWordArray = [...this.choosenWord]
    this.escondidaArray = [...this.escondida]

    this.replaceRightLetter()

    if(this.remainingAttempts<=0){
      this.stopRunning = true
      this.gameOver = true
      this.escondida = this.choosenWord
      return
    }

  }

  replaceRightLetter(){
    for (const index in this.choosenWordArray) {
      if(this.choosenWordArray[index].toLocaleLowerCase() === this.letterInput){
        this.escondidaArray[index] = this.letterInput
        window.alert('A palavra contém a letra inserida!')
        this.scoreIndicator = true
      }
    }

    if(!this.scoreIndicator){
      this.remainingAttempts -= 1
    } else{
      this.scoreIndicator = false
    }

    this.escondidaArray[0] = this.escondidaArray[0].toUpperCase()
    this.escondida = this.escondidaArray.join('')

    if(this.escondida===this.choosenWord){
      this.playerWins = true
    }
  }

  resetGame(){
    this.initializeGameData()

    console.log('entrou')

    this.gameOver = false
    this.playerWins = false
    this.remainingAttempts = 5
    this.stopRunning = false
  }
}
