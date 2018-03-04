import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../services/order.service';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders;
  subscription:Subscription;
  uid;
    constructor(private orderService:OrderService) { }

    async ngOnInit() {
     let order$=await this.orderService.getOrder();
     this.subscription=order$.subscribe(order=>this.orders=order);
    }
    ngOnDestroy(){
      this.subscription.unsubscribe();
    }

}
