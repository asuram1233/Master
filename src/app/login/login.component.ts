import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from '../login.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,public ls:LoginService) {}

  ngOnInit() {}
  login(data) {
    if (data.username === "" && data.password === "") {
      this.router.navigate(["admin"]);
    } 
    // else {
    //   alert("Please Enter Valid Credentials");
    // }
// this.ls.login(data).subscribe(res=>{
//   alert(res["message"])
// })
  }
}
