import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { GameComponent }        from './game/game.component';
import { GameService }          from './services/game.service'
import { HttpClientModule }     from '@angular/common/http';
import { InputCodeComponent }   from './input-code/input-code.component';
import { NgModule }             from '@angular/core';
import { ScoreComponent }       from './score/score.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ScoreComponent,
    InputCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    GameService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
