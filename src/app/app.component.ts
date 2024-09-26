import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from "./article/article.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Article = {
  title: string;
  author: string;
  content: string;
  image: string;
  imageTitle: string;
  isPublished: boolean, 
  comment: string; 
  likes: number; 
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, ArticleComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Bienvenue sur le Wild Blog de Antoine Peral !';
  popularArticleColor = 'green';



  articles = [
    { 
      title: 'Angular 16: Les nouveautés', 
      author: 'Alice', 
      content: 'Les nouveautés d\'Angular 16 incluent...', 
      image: 'https://via.placeholder.com/350x150',
      imageTitle: 'firstImg',
      isPublished: true, 
      comment: '', 
      likes: 120 
    },
    { 
      title: 'Développer une API REST', 
      author: 'Bob', 
      content: 'Développer une API REST nécessite...', 
      image: 'https://via.placeholder.com/350x150',
      imageTitle: 'secondImg',
      isPublished: false, 
      comment: '', 
      likes: 75 
    },
    { 
      title: 'Pourquoi TypeScript est essentiel ?', 
      author: 'Charlie', 
      content: 'TypeScript apporte de la robustesse...', 
      image: 'https://via.placeholder.com/350x150',
      imageTitle: 'thirdImg',
      isPublished: true, 
      comment: '', 
      likes: 200 
    },
    { 
      title: 'Pourquoi manger est essentiel ?', 
      author: 'Charlie', 
      content: 'TypeScript apporte de la robustesse...', 
      image: 'https://via.placeholder.com/350x150',
      imageTitle: 'thirdImg',
      isPublished: true, 
      comment: '', 
      likes: 50 
    }
  ];

  isAnyArticlePublished = this.articles.some((article)=> article.isPublished === true);

  togglePublication(article : Article): void {
    article.isPublished = !article.isPublished;
  }
}
