import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  tab = 1;
  data = new Array(10);
  page =1;
  pageSize=10
  constructor() {}

  ngOnInit(): void {}

  changeTab(tab: number) {
    this.tab = tab;
  }
}
