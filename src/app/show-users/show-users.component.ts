import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { User } from '../Models/user';
import { PostService } from '../Services/post.service';
import { Post } from '../Models/post';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  selectedUserId: number;
  showUserPosts: boolean;
  users: User[];
  posts: Post[];

  constructor(private userService: UserService, private postService: PostService) { 
    this.showUserPosts = false;
  }

  ngOnInit(): void {
    this.userService.getAllUsers()
    .subscribe(
      (users : User[]) => this.users = users
    );
  }

  getUserPosts(): void {
    this.postService.getPostById(this.selectedUserId)
    .subscribe(
      (posts: Post[]) => this.posts = posts
    );
  }

}
