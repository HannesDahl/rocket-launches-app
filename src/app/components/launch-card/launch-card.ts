import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LaunchPage } from '../../pages/launch/launch';

@Component({
    selector: 'launch-card',
    templateUrl: 'launch-card.html'
})
export class LaunchCardComponent {
    @Input() public launch;

    constructor(
        public navCtrl: NavController
    ) { }

    public openLaunchPage(id) {
        this.navCtrl.push(LaunchPage, {
            id: id
        });
    }
}
