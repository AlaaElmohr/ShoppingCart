import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import {AuthService} from '../../services/auth.service';
import {AppUser} from '../../models/app-user';
import {ShoppingCartService} from '../../services/shopping-cart.service';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCart } from './../../models/shopping-cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
expandValue=false ;
counter=0;
appUser:AppUser;
cart$: Observable<ShoppingCart>;
shoppingCartItemCount:number;
  constructor(private authService:AuthService,private shoppingCartService:ShoppingCartService ) {
  }
  async ngOnInit() {
    this.authService.appUser$.subscribe(appUser => this.appUser = appUser);
   this.cart$=await this.shoppingCartService.getCart();
  }
  logOut(){
  this.authService.logout();
  }
  expand(){
    this.counter++;
    if(this.counter%2 !==0){
          this.expandValue=true;
    }
    else{
          this.expandValue=false;
    }
  }
}
