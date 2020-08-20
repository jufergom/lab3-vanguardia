import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { User } from '../Models/user';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.css']
})
export class ShowUsersComponent implements OnInit {

  showUserPosts: boolean;
  users: User[];

  constructor(private userService: UserService) { 
    this.showUserPosts = false;
  }

  ngOnInit(): void {
    this.userService.getAllUsers()
    .subscribe(
      (users : User[]) => this.users = users
    )
  }

}
