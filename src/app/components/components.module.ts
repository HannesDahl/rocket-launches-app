import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';
import { LaunchCardComponent } from './launch-card/launch-card';
@NgModule({
	declarations: [NavbarComponent, LaunchCardComponent],
	imports: [],
	exports: [NavbarComponent, LaunchCardComponent]
})
export class ComponentsModule { }
