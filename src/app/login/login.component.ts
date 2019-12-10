import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  login(data) {
    if (data.username === "" && data.password === "") {
      this.router.navigate(["admin"]);
    } else {
      alert("Please Enter Valid Credentials");
    }
  }
}
