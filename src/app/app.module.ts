import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { ShowCommentsComponent } from './show-comments/show-comments.component';

import {CoreModule} from './Services/core.module';
@NgModule({
  declarations: [
    AppComponent,
    ShowUsersComponent,
    ShowCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
