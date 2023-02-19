import { Component, OnInit } from '@angular/core';
import {PostService} from './post.service';

@Component({
  selector: 'posts',
  template: `
    <div class="card-deck justify-content-around">
      <div class="card text-center mb-2" *ngFor="let post of posts | async" [routerLink]="[post.id]">
        <div class="card-body">
          <h5 class="card-title">{{post.title}}</h5>
          <div class="card-text">{{post.body | slice:0:20}}</div>
        </div>
      </div>
    </div>
  `,
  styles: [`.card{
    flex: 1 0 20%;
  }`]
})
export class PostsComponent implements OnInit {

  posts = this.postsService.getPosts();

  constructor(private postsService: PostService) { }

  ngOnInit() {
  }

}
