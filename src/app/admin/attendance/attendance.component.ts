import { Component, OnInit } from "@angular/core";
import { DatePipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { NgFlashMessageService } from "ng-flash-messages";

@Component({
  selector: "app-attendance",
  templateUrl: "./attendance.component.html",
  styleUrls: ["./attendance.component.css"]
})
export class AttendanceComponent implements OnInit {
  date = new Date().toDateString();
  studentObj: Object[];
  batches: Object[] = [];

  students: Object[] = [];
  constructor(
    private datePipe: DatePipe,
    private hc: HttpClient,
    private ngFlash: NgFlashMessageService
  ) {}

  ngOnInit() {
    this.date = this.datePipe.transform(this.date, "MMM dd, yyyy");
    this.getBatches();
    this.getAllStudents();
  }

  //get batches
  getBatches() {
    this.hc.get("/admin/get_batches").subscribe(res => {
      if (res["message"] == "data not found") {
        this.ngFlash.showFlashMessage({
          messages: [res["message"]],
          type: "danger",
          dismissible: true
        });
      } else {
        this.batches = res["message"];
      }
    });
  }

  getAllStudents() {
    this.hc.get("/attendance/getAll_students").subscribe(res => {
      if (res["message"] === "Data Not Found") {
        this.ngFlash.showFlashMessage({
          messages: res["message"],
          dismissible: true,
          type: "info"
        });
      } else if (res["message"] !== null) {
        this.students = res["message"];
      }
    });
  }

  attendance(...attendance) {
    console.log(attendance);
    this.ngFlash.showFlashMessage({
      messages: ["Attendance Saved Successfully"],
      dismissible: true,
      type: "success"
    });
  }

  onSelect(data) {
    this.studentObj = this.students.filter(element => {
      return element["batchId"] == data;
    });
  }
}
