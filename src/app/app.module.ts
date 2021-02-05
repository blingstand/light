import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { GameComponent }        from './game/game.component';
import { GameService }          from './services/game.service'
import { CodeService }          from './services/code.service'
import { GameViewComponent }    from './game-view/game-view.component';
import { HttpClientModule }     from '@angular/common/http';
import { InputCodeComponent }   from './input-code/input-code.component';
import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScoreComponent }       from './score/score.component';

const appRoutes: Routes = [
  { path: 'code/:code', component: GameViewComponent },
  { path: '',         component: GameViewComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ScoreComponent,
    InputCodeComponent,
    GameViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes), 
  ],
  providers: [
    GameService,
    CodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
