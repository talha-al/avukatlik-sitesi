import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { getDatabase, ref, get, child, onValue } from "firebase/database";
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  app = initializeApp(environment.firebase);
  db = getDatabase();
  dbRef = ref(getDatabase());
  blogs: any;

  constructor() {
    firebase.initializeApp(environment.firebase);

  }


  getDocTest() {
    const db = getDatabase();
    const ref = firebase.database().ref('docs');

    onValue(ref, (snapshot) => {
      console.log("---", snapshot.val());

      const data = snapshot.val();
      return data;

    });
  }

  getDocs() {
    get(child(this.dbRef, 'docs/')).then((snapshot) => {
      if (snapshot.exists()) {
        this.blogs = snapshot.val();
        console.log(snapshot);
      }
    }).catch((error) => {
      console.error(error);
    })
    return this.blogs
    // .finally(() => {
    //   console.log("test",this.blogs);
    //   return this.blogs;
    // });
  }

  getDoc(){
    return this.blogs;
  }

  createDoc(payload: any) {
    // console.log("db", this.db);
    // set(ref(this.db, 'docs/' + payload.title), {
    //   title: payload.title,
    //   content: payload.content,
    // });
    console.log("payload",payload);
    const json= JSON.stringify(payload);
    const newDataRef = firebase.database().ref('docs').push(); // Yeni bir düğüm oluşturur ve referansını alır
    // newDataRef.set({
    //   title: payload.title,
    //   content: payload.content,
    //   date: payload.date,
    // });
    newDataRef.set({
      json
    });
  }
}


export interface BlogPayload {
  title: string;
  content: string;
  date: Date
}
