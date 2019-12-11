import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BatchDataService } from "src/app/batch-data.service";
declare var $;
@Component({
  selector: "app-batch",
  templateUrl: "./batch.component.html",
  styleUrls: ["./batch.component.css"]
})
export class BatchComponent implements OnInit {
  //instance

  batches: Object[] = [
    {
      batchName: "Batch 21",
      batchId: "b21",
      startDate: "2 OCT 2019",
      endDate: "31 DEC 2019"
    },
    {
      batchName: "Batch 22",
      batchId: "b22",
      startDate: "2 OCT 2019",
      endDate: "31 DEC 2019"
    },
    {
      batchName: "Batch 23",
      batchId: "b23",
      startDate: "2 OCT 2019",
      endDate: "31 DEC 2019"
    }
  ];

  constructor(private router: Router, private bs: BatchDataService) {}

  ngOnInit() {}

  batch(batchData) {
    this.batches.push(batchData);
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
