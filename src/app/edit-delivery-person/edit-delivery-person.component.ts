import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeliveryBoyService } from '../service/delivery-boy.service';
import { delivery_boy } from '../bean/delivery_boy';

interface BoyStatus {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-delivery-person',
  templateUrl: './edit-delivery-person.component.html',
  styleUrls: ['./edit-delivery-person.component.css']
})



export class EditDeliveryPersonComponent implements OnInit {
  

  boyStatus: BoyStatus[] = [
    {value: '0', viewValue: 'Active'},
    // {value: '4', viewValue: 'Out For Delivery'},
    {value: '1', viewValue: 'InActive'}
  ];

  delivery_boy_name;
  delivery_boy_phone_number;
  delivery_boy_status;
  persons:delivery_boy ;
  constructor(private route:ActivatedRoute,private deliveryService:DeliveryBoyService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      this.deliveryService.getAllDeliveryBoyById(data['id']).subscribe((data)=>{
         this.persons = JSON.parse(JSON.stringify(data))[0];
         this.delivery_boy_name = this.persons.boy_name;
         this.delivery_boy_phone_number = this.persons.phone_number;
         this.delivery_boy_status = this.persons.status;
        console.log(this.persons);
        console.log(this.delivery_boy_name)
        console.log(this.delivery_boy_phone_number)
        console.log(this.delivery_boy_status)


      })
    })
  }
  updateDetails(){
    this.persons.boy_name = this.delivery_boy_name;
    this.persons.phone_number = this.delivery_boy_phone_number;
    this.persons.status = this.delivery_boy_status;
    console.log(this.persons);
    this.deliveryService.updateDetails(this.persons).subscribe((data)=>{
      console.log(data);
      if(data == undefined){
        alert(`something went wrong`);
      }else{
        alert(`Details updated successfully`);
      }
    })
  }
}
