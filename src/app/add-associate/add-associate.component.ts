import { Component, OnInit } from '@angular/core';
import { associate } from '../bean/associate';
import { AssociateService } from '../service/associate.service';

@Component({
  selector: 'app-add-associate',
  templateUrl: './add-associate.component.html',
  styleUrls: ['./add-associate.component.css']
})
export class AddAssociateComponent implements OnInit {

  associate_name = '';
  referral_code = '';
  constructor(private associateService:AssociateService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.associate_name);
    console.log(this.referral_code);
    let associateObj : associate = new associate();
    associateObj.associate_name = this.associate_name;
    associateObj.associate_phone_number = this.referral_code;
    if(associateObj.associate_name == '' || associateObj.associate_phone_number == ''){
      alert("All Fields are mandatory!");
      return;
    }else{
      this.associateService.save(associateObj).subscribe((data)=>{
        if(data == undefined){
          alert("Referral Code already exist! Try a different one");
          return;
        }
        console.log(JSON.parse(JSON.stringify(data)));
        alert(`Associate Added Successfully!`);
        this.associate_name = '';
        this.referral_code = '';
      })
    }
  }

}
