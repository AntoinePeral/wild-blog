import { Component } from '@angular/core';
import {ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';
import { articles } from '../../data/dataArticles';
import { Article } from '../../models/Article.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleThumbnailComponent, CommonModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent {

  articles : Article[] = articles;
  isAnyArticlePublished = articles.some(article=> article.isPublished === true);
  messageFromChild = '';

  // Gestion d'une popup
  showPopup : boolean = false; // Pour gérer l'affichage de la popup
  hideNotification = false; // Pour gérer l'effet de disparition

  dataRecieveFromChild(message: string): void{
    this.hideNotification = false; // S'assurer qu'elle n'est pas cachée
    this.showPopup = true;
    this.messageFromChild = message;
    console.log(this.messageFromChild);
    

    // Après 5 secondes, appliquer la classe pour cacher progressivement
    setTimeout(() => {
      this.hideNotification = true; // Fait disparaître la pop-up progressivement
    }, 5000);

    // Après un peu plus de temps, masquer la pop-up complètement
    setTimeout(() => {
      this.showPopup = false; // Masquer complètement la pop-up
    }, 6000); // 1 
  }

  togglePublication(article: Article): void {
    article.isPublished = !article.isPublished;
    this.isAnyArticlePublished = articles.some(article=> article.isPublished === true);
    console.log(article.isPublished);
    console.log(this.isAnyArticlePublished);
  }
}
