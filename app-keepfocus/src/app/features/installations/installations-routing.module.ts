import {RouterModule, Routes} from "@angular/router";
import {InstallationsComponent} from "./installations.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: InstallationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstallationsRoutingModule {}
