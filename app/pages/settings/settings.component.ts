import { Component, OnInit } from "@angular/core";
import {Page} from "ui/page";
import { User } from "../../shared/user/user";
import { Router } from "@angular/router";
import { Observable } from "data/observable";
import { TNSFontIconService } from 'nativescript-ngx-fonticon';

@Component({
  selector: "my-app",
	templateUrl: "./pages/settings/settings.html",
  	styleUrls: ["pages/settings/settings-common.css", "pages/settings/settings.css"]
})
export class SettingsComponent implements OnInit {
  user: User;
  page: Page;

	constructor(private router: Router, page: Page, private fonticon: TNSFontIconService) {
        this.page = page;
        this.user = new User();

        
  }

  ngOnInit() {
    this.page.actionBarHidden = true;
  }

   goList() {
    this.router.navigate(["/list"]);
  }

}