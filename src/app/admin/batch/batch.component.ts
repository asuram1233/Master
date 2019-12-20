import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BatchDataService } from "src/app/batch-data.service";
import { HttpClient } from "@angular/common/http";
import { NgFlashMessageService } from "ng-flash-messages";
declare var $;
@Component({
  selector: "app-batch",
  templateUrl: "./batch.component.html",
  styleUrls: ["./batch.component.css"]
})
export class BatchComponent implements OnInit {
  //instance

  batches: Object[] = [];
  editObj: any = { batchId: "", batchName: "", startDate: "", endDate: "" };

  constructor(
    private router: Router,
    private bs: BatchDataService,
    private hc: HttpClient,
    private ngFlash: NgFlashMessageService
  ) {}

  ngOnInit() {
    this.getBatches();
  }
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
  batch(batchData) {
    this.hc.post("/admin/add_batch", batchData).subscribe(res => {
      if (res["message"] === "Batch added successfully") {
        this.ngFlash.showFlashMessage({
          messages: [res["message"]],
          type: "success",
          dismissible: true
        });
      } else if (
        res["message"] === "Batch already exist with the same details"
      ) {
        this.ngFlash.showFlashMessage({
          messages: [res["message"]],
          type: "info",
          dismissible: true
        });
      } else {
        this.ngFlash.showFlashMessage({
          messages: [res["message"]],
          type: "danger",
          dismissible: true
        });
      }
      this.getBatches();
    });
    $("#addBatchModal").modal("hide");
  }

  delete(data) {
    console.log(data);
    this.hc.delete(`/admin/delete_batch/${data.batchId}`).subscribe(res => {
      if (res["message"] === "Data cannot be deleted") {
        this.ngFlash.showFlashMessage({
          messages: [res["message"]],
          type: "warning",
          dismissible: true
        });
      } else if (res["message"] === "Batch deleted successfully") {
        this.ngFlash.showFlashMessage({
          messages: [res["message"]],
          type: "success",
          dismissible: true
        });
      } else {
        this.ngFlash.showFlashMessage({
          messages: [res["message"]],
          type: "danger",
          dismissible: true
        });
      }
      this.getBatches();
    });
  }

  edit(data) {
    $("#editBatchForm").modal("show");
    this.editObj = data;
  }

  updateBatch(updateData) {
    this.hc.put("admin/update_batch", updateData).subscribe(res => {
      if (res["message"] === "Batch updated successfully") {
        this.ngFlash.showFlashMessage({
          messages: [res["message"]],
          type: "success",
          dismissible: true
        });
      } else if (res["message"] === "Batch not found") {
        this.ngFlash.showFlashMessage({
          messages: [res["message"]],
          dismissible: true,
          type: "warning"
        });
      } else {
        this.ngFlash.showFlashMessage({
          messages: [res["message"]],
          type: "danger",
          dismissible: true
        });
      }
      this.getBatches();
    });
    $("#editBatchForm").modal("hide");
  }

  routeToStudent(batchInfo) {
    this.bs.getData(batchInfo);
    localStorage.setItem("batchId", batchInfo.batchId);
    localStorage.setItem("batchName", batchInfo.batchName);
    this.router.navigate(["student_dashboard"]);
  }
}
