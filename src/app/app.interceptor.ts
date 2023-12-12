import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType,
} from "@angular/common/http";
import { Observable, tap } from "rxjs";
import { LoaderService } from "./loader.service";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loaderService.showLoader();

    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event.type === HttpEventType.Response) {
            this.loaderService.hideLoader();
          }
        },
        (error) => {
          this.loaderService.hideLoader();
        }
      )
    );
  }
}
