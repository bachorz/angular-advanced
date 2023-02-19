import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileService } from './profile.service';
import { HttpClientModule } from '@angular/common/http';
import {ProfileBarComponent} from './profile-bar.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([])
  ],
  declarations: [ProfileComponent, ProfileBarComponent],
  exports: [ProfileComponent, ProfileBarComponent],
  providers: [
    ProfileService
  ]
})
export class ProfileModule { }
