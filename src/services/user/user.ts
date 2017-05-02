import { Injectable } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders, FirebaseListObservable} from 'angularfire2';

import {UserModel} from "../../models";

@Injectable()
export class UserService {
    constructor(private af: AngularFire) {       
    }
    
  GetAll(): FirebaseListObservable<UserModel[]> {
        return this.af.database.list(`/users`);
    }
    Get(id: any) {
        return this.af.database.object(`/users/${id}`);
    }
    Insert(entity: UserModel) {
        var itens = this.af.database.list(`/users`);
        return itens.push(entity);
    }
    Update(id: any, entity: UserModel) {
        throw new Error("Method not implemented.");
    }
}