import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationFrameworkModule } from './features/application-framework.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApplicationFrameworkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
