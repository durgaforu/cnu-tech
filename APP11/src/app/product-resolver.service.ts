
import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import { ProductService } from './product.service';

@Injectable()
export class ProductResolverService implements Resolve<any> {

  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot) {
    let prodId = route.params['productId'];
    console.log('---- Product Id: '+prodId);
    return this.productService.loadProduct(prodId);
  }

}