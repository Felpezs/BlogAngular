import { Component, OnInit } from '@angular/core';
import dataFake from '../../data/dataFake.json'
import opinionArticles from '../../data/opinionArticles.json'
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  smCards: Array<Card>
  bgCard: Card
  opinionCards: Array<Card & {author: string}>

  constructor() {
    this.smCards = dataFake.articles.filter((article) => article.type === 'smArticle')
    this.bgCard = dataFake.articles.filter((article) => article.type === 'bgArticle')[0]
    this.opinionCards = opinionArticles.articles
  }

  ngOnInit(): void {

  }
}
