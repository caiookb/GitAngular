import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { RepositoriesListComponent } from './repositories-list/repositories-list.component';
import { PullRequestsComponent } from './pull-requests/pull-requests.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RepositoriesListComponent,
    PullRequestsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
