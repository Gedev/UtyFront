import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classroom-reservation',
  templateUrl: './classroom-reservation.component.html',
  styleUrls: ['./classroom-reservation.component.css']
})
export class ClassroomReservationComponent implements OnInit {

  minDate: Date;
  maxDate: Date;
  hours: number[];
  minutes: number[];

  constructor() {
    this.hours = Array(11).fill(0, 0, 19).map((x,i)=>i);
    this.minutes = Array(60).fill(0).map((x,i)=>i);
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  ngOnInit(): void {
  }
}
