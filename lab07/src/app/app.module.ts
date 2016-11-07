import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddItemPage } from '../pages/add-item/add-item';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { EditTodoPage } from '../pages/edit-todo/edit-todo';
import { Storage } from '@ionic/storage';
import { Data } from '../providers/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddItemPage,
    ItemDetailPage,
    EditTodoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddItemPage,
    ItemDetailPage,
    EditTodoPage
  ],
  providers: [Storage, Data]
})
export class AppModule {}
