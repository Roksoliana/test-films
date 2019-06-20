import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  public film: any;
  constructor(private route: ActivatedRoute,
              private dataService: DataService
    ) { }

  ngOnInit() {
    this.getFilm();
  }
  getFilm(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dataService.getFilm(id)
      .subscribe(i => this.film = i);
  }
  addtoCart(data): void {
    this.dataService.addtoCart(data);
  }
}
