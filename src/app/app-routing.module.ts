import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsenceComponent } from './pages/absence/absence.component';
import { LotteryComponent } from './pages/lottery/lottery.component';

const routes: Routes = [
  {
    path: "",
    component: LotteryComponent
  },
  {
    path:"absences",
    component: AbsenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
