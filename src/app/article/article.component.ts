import { Component, inject, Input } from '@angular/core';
import { Article } from '../models/Article.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {
  @Input() article!: Article;
  router: Router = inject(Router);

  newComment : string ='';

  goToArticleDetails(articleId: number, articleTitle: string){
    this.router.navigate(['/article',articleId, articleTitle])
  }

  onSubmit(){
    console.log('hello');
    // Ajout du commentaire
    this.newComment = this.article.comment;
    // Suppression du commentaire dans le input pour rénitialiser le champ
    this.article.comment = '';
  }
}
