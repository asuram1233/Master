import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { FormsModule } from "@angular/forms";
import { AdminRoutingModule } from "./admin/admin-routing.module";
import { AdminModule } from "./admin/admin.module";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { StudentModule } from "./student/student.module";
import { StudentRoutingModule } from "./student/student-routing.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AdminRoutingModule,
    AdminModule,
    AngularFontAwesomeModule,
    StudentModule,
    StudentRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
