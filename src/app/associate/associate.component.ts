import { Component, OnInit } from '@angular/core';
import { AssociateService } from '../service/associate.service';
import { associate } from '../bean/associate';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.css']
})
export class AssociateComponent implements OnInit {

  displayedColumns = ['associate_id','associate_name','associate_referral_code','view-referrals']
  associates:associate[] = []
  constructor(private route:ActivatedRoute,private associateService:AssociateService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      if(data['id'] == -1){
        this.associateService.getAllAssociates().subscribe((data)=>{
          this.associates = JSON.parse(JSON.stringify(data));
          console.log(this.associates);
        });
      }else{
        this.associateService.getAllAssociatesById(data['id']).subscribe((data)=>{
          this.associates = JSON.parse(JSON.stringify(data));
          console.log(this.associates);
        })
      }
    });
    
  }

}
