import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.scss'
})
export class SignupFormComponent {

  formBuilder = inject(FormBuilder);

  // Avec le formBuilder 
  // signUpForm = this.formBuilder.group({
  //   username: ['', [Validators.required, Validators.minLength(3)]],
  //   email: ['', [Validators.required, Validators.email]],
  //   passwords: this.formBuilder.group({
  //     password: ['', [Validators.required, this.securePasswordValidator()]],
  //     confirmPassword: ['']
  //   }, {validators: this.passwordMatchValidator()})
  // });

  // Avec le FormGroup et FormControl
  signUpForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    passwords: new FormGroup({
      password: new FormControl ('',[Validators.required, this.securePasswordValidator()]), 
      confirmPassword: new FormControl (''),
    }, {validators: this.passwordMatchValidator()}),

  })


  passwordMatchValidator(): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get('password')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;
      return password === confirmPassword ? null : { passwordsMismatch: true };
    };
  }
  
  securePasswordValidator(): ValidatorFn {
    return (formControl: AbstractControl): ValidationErrors | null => {
      const value = formControl.value || '';
      
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const isValidLength = value.length >= 12;
      
      const passwordValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && isValidLength;
      
      return passwordValid ? null : { securePassword: true };
    };
  }
  
    onSubmit(){
      if (this.signUpForm.valid){
        console.log('Formulaire envoyé avec succès', this.signUpForm.value);
      } else {
        console.log('Formulaire invalide');
      }
    }
}
