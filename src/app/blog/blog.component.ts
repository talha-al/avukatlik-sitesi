import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent  {
  headerInput: string = '';
  articleInput: string = '';

  ngOnInit(){
    const ts = localStorage.getItem("data");
    console.log("articleInput:",localStorage.getItem("data"));
    this.articleInput = ts ? ts : "";

  }

  submit(){
    console.log("articleInput:",this.articleInput);
    localStorage.setItem("data",this.articleInput);
  }
}
