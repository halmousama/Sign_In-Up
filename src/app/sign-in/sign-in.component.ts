import { Component } from '@angular/core';
import { SignInFormComponent } from '../sign-in-form/sign-in-form.component';
import { CommonModule } from '@angular/common';
import { SignUpFormComponent } from '../sign-up-form/sign-up-form.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, SignInFormComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  
}
