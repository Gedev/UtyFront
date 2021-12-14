import { Component, OnInit } from '@angular/core';
import {RoomEquipment} from "../../models/room-equipment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RoomType} from "../../models/room-type";

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
  equipments: RoomEquipment[] = [];
  roomTypes: RoomType[] = [];
  form: FormGroup;
  timePattern = "^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$";


  constructor(private _snackBar: MatSnackBar,
              private formBuilder: FormBuilder) {

    this.hours = Array(11).fill(0, 0, 19).map((x, i) => i);
    this.minutes = Array(60).fill(0).map((x, i) => i);
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);

    this.form = this.formBuilder.group({
      roomTypeId: ['', Validators.required],
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      size: ['', Validators.required],
      equipmentIds: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
