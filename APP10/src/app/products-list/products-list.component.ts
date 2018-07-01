import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(private productService:ProductService) { }

  employees:any[];
  ngOnInit() {
    this.employees=this.productService.loadProducts();
      //console.dir(this.employees);
    }

}
