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
      email: 'guest@gmail.com',
      username: 'guest',
      password: 'guest',
    },
    {
      id: 4,
      email: 'test@gmail.com',
      username: 'test',
      password: 'test',
    }
  ]
  constructor() { }
}
