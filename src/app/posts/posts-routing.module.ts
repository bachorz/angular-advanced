import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import {PostComponent} from './post.component';

const routes: Routes = [
  {
    path:'posts',
    component: PostsComponent
  },
  {
    path:'post/:id',
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
