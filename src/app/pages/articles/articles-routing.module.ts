import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ArticlesComponent } from './articles.component';
import { AuthorComponent } from './author/author.component';
import { ArticleComponent } from './article/article.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { ArticleCreateComponent } from './article/article-create/article-create.component';

const articlesRoutes: Routes = [
  {
    path: '',
    component: ArticlesComponent
  },
  {
    path: 'g/:author',
    component: AuthorComponent
  },
  {
    path: 'g/:author/:title_id',
    component: ArticleComponent
  },
  {
    path: 'new',
    component: ArticleCreateComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(articlesRoutes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
