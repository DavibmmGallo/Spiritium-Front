import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Article } from '../model/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private readonly API = 'http://localhost:8080/articles'

  constructor(private http: HttpClient) { }
  
 
  create(data: Article){
    /* It creates a new article */
    return this.http.post(this.API, data).pipe(take(1))
  }

  list(){
    /* Returns all articles */
    return this.http.get<Article[]>(this.API).pipe(take(1))
  }

  getbyId(id: string){
    /* Get a single article by ID */
    return this.http.get<Article>(this.API + `/${id}`).pipe(take(1))
  }
}
