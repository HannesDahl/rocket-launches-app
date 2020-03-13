import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LaunchPage } from '../../pages/launch/launch';

@Component({
    selector: 'launch-card',
    templateUrl: 'launch-card.html'
})
export class LaunchCardComponent {
    @Input() public launch;
    public launchDate: any;

    constructor(
        public navCtrl: NavController,
    ) { }

    ngOnInit() {
        let launchDateTime = new Date(this.launch.launch_date_local);
        let launchDateValue = launchDateTime;
        this.launchDate = launchDateValue;
    }

    public openLaunchPage(id) {
        this.navCtrl.push(LaunchPage, {
            id: id
        });
    }
}
