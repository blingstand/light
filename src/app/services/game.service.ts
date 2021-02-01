export class GameService{
	balls = [
		{index: 1, name:	'ball-1', status:	'light-on', 
			relatives: [2, 4]},

		{index: 2, name:	'ball-2', status:	'light-off', 
			relatives: [1, 3, 5]	},

		{index: 3, name:	'ball-3', status:	'light-on', 
			relatives: [2, 6]},

		{index: 4, name:	'ball-4', status:	'light-on', 
			relatives: [1, 5, 7]},

		{index: 5, name:	'ball-5', status:	'light-on', 
			relatives: [2, 4, 8]},

		{index: 6, name:	'ball-6', status:	'light-on', 
			relatives: [3, 9]},

		{index: 7, name:	'ball-7', status:	'light-on', 
			relatives: [4, 8]},

		{index: 8, name:	'ball-8', status:	'light-on', 
			relatives: [5, 7, 9]},

		{index: 9, name:	'ball-9', status:	'light-on', 
			relatives: [6, 8]},

	]
	steps = [
		{ clicked: null, inactive: [2]}
	]
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
		this.changeBallStatus(index)
		this.changeRelativesStatus(index)
		this.getNewStep(index)
		console.log(this.steps)
	}
	getAllInactives(){
		//I want to return an array of all inactive ball
		let allInactives = []
		for (let ball of this.balls) {
			if (ball.status === 'light-off') {
				allInactives.push(ball)
			}
		}
		return allInactives
	}
	getNewStep(index){
		//I want to create a new step object in steps, 
		//when user clicks on a ball 
		const lastStep = this.steps[this.steps.length -1] 
		const newStep = {clicked: index + 1 , inactive: this.getAllInactives()} 
		this.steps.push(newStep)
	}
}