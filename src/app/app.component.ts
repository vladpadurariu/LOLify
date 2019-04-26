import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from './_services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {


  constructor(
    private loginService: LoginService
  ) {}

  ngOnInit() {}

  ngOnDestroy() {}

  logOut() {
    this.loginService.logOut();
  }

  isLoggedIn() {
    this.loginService.isLoggedIn();
  }

}
