import { Component, OnInit } from "@angular/core";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-attendance",
  templateUrl: "./attendance.component.html",
  styleUrls: ["./attendance.component.css"]
})
export class AttendanceComponent implements OnInit {
  date = new Date().toDateString();
  batches: Object[] = [
    { batchName: "Batch 21", batchId: "b21" },
    { batchName: "Batch 22", batchId: "b22" },
    { batchName: "Batch 23", batchId: "b23" }
  ];
  students: Object[] = [
    { studentId: "SAB77", studentName: "Anirudh Suram" },
    { studentId: "RRG12", studentName: "Antman" }
  ];
  constructor(private datePipe: DatePipe) {}

  ngOnInit() {
    this.date = this.datePipe.transform(this.date, "MMM dd, yyyy");
  }

  attendance(attendance) {
    console.log(attendance);
  }
}
