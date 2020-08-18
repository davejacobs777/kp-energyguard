import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: 'installations',
    loadChildren: () =>
      import('./features/installations/installations.module').then(
        m => m.InstallationsModule
      )
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        m => m.DashboardModule
      )
  },
  {
    path: 'alarms',
    loadChildren: () =>
      import('./features/alarms/alarms.module').then(
        m => m.AlarmsModule
      )
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./features/search/search.module').then(
        m => m.SearchModule
      )
  },
  {
    path: 'administration',
    loadChildren: () =>
      import('./features/administration/administration.module').then(
        m => m.AdministrationModule
      )
  },
  {
    path: 'documentation',
    loadChildren: () =>
      import('./features/documentation/documentation.module').then(
        m => m.DocumentationModule
      )
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./features/settings/settings.module').then(
        m => m.SettingsModule
      )
  },
  {path: '', redirectTo: 'installations', pathMatch: 'full'},
  {path: '**', redirectTo: 'installations'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
