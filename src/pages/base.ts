import { ViewChild, ElementRef } from "@angular/core";
import { NavController, PopoverController, MenuController } from 'ionic-angular';
import { Popover } from '../components';


export abstract class BasePage {
    @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
    constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public menuCtrl: MenuController) {
        this.menuCtrl.enable(false, "myMenu"); }
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
