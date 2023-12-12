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

export interface IAccessHour {
  text: string;
  value: number;
  isWorking: boolean;
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

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    const userId = localStorage.getItem("userId");
    this.getBehaviourAnalytics(userId);
  }

  getBehaviourAnalytics(userId: string | null) {
    this.appService.getBehaviourAnalytics(userId).subscribe((res) => {
      console.log(res);
    });
  }

  handleUserIdSearch(event: any) {
    this.appService
      .getBehaviourAnalytics(event.target.value)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
