import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {
  authorName = ''

  constructor(private route: ActivatedRoute){
    this.authorName = route.snapshot.params['author'];
  }

}
