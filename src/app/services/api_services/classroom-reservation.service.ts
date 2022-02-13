import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ClassroomReservation} from "../../models/classroom-reservation";
import {CreateReservationForm} from "../../models/create-reservation-form";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ClassroomReservationService {

  private readonly _apiURL = "http://localhost:8080/classrooms_reservation";
  constructor(private _client:HttpClient, private route:Router) {

  }

  getAllReservations():Observable<ClassroomReservation[]> {
    return this._client.get(this._apiURL) as Observable<ClassroomReservation[]>;
  }

  createReservations(toPost: CreateReservationForm):Observable<ClassroomReservation> {
    return this._client.post(this._apiURL + "/create", toPost) as Observable<ClassroomReservation>;
  }
}
