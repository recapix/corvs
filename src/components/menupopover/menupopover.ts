import {Component} from '@angular/core';
import {NavController, ViewController} from 'ionic-angular'; 

/*
 Generated class for the Popover page.
 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'component-popover',
  templateUrl: 'menupopover.html'
})
export class Popover {
  constructor(public navCtrl:NavController, public viewCtrl:ViewController) { }
  goPlace() {
    
  }

  close() {
    this.viewCtrl.dismiss();
  }

}