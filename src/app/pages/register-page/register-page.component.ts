import { Component } from '@angular/core';
import { SignupFormComponent } from "../../components/signup-form/signup-form.component";

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [SignupFormComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

}
