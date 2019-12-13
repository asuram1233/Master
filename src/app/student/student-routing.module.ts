import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentDashboardComponent } from "./student-dashboard/student-dashboard.component";
import { StudentViewComponent } from "./student-view/student-view.component";

const routes: Routes = [
  { path: "student_dashboard", component: StudentDashboardComponent },
  { path: "student_view", component: StudentViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule {}
