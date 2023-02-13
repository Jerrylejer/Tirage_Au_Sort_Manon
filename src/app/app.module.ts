import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbsenceComponent } from './pages/absence/absence.component';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';
import { FooterAppComponent } from './components/footer-app/footer-app.component';
import { DisplaySelectedLearnerComponent } from './components/display-selected-learner/display-selected-learner.component';
import { AbsenceSelectionListComponent } from './components/absence-selection-list/absence-selection-list.component';
import { DisplayAbsenceGenderListsComponent } from './components/display-absence-gender-lists/display-absence-gender-lists.component';
import { LotteryComponent } from './pages/lottery/lottery.component';


@NgModule({
  declarations: [
    AppComponent,
    AbsenceComponent,
    HeaderMenuComponent,
    FooterAppComponent,
    DisplaySelectedLearnerComponent,
    AbsenceSelectionListComponent,
    DisplayAbsenceGenderListsComponent,
    LotteryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
