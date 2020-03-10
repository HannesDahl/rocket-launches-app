import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

    constructor(
        private _http: HttpClient
    ) { }

    getRocketLaunches() {
        const url = 'https://launchlibrary.net/1.4.1/launch/next/10';
        return this._http.get(url);
    }

}
