import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

import { CalendarFeatureComponent } from "./calendar.component"

const routes: Routes = [
  {
    path: "",
    component: CalendarFeatureComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarRoutingModule {}
