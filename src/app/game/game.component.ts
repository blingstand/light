import { Component, Input, OnInit } from '@angular/core'; 
import { GameService } from '../services/game.service';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

	balls : any[]; 
	counter: any[] = ["1","2","3","4","5","6"]
	indexOfBall: number; 
	// @Input() ballName: string; 
 //  	@Input() ballStatus: string; 

	constructor(private gameService: GameService) { }

	ngOnInit(){
		this.balls = this.gameService.balls
	}
	onChangeStatus(index){
		// const index = this.indexOfBall
		console.log("changement de statut pour " + index)
		this.gameService.changeStatus(index)
	}

}
