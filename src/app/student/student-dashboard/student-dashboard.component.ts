import { Component, OnInit } from "@angular/core";
import { BatchDataService } from "src/app/batch-data.service";

@Component({
  selector: "app-student-dashboard",
  templateUrl: "./student-dashboard.component.html",
  styleUrls: ["./student-dashboard.component.css"]
})
export class StudentDashboardComponent implements OnInit {
  batchObj: Object[];
  constructor(private bs: BatchDataService) {}

  ngOnInit() {
    this.batchObj = this.bs.setData();
    console.log(this.batchObj);
  }
}
