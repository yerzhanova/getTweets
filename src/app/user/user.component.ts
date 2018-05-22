import { Component, OnInit } from '@angular/core';
import { GetTweetsService } from '../get-tweets.service';
import { PagingService } from '../paging.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user = 'twitter';
  tweets = [];
  pages_limit = 1;
  wait = 0;
  pagedTweets = [];
  tweetsCount = 10;
  pager = {
    totalPages: 0,
    currentPage: 1,
    startIndex: 0,
    endIndex: this.tweetsCount
  };
  constructor(private getTweetService: GetTweetsService, public paginService: PagingService) { }

  ngOnInit() {
    // searching for user Twitter by default
    this.getTweetsByUser(this.user);
  }
  getTweetsByUser(user){
    // this.getTweetService.getTweetsByUser(this.user, this.pages_limit, this.wait).subscribe(res => this.tweets = <any>res);
    this.getTweetService.getTweetsByUser(user, this.pages_limit, this.wait).subscribe(res => {
      this.tweets = <any>res;
      this.pagedTweets = this.tweets.slice(this.pager.startIndex, this.pager.endIndex);
    });
  }
  setPage(pageNumber) {
    // get pager object from service
    this.pager = this.paginService.getPageNumber(this.tweets.length, 10, pageNumber);
    // get current page of items
    this.pagedTweets = this.tweets.slice(this.pager.startIndex, this.pager.endIndex);
  }
  getShortText(text) {
    // first 50 characters and '...'
    return text.slice(0, 50) + ' ...';
  }
  getHashtags(hashtags) {
    // first one or two hashtags
    return (hashtags.length > 1) ? hashtags.slice(0, 1) + ', ' + hashtags.slice(1, 2) : hashtags.slice(0, 1);
  }
  convertDate(dateOfTweet) {
    // convert data
    return dateOfTweet.slice(10, 17) + ', ' + dateOfTweet.slice(-4);
  }
}
