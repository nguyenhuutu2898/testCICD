import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuTabComponent } from './sku-tab.component';

describe('SkuTabComponent', () => {
  let component: SkuTabComponent;
  let fixture: ComponentFixture<SkuTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkuTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
