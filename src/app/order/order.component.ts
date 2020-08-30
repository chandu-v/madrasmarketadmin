import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  displayedColumns: string[] = ['order_id', 'user_id', 'address','amount','cart_size','status_id','order_time','action'];
  dataSource = [];
  view_what = '';
  page_map = '';
  searchterm = '';
  status_id ;
  constructor(private orderService:OrderService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    if (sessionStorage.jwt == "null" || sessionStorage.jwt == undefined) {
      console.log(`In session`)
      return;
    }
    this.route.params.subscribe((data)=>{
       
      this.status_id = data['status_id'];
      if(this.status_id == '0'){
        this.view_what = "View Delivered Orders"
        this.page_map = '2';
      }else if(this.status_id == '2'){
        this.view_what = "View Pending Orders"
        this.page_map = '0';
      }
       
      this.orderService.getOrders(this.status_id)
      .subscribe((data)=>{
         
        this.dataSource = JSON.parse(JSON.stringify(data));
         
      });
    });
    
  }

  searchOrders(){
    this.orderService.search(this.status_id,this.searchterm).subscribe((data)=>{
      this.dataSource = JSON.parse(JSON.stringify(data));
    })
  }


}
