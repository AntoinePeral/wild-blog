import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component'
import { authGuard } from './guards/auth.guard';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { roleGuard } from './guards/role.guard';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { visitorOnlyGuard } from './guards/visitor-only.guard';

export const routes: Routes = [
  {path:'', component:HomePageComponent, pathMatch: 'full'},
  {path:'contact', component: ContactPageComponent},
  {path:'signup', component: SignupFormComponent, canActivate: [visitorOnlyGuard]},
  {path:'login', component: LoginFormComponent, canActivate: [visitorOnlyGuard]},
  {path:'profile', component: ProfilePageComponent, canActivate: [authGuard]},
  {path:'admin', component: AdminPageComponent, canActivate: [roleGuard('ROLE_ADMIN')]},
  // {path: 'login', component: LoginPageComponent,canActivate: [visitorOnlyGuard]}
  // {path:'article/:id/:title', component:ArticlePageComponent},
  {path:'articles/:id', component:ArticlePageComponent},
  {path:'**', component:NotFoundComponent}
];
