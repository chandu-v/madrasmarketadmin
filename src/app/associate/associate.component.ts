import { Component, OnInit } from '@angular/core';
import { AssociateService } from '../service/associate.service';
import { associate } from '../bean/associate';

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.css']
})
export class AssociateComponent implements OnInit {

  displayedColumns = ['associate_id','associate_name','associate_referral_code','view-referrals']
  associates:associate[] = []
  constructor(private associateService:AssociateService) { }

  ngOnInit(): void {
    this.associateService.getAllAssociates().subscribe((data)=>{
      this.associates = JSON.parse(JSON.stringify(data));
      console.log(this.associates);
    })
  }

}
