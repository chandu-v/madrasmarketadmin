import { Component, OnInit } from '@angular/core';
import { DeliveryBoyService } from '../service/delivery-boy.service';

@Component({
  selector: 'app-add-delivery-boy',
  templateUrl: './add-delivery-boy.component.html',
  styleUrls: ['./add-delivery-boy.component.css']
})
export class AddDeliveryBoyComponent implements OnInit {

  delivery_boy_name;
  delivery_boy_phone_number;
  constructor(private delivery_boy_service:DeliveryBoyService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.delivery_boy_name);
    console.log(this.delivery_boy_phone_number);
    this.delivery_boy_service.save(this.delivery_boy_name,this.delivery_boy_phone_number).subscribe((data)=>{
      console.log(data);
      alert(`Boy added Successfully!`);
      this.delivery_boy_name = '';
      this.delivery_boy_phone_number = '';
    })
  }

}
