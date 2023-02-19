import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './models/post';
import { Comment } from './models/comment';

@Injectable()
export class PostService {

  url = 'http://localhost:3000/posts/';

  getPost(id: number) {
    return this.http.get<Post>(this.url + id);
  }

  getPosts() {
    return this.http.get<Post[]>(this.url);
  }

  getPostComments(post_id: number, page = 1) {
    return this.http.get<Comment[]>(this.url + post_id + '/comments?_limit=1&_page='+ page)
 //   return this.http.get<Comment[]>(this.url + post_id + '/comments?_limit=1&_page=1');
  }


  constructor(private http: HttpClient) { }

}
