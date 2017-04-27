import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { IonicStorageModule } from "@ionic/storage";
import { StatusBar } from "@ionic-native/status-bar";
import { AngularFireModule } from "angularfire2";

import { MyApp } from "./app.component";
// Pages
import { ContatoPage, HomePage, LandingPage, LoginPage, SignupPage } from "../pages";
// Pages
import { Popover } from "../components";
// Configurations
import { FirebaseConfig } from "./app.configurations";
//Services 
import { LoggerService, StorageService } from "../services";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContatoPage,
    LandingPage,
    LoginPage,
    SignupPage,
    Popover
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: "__mydb",
      driverOrder: ["indexeddb", "sqlite", "websql"]
    }),
    AngularFireModule.initializeApp(FirebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContatoPage,
    LandingPage,
    LoginPage,
    SignupPage,
    Popover
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoggerService,
    StorageService
  ]
})
export class AppModule { }
