import { Component, OnInit ,OnDestroy} from '@angular/core';
import {OrderService} from '../services/order.service';
import {Subscription} from 'rxjs/Subscription';
import {AuthService} from '../services/auth.service';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
orders;
subscription:Subscription;
userSubscription:Subscription;
uid;
  constructor(private orderService:OrderService,private Auth:AuthService) { }

  async ngOnInit() {
  this.userSubscription=  this.Auth.user$.subscribe(user => this.uid=user.uid);
   let order$=await this.orderService.getOrderById(this.uid);
   this.subscription=order$.subscribe(order=>this.orders=order);
  }
  ngOnDestroy(){
      this.userSubscription.unsubscribe();
    this.subscription.unsubscribe();
  }
view(order){
  console.log(order)
}
}
