import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private _apiURL = "http://localhost:8080/student";
  constructor(private _student:HttpClient) {

  }

  getAll():Observable<Student[]> {
    return this._student.get(this._apiURL) as Observable<Student[]>;
  }
}
