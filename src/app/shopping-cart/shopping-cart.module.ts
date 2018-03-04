import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './../products/products.component';
import { ShoppingCartComponent } from './../shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './../check-out/check-out.component';
import { OrderSuccessComponent } from './../order-success/order-success.component';
import { MyOrdersComponent } from './../my-orders/my-orders.component';
import { ProductFilterComponent } from './../products/product-filter/product-filter.component';
import { ViewOrderComponent } from './../view-order/view-order.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import{SharedModule} from './../shared.module';
import { AuthGuard } from './../services/auth-guard.service';
import { CustomFormsModule } from 'ng2-validation';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
      { path: 'view/:id', component: ViewOrderComponent, canActivate: [AuthGuard] },
      { path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuard] },
      { path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
    ])
  ],
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    ViewOrderComponent
  ]
})
export class ShoppingCartModule { }
