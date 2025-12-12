(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-acompanhamento-buscar-senha-buscar-senha-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/acompanhamento/buscar-senha/buscar-senha.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/acompanhamento/buscar-senha/buscar-senha.page.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"ion-text-center\">\r\n        <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/menu-principal\" text=\"\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-uppercase\">Abrir Acompanhamento</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n        <ion-menu-button menuId=\"main-content\"></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <form [formGroup]=\"formBuscarSenha\">    \r\n    <ion-card>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Perfil Formulário</ion-label>\r\n          <ion-select formControlName=\"perfilFormulario\" interface=\"action-sheet\" placeholder=\"Selecione\" cancelText=\"Cancelar\" okText=\"Ok\" (ionChange)=\"alteraPerfilFormulario()\" (ionFocus)=\"usuarioComecouAlterarPerfil = true\">\r\n            <ion-select-option *ngFor=\"let perfil of listaPerfisFormulario\" [value]=\"perfil.idConfigFormulario\">{{ perfil.nomeConfigFormulario }}</ion-select-option>\r\n          </ion-select>      \r\n      </ion-item> \r\n    </ion-card>\r\n    <ion-card>               \r\n      <ion-item>\r\n        <ion-label position=\"floating\">Prestador</ion-label>\r\n        <ng-container *ngIf=\"listaPrestadores.length == 0\">\r\n          <ion-input type=\"text\" inputmode=\"text\" formControlName=\"filtroPrestador\" inputmode=\"text\"></ion-input>             \r\n        </ng-container>\r\n        <ng-container *ngIf=\"listaPrestadores.length > 0\">\r\n          <ion-select formControlName=\"prestador\" interface=\"action-sheet\" placeholder=\"Selecione\" cancelText=\"Cancelar\" (ionChange)=\"exibirFiltros()\">\r\n            <ion-select-option *ngFor=\"let prestador of listaPrestadores\" [value]=\"prestador.idPrestador\">{{ prestador.nomePrestador }}</ion-select-option>\r\n          </ion-select>               \r\n        </ng-container>          \r\n      </ion-item> \r\n      <ion-item mode=\"md\" lines=\"none\" class=\"item-error\" *ngIf=\"(prestador.dirty || prestador.touched) && prestador.hasError('required')\">\r\n        <ion-note color=\"warning\" class=\"ion-padding-horizontal\">Campo obrigatório\r\n          <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n        </ion-note>\r\n      </ion-item> \r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n          <ng-container *ngIf=\"listaPrestadores.length == 0\">\r\n            <ion-button expand=\"block\" size=\"large\" (click)=\"buscarPrestador()\" [disabled]=\"filtroPrestador.invalid\">Buscar</ion-button>\r\n          </ng-container> \r\n          <ng-container *ngIf=\"listaPrestadores.length > 0\">\r\n            <ion-button expand=\"block\" size=\"large\" (click)=\"limparBuscarPrestador()\">Nova Busca</ion-button>\r\n          </ng-container> \r\n        </ion-col>\r\n      </ion-row>                                 \r\n    </ion-card>\r\n    <ion-card *ngIf=\"showFiltros\">   \r\n      <ion-card-header>\r\n        <ion-card-title class=\"ion-text-center\">Opções de Busca</ion-card-title>\r\n      </ion-card-header>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Senha</ion-label>\r\n        <ion-input type=\"text\" inputmode=\"text\" formControlName=\"filtroSenha\" inputmode=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Paciente</ion-label>\r\n        <ion-input type=\"text\" inputmode=\"text\" formControlName=\"filtroPaciente\" inputmode=\"text\"></ion-input>\r\n      </ion-item>          \r\n      <ion-item>\r\n        <ion-label>Período de Emissão da Senha</ion-label>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-input readonly=\"true\" clearInput (click)=\"abrirCalendarioPeriodoIni($event)\" formControlName=\"filtroInicioPeriodo\"></ion-input>\r\n        <ion-icon name=\"calendar\" slot=\"end\" class=\"iconCalendar\" (click)=\"abrirCalendarioPeriodoIni($event)\"></ion-icon>\r\n      </ion-item>                 \r\n      <ion-item>\r\n        <ion-input readonly=\"true\" clearInput (click)=\"abrirCalendarioPeriodoFinal($event)\" formControlName=\"filtroFinalPeriodo\"></ion-input>\r\n        <ion-icon name=\"calendar\" slot=\"end\" class=\"iconCalendar\" (click)=\"abrirCalendarioPeriodoFinal($event)\"></ion-icon>\r\n      </ion-item>      \r\n      <ion-item mode=\"md\" lines=\"none\" class=\"item-error\" *ngIf=\"(filtroFinalPeriodo.dirty || filtroFinalPeriodo.touched) && filtroFinalPeriodo.hasError('incorrect')\">\r\n        <ion-note color=\"warning\" class=\"ion-padding-horizontal\">Campo inválido\r\n          <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n        </ion-note>\r\n      </ion-item> \r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n          <ion-button (click)=\"buscarSenhas()\" [disabled]=\"!formBuscarSenha.valid\" expand=\"block\" size=\"large\">\r\n            Prosseguir\r\n          </ion-button>  \r\n        </ion-col>\r\n      </ion-row>               \r\n    </ion-card>     \r\n  </form>  \r\n</ion-content>\r\n  "

/***/ }),

