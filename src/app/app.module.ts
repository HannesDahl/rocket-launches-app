import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from './pages/home/home';
import { NavbarComponent } from './components/navbar/navbar';
import { ApiProvider } from './providers/api';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		NavbarComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		ApiProvider
	]
})
export class AppModule { }
