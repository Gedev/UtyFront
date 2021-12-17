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
  idReservation: number = 0;

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

  searchClassroom(id: number, idReserv: number) {
    this.idReservation = idReserv;
    let form = this.listClassroomsReservations[id];
    const listIdEquipment: number[] = [];
    form.equipments.forEach(elem => {
      listIdEquipment.push(elem.id)
    })
    this._sServ.searchClassroom({
      reservation_id: form.id,
      start_time: form.start_time,
      end_time: form.end_time,
      size: form.size,
      roomEquipment: listIdEquipment,
    }).subscribe( {
      next: stud => this.listClassrooms = stud,
      error: tempError => alert("Failed to get data from the server."),
      complete: () => console.log("Success search for classroom")
    });
  }

  assignClassroom(reservation_id: number, classroom_id: number) {
    this._sServ.assignClassroom(reservation_id, { "classroomId" : classroom_id }).subscribe( {
      next: reserv => console.log(reserv),
      error: tempError => alert("Failed to send data from the server."),
      complete: () => console.log("Success assignment of the classroom")
      });
  }

}
