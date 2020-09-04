import { Component, OnInit } from '@angular/core';
import { DeliveryBoyService } from '../service/delivery-boy.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-order-by-delivery-person',
  templateUrl: './view-order-by-delivery-person.component.html',
  styleUrls: ['./view-order-by-delivery-person.component.css']
})
export class ViewOrderByDeliveryPersonComponent implements OnInit {
  displayedColumns: string[] = ['order_id', 'user_id', 'address','amount','cart_size','status_id','order_time','delivery_boy','action'];
  dataSource = [];
  view_what = '';
  page_map = '';
  searchterm = '';
  status_id ;

  boy_id;
  constructor(private route:ActivatedRoute,private deliveryBoyService:DeliveryBoyService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      this.boy_id = data['person_id'];
      this.status_id = data['status_id'];
      
      if(this.status_id == '0'){
        this.view_what = "View Delivered Orders"
        this.page_map = '2';
      }else if(this.status_id == '2'){
        this.view_what = "View Pending Orders"
        this.page_map = '0';
      }
      this.deliveryBoyService.getOrderDetailsByDeliveryBoyIdAndStatus(this.boy_id,this.status_id).subscribe(orders=>{
        console.log(orders);
        this.dataSource = JSON.parse(JSON.stringify(orders));
      });
    })
  }

}
