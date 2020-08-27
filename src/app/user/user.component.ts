import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../bean/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns = ["user_id","user_name","email_id","phone_number"];
  users:User[];
  constructor(private route:ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data)=>{
      if(data['id'] == -1){
        this.userService.getAllUsers().subscribe((data)=>{
          this.users = JSON.parse(JSON.stringify(data));
          console.log(this.users);
        })
      }else{
        this.userService.getAllUsersById(data['id']).subscribe((data)=>{
          this.users = JSON.parse(JSON.stringify(data));
          console.log(this.users);
        })
      }
    })
    
  }

}
