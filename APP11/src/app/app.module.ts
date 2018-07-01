import { ProductResolverService } from './product-resolver.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from './products-list/products-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule,Route, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { ProductService } from './product.service';
import { ProductFormComponent } from './product-form/product-form.component';

let myRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'products',component:ProductsListComponent},
  {path:'products/add',component:ProductFormComponent},
  {
    path:'edit/:productId',
    resolve:{
      product:ProductResolverService
    },
    component:ProductFormComponent
  },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsListComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes),
    HttpClientModule
  ],
  providers: [ProductService,ProductResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
