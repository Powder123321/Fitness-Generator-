import { Component } from '@angular/core';
import { AccountService } from '../Services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isUserLoggedIn: boolean = false;
  model: any = {};

  constructor(private accountService: AccountService, private router: Router) {}
  ngOnInit(): void {}

  login() {
    if (this.model.username && this.model.password) {
      this.accountService.login(this.model).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          this.router.navigate(['/home']).then(() => {
            window.location.reload();
          });
        },
        error: (error) => console.log('Login error:', error),
      });
    }
  }
}
