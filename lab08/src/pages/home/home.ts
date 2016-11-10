import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {DetailPage} from '../detail/detail';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    list = [];

    constructor(public navCtrl: NavController,
                public alertCtrl: AlertController, public http: Http) {
        this.loadDB();
    }

    addDB(obj) {
        this.http.post("https://angsila.cs.buu.ac.th/~57160438/ApplicationDevelopmentsForMoblie/lab08/store.php", obj)
            .subscribe(data => {
                console.log(data);
                var resp = data.text().trim();
                if (resp = "success") {
                    console.log(data);
                    this.loadDB();
                } else {
                    console.log("Add error");
                }

            }, err=> {
                console.log(err);
            })
    }

    loadDB() {
        this.http.get("https://angsila.cs.buu.ac.th/~57160438/ApplicationDevelopmentsForMoblie/lab08/load.php")
            .subscribe(data => {
                this.list = data.json();
            }, err=> {
                console.log(err);
            })
    }

    addContact() {
        let prompt = this.alertCtrl.create({
            title: "Add Contact",
            message: "Enter detail for your contact list",
            inputs: [
                {
                    name: 'FName',
                    placeholder: 'First Name'
                }, {
                    name: 'LName',
                    placeholder: 'Last Name'
                }, {
                    name: 'Moblie_Phone',
                    placeholder: 'Moblie Phone'
                }, {
                    name: 'Memo',
                    placeholder: 'Memo'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data=> {
                        console.log("cancel clicked");
                    }
                }, {
                    text: 'Add',
                    handler: data=> {
                        this.list.push(data);
                        this.addDB(data);
                    }
                }

            ]
        })

        prompt.present();
    }

    goNextPage(contact) {
        this.navCtrl.push(DetailPage, {
            contact: contact
        })
    }

    //remove(i){
    remove(id) {
        //this.list.splice(i,1);
        this.http.post("https://angsila.cs.buu.ac.th/~57160438/ApplicationDevelopmentsForMoblie/lab08/delete.php", {id: id})
            .subscribe(data => {
                console.log(data);
                var resp = data.text().trim();
                if (resp = "success") {
                    console.log(resp);
                    this.loadDB();
                } else {
                    console.log("Delete Faile");
                }

            }, err=> {
                console.log(err);
            })
    }
}
