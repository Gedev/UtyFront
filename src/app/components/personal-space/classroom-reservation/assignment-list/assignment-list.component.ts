import { Component, OnInit } from '@angular/core';
import {ClassroomReservation} from "../../../../models/classroom-reservation";
import {
  ClassroomReservationAssignmentService
} from "../../../../services/api_services/classroom-reservation-assignment.service";
import {Classroom} from "../../../../models/classroom";


@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {

  listClassroomsReservations: ClassroomReservation[] = [];
  listClassrooms: Classroom[] = [];

  constructor(private _sServ:ClassroomReservationAssignmentService) {

  }

  ngOnInit(): void {
    this.getListClassroomsReservations();
  }

  getListClassroomsReservations() {
    this._sServ.getAllPendingReservations().subscribe( {
      next: stud => this.listClassroomsReservations = stud,
      error: tempError => alert("Failed to get data from the server."),
      complete: () => console.log("Success get all pending reservations")
    });
  }

  assignClassroom(id: number) {
    this._sServ.assignClassroom(id).subscribe( {
      next: stud => this.listClassrooms = stud,
      error: tempError => alert("Failed to get data from the server."),
      complete: () => console.log("Success search for classroom")
    });
  }

}
