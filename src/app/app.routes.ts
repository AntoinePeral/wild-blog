import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { authGuard } from './guards/auth.guard';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { roleGuard } from './guards/role.guard';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { visitorOnlyGuard } from './guards/visitor-only.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

export const routes: Routes = [
  {path:'', component:HomePageComponent, pathMatch: 'full'},
  {path:'contact', component: ContactPageComponent},
  {path:'signup', component: RegisterPageComponent, canActivate: [visitorOnlyGuard]},
  {path:'login', component: LoginPageComponent, canActivate: [visitorOnlyGuard]},
  {path:'profile', component: ProfilePageComponent, canActivate: [authGuard]},
  {path:'admin', component: AdminPageComponent, canActivate: [roleGuard('ROLE_ADMIN')]},
  // {path: 'login', component: LoginPageComponent,canActivate: [visitorOnlyGuard]}
  // {path:'article/:id/:title', component:ArticlePageComponent},
  {path:'articles/:id', component:ArticlePageComponent},
  {path:'**', component:NotFoundComponent}
];
