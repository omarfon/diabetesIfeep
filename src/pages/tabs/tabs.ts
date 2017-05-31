import { Component } from '@angular/core';
import { AlertasPage } from '../alertas/alertas';
import { TemasPage } from '../temas/temas';
import { TodoPage } from '../todo/todo';
import { ControlesPage } from '../controles/controles';
import { PrincipalPage } from '../principal/principal';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
   // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = AlertasPage;
  tab2Root: any = TemasPage;
  tab3Root: any = PrincipalPage;
  tab4Root: any = TodoPage;
  tab5Root: any = ControlesPage;

  constructor(  ) {
  }


}
