import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../components/header/header.component";
import { GenericContainerComponent } from "../components/generic-container/generic-container.component";
import { RiskAnalyticsComponent } from "./risk-analytics/risk-analytics.component";
import { MostDownloadedReportsComponent } from "./most-downloaded-reports/most-downloaded-reports.component";
import { MostVisitedUrlsComponent } from "./most-visited-urls/most-visited-urls.component";
import { AccessHoursComponent } from "./access-hours/access-hours.component";
import { GenericOverviewComponent } from "../components/generic-overview/generic-overview.component";
import { AppService } from "../app.service";
import { SearchViewComponent } from "../overview/search-view/search-view.component";
import { AgChartOptions } from "ag-charts-community";
import { AgChartsAngularModule } from "ag-charts-angular";

export interface IAccessHour {
  text: string;
  value: number;
  isWorking: boolean;
}

export interface HotUrl {
  url: string;
  score: number;
  tag: string;
}

export interface Request {
  url: string;
  tag: string;
}

export interface Timestamps {
  created: string;
  updated: string;
}

export interface JourneyMapItem {
  score: number;
  meta: string;
  request: Request;
  timestamps: Timestamps;
}

export interface RiskAnalyticsItem {
  hits: number;
  at: string;
}

export interface BehaviourAnalyticsResponse {
  risk_analytics: RiskAnalyticsItem[];
  access: {
    working_hours: number;
    non_working_hours: number;
  };
  hot_urls: HotUrl[];
  journey_map: JourneyMapItem[];
}

@Component({
  selector: "app-user-behaviour",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    GenericContainerComponent,
    RiskAnalyticsComponent,
    MostDownloadedReportsComponent,
    MostVisitedUrlsComponent,
    AccessHoursComponent,
    GenericOverviewComponent,
    SearchViewComponent,
    AgChartsAngularModule,
  ],
  templateUrl: "./user-behaviour.component.html",
  styleUrls: ["./user-behaviour.component.scss"],
})
export class UserBehaviourComponent implements OnInit {
  workingHoursAccess: IAccessHour[] = [
    {
      text: "Access During Working Hours",
      value: 25,
      isWorking: true,
    },
  ];

  nonWorkingHoursAccess: IAccessHour[] = [
    {
      text: "Access During Non-Working Hours",
      value: 10,
      isWorking: false,
    },
  ];

  mostDownloadedReports: string[] = [
    "AWB Order Report",
    "Order Report",
    "Company Master",
    "Seller Data Report",
    "Churn Report",
    "PID Order Report",
    "Courier ETD Report",
  ];

  visitedURLsData: AgChartOptions = {};

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    const userId = localStorage.getItem("userId");
    this.getBehaviourAnalytics(userId);
  }

  getBehaviourAnalytics(userId: string | null) {
    const behaviourRes: BehaviourAnalyticsResponse = {
        risk_analytics: [
          {
            hits: 1,
            at: "2024-01-09 18:52:17",
          },
          {
            hits: 1,
            at: "2024-01-09 18:54:30",
          },
          {
            hits: 1,
            at: "2024-01-09 18:55:07",
          },
        ],
        access: {
          working_hours: 0,
          non_working_hours: 0,
        },
        hot_urls: [
          {
            url: "https://api.pidash.dev/test",
            score: 12,
            tag: "get-shipment-details",
          },
          {
            url: "api/v1/orders/details/12345",
            score: 2,
            tag: "get-shipment-details",
          },
        ],
        journey_map: [
          {
            score: 2,
            meta: "[]",
            request: {
              url: "api/v1/orders/details/12345",
              tag: "get-shipment-details",
            },
            timestamps: {
              created: "2024-01-09 18:44:11",
              updated: "2024-01-09 18:44:11",
            },
          },
          {
            score: 2,
            meta: "[]",
            request: {
              url: "api/v1/orders/details/12345",
              tag: "get-shipment-details",
            },
            timestamps: {
              created: "2024-01-09 18:42:57",
              updated: "2024-01-09 18:42:57",
            },
          },
          {
            score: 2,
            meta: "[]",
            request: {
              url: "api/v1/orders/details/12345",
              tag: "get-shipment-details",
            },
            timestamps: {
              created: "2024-01-09 18:42:50",
              updated: "2024-01-09 18:42:50",
            },
          },
        ],
      };

    // this.visitedURLsData = this.buildDataForMostVisitedUrls(behaviourRes.hot_urls);
    // console.log(this.visitedURLsData);
    this.appService.getBehaviourAnalytics(userId).subscribe((res) => {
      console.log(res);
    });
  }

  buildDataForMostVisitedUrls(data: HotUrl[]): AgChartOptions {
    console.log(data);
    const newSeries: {
      type: "bar";
      xKey: string;
      yKey: string;
      yName: string;
    }[] = [];

    type SeverityMap = Record<string, number | string>;

    const tempData: SeverityMap = {};

    for (const item of data) {
      tempData[item.url] = item.score;
      tempData['quarter'] = 'Most Visited URLs';
      newSeries.push({
        type: "bar",
        xKey: "quarter",
        yKey: item.url,
        yName: item.url,
      });
    }

    return {
      data: [tempData],
      series: newSeries,
    };
  }

  handleUserIdSearch(event: any) {
    this.appService
      .getBehaviourAnalytics(event.target.value)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
