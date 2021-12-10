import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Classroom} from "../models/classroom";

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  private _apiURL = "http://localhost:8080/classroom";

  constructor(private _client:HttpClient) { }

  getAll():Observable<Classroom[]> {
    return this._client.get(this._apiURL) as Observable<Classroom[]>
  }
}
