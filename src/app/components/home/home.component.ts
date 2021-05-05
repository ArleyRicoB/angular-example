import { Component, OnInit } from '@angular/core';
import { GetListService } from '../../services/getList.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: any[] = [];

  constructor(private getList: GetListService) {
    this.getList.getList().subscribe((list: any) => {
      this.movies = list.data;
    });
  }

  ngOnInit(): void {
  }
}
