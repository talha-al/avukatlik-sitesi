import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  headerInput: string = '';
  articleInput: string = '';

  submit(){
    console.log("articleInput:",this.articleInput);

  }
}
