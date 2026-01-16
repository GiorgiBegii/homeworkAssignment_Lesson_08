import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration-component.html',
  styleUrl: './registration-component.scss'
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      birthdate: ['', [Validators.required, this.minAgeValidator(14)]],
      password: ['', [Validators.required, Validators.minLength(3), this.passwordComplexityValidator()]],
      confirmPassword: ['', Validators.required],
      hobbies: this.fb.array([this.fb.control('')])
    }, { validators: this.passwordMatchValidator });
  }

  // Hobbies helper
  get hobbies(): FormArray {
    return this.registrationForm.get('hobbies') as FormArray;
  }

  addHobby() {
    this.hobbies.push(this.fb.control(''));
  }

  removeHobby(index: number) {
    if (this.hobbies.length > 1) {
      this.hobbies.removeAt(index);
    }
  }

  // Validators
  passwordComplexityValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      const value = control.value;
      if (!value) return null;
      const hasCapital = /[A-Z]/.test(value);
      const hasSpecial = /[!#$%&]/.test(value);
      return hasCapital && hasSpecial ? null : { passwordComplexity: true };
    };
  }

  passwordMatchValidator(group: AbstractControl) {
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return password === confirm ? null : { passwordMismatch: true };
  }

  minAgeValidator(minAge: number): ValidatorFn {
    return (control: AbstractControl) => {
      const value = control.value;
      if (!value) return null;

      const birthDate = new Date(value);
      const today = new Date();

      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const dayDiff = today.getDate() - birthDate.getDate();

      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }

      return age >= minAge ? null : { minAge: { requiredAge: minAge, actualAge: age } };
    };
  }

  // Submit
  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form Value:', this.registrationForm.value);
      alert(JSON.stringify(this.registrationForm.value, null, 2));
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
}
