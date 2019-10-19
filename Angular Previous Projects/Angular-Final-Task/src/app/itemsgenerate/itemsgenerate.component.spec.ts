import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsgenerateComponent } from './itemsgenerate.component';

describe('ItemsgenerateComponent', () => {
  let component: ItemsgenerateComponent;
  let fixture: ComponentFixture<ItemsgenerateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsgenerateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsgenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
