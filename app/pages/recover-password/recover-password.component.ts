import { Component } from "@angular/core";
import {Page} from "ui/page";
import { User } from "../../shared/user/user";
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
	templateUrl: "./pages/recover-password/recover-password.html",
  	styleUrls: ["pages/recover-password/recover-password-common.css", "pages/recover-password/recover-password.css"]
})
export class RecoverPasswordComponent {
	user: User;
  page: Page;

	constructor(private router: Router, page: Page) {
        page.actionBarHidden = true;
        this.page = page
        this.user = new User();
    }

  ngOnInit() {
    this.page.actionBarHidden = true;
    //this.page.backgroundImage = "res://bg_login";
  }

  submit() {
    this.router.navigate(["/"]);
  }
}