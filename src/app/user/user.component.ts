import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../bean/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns = ["user_id","user_name","email_id","phone_number"];
  users:User[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data)=>{
      // console.log(data);
      this.users = JSON.parse(JSON.stringify(data));
      console.log(this.users);
    })
  }

}
