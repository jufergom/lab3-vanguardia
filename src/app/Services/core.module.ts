import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from '../Services/post.service';
import {CommentService} from '../Services/comment.service';
import {UserService} from '../Services/user.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    PostService,
    CommentService,
    UserService
  ]
})
export class CoreModule { }
