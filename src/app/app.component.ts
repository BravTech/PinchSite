import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: '',
  databaseURL: 'https://angularchat-45656-default-rtdb.firebaseio.com'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PinchSite';

  constructor() {
    firebase.default.initializeApp(config);
  }
}
