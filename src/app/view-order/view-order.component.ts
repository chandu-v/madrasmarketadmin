import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
  displayedColumns: string[] = ['order_id', 'product_id', 'quantity','action'];
  dataSource = [];
  orderId;
  orderDetails;
  constructor(private route:ActivatedRoute,private orderService:OrderService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      console.log(data);
      this.orderId = data['id']
      console.log(this.orderId);
      this.orderService.getOrderItems(this.orderId).subscribe((data)=>{
        console.log(JSON.parse(JSON.stringify(data)));
        this.dataSource = JSON.parse(JSON.stringify(data));
      });
    });
  }

}
