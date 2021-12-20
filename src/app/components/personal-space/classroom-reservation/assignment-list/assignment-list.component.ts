import { Component, OnInit } from '@angular/core';
import {ClassroomReservation} from "../../../../models/classroom-reservation";
import {
  ClassroomReservationAssignmentService
} from "../../../../services/api_services/classroom-reservation-assignment.service";
import {Classroom} from "../../../../models/classroom";
import {RoomEquipment} from "../../../../models/room-equipment";


@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css']
})
export class AssignmentListComponent implements OnInit {

  listClassroomsReservations: ClassroomReservation[] = [];
  listClassrooms: Classroom[] = [];
  listEquipments: RoomEquipment[] = [];
  idReservation: number = 0;
  logo: string = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-right\" viewBox=\"0 0 16 16\">\n" +
    " <path fill-rule=\"evenodd\" d=\"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z\"/>\n" +
    " </svg>";

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
      next: stud => {
        console.log("-------------------" + JSON.stringify(stud));
        this.listClassrooms = stud},
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
