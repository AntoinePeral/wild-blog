import { ApiService } from './../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { Component, inject, } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../../models/Article.model';
import { Observable, Subscription, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {

  constructor(private toastr: ToastrService) {}
  route: ActivatedRoute = inject(ActivatedRoute);

  // Get article by Id
  articleId!: number;

  // Observable article
  article$!: Observable<Article>;
  private apiService = inject(ApiService);
 
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
      this.article$ = this.apiService.getArticleById(this.articleId) // pas besoin de subscribe car l'asynchrone est traité coté Html
      this.showSuccess();
    });
    
    console.log(this.article$);
  }


}


// export class ArticlePageComponent {
//   private route = inject(ActivatedRoute);
//   private apiService = inject(ApiService);

//   article!: Article;

//   ngOnInit(): void {
//     this.route.paramMap
//       .pipe(
//         switchMap((params: ParamMap) => {
//           const id = Number(params.get('id'));
//           return this.apiService.getArticleById(id);
//         })
//       )
//       .subscribe({
//         next: (article) => {
//           this.article = article;
//           console.log('Article reçu via switchMap :', this.article);
//         },
//         error: (err) => {
//           console.error('Erreur de chargement :', err);
//         }
//       });
//   }
// }
