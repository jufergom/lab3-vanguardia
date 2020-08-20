import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular//common/http';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  Url: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.Url);
  }
}
