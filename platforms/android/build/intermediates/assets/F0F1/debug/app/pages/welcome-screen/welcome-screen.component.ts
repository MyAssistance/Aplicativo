import { Component } from "@angular/core";
import {Page} from "ui/page";
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
	templateUrl: "./pages/welcome-screen/welcome-screen.html",
  	styleUrls: ["pages/welcome-screen/welcome-screen-common.css", "pages/welcome-screen/welcome-screen.css"]
})
export class WelcomeScreenComponent {

	constructor(private router: Router, page: Page) {
        page.actionBarHidden = true;
        var timer = require("timer");

        const id = timer.setTimeout(() => {
            this.router.navigate(["/login"]);
        }, 1500);

    }


}