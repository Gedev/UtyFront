import { TestBed } from '@angular/core/testing';

import { ClassroomReservationService } from './classroom-reservation.service';

describe('ClassroomReservationService', () => {
  let service: ClassroomReservationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassroomReservationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
