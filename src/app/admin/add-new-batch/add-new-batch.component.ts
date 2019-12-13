import { Component, OnInit } from '@angular/core';
 declare    var $:any

@Component({
  selector: 'app-add-new-batch',
  templateUrl: './add-new-batch.component.html',
  styleUrls: ['./add-new-batch.component.css']
})
export class AddNewBatchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  userObj(userObj){
    $("#myModal").modal("hide");

  }

}
