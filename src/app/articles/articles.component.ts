import { Component, OnInit } from '@angular/core';
import { ArticleService } from './service/article.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Article } from './model/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit{
  constructor(private service: ArticleService){}

  articles: Article[] = []

  ngOnInit(): void {
    this.service.list().subscribe(
      response => {
        this.articles = response
      },
      (error: HttpErrorResponse) => {
        console.error(error.message)
      }
    );
  }
}
