import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular//common/http';
import {Post} from '../Models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  Url = 'https://jsonplaceholder.typicode.com/posts?userId=';
  
  constructor(private httpClient: HttpClient) { }

  getPostById(id: number): Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.Url+id);
  }
}
