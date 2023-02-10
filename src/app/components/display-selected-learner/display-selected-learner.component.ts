import { Component } from '@angular/core';
import { LEARNERS, Learners } from 'src/app/mocks/learners.mocks';


@Component({
  selector: 'app-display-selected-learner',
  templateUrl: './display-selected-learner.component.html',
  styleUrls: ['./display-selected-learner.component.css']
})
export class DisplaySelectedLearnerComponent {
// Récupérer le mock des apprenants
learner!: Learners;
learners: Learners[]= LEARNERS;
// Initialiser la méthode du chiffre aléatoire au lancement du module
onInit() {
  this.displayNumber();
}
// Créer une méthode liée au btn html qui lance un chiffre/nombre aléatoire entre 1 et 18
displayNumber() {
  let randomNumber: number = Math.trunc(Math.random() * 18) + 1;
  console.log(randomNumber);
  // Condition switch liée à l'ID 
  switch(randomNumber) {
    case 1:
      // afficher dans le DOM le prénom dont l'ID est égale au chiffre aléatoire
      randomNumber == this.learners[randomNumber].id ? console.log(this.learners[randomNumber].firstname) : console.log("ça ne marche pas !")
      // afficher dans le DOM la phrase genrée qui répond au booléan isFemale (true ou false)
    break;
    case 2:
      // afficher dans le DOM le prénom dont l'ID est égale au chiffre aléatoire
      randomNumber == this.learners[randomNumber].id ? console.log(this.learners[randomNumber].firstname) : console.log("ça ne marche pas !")
      // afficher dans le DOM la phrase genrée qui répond au booléan isFemale (true ou false)
    break;
    case 3:
      // afficher dans le DOM le prénom dont l'ID est égale au chiffre aléatoire
      randomNumber == this.learners[randomNumber].id ? console.log(this.learners[randomNumber].firstname) : console.log("ça ne marche pas !")
      // afficher dans le DOM la phrase genrée qui répond au booléan isFemale (true ou false)
    break;
    case 4:
      // afficher dans le DOM le prénom dont l'ID est égale au chiffre aléatoire
      randomNumber == this.learners[randomNumber].id ? console.log(this.learners[randomNumber].firstname) : console.log("ça ne marche pas !")
      // afficher dans le DOM la phrase genrée qui répond au booléan isFemale (true ou false)
    break;
    case 5:
      // afficher dans le DOM le prénom dont l'ID est égale au chiffre aléatoire
      randomNumber == this.learners[randomNumber].id ? console.log(this.learners[randomNumber].firstname) : console.log("ça ne marche pas !")
      // afficher dans le DOM la phrase genrée qui répond au booléan isFemale (true ou false)
    break;
    case 6:
      // afficher dans le DOM le prénom dont l'ID est égale au chiffre aléatoire
      randomNumber == this.learners[randomNumber].id ? console.log(this.learners[randomNumber].firstname) : console.log("ça ne marche pas !")
      // afficher dans le DOM la phrase genrée qui répond au booléan isFemale (true ou false)
    break;
    case 7:
      // afficher dans le DOM le prénom dont l'ID est égale au chiffre aléatoire
      randomNumber == this.learners[randomNumber].id ? console.log(this.learners[randomNumber].firstname) : console.log("ça ne marche pas !")
      // afficher dans le DOM la phrase genrée qui répond au booléan isFemale (true ou false)
    break;
    case 8:
      // afficher dans le DOM le prénom dont l'ID est égale au chiffre aléatoire
      randomNumber == this.learners[randomNumber].id ? console.log(this.learners[randomNumber].firstname) : console.log("ça ne marche pas !")
      // afficher dans le DOM la phrase genrée qui répond au booléan isFemale (true ou false)
    break;
    case 9:
      // afficher dans le DOM le prénom dont l'ID est égale au chiffre aléatoire
      randomNumber == this.learners[randomNumber].id ? console.log(this.learners[randomNumber].firstname) : console.log("ça ne marche pas !")
      // afficher dans le DOM la phrase genrée qui répond au booléan isFemale (true ou false)
    break;
    case 10:
      // afficher dans le DOM le prénom dont l'ID est égale au chiffre aléatoire
      randomNumber == this.learners[randomNumber].id ? console.log(this.learners[randomNumber].firstname) : console.log("ça ne marche pas !")
      // afficher dans le DOM la phrase genrée qui répond au booléan isFemale (true ou false)
    break;
    case 11:
      // afficher dans le DOM le prénom dont l'ID est égale au chiffre aléatoire
      randomNumber == this.learners[randomNumber].id ? console.log(this.learners[randomNumber].firstname) : console.log("ça ne marche pas !")
      // afficher dans le DOM la phrase genrée qui répond au booléan isFemale (true ou false)
    break;
    case 12:
      // afficher dans le DOM le prénom dont l'ID est égale au chiffre aléatoire
      randomNumber == this.learners[randomNumber].id ? console.log(this.learners[randomNumber].firstname) : console.log("ça ne marche pas !")
      // afficher dans le DOM la phrase genrée qui répond au booléan isFemale (true ou false)
    break;
    case 13:
      // afficher dans le DOM le prénom dont l'ID est égale au chiffre aléatoire
      randomNumber == this.learners[randomNumber].id ? console.log(this.learners[randomNumber].firstname) : console.log("ça ne marche pas !")
      // afficher dans le DOM la phrase genrée qui répond au booléan isFemale (true ou false)
    break;
    case 14:
      // afficher dans le DOM le prénom dont l'ID est égale au chiffre aléatoire
      randomNumber == this.learners[randomNumber].id ? console.log(this.learners[randomNumber].firstname) : console.log("ça ne marche pas !")
      // afficher dans le DOM la phrase genrée qui répond au booléan isFemale (true ou false)
    break;
    case 15:
      // afficher dans le DOM le prénom dont l'ID est égale au chiffre aléatoire
      randomNumber == this.learners[randomNumber].id ? console.log(this.learners[randomNumber].firstname) : console.log("ça ne marche pas !")
      // afficher dans le DOM la phrase genrée qui répond au booléan isFemale (true ou false)
    break;
    case 16:
      // afficher dans le DOM le prénom dont l'ID est égale au chiffre aléatoire
      randomNumber == this.learners[randomNumber].id ? console.log(this.learners[randomNumber].firstname) : console.log("ça ne marche pas !")
      // afficher dans le DOM la phrase genrée qui répond au booléan isFemale (true ou false)
    break;
    case 17:
      // afficher dans le DOM le prénom dont l'ID est égale au chiffre aléatoire
      randomNumber == this.learners[randomNumber].id ? console.log(this.learners[randomNumber].firstname) : console.log("ça ne marche pas !")
      // afficher dans le DOM la phrase genrée qui répond au booléan isFemale (true ou false)
    break;
    case 18:
      // afficher dans le DOM le prénom dont l'ID est égale au chiffre aléatoire
      randomNumber == this.learners[randomNumber].id ? console.log(this.learners[randomNumber].firstname) : console.log("ça ne marche pas !")
      // afficher dans le DOM la phrase genrée qui répond au booléan isFemale (true ou false)
    break;
    
  }
}
// Je devrai lié ce chiffre/nombre aléatoire à l'id correspondant dans mon mock
// Afficher dans le html le prénom de l'ID correspondant
// Adapter une phrase au genre de l'ID tiré au sort (if else ou switch ?)
}
