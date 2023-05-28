import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import opinionArticles from '../../data/opinionArticles.json';
import dataFake from '../../data/dataFake.json';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input() photoCover: string = '';
  @Input() contentTitle: string = '';
  @Input() contentDescription: string = '';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    let result: Card | (Card & { author: string }) = dataFake.articles.filter(
      (article) => article.id === id
    )[0];
    if (result == null) {
      result = opinionArticles.articles.filter(
        (article) => article.id === id
      )[0];
    }
    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
  }
}
