import { Component, Output } from '@angular/core';
import { IonicPage, NavParams, NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api';
import { HomePage } from '../home/home';
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
    public map: any;
    @Output() launch: any;

    constructor(
        public _api: ApiProvider,
        private navCtrl: NavController,
        private navParams: NavParams
    ) { }

    ngOnInit() {
        let id = this.navParams.get('id');

        this._api.getLaunchInfo(id).subscribe((data: any) => {
            this.launch = data;

            console.log(this.launch);
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
                center: fromLonLat([0, 0]),
                zoom: 15
            })
        });
    }

    public backHome() {
        this.navCtrl.push(HomePage);
    }

}
