import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GameService{

    constructor(private httpClient: HttpClient) { }

    url = 'http://localhost:8000/api/victory/code/'
    balls = [
    {index: 1, name:    'ball-1', status:   'light-on', 
    relatives: [2, 4]},

    {index: 2, name:    'ball-2', status:   'light-off', 
    relatives: [1, 3, 5]    },

    {index: 3, name:    'ball-3', status:   'light-on', 
    relatives: [2, 6]},

    {index: 4, name:    'ball-4', status:   'light-on', 
    relatives: [1, 5, 7]},

    {index: 5, name:    'ball-5', status:   'light-on', 
    relatives: [2, 4, 8]},

    {index: 6, name:    'ball-6', status:   'light-on', 
    relatives: [3, 9]},

    {index: 7, name:    'ball-7', status:   'light-on', 
    relatives: [4, 8]},

    {index: 8, name:    'ball-8', status:   'light-on', 
    relatives: [5, 7, 9]},

    {index: 9, name:    'ball-9', status:   'light-on', 
    relatives: [6, 8]},

    ]
    steps = [
    { clicked: null, inactive: [2]}
    ]
    //#####
    //Methodes
    //#####
    changeRelativesStatus(index){
        //I want to return the relatives of a balls identified by its index
        // alert("click on " + index + "\nchange " + this.balls[index].relatives)
        for (let relatives of this.balls[index].relatives){
            this.changeBallStatus(relatives -1)
        }
    }
    changeBallStatus(index){
        //I want to change color of a balls identified by its index
        if (this.balls[index].status === 'light-on'){
            this.balls[index].status = 'light-off'
        } else {
            this.balls[index].status = 'light-on'
        }
    }
    modifyBalls(index){
        //I want a method where I can put all others connected to click on ball action 
        this.changeBallStatus(index)
        this.changeRelativesStatus(index)
        this.createNewStep(index)
        console.log(this.steps)
    }
    getAllInactives(){
        //I want to return an array of all inactive ball
        let allInactives = []
        for (let ball of this.balls) {
            if (ball.status === 'light-off') {
                allInactives.push(ball.index)
            }
        }
        return allInactives
    }
    createNewStep(index){
        //I want to create a new step object in steps, 
        //when user clicks on a ball 
        const lastStep = this.steps[this.steps.length -1] 
        const newStep = {clicked: index + 1 , inactive: this.getAllInactives()} 
        this.steps.push(newStep)
    }
    lightThem(){
        //I want to light on all the ball except the ones I can find in 
        //last step.inactive 
        const inactives = this.steps[this.steps.length -1].inactive

        for (let ball of this.balls){
            if (inactives.includes(ball.index)){
                ball.status = "light-off"
            }else{
                ball.status = "light-on"
            }
        }
    }
    returnToFormerState(formerStep){
        // I want to roll back to a former given step
        length = this.steps.length
        for (let i = 1; i < length - formerStep; i++){
            this.steps.pop()
        }
        console.log('*********Clear')

        this.lightThem()
    }
    getVictoryCode(){
        //I want to extract code from score line and return it
        let victoryCode = ""
        let all_steps = this.steps.slice(1)
        for (let step of all_steps){
            victoryCode += step.clicked + "-"
        }
        victoryCode = victoryCode.slice(0, -1);
        return victoryCode
    }
    sendCodeToServer() {
        //I want to send a code to the server
        const code = this.getVictoryCode()
        const message = { code: code, size : code.length}
        this.httpClient
        .post(this.url, message)
        .subscribe(
            () => {
              console.log('Envoie terminé !');
            },
            (error) => {
                console.log('Erreur ! : ' + error);
            }
        );
    }
    isVictory(){
        //I want to return false if at least one ball is not on
        console.log("balls : ")
        console.log(this.balls)
        for (let ball of this.balls){
            if (ball.status === "light-off"){
                console.log('pas encore de victoire, car : ')
                console.log(ball.index)
                return false
            }
        }
        this.sendCodeToServer()
        return true
    }

}