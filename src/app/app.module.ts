import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// ksodesign
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';





@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  /* const climatempoToken = '5351ff36b37d290ac5f4f2e7ac5d7800';
  private API_URL = 'http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/3477/days/15?token='+climatempoToken;

 constructor(public http: HttpModule) { }

  getClima() {
    return new Promise((resolve, reject) => {

      this.http.get(this.API_URL)
        .subscribe((result: any) => {
            resolve(result.json());
          },
          (error) => {
            reject(error.json());
          });


    });
  }*/
}
