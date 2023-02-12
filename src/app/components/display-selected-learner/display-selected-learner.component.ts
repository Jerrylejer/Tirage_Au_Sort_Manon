import { Component } from '@angular/core';
import { LEARNERS, Learners } from 'src/app/mocks/learners.mocks';

@Component({
  selector: 'app-display-selected-learner',
  templateUrl: './display-selected-learner.component.html',
  styleUrls: ['./display-selected-learner.component.css'],
})
export class DisplaySelectedLearnerComponent {
  // Récupérer le mock des apprenants
  learner!: Learners;
  learners: Learners[] = LEARNERS;
  
  //* Seconde méthode adoptée suite problème pour contourner larépétition du RandomNumber dans méthode 1 (à la suite)
  // Valeur par défaut du switch
  text: number = 0;
  // Tableau des chiffres correspondants aux différents ngSwitchCase
  switchCases: any[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  index: number = -1;

  // Je lance l'initialisation pour le mélange du tableau au lancement de l'app
  ngOnInit() {
    this.displayShuffle();
  }

  // Une méthode de mélange des éléments du tableau (shuffle)
  displayShuffle() {
    for (let i = this.switchCases.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.switchCases[i], this.switchCases[j]] = [
        this.switchCases[j],
        this.switchCases[i],
      ];
    }
    console.log(this.switchCases);
  }

  // Lecture des swithCases suivant l'ordre du tableau switchCases shufflé
  displayByNumber() {
    this.index++;
    this.index %= this.switchCases.length;
    this.text = this.switchCases[this.index];
    console.log(this.index);

    // Mise en place des conditions
    if (this.index == 17) {
      // Arrivé au dernier index du tableau, je lance la réinitialisation du mélange du tableau
      this.ngOnInit();
    }
  }

  //! Méthode avec un chiffre aléatoire mais difficultés rencontrées car le même RN revient plsr fois et
  //! implique plusieurs clicks pour faire passer tous les apprenants => abandonné mais gardé ici pour l'expérience
  // Je créé un tableau vide pour recueillir les tirages
  // tirages: number[] = [];
  // duplicates: number[] = [];

  // Créer une méthode liée au btn html qui lance un chiffre/nombre aléatoire entre 1 et 18
  // displayByNumber() {
  // Je type et variabilise mon randomNumber
  //   let randomNumber: number = Math.trunc(Math.random() * 18) + 1;
  // Ne pas répéter un chiffre tant que 1 à 18 ne sont pas tous sortis (je n'y arrive pas)
  // =>  Créer un tableau vide et pusher les randomNumbers dedans
  // =>  Créer un tableau duplicate et pusher les chiffres déjà tirés

  // Je teste mes retours de datas
  //   console.log(randomNumber);
  //   console.log(this.tirages);
  //   console.log(this.duplicates);
  //   console.log(this.learners[randomNumber].isPresent)

  // Si le tab n'inclus pas le RN et que l'altennant est présent
  //   if(!this.tirages.includes(randomNumber) && this.learners[randomNumber].isPresent == true) {
  // On push le chiffre dans le tableau tirages
  //     this.tirages.push(randomNumber);
  // text est lié au switch et communique au *ngSwitchCase le randomNumber pour modifier le message
  //     this.text = randomNumber;
  // Si le tab n'inclus pas le RN et que l'altennant est absent
  //   } else if (!this.tirages.includes(randomNumber) && this.learners[randomNumber].isPresent == false){
  // J'envoie au *ngSwitchCase le case 21 (malade)
  //     this.text = 21
  // Si le tableau atteint les 18 éléments
  //   } else if (this.tirages.length > 17) {
  // J'envoie au *ngSwitchCase le case 20 (tous passés)
  //     this.text = 20;
  // et je réinitialisation des tableaux
  //     this.tirages = [];
  //     this.duplicates = [];
  // Si le tab tirages inclue déjà le RN
  //   } else {
  // Je push le doublon dans le tab duplicate
  //     this.duplicates.push(randomNumber);
  //   }
  // }
}
