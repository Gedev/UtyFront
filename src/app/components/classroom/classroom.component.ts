import { Component, OnInit } from '@angular/core';
import {Classroom} from "../../models/classroom";
import {ClassroomService} from "../../services/classroom.service";

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {

  listClassroom: Classroom[] = [];

  constructor(private _sServ:ClassroomService) { }

  ngOnInit(): void {
  }

  getListClassrooms() {
    this._sServ.getAll().subscribe( {
      next: stud => this.listClassroom = stud,
      error: tempError => alert("Failed to get classroom list from server"),
      complete: () => console.log("Success to get classroom list from server")
    })
  }

}
