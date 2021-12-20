import { Component, OnInit } from '@angular/core';
import {RoomEquipment} from "../../models/room-equipment";
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RoomType} from "../../models/room-type";
import {DatePipe} from "@angular/common";
import { CreateReservationForm } from 'src/app/models/create-reservation-form';
import {RoomEquipmentService} from "../../services/api_services/room-equipment.service";
import {ClassroomReservationService} from "../../services/api_services/classroom-reservation.service";
import {Router} from "@angular/router";

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
  max: number = 5;


  constructor( private route:Router,
              private _snackBar: MatSnackBar,
              private formBuilder: FormBuilder,
              private datePipe: DatePipe,
              private equipmentService: RoomEquipmentService,
              private _reServ: ClassroomReservationService) {

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();

    this.minDate = new Date(currentYear, currentMonth, currentDay);
    this.maxDate = new Date(currentYear + 1, currentMonth, 31);
    this.startDate = new Date(currentYear, currentMonth, currentDay);


    this.form = this.formBuilder.group({
      roomTypeId: [''],
      date: ['', Validators.required],
      startTime: new FormControl('10:10',[Validators.required]) ,
      endTime: new FormControl( '12:00', [Validators.required]),
      size: ['20', Validators.required],
      equipmentIds: ['']
    },
    );
  }

  ngOnInit(): void {
    this.getEquipments();
  }

  onSubmit() {
    console.log(this.form.value.date);
    let date = this.form.value.date;
    let actualHours = new Date().getHours();

    let actualMinutes = new Date().getMinutes();
    let formDay = date.getDate();
    let formStartTime = this.form.value.startTime;

    let formStartTimeHours = formStartTime.substring(0,2);
    let formStartTimeMinutes = formStartTime.substring(3,5);

    const currentDay = new Date().getDate();
    if(this.form.value.startTime > this.form.value.endTime) {
      alert('The end time must be greater than the start time');
    }
    console.log(formDay == currentDay.toString());
    console.log(formStartTimeMinutes < actualMinutes);
    if(formDay == currentDay.toString()) {
      if(formStartTimeHours < actualHours) {
        alert("The start time must be greater than the actual time")
        return;
      } else if(formStartTimeHours == actualHours && formStartTimeMinutes < actualMinutes) {
        alert("The start time must be greater than the actual time - formStartTimeMinutes < actualMinutes")
        return;
      }
    }

    const createReservation = new CreateReservationForm();
    const mydate = this.datePipe.transform(this.form.get("date")?.value, "dd-MM-yyyy")

    if( this.form.valid ){
      const v = this.form.value;
      this._reServ.createReservations({
        roomTypeId: 1,
        date: v.date,
        startTime: v.startTime,
        endTime: v.endTime,
        size: v.size,
        reservedByProfessorId: Math.ceil(Math.random() * this.max),
        roomEquipment: v.equipmentIds
      })
        .subscribe({
          next: () => { this.route.navigateByUrl('/assignment-list') },
          error: (error) => { console.log(error); }
        })
    }
  }

  private getEquipments() {
    this.equipmentService.getAll().subscribe( {
      next: stud => this.equipments = stud,
      error: tempError => alert("Failed to get Equipment list from the server"),
      complete: () => console.log("Success get Equipment list")
    });
  }
}
