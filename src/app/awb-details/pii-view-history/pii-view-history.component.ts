import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  IAwbHistoryData,
  PiiViewHistoryTableComponent,
} from "./pii-view-history-table/pii-view-history-table.component";
import { GenericContainerComponent } from "src/app/components/generic-container/generic-container.component";

@Component({
  selector: "app-pii-view-history",
  standalone: true,
  imports: [
    CommonModule,
    PiiViewHistoryTableComponent,
    GenericContainerComponent,
  ],
  templateUrl: "./pii-view-history.component.html",
  styleUrls: ["./pii-view-history.component.scss"],
})
export class PiiViewHistoryComponent {
  @Input() tableData: IAwbHistoryData[] = [];
}
