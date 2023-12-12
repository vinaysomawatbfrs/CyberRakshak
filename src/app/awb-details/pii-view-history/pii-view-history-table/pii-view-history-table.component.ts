import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

export interface IAwbHistoryData {
  id: number;
  timestamps: {
    created: string;
    updated: string;
  };
  last_active: string;
  name: string;
  email: string;
  mobile: string | null;
}

@Component({
  selector: "app-pii-view-history-table",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./pii-view-history-table.component.html",
  styleUrls: ["./pii-view-history-table.component.scss"],
})
export class PiiViewHistoryTableComponent {
  @Input() type = "";
  @Input() tableData: IAwbHistoryData[] = [];
  tableHeaders: string[] = [
    "Date",
    "User ID",
    "Name",
    "Email ID",
    "Phone",
    "Action",
  ];

  constructor(private router: Router) {}

  redirectToUserBehaviour(userId: number) {
    localStorage.setItem("userId", userId.toString());
    this.router.navigate(["/user-behaviour"]);
  }

  redirectToAwbList() {
    this.router.navigate(["/awb-details"]);
  }
}
