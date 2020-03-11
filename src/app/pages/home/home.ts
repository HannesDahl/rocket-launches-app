import { Component, Output } from '@angular/core';
import { ApiProvider } from '../../providers/api';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	@Output() launches: any;
	private countDownInterval: any;

	constructor(
		private _api: ApiProvider
	) { }

	ngOnInit(): void {
		this._api.getRocketLaunches().subscribe((data: any) => {
			this.launches = data.launches;
			console.log(this.launches);
			this.countDownInterval = setInterval(() => {
				this.countDown();
			}, 1000)
		});
	}

	private countDown() {
		let countDownDate = new Date(this.launches[0].net).getTime();
		let now = new Date().getTime();
		let distance = countDownDate - now;

		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		document.getElementById("nextLaunchCountdown").innerHTML = days + "d " + hours + "h "
			+ minutes + "m " + seconds + "s ";

		if (distance < 0) {
			clearInterval(this.countDownInterval);
			document.getElementById("nextLaunchCountdown").innerHTML = "LIFTOFF";
		}
	}

	ionViewDidEnter() { }
}
