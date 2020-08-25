import { Component, OnInit } from '@angular/core';
import { DeliveryBoyService } from '../service/delivery-boy.service';

@Component({
  selector: 'app-add-delivery-boy',
  templateUrl: './add-delivery-boy.component.html',
  styleUrls: ['./add-delivery-boy.component.css']
})
export class AddDeliveryBoyComponent implements OnInit {

  constructor(private delivery_boy_service:DeliveryBoyService) { }

  ngOnInit(): void {
  }

}
