import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class BatchDataService {
  //instance
  data: any[];

  constructor() {}

  getData(data) {
    this.data = data;
  }

  setData() {
    return this.data;
  }
}
