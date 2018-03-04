import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
id;
order$;
order;
orders:any [];
  constructor(private route:ActivatedRoute,private orderService:OrderService) {
this.id=this.route.snapshot.params['id'];
this.order$=this.orderService.getOrderByOrderId(this.id);console.log(this.order$);
}
  ngOnInit() {
  }
view(order){
  console.log("order"+order)
}
}
