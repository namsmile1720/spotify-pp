import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { SpotifyAuthService } from './spotify-auth.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyGetDataService {
  private apiUrl = 'https://api.spotify.com/v1';
  private artistId = '69GGBxA162lTqCwzJG5jLp';
  private recommendTRackUrl = 'https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA'

  constructor(private http: HttpClient, private authService: SpotifyAuthService) { }

  getNewReleases(): Observable<any> {
    return this.authService.getToken().pipe(
      switchMap(tokenObject => {
        const token = tokenObject.access_token; // Truy xuất giá trị access_token từ đối tượng phản hồi
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
    
        return this.http.get(`${this.apiUrl}/browse/new-releases`, { headers });
      })
    );
  }
  getTopTracks(): Observable<any> {

    return this.authService.getToken().pipe(
      switchMap(tokenObject => {
        const token = tokenObject.access_token; // Truy xuất giá trị access_token từ đối tượng phản hồi
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
        console.log(`${this.apiUrl}/artists/${this.artistId}/top-tracks`);
        return this.http.get(`${this.apiUrl}/artists/${this.artistId}/top-tracks`, { headers });
      })
    );
  }

  getRecommendTracks(): Observable<any> {

    return this.authService.getToken().pipe(
      switchMap(tokenObject => {
        const token = tokenObject.access_token; // Truy xuất giá trị access_token từ đối tượng phản hồi
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
        return this.http.get(`${this.recommendTRackUrl}`, { headers });
      })
    );
  }
}