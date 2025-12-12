(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-acompanhamento-abrir-sem-senha-abrir-sem-senha-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/acompanhamento/abrir-sem-senha/abrir-sem-senha.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/acompanhamento/abrir-sem-senha/abrir-sem-senha.page.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"ion-text-center\">\r\n        <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/menu-principal\" text=\"\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-uppercase\">Abrir Acompanhamento</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n        <ion-menu-button menuId=\"main-content\"></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <form [formGroup]=\"formAbrirSemSenha\">    \r\n      <ion-card *ngIf=\"!prestador\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Perfil Formulário</ion-label>\r\n            <ion-select formControlName=\"perfilFormulario\" interface=\"action-sheet\" placeholder=\"Selecione\" cancelText=\"Cancelar\" okText=\"Ok\" (ionChange)=\"alteraPerfilFormulario()\" (ionFocus)=\"usuarioComecouAlterarPerfil = true\">\r\n              <ion-select-option *ngFor=\"let perfil of listaPerfisFormulario\" [value]=\"perfil.idConfigFormulario\">{{ perfil.nomeConfigFormulario }}</ion-select-option>\r\n            </ion-select>      \r\n        </ion-item> \r\n      </ion-card>\r\n      <ion-card *ngIf=\"!prestador\">      \r\n        <ion-item>\r\n          <ion-label position=\"floating\">Estado</ion-label>\r\n          <ion-select formControlName=\"estado\" interface=\"action-sheet\" placeholder=\"Selecione\" cancelText=\"Cancelar\" (ionChange)=\"exibirPrestador()\">\r\n            <ion-select-option *ngFor=\"let estado of listaEstados\" [value]=\"estado.seqDominio\">{{ estado.desDominio }}</ion-select-option>\r\n          </ion-select>                   \r\n        </ion-item> \r\n        <ion-item mode=\"md\" lines=\"none\" class=\"item-error\" *ngIf=\"(estado.dirty || estado.touched) && estado.hasError('required')\">\r\n          <ion-note color=\"warning\" class=\"ion-padding-horizontal\">Campo obrigatório\r\n            <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n          </ion-note>\r\n        </ion-item>       \r\n        <ng-container *ngIf=\"listaPrestadores.length > 0\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">Prestador</ion-label>\r\n            <ion-select formControlName=\"prestadorSelecionado\" interface=\"action-sheet\" placeholder=\"Selecione\" cancelText=\"Cancelar\" (ionChange)=\"exibirFiltros()\">\r\n              <ion-select-option *ngFor=\"let prestador of listaPrestadores\" [value]=\"prestador.idPrestador\">{{ prestador.nomePrestador }}</ion-select-option>\r\n            </ion-select> \r\n          </ion-item> \r\n          <ion-item mode=\"md\" lines=\"none\" class=\"item-error\" *ngIf=\"(prestadorSelecionado.dirty || prestadorSelecionado.touched) && prestadorSelecionado.hasError('required')\">\r\n            <ion-note color=\"warning\" class=\"ion-padding-horizontal\">Campo obrigatório\r\n              <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n            </ion-note>\r\n          </ion-item>              \r\n        </ng-container>\r\n      </ion-card>\r\n      <ion-card *ngIf=\"showFiltros\">       \r\n        <ion-item *ngIf=\"prestador\">\r\n          <ion-label>\r\n            Prestador\r\n            <br>\r\n            <span [innerHTML]=\"prestador.concatCodNomePrestador\"></span>\r\n          </ion-label>          \r\n        </ion-item>\r\n        <ion-item *ngIf=\"prestador\">\r\n          <ion-label position=\"floating\">Senha</ion-label>\r\n          <ion-input type=\"text\" inputmode=\"text\" formControlName=\"senha\" inputmode=\"text\"></ion-input>\r\n        </ion-item>\r\n        <ion-item mode=\"md\" lines=\"none\" class=\"item-error\" *ngIf=\"((senha.dirty || senha.touched) && senha.hasError('required')) || nomeBeneficiario.hasError('incorrect')\">\r\n          <ion-note color=\"warning\" class=\"ion-padding-horizontal\">Campo obrigatório\r\n            <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n          </ion-note>\r\n        </ion-item>        \r\n        <ion-item>\r\n          <ion-label position=\"floating\">Nome do Paciente</ion-label>\r\n          <ion-input type=\"text\" inputmode=\"text\" formControlName=\"nomeBeneficiario\" inputmode=\"text\"></ion-input>\r\n        </ion-item>\r\n        <ion-item mode=\"md\" lines=\"none\" class=\"item-error\" *ngIf=\"((nomeBeneficiario.dirty || nomeBeneficiario.touched) && nomeBeneficiario.hasError('required')) || nomeBeneficiario.hasError('incorrect')\">\r\n          <ion-note color=\"warning\" class=\"ion-padding-horizontal\">Campo obrigatório\r\n            <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n          </ion-note>\r\n        </ion-item>                   \r\n        <ion-item>\r\n          <ion-label position=\"floating\">Número da Carteira do Paciente</ion-label>\r\n          <ion-input type=\"text\" inputmode=\"text\" formControlName=\"carteiraBeneficiario\" inputmode=\"text\"></ion-input>\r\n        </ion-item>\r\n        <ion-item mode=\"md\" lines=\"none\" class=\"item-error\" *ngIf=\"((carteiraBeneficiario.dirty || carteiraBeneficiario.touched) && carteiraBeneficiario.hasError('required')) || carteiraBeneficiario.hasError('incorrect')\">\r\n          <ion-note color=\"warning\" class=\"ion-padding-horizontal\">Campo obrigatório\r\n            <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n          </ion-note>\r\n        </ion-item> \r\n        <ion-item>\r\n          <ion-label position=\"floating\">Data de Internação</ion-label>\r\n          <ion-input readonly=\"true\" clearInput (click)=\"abrirCalendarioDataInternacao($event)\" formControlName=\"dataInternacao\"></ion-input>\r\n          <ion-icon name=\"calendar\" slot=\"end\" class=\"iconCalendar\" (click)=\"abrirCalendarioDataInternacao($event)\"></ion-icon>\r\n        </ion-item>        \r\n        <ion-item mode=\"md\" lines=\"none\" class=\"item-error\" *ngIf=\"((dataInternacao.dirty || dataInternacao.touched) && dataInternacao.hasError('required')) || dataInternacao.hasError('incorrect')\">\r\n          <ion-note color=\"warning\" class=\"ion-padding-horizontal\">Campo obrigatório\r\n            <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n          </ion-note>\r\n        </ion-item> \r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-button (click)=\"incluirAcompanhamento()\" [disabled]=\"!formAbrirSemSenha.valid\" expand=\"block\" size=\"large\">\r\n              Salvar\r\n            </ion-button>  \r\n          </ion-col>\r\n        </ion-row>               \r\n      </ion-card>\r\n    </form>\r\n</ion-content>      "

/***/ }),

