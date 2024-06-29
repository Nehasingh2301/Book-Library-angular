import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  book: Book = { title: '', author: '', description: '' };

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void { }

  createBook(): void {
    this.bookService.createBook(this.book).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }
}
