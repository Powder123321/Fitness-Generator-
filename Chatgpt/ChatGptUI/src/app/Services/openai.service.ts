import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, model, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenaiService implements OnInit {
  baseUrl = 'http://localhost:5247/api/prompt?';

  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit(): void {}

  sendMessageService(input: string): Observable<any> {
    console.log(input, 'this is the input');

    const params = new HttpParams().set('input', input);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const response = this.http.get(this.baseUrl, {
      params,
      headers,
      responseType: 'text',
    }) as Observable<string>;

    console.log(response, 'response from service');

    return response;
  }
}
