import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AdminViewComponent } from "./admin-view/admin-view.component";
import { BatchComponent } from "./batch/batch.component";
import { AttendanceComponent } from "./attendance/attendance.component";
import { ViewAllComponent } from "./view-all/view-all.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminViewComponent,
    BatchComponent,
    AttendanceComponent,
    ViewAllComponent
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule, HttpClientModule]
})
export class AdminModule {}
