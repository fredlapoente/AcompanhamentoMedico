(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-importar-com-senha-importar-com-senha-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/importar/com-senha/importar-com-senha.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/importar/com-senha/importar-com-senha.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"ion-text-center\">\r\n        <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/menu-principal\" text=\"\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-uppercase\">Importar Acompanhamento</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n        <ion-menu-button menuId=\"main-content\"></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <form [formGroup]=\"formImportar\">\r\n        <ion-card>               \r\n            <ion-item>\r\n              <ion-label position=\"floating\">Prestador</ion-label>\r\n              <ng-container *ngIf=\"listaPrestadores.length == 0\">\r\n                <ion-input type=\"text\" inputmode=\"text\" formControlName=\"filtroPrestador\" inputmode=\"text\"></ion-input>             \r\n              </ng-container>\r\n              <ng-container *ngIf=\"listaPrestadores.length > 0\">\r\n                <ion-select formControlName=\"prestador\" interface=\"action-sheet\" placeholder=\"Selecione\" cancelText=\"Cancelar\" (ionChange)=\"exibirFiltros()\">\r\n                  <ion-select-option *ngFor=\"let prestador of listaPrestadores\" [value]=\"prestador.idPrestador\">{{ prestador.nomePrestador }}</ion-select-option>\r\n                </ion-select>               \r\n              </ng-container>          \r\n            </ion-item> \r\n            <ion-item mode=\"md\" lines=\"none\" class=\"item-error\" *ngIf=\"(prestador.dirty || prestador.touched) && prestador.hasError('required')\">\r\n              <ion-note color=\"warning\" class=\"ion-padding-horizontal\">Campo obrigatório\r\n                <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n              </ion-note>\r\n            </ion-item> \r\n            <ion-row>\r\n              <ion-col size=\"12\" class=\"ion-text-center\">\r\n                <ng-container *ngIf=\"listaPrestadores.length == 0\">\r\n                  <ion-button expand=\"block\" size=\"large\" (click)=\"buscarPrestador()\" [disabled]=\"filtroPrestador.invalid\">Buscar</ion-button>\r\n                </ng-container> \r\n                <ng-container *ngIf=\"listaPrestadores.length > 0\">\r\n                  <ion-button expand=\"block\" size=\"large\" (click)=\"limparBuscarPrestador()\">Nova Busca</ion-button>\r\n                </ng-container> \r\n              </ion-col>\r\n            </ion-row>                                 \r\n        </ion-card>\r\n        <ion-card *ngIf=\"showFiltros\">   \r\n            <ion-card-header>\r\n              <ion-card-title class=\"ion-text-center\">Opções de Busca</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Senha</ion-label>\r\n              <ion-input type=\"text\" inputmode=\"text\" formControlName=\"filtroSenha\" inputmode=\"text\"></ion-input>\r\n            </ion-item>            \r\n            <ion-item>\r\n              <ion-label position=\"floating\">Paciente</ion-label>\r\n              <ion-input type=\"text\" inputmode=\"text\" formControlName=\"filtroPaciente\" inputmode=\"text\"></ion-input>\r\n            </ion-item>            \r\n            <ion-item>\r\n                <ion-label position=\"floating\">Número da Carteira</ion-label>\r\n                <ion-input type=\"text\" inputmode=\"text\" formControlName=\"filtroNumeroCarteira\" inputmode=\"text\"></ion-input>\r\n            </ion-item>                      \r\n            <ion-row>\r\n              <ion-col size=\"12\" class=\"ion-text-center\">\r\n                <ion-button (click)=\"buscarAcompanhamento()\" expand=\"block\" size=\"large\">\r\n                  Buscar\r\n                </ion-button>  \r\n              </ion-col>\r\n            </ion-row>               \r\n        </ion-card>          \r\n    </form>\r\n</ion-content>    "

/***/ }),

/***/ "./src/app/pages/importar/com-senha/importar-com-senha-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/importar/com-senha/importar-com-senha-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ImportarComSenhaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportarComSenhaPageRoutingModule", function() { return ImportarComSenhaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _importar_com_senha_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./importar-com-senha.page */ "./src/app/pages/importar/com-senha/importar-com-senha.page.ts");




