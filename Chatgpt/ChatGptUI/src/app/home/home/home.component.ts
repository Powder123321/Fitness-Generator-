import { UserInfo } from './../../../Interfaces/UserInfo';
import { Component, OnInit } from '@angular/core';
import { OpenaiService } from '../../Services/openai.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  saveMessage() {}
  input: any = '';
  output: any = '';

  constructor(private openaiService: OpenaiService) {}
  leftGalleryItems = [
    { image: 'assets/meditation.jpeg', text: 'Textul 1' },
    { image: 'assets/food.webp', text: 'Textul 2' },
    // Adaugă mai multe imagini dacă este necesar
  ];

  rightGalleryItems = [
    { image: 'assets/runnin.webp', text: 'Textul 3' },
    { image: 'assets/todolist.webp', text: 'Textul 4' },
    // Adaugă mai multe imagini dacă este necesar
  ];
  sendMessage() {
    const userInfo = { userName: this.input, workoutProgram: '' };
    this.openaiService.sendMessageService(userInfo).subscribe({
      next: (response) => (
        (this.output = response), console.log(response, 'response from home')
      ),
      error: (error) => console.error('Error occurred:', error),
      complete: () => console.log('Request complete'),
    });
  }

  ngOnInit(): void {}
}
