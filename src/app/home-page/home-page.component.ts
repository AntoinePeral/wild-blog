import { Article } from '../models/Article.model';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {articles} from '../data/dataArticles'
import { ArticleComponent } from "../article/article.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, ArticleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  title = 'Bienvenue sur le Wild Blog de Antoine!';
  articles : Article[] = articles;
  isAnyArticlePublished = articles.some(article=> article.isPublished === true);
  messageFromChild = '';

  // Gestion d'une popup
  showPopup : boolean = false; // Pour gérer l'affichage de la popup
  hideNotification = false; // Pour gérer l'effet de disparition

  handleNotification(message: string): void{
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

  togglePublication(article : Article): void {
    article.isPublished = !article.isPublished;
  }


}
