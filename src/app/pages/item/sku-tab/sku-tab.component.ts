import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sku-tab',
  templateUrl: './sku-tab.component.html',
  styleUrls: ['./sku-tab.component.scss'],
})
export class SkuTabComponent implements OnInit {
  images: any = [];

  selectedId = '';

  array = [
    {
      id: '1',
      name: 'Price 1',
    },
    {
      id: '2',
      name: 'Price 2',
    },
    {
      id: '3',
      name: 'Price 3',
    },
    {
      id: '4',
      name: 'Price 4',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  handleFileInput(file: any) {
    if (file.target.files && file.target.files[0]) {
      var filesAmount = file.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();

        reader.onload = (file: any) => {
          this.images.push(file.target.result);
        };

        reader.readAsDataURL(file.target.files[i]);
      }
    }
  }

  onSelectPrice(id: string) {
    if (id === this.selectedId) {
      this.selectedId = '';
    } else {
      this.selectedId = id;
    }
  }
}
