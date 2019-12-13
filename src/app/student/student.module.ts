import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StudentRoutingModule } from "./student-routing.module";
import { StudentDashboardComponent } from "./student-dashboard/student-dashboard.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { StudentViewComponent } from './student-view/student-view.component';

@NgModule({
  declarations: [StudentDashboardComponent, StudentViewComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class StudentModule {}
