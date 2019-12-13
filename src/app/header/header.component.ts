import { Component, OnInit } from "@angular/core";
import { LoginService } from '../login.service';
// declare    var $:any

@Component({
  selector: "header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(public ls:LoginService) {}

  ngOnInit() {
    this.ls.logout()
  }
  // $("#myModal1").modal("hide");


}
