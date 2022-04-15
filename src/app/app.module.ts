import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SysopsComponent } from './sysops/sysops.component';
import { SysoptestsComponent } from './sysoptests/sysoptests.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SysopsComponent,
    SysoptestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
