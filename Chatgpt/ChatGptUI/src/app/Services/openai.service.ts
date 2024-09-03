import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from '../../Interfaces/UserInfo';

@Injectable({
  providedIn: 'root',
})
export class OpenaiService implements OnInit {
  baseUrl = 'http://localhost:5247/api/Program/GenerateWorkoutProgram';

  constructor(private http: HttpClient) {}
  ngOnInit(): void {}

  sendMessageService(userInfo: UserInfo): Observable<string> {
    console.log(userInfo);
    return this.http.post<string>(this.baseUrl, userInfo);
  }
}
