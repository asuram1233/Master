import { Component, OnInit } from "@angular/core";

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

  constructor() {}

  ngOnInit() {}

  enquiry(data) {
    console.log(data);
  }
}
