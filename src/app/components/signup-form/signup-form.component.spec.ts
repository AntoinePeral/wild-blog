import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFormComponent } from './signup-form.component';
import { FormGroup } from '@angular/forms';

describe('SignupFormComponent', () => {
  let component: SignupFormComponent;
  let fixture: ComponentFixture<SignupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid when empty', () => {
    expect(component.signUpForm.valid).toBeFalse();
  });

  it('should be valid when a correct email is entered', () => {
    component.signUpForm.controls['email'].setValue('test@example.com');
    component.signUpForm.controls['username'].setValue('JeanMich');
    const passwordsGroup = component.signUpForm.controls['passwords'] as FormGroup;
    passwordsGroup.controls['password'].setValue('SuperSecure123!');
    passwordsGroup.controls['confirmPassword'].setValue('SuperSecure123!');
    expect(component.signUpForm.valid).toBeTrue();
  });


  it('should enable the submit button when form is valid', () => {
    component.signUpForm.get('email')?.setValue('test@example.com');
    component.signUpForm.get('username')?.setValue('JeanMich');
    component.signUpForm.get('passwords.password')?.setValue('SuperSecure123!');
    component.signUpForm.get('passwords.confirmPassword')?.setValue('SuperSecure123!');
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button');
    expect(button.disabled).toBeFalse();
  });
});
