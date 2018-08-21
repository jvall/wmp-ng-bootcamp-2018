import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { Song } from '../models/song';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  private _searchStream$ = new Subject<string>();
  searchResults: Song[];
  favorites: Song[] = [];
  songToPlay: string = null;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this._searchStream$.pipe(
      /* Code Scavenger Hunt #13: We need an RxJS stream with the following operators:
      1. `filter`ing out empty results
      2. `debounceTime`ing so we let the user rest a little before firing HTTP requests
      3. `distinctUntilChange`ing so we're not searching for duplicate results
      4. `switchMap`ing the input to the searchStores observable in the searchService
      */
    ).subscribe(results => {
      this.searchResults = results;
    });
  }

  ngOnDestroy() {
    this._searchStream$.complete();
  }

  private onSearchInput(ev) {
    this._searchStream$.next(ev.target.value);
  }

  playSong(url) {
    this.songToPlay = url;
  }

  favoriteSong(id) {
    this.favorites.push(this.searchResults.find(favorite => favorite.id === id));
  }

  isInFavoritesList(id) {
    return this.favorites.find(favorite => favorite.id === id) !== undefined;
  }
}
