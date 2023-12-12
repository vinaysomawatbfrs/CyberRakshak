import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoaderService {
  private loaderVisible = new BehaviorSubject<boolean>(false);
  loaderVisible$ = this.loaderVisible.asObservable();

  get isLoading(): boolean {
    return this.loaderVisible.value;
  }

  showLoader() {
    this.loaderVisible.next(true);
  }

  hideLoader() {
    this.loaderVisible.next(false);
  }
}
