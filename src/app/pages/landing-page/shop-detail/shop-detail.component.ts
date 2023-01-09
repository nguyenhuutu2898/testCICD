import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.scss'],
})
export class ShopDetailComponent implements OnInit {
  data = [
    { type: 'new' },
    { type: 'old' },
    { type: 'old' },
    { type: 'old' },
    { type: 'old' },
    { type: 'old' },
    { type: 'old' },
    { type: 'old' },
    { type: 'old' },
    { type: 'old' },
    { type: 'old' },
    { type: 'old' },
    { type: 'old' },
    { type: 'old' },
    { type: 'old' },
    { type: 'old' },
    { type: 'old' },
    { type: 'old' },
    { type: 'old' },
  ];
  page = 1;

  constructor() {}

  ngOnInit(): void {}
}
