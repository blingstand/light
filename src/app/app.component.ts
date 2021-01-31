import { Component, Input, OnInit } from '@angular/core'; 
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'light';
  balls : any[]; 

  @Input() ballName: string; 
  @Input() ballStatus: string; 
  constructor(private gameService: GameService) {
  }
  	ngOnInit(){
  		this.balls = this.gameService.balls
  	}
}
