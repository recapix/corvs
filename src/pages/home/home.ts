import { BasePage } from "../base";

import { Component } from "@angular/core";
import { NavController, PopoverController, MenuController } from "ionic-angular"; 

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage extends BasePage {
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public menuCtrl:MenuController) { super(navCtrl, popoverCtrl,menuCtrl); }
}
