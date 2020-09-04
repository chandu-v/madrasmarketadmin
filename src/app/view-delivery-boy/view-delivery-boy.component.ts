import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeliveryBoyService } from '../service/delivery-boy.service';
import { delivery_boy } from '../bean/delivery_boy';

@Component({
  selector: 'app-view-delivery-boy',
  templateUrl: './view-delivery-boy.component.html',
  styleUrls: ['./view-delivery-boy.component.css']
})
export class ViewDeliveryBoyComponent implements OnInit {
  displayedColumns : string[] = ['edit','boy_id','boy_name','boy_phone_number','status']
  delivery_boys:delivery_boy[] = [];
  constructor(private route:ActivatedRoute,private deliveryBoyService:DeliveryBoyService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      this.deliveryBoyService.getAllDeliveryBoyById(data['id']).subscribe((boys)=>{
        console.log(boys);
        this.delivery_boys = JSON.parse(JSON.stringify(boys));
      })
    })
  }

}
