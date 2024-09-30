import { Article } from '../models/Article';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  title = 'Bienvenue sur le Wild Blog de Antoine Peral !';
  popularArticleColor = 'green';



  articles = [
    { 
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
