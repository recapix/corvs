import { BasePage } from "../base";
import { Component } from "@angular/core";
import { NavController, PopoverController } from "ionic-angular"; 

@Component({
  selector: "page-contato",
  templateUrl: "contato.html"
})
export class ContatoPage extends BasePage { 
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) { super(navCtrl, popoverCtrl); }
}
