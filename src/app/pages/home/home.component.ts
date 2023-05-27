import { Component, OnInit } from '@angular/core';
import dataFake from '../../data/dataFake.json'
import { Articles } from 'src/app/models/articles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  articles: Articles

  constructor() {
    this.articles = dataFake
  }

  ngOnInit(): void {

  }
}
