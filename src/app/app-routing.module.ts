import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './features/app-home/app-home.component';

const routes: Routes = [{
  path:'homepage',
  component: AppHomeComponent
},
{ path: '**', redirectTo: '/homepage', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
