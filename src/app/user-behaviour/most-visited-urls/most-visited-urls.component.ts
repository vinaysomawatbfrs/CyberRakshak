import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AgChartsAngularModule } from "ag-charts-angular";
import { AgChartOptions } from "ag-charts-community";

@Component({
  selector: "app-most-visited-urls",
  standalone: true,
  imports: [CommonModule, AgChartsAngularModule],
  templateUrl: "./most-visited-urls.component.html",
  styleUrls: ["./most-visited-urls.component.scss"],
})
export class MostVisitedUrlsComponent {
  @Input() barOptions: AgChartOptions = {};
  constructor() {
  }
}
