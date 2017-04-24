import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Storage }    from "@ionic/storage";
// Pages
import { HomePage } from "../pages/home/home";
// Services
import { LoggerService } from "../services";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage:any = HomePage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, storage:Storage, log:LoggerService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    storage.ready().then(() => {
      log.info("Storage Service is Started");
    });
  }
}
