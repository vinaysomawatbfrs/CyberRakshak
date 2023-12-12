import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTooltipModule } from "@angular/material/tooltip";

@Component({
  selector: "app-card-tab",
  standalone: true,
  imports: [CommonModule, MatTooltipModule],
  templateUrl: "./card-tab.component.html",
  styleUrls: ["./card-tab.component.scss"],
})
export class CardTabComponent {
  @Input() cardHeading = {
    text: "",
    tooltip: "",
  };
  @Input() cardType = "default";
  @Input() isDownloadAllowed = false;
}
