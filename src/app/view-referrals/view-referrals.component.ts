import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { ReferralService } from '../service/referral.service';
import { referral } from '../bean/referral';

@Component({
  selector: 'app-view-referrals',
  templateUrl: './view-referrals.component.html',
  styleUrls: ['./view-referrals.component.css']
})
export class ViewReferralsComponent implements OnInit {

  referrals:referral [];
  displayedColumns = ['referral_id','order_id','associate_id','time']
  constructor(private route:ActivatedRoute,private referralService:ReferralService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      if(data['id'] == -1){
        this.referralService.getAllReferrals().subscribe((data)=>{
          this.referrals = JSON.parse(JSON.stringify(data));
        });
      }else{
        this.referralService.getAllReferralsByAssociateId(data['id']).subscribe((data)=>{
          this.referrals = JSON.parse(JSON.stringify(data));
          if(this.referrals.length == 0){
            alert("No Referrals Yet");
          }
        });
      }
    });
  }

}
