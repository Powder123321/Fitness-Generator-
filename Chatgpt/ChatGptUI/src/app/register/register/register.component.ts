import { Component, OnInit } from '@angular/core';

import { AccountService } from '../../Services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  model: any = {};
  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {}

  registerForm() {
    if (
      this.model.username &&
      this.model.password &&
      this.model.email &&
      this.model.password === this.model.confirmPassword
    ) {
      this.accountService.register(this.model).subscribe({
        next: (response) => {
          console.log('Register successful', response);
          this.router.navigate(['/aboutus']);
        },
        error: (error) => {
          console.log('Registered failed', error);
        },
      });
    }
  }
}
