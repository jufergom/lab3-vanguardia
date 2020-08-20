import { Component, OnInit } from '@angular/core';
import {Comment} from '../Models/comment';
import {CommentService} from '../Services/comment.service';
import { ActivatedRoute } from "@angular/router";
 
@Component({
  selector: 'app-show-comments',
  templateUrl: './show-comments.component.html',
  styleUrls: ['./show-comments.component.css']
})
export class ShowCommentsComponent implements OnInit {
  comments: Comment[];

  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.commentService.getCommentsById(this.activatedRoute.snapshot.paramMap.get('postId'))
      .subscribe(
        ( comments: Comment[])=> this.comments = comments
      );
  }

}
