import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { GetValueService } from '../../services/get-value.service';



@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQrPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu() {
    this.menuController.open('first');
  }

  public clase = {
    codigo: '',
    numero: '',
    horaInicio: '',
    horaTermino: '',
    sala: '',
  };

  onSubmit() {
    console.log('La clase se ha generado con exito');
    console.log(this.clase);
    console.log('localGet de numero:' + this.clase.numero);
    console.log('serviceGet de numero:' + GetValueService.numero);
    GetValueService.numero = this.clase.numero.slice();
    GetValueService.codigo = this.clase.codigo.slice();
    GetValueService.horaInicio = this.clase.horaInicio.slice();
    GetValueService.horaTermino = this.clase.horaTermino.slice();
    GetValueService.sala = this.clase.sala.slice();

  };
}
