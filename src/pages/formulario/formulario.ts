import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TabsPage } from './../tabs/tabs';


@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

  dataInicial: FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public fb: FormBuilder) {

      this.dataInicial = this.fb.group({
        nombres: ['',[Validators.required]],
        apellidos: ['',[Validators.required]],
        telefono: ['',[Validators.required]],
      });

      console.log('dataInicial');
  }

pasaraTabs(){
  this.navCtrl.push(TabsPage);
 }
}
