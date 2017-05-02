import { Component } from "@angular/core";
import { NavController, AlertController, LoadingController, Loading } from "ionic-angular";
import { AuthService, UserService } from "../../services";
import { UserModel } from "../../models";
import { HomePage } from "../";

@Component({
    selector: "page-signup",
    templateUrl: "signup.html"
})
export class SignupPage {
    createSuccess = false;
    loading: Loading;
    registerCredentials = { email: "", password: "", name: "", surname: "" };

    constructor(private nav: NavController, private auth: AuthService, private loadingCtrl: LoadingController, private alertCtrl: AlertController, private userService:UserService) { }

    showLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    }

    public register() {
        this.showLoading()
        this.auth.register(this.registerCredentials).then(resolve => {
            var user = new UserModel();
            user.Nome = this.registerCredentials.name;
            user.Sobrenome = this.registerCredentials.surname;
            user.UserId = resolve.uid;
            user.Email = this.registerCredentials.email;
            this.userService.Insert(user).then(r => {
                this.createSuccess = true;
                this.showPopup("Success", "Account created.");
            }).catch(error => {
                this.showPopupError("Error", error);
            });
        }).catch(error => {
            this.showPopupError("Error", error);
        });
    }

    showPopup(title, text) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: "OK",
                    handler: data => {
                        if (this.createSuccess) {
                            this.nav.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    }
    showPopupError(title, text) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: "OK"
                }
            ]
        });
        alert.present();
    }
}