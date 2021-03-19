import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgmTravelComponent } from './agm-travel/agm-travel.component';

const routes: Routes = [
  {path: '' , component: AgmTravelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
