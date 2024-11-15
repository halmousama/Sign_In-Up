import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersPasswordsDBService } from '../users-passwords-db.service';

@Component({
  selector: 'app-sign-up-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.css',
})
export class SignUpFormComponent {
  email: string = '';
  isEmailValid: boolean | null = null;
  emailValidMsg: string = '';
  emailInvalidMsg: string = '';

  username: string = '';
  isUsernameValid: boolean | null = null;
  usernameValidMsg: string = '';
  usernameInvalidMsg: string = '';

  password: string = '';
  isPasswordValid: boolean | null = null;
  pswdValidMsg: string = '';
  pswdInvalidMsg: string = '';

  users: {
    id: number;
    email: string;
    username: string;
    password: string;
  }[];

  waitingSignUp: boolean = false;
  waitingSignUpMsg: string = 'Waiting for sign up...';

  checkEmail() {
    if (this.email === '') {
      this.isEmailValid = null;
      this.emailValidMsg = '';
      this.emailInvalidMsg = '';
    } else if (
      this.email.indexOf('@') === -1 ||
      this.email.indexOf('.') === -1
    ) {
      this.isEmailValid = false;
      this.emailValidMsg = '';
      this.emailInvalidMsg = 'Email is not correct! Missing @ or .';
    } else {
      let checkE: Boolean = false;
      this.users.forEach((user) => {
        if (user.email === this.email) {
          checkE = true;
        }
      });
      if (checkE) {
        this.isEmailValid = false;
        this.emailValidMsg = '';
        this.emailInvalidMsg = 'Email is already in use';
      } else {
        this.isEmailValid = true;
        this.emailValidMsg = 'Email is valid';
        this.emailInvalidMsg = '';
      }
    }
  }
  checkUsername() {
    if (this.username === '') {
      this.isUsernameValid = null;
      this.usernameValidMsg = '';
      this.usernameInvalidMsg = '';
    } else {
      let checkU: Boolean = false;
      this.users.forEach((user) => {
        if (user.username === this.username) {
          checkU = true;
        }
      });
      if (checkU) {
        this.isUsernameValid = false;
        this.usernameValidMsg = '';
        this.usernameInvalidMsg = 'Username is already in use';
      } else {
        this.isUsernameValid = true;
        this.usernameValidMsg = 'Username is valid';
        this.usernameInvalidMsg = '';
      }
    }
  }
  isKeyEnter(event: KeyboardEvent, htmlInput: HTMLInputElement) {
    if (event.key === 'Enter') {
      htmlInput.focus();
    }
  }
  isKeyEnterForGo(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.goSignUp();
    }
  }
  checkPswd() {
    if (this.password === '') {
      this.isPasswordValid = null;
      this.pswdValidMsg = '';
      this.pswdInvalidMsg = '';
    } else if (this.password.length < 8) {
      this.isPasswordValid = false;
      this.pswdValidMsg = '';
      this.pswdInvalidMsg = 'Password must be at least 8 characters';
    }
    // test capital letter, small letter, number
    else if (
      !(
        this.password.match(/[a-z]/) &&
        this.password.match(/[A-Z]/) &&
        this.password.match(/[0-9]/)
      )
    ) {
      this.isPasswordValid = false;
      this.pswdValidMsg = '';
      this.pswdInvalidMsg =
        'Password must contain at least one capital letter, small letter, number';
    } else {
      this.isPasswordValid = true;
      this.pswdValidMsg = 'Password is valid';
      this.pswdInvalidMsg = '';
    }
  }
  goSignUp() {
    if (this.isEmailValid && this.isUsernameValid && this.isPasswordValid) {
      this.users.push({
        id: this.users.length + 1,
        email: this.email,
        username: this.username,
        password: this.password,
      });
      this.waitingSignUp = true;
      setTimeout(() => {
        this.waitingSignUpMsg = 'Sign up is successful.      Click X to Sign In';
      }, 3000);
      this.email = '';
      this.username = '';
      this.password = '';
      this.isEmailValid = null;
      this.isUsernameValid = null;
      this.isPasswordValid = null;
      this.emailValidMsg = '';
      this.emailInvalidMsg = '';
      this.usernameValidMsg = '';
      this.usernameInvalidMsg = '';
      this.pswdValidMsg = '';
      this.pswdInvalidMsg = '';
    }
  }

  constructor(public usersData: UsersPasswordsDBService) {
    this.users = this.usersData.users;
  }
}
