import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DocumentationComponent} from "./documentation.component";

const routes: Routes = [
  {
    path: "",
    component: DocumentationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule{}
