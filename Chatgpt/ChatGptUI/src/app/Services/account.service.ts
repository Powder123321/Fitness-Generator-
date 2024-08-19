import { Injectable, OnInit } from '@angular/core';
import { User } from '../../Interfaces/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AccountService implements OnInit {
  baseUrl = 'http://localhost:5247/api/account';

  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {}

  login(model: any): Observable<User> {
    return this.http.post<User>(this.baseUrl + '/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
        return response;
      })
    );
  }

  checkUserLoggedIn() {
    return localStorage.getItem('user') != null;
  }

  logout() {
    localStorage.removeItem('user');

    this.router.navigate(['/aboutus']);
  }
}
