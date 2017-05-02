import { ViewChild, ElementRef, Component } from "@angular/core";
import { NavController, PopoverController, MenuController } from 'ionic-angular';
import { Popover } from '../../components';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  @ViewChild('popoverContent', { read: ElementRef }) content: ElementRef;
    constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public menuCtrl: MenuController) {
        this.menuCtrl.enable(true, "myMenu"); }
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
