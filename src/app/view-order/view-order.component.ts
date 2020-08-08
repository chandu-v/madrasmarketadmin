import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  orderId;
  orderDetails;
  constructor(private route:ActivatedRoute,private orderService:OrderService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      console.log(data);
      this.orderId = data['id']
      this.orderService.getOrdersByOrderId(this.orderId).subscribe((data)=>{
        this.orderDetails = JSON.parse(JSON.stringify(data));
        console.log(this.orderDetails);
      })
    })
  }

}
