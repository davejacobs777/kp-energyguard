import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InstallationsComponent} from './installations.component';
import {InstallationsRoutingModule} from './installations-routing.module';
import {MaterialModule} from '../../material/material.module';
import {ListingComponent} from './views/listing/listing.component';
import {MapComponent} from './views/map/map.component';
import {MeasurementsComponent} from './views/measurements/measurements.component';
import {AnalyseComponent} from './views/analyse/analyse.component';
import {AlarmsComponent} from './views/alarms/alarms.component';
import {ReportsComponent} from './views/reports/reports.component';
import {SettingsComponent} from './views/settings/settings.component';

@NgModule({
  declarations: [InstallationsComponent, ListingComponent, MapComponent, MeasurementsComponent, AnalyseComponent,
    AlarmsComponent, ReportsComponent, SettingsComponent],
  imports: [
    CommonModule,
    InstallationsRoutingModule,
    MaterialModule,
  ]
})
export class InstallationsModule {
}
