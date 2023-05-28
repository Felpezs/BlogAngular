import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-opinion-card',
  templateUrl: './opinion-card.component.html',
  styleUrls: ['./opinion-card.component.css'],
})
export class OpinionCardComponent implements OnInit {
  @Input() photoCover: string = '';
  @Input() date: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() author: string = '';
  @Input() Id: string = '0';

  constructor() {}

  ngOnInit(): void {}
}
