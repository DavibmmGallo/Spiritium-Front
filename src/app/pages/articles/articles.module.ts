import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ArticlesComponent } from './articles.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleComponent } from './article/article.component';
import { AuthorComponent } from './author/author.component';
import { ArticleCreateComponent } from './article/article-create/article-create.component';

@NgModule({
  declarations: [  
    ArticlesComponent,
    ArticleComponent,
    AuthorComponent,
    ArticleCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesModule { }
