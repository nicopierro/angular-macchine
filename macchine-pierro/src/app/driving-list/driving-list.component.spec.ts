import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivingListComponent } from './driving-list.component';

describe('DrivingListComponent', () => {
  let component: DrivingListComponent;
  let fixture: ComponentFixture<DrivingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrivingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
