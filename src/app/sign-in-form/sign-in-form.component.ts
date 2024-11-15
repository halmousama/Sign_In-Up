import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UsersPasswordsDBService } from '../users-passwords-db.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-in-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [UsersPasswordsDBService],
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.css',
})
export class SignInFormComponent {
  // ---------- attributes ----------
  usernameOrEmail: string = '';
  isUsernameOrEmailValid: boolean | null = null;
  usernameOrEmailValidMsg: string = '';
  usernameOrEmailInvalidMsg: string = '';

  username: string = '';
  isUsernameValid: boolean | null = null;
  usernameValidMsg: string = '';
  usernameInvalidMsg: string = '';

  password: string = '';
  isPasswordValid: boolean | null = null;
  passwordValidMsg: string = '';
  passwordInvalidMsg: string = '';

  forgetPassword: boolean = false;
  users: { id: number; email: string; username: string; password: string }[];
  recoveryEmailSent: boolean = false;
  pswdVisibility: boolean = false;

  // ---------- methods ----------

  checkUsername() {
    let checkUser = false;
    this.users.forEach((user) => {
      if (user.username === this.username) {
        checkUser = true;
      }
    });
    if (checkUser) {
      this.isUsernameValid = true;
      this.usernameValidMsg = 'Username is valid';
    } else {
      this.isUsernameValid = false;
      this.usernameInvalidMsg = 'Username is invalid';
    }
    if (this.username === '') {
      this.isUsernameValid = null;
    }
  }
  isKeyEnterForUsername(event: KeyboardEvent, passwordInput: HTMLInputElement) {
    if (event.key === 'Enter') {
      passwordInput.focus();
    }
  }
  isPswdEmpty() {
    if (this.password === '') {
      this.isPasswordValid = null;
    }
  }
  isKeyEnterForPswd(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onGo();
    }
  }
  onGo() {
    if (!this.forgetPassword) {
      if (this.isUsernameValid) {
        let checkPsswd = false;
        this.users.forEach((user) => {
          if (
            user.username === this.username &&
            user.password === this.password
          ) {
            checkPsswd = true;
          }
        });
        if (checkPsswd) {
          this.isPasswordValid = true;
          this.passwordValidMsg = 'waiting for sign in...';
          this.passwordInvalidMsg = '';
        } else {
          this.isPasswordValid = false;
          this.passwordValidMsg = '';
          this.passwordInvalidMsg = 'Password is incorrect';
        }
      } else {
        this.isPasswordValid = null;
        this.usernameInvalidMsg = 'Please enter a valid username';
      }
    } else {
      if (this.isUsernameOrEmailValid) {
        this.forgetPassword = false;
        this.recoveryEmailSent = true;
      }
    }
  }
  checkUsernameOrEmail() {
    let checkUser = false;
    this.users.forEach((user) => {
      if (
        user.username === this.usernameOrEmail ||
        user.email === this.usernameOrEmail
      ) {
        checkUser = true;
      }
    });
    if (checkUser) {
      this.isUsernameOrEmailValid = true;
      this.usernameOrEmailValidMsg =
        'Press Enter or Click GO to send a recovery email';
    } else {
      this.isUsernameOrEmailValid = false;
      this.usernameOrEmailInvalidMsg = 'Username or Email is invalid';
    }
    if (this.usernameOrEmail === '') {
      this.isUsernameOrEmailValid = null;
      this.usernameOrEmailValidMsg = '';
      this.usernameOrEmailInvalidMsg = '';
    }
  }
  isKeyEnterForUsernameOrEmail(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onGo();
    }
  }
  constructor(public usersData: UsersPasswordsDBService) {
    this.users = this.usersData.users;
  }
}
