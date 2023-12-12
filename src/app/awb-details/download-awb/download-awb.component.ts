import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTooltipModule } from "@angular/material/tooltip";
import { AppService } from "src/app/app.service";

@Component({
  selector: "app-download-awb",
  standalone: true,
  imports: [CommonModule, MatTooltipModule],
  templateUrl: "./download-awb.component.html",
  styleUrls: ["./download-awb.component.scss"],
})
export class DownloadAwbComponent {
  awb: string | null = "";

  constructor(private appService: AppService) {
    this.awb = localStorage.getItem("awb");
  }

  downloadAwbReport() {
    this.appService.downloadCSV(this.awb).subscribe((res) => {
      console.log(res);
    });
  }
}
