import { Component, Input } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api';

@IonicPage()
@Component({
    selector: 'page-launch',
    templateUrl: 'launch.html',
})
export class LaunchPage {
    @Input() id: any;

    constructor(
        public _api: ApiProvider,
        private navParams: NavParams
    ) { }

    ionViewDidLoad() {
        let id = this.navParams.get('id');

        this._api.getLaunchInfo(id).subscribe((data: any) => {
            console.log(data.launches[0]);
        });
    }

}
