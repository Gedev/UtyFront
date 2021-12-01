import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../services/student.service";
import {Student} from "../../model/student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  listStudent: Student[] = [];

  constructor(private _sServ:StudentService) {

  }

  ngOnInit(): void {
    this.getListStudent();
  }

  getListStudent() {
    this._sServ.getAll().subscribe({
      next: stud => this.listStudent = stud,
      error: tempError => alert("Echec récupération liste serveur"),
      complete: () => console.log("Success")
    });
  }

}
