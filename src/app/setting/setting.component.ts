import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GenericContainerComponent } from "../components/generic-container/generic-container.component";
import { GenericOverviewComponent } from "../components/generic-overview/generic-overview.component";
import {
  MatSlideToggleChange,
  MatSlideToggleModule,
} from "@angular/material/slide-toggle";
import { AppService } from "../app.service";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";

export interface IConnectedApps {
  type: string;
  name: string;
  imgSrc: string;
  checked: boolean;
}

@Component({
  selector: "app-setting",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    GenericOverviewComponent,
    GenericContainerComponent,
  ],
  templateUrl: "./setting.component.html",
  styleUrls: ["./setting.component.scss"],
})
export class SettingComponent implements OnInit {
  pkeys: string[] = [];
  tkeys: string[] = [];

  removeP(fruit: any): void {
    const index = this.pkeys.indexOf(fruit);
    const firstKey = fruit.split("-")[0];

    if (index >= 0) {
      this.pkeys.splice(index, 1);
    }

    this.updateSetting({ key: firstKey, value: "0" });
  }

  removeT(fruit: any): void {
    const index = this.tkeys.indexOf(fruit);
    const firstKey = fruit.split("-")[0];

    if (index >= 0) {
      this.tkeys.splice(index, 1);
    }

    this.updateSetting({ key: firstKey, value: "0" });
  }

  connectedApps: IConnectedApps[] = [
    {
      type: "slack",
      name: "Slack",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
      checked: false,
    },
    {
      type: "telegram",
      name: "Telegram",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/1024px-Telegram_logo.svg.png?20220101141644",
      checked: false,
    },
    {
      type: "email",
      name: "Email",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png",
      checked: false,
    },
    {
      type: "whatsapp",
      name: "Whatsapp",
      imgSrc:
        "https://cdn.pixabay.com/photo/2021/05/22/11/38/whatsapp-6273368_1280.png",
      checked: false,
    },
  ];

  pkey = "";
  pvalue = "";
  tkey = "";
  tvalue = "";

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getSetting();
  }

  addPKeyValuePair() {
    this.pkeys.push(this.pkey + "-" + this.pvalue);
    this.pkey = "";
    this.pvalue = "";
    this.updateSetting({ key: this.pkey, value: this.pvalue });
  }

  addTKeyValuePair() {
    this.tkeys.push(this.tkey + "-" + this.tvalue);
    this.tkey = "";
    this.tvalue = "";
    this.updateSetting({ key: this.tkey, value: this.tvalue });
  }

  handleToggleChange(event: MatSlideToggleChange, type: string) {
    const typeToKeyMap: { [key: string]: string } = {
      slack: "platform_slack",
      whatsapp: "platform_whatsapp",
      telegram: "plateform_telegram",
      gmail: "plateform_email",
    };

    if (event.checked) {
      const key = typeToKeyMap[type];
      if (key) {
        this.updateSetting({ key, value: "1" });
      }
    }
  }

  getSetting() {
    this.appService.getSettings().subscribe((res) => {
      console.log(res);
    });
  }

  updateSetting(body: { key: string; value: string }) {
    this.appService.updateSetting(body).subscribe((res) => {
      console.log(res);
    });
  }
}
