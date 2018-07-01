import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  loadProducts(){
    return this.http.get("http://localhost:8080/api/products/");
  }


  loadProduct(productId){
    return this.http.get(`http://localhost:8080/api/products/${productId}`);
  }


  deleteProduct(productId){
    return this.http.delete('http://localhost:8080/api/products/',productId);
  }

  saveProduct(product){
    return this.http.post("http://localhost:8080/api/products/",product);
  }


}
