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
  editBatch: Object;
  constructor(
    private router: Router,
    private bs: BatchDataService,
    private hc: HttpClient
  ) {}

  ngOnInit() {
    this.getBatches();
  }
  getBatches() {
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

  delete(data) {
    console.log(data);
    this.hc.delete(`/admin/delete_batch/${data.batchId}`).subscribe(res => {
      alert(res["message"]);
      this.getBatches();
    });
  }

  edit(data) {
    $("#addBatchModal").modal("show");
  }

  routeToStudent(batchInfo) {
    this.bs.getData(batchInfo);
    localStorage.setItem("batchId", batchInfo.batchId);
    localStorage.setItem("batchName", batchInfo.batchName);
    this.router.navigate(["student_dashboard"]);
  }
}
