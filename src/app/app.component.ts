import { Component } from '@angular/core';
import { GetTweetsService} from './get-tweets.service';
import { Observable} from 'rxjs/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  constructor(private getTweets: GetTweetsService){
  }
  title = 'app';
}
