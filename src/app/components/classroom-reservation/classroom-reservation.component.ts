import { Component, OnInit } from '@angular/core';
import {Student} from "../../models/student";

@Component({
  selector: 'app-classroom-reservation',
  templateUrl: './classroom-reservation.component.html',
  styleUrls: ['./classroom-reservation.component.css']
})
export class ClassroomReservationComponent implements OnInit {

  hours: number[];
  minutes: number[];

  constructor() {
    this.hours = Array(11).fill(0, 0, 19).map((x,i)=>i);
    this.minutes = Array(60).fill(0).map((x,i)=>i);
  }

  ngOnInit(): void {
  }

}
