import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular//common/http';
import {Comment} from '../Models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  Url: string = 'https://jsonplaceholder.typicode.com/comments?postId=';

  constructor(private httpClient: HttpClient) { }

  getCommentsById(id: number): Observable<Comment[]>{
    return this.httpClient.get<Comment[]>(this.Url+id);
  }

}
