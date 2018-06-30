import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  msg:string;
  childmsg:string;

  fun(){
    this.msg='Good Evening';
  }

  fun2(data){
    this.childmsg=data;
  }
}
