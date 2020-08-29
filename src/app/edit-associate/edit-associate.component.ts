import { Component, OnInit } from '@angular/core';
import { AssociateComponent } from '../associate/associate.component';
import { AssociateService } from '../service/associate.service';
import { ActivatedRoute, Router } from '@angular/router';
import { associate } from '../bean/associate';

@Component({
  selector: 'app-edit-associate',
  templateUrl: './edit-associate.component.html',
  styleUrls: ['./edit-associate.component.css']
})
export class EditAssociateComponent implements OnInit {
  entity:associate;
  associate_name = '';
  referral_code = '';
  constructor(private route:ActivatedRoute,private router:Router,private associateService:AssociateService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      this.associateService.getAllAssociatesById(data['id']).subscribe((data)=>{
        console.log(data);
        let entities:associate[] = JSON.parse(JSON.stringify(data));
        if(entities.length == 0){
          this.router.navigateByUrl('associate/-1');
          return;
        }
        this.entity = entities[0];
        console.log(this.entity);
        this.associate_name = this.entity.associate_name;
        this.referral_code = this.entity.associate_phone_number;
        console.log(this.associate_name+"\t"+this.referral_code);
      })
    });
  }

  updateDetails(){
    let updatedAssociate:associate = new associate();
    updatedAssociate.associate_id = this.entity.associate_id;
    updatedAssociate.associate_name = this.associate_name;
    updatedAssociate.associate_phone_number = this.referral_code;
    this.associateService.updateDetails(updatedAssociate).subscribe((data)=>{
      console.log(data);
      if(data == undefined){
        alert('referral code already exists use a different one')
      }
    })
  }

}
