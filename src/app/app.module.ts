import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import {AppRoutingModule} from "./app-routing.module";
import { ClassroomReservationComponent } from './components/classroom-reservation/classroom-reservation.component';
import { ScheduleComponent } from './components/personal-space/schedule/schedule.component';
import { StudentComponent } from './components/student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import { AssignmentListComponent } from './components/personal-space/classroom-reservation/assignment-list/assignment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavComponent,
    FooterComponent,
    StudentComponent,
    ClassroomReservationComponent,
    ScheduleComponent,
    AssignmentListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
