import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgFlashMessageService } from "ng-flash-messages";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  imgUrls: any[] = [
    { url: "../../assets/certificate-4.png" },
    { url: "../../assets/certificate-3.png" },
    { url: "../../assets/Certified-2.jpg" },
    { url: "../../assets/certificate-5.jpg" },
    { url: "../../assets/certificate-1.jpg" },
    { url: "../../assets/certificate-6.jpg" }
  ];

  constructor(private hc: HttpClient, private ngFlash: NgFlashMessageService) {}

  ngOnInit() {}

  enquiry(data) {
    this.hc.post("/admin/contact", data).subscribe(res => {
      if (res["message"] === "We will contact you soon") {
        this.ngFlash.showFlashMessage({
          messages: [res["message"]],
          type: "success",
          dismissible: true
        });
      } else {
        this.ngFlash.showFlashMessage({
          messages: [res["message"]],
          type: "danger",
          dismissible: true
        });
      }
    });
  }
}
