import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'
import { LoaderService } from 'src/services/loader/loader.service';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.scss']
})
export class PerfilesComponent implements OnInit {
  datosIniciales = [
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },
    { nombres: "Pepito", apellidos: "Perez", identificacion: "114405659", rol: "Admin", estado: "Activo", telefono: "315444945", email: "315224154" },

  ];

  columns = [
    { columna: 'nombres', texto: 'Nombres', celda: (element: any) => `${element.nombres}` },
    { columna: 'apellidos', texto: 'Apellidos', celda: (element: any) => `${element.apellidos}` },
    { columna: 'identificacion', texto: 'Identificacion (C.C)', celda: (element: any) => `${element.identificacion}` },
    { columna: 'rol', texto: 'Rol asociado', celda: (element: any) => `${element.rol}` },
    { columna: 'estado', texto: 'Estado', celda: (element: any) => `${element.estado}` },
    { columna: 'telefono', texto: 'Teléfono', celda: (element: any) => `${element.telefono}` },
    { columna: 'email', texto: 'Correo electronico', celda: (element: any) => `${element.email}` },
    { columna: 'accion', texto: 'Acción', celda: (element: any) => `` },
  ];

  columnasMostradas = this.columns.map(c => c.columna);
  Perfiles: MatTableDataSource<any> = new MatTableDataSource<any[]>([]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  formulario: FormGroup;

  constructor(private builder: FormBuilder, public loader: LoaderService) {
    this.Perfiles = new MatTableDataSource(<any>this.datosIniciales);

    this.formulario = this.builder.group({});
    this.columns.forEach(campo => {
      if (campo.columna == "email") {
        this.formulario.addControl(campo.columna, new FormControl("", Validators.email))
      } else if (campo.columna == "accion") {
        this.formulario.addControl("contrasena", new FormControl(""))
      } else {
        this.formulario.addControl(campo.columna, new FormControl(""))
      }
    });

    console.log(this.formulario.value);

  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.Perfiles.paginator = this.paginator;
    this.Perfiles.sort = this.sort;

    const paginatorRangeSpanish = (page: number, pageSize: number, length: number) => {
      if (length == 0 || pageSize == 0) { return `0 de ${length}`; }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;
      return `${startIndex + 1} - ${endIndex} de ${length}`;
    }
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
    this.paginator._intl.getRangeLabel = paginatorRangeSpanish;
  }

  filtroMovil(estado: boolean): void {
    if (estado) {
      document.getElementById("filtroMovil")?.classList.add("abierto");
    } else {
      document.getElementById("filtroMovil")?.classList.remove("abierto");
    }
  }

  abrirModalCrear(estado: boolean): void {
    if (estado) {
      document.getElementById("modalCrear")?.classList.add("abierto");
    } else {
      document.getElementById("modalCrear")?.classList.remove("abierto");
    }
  }

}
