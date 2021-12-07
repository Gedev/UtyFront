import { TestBed } from '@angular/core/testing';

import { ClassroomReservationAssignmentService } from './classroom-reservation-assignment.service';

describe('ClassroomReservationAssignmentService', () => {
  let service: ClassroomReservationAssignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassroomReservationAssignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
