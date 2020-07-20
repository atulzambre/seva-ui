import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { LoginPageComponent } from "./login-page/login-page.component";
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from "@angular/router";
import { RegisterPageComponent } from "./register-page/register-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { SearchFilterPageComponent } from "./search-filter-page/search-filter-page.component";
import { PaginationPageComponent } from "./pagination-page/pagination-page.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent,
    RegisterPageComponent,
    HomePageComponent,
    SearchFilterPageComponent,
    PaginationPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatPaginatorModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule],
})
export class AppModule {}