/***/ "./src/app/pages/acompanhamento/abrir-sem-senha/abrir-sem-senha-routing.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/abrir-sem-senha/abrir-sem-senha-routing.module.ts ***!
  \****************************************************************************************/
/*! exports provided: AbrirSemSenhaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbrirSemSenhaPageRoutingModule", function() { return AbrirSemSenhaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _abrir_sem_senha_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abrir-sem-senha.page */ "./src/app/pages/acompanhamento/abrir-sem-senha/abrir-sem-senha.page.ts");




const routes = [
    {
        path: '',
        component: _abrir_sem_senha_page__WEBPACK_IMPORTED_MODULE_3__["AbrirSemSenhaPage"]
    }
];
let AbrirSemSenhaPageRoutingModule = class AbrirSemSenhaPageRoutingModule {
};
AbrirSemSenhaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AbrirSemSenhaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/acompanhamento/abrir-sem-senha/abrir-sem-senha.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/abrir-sem-senha/abrir-sem-senha.module.ts ***!
  \********************************************************************************/
/*! exports provided: AbrirSemSenhaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbrirSemSenhaPageModule", function() { return AbrirSemSenhaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _abrir_sem_senha_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./abrir-sem-senha-routing.module */ "./src/app/pages/acompanhamento/abrir-sem-senha/abrir-sem-senha-routing.module.ts");
/* harmony import */ var _abrir_sem_senha_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./abrir-sem-senha.page */ "./src/app/pages/acompanhamento/abrir-sem-senha/abrir-sem-senha.page.ts");







