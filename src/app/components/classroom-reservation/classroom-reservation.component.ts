import { Component, OnInit } from '@angular/core';
import {RoomEquipment} from "../../models/room-equipment";
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {RoomType} from "../../models/room-type";
import {DatePipe} from "@angular/common";
import { CreateReservationForm } from 'src/app/models/create-reservation-form';
import {RoomEquipmentService} from "../../services/api_services/room-equipment.service";
import {ClassroomReservationService} from "../../services/api_services/classroom-reservation.service";

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
      endTime: new FormControl( null, [Validators.required]),
      size: ['', Validators.required],
      equipmentIds: ['']
    },
    );
    // this.form.controls['endTime'].addValidators(this.timeValidator)
  }

  ngOnInit(): void {
    this.getEquipments();
  }

  onSubmit() {
    if(this.form.value.startTime > this.form.value.endTime) {
      alert('The end date must be greater than the start date');
      return;
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
        roomEquipment: v.equipmentIds
      })
        .subscribe({
          next: (inserted) => {  },
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

  // timeValidator( control : AbstractControl ) : ValidationErrors | null {
  //   const start_time = this.form.value.startTime;
  //   const end_time = control.value.endTime;
  //
  //   if(start_time && end_time && start_time < end_time) {
  //     return null;
  //   } else {
  //     return {
  //       timeCompare: 'The end date must be greater than the start date'
  //     }
  //   }
  // }
}
