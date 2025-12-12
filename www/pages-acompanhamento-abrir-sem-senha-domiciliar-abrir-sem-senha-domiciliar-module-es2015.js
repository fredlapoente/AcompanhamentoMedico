(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-acompanhamento-abrir-sem-senha-domiciliar-abrir-sem-senha-domiciliar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/acompanhamento/abrir-sem-senha-domiciliar/abrir-sem-senha-domiciliar.page.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/acompanhamento/abrir-sem-senha-domiciliar/abrir-sem-senha-domiciliar.page.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"ion-text-center\">\r\n        <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/menu-principal\" text=\"\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-uppercase\">Abrir Acompanhamento</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n        <ion-menu-button menuId=\"main-content\"></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <form [formGroup]=\"formAbrirSemSenhaDomiciliar\">    \r\n      <ion-card>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Perfil Formulário</ion-label>\r\n            <ion-select formControlName=\"perfilFormulario\" interface=\"action-sheet\" placeholder=\"Selecione\" cancelText=\"Cancelar\" okText=\"Ok\" (ionChange)=\"alteraPerfilFormulario()\" (ionFocus)=\"usuarioComecouAlterarPerfil = true\">\r\n              <ion-select-option *ngFor=\"let perfil of listaPerfisFormulario\" [value]=\"perfil.idConfigFormulario\">{{ perfil.nomeConfigFormulario }}</ion-select-option>\r\n            </ion-select>      \r\n        </ion-item> \r\n      </ion-card>\r\n      <ion-card>            \r\n        <ion-item>\r\n          <ion-label position=\"floating\">Prestador</ion-label>\r\n          <ng-container *ngIf=\"listaPrestadores.length == 0\">\r\n            <ion-input type=\"text\" inputmode=\"text\" formControlName=\"filtroPrestador\" inputmode=\"text\"></ion-input>             \r\n          </ng-container>\r\n          <ng-container *ngIf=\"listaPrestadores.length > 0\">\r\n            <ion-select formControlName=\"prestador\" interface=\"action-sheet\" placeholder=\"Selecione\" cancelText=\"Cancelar\" (ionChange)=\"exibirFiltros()\">\r\n              <ion-select-option *ngFor=\"let prestador of listaPrestadores\" [value]=\"prestador.idPrestador\">{{ prestador.nomePrestador }}</ion-select-option>\r\n            </ion-select>               \r\n          </ng-container>          \r\n        </ion-item>\r\n        <ion-item mode=\"md\" lines=\"none\" class=\"item-error\" *ngIf=\"(prestador.dirty || prestador.touched) && prestador.hasError('required')\">\r\n          <ion-note color=\"warning\" class=\"ion-padding-horizontal\">Campo obrigatório\r\n            <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n          </ion-note>\r\n        </ion-item>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ng-container *ngIf=\"listaPrestadores.length == 0\">\r\n              <ion-button expand=\"block\" size=\"large\" (click)=\"buscarPrestador()\" [disabled]=\"filtroPrestador.invalid\">Buscar</ion-button>\r\n            </ng-container> \r\n            <ng-container *ngIf=\"listaPrestadores.length > 0\">\r\n              <ion-button expand=\"block\" size=\"large\" (click)=\"limparBuscarPrestador()\">Nova Busca</ion-button>\r\n            </ng-container> \r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card>\r\n      <ion-card *ngIf=\"showFiltros\">        \r\n        <ion-item>\r\n          <ion-label position=\"floating\">Nome do Paciente</ion-label>\r\n          <ion-input type=\"text\" inputmode=\"text\" formControlName=\"nomeBeneficiario\" inputmode=\"text\"></ion-input>\r\n        </ion-item>\r\n        <ion-item mode=\"md\" lines=\"none\" class=\"item-error\" *ngIf=\"((nomeBeneficiario.dirty || nomeBeneficiario.touched) && nomeBeneficiario.hasError('required')) || nomeBeneficiario.hasError('incorrect')\">\r\n          <ion-note color=\"warning\" class=\"ion-padding-horizontal\">Campo obrigatório\r\n            <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n          </ion-note>\r\n        </ion-item>                   \r\n        <ion-item>\r\n          <ion-label position=\"floating\">Número da Carteira do Paciente</ion-label>\r\n          <ion-input type=\"text\" inputmode=\"text\" formControlName=\"carteiraBeneficiario\" inputmode=\"text\"></ion-input>\r\n        </ion-item>\r\n        <ion-item mode=\"md\" lines=\"none\" class=\"item-error\" *ngIf=\"((carteiraBeneficiario.dirty || carteiraBeneficiario.touched) && carteiraBeneficiario.hasError('required')) || carteiraBeneficiario.hasError('incorrect')\">\r\n          <ion-note color=\"warning\" class=\"ion-padding-horizontal\">Campo obrigatório\r\n            <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n          </ion-note>\r\n        </ion-item> \r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-button (click)=\"buscarSegurado()\" [disabled]=\"false\" expand=\"block\" size=\"large\">\r\n              Buscar\r\n            </ion-button>  \r\n          </ion-col>\r\n        </ion-row>               \r\n      </ion-card>\r\n    </form>\r\n</ion-content>      "

/***/ }),

