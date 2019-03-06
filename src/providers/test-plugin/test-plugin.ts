import { Injectable } from '@angular/core';
import { Plugin, Cordova } from '@ionic-native/core';

@Plugin(
    {
        pluginName: "testplugin",
        plugin: "cordova-plugin-testplugin",
        pluginRef: "TestPlugin",
        repo: "https://github.com/Siddharth-Iotasol/TestPlugin.git",
        platforms: ['Android', 'iOS']
    }
)

@Injectable()
export class TestPluginProvider {

    @Cordova()
    initialize(arg1: any): Promise<string> {
        alert('Service Your Name is ' + arg1);
        return;
    }
    @Cordova()
    openLock(arg1: any): Promise<string> {
        alert('Service openLock Response is ' + arg1);
        return;
    }
    @Cordova()
    closeLock(arg1: any): Promise<string> {
        alert('Service closeLock Response is ' + arg1);
        return;
    }
}
