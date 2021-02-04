import { Component, OnInit } 	from '@angular/core';
import { NgForm } 				from '@angular/forms';

@Component({
  selector: 'app-input-code',
  templateUrl: './input-code.component.html',
  styleUrls: ['./input-code.component.scss']
})
export class InputCodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onKeyUp(event: any) { // without type info
    if([8, 46].includes(event.keyCode)) {
        event.target.value = event.target.value
    }else{
    	event.target.value += "-"
    }
  }
	onSubmit(form: NgForm) {
	    console.log(form.value.inputCode);
	}
}
