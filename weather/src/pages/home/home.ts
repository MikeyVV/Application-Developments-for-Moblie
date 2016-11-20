import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ResultPage } from '../result/result';
import { FavPage } from '../fav/fav';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user_txt;
  status = "Go";
  fav_status = "Favorite Weather";
  constructor(public navCtrl: NavController, public http: Http) {

  }

  getWeather() {
    if (this.user_txt != "") {
      this.status = "...Loading...";
      this.http.get("http://api.openweathermap.org/data/2.5/weather?q=" + this.user_txt + "&units=metric&APPID=707437ecdc412d713d1c6f0f69327be0")
        .subscribe(data => {
          this.navCtrl.push(ResultPage, {
            weather: data.json()
          })
          this.status = "Go";
          this.user_txt = "";
        })
    }
  }

  goToFav() {
    this.fav_status = "...Loading...";
    this.http.get("http://angsila.cs.buu.ac.th/~57160438/ApplicationDevelopmentsForMoblie/weatherApp/load.php")
      .subscribe(data => {
        this.navCtrl.push(FavPage, {
          fav: data.json()
        })
        this.fav_status = "Favorite Weather";
      })
  }

}
