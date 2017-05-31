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
    AlertasPage
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
    AlertasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
