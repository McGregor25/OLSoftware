import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/services/loader/loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public loader: LoaderService, private router: Router) { }

  ngOnInit(): void {
  }

  abrirMenu(): void {
    this.loader.menuAbierto ? this.loader.menuAbierto = false : this.loader.menuAbierto = true;
    document.getElementById("menu")?.classList.remove("cerrado")
  }

  salir() {
    this.router.navigate(['/auth/login'])
  }

}
