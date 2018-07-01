import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  
  constructor(private fb:FormBuilder,private productService:ProductService,private route: ActivatedRoute, private router: Router) { }

  myForm:FormGroup;
  ngOnInit() {
    this.myForm=this.fb.group({
      'id':'',
      'name':['', [Validators.required]],
      'price':'0.0'
    });

    this.route.data.subscribe(data => {
      console.dir(data)
      this.myForm.patchValue(data.product)
      this.originalProduct = data.product;
     // this.isEdit = true;
    });

  }
  

  saveProduct() {
    if (this.myForm.valid) {
      this.productService.saveProduct(this.myForm.value)
        .subscribe(product => {
          this.router.navigate(['products']);
        })
    }
  }

  originalProduct: any;
   
  
  


}
