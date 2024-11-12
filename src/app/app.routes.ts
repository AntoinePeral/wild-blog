import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

export const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'contact', component: ContactPageComponent},
  {path:'signup', component: SignupFormComponent},
  // {path:'article/:id/:title', component:ArticlePageComponent},
  {path:'articles/:id', component:ArticlePageComponent},
  {path:'**', component:NotFoundComponent}
];
