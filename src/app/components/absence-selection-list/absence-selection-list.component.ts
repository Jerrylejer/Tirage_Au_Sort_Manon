import { Component } from '@angular/core';
import { LEARNERS, Learners } from 'src/app/mocks/learners.mocks';
import { SharedDatasService } from 'src/app/sharedDatas.service';

@Component({
  selector: 'app-absence-selection-list',
  templateUrl: './absence-selection-list.component.html',
  styleUrls: ['./absence-selection-list.component.css'],
})
export class AbsenceSelectionListComponent {
  
  constructor(public data: SharedDatasService) {}

  // La propriété "selectionAbsent" reçoit l'event envoyé par l'évenement (change)="onChangeEvent()"
  selectionAbsent: any = '';
  selectionIndex!: number;
  // Mon mock pour interpoler sur les prénoms dans la liste déroulante avec le *ngFor
  learnerMock: Learners[] = LEARNERS;

  // Méthode de récupération de la valeur sélectionnée dans la liste au (change)
  onChangeEvent(event: any) {
    // Je modifie ma propriété "selectionList"
    this.selectionAbsent = event.target.value;
    // Je récupère bien la valeur de l'option sélectionnée dans le DOM
    console.log(this.selectionAbsent);
  }

   // Méthode de récupération de l'index (change)
  onChangeIndex(i: number) {
    // Je modifie ma propriété "selectionList"
    this.selectionIndex = i;
    //! Je récupère undefined ... POURQUOI ??????
    console.log(this.selectionIndex);
  }

  // Au submit, j'envoie la sélection dans le service "sharedDatas" et je réinitialise ensuite la propriété
  onSubmit() {
    // Je communique le firstname au service
    this.data.absents.push(this.selectionAbsent);
    // Je transmets l'index au service
    this.data.indexAbsents.push(this.selectionIndex);
    // Réinitilaisations
    this.selectionAbsent = '';
  }
}
