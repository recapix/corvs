import { BasePageNoMenu } from "../base";

import { Component } from "@angular/core";
import { NavController, PopoverController, MenuController } from "ionic-angular";

import * as Pages from "../";

@Component({
    selector: "page-landing",
    templateUrl: "landing.html"
})
export class LandingPage extends BasePageNoMenu {
    constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public menuCtrl: MenuController) { super(navCtrl, popoverCtrl, menuCtrl); }

    openSignUp() {
        this.navCtrl.push(Pages.SignupPage, {}, {animate: false});
    }
    openLogIn() {
        this.navCtrl.push(Pages.LoginPage, {}, {animate: false});
    }
}
