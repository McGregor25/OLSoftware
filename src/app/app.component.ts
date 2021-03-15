import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LoaderService } from 'src/services/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ol-software-prueba-beyman';
  rutaActual: string = "";
  menuHover: boolean = false;
  abrirConHover: boolean = false;

  constructor(private router: Router, public loader: LoaderService) {
    loader.texto = "Estamos preparando todo para tí";
    loader.mostrarLoader = true;

    // suscribirse a los eventos del router
    router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        // validar si estoy en admin o auth
        setTimeout(() => {
          this.cerrarMenu();
        }, 100);
        val.url === "/" ? this.rutaActual = "auth" : val.url.includes("/auth") ? this.rutaActual = "auth" : this.rutaActual = "admin";
      }
    });
  }

  ngOnInit(): void {
    this.loader.screenWidth = window.innerWidth;
    setTimeout(() => {
      this.loader.mostrarLoader = false;
      this.cerrarMenu();
    }, 2000);

  }

  abrirMenu(estado: boolean): void {
    if (this.abrirConHover) {
      this.menuHover = estado;
      if (!estado) {
        this.loader.menuAbierto = false;
      }
      setTimeout(() => {
        if (this.menuHover) {
          this.loader.menuAbierto ? this.loader.menuAbierto = false : this.loader.menuAbierto = true;
        }
      }, 300);
    }
  }

  cerrarMenu(): void {
    document.getElementById("menu")?.classList.add("cerrado")
  }

  _eventoRedimencionar(event: any) {
    this.loader.screenWidth = window.innerWidth;
    if (window.innerWidth <= 991) {
      this.abrirConHover = false;
    }
  }

}
