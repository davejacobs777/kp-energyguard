import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstallationsComponent } from './installations.component';
import {InstallationsRoutingModule} from "./installations-routing.module";
import {MaterialModule} from "../../material/material.module";



@NgModule({
  declarations: [InstallationsComponent],
  imports: [
    CommonModule,
    InstallationsRoutingModule,
    MaterialModule
  ]
})
export class InstallationsModule { }
