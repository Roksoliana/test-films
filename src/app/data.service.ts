import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment as env } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    const items = this.getLocalStorage('cart');
    if (!items) {
      this.setLocalStorage('cart', []);
    }
  }
  getData(i:string) {
    return this.http.get(env.apiUrl + '&s=' + i);
  }
  getFilm(id) {
    return this.http.get(env.apiUrl + '&i=' + id);
  }
  getLocalStorage(key: string): any[] {
    const item: string = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  setLocalStorage(key: string, obj: any[]): void {
    localStorage.setItem(key, JSON.stringify(obj));
  }
  addtoCart(data): void {
    const items = this.getLocalStorage('cart');
    if (!items.some(i => i.Title === data.Title)) {
      items.push(data);
      this.setLocalStorage('cart', items);
    }
  }
}
