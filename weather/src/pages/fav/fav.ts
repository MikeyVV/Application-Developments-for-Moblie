import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/*
  Generated class for the Fav page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fav',
  templateUrl: 'fav.html'
})
export class FavPage {

  fav: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.fav = this.navParams.get("fav");
  }

  ionViewDidLoad() {

  }

  removeWeather(id) {
    this.http.post("http://angsila.cs.buu.ac.th/~57160438/ApplicationDevelopmentsForMoblie/weatherApp/delete.php", { id: id })
      .subscribe(data => {
        var resp = data.text().trim();
        if (resp = "success") {
          this.getFav()
        } else {
          console.log("Delete Faile");
        }
      }, err => {
        console.log(err);
      })
  }
  getFav() {
    this.http.get("http://angsila.cs.buu.ac.th/~57160438/ApplicationDevelopmentsForMoblie/weatherApp/load.php")
      .subscribe(data => {
        this.fav = data.json()
      })
  }

}
