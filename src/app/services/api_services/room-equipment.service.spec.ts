import { TestBed } from '@angular/core/testing';

import { RoomEquipmentService } from './room-equipment.service';

describe('RoomEquipmentService', () => {
  let service: RoomEquipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomEquipmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
