import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
declare var google: any;
@Component({
  selector: 'page-locate-detail',
  templateUrl: 'locate-detail.html'
})
export class LocateDetailPage {

  map: any;
  name: string;
  lat : number;
  lng : number;

  constructor(public navController : NavController,public navParams: NavParams)
  {

  }

  ionViewDidLoad() {
    this.name = this.navParams.get('item').name;
    this.lat = this.navParams.get('item').lat;
    this.lng = this.navParams.get('item').lng;
    console.log(this.name);
    console.log(this.lat);
    console.log(this.lng);
    //13.284932, 100.924709
    let latLng = new google.maps.LatLng(this.lat, this.lng);
    let mapEle = document.getElementById('map');
    this.map = new google.maps.Map(mapEle, {
      center: latLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      console.log("google map is called.");
      mapEle.classList.add('show-map');
      google.maps.event.trigger(mapEle, 'resize');
    });
  }
}
