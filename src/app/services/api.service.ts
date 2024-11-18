import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Article } from '../models/Article.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl : string = 'http://localhost:3000/articles';
  private http: HttpClient = inject(HttpClient);
  constructor() { }

  getArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(this.apiUrl)
  }

  getArticleById(id: number): Observable<Article>{
    return this.http.get<Article>(`${this.apiUrl}/${id}`)
   }
 
}
