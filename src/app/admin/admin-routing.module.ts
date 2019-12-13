import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { BatchComponent } from "./batch/batch.component";
import { AttendanceComponent } from "./attendance/attendance.component";
import { ViewAllComponent } from "./view-all/view-all.component";
import { Batch21Component } from './batch21/batch21.component';
import { Batch22Component } from './batch22/batch22.component';
import { Batch23Component } from './batch23/batch23.component';
import { Batch24Component } from './batch24/batch24.component';
import { AddNewBatchComponent } from './add-new-batch/add-new-batch.component';
import { AddNewStudentComponent } from './add-new-student/add-new-student.component';

const routes: Routes = [
  {
    path: "admin",
    component: AdminDashboardComponent,
    children: [
      {
        path: "batch", component: BatchComponent,

        children: [
          { 
            path: "batch21", component: Batch21Component,
            children:[{
              path: "AddNewStudent", component:AddNewStudentComponent,

            }]
           },
          { path: "batch22", component: Batch22Component },
          { path: "batch23", component: Batch23Component },
          { path: "batch24", component: Batch24Component },
          { path: "addnewbatch", component: AddNewBatchComponent },


        ]

      },
      { path: "attendance", component: AttendanceComponent },
      { path: "view_all", component: ViewAllComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
