import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomReservationComponent } from './classroom-reservation.component';

describe('ClassroomReservationComponent', () => {
  let component: ClassroomReservationComponent;
  let fixture: ComponentFixture<ClassroomReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassroomReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
