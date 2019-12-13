import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public hc: HttpClient) { }
  login(userObj)
  {
    console.log("this is service",userObj);
    
    if (userObj.name == "admin") {
      this.hc.post("admin/login", userObj)

    }
    else if (userObj.name == "user") {
      this.hc.post("user/login", userObj)
    }


  }
  logout() {

  }
  isLoggedIn() {


  }
}

