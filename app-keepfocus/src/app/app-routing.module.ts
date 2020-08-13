import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {InstallationsComponent} from "./installations/installations.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "installations",
    component: InstallationsComponent
  },
  {
    path: "**",
    redirectTo: '/'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
