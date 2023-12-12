import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IAwbOverview } from "src/app/components/component.model";

@Component({
  selector: "app-awb-overview",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./awb-overview.component.html",
  styleUrls: ["./awb-overview.component.scss"],
})
export class AwbOverviewComponent {
  @Input() awbOverViewData: IAwbOverview[] = [];
}
