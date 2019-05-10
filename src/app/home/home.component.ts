import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  get userName() {
    return this.authService.userName;
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