/***/ "./src/app/pages/acompanhamento/abrir-sem-senha-domiciliar/abrir-sem-senha-domiciliar-routing.module.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/abrir-sem-senha-domiciliar/abrir-sem-senha-domiciliar-routing.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AbrirSemSenhaDomiciliarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbrirSemSenhaDomiciliarPageRoutingModule", function() { return AbrirSemSenhaDomiciliarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _abrir_sem_senha_domiciliar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abrir-sem-senha-domiciliar.page */ "./src/app/pages/acompanhamento/abrir-sem-senha-domiciliar/abrir-sem-senha-domiciliar.page.ts");




const routes = [
    {
        path: '',
        component: _abrir_sem_senha_domiciliar_page__WEBPACK_IMPORTED_MODULE_3__["AbrirSemSenhaDomiciliarPage"]
    }
];
let AbrirSemSenhaDomiciliarPageRoutingModule = class AbrirSemSenhaDomiciliarPageRoutingModule {
};
AbrirSemSenhaDomiciliarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AbrirSemSenhaDomiciliarPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/acompanhamento/abrir-sem-senha-domiciliar/abrir-sem-senha-domiciliar.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/abrir-sem-senha-domiciliar/abrir-sem-senha-domiciliar.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: AbrirSemSenhaDomiciliarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbrirSemSenhaDomiciliarPageModule", function() { return AbrirSemSenhaDomiciliarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _abrir_sem_senha_domiciliar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./abrir-sem-senha-domiciliar-routing.module */ "./src/app/pages/acompanhamento/abrir-sem-senha-domiciliar/abrir-sem-senha-domiciliar-routing.module.ts");
/* harmony import */ var _abrir_sem_senha_domiciliar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./abrir-sem-senha-domiciliar.page */ "./src/app/pages/acompanhamento/abrir-sem-senha-domiciliar/abrir-sem-senha-domiciliar.page.ts");







let AbrirSemSenhaDomiciliarPageModule = class AbrirSemSenhaDomiciliarPageModule {
};
AbrirSemSenhaDomiciliarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _abrir_sem_senha_domiciliar_routing_module__WEBPACK_IMPORTED_MODULE_5__["AbrirSemSenhaDomiciliarPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_abrir_sem_senha_domiciliar_page__WEBPACK_IMPORTED_MODULE_6__["AbrirSemSenhaDomiciliarPage"]]
    })
], AbrirSemSenhaDomiciliarPageModule);



/***/ }),

/***/ "./src/app/pages/acompanhamento/abrir-sem-senha-domiciliar/abrir-sem-senha-domiciliar.page.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/abrir-sem-senha-domiciliar/abrir-sem-senha-domiciliar.page.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  color: var(--ion-color-primary);\n}\n\nlabelFiltro {\n  font-weight: bold;\n}\n\nion-input {\n  margin-top: 30px;\n  margin-bottom: 5px;\n  font-weight: 100;\n}\n\n.iconCalendar {\n  margin-top: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNvbXBhbmhhbWVudG8vYWJyaXItc2VtLXNlbmhhLWRvbWljaWxpYXIvQzpcXERlc2VuXFx3b3Jrc3BhY2VfYXBsaWNhdGl2b1xcQXBwQWNvbXBhbmhhbWVudG9NZWRpY28vc3JjXFxhcHBcXHBhZ2VzXFxhY29tcGFuaGFtZW50b1xcYWJyaXItc2VtLXNlbmhhLWRvbWljaWxpYXJcXGFicmlyLXNlbS1zZW5oYS1kb21pY2lsaWFyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWNvbXBhbmhhbWVudG8vYWJyaXItc2VtLXNlbmhhLWRvbWljaWxpYXIvYWJyaXItc2VtLXNlbmhhLWRvbWljaWxpYXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY29tcGFuaGFtZW50by9hYnJpci1zZW0tc2VuaGEtZG9taWNpbGlhci9hYnJpci1zZW0tc2VuaGEtZG9taWNpbGlhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5sYWJlbEZpbHRyb3tcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyBcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwOyBcclxufVxyXG5cclxuLmljb25DYWxlbmRhciB7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcbiIsImlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxubGFiZWxGaWx0cm8ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWlucHV0IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4uaWNvbkNhbGVuZGFyIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/acompanhamento/abrir-sem-senha-domiciliar/abrir-sem-senha-domiciliar.page.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/abrir-sem-senha-domiciliar/abrir-sem-senha-domiciliar.page.ts ***!
  \****************************************************************************************************/
/*! exports provided: AbrirSemSenhaDomiciliarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbrirSemSenhaDomiciliarPage", function() { return AbrirSemSenhaDomiciliarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/Usuario.model */ "./src/app/model/Usuario.model.ts");
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/model/Operadora.model */ "./src/app/model/Operadora.model.ts");
/* harmony import */ var src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/config/constantes/constantes */ "./src/app/config/constantes/constantes.ts");
/* harmony import */ var src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/saudi-loading/saudi-loading.component */ "./src/app/components/saudi-loading/saudi-loading.component.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/saudi-toast/saudi-toast.component */ "./src/app/components/saudi-toast/saudi-toast.component.ts");
/* harmony import */ var src_app_services_prestador_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/prestador.service */ "./src/app/services/prestador.service.ts");
/* harmony import */ var src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/model/DominioCodigo.model */ "./src/app/model/DominioCodigo.model.ts");
/* harmony import */ var src_app_model_Prestador_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/model/Prestador.model */ "./src/app/model/Prestador.model.ts");
/* harmony import */ var src_app_model_AcompanhamentoMedico_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/model/AcompanhamentoMedico.model */ "./src/app/model/AcompanhamentoMedico.model.ts");
/* harmony import */ var src_app_model_SenhaAutorizacao_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/model/SenhaAutorizacao.model */ "./src/app/model/SenhaAutorizacao.model.ts");
/* harmony import */ var src_app_model_Beneficiario_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/model/Beneficiario.model */ "./src/app/model/Beneficiario.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_beneficiario_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/services/beneficiario.service */ "./src/app/services/beneficiario.service.ts");




















