import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ProductsModule } from './products/products.module';
import { SelectedProductsComponent } from './selected-products/selected-products.component';

const routes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'selected-product', component: SelectedProductsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'order-summary', component: OrderSummaryComponent},
];

@NgModule({
  declarations: [HomepageComponent, SelectedProductsComponent, CartComponent, OrderSummaryComponent],
  imports: [
    CommonModule,
    ProductsModule,
    RouterModule.forChild(routes)
  ]
})
export class CoreModule { }
