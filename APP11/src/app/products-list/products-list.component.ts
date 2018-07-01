import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor(private productService:ProductService) { }
  products:any=[];
  ngOnInit() {
    this.productService.loadProducts()
    .subscribe(resp=>{
      this.products=resp;
     // console.dir(this.products);
    });
  }

  deleteItem(id, event) {
    event.preventDefault();
    this.productService.deleteProduct(id);
      
      
  }

}
