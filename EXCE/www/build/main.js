webpackJsonp([4],{

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LangPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(88);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LangPage = /** @class */ (function () {
    function LangPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    LangPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LangPage');
    };
    LangPage.prototype.setSpanish = function () {
        this.storage.set('lang', 'esp');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */]);
    };
    LangPage.prototype.setEnglish = function () {
        var _this = this;
        this.storage.set('lang', 'eng');
        this.storage.get('lang').then(function (val) {
            console.log('Your lang is->', val);
            if (val) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */], { 'lang': val });
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */], { 'lang': 'eng' });
            }
        });
    };
    LangPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lang',template:/*ion-inline-start:"C:\Users\usuario1\Documents\GitHub\EXC-NOVA\EXCE\src\pages\lang\lang.html"*/'<!--\n\n  Generated template for the LangPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n\n\n<ion-content padding class="animate-opacity3">\n\n\n\n<div class="ctn-g flex-center fcolumn animate-opacity3" >\n\n\n\n    <ion-row>\n\n\n\n        <ion-col class="flex-center">\n\n          <h4>\n\n              Select Your Language\n\n          </h4>\n\n\n\n      \n\n        </ion-col>\n\n      \n\n      \n\n      </ion-row>\n\n      \n\n\n\n<ion-row>\n\n\n\n  <ion-col class="flex-center">\n\n<button ion-button color="primary" (click)="setSpanish()">\n\n  Español\n\n</button>\n\n\n\n  </ion-col>\n\n  <ion-col class="flex-center">\n\n      <button ion-button color="primary" (click)="setEnglish()">\n\n          English\n\n        </button>\n\n\n\n  </ion-col>\n\n\n\n</ion-row>\n\n\n\n\n\n\n\n</div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\usuario1\Documents\GitHub\EXC-NOVA\EXCE\src\pages\lang\lang.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], LangPage);
    return LangPage;
}());

//# sourceMappingURL=lang.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SucursalModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_maps_maps__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SucursalModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SucursalModalPage = /** @class */ (function () {
    function SucursalModalPage(navCtrl, navParams, _MapService, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._MapService = _MapService;
        this.viewCtrl = viewCtrl;
        this.lang = "";
        this._MapService.getLang().then(function (res) {
            _this.lang = res;
        });
        this.Sucursal = navParams.get("space");
        console.log(JSON.stringify(this.Sucursal));
        this.phones = this.Sucursal.phone.split("y");
    }
    SucursalModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SucursalModalPage');
    };
    SucursalModalPage.prototype.regresar = function () {
        this.viewCtrl.dismiss(null);
    };
    SucursalModalPage.prototype.trazarRuta = function () {
        var data = { 'space': this.Sucursal };
        this.viewCtrl.dismiss(data);
    };
    SucursalModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sucursal-modal',template:/*ion-inline-start:"C:\Users\usuario1\Documents\GitHub\EXC-NOVA\EXCE\src\pages\sucursal-modal\sucursal-modal.html"*/'<!--\n  Generated template for the SucursalModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only (click)="regresar()">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-buttons>\n\n  \n    <ion-title>{{lang==\'esp\'?\'Detalle Sucursal\': \' branch office Detail\'}}l</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <ion-card>\n    <img src="./assets/imgs/banamex.png"/>\n    <ion-card-content>\n      <ion-card-title>\n        {{Sucursal.name}}\n        </ion-card-title>\n        <ion-grid *ngIf="Sucursal.address">\n          <ion-row>\n            <ion-col class="Sucur-header">\n                {{lang==\'esp\'?\'Dirección\': \'Address\'}}\n            </ion-col>\n          </ion-row>\n        \n          <ion-row>\n            <ion-col>\n              {{Sucursal.address}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n        <ion-grid *ngIf="Sucursal[\'id \']">\n          <ion-row>\n            <ion-col class="Sucur-header">\n              ID\n            </ion-col>\n          </ion-row>\n        \n          <ion-row>\n            <ion-col>\n              {{Sucursal[\'id \']}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n\n        <ion-grid *ngIf="phone">\n          <ion-row>\n            <ion-col class="Sucur-header">\n                {{lang==\'esp\'?\'Teléfonos\':   \'Phones\'}}\n            </ion-col>\n          </ion-row>\n        \n          <ion-row *ngFor="let phone of phones; let i= index">\n            <ion-col>\n              {{phone}}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n\n\n        <ion-grid *ngIf="Sucursal.distance">\n          <ion-row>\n            <ion-col class="Sucur-header">\n                {{lang==\'esp\'?\'Distancia\':   \'Distance\'}} \n            </ion-col>\n          </ion-row>\n        \n          <ion-row >\n            <ion-col>\n              {{Sucursal.distance}}\n            </ion-col>\n          </ion-row>\n\n         \n        </ion-grid>\n        \n\n        <ion-grid *ngIf="Sucursal.bilingual">\n          <ion-row>\n            <ion-col class="Sucur-header">\n                {{lang==\'esp\'?\'Bilingue\':   \'Bilingual\'}} \n              \n            </ion-col>\n          </ion-row>\n        \n          <ion-row >\n            <ion-col *ngIf="lang!=\'esp\'"> \n              {{Sucursal.bilingual?\'Yes\':\'Not\'}}\n            </ion-col>\n            <ion-col *ngIf="lang==\'esp\'"> \n                {{Sucursal.bilingual?\'Si\':\'No\'}}\n              </ion-col>\n          </ion-row>\n\n         \n        </ion-grid>\n\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-row >\n      <ion-col>\n<button ion-button color="primary" block (click)="trazarRuta()">{{lang==\'esp\'?\'Trazar Ruta\':\'Trace Route\'}}</button>\n      </ion-col>\n    </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\usuario1\Documents\GitHub\EXC-NOVA\EXCE\src\pages\sucursal-modal\sucursal-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_maps_maps__["a" /* MapsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], SucursalModalPage);
    return SucursalModalPage;
}());

