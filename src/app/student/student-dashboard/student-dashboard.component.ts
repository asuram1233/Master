import { Component, OnInit } from "@angular/core";
import { BatchDataService } from "src/app/batch-data.service";
import { FormGroup, FormControl } from "@angular/forms";

declare let $;

@Component({
  selector: "app-student-dashboard",
  templateUrl: "./student-dashboard.component.html",
  styleUrls: ["./student-dashboard.component.css"]
})
export class StudentDashboardComponent implements OnInit {
  batchObj: Object[];
  student: Object[] = [
    {
      studentName: "Anirudh",
      studentId: "SAB77",
      studentContact: 9899886655,
      studentEmail: "anirudhsuram@gmail.com",
      guardianName: "Batman",
      guardianContact: 9999999999
    }
  ];
  studentDetails = new FormGroup({
    studentName: new FormControl(""),
    studentId: new FormControl(""),
    studentContact: new FormControl(""),
    studentEmail: new FormControl(""),
    guardianName: new FormControl(""),
    guardianContact: new FormControl("")
    // batchName: this.batchObj.batchName,
    // batchId: this.batchObj.batchId
  });
  constructor(private bs: BatchDataService) {}

  ngOnInit() {
    this.batchObj = this.bs.setData();
    console.log(this.batchObj);
  }

  addStudent() {
    this.student.push(this.studentDetails.value);
    console.log(this.student);
    $("#addStudentModal").modal("hide");
  }

  edit() {
    $("#addStudentModal").modal("show");
  }

  delete() {
    this.student.pop();
  }
}
