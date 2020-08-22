import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user_name = "";
  password = "";
  
  constructor(private router:Router,private authenticateService:AuthenticationService) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.user_name);
    console.log(this.password);
    this.authenticateService.getToken(this.user_name,this.password).subscribe((data)=>{
      let response = JSON.parse(JSON.stringify(data));
      console.log(response);
      console.log(response.body.jwt);
      if(response.body.jwt === "BadCredentials"){
        alert("Wrong Credentials");
        this.user_name = "";
        this.password = "";
      }else{
         //This is where its broke - below:    
         sessionStorage.setItem("jwt",response.body.jwt);   
    window.location.replace('/order/0');

        //  this.router.navigateByUrl('/');
      }
    });
  }
}
