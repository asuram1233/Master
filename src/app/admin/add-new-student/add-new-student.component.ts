import { Component, OnInit } from '@angular/core';
declare    var $:any

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.css']
})
export class AddNewStudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  userObj(obj){
    $("#myModal12").modal("hide");

  }

}
