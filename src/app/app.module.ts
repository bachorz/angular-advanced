import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ItemsModule } from './items/items.module';
import {ItemsDataService} from './items/items-data.service';
import { SelectionModule } from './selection/selection.module';
import {SharedModule} from './shared/shared.module';
import { FormsEditorModule } from './forms-editor/forms-editor.module';
import {ValidationModule} from './validation/validation.module';
import {ProfileModule} from './profile/profile.module';
import {AuthModule} from './auth/auth.module';
import {TodosModule} from './todos/todos.module';
import {RegistrationModule} from './registration/registration.module';
import {NavbarComponent} from './navigation/navbar.component';
import {AppRoutingModule} from './app.routing.module';
import {HomeComponent} from './navigation/home.component';
import {PageNotFoundComponent} from './navigation/page-not-found.component';
import {PostsModule} from './posts/posts.module';
import {AlbumsModule} from './albums/albums.module';
import {AuthService} from './auth/auth.service';
import {Router} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent, NavbarComponent, HomeComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ItemsModule.forRoot(),
    SelectionModule,
    SharedModule,
    FormsEditorModule,
    ValidationModule,
    AuthModule,
    RegistrationModule,
    ProfileModule,
    TodosModule,
    PostsModule,
    AlbumsModule,
    AppRoutingModule
  ],
  providers: [ItemsDataService],
  bootstrap: [AppComponent]
})
export class   AppModule {

  constructor(private auth: AuthService, private router: Router) {
    if (this.auth.isAuthenticated) {
      this.router.navigate(['/profile']);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