//# sourceMappingURL=sucursal-modal.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_maps_maps__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl, navParams, storage, _MapService, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this._MapService = _MapService;
        this.alertCtrl = alertCtrl;
        this.lang = '';
        this._MapService.getLang().then(function (res) {
            _this.lang = res;
        });
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.cambiarIdioma = function () {
        var _this = this;
        var title = this.lang == 'esp' ? 'Cambiar idioma' : 'Change language';
        var text = this.lang == 'esp' ? 'Selecciona tu idioma' : 'Select your language';
        var alert = this.alertCtrl.create({
            title: title,
            message: text,
            buttons: [
                {
                    text: 'Español',
                    handler: function () {
                        _this.storage.set('lang', 'esp');
                        _this.lang = "esp";
                        _this._MapService.setLang(true);
                    }
                },
                {
                    text: 'English',
                    handler: function () {
                        _this.storage.set('lang', 'eng');
                        _this.lang = "eng";
                        _this._MapService.setLang(true);
                    }
                }
            ]
        });
        alert.present();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\usuario1\Documents\GitHub\EXC-NOVA\EXCE\src\pages\settings\settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{lang==\'esp\'?\'Ajustes\':\'Settings\'}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n<ion-list>\n  <ion-item (click)="cambiarIdioma()">\n    {{lang==\'esp\'? \'Cambiar Idioma\':\'Change Language\'}}\n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\usuario1\Documents\GitHub\EXC-NOVA\EXCE\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__providers_maps_maps__["a" /* MapsProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/lang/lang.module": [
		686,
		3
	],
	"../pages/map/map.module": [
		689,
		2
	],
	"../pages/settings/settings.module": [
		687,
		1
	],
	"../pages/sucursal-modal/sucursal-modal.module": [
		688,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 211;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(356);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_lang_lang__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_map_map__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_maps_maps__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_http__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_sucursal_modal_sucursal_modal__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_7__pages_lang_lang__["a" /* LangPage */], __WEBPACK_IMPORTED_MODULE_8__pages_map_map__["a" /* MapPage */], __WEBPACK_IMPORTED_MODULE_14__pages_sucursal_modal_sucursal_modal__["a" /* SucursalModalPage */], __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_11__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/lang/lang.module#LangPageModule', name: 'LangPage', segment: 'lang', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sucursal-modal/sucursal-modal.module#SucursalModalPageModule', name: 'SucursalModalPage', segment: 'sucursal-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_7__pages_lang_lang__["a" /* LangPage */], __WEBPACK_IMPORTED_MODULE_8__pages_map_map__["a" /* MapPage */], __WEBPACK_IMPORTED_MODULE_14__pages_sucursal_modal_sucursal_modal__["a" /* SucursalModalPage */], __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_maps_maps__["a" /* MapsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COLORSMAPS; });
var COLORSMAPS = [
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#d6e2e6"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#cfd4d5"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7492a8"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "lightness": 25
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#dde2e3"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#cfd4d5"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#dde2e3"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7492a8"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#dde2e3"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#588ca4"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "saturation": -100
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a9de83"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#bae6a1"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c6e8b3"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#bae6a1"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#41626b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "saturation": -45
            },
            {
                "lightness": 10
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c1d1d6"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#a6b5bb"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#9fb6bd"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.icon",
        "stylers": [
            {
                "saturation": -70
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#b4cbd4"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#588ca4"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#008cb5"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit.station.airport",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": -5
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a6cbe3"
            }
        ]
    }
];
//# sourceMappingURL=MapTheme.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the MapsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MapsProvider = /** @class */ (function () {
    function MapsProvider(http, httClient, storage) {
        this.http = http;
        this.httClient = httClient;
        this.storage = storage;
        this.islangchange = false;
        console.log('Hello MapsProvider Provider');
    }
    MapsProvider.prototype.GetSites = function (parametros) {
        var URLMetodo = "https://dev.dominio-mobile.tk:443/c735_015_middlewareq1/MWServlet?appID=Demo&appver=21.0.0&platformver=21.0.0&platform=Android&lang=1&channel=rc&serviceID=getNearBranches&lat=" + parametros.lat + "&lng=" + parametros.lng + "&radio=2&officeTypeId=" + parametros.officeTypeId;
        var Params = parametros;
        var body = JSON.stringify(Params);
        console.log("Service: ", URLMetodo, "Parametros", Params);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.httClient.head("Content-Type");
        return this.httClient.post(URLMetodo + '', body)
            .map(function (data) { return data; })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json().error || 'Server error'); });
    };
    MapsProvider.prototype.setLang = function (lang) {
        this.islangchange = lang;
    };
    MapsProvider.prototype.getlangcha = function () {
        return this.islangchange;
    };
    MapsProvider.prototype.getLang = function () {
        var _this = this;
        var Prom = new Promise(function (resolve, reject) {
            _this.storage.get('lang').then(function (val) {
                console.log('Your lang is->', val);
                var res = val;
                if (val) {
                }
                else {
                    res = 'eng';
                }
                resolve(res);
            }).catch(function (e) { reject(e); });
        });
        return Prom;
    };
    MapsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MapsProvider);
    return MapsProvider;
}());

