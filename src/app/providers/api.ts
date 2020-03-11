import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiProvider {

    constructor(
        private _http: HttpClient
    ) { }

    getRocketLaunches() {
        const url = 'https://launchlibrary.net/1.4.1/launch/next/10';
        return this._http.get(url);
    }

    getLaunchInfo(id) {
        const url = `https://launchlibrary.net/1.4/launch/${id}`;
        return this._http.get(url);
    }

}
