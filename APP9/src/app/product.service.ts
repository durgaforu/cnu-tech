import { employees } from './myproducts';
import { Injectable, OnInit } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService{

  constructor() { }
  prod:Product;
  emps=employees;
  

  loadProducts():any{
    return this.emps;
  }

  findProduct():Product{
    this.prod=new Product();
    this.prod.id=10;
    this.prod.name="Book";
    this.prod.price=864;
    return this.prod;
  }


}
