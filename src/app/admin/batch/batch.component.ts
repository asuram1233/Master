import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
declare var $:any
@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

  // arrayOfObj: any;
  constructor(private hc: HttpClient, private router: Router,private studser:StudentService) { }


  // ADDING THE BATCH THROUGH POST
  addbatch(batchObj)
   {
    console.log("batchObj is", batchObj);

    this.hc.post("/post", batchObj).subscribe(res => {

      alert(res["message"])
      // this.arrayOfObj = res["message"];
    })
    $("#myModal").modal("hide")
  }


  // GET BATCH DETAILS FROM DATABASE
  ngOnInit() 
  {
    // this.hc.get("/readDatabase").subscribe(res => {
    //   this.arrayOfObj = res["message"];
      // console.log("Batches from database", this.arrayOfObj);
    // })
  }


  // EDITING BATCH DETAILS
  // fromDateEdit: any;
  // toDateEdit: any;
  // batchnameEdit: any;
  // edit(batchObj) 
  // {
  //   this.fromDateEdit = batchObj.fromdate;
  //   this.toDateEdit = batchObj.todate;
  //   this.batchnameEdit = batchObj.batchname;
  // }


  // UPDATING BATCH DETAILS THROUGH PUT METHOD
  // update(updatedBatchObj)
  //  {
  //   console.log("updatedBatchObj is", updatedBatchObj);
  //   this.hc.put(`/update/${this.batchnameEdit}`, updatedBatchObj).subscribe(res => {
  //     this.arrayOfObj = res["message"];
  //   })
  //   $("#editmodal").modal("hide")
  // }

  // DELETING BATCH
  // delete(batchObj)
  //  {
  //   this.hc.delete(`/delete/${batchObj.batchname}`).subscribe(res => {
  //     this.arrayOfObj = res["message"]
  //   })
  // }
  

  // BATCH INSIDE FUNCTIONALITY FOR STUDENT DETAILS
  // batchInside(batchname)
  // {
  //    console.log("batchname is",batchname);
     
  //   this.router.navigate(["/admindashboard/studentdetails"]);
  //   this.studser.fromBatchTs(batchname);
  // }


  

}
