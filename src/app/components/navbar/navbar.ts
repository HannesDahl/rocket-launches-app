import { Component } from '@angular/core';
import { MenuController, NavController } from 'ionic-angular';
import { MediaPage } from '../../pages/media/media';

@Component({
	selector: 'navbar',
	templateUrl: 'navbar.html'
})
export class NavbarComponent {
	constructor(
		private menu: MenuController,
		private navCtrl: NavController
	) { }

	openMenu() {
		this.menu.open();
	}

	openMediaPage(e) {
		e.preventDefault();
		this.navCtrl.push(MediaPage);
	}
}
