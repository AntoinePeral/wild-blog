import { Component, inject } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from '../../components/article-list/article-list.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, ArticleListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  title = 'Bienvenue sur le Wild Blog de Antoine!';
}
