import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public films: any[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }
  private getData(): void {
    this.films = this.dataService.getLocalStorage('cart');
  }
  removeData(film) {
    this.films = this.films.filter(i => i.Title !== film.Title);
    this.dataService.setLocalStorage('cart', this.films);
  }
}
