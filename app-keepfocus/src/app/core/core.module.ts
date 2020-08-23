import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FocusGroupsService} from './services/focus-groups.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    FocusGroupsService
  ]
})
export class CoreModule {
}
