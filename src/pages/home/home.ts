import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  linkToHome() {

    this.navCtrl.push(ContactPage)
    console.log('cliquei');
  };

}
