import { Component, Input, OnInit }   from '@angular/core'; 
import { GameService }                from '../services/game.service';
import { CodeService }                from '../services/code.service';
import { ActivatedRoute }             from '@angular/router';
@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss']
})
export class GameViewComponent implements OnInit {
    title = 'light';
    balls : any[]; 
    codeFromUrl : string; 

    @Input() ballName: string; 
    @Input() ballStatus: string; 
    constructor(  private gameService: GameService,
                  private codeService: CodeService,
                  private route: ActivatedRoute) {
    }
    ngOnInit(){
    this.codeFromUrl = this.route.snapshot.params['code'];
    this.balls = this.gameService.balls
    if (this.codeFromUrl !== undefined){
      this.codeService.testThisCode(this.codeFromUrl); 
    }

    }

}
