import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-link',
  templateUrl: './create-link.component.html',
  styleUrls: ['./create-link.component.scss'],
})
export class CreateLinkComponent implements OnInit {
  data = new Array(10);
  page = 1;
  images: any = [];

  skuData: any = [];

  constructor(private modalService: NgbModal) {}

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

  open(content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'xl',
    });
  }

  onSelectSKU(event: any) {
    console.log('event', event);
    this.page = 3;
  }

  onSave() {
    this.skuData.push({});
    this.page = 2;
  }
}
