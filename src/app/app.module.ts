
import { AppComponent }     from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule }    from '@angular/platform-browser';
import { GameComponent }    from './game/game.component';
import { GameService }      from './services/game.service'
import { HttpClientModule } from '@angular/common/http';
import { NgModule }         from '@angular/core';
import { ScoreComponent }   from './score/score.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [
    GameService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
