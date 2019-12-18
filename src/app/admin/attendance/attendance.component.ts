import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-attendance",
  templateUrl: "./attendance.component.html",
  styleUrls: ["./attendance.component.css"]
})
export class AttendanceComponent implements OnInit {
  batches: Object[] = [
    { batchName: "Batch 21", batchId: "b21" },
    { batchName: "Batch 22", batchId: "b22" },
    { batchName: "Batch 23", batchId: "b23" }
  ];
  students: Object[] = [{ studentId: "SCLSS1", studentName: "Bala" }];
  constructor() {}

  ngOnInit() {}
  attendance(attendance) {
    console.log(attendance);
  }
}
