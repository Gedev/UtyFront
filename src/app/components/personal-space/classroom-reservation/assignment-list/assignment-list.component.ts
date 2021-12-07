import { Component, OnInit } from '@angular/core';
import {ClassroomReservation} from "../../../../models/classroom-reservation";
import {
  ClassroomReservationAssignmentService
} from "../../../../services/api_services/classroom-reservation-assignment.service";


@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {

  listClassroomsReservations: ClassroomReservation[] = [];

  constructor(private _sServ:ClassroomReservationAssignmentService) {

  }

  ngOnInit(): void {
    this.getListClassroomsReservations();
  }

  getListClassroomsReservations() {
    this._sServ.getAllPendingReservations().subscribe( {
      next: stud => this.listClassroomsReservations = stud,
      error: tempError => alert("Failed to get data from the server."),
      complete: () => console.log("Success")
    });
  }

}
