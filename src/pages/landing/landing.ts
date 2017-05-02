import { BasePageNoMenu } from "../base";

import { Component, OnInit } from "@angular/core";
import { NavController, PopoverController, MenuController } from "ionic-angular";

import * as Pages from "../";

import { AuthService } from "../../services";



@Component({
    selector: "page-landing",
    templateUrl: "landing.html"
})
export class LandingPage extends BasePageNoMenu implements OnInit {
    ngOnInit(): void {
        var userInfo = this.auth.getUserInfo();
        debugger;
        console.log(userInfo);
        this.navCtrl.setRoot(Pages.HomePage);
    }

    constructor(public navCtrl: NavController, private auth: AuthService, public popoverCtrl: PopoverController, public menuCtrl: MenuController) { super(navCtrl, popoverCtrl, menuCtrl); }

    openSignUp() {
        this.navCtrl.push(Pages.SignupPage, {}, { animate: false });
    }
    openLogIn() {
        this.navCtrl.push(Pages.LoginPage, {}, { animate: false });
    }
}
