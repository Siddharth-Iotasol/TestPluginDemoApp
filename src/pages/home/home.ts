import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPluginProvider } from '../../providers/test-plugin/test-plugin';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(
        public navCtrl: NavController,
        public testPluginProvider: TestPluginProvider
    ) {

    }

    showNameAlert(name) {
        this.testPluginProvider.showAlert(name).then((responseName) => {
            alert('Your Name is ' + responseName);
        }, error => {
            alert('Error is ' + error);
        })
    }

    checkOpenLock(name){
        console.log("checkOpenLock");
        this.testPluginProvider.checkOpenLock(name).then((responseName) => {
            alert('Response is ' + responseName);
        }, error => {
            alert('Error is ' + error);
        })
    }
}
