import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  displayedColumns: string[] = ['order_id', 'user_id', 'address_id','amount','status_id','order_time','action'];
  dataSource = [];
  constructor(private orderService:OrderService) { }

  ngOnInit(): void {

    this.orderService.getOrders()
    .subscribe((data)=>{
      console.log(data);
      this.dataSource = JSON.parse(JSON.stringify(data));
      console.log(this.dataSource);
    });
  }



}
