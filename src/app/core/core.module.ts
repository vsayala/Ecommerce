import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ProductsComponent } from './products/products.component';
import { SelectedProductsComponent } from './selected-products/selected-products.component';


const routes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'selected-product', component: SelectedProductsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'order-summary', component: OrderSummaryComponent},
];

@NgModule({
  declarations: [HomepageComponent, ProductsComponent, SelectedProductsComponent, CartComponent, OrderSummaryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CoreModule { }
