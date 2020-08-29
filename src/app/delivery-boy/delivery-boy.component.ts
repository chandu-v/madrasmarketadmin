import { Component, OnInit } from '@angular/core';
import { DeliveryBoyService } from '../service/delivery-boy.service';
import { delivery_boy } from '../bean/delivery_boy';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delivery-boy',
  templateUrl: './delivery-boy.component.html',
  styleUrls: ['./delivery-boy.component.css']
})
export class DeliveryBoyComponent implements OnInit {

  displayedColumns : string[] = ['edit','boy_id','boy_name','boy_phone_number','status']
  delivery_boys:delivery_boy[] = [];
  getStatus:number ;
  view_what;
  constructor(private route:ActivatedRoute,private delivery_boy_service:DeliveryBoyService) { }

  ngOnInit(): void {
    
    this.route.params.subscribe((data)=>{
      console.log(data['status']);
      this.getStatus = data['status']==1?0:1;
      this.view_what = data['status']==1?'View Active Delivery Person':'View InActive Delivery Person';
      this.delivery_boy_service.getAllDeliveryBoyByStatusId(data['status']).subscribe((data)=>{
        this.delivery_boys =  JSON.parse(JSON.stringify(data));
        console.log(this.delivery_boys)
      })
    })
   
  }

}
