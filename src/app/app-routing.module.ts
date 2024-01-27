import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EightballComponent } from './eightball/eightball.component';

const routes: Routes = [
  {
    path: "",
    component: EightballComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
