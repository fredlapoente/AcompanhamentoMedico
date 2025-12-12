(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-restaurar-restaurar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/restaurar/restaurar.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/restaurar/restaurar.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"ion-text-center\">\r\n        <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/menu-principal\" text=\"\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-uppercase\">Restaurar</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n        <ion-menu-button menuId=\"main-content\"></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>   \r\n</ion-header>\r\n<ion-content>\r\n    <ion-spinner name=\"lines\" color=\"success\"></ion-spinner>        \r\n</ion-content>      "

/***/ }),

/***/ "./src/app/pages/restaurar/restaurar-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/restaurar/restaurar-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RestaurarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurarPageRoutingModule", function() { return RestaurarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _restaurar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restaurar.page */ "./src/app/pages/restaurar/restaurar.page.ts");




const routes = [
    {
        path: '',
        component: _restaurar_page__WEBPACK_IMPORTED_MODULE_3__["RestaurarPage"]
    }
];
let RestaurarPageRoutingModule = class RestaurarPageRoutingModule {
};
RestaurarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RestaurarPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/restaurar/restaurar.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/restaurar/restaurar.module.ts ***!
  \*****************************************************/
/*! exports provided: RestaurarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurarPageModule", function() { return RestaurarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _restaurar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./restaurar-routing.module */ "./src/app/pages/restaurar/restaurar-routing.module.ts");
/* harmony import */ var _restaurar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./restaurar.page */ "./src/app/pages/restaurar/restaurar.page.ts");







let RestaurarPageModule = class RestaurarPageModule {
};
RestaurarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _restaurar_routing_module__WEBPACK_IMPORTED_MODULE_5__["RestaurarPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_restaurar_page__WEBPACK_IMPORTED_MODULE_6__["RestaurarPage"]]
    })
], RestaurarPageModule);



/***/ }),

/***/ "./src/app/pages/restaurar/restaurar.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/restaurar/restaurar.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-spinner {\n  width: 70px !important;\n  height: 70px !important;\n  position: fixed;\n  top: 30%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzdGF1cmFyL0M6XFxEZXNlblxcd29ya3NwYWNlX2FwbGljYXRpdm9cXEFwcEFjb21wYW5oYW1lbnRvTWVkaWNvL3NyY1xcYXBwXFxwYWdlc1xccmVzdGF1cmFyXFxyZXN0YXVyYXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZXN0YXVyYXIvcmVzdGF1cmFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXN0YXVyYXIvcmVzdGF1cmFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zcGlubmVyIHtcclxuICAgIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn0iLCJpb24tc3Bpbm5lciB7XG4gIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMzAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/restaurar/restaurar.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/restaurar/restaurar.page.ts ***!
  \***************************************************/
/*! exports provided: RestaurarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurarPage", function() { return RestaurarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/saudi-loading/saudi-loading.component */ "./src/app/components/saudi-loading/saudi-loading.component.ts");
/* harmony import */ var src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/saudi-toast/saudi-toast.component */ "./src/app/components/saudi-toast/saudi-toast.component.ts");
/* harmony import */ var src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/config/constantes/constantes */ "./src/app/config/constantes/constantes.ts");
/* harmony import */ var src_app_services_acompanhamento_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/acompanhamento.service */ "./src/app/services/acompanhamento.service.ts");
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");











let RestaurarPage = class RestaurarPage {
    constructor(router, atrCtrl, networkService, toastCrl, loading, acompanhamentoService, storageService) {
        this.router = router;
        this.atrCtrl = atrCtrl;
        this.networkService = networkService;
        this.toastCrl = toastCrl;
        this.loading = loading;
        this.acompanhamentoService = acompanhamentoService;
        this.storageService = storageService;
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_4__["locale"]('pt-br');
        this.networkService.CheckNetworkStatus();
        if (this.networkService.NetworkStatus.value) {
            this.restaurar();
        }
        else {
            this.alertaSemConexao();
        }
    }
    alertaSemConexao() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.atrCtrl.create({
                header: 'Para restaurar acompanhamentos você precisa de conexão com a internet',
                buttons: [
                    {
                        text: 'Ok',
                        role: 'ok',
                        handler: (blah) => {
                            this.router.navigateByUrl('');
                        }
                    },
                ]
            });
            yield alert.present();
        });
    }
    restaurar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.atrCtrl.create({
                header: 'Todos dos acompanhamentos deste dispositivo serão excluídos, incluindo de outros usuários. Deseja continuar?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: (blah) => {
                            this.router.navigateByUrl('');
                        }
                    }, {
                        text: 'Confirmar',
                        handler: () => {
                            this.confirmarRestaurar();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    confirmarRestaurar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
            const loading = yield this.loading.presentLoading('Restaurando dados...');
            yield this.acompanhamentoService.restaurarFormulariosAcompanhamentos(usuario).subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                usuario = data;
                let listaFormulariosRestaurar = usuario.listaAcompanhamentoRestaurar;
                usuario.listaAcompanhamentoRestaurar = [];
                yield this.storageService.apagarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO);
                for (let acomp of listaFormulariosRestaurar) {
                    acomp.usuario = usuario;
                    acomp.operadora = usuario.operadora;
                    yield this.storageService.adicionar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, acomp);
                }
                yield this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_USUARIO, usuario, "idUsuario");
                localStorage.setItem('@appAcompanhamentoMedico:dadosUsuario', JSON.stringify(usuario));
                localStorage.setItem('@appAcompanhamentoMedico:operadoraUsuario', JSON.stringify(usuario.operadora));
                loading.dismiss();
                this.toastCrl.successToast('Dados restaurados com sucesso!');
            }), error => {
                this.toastCrl.errorToast(error);
                loading.dismiss();
            });
            this.router.navigateByUrl('');
        });
    }
};
RestaurarPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"] },
    { type: src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_6__["SaudiToastComponent"] },
    { type: src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_5__["SaudiLoadingComponent"] },
    { type: src_app_services_acompanhamento_service__WEBPACK_IMPORTED_MODULE_8__["AcompanhamentoService"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"] }
];
RestaurarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-restaurar',
        template: __webpack_require__(/*! raw-loader!./restaurar.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/restaurar/restaurar.page.html"),
        styles: [__webpack_require__(/*! ./restaurar.page.scss */ "./src/app/pages/restaurar/restaurar.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_services_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"],
        src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_6__["SaudiToastComponent"],
        src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_5__["SaudiLoadingComponent"],
        src_app_services_acompanhamento_service__WEBPACK_IMPORTED_MODULE_8__["AcompanhamentoService"],
        src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"]])
], RestaurarPage);



/***/ })

}]);
//# sourceMappingURL=pages-restaurar-restaurar-module-es2015.js.map