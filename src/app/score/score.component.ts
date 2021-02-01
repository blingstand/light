import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
	selector: 'app-score',
	templateUrl: './score.component.html',
	styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

	steps : any[]; 

	constructor(private gameService: GameService) { }

	ngOnInit() {
		this.steps = this.gameService.steps
		console.log(this.steps)
	}
	onGoToStep(x){
		alert("ampoule(s) éteinte(s) : " + this.steps[x].inactive) 
	}

}
