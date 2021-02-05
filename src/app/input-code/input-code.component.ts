import { Component, OnInit, Input } 	from '@angular/core';
import { NgForm } 						from '@angular/forms';
import { GameService } 					from '../services/game.service';
import { CodeService } 					from '../services/code.service';

@Component({
	selector: 'app-input-code',
	templateUrl: './input-code.component.html',
	styleUrls: ['./input-code.component.scss']
})
export class InputCodeComponent implements OnInit {

	@Input() fromParentCode: string; 

	constructor(	private gameService: GameService, 
					private codeService: CodeService) { }

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
					const msg = { status: "victory", code: code, size: code.length }
					this.gameService.sendMsgToServer(msg) 
				}else{
					alert("echec");
				}
				this.gameService.returnToFormerState(0)
			}, 300
		)
	}
	async onGetCodeForTest(){
		this.gameService.getMessageFromServer()
		await this.gameService.sleep(200)
		console.log('%cCodes : ', 'color: #0c690c')
		const codes = this.gameService.codeFromServer['chains']
		console.log(codes)
		for (let code of codes) {
			this.codeService.testThisCode(code)
		}
	}
}
