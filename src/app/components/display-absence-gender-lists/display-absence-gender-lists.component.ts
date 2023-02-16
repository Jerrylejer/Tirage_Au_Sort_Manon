import { Component } from '@angular/core';
import { Learners, LEARNERS } from 'src/app/mocks/learners.mocks';
import { SharedDatasService } from 'src/app/sharedDatas.service';

@Component({
  selector: 'app-display-absence-gender-lists',
  templateUrl: './display-absence-gender-lists.component.html',
  styleUrls: ['./display-absence-gender-lists.component.css'],
})
export class DisplayAbsenceGenderListsComponent {

  // Mon mock pour interpoler sur les genres 
  learnerMock: Learners[] = LEARNERS;

  constructor(public data: SharedDatasService) {}

  ngOnInit() {
    this.data.absents;
  }

  deleteAbsent(i: any) {
    this.data.absents.splice(i, 1);
  }
}
