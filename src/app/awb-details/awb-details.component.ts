import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "../components/header/header.component";
import { DownloadAwbComponent } from "./download-awb/download-awb.component";
import { AwbOverviewComponent } from "./awb-overview/awb-overview.component";
import { PiiViewHistoryComponent } from "./pii-view-history/pii-view-history.component";
import { IAwbOverview } from "../components/component.model";
import { AppService } from "../app.service";
import { IAwbHistoryData } from "./pii-view-history/pii-view-history-table/pii-view-history-table.component";
import { GenericOverviewComponent } from "../components/generic-overview/generic-overview.component";

@Component({
  selector: "app-awb-details",
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    DownloadAwbComponent,
    AwbOverviewComponent,
    PiiViewHistoryComponent,
    GenericOverviewComponent,
  ],
  templateUrl: "./awb-details.component.html",
  styleUrls: ["./awb-details.component.scss"],
})
export class AwbDetailsComponent implements OnInit {
  awbOverViewData: IAwbOverview[] = [];
  tableData: IAwbHistoryData[] = [];
  historyData = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    const awb = localStorage.getItem("awb");
    this.getAWBOverViewData(awb);
  }

  getAWBOverViewData(awb: string | null) {
    const temp = [
      {
        awb: {
          code: "TA1234",
          created: "2023-12-09 02:00:35",
          company_id: 2,
          company_name: "Shiprocket",
          courier: "Delhivery",
          channel: "Shopify",
          status: "In Transit",
          shipment_value: 5400,
          payment_mode: "COD",
        },
        history: [
          {
            id: 1,
            name: "Admin",
            email: "admin@shiprocket.com",
            last_active: "2023-12-09 00:09:02",
            mobile: "",
            timestamps: {
              created: "2023-12-09 05:50:44",
              updated: "2023-12-09 05:50:44",
            },
          },
        ],
      },
    ];
    this.awbOverViewData = this.refactorAwbData(temp[0].awb);
    this.tableData = temp[0].history;
    this.appService.searchAwbs(awb).subscribe((res: any) => {
      console.log(res);
      this.awbOverViewData = this.refactorAwbData(res.awb);
      this.tableData = res.history;
    });
  }

  refactorAwbData(data: any): IAwbOverview[] {
    const result: IAwbOverview[] = [
      {
        text: "AWB Created Date",
        value: data.created,
      },
      {
        text: "Company ID",
        value: data.company_id,
      },
      {
        text: "Company Name",
        value: data.company_name,
      },
      {
        text: "Courier",
        value: data.courier,
      },
      {
        text: "Channel",
        value: data.channel,
      },
      {
        text: "Shipment Status",
        value: data.status,
      },
      {
        text: "Shipment Value",
        value: "Rs. " + data.shipment_value,
      },
      {
        text: "Payment Mode",
        value: data.payment_mode,
      },
    ];
    return result;
  }
}
