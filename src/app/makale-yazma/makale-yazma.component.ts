import { Component, OnInit } from '@angular/core';
import { BlogPayload, FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-makale-yazma',
  templateUrl: './makale-yazma.component.html',
  styleUrls: ['./makale-yazma.component.scss']
})
export class MakaleYazmaComponent implements OnInit {
  headerInput: string = '';
  articleInput: string = '';

  constructor(private _firebaseService: FirebaseService) {

  }

  ngOnInit() {
    const ts = localStorage.getItem("data");
    this.articleInput = ts ? ts : "";

  }

  submit() {
    const payload = {
      title: this.headerInput,
      content: this.articleInput,
      date: new Date()
    } as BlogPayload
    const json= JSON.stringify(payload);
    this._firebaseService.createDoc(json);
    // this._firebaseService.createDoc(payload);
  }
}
