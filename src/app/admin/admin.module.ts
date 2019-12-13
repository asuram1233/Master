import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms'
import { AdminRoutingModule } from "./admin-routing.module";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AdminViewComponent } from './admin-view/admin-view.component';
import { BatchComponent } from './batch/batch.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { Batch21Component } from './batch21/batch21.component';
import { Batch22Component } from './batch22/batch22.component';
import { Batch23Component } from './batch23/batch23.component';
import { Batch24Component } from './batch24/batch24.component';
import { AddNewBatchComponent } from './add-new-batch/add-new-batch.component';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { StudentDataB21Component } from './student-data-b21/student-data-b21.component';
import { AddNewStudentComponent } from './add-new-student/add-new-student.component'

@NgModule({
  declarations: [AdminDashboardComponent, AdminViewComponent, BatchComponent, AttendanceComponent, ViewAllComponent, Batch21Component, Batch22Component, Batch23Component, Batch24Component, AddNewBatchComponent, StudentDataB21Component, AddNewStudentComponent],
  imports: [CommonModule, AdminRoutingModule,FormsModule,HttpClientModule]
})
export class AdminModule {}
