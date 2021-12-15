import { Component, OnInit } from '@angular/core';
import {RoomEquipment} from "../../models/room-equipment";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RoomType} from "../../models/room-type";
import {DatePipe} from "@angular/common";
import { CreateReservation } from 'src/app/models/create-reservation';
import {RoomEquipmentService} from "../../services/api_services/room-equipment.service";

@Component({
  selector: 'app-classroom-reservation',
  templateUrl: './classroom-reservation.component.html',
  styleUrls: ['./classroom-reservation.component.css']
})
export class ClassroomReservationComponent implements OnInit {
  startDate: Date;
  minDate: Date;
  maxDate: Date;
  equipments: RoomEquipment[] = [];
  roomTypes: RoomType[] = [];
  form: FormGroup;
  timePattern = "^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$";


  constructor(private _snackBar: MatSnackBar,
              private formBuilder: FormBuilder,
              private datePipe: DatePipe,
              private equipmentService: RoomEquipmentService) {

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    this.minDate = new Date(currentYear, currentMonth, currentDay);
    this.maxDate = new Date(currentYear + 1, currentMonth, 31);
    this.startDate = new Date(currentYear, currentMonth, currentDay);


    this.form = this.formBuilder.group({
      // roomTypeId: ['', Validators.required],
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      size: ['', Validators.required],
      equipmentIds: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getEquipments();
  }

  onSubmit() {
    const createReservation = new CreateReservation();
    const mydate = this.datePipe.transform(this.form.get("date")?.value, "dd-MM-yyyy")
  }

  private getEquipments() {
    this.equipmentService.getAll().subscribe( {
      next: stud => this.equipments = stud,
      error: tempError => alert("Failed to get Equipment list from the server"),
      complete: () => console.log("Success get Equipment list")
    });
  }
}
