import { Component } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'madras-market-admin';
  token = null;

  constructor(private router:Router,private authService:AuthenticationService){}
  ngOnInit(): void {
    console.log("ok");
    console.log(sessionStorage.jwt);
    this.token = sessionStorage.jwt;
    console.log(this.token);
    this.authService.validateToken(sessionStorage.jwt).subscribe((data)=>{
      console.log(data);
      if(data){
        // this.router.navigateByUrl('/order/0');
      }else{
        this.router.navigateByUrl('/login')
      }
    })
  }

  logOut(){
    sessionStorage.jwt = null;
    this.token = null;
    console.log(`In LogOut`);
    // window.location.replace('/login');
    this.router.navigateByUrl('/login');
  }
}
