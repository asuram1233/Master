import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { BatchComponent } from "./batch/batch.component";
import { AttendanceComponent } from "./attendance/attendance.component";
import { ViewAllComponent } from "./view-all/view-all.component";

const routes: Routes = [
  {
    path: "admin_dashboard",
    component: AdminDashboardComponent,
    children: [
      { path: "batch", component: BatchComponent },
      { path: "attendance", component: AttendanceComponent },
      { path: "view_all", component: ViewAllComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
