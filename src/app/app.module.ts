import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { ScoreComponent } from './score/score.component';
import { GameService } from './services/game.service'


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GameService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
