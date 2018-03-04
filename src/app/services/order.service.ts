import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class OrderService {

  constructor(private db: AngularFireDatabase) { }
addOrder(order){
 return this.db.list('/orders').push(order);
}
getOrder(){
 return this.db.list('/orders');
}
getOrderById(userId){
 return this.db.list('/orders',{
   query:{
     orderByChild: 'userId',
     equalTo:userId
   }
 });
}
getOrderByOrderId(id){
 return this.db.object('/orders/' + id);
}
}
