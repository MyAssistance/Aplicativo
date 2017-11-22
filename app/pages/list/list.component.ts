import { Component } from "@angular/core";
import {Page} from "ui/page";
import { Router } from "@angular/router";

@Component({
  selector: "list",
  moduleId: module.id,
  templateUrl: "./list.html",
  styleUrls: ["./list-common.css", "./list.css"]
})

export class ListComponent {

	constructor(private router: Router, page: Page) {
    page.actionBarHidden = true;
    
}

  goConfig() {
    this.router.navigate(["/settings"]);
  }
}