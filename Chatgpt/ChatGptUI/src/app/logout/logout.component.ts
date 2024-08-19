import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
})
export class LogoutComponent implements OnInit {
  constructor(private accountService: AccountService, private router: Router) {}
  ngOnInit(): void {}
  logout() {
    this.accountService.logout();
  }
}
