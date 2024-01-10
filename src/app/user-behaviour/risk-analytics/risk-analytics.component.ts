import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AgChartsAngularModule } from "ag-charts-angular";
import { AgChartOptions } from "ag-charts-community";

@Component({
  selector: "app-risk-analytics",
  standalone: true,
  imports: [CommonModule, AgChartsAngularModule],
  templateUrl: "./risk-analytics.component.html",
  styleUrls: ["./risk-analytics.component.scss"],
})
export class RiskAnalyticsComponent {
  @Input() lineOptions: AgChartOptions = {};
  constructor() {}
}
