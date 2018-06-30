import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css','blabla.css']
})
export class GreetingComponent implements OnInit {

  constructor() { }

  @Input()
  lbl:string;

  @Output()
  outMsg=new EventEmitter();

  passMsg(){
    this.outMsg.emit(this.lbl);
  }

  ngOnInit() {
  }

}
