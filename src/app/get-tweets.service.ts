import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOption = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class GetTweetsService {
  url = 'http://192.168.0.64:5000/hashtags/';
  url2 = 'http://192.168.0.64:5000/users/';
  constructor(private http: HttpClient) { }
  getTweetsByHashtag(hashtag, pagesLimit, wait) {
    // get tweets by hashtag
    const params = {
      pages_limit: pagesLimit,
      wait: wait
    };
    return this.http.get(this.url + hashtag, {params});
  }
  getTweetsByUser(user, pagesLimit, wait) {
    // get tweets by username
    const params = {
      pages_limit: pagesLimit,
      wait: wait
    };
    console.log(user);
    return this.http.get(this.url2 + user, {params});
  }
}
