import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService:ProductService) { }

  deleteItem(id, event) {
    event.preventDefault();
    this.productService.deleteProduct(id);
      
      
  }

  ngOnInit() {
  }

}
