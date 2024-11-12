import { HttpClient } from '@angular/common/http';
import { Component, inject, } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../../models/Article.model';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule],
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
  articleSubscription!: Subscription;


  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });
   this.getArticleById(this.articleId)
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.articleSubscription.unsubscribe();
  }

  getArticleById(id: number){
   this.articleSubscription =this.http.get<Article>(`http://localhost:3000/articles/${id}`).subscribe(data =>{
    console.log(data);
    this.article = data;
   });
  }

}