let AbrirSemSenhaDomiciliarPage = class AbrirSemSenhaDomiciliarPage {
    constructor(router, formBuilder, navCtrl, networkService, loading, storageService, toast, prestadorService, beneficiarioService, atrCtrl) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.networkService = networkService;
        this.loading = loading;
        this.storageService = storageService;
        this.toast = toast;
        this.prestadorService = prestadorService;
        this.beneficiarioService = beneficiarioService;
        this.atrCtrl = atrCtrl;
        this.showFiltros = false;
        this.usuarioComecouAlterarPerfil = false;
        this.listaPerfisFormulario = [];
        this.listaPrestadores = [];
        this.listaEstados = [];
        this.listaBeneficiario = [];
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_2__["locale"]('pt-br');
        let usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
        this.flgTrabalhaComSenha = usuario.operadora.flagUtilizaSenhaAcompMedico;
        this.flagGeraSenhaAleatoria = usuario.operadora.flagGeraSenhaAleatoria;
        this.formAbrirSemSenhaDomiciliar = this.formBuilder.group({
            perfilFormulario: [usuario.configFormulario.idConfigFormulario],
            nomeBeneficiario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            carteiraBeneficiario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            filtroPrestador: [''],
            prestador: [{
                    value: '',
                    disabled: true
                }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])]
        });
        this.listaPerfisFormulario = usuario.listaConfigFormulario;
    }
    ionViewWillEnter() {
        this.ngOnInit();
    }
    get perfilFormulario() {
        return this.formAbrirSemSenhaDomiciliar.get("perfilFormulario");
    }
    get carteiraBeneficiario() {
        return this.formAbrirSemSenhaDomiciliar.get('carteiraBeneficiario');
    }
    get nomeBeneficiario() {
        return this.formAbrirSemSenhaDomiciliar.get('nomeBeneficiario');
    }
    get prestador() {
        return this.formAbrirSemSenhaDomiciliar.get('prestador');
    }
    get filtroPrestador() {
        return this.formAbrirSemSenhaDomiciliar.get('filtroPrestador');
    }
    alteraPerfilFormulario() {
        if (!this.usuarioComecouAlterarPerfil) {
            this.limparBuscarPrestador();
            return;
        }
        this.usuarioComecouAlterarPerfil = false; // reseta
        let usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
        let confFormulario = this.listaPerfisFormulario.find(x => x.idConfigFormulario === this.perfilFormulario.value);
        usuario.configFormulario = confFormulario;
        localStorage.setItem('@appAcompanhamentoMedico:dadosUsuario', JSON.stringify(usuario));
        if (usuario.configFormulario.codDominio == src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_8__["default"].PERFIL_DOMICILIAR) {
            this.limparBuscarPrestador();
            return;
        }
        else {
            if (this.flgTrabalhaComSenha == 1) {
                this.router.navigateByUrl('/menu-principal/buscar-senha', { replaceUrl: true });
            }
            else {
                this.router.navigateByUrl('/menu-principal/abrir-sem-senha', { replaceUrl: true });
            }
        }
    }
    exibirPrestador() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.networkService.CheckNetworkStatus();
            if (this.networkService.NetworkStatus.value) {
                this.exibirPrestadorOnline();
            }
            else {
                this.exibirPrestadorOffline();
            }
        });
    }
    exibirPrestadorOnline() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.listaPrestadores = [];
            this.showFiltros = false;
            let operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_7__["Operadora"]();
            let prestador = new src_app_model_Prestador_model__WEBPACK_IMPORTED_MODULE_14__["Prestador"]();
            operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
            prestador.operadora = operadora;
            const loading = yield this.loading.presentLoading('Buscando prestador(es)...');
            this.prestadorService.getPrestadoresPorUf(prestador).subscribe((data) => {
                this.listaPrestadores = data;
                loading.dismiss();
            }, error => {
                this.exibirPrestadorOffline();
                loading.dismiss();
            });
        });
    }
    exibirPrestadorOffline() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.listaPrestadores = [];
            this.showFiltros = false;
            let operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_7__["Operadora"]();
            operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:operadoraUsuario'));
            const loading = yield this.loading.presentLoading('Buscando prestador(es)...');
            if (this.listaPrestadores.length > 0) {
                loading.dismiss();
                this.prestador.enable();
            }
            else {
                this.toast.errorToast("Nenhum prestador localizado.");
                loading.dismiss();
                this.listaPrestadores = [];
                this.showFiltros = false;
            }
        });
    }
    exibirFiltros() {
        this.showFiltros = true;
    }
    incluirAcompanhamento() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let flgPossuiAcomp = false;
            let usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_5__["Usuario"]();
            let configFormulario;
            usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
            //Busca formulario ativo para o usuário
            configFormulario = usuario.listaConfigFormulario.find(x => x.statusAtualConfigFormulario === 'ATIVO');
            if (configFormulario != null) {
                //Verifica se o usuário já possui acompanhamento medico cadastrado 
                this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_8__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then(items => {
                    if (items != null) {
                        let acompanhamentoMedico;
                        //Busca acompanhamento para benficiario, prestador e formulario
                        acompanhamentoMedico = items.find(x => x.beneficiario.carteiraBeneficiario === this.carteiraBeneficiario.value &&
                            x.prestador.idPrestador === this.prestador.value &&
                            x.configFormulario.idConfigFormulario === usuario.configFormulario.idConfigFormulario &&
                            (x.dataEncerramento === null || x.dataEncerramento === ''));
                        if (acompanhamentoMedico != null) {
                            //Exibe mensagem para confirmar se o usuario quer ou não abrir o acompanhamento existente
                            this.confirmarAbrirAcompanhamentoBeneficiarioExistente(acompanhamentoMedico);
                            flgPossuiAcomp = true;
                        }
                    }
                    if (!flgPossuiAcomp) {
                        this.abreNovoFormulario();
                    }
                });
            }
            else {
                this.toast.errorToast("Sr. Usuário, não existe configuração de formulário cadastrada. É necessário criar a configuração no SAUDI !");
            }
        });
    }
    confirmarAbrirAcompanhamentoBeneficiarioExistente(acompanhamentoMedico) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let flgAbrindo = false;
            let mensagem = "Já existe um acompanhamento para este Paciente neste Prestador. Abrir acompanhamento existente?";
            const alert = yield this.atrCtrl.create({
                header: 'Abrir Acompanhamento Médico',
                message: mensagem,
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: (blah) => { }
                    }, {
                        text: 'Confirmar',
                        handler: () => {
                            let navigationExtras = {
                                state: {
                                    acompanhamentoMedico,
                                    flgAbrindo
                                }
                            };
                            this.router.navigateByUrl('menu-principal/exibirFormulario', navigationExtras);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    abreNovoFormulario() {
        //abre formulario
        let flgAbrindo = true;
        let acompanhamentoMedico = new src_app_model_AcompanhamentoMedico_model__WEBPACK_IMPORTED_MODULE_15__["AcompanhamentoMedico"]();
        let senhaAutorizacao = new src_app_model_SenhaAutorizacao_model__WEBPACK_IMPORTED_MODULE_16__["SenhaAutorizacao"]();
        let beneficiario = new src_app_model_Beneficiario_model__WEBPACK_IMPORTED_MODULE_17__["Beneficiario"]();
        let prestador = new src_app_model_Prestador_model__WEBPACK_IMPORTED_MODULE_14__["Prestador"]();
        let usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_5__["Usuario"]();
        usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
        acompanhamentoMedico.operadora = usuario.operadora;
        acompanhamentoMedico.senhaAutorizacao = senhaAutorizacao;
        acompanhamentoMedico.dataAbertura = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD/MM/YYYY");
        acompanhamentoMedico.dispositivoMovel = usuario.dispositivoMovel;
        acompanhamentoMedico.motivoAlta = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_13__["DominioCodigo"]();
        beneficiario.carteiraBeneficiario = this.carteiraBeneficiario.value;
        beneficiario.nomeBeneficiario = this.nomeBeneficiario.value;
        senhaAutorizacao.beneficiario = beneficiario;
        acompanhamentoMedico.beneficiario = senhaAutorizacao.beneficiario;
        prestador = this.listaPrestadores.find(x => x.idPrestador === this.prestador.value);
        senhaAutorizacao.prestador = prestador;
        acompanhamentoMedico.prestador = senhaAutorizacao.prestador;
        acompanhamentoMedico.configFormulario = usuario.configFormulario;
        acompanhamentoMedico.usuario = usuario;
        acompanhamentoMedico.status = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_8__["default"].STATUS_ABERTO;
        acompanhamentoMedico.statusSincronismo = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_8__["default"].STATUS_PENDENTE;
        let navigationExtras = {
            state: {
                acompanhamentoMedico,
                flgAbrindo
            }
        };
        this.router.navigateByUrl('menu-principal/exibirFormDomiciliar', navigationExtras);
    }
    buscarPrestador() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.networkService.CheckNetworkStatus();
            if (this.networkService.NetworkStatus.value) {
                this.buscarPrestadorOnline();
            }
            else {
                this.buscarPrestadorOffline();
            }
        });
    }
    buscarSegurado() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let beneficiario = new src_app_model_Beneficiario_model__WEBPACK_IMPORTED_MODULE_17__["Beneficiario"]();
            let prestadorModel = new src_app_model_Prestador_model__WEBPACK_IMPORTED_MODULE_14__["Prestador"]();
            prestadorModel = this.listaPrestadores.find(x => x.idPrestador === this.prestador.value);
            beneficiario.carteiraBeneficiario = this.carteiraBeneficiario.value;
            beneficiario.nomeBeneficiario = this.nomeBeneficiario.value;
            //mensagem que ira aparecer ao clicar no botão buscar
            const loading = yield this.loading.presentLoading('Buscando segurado(os)...');
            this.beneficiarioService.getBeneficiarios(beneficiario).subscribe((data) => {
                if (data != null && data.length > 0) {
                    let lista = data;
                    loading.dismiss();
                    let navigationExtras = {
                        state: {
                            lista,
                            prestadorModel
                        }
                    };
                    this.router.navigateByUrl('menu-principal/listar-beneficiarios', navigationExtras);
                }
                else {
                    loading.dismiss();
                    this.toast.errorToast("Nenhum segurado encontrado.");
                }
            }, error => {
                this.toast.errorToast(error);
                loading.dismiss();
            });
        });
    }
    buscarPrestadorOnline() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.listaPrestadores = [];
            this.prestador.disable();
            let prestador = new src_app_model_Prestador_model__WEBPACK_IMPORTED_MODULE_14__["Prestador"]();
            prestador.codNomePrestador = this.filtroPrestador.value;
            prestador.operadora.codOperadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora')).codOperadora;
            const loading = yield this.loading.presentLoading('Buscando prestador(es)...');
            this.prestadorService.getPrestadores(prestador).subscribe((data) => {
                this.listaPrestadores = data;
                loading.dismiss();
                this.prestador.enable();
            }, error => {
                this.toast.errorToast(error);
                loading.dismiss();
            });
        });
    }
    buscarPrestadorOffline() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.listaPrestadores = [];
            this.prestador.disable();
            let codNomePrestador = this.filtroPrestador.value;
            let operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_7__["Operadora"]();
            operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:operadoraUsuario'));
            const loading = yield this.loading.presentLoading('Buscando prestador(es)...');
            operadora.listaPrestadores.forEach(item => {
                if (item.codPrestador.includes(codNomePrestador) || item.nomePrestador.includes(codNomePrestador.toUpperCase())) {
                    this.listaPrestadores.push(item);
                }
            });
            if (this.listaPrestadores.length > 0) {
                loading.dismiss();
                this.prestador.enable();
                if (this.listaPrestadores.length == 1) {
                    this.formAbrirSemSenhaDomiciliar.get("prestador").setValue(this.listaPrestadores[0].idPrestador);
                    this.exibirFiltros();
                }
            }
            else {
                this.toast.errorToast("Nenhum prestador localizado.");
                loading.dismiss();
            }
        });
    }
    limparBuscarPrestador() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.listaPrestadores = [];
            this.prestador.enable();
            this.prestador.reset();
            this.showFiltros = false;
            this.carteiraBeneficiario.reset();
            this.nomeBeneficiario.reset();
        });
    }
};
AbrirSemSenhaDomiciliarPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["NavController"] },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"] },
    { type: src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_9__["SaudiLoadingComponent"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"] },
    { type: src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_11__["SaudiToastComponent"] },
    { type: src_app_services_prestador_service__WEBPACK_IMPORTED_MODULE_12__["PrestadorService"] },
    { type: src_app_services_beneficiario_service__WEBPACK_IMPORTED_MODULE_19__["BeneficiarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["AlertController"] }
];
AbrirSemSenhaDomiciliarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-abrir-sem-senha-domiciliar',
        template: __webpack_require__(/*! raw-loader!./abrir-sem-senha-domiciliar.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/acompanhamento/abrir-sem-senha-domiciliar/abrir-sem-senha-domiciliar.page.html"),
        styles: [__webpack_require__(/*! ./abrir-sem-senha-domiciliar.page.scss */ "./src/app/pages/acompanhamento/abrir-sem-senha-domiciliar/abrir-sem-senha-domiciliar.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["NavController"],
        src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"],
        src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_9__["SaudiLoadingComponent"],
        src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"],
        src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_11__["SaudiToastComponent"],
        src_app_services_prestador_service__WEBPACK_IMPORTED_MODULE_12__["PrestadorService"],
        src_app_services_beneficiario_service__WEBPACK_IMPORTED_MODULE_19__["BeneficiarioService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["AlertController"]])
], AbrirSemSenhaDomiciliarPage);



/***/ }),

/***/ "./src/app/services/beneficiario.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/beneficiario.service.ts ***!
  \**************************************************/
/*! exports provided: BeneficiarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeneficiarioService", function() { return BeneficiarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config_config_service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config-service/config.service */ "./src/app/config/config-service/config.service.ts");





let BeneficiarioService = class BeneficiarioService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    constructor(http) {
        super(http);
        this.http = http;
        this.rootService = _config_config_service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"].rootSaudiServico;
        this.moduleService = "beneficiario";
    }
    getBeneficiarios(beneficiario) {
        return this.postData(JSON.parse(JSON.stringify(beneficiario)), 'getBeneficiarios');
    }
};
BeneficiarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
BeneficiarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], BeneficiarioService);



/***/ })

}]);
//# sourceMappingURL=pages-acompanhamento-abrir-sem-senha-domiciliar-abrir-sem-senha-domiciliar-module-es2015.js.map