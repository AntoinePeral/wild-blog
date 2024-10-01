import { Article } from '../models/Article.model';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {articles} from '../data/dataArticles'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  title = 'Bienvenue sur le Wild Blog de Antoine!';
  popularArticleColor = 'green';
  router: Router = inject(Router);

  articles : Article[] = articles;

  isAnyArticlePublished = this.articles.some((article)=> article.isPublished === true);

  togglePublication(article : Article): void {
    article.isPublished = !article.isPublished;
  }

  goToArticleDetails(articleId: number, articleTitle: string){
    this.router.navigate(['/article',articleId, articleTitle])
  }
}
