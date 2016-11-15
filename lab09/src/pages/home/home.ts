import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocateDetailPage } from '../locate-detail/locate-detail';
declare var google: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [
    {
      name: "Burapha Univercity, Thailand",
      lat: 13.284932,
      lng: 100.924709
    },
    {
      name: "Oslo, Norway",
      lat: 59.917193,
      lng: 10.764511
    },
    {
      name: "Alaska, USA",
      lat: 64.976550,
      lng: 151.892349
    }
  ];

  constructor(
    public navCtrl: NavController
  ) {}

  ionViewDidLoad(){
    
  }

  warpTo(item) {
    this.navCtrl.push(LocateDetailPage, {
        item: item
    });
  }

}