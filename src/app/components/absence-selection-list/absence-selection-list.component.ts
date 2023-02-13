import { Component } from '@angular/core';
import { LEARNERS, Learners } from 'src/app/mocks/learners.mocks';

@Component({
  selector: 'app-absence-selection-list',
  templateUrl: './absence-selection-list.component.html',
  styleUrls: ['./absence-selection-list.component.css'],
})
export class AbsenceSelectionListComponent {
  selectionAbsent: string = '';
  absents: string[] = [];
  // Mon mock pour interpoler sur les prénoms
  learnerMock: Learners[] = LEARNERS;

  // Récupération des valeurs sélectionnée dans la liste (change)
  onChangeEvent(event: any) {
    // Je modifie ma propriété "selectionList"
    this.selectionAbsent = event.target.value;
    // Je récupère bien la valeur de l'option sélectionnée dans le DOM
    console.log(this.selectionAbsent);
  }

  // Au click du btn, j'ajoute la valeur retenue dans un tableau
  sendForListing() {
    // Je communique la nouvelle data et mets à jour le tableau "absents" des apprenants sélectionnés
    this.absents.push(this.selectionAbsent);
    // Je récupère bien ce tableau en console
    console.log(this.absents);
  }
}
