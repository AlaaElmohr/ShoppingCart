import { Component, OnInit ,OnDestroy} from '@angular/core';
import { ShoppingCartService } from './../services/shopping-cart.service';
import {Router} from '@angular/router';
import {OrderService} from '../services/order.service';
import {AuthService} from '../services/auth.service';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit ,OnDestroy{
  cart;
  cart$;
  uid;
  carSubscription:Subscription;
  userSubscription:Subscription;
  constructor(private shoppingCartService: ShoppingCartService,private router:Router,private orderService:OrderService,private Auth:AuthService) { }

  async ngOnInit() {
  this.cart$ = await this.shoppingCartService.getCart();
    this.carSubscription=this.cart$.subscribe(cart => this.cart =cart);
  this.userSubscription=  this.Auth.user$.subscribe(user => this.uid=user.uid);
  }
  ngOnDestroy(){
  this.carSubscription.unsubscribe();
  this.userSubscription.unsubscribe();
  }
async submit(value){
let order ={
  userId:this.uid,
  datePlaced: new Date().getTime(),
  shipping:value,
 items:this.cart.items.map( i=>{
    return {
      product:{
        title:i.title,
        price:i.price,
        imagePath:i.imagePath,
      },
      quantity:i.quantity,
      totalPrice:i.totalPrice
    }
 })

};
let resault=await this.orderService.addOrder(order);
this.router.navigate(['/order-success',resault.key]);
this.shoppingCartService.clearCart();
}
}
