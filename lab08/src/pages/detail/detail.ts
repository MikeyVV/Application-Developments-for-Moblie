import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Camera } from 'ionic-native';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  contact:any;
  image: any = "assets/img/photo-1476770695358-0f31dff68d45.jpg";
  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {
    this.contact = this.navParams.get("contact");
  }

  goBack(){
    this.navCtrl.pop();
  }

  takePhoto(){
    var options = {
      quality:75,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG
    };

    Camera.getPicture(options).then((image)=>{
      this.image = image;
    },(err)=>{

    });
  }

  takeLibrary(){
    var options = {
      quality:75,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG
    };

    Camera.getPicture(options).then((image)=>{
      this.image = image;
    },(err)=>{

    });
  }

  chooseMedia(){
    let actionsheet = this.actionSheetCtrl.create({
      title: "Upload Todo image",
      buttons:[
        {
          text: "Take Photo",
          icon: "camera",
          handler: () => {
            let resp = actionsheet.dismiss();
            resp.then(()=>{
              this.takePhoto;
            })
          }
        },{
          text: "Take Library",
          icon: "images",
          handler: () => {
            let resp = actionsheet.dismiss();
            resp.then(()=>{
              this.takeLibrary();
            })
          }
        },{
          text: "Cancel",
          icon: "cencel",
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    })
    actionsheet.present();

  }




}
