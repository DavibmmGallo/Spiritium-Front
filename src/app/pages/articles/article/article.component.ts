import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../core/service/article.service';
import { Article } from '../../../core/model/article';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit{
  title_id = ''
  authorNick = ''
  article: Article = {_id: '', author: '', description: '', release_date: new Date(), text: [], title: ''}

  constructor(
    private route: ActivatedRoute,
    private service: ArticleService
  ){
    this.title_id = route.snapshot.params['title_id'];
    this.authorNick = route.snapshot.params['author'];
  }

  ngOnInit(): void {
    this.service.getbyId(this.title_id).subscribe(
      response => {
        this.article = response
      },
      (error: HttpErrorResponse) => {
        console.error(error.message)
      }
    );
  }

}
