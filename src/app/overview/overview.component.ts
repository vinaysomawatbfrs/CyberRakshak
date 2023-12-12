import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { CardTabComponent } from "./card-tab/card-tab.component";
import { CardUserNumbersComponent } from "./card-user-numbers/card-user-numbers.component";
import { HeaderComponent } from "../components/header/header.component";
import { SearchViewComponent } from "./search-view/search-view.component";
import { ICardUserNumberData } from "../components/component.model";
import { AgChartsAngularModule } from "ag-charts-angular";
import { AgChartOptions } from "ag-charts-community";
import {
  IHighRiskUserData,
  UserTableComponent,
} from "./user-table/user-table.component";
import { AppService } from "../app.service";
import { GenericOverviewComponent } from "../components/generic-overview/generic-overview.component";
import { MatTooltipModule } from "@angular/material/tooltip";

export interface IBreachedLevelsEntity {
  severity: string;
  value: number;
}
export interface IDormantUsersEntity {
  name: string;
  text: string;
  value: number;
  type: string;
}
export interface IActiveUsersEntity {
  name: string;
  text: string;
  value: number;
  type: string;
}

export interface IPiiScreens {
  url: string;
  severity: number;
  tag: string;
}

export interface IPiiDepartments {
  name: string;
  key: string;
  severity: number;
}

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.scss"],
  standalone: true,
  imports: [
    CommonModule,
    CardTabComponent,
    CardUserNumbersComponent,
    HeaderComponent,
    SearchViewComponent,
    UserTableComponent,
    AgChartsAngularModule,
    GenericOverviewComponent,
    MatTooltipModule,
  ],
})
export class OverviewComponent implements OnInit {
  headerText = "Cyber Safe View";
  subHeading =
    "This slide provides information regarding the security breached by internal users regarding PII details";

  activeUserData: ICardUserNumberData[] = [];
  dormantUserData: IDormantUsersEntity[] = [];
  userTableData: IHighRiskUserData[] = [];
  public lowPieOptions: AgChartOptions;
  public mediumPieOptions: AgChartOptions;
  public highPieOptions: AgChartOptions;
  public piiOptions: AgChartOptions;
  public barOptions: AgChartOptions;

  constructor(private appService: AppService) {
    this.lowPieOptions = {
      data: [
        { asset: "dashboard/overview", amount: 4 },
        { asset: "orders/processing/return", amount: 5 },
        { asset: "courier/generate/pickup", amount: 1 },
      ],
      title: {
        text: "Low",
      },
      series: [
        {
          type: "pie",
          calloutLabelKey: "asset",
          angleKey: "amount",
          innerRadiusRatio: 0.7,
          showInLegend: false,
        },
      ],
    };

    this.mediumPieOptions = {
      data: [
        { asset: "billing/deduct", amount: 2 },
        { asset: "orders/print/invoice", amount: 5 },
        { asset: "courier/serviceability", amount: 1 },
      ],
      title: {
        text: "Medium",
      },
      series: [
        {
          type: "pie",
          calloutLabelKey: "asset",
          angleKey: "amount",
          innerRadiusRatio: 0.7,
          showInLegend: false,
        },
      ],
    };

    this.highPieOptions = {
      data: [
        { asset: "orders/export", amount: 7 },
        { asset: "billing/recharge", amount: 1 },
        { asset: "orders/import", amount: 2 },
      ],
      title: {
        text: "High",
      },
      series: [
        {
          type: "pie",
          calloutLabelKey: "asset",
          angleKey: "amount",
          innerRadiusRatio: 0.7,
          showInLegend: false,
        },
      ],
    };

    this.barOptions = {};

    this.piiOptions = {};
  }

  ngOnInit(): void {
    this.getDashboardInsights();
  }

  getDashboardInsights() {
    this.appService
      .getDashboardInsights()
      .subscribe(
        (res: {
          highRiskUsers: IHighRiskUserData[];
          breachedLevels: IBreachedLevelsEntity[];
          piiDepartments: IPiiDepartments[];
          piiScreens: IPiiScreens[];
          dormantUsers: IDormantUsersEntity[];
          activeUsers: IActiveUsersEntity[];
        }) => {
          this.activeUserData = res.activeUsers;
          this.dormantUserData = res.dormantUsers;
          this.piiOptions = this.buildDataForPiiOptions(res.piiScreens);
          this.userTableData = res.highRiskUsers;
          this.barOptions = this.buildDataForPiiDepartments(res.piiDepartments);
        }
      );
  }

  buildDataForPiiOptions(data: IPiiScreens[]): AgChartOptions {
    const newData = [];
    for (const item of data) {
      newData.push({
        tag: item.tag,
        severity: item.severity,
      });
    }
    return {
      data: newData,
      // title: {
      //   text: "Medium",
      // },
      series: [
        {
          type: "pie",
          calloutLabelKey: "tag",
          angleKey: "severity",
          innerRadiusRatio: 0.7,
          innerLabels: [
            {
              text: "Total Investment",
              fontWeight: "bold",
            },
            {
              text: "$100,000",
              margin: 4,
              fontSize: 48,
              color: "green",
            },
          ],
          // innerCircle: {
          //   fill: "#c9fdc9",
          // },
        },
      ],
    };
  }

  buildDataForPiiDepartments(data: IPiiDepartments[]): AgChartOptions {
    const newSeries: {
      type: "bar";
      xKey: string;
      yKey: string;
      yName: string;
    }[] = [];

    type SeverityMap = Record<string, number>;

    const tempData: SeverityMap = {};

    for (const item of data) {
      tempData[item.name.toLowerCase()] = item.severity;
      newSeries.push({
        type: "bar",
        xKey: "quarter",
        yKey: item.name.toLowerCase(),
        yName: item.name,
      });
    }

    return {
      data: [tempData],
      series: newSeries,
    };
  }
}
