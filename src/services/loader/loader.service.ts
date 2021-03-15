import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  mostrarLoader: boolean = false;
  texto: string = "Espere..."
  menuAbierto: boolean = false;
  screenWidth: number = 0;
  constructor() { }
}
