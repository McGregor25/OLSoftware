import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from 'src/services/loader/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public loader: LoaderService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.mensajeInicial();
    }, 2000);
  }

  login() {
    this.loader.mostrarLoader = true;
    setTimeout(() => {
      this.loader.mostrarLoader = false;
      this.router.navigate(['/admin/perfiles/usuarios'])
    }, 2000);
  }

  mensajeInicial() {
    document.getElementById("mensaje-inicial")?.classList.toggle("abierto");
  }

}
