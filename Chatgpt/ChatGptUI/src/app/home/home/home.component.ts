import { Component, OnInit } from '@angular/core';
import { OpenaiService } from '../../Services/openai.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private openaiService: OpenaiService, private router: Router) {}
  saveMessage() {
    this.router.navigate(['/savings']);
  }
  input: any = '';
  output: any = '';

  leftGalleryItems = [
    {
      image: 'assets/meditation.jpeg',
      text: 'Try our 10-minute meditation session.',
    },
    { image: 'assets/food.webp', text: 'Taste our healthy recipes.' },
    // Adaugă mai multe imagini dacă este necesar
  ];

  rightGalleryItems = [
    { image: 'assets/runnin.webp', text: 'Join our running session..' },
    { image: 'assets/todolist.webp', text: 'Try our to-do list..' },
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
