import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private hc:HttpClient) { }

  // FROM BATCH TS
  InserviceFrombatchTs: any;

  fromBatchTs(fromBatchTsArgmt) 
  {
    console.log("fromBatchTsArgmt is", fromBatchTsArgmt);
    this.InserviceFrombatchTs = fromBatchTsArgmt;
  }

  TostudDetailsTs()
  {
    return this.InserviceFrombatchTs;
  }



  // LOGIN FUNCTIONALITY
  IsLoggedIn(){
    return localStorage.getItem('token');
  };
  fromLoginTS(loginObj):Observable<any>
  {
    console.log("loginObj is",loginObj);
   return this.hc.post("/login",loginObj);
  }


// LOGOUT
logOut()
{
localStorage.clear();

}





// FOR USER DATA
studentid:any

foruserdata(studid)
{
this.studentid=studid
}


Toviewprofile()
{
  return this.studentid;
}

// GETTING STUDENT OBJECT FROM VIEW STUDENT PROFILE COMPONENT
stuproObj:any;
forstuatdOnly(stuprodObj)
{
this.stuproObj=stuprodObj
}

tostuatdcom()
{
  return this.stuproObj;
}

}
