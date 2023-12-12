import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IAccessHour } from "../user-behaviour.component";

@Component({
  selector: "app-access-hours",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./access-hours.component.html",
  styleUrls: ["./access-hours.component.scss"],
})
export class AccessHoursComponent {
  @Input() cardData: IAccessHour[] = [];
}
