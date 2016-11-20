import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Result page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-result',
  templateUrl: 'result.html'
})
export class ResultPage {

  weather: any
  status: string

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.status = "Save"
    this.weather = this.navParams.get("weather")
  }

  ionViewDidLoad() {

    //console.log(this.weather.main.temp);
  }

  saveWeather() {
    if (this.status != "Saved") {
      this.status = "...Saving..."
      this.http.post("http://angsila.cs.buu.ac.th/~57160438/ApplicationDevelopmentsForMoblie/weatherApp/store.php",
        {
          temp: this.weather.main.temp,
          city: this.weather.name,
          desc: this.weather.weather[0].description
        }).subscribe(data => {
          var resp = data.text().trim();
          if (resp = "success") {
            this.status = "Saved"
          } else {
            this.status = "Error"
            setTimeout(function () { this.status = "Save" }, 1000)
          }
        }, err => {
          console.log(err);
        })
    }
  }
}