var routes = [
    {
        path: '',
        component: _importar_com_senha_page__WEBPACK_IMPORTED_MODULE_3__["ImportarComSenhaPage"]
    }
];
var ImportarComSenhaPageRoutingModule = /** @class */ (function () {
    function ImportarComSenhaPageRoutingModule() {
    }
    ImportarComSenhaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ImportarComSenhaPageRoutingModule);
    return ImportarComSenhaPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/importar/com-senha/importar-com-senha.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/importar/com-senha/importar-com-senha.module.ts ***!
  \***********************************************************************/
/*! exports provided: ImportarComSenhaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportarComSenhaPageModule", function() { return ImportarComSenhaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _importar_com_senha_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./importar-com-senha-routing.module */ "./src/app/pages/importar/com-senha/importar-com-senha-routing.module.ts");
/* harmony import */ var _importar_com_senha_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./importar-com-senha.page */ "./src/app/pages/importar/com-senha/importar-com-senha.page.ts");







var ImportarComSenhaPageModule = /** @class */ (function () {
    function ImportarComSenhaPageModule() {
    }
    ImportarComSenhaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _importar_com_senha_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImportarComSenhaPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_importar_com_senha_page__WEBPACK_IMPORTED_MODULE_6__["ImportarComSenhaPage"]]
        })
    ], ImportarComSenhaPageModule);
    return ImportarComSenhaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/importar/com-senha/importar-com-senha.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/importar/com-senha/importar-com-senha.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ltcG9ydGFyL2NvbS1zZW5oYS9pbXBvcnRhci1jb20tc2VuaGEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/importar/com-senha/importar-com-senha.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/importar/com-senha/importar-com-senha.page.ts ***!
  \*********************************************************************/
/*! exports provided: ImportarComSenhaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportarComSenhaPage", function() { return ImportarComSenhaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/saudi-loading/saudi-loading.component */ "./src/app/components/saudi-loading/saudi-loading.component.ts");
/* harmony import */ var src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/saudi-toast/saudi-toast.component */ "./src/app/components/saudi-toast/saudi-toast.component.ts");
/* harmony import */ var src_app_model_AcompanhamentoMedico_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/model/AcompanhamentoMedico.model */ "./src/app/model/AcompanhamentoMedico.model.ts");
/* harmony import */ var src_app_model_Beneficiario_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/model/Beneficiario.model */ "./src/app/model/Beneficiario.model.ts");
/* harmony import */ var src_app_model_Prestador_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/model/Prestador.model */ "./src/app/model/Prestador.model.ts");
/* harmony import */ var src_app_model_SenhaAutorizacao_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/model/SenhaAutorizacao.model */ "./src/app/model/SenhaAutorizacao.model.ts");
/* harmony import */ var src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/model/Usuario.model */ "./src/app/model/Usuario.model.ts");
/* harmony import */ var src_app_services_acompanhamento_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/acompanhamento.service */ "./src/app/services/acompanhamento.service.ts");
/* harmony import */ var src_app_services_prestador_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/prestador.service */ "./src/app/services/prestador.service.ts");














