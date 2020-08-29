import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeliveryBoyService } from '../service/delivery-boy.service';
import { delivery_boy } from '../bean/delivery_boy';

@Component({
  selector: 'app-edit-delivery-person',
  templateUrl: './edit-delivery-person.component.html',
  styleUrls: ['./edit-delivery-person.component.css']
})
export class EditDeliveryPersonComponent implements OnInit {
  persons:delivery_boy [];
  constructor(private route:ActivatedRoute,private deliveryService:DeliveryBoyService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      this.deliveryService.getAllDeliveryBoyById(data['id']).subscribe((data)=>{
         this.persons = JSON.parse(JSON.stringify(data));
        console.log(this.persons);
      })
    })
  }

}
