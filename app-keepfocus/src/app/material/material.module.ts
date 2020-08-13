import { NgModule } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatMenuModule} from "@angular/material/menu";
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";

const MaterialComponents = [
  MatButtonModule,
  MatListModule,
  MatSidenavModule,
  MatButtonModule,
  MatMenuModule,
  MatTabsModule,
  MatCardModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatRadioModule,
  MatIconModule,
]

@NgModule({
  declarations: [],
  imports: MaterialComponents,
  exports: MaterialComponents
})
export class MaterialModule { }
