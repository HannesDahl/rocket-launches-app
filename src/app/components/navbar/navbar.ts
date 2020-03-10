import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';

/**
 * Generated class for the NavbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
	selector: 'navbar',
	templateUrl: 'navbar.html'
})
export class NavbarComponent {
	constructor(
		private menu: MenuController
	) { }

	openMenu() {
		this.menu.open();
	}
}
