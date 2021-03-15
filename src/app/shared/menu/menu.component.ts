import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { MENU_APP } from 'src/app/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: MENU_APP[] = [
    {
      icono: "home",
      texto: "Inicio",
      activo: false,
      // url: "/auth/login"
    },
    {
      icono: "map",
      texto: "Programacion de rutas",
      abierto: false,
      height: 0,
      activo: false,
      acordeon: [
        {
          letra: "P",
          texto: "Programar ruta",
        },
        {
          letra: "V",
          texto: "Ver rutas",
        }
      ]
    },
    {
      icono: "format_list_bulleted",
      texto: "Gestion de operaciones",
      abierto: false,
      height: 0,
      activo: false,
      acordeon: [
        {
          letra: "V",
          texto: "Ver operaciones",
        }
      ]
    },
    {
      icono: "tune",
      texto: "Perfiles",
      abierto: false,
      height: 0,
      activo: false,
      acordeon: [
        {
          letra: "R",
          texto: "Roles",
        },
        {
          letra: "U",
          texto: "Usuarios",
          url: "/admin/perfiles/usuarios"
        }
      ]
    },
    {
      icono: "insert_drive_file",
      texto: "Reportes",
      abierto: false,
      height: 0,
      activo: false,
      acordeon: [
        {
          letra: "G",
          texto: "General",
        },
        {
          letra: "C",
          texto: "Completo",
        }
      ]
    },
  ]
  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationStart) {
        this.validarModuloActivo(val.url)
      }
    });
  }

  validarModuloActivo(url: string): void {
    this.menu.forEach((p) => {
      p.activo = false;
    })
    this.menu.forEach((p) => {
      if (p.url?.includes(url)) {
        p.activo = true;
        return;
      }
      p.acordeon?.forEach((_p) => {
        if (_p.url?.includes(url)) {
          p.activo = true;
          return;
        }
      })
    })
  }

  ngOnInit(): void {
    this.validarModuloActivo(this.router.url)
    this.activarAcordeon()
  }

  activarAcordeon(): void {

    this.menu.forEach((item) => {
      let height = 0;
      item.acordeon?.forEach((acordeon) => {
        height += 66;
        item.height = height
      });
    });

  }

}
