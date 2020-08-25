import { Component, OnInit } from '@angular/core';
import { DeliveryBoyService } from '../service/delivery-boy.service';
import { delivery_boy } from '../bean/delivery_boy';

@Component({
  selector: 'app-delivery-boy',
  templateUrl: './delivery-boy.component.html',
  styleUrls: ['./delivery-boy.component.css']
})
export class DeliveryBoyComponent implements OnInit {

  displayedColumns : string[] = ['boy_id','boy_name','boy_phone_number','status']
  delivery_boys:delivery_boy[] = [];
  constructor(private delivery_boy_service:DeliveryBoyService) { }

  ngOnInit(): void {
    this.delivery_boy_service.getAllDeliveryBoy().subscribe((data)=>{
      this.delivery_boys =  JSON.parse(JSON.stringify(data));
      console.log(this.delivery_boys)
    })
  }

}
