import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080';
  private http = inject(HttpClient);
  private router = inject(Router);

    login(email: string, password: string): Observable<string> {
    return this.http
      .post(`${this.apiUrl}/auth/login`, { email, password }, { responseType: 'text' })
      .pipe(
        tap((token) => {
          this.saveToken(token);
          console.log(token)
        })
      );
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  clearToken(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;
    try {
      const decodedToken: any = jwtDecode(token);
      const expiryDate = new Date(decodedToken.exp * 1000);
      if (expiryDate < new Date()) {
          this.clearToken();
          return false;
      }
      return true;
    } catch {
      this.clearToken();
      return false;
    }
  }

  getUserRole(): [] | null {
    const token = this.getToken();
    if (!token) return null;
    try {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.roles || null;
    } catch {
      return null;
    }
  }

  verifyToken(): void {
    const token = this.getToken();
    if (!token) return;
  
    try {
      const decodedToken: any = jwtDecode(token);
      const expiryDate = new Date(decodedToken.exp * 1000);
      if (expiryDate < new Date()) {
        this.clearToken();
      }
    } catch {
      this.clearToken();
    }
  }

  logout(){
    this.clearToken();
    this.router.navigate(['/'])
  }
}
