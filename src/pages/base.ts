import { ViewChild, ElementRef } from "@angular/core";
import { NavController } from "ionic-angular";
import { PopoverController } from 'ionic-angular';
import { Popover } from '../components';


export abstract class BasePage {
    @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
    constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) { }
    public presentPopover(ev) {
        let popover = this.popoverCtrl.create(Popover, {
            contentEle: this.content.nativeElement,
        }, {
                enableBackdropDismiss: true
            });
        popover.present({
            ev: ev
        });
    }
}
