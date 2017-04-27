
import { Component } from "@angular/core";
import { NavController, MenuController } from "ionic-angular";

@Component({
    selector: "page-landing",
    templateUrl: "landing.html"
})
export class LandingPage {
    constructor(nav: NavController, private menuCtrl: MenuController) {
        this.menuCtrl.enable(false, "myMenu");
    }
}