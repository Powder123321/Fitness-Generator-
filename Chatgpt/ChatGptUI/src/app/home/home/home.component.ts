import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OpenaiService } from '../../Services/openai.service';
import { response } from 'express';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  message: string | null = null;
  input: string = '';
  output: string = '';
  constructor(
    private http: HttpClient,
    private router: Router,
    private openaiService: OpenaiService
  ) {}
  sendMessage() {
    this.openaiService.sendMessageService(this.input).subscribe({
      next: (response) => (
        (this.output = response), console.log(response, 'response from home')
      ),

      error: (error) => console.error('Error occurred:', error),
      complete: () => console.log('Request complete'),
    });
  }

  ngOnInit(): void {}
}
