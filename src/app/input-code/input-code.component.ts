import { Component, OnInit } 	from '@angular/core';
import { NgForm } 				from '@angular/forms';
import { GameService } 			from '../services/game.service';


@Component({
	selector: 'app-input-code',
	templateUrl: './input-code.component.html',
	styleUrls: ['./input-code.component.scss']
})
export class InputCodeComponent implements OnInit {

	constructor(private gameService: GameService) { }

	ngOnInit(): void {
	}
	onKeyUp(event: any) { // without type info
		if([8, 46].includes(event.keyCode)) {
			event.target.value = event.target.value
		}else{
			event.target.value += "-"
		}
	}
	async onSubmit(form: NgForm) {
		//I want to change ball status when I submit
		//1- extract ball number from code
		let code = form.value.inputCode
		code = code.split('-');
		console.log("code =")
		console.log(code)
		//2- mock a click on each concerned ball number
		for (let numb of code){
			numb = parseInt(numb) -1 //index starts at 0
			this.gameService.modifyBalls(numb)
			await this.gameService.sleep(300)
			
		}
		//3- deals with result: victory >send code to server / fail restart from begining
		setTimeout(
			() => { 
				if (this.gameService.isVictory() !== false){
					alert("victoire") ;
					this.gameService.sendCodeToServer() 
				}else{
					alert("echec");
				}
				this.gameService.returnToFormerState(0)
			}, 300
		)
		//4 return to begining
	}
}
