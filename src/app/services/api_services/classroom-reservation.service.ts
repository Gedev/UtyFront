import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ClassroomReservation} from "../../models/classroom-reservation";

@Injectable({
  providedIn: 'root'
})
export class ClassroomReservationService {

  private readonly _apiURL = "http://localhost:8080/classrooms_reservation";
  constructor(private _client:HttpClient) {

  }

  getAllReservations():Observable<ClassroomReservation[]> {
    return this._client.get(this._apiURL) as Observable<ClassroomReservation[]>;
  }
}
