import { Component, OnInit } from "@angular/core";
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

  constructor() {}

  ngOnInit() {}

  batch(batchData) {
    $("#addBatchModal").modal("hide");
  }
}
