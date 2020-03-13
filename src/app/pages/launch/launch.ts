import { Component, Output } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api';
import { Map, View } from 'ol';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj.js';

@IonicPage()
@Component({
    selector: 'page-launch',
    templateUrl: 'launch.html',
})
export class LaunchPage {
    @Output() launch: any;
    public map: any;
    private coords: any;

    constructor(
        public _api: ApiProvider,
        private navCtrl: NavController,
        private navParams: NavParams
    ) { }

    ngOnInit() {
        let id = this.navParams.get('id');

        this._api.getLaunchInfo(id).subscribe((data: any) => {
            this.launch = data;

            switch (this.launch.launch_site.site_id) {
                case 'ksc_lc_39a':
                    this.coords = [-80.6026042562, 28.6050359132];
                    break;
                case 'ccafs_slc_40':
                    this.coords = [-80.57718, 28.562106];
                    break;
                case '':
                    this.coords = [-120.6107, 34.6320];
            }
        });
    }

    ionViewDidEnter() {
        this.map = new Map({
            target: 'map',
            layers: [
                new Tile({
                    source: new OSM()
                })
            ],
            view: new View({
                center: fromLonLat(this.coords),
                zoom: 15
            })
        });
    }

    public backHome() {
        this.navCtrl.pop();
    }

}
