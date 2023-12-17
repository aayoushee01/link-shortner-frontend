import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule,NbInputModule } from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthModule } from './auth/auth.module';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { LinkShortner } from './link-shortner/link-shortner.component';
import { FormsModule } from '@angular/forms';
import {   
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule, NbTableModule,NbListModule} from '@nebular/theme';
import { UrlTableComponent } from './url-table/url-table.component';
import { AnalyticsComponent } from './analytics/analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LinkShortner,
    UrlTableComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbInputModule,
    NbCardModule,
    AuthModule,
    HttpClientModule,
    FormsModule,
    NbAlertModule,
    NbButtonModule,
    NbCheckboxModule,
    NbTableModule,
    NbListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
