import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyAuthService {
  private tokenUrl = 'https://accounts.spotify.com/api/token';

  constructor(private http: HttpClient) {}

  getToken(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa('0cffea82371b4bfb9f696a335f1998d8:b58d9307cd68418fa9b40287497e6523')
    });

    const body = 'grant_type=client_credentials';

    return this.http.post(this.tokenUrl, body, { headers });
  }
}
