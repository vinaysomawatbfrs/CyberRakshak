import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  IBreachedLevelsEntity,
  IPiiDepartments,
  IPiiScreens,
  IDormantUsersEntity,
  IActiveUsersEntity,
} from "./overview/overview.component";
import { IHighRiskUserData } from "./overview/user-table/user-table.component";
import { IAllAwbListData } from "./all-awb-list/all-awb-list.component";

@Injectable({
  providedIn: "root",
})
export class AppService {
  private apiUrl = "https://api.pii.dev/";

  constructor(private http: HttpClient) {}

  getDashboardInsights(): Observable<{
    highRiskUsers: IHighRiskUserData[];
    breachedLevels: IBreachedLevelsEntity[];
    piiDepartments: IPiiDepartments[];
    piiScreens: IPiiScreens[];
    dormantUsers: IDormantUsersEntity[];
    activeUsers: IActiveUsersEntity[];
  }> {
    const URL = this.apiUrl + "internal/dashboard/insights";
    return this.http.get<{
      highRiskUsers: IHighRiskUserData[];
      breachedLevels: IBreachedLevelsEntity[];
      piiDepartments: IPiiDepartments[];
      piiScreens: IPiiScreens[];
      dormantUsers: IDormantUsersEntity[];
      activeUsers: IActiveUsersEntity[];
    }>(URL);
  }

  getBehaviourAnalytics(userId: string | null): Observable<any> {
    const URL = (this.apiUrl = `internal/users/${userId}/analytics`);
    return this.http.get<any[]>(URL);
  }

  getAwbList(): Observable<IAllAwbListData[]> {
    const URL = this.apiUrl + "internal/dashboard/awbs";
    return this.http.get<IAllAwbListData[]>(URL);
  }

  searchAwbs(awb: string | null): Observable<any[]> {
    const URL = this.apiUrl + `internal/dashboard/awbs/${awb}`;
    return this.http.get<any[]>(URL);
  }

  downloadCSV(awb: string | null): Observable<any[]> {
    const URL = this.apiUrl + `internal/download-awb-report?awb=${awb}`;
    return this.http.get<any[]>(URL);
  }

  getSettings(): Observable<any[]> {
    const URL = this.apiUrl + `internal/settings`;
    return this.http.get<any[]>(URL);
  }

  updateSetting(body: any): Observable<any[]> {
    const URL = this.apiUrl + `internal/settings`;
    return this.http.post<any[]>(URL, body);
  }
}
