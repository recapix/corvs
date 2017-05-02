import { Injectable } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';

@Injectable()
export class AuthService {
    private user = {};
    private isLoggedIn: boolean;
    constructor(private af: AngularFire) {
        this.af.auth.subscribe(user => {
            if (user) {
                // user logged in
                this.user = user;
                this.isLoggedIn = true;
                console.log(this.user);

            }
            else {
                // user not logged in
                this.user = {};
                this.isLoggedIn = false;
            }
        });
    }
    public login(credentials) {
        return this.af.auth.login(credentials,
            {
                provider: AuthProviders.Password,
                method: AuthMethods.Password,
            });
    }
    public register(credentials) {
        return this.af.auth.createUser(credentials);
    }
    public getUserInfo() {
        debugger;
        return this.isLoggedIn ? this.user : undefined;
    }
    public logout() {
        this.user = {};
        this.isLoggedIn = false;
        return this.af.auth.logout();
    }
}