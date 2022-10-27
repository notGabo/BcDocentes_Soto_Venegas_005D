import { Component, OnInit } from '@angular/core';
import { FeriadosService } from '../../services/feriados.service';


@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {

  feriado: any;

  constructor(private feriadosService: FeriadosService) { }

  ngOnInit() {
    //rescatamos los datos de la API REST
    this.feriadosService.getFeriados().subscribe(resp => {
      console.log('feriados', resp);
      this.feriado = resp;
      console.log(this.feriado);
    });

  }
}
