import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-detalle-clase',
  templateUrl: 'detalle-clase.html',
})
export class DetalleClasePage {

li:null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.li = this.navParams.get('li');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleClase');
  }

}
