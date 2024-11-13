import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Article } from '../../models/Article.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-thumbnail',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './article-thumbnail.component.html',
  styleUrl: './article-thumbnail.component.scss'
})
export class ArticleThumbnailComponent {
  @Input() article!: Article;
  @Output() dataEmitFromChild: EventEmitter<string> = new EventEmitter<string>();

  router: Router = inject(Router);
  newCommentList : string[] =[];

  sendDataToParent(){
    console.log('hola');
    this.article.isLiked++;
    this.dataEmitFromChild.emit(`l'article "${this.article.title}" vient d'être liké ❤`);
  }

  goToArticleDetails(articleId: number, articleTitle: string){
    this.router.navigate(['/article',articleId, articleTitle])
  }

  togglePublication(): void {
    console.log('toggle du component');

    this.article.isPublished = !this.article.isPublished;
  }

  onSubmit(){
    console.log('hello');
    // Ajout du commentaire
    this.newCommentList.push(this.article.comment);
    // Suppression du commentaire dans le input pour rénitialiser le champ
    this.article.comment = '';
  }
}
