import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiProvider {

    constructor(
        private _http: HttpClient
    ) { }

    getRocketLaunches() {
        const url = 'https://api.spacexdata.com/v3/launches/upcoming';
        return this._http.get(url);
    }

    getLaunchInfo(id) {
        const url = `https://api.spacexdata.com/v3/launches/${id}`;
        return this._http.get(url);
    }

}
