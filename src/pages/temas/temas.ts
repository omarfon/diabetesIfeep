import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetalleClasePage } from '../detalle-clase/detalle-clase';

import { CLASES } from '../../assets/json/clases';

import { Lista } from '../../assets/interfaces/lista.interface';

@Component({
  selector: 'page-temas',
  templateUrl: 'temas.html',
})
export class TemasPage {

lista:Lista[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

     this.lista = CLASES.splice(0);

  }
irADetalle(li){
  this.navCtrl.push(DetalleClasePage,{
    li:li,
  });
}


}
