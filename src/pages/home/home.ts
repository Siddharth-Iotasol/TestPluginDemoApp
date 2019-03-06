import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TestPluginProvider } from '../../providers/test-plugin/test-plugin';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    addresses: Array<string> = ["FF:FF:98:02:43:B1", "FF:FF:95:02:66:40"];
    randomInt: number = 1;

    constructor(
        public navCtrl: NavController,
        public testPluginProvider: TestPluginProvider
    ) {

    }

    showNameAlert() {
        this.randomInt = this.randomInt == 0 ? 1 : 0;
        this.testPluginProvider.initialize(this.addresses[this.randomInt]).then((responseName) => {
            alert('Your Name is ' + responseName);
        }, error => {
            alert('Error is ' + error);
        })
    }

    openLock() {
        console.log("openLock");
        this.testPluginProvider.openLock('FF:FF:95:02:66:40').then((responseName) => {
            alert('Response is ' + responseName);
        }, error => {
            alert('Error is ' + error);
        })
    }

    closeLock() {
        console.log("closeLock");
        this.testPluginProvider.closeLock('FF:FF:95:02:66:40').then((responseName) => {
            alert('Response is ' + responseName);
        }, error => {
            alert('Error is ' + error);
        })
    }
}
