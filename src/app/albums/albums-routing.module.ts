import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums.component';
import { AlbumComponent } from './album.component';
import {ListComponent} from './list.component';
import {AuthorizedGuard} from '../auth/authorized.guard';
import {AlbumResolve} from './resolves/album-resolve';

const routes: Routes = [
  {
    path: 'albums',
    canActivateChild: [
      AuthorizedGuard
    ],
    children: [{
      path: '',
      component: AlbumsComponent,
      children: [
        {
          path: '',
          component: ListComponent,
          outlet: 'list'
        }
      ]
    },
      {
        path: ':id',
        component: AlbumsComponent,
        children: [
          {
            path: '',
            component: ListComponent,
            outlet: 'list'
          },
          {
            path: '',
            component: AlbumComponent,
            resolve: {
              'album': AlbumResolve
            }
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
