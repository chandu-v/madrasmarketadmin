import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../service/order.service';

interface OrderStatus {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {

  selectedValue: string;

  orderStatuses: OrderStatus[] = [
    {value: '0', viewValue: 'Order Placed'},
    // {value: '4', viewValue: 'Out For Delivery'},
    {value: '2', viewValue: 'Order Delivered'}
  ];

  displayedColumns: string[] = ['product_id','product_name', 'image_url','amount','size','quantity'];
  dataSource = [];
  orderId;
  orderDetails;
  total_cost;
  constructor(private route:ActivatedRoute,private orderService:OrderService) { }

  ngOnInit(): void {
    if (sessionStorage.jwt == "null" || sessionStorage.jwt == undefined) {
      console.log(`In session`)
      return;
    }
    this.route.params.subscribe((data)=>{
      console.log(data);
      this.orderId = data['id']
      console.log(this.orderId);
      this.orderService.getOrderItems(this.orderId).subscribe((data)=>{
        console.log(JSON.parse(JSON.stringify(data)));
        this.dataSource = JSON.parse(JSON.stringify(data));
        if(this.dataSource.length>0){
          this.total_cost = this.dataSource[0]['total_cost'];
        }
      });
    });
  }
  updateOrderStatus(){
    if(this.selectedValue == undefined){
      alert("Please select a Status");
    }
    console.log(this.selectedValue);
    this.orderService.updateOrderStatus(this.selectedValue,this.orderId).subscribe((data)=>{
      alert(`Successfully updated the order status`);
    })
  }

}
