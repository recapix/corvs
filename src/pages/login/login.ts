
import { Component } from "@angular/core";
import { AlertController, NavController, LoadingController, Loading } from "ionic-angular";
import { AuthService } from "../../services";

@Component({
    selector: "page-login",
    templateUrl: "login.html"
})
export class LoginPage {
    loading: Loading;
    registerCredentials = { email: '', password: '' };
    constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) { }
    public login() {
        this.showLoading()
        this.auth.login(this.registerCredentials)
            .then(onresolve => {
                this.showError("error");
            })
            .catch(error => {
                this.showError(error);
            });
    }
    showLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    }
    showError(text) {
        this.loading.dismiss();
        let alert = this.alertCtrl.create({
            title: 'Fail',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    }
}
