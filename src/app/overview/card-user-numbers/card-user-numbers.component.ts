import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ICardUserNumberData } from "../../components/component.model";

@Component({
  selector: "app-card-user-numbers",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./card-user-numbers.component.html",
  styleUrls: ["./card-user-numbers.component.scss"],
})
export class CardUserNumbersComponent {
  @Input() cardUserNumberData: ICardUserNumberData[] = [];
}
