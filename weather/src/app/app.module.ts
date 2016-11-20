import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ResultPage} from '../pages/result/result';
import {FavPage} from '../pages/fav/fav';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ResultPage,
    FavPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ResultPage,
    FavPage
  ],
  providers: []
})
export class AppModule {}
