import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-generic-overview",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./generic-overview.component.html",
  styleUrls: ["./generic-overview.component.scss"],
})
export class GenericOverviewComponent {
  @Input() heading = "";
  @Input() subHeading = "";
}