var ImportarComSenhaPage = /** @class */ (function () {
    function ImportarComSenhaPage(formBuilder, navCtrl, loading, toast, prestadorService, acompanhamentoService) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.toast = toast;
        this.prestadorService = prestadorService;
        this.acompanhamentoService = acompanhamentoService;
        this.showFiltros = false;
        this.listaPrestadores = [];
    }
    ImportarComSenhaPage.prototype.ngOnInit = function () {
        moment__WEBPACK_IMPORTED_MODULE_4__["locale"]('pt-br');
        this.criarFormulario();
    };
    Object.defineProperty(ImportarComSenhaPage.prototype, "prestador", {
        get: function () {
            return this.formImportar.get('prestador');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImportarComSenhaPage.prototype, "filtroPrestador", {
        get: function () {
            return this.formImportar.get('filtroPrestador');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImportarComSenhaPage.prototype, "filtroSenha", {
        get: function () {
            return this.formImportar.get('filtroSenha');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImportarComSenhaPage.prototype, "filtroPaciente", {
        get: function () {
            return this.formImportar.get('filtroPaciente');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImportarComSenhaPage.prototype, "filtroNumeroCarteira", {
        get: function () {
            return this.formImportar.get('filtroNumeroCarteira');
        },
        enumerable: true,
        configurable: true
    });
    ImportarComSenhaPage.prototype.criarFormulario = function () {
        this.formImportar = this.formBuilder.group({
            filtroPrestador: [''],
            prestador: [{
                    value: '',
                    disabled: true
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            filtroSenha: [''],
            filtroPaciente: [''],
            filtroNumeroCarteira: [''],
        });
    };
    ImportarComSenhaPage.prototype.buscarPrestador = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var prestador, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.listaPrestadores = [];
                        this.prestador.disable();
                        prestador = new src_app_model_Prestador_model__WEBPACK_IMPORTED_MODULE_9__["Prestador"]();
                        prestador.codNomePrestador = this.filtroPrestador.value;
                        prestador.operadora.codOperadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora')).codOperadora;
                        return [4 /*yield*/, this.loading.presentLoading('Buscando prestador(es)...')];
                    case 1:
                        loading = _a.sent();
                        this.prestadorService.getPrestadores(prestador).subscribe(function (data) {
                            _this.listaPrestadores = data;
                            loading.dismiss();
                            _this.prestador.enable();
                            if (_this.listaPrestadores.length == 1) {
                                _this.formImportar.get("prestador").setValue(_this.listaPrestadores[0].idPrestador);
                                _this.exibirFiltros();
                            }
                        }, function (error) {
                            _this.toast.errorToast(error);
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ImportarComSenhaPage.prototype.limparBuscarPrestador = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.listaPrestadores = [];
                this.prestador.enable();
                this.prestador.reset();
                this.filtroSenha.reset();
                this.filtroPaciente.reset();
                this.filtroNumeroCarteira.reset();
                this.showFiltros = false;
                return [2 /*return*/];
            });
        });
    };
    ImportarComSenhaPage.prototype.exibirFiltros = function () {
        this.showFiltros = true;
    };
    ImportarComSenhaPage.prototype.buscarAcompanhamento = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var acompanhamentoMedico, senhaAutorizacao, beneficiario, prestador, usuario, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        acompanhamentoMedico = new src_app_model_AcompanhamentoMedico_model__WEBPACK_IMPORTED_MODULE_7__["AcompanhamentoMedico"]();
                        senhaAutorizacao = new src_app_model_SenhaAutorizacao_model__WEBPACK_IMPORTED_MODULE_10__["SenhaAutorizacao"]();
                        beneficiario = new src_app_model_Beneficiario_model__WEBPACK_IMPORTED_MODULE_8__["Beneficiario"]();
                        prestador = new src_app_model_Prestador_model__WEBPACK_IMPORTED_MODULE_9__["Prestador"]();
                        usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_11__["Usuario"]();
                        usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
                        prestador.idPrestador = this.prestador.value;
                        senhaAutorizacao.senha = this.filtroSenha.value;
                        beneficiario.nomeBeneficiario = this.filtroPaciente.value;
                        beneficiario.carteiraBeneficiario = this.filtroNumeroCarteira.value;
                        acompanhamentoMedico.prestador = prestador;
                        acompanhamentoMedico.senhaAutorizacao = senhaAutorizacao;
                        acompanhamentoMedico.beneficiario = beneficiario;
                        acompanhamentoMedico.usuario = usuario;
                        acompanhamentoMedico.operadora = usuario.operadora;
                        return [4 /*yield*/, this.loading.presentLoading('Buscando acompanhamentos...')];
                    case 1:
                        loading = _a.sent();
                        this.acompanhamentoService.getAcompanhamentosParaImportar(acompanhamentoMedico).subscribe(function (data) {
                            if (data != null && data != '') {
                                loading.dismiss();
                                var lista = data;
                                var navigationExtras = {
                                    state: {
                                        lista: lista
                                    }
                                };
                                _this.navCtrl.navigateForward(['menu-principal/listar-acompanhamento'], navigationExtras);
                            }
                            else {
                                loading.dismiss();
                                _this.toast.errorToast("Não existem acompanhamentos para os dados informados");
                            }
                        }, function (error) {
                            _this.toast.errorToast(error);
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ImportarComSenhaPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_5__["SaudiLoadingComponent"] },
        { type: src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_6__["SaudiToastComponent"] },
        { type: src_app_services_prestador_service__WEBPACK_IMPORTED_MODULE_13__["PrestadorService"] },
        { type: src_app_services_acompanhamento_service__WEBPACK_IMPORTED_MODULE_12__["AcompanhamentoService"] }
    ]; };
    ImportarComSenhaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-importar-com-senha',
            template: __webpack_require__(/*! raw-loader!./importar-com-senha.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/importar/com-senha/importar-com-senha.page.html"),
            styles: [__webpack_require__(/*! ./importar-com-senha.page.scss */ "./src/app/pages/importar/com-senha/importar-com-senha.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_5__["SaudiLoadingComponent"],
            src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_6__["SaudiToastComponent"],
            src_app_services_prestador_service__WEBPACK_IMPORTED_MODULE_13__["PrestadorService"],
            src_app_services_acompanhamento_service__WEBPACK_IMPORTED_MODULE_12__["AcompanhamentoService"]])
    ], ImportarComSenhaPage);
    return ImportarComSenhaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-importar-com-senha-importar-com-senha-module-es5.js.map