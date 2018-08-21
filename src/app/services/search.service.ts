import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Song } from '../models/song';

const SPOTIFY_BASE = 'https://api.spotify.com/v1';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private _http: HttpClient) { }

  searchStores(query): Observable<Song[]> {
   /* Code Scavenger Hunt #4: We need to call the spotify API (base URL above) to fetch a list of songs based on the query passed in, and then map the result into an Observable piping an array of `Song`s */
}
