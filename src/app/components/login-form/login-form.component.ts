import { Component, inject } from '@angular/core';
import { User } from '../../models/User.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {  

  constructor(private toastr: ToastrService) {}

  user: User = {
    email: '',
    password: '',
  };

  private authService = inject(AuthService);
  private router = inject(Router);

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authService.login(this.user.email, this.user.password).subscribe({
        next: () =>{
          this.showSuccess();
          this.router.navigate(['/profile']); // ou autre redirection
        },
        error: () => alert('Email ou mot de passe incorrect'),
      });
    }
  }

}
