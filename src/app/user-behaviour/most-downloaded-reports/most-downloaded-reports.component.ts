import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-most-downloaded-reports",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./most-downloaded-reports.component.html",
  styleUrls: ["./most-downloaded-reports.component.scss"],
})
export class MostDownloadedReportsComponent {
  @Input() mostDownloadedReports: string[] = [];
}
