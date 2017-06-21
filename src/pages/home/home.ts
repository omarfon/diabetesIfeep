import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormularioPage } from '../formulario/formulario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
credenciales = {usuario:'', contrasena:''};
  constructor(public navCtrl: NavController,
              public alertctrl: AlertController) {}

iniciarSesion(){
  if(this.credenciales.usuario === 'user' && this.credenciales.contrasena === '123'){
    this.navCtrl.setRoot(FormularioPage);
  }else{
    let alert = this.alertctrl.create({
        title:'Error',
        subTitle: 'Usuario y/o contraseña incorrecta',
        buttons: ['Cerrar']
    });
      alert.present(prompt);
  }
}
 irACondiciones(){
   let alertdos = this.alertctrl.create({
      title:'Terminos Y condiciones',
      message:'Quisque rutrum. Aenean commodo ligula eget dolor. Phasellus consectetuer vestibulum elit. Suspendisse non nisl sit amet velit hendrerit rutrum. Donec mi odio, faucibus at',
      buttons: ['Cerrar']
   });
   alertdos.present(prompt);
 }

}
