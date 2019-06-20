import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFilmsComponent } from './list-films/list-films.component';
import { FilmComponent } from './list-films/film/film.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: ListFilmsComponent },
  { path: 'cart', component: CartComponent },
  { path: ':id', component: FilmComponent },
  { path: 'cart/:id', component: FilmComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
