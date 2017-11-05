import { Component } from "@angular/core";
import {Page} from "ui/page";
import { User } from "../../shared/user/user";
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
	templateUrl: "./pages/login/login.html",
  	styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent {
	user: User;

	constructor(private router: Router, page: Page) {
        page.actionBarHidden = true;
        this.user = new User();
    }

  submit() {
    alert("You’re using: " + this.user.email);
    this.router.navigate(["/list"]);
  }



}