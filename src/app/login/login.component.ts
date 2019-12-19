import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../login.service";
import { NgFlashMessageService } from "ng-flash-messages";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private ls: LoginService,
    private ngFlash: NgFlashMessageService
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.ls.logout();
    }, 0);
  }
  login(data) {
    this.ls.login(data).subscribe(res => {
      if (res["message"] == "please enter valid credentials") {
        this.ngFlash.showFlashMessage({
          messages: [res["message"]],
          type: "danger",
          dismissible: true
        });
      } else if (res["message"] == "login is success") {
        localStorage.setItem("token", res["token"]);
        localStorage.setItem("username", res["username"]);
        localStorage.setItem("userroll", res["userroll"]);
        this.ngFlash.showFlashMessage({
          messages: [res["message"]],
          dismissible: true,
          type: "success"
        });
        if (res["userroll"] === "admin") {
          this.router.navigate(["admin_dashboard"]);
        } else if (res["userroll"] === "student") {
          this.router.navigate(["student_view"]);
        } else {
          this.router.navigate(["login"]);
        }
      } else {
        alert(res["message"]);
      }
    });
  }
}
