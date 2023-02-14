import { Component } from '@angular/core';
import { SharedDatasService } from 'src/app/sharedDatas.service';

@Component({
  selector: 'app-display-absence-gender-lists',
  templateUrl: './display-absence-gender-lists.component.html',
  styleUrls: ['./display-absence-gender-lists.component.css'],
})
export class DisplayAbsenceGenderListsComponent {
  
  constructor(public data: SharedDatasService) {}

  ngOnInit() {
    this.data.absents;
  }

  deleteAbsent() {

  }

}
