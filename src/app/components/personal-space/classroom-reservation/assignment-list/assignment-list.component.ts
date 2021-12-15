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
      next: stud => {
          this.listClassroomsReservations = stud;
          console.log(stud);
          JSON.stringify(this.listClassroomsReservations);
      },

      error: tempError => alert("Failed to get data from the server."),
      complete: () => console.log("Success get all pending reservations")
    });
  }

  assignClassroom(id: number) {
    let form = this.listClassroomsReservations[id];
    const listIdEquipment: number[] = [];
    form.equipments.forEach(elem => {
      listIdEquipment.push(elem.id)
    })
    this._sServ.searchClassroom({
      id_reservation: form.id,
      start_time: form.start_time,
      end_time: form.end_time,
      roomEquipment: listIdEquipment,
    }).subscribe( {
      next: stud => this.listClassrooms = stud,
      error: tempError => alert("Failed to get data from the server."),
      complete: () => console.log("Success search for classroom")
    });
  }
}
