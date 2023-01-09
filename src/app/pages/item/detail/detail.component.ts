import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  tab = 1;

  data = [1,2,3,4,5,6,7,8,9,10];
  page =1;
  pageSize=10
  constructor() { }

  ngOnInit(): void {
  }

  changeTab(tab: number) {
    this.tab = tab
  }

}
