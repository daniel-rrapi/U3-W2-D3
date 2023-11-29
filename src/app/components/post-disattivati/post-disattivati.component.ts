import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-disattivati',
  templateUrl: './post-disattivati.component.html',
  styleUrls: ['./post-disattivati.component.scss']
})
export class PostDisattivatiComponent implements OnInit {

  posts: Post[] = [];
  constructor(private postSrv: PostsService) { 
    this.postSrv.recuperaPosts().then((posts) => {
      this.posts = posts;
      console.log(this.posts)
    })
   }

  ngOnInit(): void {
  }

}
