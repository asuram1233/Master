import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-student-view",
  templateUrl: "./student-view.component.html",
  styleUrls: ["./student-view.component.css"]
})
export class StudentViewComponent implements OnInit {
  student: Object = {
    studentName: "Anirudh",
    studentId: "SAB77",
    studentContact: "9988776655",
    studentEmail: "anirudhsuram@gmail.com",
    guardianName: "Batman",
    guardianContact: "1010101010"
  };
  constructor() {}

  ngOnInit() {}
}
