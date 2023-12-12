import { Component } from "@angular/core";
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
  public barOptions: AgChartOptions;
  constructor() {
    this.barOptions = {
      // title: {
      //   text: "Apple's Revenue by Product Category",
      // },
      // subtitle: {
      //   text: "In Billion U.S. Dollars",
      // },
      data: [
        {
          quarter: "Q1'18",
          internalshipments: 140,
          addcredits: 16,
          odpairsummary: 14,
          asngrn: 12,
          supportwebicrm: 20,
        },
      ],
      series: [
        {
          type: "bar",
          xKey: "quarter",
          yKey: "internalshipments",
          yName: "internal/shipments",
        },
        {
          type: "bar",
          xKey: "quarter",
          yKey: "addcredits",
          yName: "Add-Credits",
        },
        {
          type: "bar",
          xKey: "quarter",
          yKey: "odpairsummary",
          yName: "od_pair_summary",
        },
        {
          type: "bar",
          xKey: "quarter",
          yKey: "asngrn",
          yName: "asn-grn",
        },
        {
          type: "bar",
          xKey: "quarter",
          yKey: "supportwebicrm",
          yName: "support-web/icrm",
        },
      ],
    };
  }
}
