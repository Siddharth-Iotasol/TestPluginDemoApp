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
    showAlert(arg1: any): Promise<string> {
        return;
    }
    @Cordova()
    checkOpenLock(arg1: any): Promise<string> {
        return;
    }
}
