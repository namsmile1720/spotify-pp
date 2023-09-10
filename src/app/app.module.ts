import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ExplorePageComponent } from './explore-page/explore-page.component';
import { VideosPageComponent } from './videos-page/videos-page.component';
import { HttpClientModule } from '@angular/common/http';
// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PlayerBarComponent } from './player-bar/player-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomePageComponent,
    ExplorePageComponent,
    VideosPageComponent,
    PlayerBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
