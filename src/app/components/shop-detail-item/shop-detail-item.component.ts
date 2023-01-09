import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-detail-item',
  templateUrl: './shop-detail-item.component.html',
  styleUrls: ['./shop-detail-item.component.scss']
})
export class ShopDetailItemComponent implements OnInit {

  @Input() data: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
