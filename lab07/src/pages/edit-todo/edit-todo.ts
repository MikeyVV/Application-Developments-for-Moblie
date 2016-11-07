import { Component } from '@angular/core';
import { NavParams, NavController, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-edit-todo',
  templateUrl: 'edit-todo.html'
})
export class EditTodoPage {
  title;
  description;
  constructor(public dataService: Data, public navParams: NavParams, public navCtrl: NavController, public view: ViewController) {}

  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
  }
  editTodo(item) {
		let newItem = {
			title: this.title,
			description: this.description
		};
    
		this.view.dismiss(newItem);
		}
		close() {
		this.view.dismiss();
		}

}
