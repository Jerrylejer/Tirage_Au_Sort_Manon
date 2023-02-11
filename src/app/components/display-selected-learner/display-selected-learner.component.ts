import { Component } from '@angular/core';
import { LEARNERS, Learners } from 'src/app/mocks/learners.mocks';

@Component({
  selector: 'app-display-selected-learner',
  templateUrl: './display-selected-learner.component.html',
  styleUrls: ['./display-selected-learner.component.css'],
})
export class DisplaySelectedLearnerComponent {
  // Récupérer le mock des apprenants
  // learner!: Learners;
  // learners: Learners[] = LEARNERS;
  // Valeur par défaut du swith
  text: number = 0;
  // Je créé un tableau vide pour recueillir les tirages
  tirages: number[] = [];
  duplicates: number[] = [];

  // Je ne lance pas l'initialisation sinon le tirage se lance dès le chargement sans activer le btn
  // ngOnInit() {
  //   this.displayNumber();
  // }

  // Créer une méthode liée au btn html qui lance un chiffre/nombre aléatoire entre 1 et 18
  displayNumber() {
    // Je type et variabilise mon randomNumber
    let randomNumber: number = Math.trunc(Math.random() * 18) + 1;
    // Ne pas répéter un chiffre tant que 1 à 18 ne sont pas tous sortis
    // =>  Créer un tableau vide et pusher les randomNumbers dedans
    // =>  Créer un tableau duplicate et pusher les chiffres déjà tirés
    console.log(randomNumber);
    console.log(this.tirages);
    console.log(this.duplicates);
    // Si le tab n'inclue pas le RN eyt que tab est inf ou = 17
    if (!this.tirages.includes(randomNumber) && this.tirages.length <= 17) {
      // On push le chiffre dans le tableau tirages
      this.tirages.push(randomNumber);
      // text est lié au switch et communique au *ngSwitchCase le randomNumber pour modifier le message
      this.text = randomNumber;
      console.log(typeof this.tirages.length);
      // Si le tableau atteint les 18 éléments
    } else if (this.tirages.length > 17) {
      // J'envoie au *ngSwitchCase le case 20
      this.text = 20;
      // Réinitialisation des tableaux
      this.tirages = [];
      this.duplicates = [];
      // Si le tab tirages inclue déjà le RN
    } else {
      // Je push le doublon dans le tab duplicate
      this.duplicates.push(randomNumber);
    }
  }
}
