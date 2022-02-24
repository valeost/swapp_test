import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { DetailComponent } from "./pages/detail.component";

@NgModule({
  declarations: [DetailComponent],
  imports: [CommonModule, MatListModule, MatCardModule],
})
export class DetailModule {}
