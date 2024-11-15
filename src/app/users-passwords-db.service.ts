import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersPasswordsDBService {
  users = [
    {
      id: 1,
      email: 'admin@gmail.com',
      username: 'admin',
      password: 'admin',
    },
    {
      id: 2,
      email: 'user@gmail.com',
      username: 'user',
      password: 'user',
    },
    {
      id: 3,
      email: 'user2@gmail.com',
      username: 'user2',
      password: 'user2',
    }
  ]
  constructor() { }
}
