import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Album } from '../models/album';
import { AlbumsService } from '../albums.service';
import { delay } from 'rxjs/operators';

@Injectable()
export class AlbumResolve implements Resolve<Album> {

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    const id = +route.paramMap.get('id');
    return this.albumsService.getAlbum(id);
    // .pipe(
    //   delay(2000)
    // )
  }

  constructor(private albumsService: AlbumsService) {

  }
}
