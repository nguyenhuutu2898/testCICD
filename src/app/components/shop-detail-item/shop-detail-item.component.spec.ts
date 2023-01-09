import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailItemComponent } from './shop-detail-item.component';

describe('ShopDetailItemComponent', () => {
  let component: ShopDetailItemComponent;
  let fixture: ComponentFixture<ShopDetailItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopDetailItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
