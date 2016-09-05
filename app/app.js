var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var ionic_native_1 = require('ionic-native');
var tabs_1 = require('./pages/tabs/tabs');
var App = (function () {
    function App(platform, menuCtrl) {
        this.platform = platform;
        this.menuCtrl = menuCtrl;
        this.rootPage = tabs_1.TabsPage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            ionic_native_1.StatusBar.styleDefault();
        });
    }
    App = __decorate([
        core_1.Component({
            template: "\n  <ion-menu [content]=\"appContent\">\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item detail-none>Close Menu</button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n  <ion-nav #appContent [root]=\"rootPage\"></ion-nav>"
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.Platform, ionic_angular_1.MenuController])
    ], App);
    return App;
})();
exports.App = App;
ionic_angular_1.ionicBootstrap(MyApp);
