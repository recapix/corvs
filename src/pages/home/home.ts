import { BasePage } from "../base";

import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { PopoverController } from 'ionic-angular';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage extends BasePage {
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) { super(navCtrl, popoverCtrl); }
}
