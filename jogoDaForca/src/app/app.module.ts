import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { GamePageComponent } from './game-page/game-page.component';
import { LetterInputComponent } from './letter-input/letter-input.component';
import { HiddenWordComponent } from './hidden-word/hidden-word.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { EndgameComponent } from './endgame/endgame.component'


@NgModule({
  declarations: [
    AppComponent,
    GamePageComponent,
    LetterInputComponent,
    HiddenWordComponent,
    HeaderComponent,
    EndgameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
