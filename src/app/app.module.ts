import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListFilmsComponent } from './list-films/list-films.component';
import { AppRoutingModule } from './app-routing.module';
import { FilmComponent } from './list-films/film/film.component';
import { CartComponent } from './cart/cart.component';
import { ImagePreloadDirective } from './image-preload.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListFilmsComponent,
    FilmComponent,
    CartComponent,
    ImagePreloadDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
