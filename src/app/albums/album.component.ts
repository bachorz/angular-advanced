import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { AlbumsService } from './albums.service';

@Component({
  selector: 'album',
  template: `
    <ng-container *ngIf="album |async as album">
      <h3>{{album.title}}</h3>
    </ng-container>
  `,
  styles: []
})
export class AlbumComponent implements OnInit {
  //
  // album_id = this.route.paramMap.pipe(
  //   map(params => params.get('id')
  // ))
  //
  // album = this.album_id.pipe(
  //   switchMap(id => this.albumsService.getAlbum(+id))
  // )

  album = this.route.data.pipe(
    map(data => data.album)
  );

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
