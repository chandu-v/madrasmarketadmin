import { Component, ChangeDetectorRef } from '@angular/core';
import { AuthenticationService } from './service/authentication.service';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'madras-market-admin';
  token = null;
  mobileQuery: MediaQueryList;

  clicked_items = 'DashBoard'
  fillerNav = Array.from({ length: 5 }, (_, i) => `Nav Item ${i + 1}`);
  showNav = false;

  private _mobileQueryListener: () => void;

  constructor(private router: Router, private authService: AuthenticationService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit(): void {
    console.log("ok");
    console.log(sessionStorage.jwt);
    this.token = sessionStorage.jwt;
    console.log(this.token);
    this.authService.validateToken(sessionStorage.jwt).subscribe((data) => {
      console.log(data);
      if (data) {
        // this.router.navigateByUrl('/order/0');
        this.showNav = true;
      } else {
        this.showNav = false;
        this.clicked_items = 'Login'
        this.router.navigateByUrl('/login')
      }
    })
  }

  logOut() {
    this.showNav = false;
    sessionStorage.jwt = null;
    this.token = null;
    console.log(`In LogOut`);
    // window.location.replace('/login');
    this.router.navigateByUrl('/login');

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  clickedRoute(route: any) {
    this.authService.validateToken(sessionStorage.jwt).subscribe((data) => {
      console.log(data);
      if (data) {
        switch (route) {
          case 'collection':
            this.clicked_items = 'Collections'
            this.router.navigateByUrl('/collection')
            break;
          case 'product':
            this.clicked_items = 'Products'
            this.router.navigateByUrl('/products')
            break;
          case 'order':
            this.clicked_items = 'Orders'
            this.router.navigateByUrl('/order/0')
            break;
          case 'associate':
            this.clicked_items = 'Associates'
            this.router.navigateByUrl('/associate/-1')
            break;
          case 'delivery':
            this.clicked_items = 'Delivery Associates'
            this.router.navigateByUrl('/delivery_boy/0')
            break;
          case 'user':
            this.clicked_items = 'Users'
            this.router.navigateByUrl('/user/-1')
            break;
          case 'transaction':
            this.clicked_items = 'Transactions'
            this.router.navigateByUrl('/transaction')
            break;
        }
      } else {
        this.clicked_items = 'Login';
        this.router.navigateByUrl('/login');
        return;
      }
    })

  }
}
