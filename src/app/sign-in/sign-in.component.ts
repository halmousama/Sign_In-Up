import { Component } from '@angular/core';
import { SignInFormComponent } from '../sign-in-form/sign-in-form.component';
import { CommonModule } from '@angular/common';
import { SignUpFormComponent } from '../sign-up-form/sign-up-form.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, SignInFormComponent, SignUpFormComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  animationStep = 'signIn';
  startAnimations() {
    if (this.animationStep === 'signIn') {
      this.animationStep = 'signUpCenter';
      setTimeout(() => {
        this.animationStep = 'signUpFull';
        setTimeout(() => {
          this.animationStep = 'signUpFinal';
          setTimeout(() => {
            this.addComponent();
          }, 500);
        }, 1000);
      }, 500);
    }else {
      setTimeout(() => {
        this.animationStep = 'signUpCenter';
        setTimeout(() => {
          this.animationStep = 'signIn';
        }, 500);
      }, 500);
    }
  }

  addComponent() {
    this.animationStep = 'signUpFinal';
  }
}
