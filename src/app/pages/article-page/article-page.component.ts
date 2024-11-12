import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../../models/Article.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;

  // http request
  private http = inject(HttpClient);
  // Get article by Id
  article!: Article;


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });
   this.getArticleById(this.articleId)
  }

  getArticleById(id: number){
   this.http.get<Article>(`http://localhost:3000/articles/${id}`).subscribe(data =>{
    console.log(data);
    this.article = data;
   });
  }

}
