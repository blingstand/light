import { Injectable } 	from '@angular/core';
import { GameService }	from './game.service';


@Injectable()
export class CodeService{

    constructor(private gameService: GameService) { }

    testThisCode(code, sleepTime=0){
    	const receivedCode = code
    	code = code.split('-');
		//2- mock a click on each concerned ball number
		for (let numb of code){
			numb = parseInt(numb) -1 //index starts at 0
			this.gameService.modifyBalls(numb)
			this.gameService.sleep(sleepTime)
			
		}
		//3- deals with result: victory >send code to server / fail restart from begining
		if (this.gameService.isVictory() !== false){
				const msg = { code: receivedCode, size: receivedCode.length }
				this.gameService.sendMsgToServer(msg) 
				this.gameService.returnToFormerState(0)
			console.log('%c*****************************************************',	'color: #0c690c')
    		console.log('%cCODE URL : le code ci-dessous fonctionne', 				'color: #0c690c')
    		console.log(receivedCode)
    		console.log('%c*****************************************************',	'color: #0c690c')
    	}else{
    		console.log('%c*****************************************************',	'color: #a30505')
    		console.log('%cERROR CODE URL : le code ci-dessous ne fonctionne pas', 'color: #a30505')
    		console.log(receivedCode)
    		console.log('%c*****************************************************',	'color: #a30505')
    	}
	}
}
    