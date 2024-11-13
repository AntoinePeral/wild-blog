import { Component, inject } from '@angular/core';
import {ArticleThumbnailComponent } from '../article-thumbnail/article-thumbnail.component';
//import { articles } from '../../data/dataArticles';
import { Article } from '../../models/Article.model';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [ArticleThumbnailComponent, CommonModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent {

  // Inject ApiService
  private apiService = inject(ApiService);
  articles$!: Observable<Article[]>;

  public messageFromChild = '';

  // Gestion d'une popup
  public showPopup : boolean = false; // Pour gérer l'affichage de la popup
  public hideNotification = false; // Pour gérer l'effet de disparition

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.articles$ = this.apiService.getArticles();
   
  }


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
    console.log(article,"je suis dans le toggle");
    
    article.isPublished = !article.isPublished;
    console.log(article.isPublished);
  }
  

}
