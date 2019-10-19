import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentdetailsComponent } from './incidentdetails.component';

describe('IncidentdetailsComponent', () => {
  let component: IncidentdetailsComponent;
  let fixture: ComponentFixture<IncidentdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
