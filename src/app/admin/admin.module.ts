import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AdminViewComponent } from "./admin-view/admin-view.component";
import { BatchComponent } from "./batch/batch.component";
import { AttendanceComponent } from "./attendance/attendance.component";
import { ViewAllComponent } from "./view-all/view-all.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgFlashMessagesModule } from "ng-flash-messages";

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminViewComponent,
    BatchComponent,
    AttendanceComponent,
    ViewAllComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    NgFlashMessagesModule.forRoot()
  ],
  providers: [DatePipe]
})
export class AdminModule {}
