import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHomeComponent } from './app-home/app-home.component';
import { HeaderAreaComponent } from './header-area/header-area.component';

@NgModule({
  declarations: [AppHomeComponent, HeaderAreaComponent],
  imports: [
    CommonModule,
  ],
  exports:[AppHomeComponent,HeaderAreaComponent]
})
export class ApplicationFrameworkModule { }
