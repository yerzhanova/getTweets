import { Component, OnInit, NgModule} from '@angular/core';
import { GetTweetsService} from '../get-tweets.service';
import { PagingService } from '../paging.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})

export class HashtagComponent implements OnInit {
  pagesLimit = 2;
  wait = 0;
  hashtags = [];
  hashtag = 'Python';
  pageNumber = 1;
  pagedHashtags = [];
  tweetsCount = 10;
  pager = {
    totalPages: 0,
    currentPage: 1,
    startIndex: 0,
    endIndex: this.tweetsCount
  };
  constructor(public getTweetService: GetTweetsService, public paginService: PagingService) { }

  ngOnInit() {
    // searching by default hashtag #Python
    this.getTweetsByHashtag(this.hashtag);
  }
  getTweetsByHashtag(hashtag) {
    /*getting tweets*/
    this.getTweetService.getTweetsByHashtag(hashtag, this.pagesLimit, this.wait).subscribe(res => {
      this.hashtags = <any>res;
      this.pagedHashtags = this.hashtags.slice(this.pager.startIndex, this.pager.endIndex);
    });
  }
  setPage(pageNumber) {
    console.log('current Page', pageNumber);
    // get pager object from service
    this.pager = this.paginService.getPageNumber(this.hashtags.length, 10, pageNumber);
    // get current page of items
    this.pagedHashtags = this.hashtags.slice(this.pager.startIndex, this.pager.endIndex);
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
    // convert 8:05 AM - 19 May 2018 to May 19, 2018
    return dateOfTweet.slice(10, 17) + ', ' + dateOfTweet.slice(-4);
  }
}
