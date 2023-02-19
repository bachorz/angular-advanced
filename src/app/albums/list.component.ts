import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './albums.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'list',
  template: `
    <div class="list-group">
      <div class="list-group-item"
           routerLinkActive="active"
        *ngFor="let album of albums | async">
        <a class="text-dark" [routerLink]="['/albums', album.id]">{{album.title}}</a>
      </div>
    </div>

  `,
  styles: []
})
export class ListComponent implements OnInit {

  selectedId: number;

  albums = this.albumsService.getAlbums();

  constructor(private albumsService: AlbumsService,
            private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => params.get('id'))
    ).subscribe(id => {
      this.selectedId = +id
    })
  }

}
