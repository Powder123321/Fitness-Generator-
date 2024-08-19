import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../Services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn: boolean = false;

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {
    this.isUserLoggedIn = this.accountService.checkUserLoggedIn();
  }

  logout() {
    this.accountService.logout();
    this.isUserLoggedIn = false;
  }
}
