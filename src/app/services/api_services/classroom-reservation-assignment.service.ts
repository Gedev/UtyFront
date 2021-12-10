import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ClassroomReservation} from "../../models/classroom-reservation";
import {Classroom} from "../../models/classroom";

@Injectable({
  providedIn: 'root'
})
export class ClassroomReservationAssignmentService {

  private readonly _apiURL = "http://localhost:8080/classrooms_reservation";

  constructor(private _client:HttpClient) {

  }

  getAllPendingReservations():Observable<ClassroomReservation[]> {
    return this._client.get(this._apiURL + "/assignment?status=true") as Observable<ClassroomReservation[]>;
  }

  assignClassroom(id: number):Observable<Classroom[]> {
    return this._client.get(this._apiURL + "/assignment/" + id) as Observable<Classroom[]>;
  }

}
