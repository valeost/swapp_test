import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ListComponent } from "./pages/list/list.component";
import { ListService } from "./services/list.service";
@NgModule({
  declarations: [ListComponent],
  exports: [ListComponent],
  imports: [CommonModule, HttpClientModule, MatListModule, MatPaginatorModule],
  providers: [ListService],
})
export class ListModule {}
