import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ClassroomReservation} from "../../models/classroom-reservation";

@Injectable({
  providedIn: 'root'
})
export class ClassroomReservationAssignmentService {

  private readonly _apiURL = "http://localhost:8080/classrooms_reservation/assignment?status=true";
  constructor(private _classroomsReservations:HttpClient) {

  }

  getAllPendingReservations():Observable<ClassroomReservation[]> {
    return this._classroomsReservations.get(this._apiURL) as Observable<ClassroomReservation[]>;
  }

}
