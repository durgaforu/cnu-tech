import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  constructor() { }

  @Input()
  greetMe:string;

  @Output()
  out=new EventEmitter();

  greetMsg(){
    this.out.emit('Good Evening too');
  }


  ngOnInit() {
  }

}
