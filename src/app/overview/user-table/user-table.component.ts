import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

export interface IHighRiskUserData {
  id: number;
  name: string;
  email: string;
  count: string;
  role: string[];
}

@Component({
  selector: "app-user-table",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./user-table.component.html",
  styleUrls: ["./user-table.component.scss"],
})
export class UserTableComponent {
  @Input() tableData: IHighRiskUserData[] = [];
  tableHeaders: string[] = [
    "User ID",
    "Name",
    "Email",
    "Role",
    "PII Count",
    "Action",
  ];
}
