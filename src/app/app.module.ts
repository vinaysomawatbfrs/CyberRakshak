import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/header/header.component";
import { AppService } from "./app.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { SideBarComponent } from "./sidebar/sidebar.component";
import { AppInterceptor } from "./app.interceptor";
import { LoaderService } from "./loader.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderComponent,
    HttpClientModule,
    SideBarComponent,
  ],
  providers: [
    AppService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
