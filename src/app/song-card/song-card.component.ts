import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {
   /* Code Scavenger Hunt #5: We need to create Input property bindings for name, cover image, artist, and whether that artist has already been favorited or not. This is so we can pass this information to the template. */

   /* Code Scavenger Hunt #6: We need to create Output EventEmitters for both playing a song and favoriting a song */

  constructor() { }

  ngOnInit() {
  }


  playSong() {
    /* Code Scavenger Hunt #7: emit your play song event here and your favorite song event below */
  }

  favoriteSong() {
  }
}
