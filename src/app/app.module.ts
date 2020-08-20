import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { ShowPostsComponent } from './show-posts/show-posts.component';
import { ShowCommentsComponent } from './show-comments/show-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowUsersComponent,
    ShowPostsComponent,
    ShowCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
