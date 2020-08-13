import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlarmsComponent} from './alarms.component';
import {AlarmsRoutingModule} from "./alarms-routing.module";


@NgModule({
  declarations: [AlarmsComponent],
  imports: [
    CommonModule,
    AlarmsRoutingModule
  ]
})
export class AlarmsModule {
}
