import { Component } from '@angular/core';
import { ModalController, NavController, ViewController, NavParams } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { EditTodoPage } from '../edit-todo/edit-todo';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [];
  title;
  description;

  constructor(public navParams: NavParams, public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
    this.dataService.getData().then((todos) => {
      if (todos) {
        this.items = JSON.parse(todos);
      }
    });
  }
  ionViewDidLoad() {

  }
  addItem() {
    let addModal = this.modalCtrl.create(AddItemPage);
    addModal.onDidDismiss((item) => {
      if (item) {
        this.saveItem(item);
      }
    });
    addModal.present();
  }
  removeItem(item) {
    let index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    this.dataService.save(this.items);
  }
  saveItem(item) {
    this.items.push(item);
    this.dataService.save(this.items);
  }
  editTodo(item) {
    let editModal = this.modalCtrl.create(EditTodoPage, { item });
    let index = this.items.indexOf(item);
    editModal.onDidDismiss((item) => {
      if (item) {
        if (index > -1) {
          this.items[index] = item;
        }
        this.dataService.save(this.items);
      }
    });
    editModal.present();
  }
  
  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

}
