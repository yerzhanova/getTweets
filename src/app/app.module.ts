import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HashtagComponent } from './hashtag/hashtag.component';
import { UserComponent} from './user/user.component';
import { AppRoutingModule} from './app.routing.module';
import { GetTweetsService } from './get-tweets.service';
import { PagingService } from './paging.service';


@NgModule({
  declarations: [
    AppComponent,
    HashtagComponent,
    UserComponent
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [GetTweetsService, PagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
