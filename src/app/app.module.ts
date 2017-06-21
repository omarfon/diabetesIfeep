import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FormularioPage } from '../pages/formulario/formulario';
import { TabsPage } from '../pages/tabs/tabs';
import { TodoPage } from '../pages/todo/todo';
import { TemasPage } from '../pages/temas/temas';
import { PrincipalPage } from './../pages/principal/principal';
import { ControlesPage } from './../pages/controles/controles';
import { AlertasPage } from './../pages/alertas/alertas';
import { DetalleClasePage }from './../pages/detalle-clase/detalle-clase';

import { PeriodicosPage } from './../pages/periodicos/periodicos';
import { EspecializadoPage } from './../pages/especializado/especializado';
import { PesquizajePage } from './../pages/pesquizaje/pesquizaje';
import { GlucemiaPage } from './../pages/glucemia/glucemia';





@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FormularioPage,
    TabsPage,
    TodoPage,
    TemasPage,
    PrincipalPage,
    ControlesPage,
    AlertasPage,
    DetalleClasePage,
    PeriodicosPage,
    EspecializadoPage,
    PesquizajePage,
    GlucemiaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FormularioPage,
    TabsPage,
    TodoPage,
    TemasPage,
    PrincipalPage,
    ControlesPage,
    AlertasPage,
    DetalleClasePage,
    PeriodicosPage,
    EspecializadoPage,
    PesquizajePage,
    GlucemiaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
