import { Component, OnInit } from '@angular/core';
import { SpotifyGetDataService } from '../services/spotify-get-data.service';
import { SpotifyAuthService } from '../services/spotify-auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  newReleases: any; 
  albums: any;
  recommendTracks: any;
  trackPlayer: any;
  constructor(private spotifyGetDataService: SpotifyGetDataService, private spotifyAuthService: SpotifyAuthService) { }
  ngOnInit() {
    
    this.spotifyGetDataService.getNewReleases().subscribe(
      (response) => {
        this.newReleases = response; // Lưu trữ kết quả API vào biến newReleases
        this.albums = response.albums.items
        // console.log(this.albums);
      },
      (error) => {
        console.error('Error calling API:', error);
      }
    );
    this.spotifyGetDataService.getRecommendTracks().subscribe(
      (response) => {
        this.recommendTracks = response.tracks
        // console.log(this.recommendTracks);

      },
      (error) => {
        console.error('Error calling API:', error);
      }
    );
  }
  getTrackInfo(track: any) {
    this.trackPlayer = track
    console.log(this.trackPlayer);
  }


}