/***/ "./src/app/pages/acompanhamento/buscar-senha/buscar-senha-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/buscar-senha/buscar-senha-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: BuscarSenhaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarSenhaPageRoutingModule", function() { return BuscarSenhaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _buscar_senha_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buscar-senha.page */ "./src/app/pages/acompanhamento/buscar-senha/buscar-senha.page.ts");




var routes = [
    {
        path: '',
        component: _buscar_senha_page__WEBPACK_IMPORTED_MODULE_3__["BuscarSenhaPage"]
    }
];
var BuscarSenhaPageRoutingModule = /** @class */ (function () {
    function BuscarSenhaPageRoutingModule() {
    }
    BuscarSenhaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BuscarSenhaPageRoutingModule);
    return BuscarSenhaPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/acompanhamento/buscar-senha/buscar-senha.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/buscar-senha/buscar-senha.module.ts ***!
  \**************************************************************************/
/*! exports provided: BuscarSenhaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarSenhaPageModule", function() { return BuscarSenhaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _buscar_senha_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buscar-senha-routing.module */ "./src/app/pages/acompanhamento/buscar-senha/buscar-senha-routing.module.ts");
/* harmony import */ var _buscar_senha_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buscar-senha.page */ "./src/app/pages/acompanhamento/buscar-senha/buscar-senha.page.ts");







var BuscarSenhaPageModule = /** @class */ (function () {
    function BuscarSenhaPageModule() {
    }
    BuscarSenhaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _buscar_senha_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuscarSenhaPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_buscar_senha_page__WEBPACK_IMPORTED_MODULE_6__["BuscarSenhaPage"]]
        })
    ], BuscarSenhaPageModule);
    return BuscarSenhaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/acompanhamento/buscar-senha/buscar-senha.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/buscar-senha/buscar-senha.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  color: var(--ion-color-primary);\n}\n\nlabelFiltro {\n  font-weight: bold;\n}\n\nion-input {\n  margin-top: 30px;\n  margin-bottom: 5px;\n  font-weight: 100;\n}\n\n.iconCalendar {\n  margin-top: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNvbXBhbmhhbWVudG8vYnVzY2FyLXNlbmhhL0M6XFxEZXNlblxcd29ya3NwYWNlX2FwbGljYXRpdm9cXEFwcEFjb21wYW5oYW1lbnRvTWVkaWNvL3NyY1xcYXBwXFxwYWdlc1xcYWNvbXBhbmhhbWVudG9cXGJ1c2Nhci1zZW5oYVxcYnVzY2FyLXNlbmhhLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWNvbXBhbmhhbWVudG8vYnVzY2FyLXNlbmhhL2J1c2Nhci1zZW5oYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fjb21wYW5oYW1lbnRvL2J1c2Nhci1zZW5oYS9idXNjYXItc2VuaGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxubGFiZWxGaWx0cm97XHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgXHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDsgXHJcbn1cclxuXHJcbi5pY29uQ2FsZW5kYXIge1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG4iLCJpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmxhYmVsRmlsdHJvIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmljb25DYWxlbmRhciB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/acompanhamento/buscar-senha/buscar-senha.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/buscar-senha/buscar-senha.page.ts ***!
  \************************************************************************/
/*! exports provided: BuscarSenhaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscarSenhaPage", function() { return BuscarSenhaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/saudi-loading/saudi-loading.component */ "./src/app/components/saudi-loading/saudi-loading.component.ts");
/* harmony import */ var src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/saudi-toast/saudi-toast.component */ "./src/app/components/saudi-toast/saudi-toast.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_services_prestador_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/prestador.service */ "./src/app/services/prestador.service.ts");
/* harmony import */ var src_app_model_Prestador_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/model/Prestador.model */ "./src/app/model/Prestador.model.ts");
/* harmony import */ var src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/model/Operadora.model */ "./src/app/model/Operadora.model.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/config/constantes/constantes */ "./src/app/config/constantes/constantes.ts");
/* harmony import */ var src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/model/Usuario.model */ "./src/app/model/Usuario.model.ts");
/* harmony import */ var src_app_model_SenhaAutorizacao_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/model/SenhaAutorizacao.model */ "./src/app/model/SenhaAutorizacao.model.ts");
/* harmony import */ var src_app_services_senhaAutorizacao_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/senhaAutorizacao.service */ "./src/app/services/senhaAutorizacao.service.ts");
/* harmony import */ var src_app_components_popover_calendario_popover_calendario_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/components/popover-calendario/popover-calendario.component */ "./src/app/components/popover-calendario/popover-calendario.component.ts");


















