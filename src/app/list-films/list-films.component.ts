import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css']
})
export class ListFilmsComponent implements OnInit {
public films: any = {};
queryField: FormControl = new FormControl();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.queryField.valueChanges.subscribe(
      result => this.getData(result)
    );
  }
  getData(result) {
    this.dataService.getData(result)
    .subscribe(
      i => {
        this.films = i;
      }
    );
  }
  addtoCart(data): void {
      this.dataService.addtoCart(data);
  }
}
