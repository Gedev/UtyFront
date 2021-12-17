import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ClassroomReservation} from "../../models/classroom-reservation";
import {Classroom} from "../../models/classroom";
import {FormClassroomAssignment} from "../../models/form-classroom-assignment";
import {AssignClassroomReservationForm} from "../../models/assign-classroom-reservation-form";

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

  searchClassroom(Form: FormClassroomAssignment):Observable<Classroom[]> {
    return this._client.post(this._apiURL + "/search", Form) as Observable<Classroom[]>;
  }

  assignClassroom(reservationId: number, form:AssignClassroomReservationForm):Observable<ClassroomReservation> {
    const params = new HttpParams()
      .set('reservId', reservationId)

    alert(this._apiURL + "/assignClassroom?" + params);
    return this._client.patch(this._apiURL + "/assignClassroom", form ,{ params }) as Observable<ClassroomReservation>;
  }
}
