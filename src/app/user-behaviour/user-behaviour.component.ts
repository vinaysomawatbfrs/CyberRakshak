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
import {
  IAccessHour,
  BehaviourAnalyticsResponse,
  HotUrl,
  RiskAnalyticsItem,
  AccessHoursItem,
} from "./user-behaviour.model";

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
  riskAnalyticsOptions: AgChartOptions = {};
  workingHoursAccess: IAccessHour = {
    text: "",
    value: 0,
    isWorking: false,
  };

  nonWorkingHoursAccess: IAccessHour = {
    text: "",
    value: 0,
    isWorking: false,
  };

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
    this.appService
      .getBehaviourAnalytics(userId)
      .subscribe((res: BehaviourAnalyticsResponse) => {
        this.visitedURLsData = this.buildDataForMostVisitedUrls(res?.hot_urls);
        this.riskAnalyticsOptions = this.buildDataForRiskAnalytics(
          res?.risk_analytics
        );
        this.buildDataForAccessHours(res?.access);
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
      tempData["quarter"] = "Most Visited URLs";
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

  buildDataForRiskAnalytics(data: RiskAnalyticsItem[]): AgChartOptions {
    const newSeries: {
      type: "line";
      xKey: string;
      yKey: string;
      yName: string;
    }[] = [
      {
        type: "line",
        xKey: "at",
        yKey: "hits",
        yName: "No of time PII Accessed",
      },
    ];

    type SeverityMap = Record<string, number | string>;

    const tempData: SeverityMap[] = [];

    for (const item of data) {
      tempData.push({
        at: item.at,
        hits: item.hits,
        quarter: "Most Visited URLs",
      });
    }

    return {
      data: tempData,
      title: {
        text: "Daily AWB PII Accessed",
      },
      series: newSeries,
    };
  }

  buildDataForAccessHours(data: AccessHoursItem): void {
    this.workingHoursAccess = {
      text: "Access During Working Hours",
      value: data.working_hours,
      isWorking: true,
    };
    this.nonWorkingHoursAccess = {
      text: "Access During Non-Working Hours",
      value: data.non_working_hours,
      isWorking: false,
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
export { IAccessHour };

