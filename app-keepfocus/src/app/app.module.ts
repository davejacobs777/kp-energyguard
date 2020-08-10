import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import icons from '../assets/svg/svg-icons';
import { SvgIconsModule } from '@ngneat/svg-icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    SvgIconsModule.forRoot({
      sizes: {
        sm: '18px',
        md: '20px',
        lg: '30px'
      },
      icons
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
