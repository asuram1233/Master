import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private hc: HttpClient, private route: Router) {}

  login(login): Observable<any> {
    return this.hc.post("/login", login);
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    this.route.navigate(["/login"]);
  }
  isLoggedIn() {
    let token = localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  isDashboard() {
    let userroll = localStorage.getItem("userroll");
    if (userroll === "admin") {
      return true;
    } else {
      return false;
    }
  }
}
