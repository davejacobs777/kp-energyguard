import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallationsComponent } from './installations.component';
import {InstallationsRoutingModule} from "./installations-routing.module";



@NgModule({
  declarations: [InstallationsComponent],
  imports: [
    CommonModule,
    InstallationsRoutingModule
  ]
})
export class InstallationsModule { }
