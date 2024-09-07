import { Component } from '@angular/core';
import { AccountService } from '../Services/account.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  isUserLoggedIn: boolean = false;
  model: any = {};

  constructor(
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService
  ) {}
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
        error: (error) => this.toastr.error(error.error),
      });
    }
  }
}
