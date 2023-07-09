import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  blogs: any;
  keyArray:any =[];
  constructor(private _firebaseService: FirebaseService) {


  }

  ngOnInit() {

  }

  ngAfterViewInit(){
    this._firebaseService.getDocs();
    setTimeout(() => {
      this.blogs = this._firebaseService.getDoc();
      // console.log("blogs", this.blogs);
      // console.log("blogs", this.blogs.entries());

      for (const [key, value] of Object.entries(this.blogs)) {
        console.log(`${key}: ${value}`);
        this.keyArray.push(`${key}`);
        console.log("keyArray",this.keyArray);

      }

    }, 1000);

  }
}
