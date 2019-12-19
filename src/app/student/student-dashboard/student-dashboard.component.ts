import { Component, OnInit } from "@angular/core";
import { BatchDataService } from "src/app/batch-data.service";
import { FormGroup, FormControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { log } from "util";
import { NgFlashMessageService } from "ng-flash-messages";

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

  editStudentObj: any = {
    studentName: "",
    studentId: "",
    studentContact: "",
    studentEmail: "",
    guardianName: "",
    guardianContact: ""
  };

  studentDetails = new FormGroup({
    studentName: new FormControl(""),
    studentId: new FormControl(""),
    studentContact: new FormControl(""),
    studentEmail: new FormControl(""),
    guardianName: new FormControl(""),
    guardianContact: new FormControl("")
  });

  constructor(
    private bs: BatchDataService,
    private hc: HttpClient,
    private ngFlash: NgFlashMessageService
  ) {}

  ngOnInit() {
    this.batchObj = this.bs.setData();
    this.getStudent();
  }

  getStudent() {
    this.hc.post("/student/get_student", this.batchDetails).subscribe(res => {
      if (res["message"] === "No data found") {
        this.ngFlash.showFlashMessage({
          messages: [res["message"]],
          type: "warning",
          dismissible: true,
          timeout: false
        });
      } else {
        this.student = res["message"];
      }
    });
  }

  addStudent() {
    this.studentDetails.value.batchId = localStorage.getItem("batchId");
    this.studentDetails.value.batchName = localStorage.getItem("batchName");
    this.hc
      .post("/student/add_student", this.studentDetails.value)
      .subscribe(res => {
        if (res["message"] === "Student added successfully") {
          this.ngFlash.showFlashMessage({
            messages: [res["message"]],
            type: "success",
            dismissible: true
          });
        } else if (res["message"] === "Error while Save") {
          this.ngFlash.showFlashMessage({
            messages: [res["message"]],
            type: "danger",
            dismissible: true
          });
        } else {
          this.ngFlash.showFlashMessage({
            messages: [res["message"]],
            type: "danger",
            dismissible: true
          });
        }
        this.getStudent();
      });
    $("#addStudentModal").modal("hide");
  }

  edit(data) {
    this.editStudentObj = data;
    $("#editStudentModal").modal("show");
  }

  updateStudent(editedData) {
    editedData.batchId = localStorage.getItem("batchId");
    editedData.batchName = localStorage.getItem("batchName");
    this.hc.put("/student/update_student", editedData).subscribe(res => {
      if (res["message"] == "Data not found to update") {
        this.ngFlash.showFlashMessage({
          messages: [res["message"]],
          type: "warning",
          dismissible: true
        });
      } else if (res["message"] == "Student record updated successfully") {
        this.ngFlash.showFlashMessage({
          messages: [res["message"]],
          type: "success",
          dismissible: true
        });
      } else if (res["message"] == "Error while update") {
        this.ngFlash.showFlashMessage({
          messages: [res["message"]],
          type: "danger",
          dismissible: true
        });
      } else {
        this.ngFlash.showFlashMessage({
          messages: [res["message"]],
          dismissible: true,
          type: "warning"
        });
      }
      this.getStudent();
    });
    $("#editStudentModal").modal("hide");
  }

  delete(data) {
    this.hc.post("/student/delete_student", data).subscribe(res => {
      if (res["message"] === "Data not found to delete") {
        this.ngFlash.showFlashMessage({
          messages: [res["message"]],
          dismissible: true,
          type: "warning"
        });
      } else if (
        res["message"] ===
        "Student record of this batch is deleted successfully"
      ) {
        this.ngFlash.showFlashMessage({
          messages: [res["message"]],
          dismissible: true,
          type: "success"
        });
      } else {
        this.ngFlash.showFlashMessage({
          messages: [res["message"]],
          dismissible: true,
          type: "danger"
        });
      }
      this.getStudent();
    });
  }
}
