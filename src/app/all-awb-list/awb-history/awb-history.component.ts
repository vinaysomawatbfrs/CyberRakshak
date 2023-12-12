import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IAllAwbListData } from "../all-awb-list.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-awb-history",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./awb-history.component.html",
  styleUrls: ["./awb-history.component.scss"],
})
export class AwbHistoryComponent {
  @Input() type = "";
  @Input() tableData: IAllAwbListData[] = [];
  tableHeaders: string[] = ["Date", "User ID", "AWB", "Action"];

  constructor(private router: Router) {}

  redirectToUserBehaviour() {
    this.router.navigate(["/user-behaviour"]);
  }

  redirectToAwbList(awb: string) {
    localStorage.setItem("awb", awb);
    this.router.navigate(["/awb-details"]);
  }
}
