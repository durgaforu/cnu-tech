import { Product } from './../product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor() { }
  
  prod:Product;

  update(product){
    console.log('Product Id: '+product.id);
    
  }

  ngOnInit() {
    this.prod=new Product();
    this.prod.id=10;
    this.prod.name='Book';
    this.prod.price=25.76;
  }

}
