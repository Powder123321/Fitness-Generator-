import { Router } from '@angular/router';
import { AccountService } from './../Services/account.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent implements OnInit {
  ngOnInit(): void {}

  constructor(private accountService: AccountService, private router: Router) {}

  sendHome() {
    if (this.accountService.checkUserLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }
}
