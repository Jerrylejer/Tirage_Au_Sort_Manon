import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDatasService {

constructor() { }
// La propriété "absents" peut recevoir une liste pré-enregistrée et/ou la valeur d'un input (voir absence-selection-component.ts et .html)
absents: string[] = [];
indexAbsents: any[] = [];
}
