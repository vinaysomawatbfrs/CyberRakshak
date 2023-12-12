import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OverviewComponent } from "./overview/overview.component";
import { AwbDetailsComponent } from "./awb-details/awb-details.component";
import { UserBehaviourComponent } from "./user-behaviour/user-behaviour.component";
import { SettingComponent } from "./setting/setting.component";
import { AllAwbListComponent } from "./all-awb-list/all-awb-list.component";

const routes: Routes = [
  { path: "", redirectTo: "/overview", pathMatch: "full" },
  { path: "overview", component: OverviewComponent },
  { path: "awb-details", component: AwbDetailsComponent },
  { path: "all-awb-list", component: AllAwbListComponent },
  { path: "user-behaviour", component: UserBehaviourComponent },
  { path: "setting", component: SettingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
