import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AdminDashboardComponent } from "./admin/admin-dashboard/admin-dashboard.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "contact_us", component: ContactComponent },
  { path: "about_us", component: AboutComponent },
  { path: "login", component: LoginComponent },
  { path: "admin_dashboard", component: AdminDashboardComponent },
  { path: "", redirectTo: "/login", pathMatch: "full" }
  // { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
