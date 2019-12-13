import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BatchDataService } from "src/app/batch-data.service";
import { HttpClient } from "@angular/common/http";
declare var $;
@Component({
  selector: "app-batch",
  templateUrl: "./batch.component.html",
  styleUrls: ["./batch.component.css"]
})
export class BatchComponent implements OnInit {
  //instance

  batches: Object[] = [];

  constructor(
    private router: Router,
    private bs: BatchDataService,
    private hc: HttpClient
  ) {}

  ngOnInit() {
    this.hc.get("/admin/get_batches").subscribe(res => {
      if (res["message"] == "data not found") {
        alert(res["message"]);
      } else {
        this.batches = res["message"];
      }
    });
  }

  batch(batchData) {
    this.batches.push(batchData);
    this.hc.post("/admin/add_batch", batchData).subscribe(res => {
      alert(res["message"]);
    });
    $("#addBatchModal").modal("hide");
  }

  delete() {
    this.batches.pop();
  }

  edit() {
    $("#addBatchModal").modal("show");
  }

  routeToStudent(batchInfo) {
    this.bs.getData(batchInfo);
    this.router.navigate(["student_dashboard"]);
  }
}
