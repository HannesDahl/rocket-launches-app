import { Component, Output } from '@angular/core';
import { ApiProvider } from '../../providers/api';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	@Output() launches: any;

	constructor(
		private _api: ApiProvider
	) { }

	ngOnInit(): void {
		this._api.getRocketLaunches().subscribe((data) => {
			// @ts-ignore
			this.launches = data.launches;
			console.log(this.launches);
		});
	}
}
