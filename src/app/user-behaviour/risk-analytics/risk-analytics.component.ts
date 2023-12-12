import { Component } from "@angular/core";
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
  public lineOptions: AgChartOptions;
  constructor() {
    this.lineOptions = {
      data: [
        {
          quarter: "3 Dec",
          petrol: 20,
        },
        {
          quarter: "4 Dec",
          petrol: 35,
        },
        {
          quarter: "5 Dec",
          petrol: 25,
        },
        {
          quarter: "6 Dec",
          petrol: 5,
        },
        {
          quarter: "7 Dec",
          petrol: 20,
        },
        {
          quarter: "8 Dec",
          petrol: 30,
        },
        {
          quarter: "9 Dec",
          petrol: 15,
        },
        {
          quarter: "10 Dec",
          petrol: 40,
        },
      ],
      title: {
        text: "Daily AWB PII Accessed",
      },
      series: [
        {
          type: "line",
          xKey: "quarter",
          yKey: "petrol",
          yName: "No of time PII Accessed",
        },
      ],
    };
  }
}
