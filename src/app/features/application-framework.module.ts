import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHomeComponent } from './app-home/app-home.component';
import { HeaderAreaComponent } from './header-area/header-area.component';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [AppHomeComponent, HeaderAreaComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports:[AppHomeComponent,HeaderAreaComponent]
})
export class ApplicationFrameworkModule { }
