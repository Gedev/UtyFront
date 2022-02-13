import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {RoomEquipment} from "../../models/room-equipment";

@Injectable({
  providedIn: 'root'
})
export class RoomEquipmentService {
  private _apiURL = "http://localhost:8080/equipments";

  constructor(private _client:HttpClient) { }

  getAll():Observable<RoomEquipment[]> {
    return this._client.get(this._apiURL + "/all") as Observable<RoomEquipment[]>;
  }
}