var BuscarSenhaPage = /** @class */ (function () {
    function BuscarSenhaPage(formBuilder, router, navCtrl, loading, toast, prestadorService, senhaAutorizacaoService, storageService, networkService, atrCtrl, popover) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.toast = toast;
        this.prestadorService = prestadorService;
        this.senhaAutorizacaoService = senhaAutorizacaoService;
        this.storageService = storageService;
        this.networkService = networkService;
        this.atrCtrl = atrCtrl;
        this.popover = popover;
        this.showFiltros = false;
        this.listaPerfisFormulario = [];
        this.listaPrestadores = [];
        this.usuarioComecouAlterarPerfil = false;
    }
    BuscarSenhaPage.prototype.ngOnInit = function () {
        moment__WEBPACK_IMPORTED_MODULE_7__["locale"]('pt-br');
        this.criarFormulario();
    };
    BuscarSenhaPage.prototype.ionViewWillEnter = function () {
        this.ngOnInit();
    };
    Object.defineProperty(BuscarSenhaPage.prototype, "perfilFormulario", {
        get: function () {
            return this.formBuscarSenha.get("perfilFormulario");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuscarSenhaPage.prototype, "prestador", {
        get: function () {
            return this.formBuscarSenha.get('prestador');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuscarSenhaPage.prototype, "filtroPrestador", {
        get: function () {
            return this.formBuscarSenha.get('filtroPrestador');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuscarSenhaPage.prototype, "filtroSenha", {
        get: function () {
            return this.formBuscarSenha.get('filtroSenha');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuscarSenhaPage.prototype, "filtroPaciente", {
        get: function () {
            return this.formBuscarSenha.get('filtroPaciente');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuscarSenhaPage.prototype, "filtroInicioPeriodo", {
        get: function () {
            return this.formBuscarSenha.get('filtroInicioPeriodo');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuscarSenhaPage.prototype, "filtroFinalPeriodo", {
        get: function () {
            return this.formBuscarSenha.get('filtroFinalPeriodo');
        },
        enumerable: true,
        configurable: true
    });
    BuscarSenhaPage.prototype.criarFormulario = function () {
        var usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
        var lastYear = moment__WEBPACK_IMPORTED_MODULE_7__();
        lastYear.subtract(1, "year");
        this.formBuscarSenha = this.formBuilder.group({
            perfilFormulario: [usuario.configFormulario.idConfigFormulario],
            filtroPrestador: [''],
            prestador: [{
                    value: '',
                    disabled: true
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            filtroSenha: [''],
            filtroPaciente: [''],
            filtroInicioPeriodo: [lastYear.format("DD/MM/YYYY")],
            filtroFinalPeriodo: [moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format("DD/MM/YYYY")]
        });
        this.listaPerfisFormulario = usuario.listaConfigFormulario;
    };
    BuscarSenhaPage.prototype.alteraPerfilFormulario = function () {
        var _this = this;
        if (!this.usuarioComecouAlterarPerfil) {
            return;
        }
        this.usuarioComecouAlterarPerfil = false; // reseta
        var usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
        var confFormulario = this.listaPerfisFormulario.find(function (x) { return x.idConfigFormulario === _this.perfilFormulario.value; });
        usuario.configFormulario = confFormulario;
        localStorage.setItem('@appAcompanhamentoMedico:dadosUsuario', JSON.stringify(usuario));
        if (usuario.configFormulario.codDominio == src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_13__["default"].PERFIL_DOMICILIAR) {
            this.router.navigateByUrl('/menu-principal/abrir-sem-senha-domiciliar', { replaceUrl: true });
        }
        else {
            if (usuario.operadora.flagUtilizaSenhaAcompMedico == 1) {
                return;
            }
            else {
                this.router.navigateByUrl('/menu-principal/abrir-sem-senha', { replaceUrl: true });
            }
        }
    };
    BuscarSenhaPage.prototype.verificarData = function () {
        if (this.filtroInicioPeriodo.value != '' && this.filtroInicioPeriodo.value != null &&
            this.filtroFinalPeriodo.value != '' && this.filtroFinalPeriodo.value != null) {
            var dataDe = new Date(moment__WEBPACK_IMPORTED_MODULE_7__(this.filtroInicioPeriodo.value, "DD/MM/YYYY").toISOString());
            var dataAte = new Date(moment__WEBPACK_IMPORTED_MODULE_7__(this.filtroFinalPeriodo.value, "DD/MM/YYYY").toISOString());
            if (dataAte.getTime() < dataDe.getTime()) {
                this.filtroFinalPeriodo.setErrors({
                    'incorrect': true
                });
                this.toast.errorToast('Data Inicial maior que a Data Final.');
            }
            else {
                this.filtroFinalPeriodo.updateValueAndValidity();
            }
        }
    };
    BuscarSenhaPage.prototype.buscarPrestador = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.networkService.CheckNetworkStatus();
                if (this.networkService.NetworkStatus.value) {
                    this.buscarPrestadorOnline();
                }
                else {
                    this.buscarPrestadorOffline();
                }
                return [2 /*return*/];
            });
        });
    };
    BuscarSenhaPage.prototype.buscarPrestadorOnline = function () {
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
                                _this.formBuscarSenha.get("prestador").setValue(_this.listaPrestadores[0].idPrestador);
                                _this.exibirFiltros();
                            }
                        }, function (error) {
                            _this.buscarPrestadorOffline();
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    BuscarSenhaPage.prototype.buscarPrestadorOffline = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var codNomePrestador, operadora, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.listaPrestadores = [];
                        this.prestador.disable();
                        codNomePrestador = this.filtroPrestador.value;
                        operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_10__["Operadora"]();
                        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:operadoraUsuario'));
                        return [4 /*yield*/, this.loading.presentLoading('Buscando prestador(es)...')];
                    case 1:
                        loading = _a.sent();
                        operadora.listaPrestadores.forEach(function (item) {
                            if (item.codPrestador.includes(codNomePrestador) || item.nomePrestador.includes(codNomePrestador.toUpperCase())) {
                                _this.listaPrestadores.push(item);
                            }
                        });
                        if (this.listaPrestadores.length > 0) {
                            loading.dismiss();
                            this.prestador.enable();
                            if (this.listaPrestadores.length == 1) {
                                this.formBuscarSenha.get("prestador").setValue(this.listaPrestadores[0].idPrestador);
                                this.exibirFiltros();
                            }
                        }
                        else {
                            this.toast.errorToast("Nenhum prestador localizado.");
                            loading.dismiss();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    BuscarSenhaPage.prototype.limparBuscarPrestador = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var lastYear;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.listaPrestadores = [];
                this.prestador.enable();
                this.prestador.reset();
                this.showFiltros = false;
                this.filtroSenha.reset();
                this.filtroPaciente.reset();
                this.filtroInicioPeriodo.reset();
                lastYear = moment__WEBPACK_IMPORTED_MODULE_7__();
                lastYear.subtract(1, "year");
                this.formBuscarSenha.get("filtroInicioPeriodo").setValue(lastYear.format("DD/MM/YYYY"));
                this.filtroFinalPeriodo.reset();
                this.formBuscarSenha.get("filtroFinalPeriodo").setValue(moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format("DD/MM/YYYY"));
                return [2 /*return*/];
            });
        });
    };
    BuscarSenhaPage.prototype.exibirFiltros = function () {
        this.showFiltros = true;
    };
    BuscarSenhaPage.prototype.buscarSenhas = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                //Valida o preenchimento dos filtros
                this.validaBuscaSenha().then(function () {
                    var flgPossuiAcomp = false;
                    var usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_14__["Usuario"]();
                    var configFormulario;
                    usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
                    //Busca formulario ativo para o usuário
                    configFormulario = usuario.listaConfigFormulario.find(function (x) { return x.statusAtualConfigFormulario === 'ATIVO'; });
                    if (configFormulario != null) {
                        //Verifica se está online ou offline
                        _this.networkService.CheckNetworkStatus();
                        if (_this.networkService.NetworkStatus.value) {
                            _this.buscarSenhaOnline();
                        }
                        else {
                            //Verifica se o usuario preencheu o filtro de senha
                            if (_this.filtroSenha.value != '') {
                                var acompanhamentoMedico_1;
                                //Verifica se o usuário já possui acompanhamento medico cadastrado              
                                _this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_13__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then(function (items) {
                                    if (items != null) {
                                        //Busca acompanhamento para usuario, formulario e senha
                                        acompanhamentoMedico_1 = items.find(function (x) { return x.senhaAutorizacao.senha === _this.filtroSenha.value &&
                                            x.configFormulario.idConfigFormulario === usuario.configFormulario.idConfigFormulario; });
                                        if (acompanhamentoMedico_1 != null) {
                                            //Exibe mensagem para confirmar se o usuario quer ou não abrir o acompanhamento existente
                                            _this.confirmarAbrirAcompanhamentoSenhaExistente(acompanhamentoMedico_1);
                                            flgPossuiAcomp = true;
                                        }
                                    }
                                });
                            }
                            if (_this.filtroSenha.value == '' || !flgPossuiAcomp) {
                                if (usuario.operadora.flagUtilizaOfflineAcompMedico == 0) {
                                    _this.toast.errorToast("Sem acesso à internet. Não foi possível estabelecer conexão com  a internet.");
                                }
                                else {
                                    //Exibe mensagem para confirmar se o usuario quer ou não abrir o acompanhamento offline no dispositivo
                                    var mensagem = "Sem acesso a internet. Deseja abrir um acompanhamento a partir do dispositivo ?";
                                    _this.confirmarAbrirAcompanhamentoDispositivo(mensagem);
                                }
                            }
                        }
                    }
                    else {
                        //Se usuário não possui nenhum formulário ativo
                        _this.toast.errorToast("Não há formulários ativos para este usuário");
                    }
                }).catch(function (error) {
                    _this.toast.errorToast(error);
                });
                return [2 /*return*/];
            });
        });
    };
    BuscarSenhaPage.prototype.validaBuscaSenha = function () {
        var _this = this;
        return new Promise(function (resolve) {
            if (_this.filtroSenha.value == '' && _this.filtroPaciente.value == '' &&
                (_this.filtroInicioPeriodo.value == '' || _this.filtroInicioPeriodo.value == null) &&
                (_this.filtroFinalPeriodo.value == '' || _this.filtroFinalPeriodo.value == null)) {
                _this.toast.errorToast('Pelo menos um dos filtros deve ser preenchido.');
            }
            else {
                if (((_this.filtroInicioPeriodo.value != '' || _this.filtroInicioPeriodo.value != null) &&
                    (_this.filtroFinalPeriodo.value == '' || _this.filtroFinalPeriodo.value == null)) ||
                    ((_this.filtroInicioPeriodo.value == '' || _this.filtroInicioPeriodo.value == null) &&
                        (_this.filtroFinalPeriodo.value != '' || _this.filtroFinalPeriodo.value != null))) {
                    _this.toast.errorToast('É obrigatório o preenchimento do campo De e Até do Período de Emissão da Senha.');
                }
                else {
                    if (_this.filtroPaciente.value != '' && (_this.filtroInicioPeriodo.value == '' || _this.filtroInicioPeriodo.value == null ||
                        _this.filtroFinalPeriodo.value == '' || _this.filtroFinalPeriodo.value == null)) {
                        _this.toast.errorToast('É obrigatório o preenchimento do campo De e Até do Período de Emissão da Senha junto com o campo Paciente.');
                    }
                    else {
                        resolve(true);
                    }
                }
            }
        });
    };
    BuscarSenhaPage.prototype.buscarSenhaOnline = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var senhaAutorizacao, usuario, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        senhaAutorizacao = new src_app_model_SenhaAutorizacao_model__WEBPACK_IMPORTED_MODULE_15__["SenhaAutorizacao"]();
                        if (this.filtroSenha.value != '') {
                            senhaAutorizacao.senha = this.filtroSenha.value;
                        }
                        if (this.filtroPaciente.value != '') {
                            senhaAutorizacao.beneficiario.carteiraBeneficiario = this.filtroPaciente.value;
                        }
                        if (this.filtroInicioPeriodo.value != '' && this.filtroFinalPeriodo.value != '') {
                            senhaAutorizacao.dataAutorizacaoInicial = this.filtroInicioPeriodo.value;
                            senhaAutorizacao.dataAutorizacaoFinal = this.filtroFinalPeriodo.value;
                        }
                        senhaAutorizacao.prestador.idPrestador = this.prestador.value;
                        usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_14__["Usuario"]();
                        usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
                        senhaAutorizacao.operadora = usuario.operadora;
                        return [4 /*yield*/, this.loading.presentLoading('Buscando senha...')];
                    case 1:
                        loading = _a.sent();
                        this.senhaAutorizacaoService.getSenhasAutorizacao(senhaAutorizacao).subscribe(function (data) {
                            if (data != null && data.length > 0) {
                                var lista = data;
                                loading.dismiss();
                                var navigationExtras = {
                                    state: {
                                        lista: lista
                                    }
                                };
                                _this.navCtrl.navigateForward(['menu-principal/listar-senhas'], navigationExtras);
                            }
                            else {
                                loading.dismiss();
                                if (usuario.operadora.flagUtilizaOfflineAcompMedico === 0) {
                                    _this.toast.errorToast("Nenhuma Senha de Autorização localizada.");
                                }
                                else {
                                    var mensagem = "Senha não encontrada. Deseja abrir um acompanhamento a partir do dispositivo ?";
                                    _this.confirmarAbrirAcompanhamentoDispositivo(mensagem);
                                }
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
    BuscarSenhaPage.prototype.confirmarAbrirAcompanhamentoDispositivo = function (mensagem) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atrCtrl.create({
                            header: 'Abrir Acompanhamento Médico',
                            message: mensagem,
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: function (blah) { }
                                }, {
                                    text: 'Confirmar',
                                    handler: function () {
                                        var prestador = _this.listaPrestadores.find(function (x) { return x.idPrestador === _this.prestador.value; });
                                        var senha = _this.filtroSenha.value;
                                        var navigationExtras = {
                                            state: {
                                                prestador: prestador,
                                                senha: senha
                                            }
                                        };
                                        _this.router.navigateByUrl('menu-principal/abrir-sem-senha', navigationExtras);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BuscarSenhaPage.prototype.confirmarAbrirAcompanhamentoSenhaExistente = function (acompanhamentoMedico) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mensagem, flgAbrindo, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mensagem = "Já existe um acompanhamento para a senha: " + acompanhamentoMedico.senhaAutorizacao.senha + " Abrir acompanhamento existente?";
                        flgAbrindo = false;
                        return [4 /*yield*/, this.atrCtrl.create({
                                header: 'Abrir Acompanhamento Médico',
                                message: mensagem,
                                buttons: [
                                    {
                                        text: 'Cancelar',
                                        role: 'cancel',
                                        handler: function (blah) { }
                                    }, {
                                        text: 'Confirmar',
                                        handler: function () {
                                            var navigationExtras = {
                                                state: {
                                                    acompanhamentoMedico: acompanhamentoMedico,
                                                    flgAbrindo: flgAbrindo
                                                }
                                            };
                                            _this.router.navigateByUrl('menu-principal/exibirFormulario', navigationExtras);
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BuscarSenhaPage.prototype.abrirCalendarioPeriodoIni = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var diaIni, pop;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.filtroInicioPeriodo.value != null && this.filtroInicioPeriodo.value != '') {
                            diaIni = new Date(moment__WEBPACK_IMPORTED_MODULE_7__(this.filtroInicioPeriodo.value, "DD/MM/YYYY").toISOString());
                        }
                        else {
                            diaIni = new Date();
                        }
                        return [4 /*yield*/, this.popover.create({
                                component: src_app_components_popover_calendario_popover_calendario_component__WEBPACK_IMPORTED_MODULE_17__["PopoverCalendarioComponent"],
                                event: ev,
                                cssClass: 'popover-custon',
                                componentProps: {
                                    titulo: 'Período Inicial de Emissão de Senha',
                                    data: diaIni
                                },
                                translucent: true
                            })];
                    case 1:
                        pop = _a.sent();
                        pop.onDidDismiss().then(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!result.data) return [3 /*break*/, 2];
                                        this.formBuscarSenha.get("filtroInicioPeriodo").setValue(moment__WEBPACK_IMPORTED_MODULE_7__(result.data).format("DD/MM/YYYY"));
                                        return [4 /*yield*/, this.verificarData()];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [4 /*yield*/, pop.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BuscarSenhaPage.prototype.abrirCalendarioPeriodoFinal = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var diaFinal, pop;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.filtroFinalPeriodo.value != null && this.filtroFinalPeriodo.value != '') {
                            diaFinal = new Date(moment__WEBPACK_IMPORTED_MODULE_7__(this.filtroFinalPeriodo.value, "DD/MM/YYYY").toISOString());
                        }
                        else {
                            diaFinal = new Date();
                        }
                        return [4 /*yield*/, this.popover.create({
                                component: src_app_components_popover_calendario_popover_calendario_component__WEBPACK_IMPORTED_MODULE_17__["PopoverCalendarioComponent"],
                                event: ev,
                                cssClass: 'popover-custon',
                                componentProps: {
                                    titulo: 'Período Final de Emissão de Senha',
                                    data: diaFinal
                                },
                                translucent: true
                            })];
                    case 1:
                        pop = _a.sent();
                        pop.onDidDismiss().then(function (result) {
                            if (result.data) {
                                _this.formBuscarSenha.get("filtroFinalPeriodo").setValue(moment__WEBPACK_IMPORTED_MODULE_7__(result.data).format("DD/MM/YYYY"));
                                _this.verificarData();
                            }
                        });
                        return [4 /*yield*/, pop.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    BuscarSenhaPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_4__["SaudiLoadingComponent"] },
        { type: src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_5__["SaudiToastComponent"] },
        { type: src_app_services_prestador_service__WEBPACK_IMPORTED_MODULE_8__["PrestadorService"] },
        { type: src_app_services_senhaAutorizacao_service__WEBPACK_IMPORTED_MODULE_16__["SenhaAutorizacaoService"] },
        { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"] },
        { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_12__["NetworkService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] }
    ]; };
    BuscarSenhaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buscar-senha',
            template: __webpack_require__(/*! raw-loader!./buscar-senha.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/acompanhamento/buscar-senha/buscar-senha.page.html"),
            styles: [__webpack_require__(/*! ./buscar-senha.page.scss */ "./src/app/pages/acompanhamento/buscar-senha/buscar-senha.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_4__["SaudiLoadingComponent"],
            src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_5__["SaudiToastComponent"],
            src_app_services_prestador_service__WEBPACK_IMPORTED_MODULE_8__["PrestadorService"],
            src_app_services_senhaAutorizacao_service__WEBPACK_IMPORTED_MODULE_16__["SenhaAutorizacaoService"],
            src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"],
            src_app_services_network_service__WEBPACK_IMPORTED_MODULE_12__["NetworkService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
    ], BuscarSenhaPage);
    return BuscarSenhaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-acompanhamento-buscar-senha-buscar-senha-module-es5.js.map