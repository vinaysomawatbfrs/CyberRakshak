import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PiiViewHistoryComponent } from "../awb-details/pii-view-history/pii-view-history.component";
import { GenericOverviewComponent } from "../components/generic-overview/generic-overview.component";
import { SearchViewComponent } from "../overview/search-view/search-view.component";
import { PiiViewHistoryTableComponent } from "../awb-details/pii-view-history/pii-view-history-table/pii-view-history-table.component";
import { GenericContainerComponent } from "../components/generic-container/generic-container.component";
import { AppService } from "../app.service";
import { AwbHistoryComponent } from "./awb-history/awb-history.component";

export interface IAllAwbListData {
  id: number;
  timestamps: {
    created: string;
    updated: string;
  };
  awb: string;
}

@Component({
  selector: "app-all-awb-list",
  standalone: true,
  imports: [
    CommonModule,
    PiiViewHistoryComponent,
    GenericOverviewComponent,
    SearchViewComponent,
    PiiViewHistoryTableComponent,
    GenericContainerComponent,
    AwbHistoryComponent,
  ],
  templateUrl: "./all-awb-list.component.html",
  styleUrls: ["./all-awb-list.component.scss"],
})
export class AllAwbListComponent implements OnInit {
  tableData: IAllAwbListData[] = [];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getAWB();
  }

  handleAwbOutput(event: any) {
    console.log("Received search query in parent:", event);
    // Implement your logic here, e.g., make the API call
  }

  getAWB() {
    this.appService.getAwbList().subscribe((res: any) => {
      this.tableData = res["data"];
    });
  }

  searchAWB(awb: string) {
    this.appService.searchAwbs(awb).subscribe((res) => {
      console.log(res);
    });
  }
}