//# sourceMappingURL=maps.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Parametros; });
var Parametros = /** @class */ (function () {
    function Parametros() {
    }
    return Parametros;
}());

//# sourceMappingURL=Parametros.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_lang_lang__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_map_map__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_maps_maps__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, _MapService, storage) {
        var _this = this;
        this._MapService = _MapService;
        this.storage = storage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */];
        this.title = "Maps";
        this.lang = "";
        this.SplashScreen = true;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.storage.get('lang').then(function (val) {
                console.log('Your lang is->', val);
                if (val) {
                    _this.lang = val;
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_map_map__["a" /* MapPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_lang_lang__["a" /* LangPage */];
                }
            });
            statusBar.styleDefault();
            splashScreen.hide();
            //   timer(1000).subscribe(()=>this.SplashScreen=false)
            Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__["timer"])(5700).subscribe(function () { return _this.SplashScreen = false; });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\usuario1\Documents\GitHub\EXC-NOVA\EXCE\src\app\app.html"*/'\n\n\n\n<div *ngIf="SplashScreen"  class="splash">\n\n              \n\n<div class="title-splash animate-opacity    ">\n\n{{lang==\'esp\'?\'Mapas\':\'Maps\'}}\n\n</div>\n\n\n\n<div class="subtitle-splash">\n\n                {{lang==\'esp\'?\'Por Josephat Reyes\':\'By Josephat Reyes\'}}    \n\n</div>  \n\n\n\n<div class="esquina">\n\n        <div class="sk-folding-cube">\n\n                <div class="sk-cube1 sk-cube"></div>\n\n                <div class="sk-cube2 sk-cube"></div>\n\n                <div class="sk-cube4 sk-cube"></div>\n\n                <div class="sk-cube3 sk-cube"></div>\n\n              </div>\n\n</div>\n\n \n\n</div>\n\n\n\n<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\usuario1\Documents\GitHub\EXC-NOVA\EXCE\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_8__providers_maps_maps__["a" /* MapsProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\usuario1\Documents\GitHub\EXC-NOVA\EXCE\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\usuario1\Documents\GitHub\EXC-NOVA\EXCE\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__MapTheme__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_maps_maps__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_Parametros__ = __webpack_require__(666);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sucursal_modal_sucursal_modal__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_settings__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, navParams, geolocation, _MapService, http, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this._MapService = _MapService;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.ismapLoaded = false;
        this.Arre100 = [];
        this.Arre300 = [];
        this.Arre400 = [];
        this.Arre500 = [];
        this.hasRoute = false;
        this.lang = "eng";
        this._MapService.getLang().then(function (res) {
            _this.lang = res;
        });
    }
    MapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.MyLat = resp.coords.latitude;
            _this.MyLng = resp.coords.longitude;
            _this.directionsService = new google.maps.DirectionsService();
            console.log("Position->", _this.MyLat, _this.MyLng);
            _this.map = _this.loadMap();
            _this.CreateMarker();
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
        console.log('ionViewDidLoad MapPage');
    };
    MapPage.prototype.ngDoCheck = function () {
        var _this = this;
        if (this._MapService.getlangcha() == true) {
            this._MapService.setLang(false);
            console.log("SE ha cambiado el idioma");
            this._MapService.getLang().then(function (res) {
                _this.lang = res;
            });
        }
    };
    MapPage.prototype.CreateMarker = function () {
        var iconoInicio = './assets/imgs/person.png';
        var myLatLng = { lat: this.MyLat, lng: this.MyLng };
        this.Consumir();
        var inicio = new google.maps.Marker({
            position: myLatLng,
            map: this.map,
            title: 'Inicio de recorrido!',
            icon: iconoInicio
        });
    };
    MapPage.prototype.loadMap = function () {
        var map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 14,
            center: { lat: this.MyLat, lng: this.MyLng },
            disableDefaultUI: false,
            styles: __WEBPACK_IMPORTED_MODULE_3__MapTheme__["a" /* COLORSMAPS */],
            mapTypeControl: false,
            scaleControl: true,
            streetViewControl: false,
            fullscreenControl: false,
            zoomControl: true,
        });
        return map;
    };
    MapPage.prototype.centrar = function () {
        this.map.setCenter({ lat: this.MyLat, lng: this.MyLng });
    };
    MapPage.prototype.Consumir = function () {
        this.ismapLoaded = true;
        var params = new __WEBPACK_IMPORTED_MODULE_5__app_Parametros__["a" /* Parametros */]();
        params.appID = "Demo";
        params.appver = "" + 21.0;
        params.platformver = "" + 21.0;
        params.platform = "Android";
        params.lang = "" + (this.lang == 'esp' ? 1 : 0);
        params.channel = "rc";
        params.serviceID = "getNearBranches";
        params.lat = "" + this.MyLat;
        params.lng = "" + this.MyLng;
        params.radio = "" + 2;
        params.officeTypeId = "" + 100;
        this.get100(params);
    };
    MapPage.prototype.goSettings = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__settings_settings__["a" /* SettingsPage */]);
    };
    MapPage.prototype.get100 = function (parametros) {
        var _this = this;
        this.http.post("https://dev.dominio-mobile.tk:443/c735_015_middlewareq1/MWServlet?appID=Demo&appver=21.0.0&platformver=21.0.0&platform=Android&lang=" + parametros.lang + "&channel=rc&serviceID=getNearBranches&lat=" + parametros.lat + "&lng=" + parametros.lng + "&radio=10&officeTypeId=" + parametros.officeTypeId, {}, {})
            .then(function (data) {
            var res = JSON.parse(data.data);
            _this.Arre100 = res.BranchesData;
            console.log("Arre 100->" + JSON.stringify(_this.Arre100));
            // this.Arre100= res.BranchesData;
            console.log("status", data.status);
            console.log("data->", data.data); // data received by server
            console.log(data.headers);
            parametros.officeTypeId = "" + 300;
            _this.http.post("https://dev.dominio-mobile.tk:443/c735_015_middlewareq1/MWServlet?appID=Demo&appver=21.0.0&platformver=21.0.0&platform=Android&lang=" + parametros.lang + "&channel=rc&serviceID=getNearBranches&lat=" + parametros.lat + "&lng=" + parametros.lng + "&radio=10&officeTypeId=" + parametros.officeTypeId, {}, {})
                .then(function (data) {
                var res2 = JSON.parse(data.data);
                _this.Arre300 = res2.BranchesData;
                // this.Arre300= res2.BranchesData;
                console.log(data.status);
                console.log(data.data); // data received by server
                console.log(data.headers);
                parametros.officeTypeId = "" + 400;
                _this.http.post("https://dev.dominio-mobile.tk:443/c735_015_middlewareq1/MWServlet?appID=Demo&appver=21.0.0&platformver=21.0.0&platform=Android&lang=" + parametros.lang + "&channel=rc&serviceID=getNearBranches&lat=" + parametros.lat + "&lng=" + parametros.lng + "&radio=10&officeTypeId=" + parametros.officeTypeId, {}, {})
                    .then(function (data) {
                    var res3 = JSON.parse(data.data);
                    _this.Arre400 = res3.BranchesData;
                    //     this.Arre400= res3.BranchesData;
                    console.log(data.status);
                    console.log(data.data); // data received by server
                    console.log(data.headers);
                    parametros.officeTypeId = "" + 500;
                    _this.http.post("https://dev.dominio-mobile.tk:443/c735_015_middlewareq1/MWServlet?appID=Demo&appver=21.0.0&platformver=21.0.0&platform=Android&lang=" + parametros.lang + "&channel=rc&serviceID=getNearBranches&lat=" + parametros.lat + "&lng=" + parametros.lng + "&radio=2&officeTypeId=" + parametros.officeTypeId, {}, {})
                        .then(function (data) {
                        var res4 = JSON.parse(data.data);
                        _this.Arre500 = res4.BranchesData;
                        //   this.Arre500= res4.BranchesData;
                        console.log(data.status);
                        console.log(data.data); // data received by server
                        console.log(data.headers);
                        _this.DrawAllMarkers();
                    })
                        .catch(function (error) {
                        console.log(error.status);
                        console.log(error.error); // error message as string
                        console.log(error.headers);
                    });
                })
                    .catch(function (error) {
                    console.log(error.status);
                    console.log(error.error); // error message as string
                    console.log(error.headers);
                });
            })
                .catch(function (error) {
                console.log(error.status);
                console.log(error.error); // error message as string
                console.log(error.headers);
            });
        })
            .catch(function (error) {
            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);
        });
    };
    MapPage.prototype.DrawAllMarkers = function () {
        for (var _i = 0, _a = this.Arre100; _i < _a.length; _i++) {
            var space = _a[_i];
            this.drawMarker(space);
        }
        for (var _b = 0, _c = this.Arre300; _b < _c.length; _b++) {
            var space = _c[_b];
            this.drawMarker(space);
        }
        for (var _d = 0, _e = this.Arre400; _d < _e.length; _d++) {
            var space = _e[_d];
            this.drawMarker(space);
        }
        for (var _f = 0, _g = this.Arre500; _f < _g.length; _f++) {
            var space = _g[_f];
            this.drawMarker(space);
        }
    };
    MapPage.prototype.drawMarker = function (space) {
        var _this = this;
        var myLatLng = { lat: parseFloat(space.lat), lng: parseFloat(space.lng) };
        var icono = space['id '] == 100 ? './assets/imgs/pin_rojo.png' : './assets/imgs/pin_azul.png';
        console.log(myLatLng);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: this.map,
            title: "" + space.name,
            icon: icono
        });
        marker.addListener('click', function () {
            _this.abrirModal(space);
        });
    };
    MapPage.prototype.abrirModal = function (space) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__sucursal_modal_sucursal_modal__["a" /* SucursalModalPage */], { space: space });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.directionsDisplay = _this.trazarRuta(data.space);
            }
        });
    };
    MapPage.prototype.trazarRuta = function (space) {
        if (this.directionsDisplay != null) {
            this.limparRuta();
        }
        this.hasRoute = true;
        var directionsService = new google.maps.DirectionsService();
        var startcoords = this.MyLat + ", " + this.MyLng;
        var endcoords = space.lat + ", " + space.lng;
        var start = startcoords;
        var end = endcoords;
        var directionsDisplay = new google.maps.DirectionsRenderer();
        var myOptions = {
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        directionsDisplay.setMap(this.map);
        var start = startcoords;
        var end = endcoords;
        var request = {
            origin: start,
            destination: end,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };
        directionsDisplay.setOptions({ suppressMarkers: true });
        directionsService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                var myRoute = response.routes[0];
                var txtDir = '';
                for (var i = 0; i < myRoute.legs[0].steps.length; i++) {
                    txtDir += myRoute.legs[0].steps[i].instructions + "<br />";
                }
            }
        });
        return directionsDisplay;
    };
    MapPage.prototype.limparRuta = function () {
        this.directionsDisplay.setMap(null);
        this.hasRoute = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"C:\Users\usuario1\Documents\GitHub\EXC-NOVA\EXCE\src\pages\map\map.html"*/'<!--\n\n  Generated template for the MapPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n\n\n    <ion-title>{{lang==\'esp\'?\'Mapa\':\'Map\'}}</ion-title>\n\n    <ion-buttons right>\n\n\n\n  <button ion-button icon-only (click)="goSettings()">\n\n            <ion-icon name="settings"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="animate-left" >\n\n    <div #map id="map">\n\n     </div>\n\n\n\n   \n\n    <div *ngIf="!ismapLoaded" class="loader-map" >\n\n        <ion-spinner></ion-spinner>\n\n        {{lang==\'esp\'?\'Cargando Mapa\':\'Loading Map\'}}\n\n    </div>\n\n\n\n     <ion-row>\n\n\n\n  <ion-col class="flex-center">\n\n      <button class="animate" ion-button color="primary" (click)="centrar()"> {{lang==\'esp\'?\'Mi posición\':\'My Position\'}}</button>\n\n\n\n  </ion-col>  \n\n  <ion-col *ngIf="hasRoute" class="flex-center">\n\n      <button  class="animate" ion-button color="danger" (click)="limparRuta()">{{lang==\'esp\'?\'Borrar Ruta\':\'Delete Route\'}} </button>\n\n\n\n  </ion-col>   \n\n     </ion-row>\n\n   \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\usuario1\Documents\GitHub\EXC-NOVA\EXCE\src\pages\map\map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_4__providers_maps_maps__["a" /* MapsProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ })

},[351]);
//# sourceMappingURL=main.js.map