import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { PeriodicosPage } from '../../pages/periodicos/periodicos';
import { EspecializadoPage } from '../../pages/especializado/especializado';
import { PesquizajePage } from '../../pages/pesquizaje/pesquizaje';
import { GlucemiaPage } from '../../pages/glucemia/glucemia';


@Component({
  selector: 'page-controles',
  templateUrl: 'controles.html',
})
export class ControlesPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
  }
irAPeriodicos(){
  this.navCtrl.push(PeriodicosPage);
}
irAEspecializado(){
  this.navCtrl.push( EspecializadoPage );
}
irAPesquizaje(){
  this.navCtrl.push(PesquizajePage);
}
irAGlucemia(){
  this.navCtrl.push( GlucemiaPage );
}
}
