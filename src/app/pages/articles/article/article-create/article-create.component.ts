import { Component } from '@angular/core';
import { ArticleService } from '../../../../core/service/article.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Article } from '../../../../core/model/article';
import { AuthService } from '../../../../shared/service/auth.service';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrl: './article-create.component.css'
})
export class ArticleCreateComponent {
  newArticle: Article = {
    _id: '',
    title: '',
    description: '',
    author: '',
    text: '',
    release_date: new Date()
  }

  constructor(
    private service: ArticleService,
    private authservice: AuthService,
    private router: Router
  ){
      this.newArticle.author = authservice.getDecodedToken().name;
  }

  submitForm(): void{
    this.service.create(this.newArticle).subscribe(
      ()=> {
        this.router.navigate(['/articles']);
      },
      (error: HttpErrorResponse) => {
        console.error(error);
        alert(error);
      }
    );
  }

  resizeTextArea(event: Event): void{
    const textarea = event.target as HTMLTextAreaElement
    if (textarea !== null){
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }
}
