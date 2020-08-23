import {RouterModule, Routes} from '@angular/router';
import {InstallationsComponent} from './installations.component';
import {NgModule} from '@angular/core';
import {ListingComponent} from './views/listing/listing.component';
import {MapComponent} from './views/map/map.component';
import {MeasurementsComponent} from './views/measurements/measurements.component';
import {AnalyseComponent} from './views/analyse/analyse.component';
import {AlarmsComponent} from './views/alarms/alarms.component';
import {ReportsComponent} from './views/reports/reports.component';
import {SettingsComponent} from './views/settings/settings.component';
import {InstallationsResolver} from './installations-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: InstallationsComponent,
    resolve: { focusGroupsData: InstallationsResolver },
    children: [
      { path: '', redirectTo: 'listing', pathMatch: 'full' },
      {
        path: 'listing',
        component: ListingComponent
      },
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'measure',
        component: MeasurementsComponent
      },
      {
        path: 'analyse',
        component: AnalyseComponent
      },
      {
        path: 'alarms',
        component: AlarmsComponent
      },
      {
        path: 'reports',
        component: ReportsComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstallationsRoutingModule {
}
