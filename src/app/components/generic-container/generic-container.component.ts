import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-generic-container",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./generic-container.component.html",
  styleUrls: ["./generic-container.component.scss"],
})
export class GenericContainerComponent {
  @Input() name = "";
}
