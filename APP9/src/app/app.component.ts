import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private prodService:ProductService){}
  product:Product;
  employees:any[];


 
  ngOnInit(){
    this.product=this.prodService.findProduct();
    this.employees=this.prodService.loadProducts();
    console.dir(this.employees);

  }
}
