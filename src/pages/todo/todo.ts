import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-todo',
  templateUrl: 'todo.html',
})
export class TodoPage{

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
