import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})
export class ArticlePageComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;
  articleTitle!: string;
  // articleAuthor!: string;
  // articleContent!: string;
  // articleImage!: string;
  // articleComment!: string;
  // articleLikes!: number;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
      this.articleTitle = (params.get('title'))!
      // this.articleAuthor = (params.get('title'))!
      // this.articleContent = (params.get('title'))!
      // this.articleImage = (params.get('title'))!
      // this.articleComment = (params.get('title'))!
      // this.articleLikes = Number(params.get('title'))!
    });
  }

}
