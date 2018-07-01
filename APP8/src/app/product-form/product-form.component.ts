import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  myForm:FormGroup;
  
  prod:Product;

  ngOnInit() {
    this.myForm= this.fb.group({
     'id':'1024',
       'name':'Book',
       'price':234.65
    });
    
  }
  update(){
  
    console.log('Product Id: ');

  }



}
