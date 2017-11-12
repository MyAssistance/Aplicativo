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

	constructor(private router: Router, page: Page) {
        page.actionBarHidden = true;
        this.user = new User();
    }

  submit() {
    alert("Email enviado paraa: " + this.user.email);
    this.router.navigate(["/"]);
  }
}