import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel support
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'app-authors',
  standalone: true,
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  imports: [FormsModule] // Add FormsModule here
})
export class AuthorsComponent {
  authorId!: string;
  author: any = null;
  message: string = '';

  constructor(private authorsService: AuthorsService) {}

  onSubmit() {
    this.authorsService.getAuthorById(this.authorId).subscribe({
      next: (author) => {
        this.author = author;
        this.message = '';
      },
      error: () => {
        this.message = 'Author not found';
        this.author = null;
      }
    });
  }
}
