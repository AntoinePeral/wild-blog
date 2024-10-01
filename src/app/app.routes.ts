import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { SignupFormComponent } from './pages/signup-form/signup-form.component';

export const routes: Routes = [
  {path:'contact', component: ContactFormComponent},
  {path:'signup', component: SignupFormComponent},
  {path:'article/:id/:title', component:ArticlePageComponent},
  {path:'', component:HomePageComponent, pathMatch: 'full'},
  {path:'**', component:NotFoundComponent}
];