let AbrirSemSenhaPageModule = class AbrirSemSenhaPageModule {
};
AbrirSemSenhaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _abrir_sem_senha_routing_module__WEBPACK_IMPORTED_MODULE_5__["AbrirSemSenhaPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_abrir_sem_senha_page__WEBPACK_IMPORTED_MODULE_6__["AbrirSemSenhaPage"]]
    })
], AbrirSemSenhaPageModule);



/***/ }),

/***/ "./src/app/pages/acompanhamento/abrir-sem-senha/abrir-sem-senha.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/abrir-sem-senha/abrir-sem-senha.page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fjb21wYW5oYW1lbnRvL2FicmlyLXNlbS1zZW5oYS9hYnJpci1zZW0tc2VuaGEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/acompanhamento/abrir-sem-senha/abrir-sem-senha.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/abrir-sem-senha/abrir-sem-senha.page.ts ***!
  \******************************************************************************/
/*! exports provided: AbrirSemSenhaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbrirSemSenhaPage", function() { return AbrirSemSenhaPage; });
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
/* harmony import */ var src_app_components_popover_calendario_popover_calendario_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/components/popover-calendario/popover-calendario.component */ "./src/app/components/popover-calendario/popover-calendario.component.ts");




















let AbrirSemSenhaPage = class AbrirSemSenhaPage {
    constructor(router, formBuilder, networkService, loading, storageService, toast, prestadorService, atrCtrl, popover) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.networkService = networkService;
        this.loading = loading;
        this.storageService = storageService;
        this.toast = toast;
        this.prestadorService = prestadorService;
        this.atrCtrl = atrCtrl;
        this.popover = popover;
        this.showFiltros = false;
        this.listaPerfisFormulario = [];
        this.listaPrestadores = [];
        this.listaEstados = [];
        this.usuarioComecouAlterarPerfil = false;
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_2__["locale"]('pt-br');
        let usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
        this.flgTrabalhaComSenha = usuario.operadora.flagUtilizaSenhaAcompMedico;
        this.flagGeraSenhaAleatoria = usuario.operadora.flagGeraSenhaAleatoria;
        let senha = '';
        //let getNav = this.router.getCurrentNavigation()
        //if (getNav.extras.state) {            
        //    this.prestador = getNav.extras.state.prestador 
        //    senha = getNav.extras.state.senha   
        //    this.showFiltros = true               
        // }
        this.formAbrirSemSenha = this.formBuilder.group({
            perfilFormulario: [usuario.configFormulario.idConfigFormulario],
            dataInternacao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            carteiraBeneficiario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            nomeBeneficiario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            estado: [{ value: '', disabled: false }],
            prestadorSelecionado: [{ value: this.prestador ? this.prestador.idPrestador : '', disabled: true }, !this.prestador ? _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]) : ''],
            senha: [senha, this.prestador ? _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]) : '']
        });
        this.listaPerfisFormulario = usuario.listaConfigFormulario;
        this.listaEstados = [];
        this.buscarUf();
        //Se operadora não utiliza senha ou utiliza senha, mas gera senha, entao gera senha aleatoria e preenche a variavel de senha
        if (this.flgTrabalhaComSenha == 0 || (this.flgTrabalhaComSenha == 1 && this.flagGeraSenhaAleatoria == 1)) {
            let dataAtual = new Date();
            this.formAbrirSemSenha.get("senha").setValue(dataAtual.getFullYear() + "" + ('0' + (dataAtual.getMonth() + 1)).slice(-2) + "" + ('0' + dataAtual.getDate()).slice(-2) + "" + ('0' + dataAtual.getHours()).slice(-2) + "" + ('0' + dataAtual.getMinutes()).slice(-2) + "" + ('0' + dataAtual.getSeconds()).slice(-2) + "" + dataAtual.getMilliseconds());
            this.senha.disable();
        }
    }
    ionViewWillEnter() {
        this.ngOnInit();
    }
    get perfilFormulario() {
        return this.formAbrirSemSenha.get("perfilFormulario");
    }
    get estado() {
        return this.formAbrirSemSenha.get("estado");
    }
    get senha() {
        return this.formAbrirSemSenha.get('senha');
    }
    get dataInternacao() {
        return this.formAbrirSemSenha.get('dataInternacao');
    }
    get carteiraBeneficiario() {
        return this.formAbrirSemSenha.get('carteiraBeneficiario');
    }
    get nomeBeneficiario() {
        return this.formAbrirSemSenha.get('nomeBeneficiario');
    }
    get prestadorSelecionado() {
        return this.formAbrirSemSenha.get('prestadorSelecionado');
    }
    alteraPerfilFormulario() {
        if (!this.usuarioComecouAlterarPerfil) {
            return;
        }
        this.usuarioComecouAlterarPerfil = false; // reseta
        let usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
        let confFormulario = this.listaPerfisFormulario.find(x => x.idConfigFormulario === this.perfilFormulario.value);
        usuario.configFormulario = confFormulario;
        localStorage.setItem('@appAcompanhamentoMedico:dadosUsuario', JSON.stringify(usuario));
        if (usuario.configFormulario.codDominio == src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_8__["default"].PERFIL_DOMICILIAR) {
            this.router.navigateByUrl('/menu-principal/abrir-sem-senha-domiciliar', { replaceUrl: true });
        }
        else {
            if (this.flgTrabalhaComSenha == 1) {
                this.router.navigateByUrl('/menu-principal/buscar-senha', { replaceUrl: true });
            }
            else {
                return;
            }
        }
    }
    buscarUf() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.networkService.CheckNetworkStatus();
            if (this.networkService.NetworkStatus.value) {
                this.buscarUfOnline();
            }
            else {
                this.buscarUfOffline();
            }
        });
    }
    buscarUfOnline() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_7__["Operadora"]();
            operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
            const loading = yield this.loading.presentLoading('Buscando estado(s)...');
            this.prestadorService.getUFPrestadores(operadora).subscribe((data) => {
                this.listaEstados = data;
                loading.dismiss();
                this.prestadorSelecionado.enable();
            }, (error) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this.buscarUfOffline();
                loading.dismiss();
            }));
        });
    }
    buscarUfOffline() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loading.presentLoading('Buscando estado(s)...');
            this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_8__["default"].STORAGE_UF).then(items => {
                if (items != null) {
                    this.listaEstados = items;
                    this.prestadorSelecionado.enable();
                    loading.dismiss();
                }
                else {
                    this.listaEstados = [];
                    this.prestadorSelecionado.disable();
                    loading.dismiss();
                    this.toast.errorToast("Nenhum Estado localizado.");
                }
            }, error => {
                this.toast.errorToast(error);
                loading.dismiss();
            });
        });
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
            let uf = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_13__["DominioCodigo"]();
            let operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_7__["Operadora"]();
            let prestador = new src_app_model_Prestador_model__WEBPACK_IMPORTED_MODULE_14__["Prestador"]();
            operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
            uf.seqDominio = this.estado.value;
            prestador.operadora = operadora;
            prestador.uf = uf;
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
            let uf = this.estado.value;
            let operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_7__["Operadora"]();
            operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:operadoraUsuario'));
            const loading = yield this.loading.presentLoading('Buscando prestador(es)...');
            operadora.listaPrestadores.forEach(item => {
                if (item.uf.seqDominio == uf) {
                    this.listaPrestadores.push(item);
                }
            });
            if (this.listaPrestadores.length > 0) {
                loading.dismiss();
                this.prestadorSelecionado.enable();
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
                            x.prestador.idPrestador === this.prestadorSelecionado.value &&
                            x.dataInternacao == moment__WEBPACK_IMPORTED_MODULE_2__(this.dataInternacao.value).format("DD/MM/YYYY") &&
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
        let dataInternacao = this.dataInternacao.value;
        let usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_5__["Usuario"]();
        usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
        acompanhamentoMedico.operadora = usuario.operadora;
        senhaAutorizacao.senha = this.senha.value;
        senhaAutorizacao.dataInternacao = dataInternacao;
        acompanhamentoMedico.senhaAutorizacao = senhaAutorizacao;
        acompanhamentoMedico.dataInternacao = dataInternacao;
        acompanhamentoMedico.dataAbertura = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD/MM/YYYY");
        acompanhamentoMedico.dispositivoMovel = usuario.dispositivoMovel;
        acompanhamentoMedico.motivoAlta = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_13__["DominioCodigo"]();
        beneficiario.carteiraBeneficiario = this.carteiraBeneficiario.value;
        beneficiario.nomeBeneficiario = this.nomeBeneficiario.value;
        senhaAutorizacao.beneficiario = beneficiario;
        acompanhamentoMedico.beneficiario = senhaAutorizacao.beneficiario;
        if (this.prestador) {
            prestador = this.prestador;
        }
        else {
            prestador = this.listaPrestadores.find(x => x.idPrestador === this.prestadorSelecionado.value);
        }
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
        this.router.navigateByUrl('menu-principal/exibirFormulario', navigationExtras);
    }
    abrirCalendarioDataInternacao(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let diaFinal;
            if (this.dataInternacao.value != null && this.dataInternacao.value != '') {
                diaFinal = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(this.dataInternacao.value, "DD/MM/YYYY").toISOString());
            }
            else {
                diaFinal = new Date();
            }
            const pop = yield this.popover.create({
                component: src_app_components_popover_calendario_popover_calendario_component__WEBPACK_IMPORTED_MODULE_19__["PopoverCalendarioComponent"],
                event: ev,
                cssClass: 'popover-custon',
                componentProps: {
                    titulo: 'Data de Internação',
                    data: diaFinal
                },
                translucent: true
            });
            pop.onDidDismiss().then((result) => {
                if (result.data) {
                    this.formAbrirSemSenha.get("dataInternacao").setValue(moment__WEBPACK_IMPORTED_MODULE_2__(result.data).format("DD/MM/YYYY"));
                }
            });
            return yield pop.present();
        });
    }
};
AbrirSemSenhaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"] },
    { type: src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_9__["SaudiLoadingComponent"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"] },
    { type: src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_11__["SaudiToastComponent"] },
    { type: src_app_services_prestador_service__WEBPACK_IMPORTED_MODULE_12__["PrestadorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["PopoverController"] }
];
AbrirSemSenhaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-abrir-sem-senha',
        template: __webpack_require__(/*! raw-loader!./abrir-sem-senha.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/acompanhamento/abrir-sem-senha/abrir-sem-senha.page.html"),
        styles: [__webpack_require__(/*! ./abrir-sem-senha.page.scss */ "./src/app/pages/acompanhamento/abrir-sem-senha/abrir-sem-senha.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        src_app_services_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"],
        src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_9__["SaudiLoadingComponent"],
        src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"],
        src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_11__["SaudiToastComponent"],
        src_app_services_prestador_service__WEBPACK_IMPORTED_MODULE_12__["PrestadorService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_18__["PopoverController"]])
], AbrirSemSenhaPage);



/***/ })

}]);
//# sourceMappingURL=pages-acompanhamento-abrir-sem-senha-abrir-sem-senha-module-es2015.js.map