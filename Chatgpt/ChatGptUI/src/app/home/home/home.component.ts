import { Component, OnInit } from '@angular/core';
import { OpenaiService } from '../../Services/openai.service';
import { UserInfo } from '../../../Interfaces/UserInfo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  input: UserInfo = {
    gender: '',
    weight: 0,
    height: 0,
    age: 0,
    token: '',
    workoutprogram: '',
  };

  output: any = '';

  constructor(private openaiService: OpenaiService) {}
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
