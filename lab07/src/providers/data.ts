import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class Data {
    constructor(public storage: Storage){

    }
    getData() {
        return this.storage.get('todo');
    }
    save(data){
        let newData = JSON.stringify(data);
        this.storage.set('todos', newData);
    }
}