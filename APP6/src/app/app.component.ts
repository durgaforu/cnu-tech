import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  status=false;
  imagePath="https://i.ytimg.com/vi/c6L0lFEPDwk/hqdefault.jpg";
  fun1(){
    this.status=false;
  }
  fun2(){
    this.status=true;
  }
  
  colorName='blue';
  empName='Praveen';
  friends=['Praveen','James','Rose','Bucky','Ozvitha'];
  
  emp={
    id:'1024',
    ename:'Ozvitha Fernz',
    salary:384384
  }
   s1=JSON.stringify(this.emp);



}
