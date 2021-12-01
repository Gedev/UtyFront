import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClassroomReservationService {

  private readonly _apiUrl = "http://localhost:8080/classroom_reserv"

  constructor() { }
}
