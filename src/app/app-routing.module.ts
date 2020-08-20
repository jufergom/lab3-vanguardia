import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { ShowUsersComponent } from '../app/show-users/show-users.component';
import { ShowCommentsComponent } from '../app/show-comments/show-comments.component';

const routes: Routes = [
  { path: 'show-users', component: ShowUsersComponent },
  { path: 'show-comments/:postId', component: ShowCommentsComponent },
  { path: '',   redirectTo: '/show-users', pathMatch: 'full' }, // redirect to `show-users` component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
