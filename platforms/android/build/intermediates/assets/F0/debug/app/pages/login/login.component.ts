import { Component, OnInit } from "@angular/core";
import {Page} from "ui/page";
import { User } from "../../shared/user/user";
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
	templateUrl: "./pages/login/login.html",
  	styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent implements OnInit {
  user: User;
  page: Page;

	constructor(private router: Router, page: Page) {
        this.page = page;
        this.user = new User();
        
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.backgroundImage = "res://bg_login";
  }

  submit() {
    alert("You’re using: " + this.user.email);
    this.router.navigate(["/list"]);
  }

   recoverPassword() {
    this.router.navigate(["/recoverPassword"]);
  }

}