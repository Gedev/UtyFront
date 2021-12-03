import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomepageComponent} from "./components/homepage/homepage.component";
import {ClassroomReservationComponent} from "./components/classroom-reservation/classroom-reservation.component";
import {StudentComponent} from "./components/student/student.component";
import {ScheduleComponent} from "./components/personal-space/schedule/schedule.component";

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'my-personal-space', component: ScheduleComponent },
  { path: 'classroom-reservation', component: ClassroomReservationComponent},
  { path: 'student', component: StudentComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
