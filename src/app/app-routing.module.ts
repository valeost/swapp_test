import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailComponent } from "./detail/pages/detail.component";
import { ListComponent } from "./list/pages/list/list.component";

const routes: Routes = [
  {
    component: ListComponent,
    loadChildren: () => import("./list/list.module").then((m) => m.ListModule),
    path: "list",
  },
  {
    component: DetailComponent,
    loadChildren: () =>
      import("./detail/detail.module").then((m) => m.DetailModule),
    path: ":personId/detail",
  },
  { path: "", pathMatch: "full", redirectTo: "/list" },
  { path: "**", pathMatch: "full", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
