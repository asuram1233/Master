import { Component, OnInit } from "@angular/core";
import { BatchDataService } from "src/app/batch-data.service";
import { FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

declare let $;

@Component({
  selector: "app-student-dashboard",
  templateUrl: "./student-dashboard.component.html",
  styleUrls: ["./student-dashboard.component.css"]
})
export class StudentDashboardComponent implements OnInit {
  batchObj: Object[];
  student: Object[];
  batchDetails: Object = {
    batchId: localStorage.getItem("batchId"),
    batchName: localStorage.getItem("batchName")
  };

  studentDetails = new FormGroup({
    studentName: new FormControl(""),
    studentId: new FormControl(""),
    studentContact: new FormControl(""),
    studentEmail: new FormControl(""),
    guardianName: new FormControl(""),
    guardianContact: new FormControl("")
  });

  constructor(private bs: BatchDataService, private hc: HttpClient) {}

  ngOnInit() {
    this.batchObj = this.bs.setData();
    this.getStudent();
  }

  getStudent() {
    this.hc.post("/student/get_student", this.batchDetails).subscribe(res => {
      if (res["message"] === "No data found") {
        alert(res["message"]);
      } else {
        this.student = res["message"];
        console.log(this.student);
      }
    });
  }

  addStudent() {
    this.studentDetails.value.batchId = localStorage.getItem("batchId");
    this.studentDetails.value.batchName = localStorage.getItem("batchName");
    this.student.push(this.studentDetails.value);
    this.hc
      .post("/student/add_student", this.studentDetails.value)
      .subscribe(res => {
        alert(res["message"]);
      });
    $("#addStudentModal").modal("hide");
  }

  edit() {
    $("#addStudentModal").modal("show");
  }

  delete(data) {
    this.hc.post("/student/delete_student", data).subscribe(res => {
      alert(res["message"]);
      this.getStudent();
    });
  }
}
