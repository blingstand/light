export class GameService{
	balls = [
		{index: 1, name:	'ball-1', status:	'light-on'},	 
		{index: 2, name:	'ball-2', status:	'light-off'},	 
		{index: 3, name:	'ball-3', status:	'light-on'},	 
		{index: 4, name:	'ball-4', status:	'light-on'},	 
		{index: 5, name:	'ball-5', status:	'light-on'},	 
		{index: 6, name:	'ball-6', status:	'light-on'},	 
		{index: 7, name:	'ball-7', status:	'light-on'},	 
		{index: 8, name:	'ball-8', status:	'light-on'},	 
		{index: 9, name:	'ball-9', status:	'light-on'},	 
	]
	changeStatus(index){
		//if I click on a ball, I want it changes color
		if (this.balls[index].status === 'light-on'){
			this.balls[index].status = 'light-off'
		} else {
			this.balls[index].status = 'light-on'
		}
	}
}