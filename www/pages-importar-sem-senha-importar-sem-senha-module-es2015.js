(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-importar-sem-senha-importar-sem-senha-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/importar/sem-senha/importar-sem-senha.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/importar/sem-senha/importar-sem-senha.page.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"ion-text-center\">\r\n        <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/menu-principal\" text=\"\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-uppercase\">Importar Acompanhamento</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n        <ion-menu-button menuId=\"main-content\"></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <form [formGroup]=\"formImportar\">      \r\n        <ion-card *ngIf=\"!prestador\">      \r\n            <ion-item>\r\n            <ion-label position=\"floating\">Estado</ion-label>\r\n            <ion-select formControlName=\"estado\" interface=\"action-sheet\" placeholder=\"Selecione\" cancelText=\"Cancelar\" (ionChange)=\"exibirPrestador()\">\r\n                <ion-select-option *ngFor=\"let estado of listaEstados\" [value]=\"estado.seqDominio\">{{ estado.desDominio }}</ion-select-option>\r\n            </ion-select>                   \r\n            </ion-item> \r\n            <ion-item mode=\"md\" lines=\"none\" class=\"item-error\" *ngIf=\"(estado.dirty || estado.touched) && estado.hasError('required')\">\r\n            <ion-note color=\"warning\" class=\"ion-padding-horizontal\">Campo obrigatório\r\n                <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n            </ion-note>\r\n            </ion-item>       \r\n            <ng-container *ngIf=\"listaPrestadores.length > 0\">\r\n            <ion-item>\r\n                <ion-label position=\"floating\">Prestador</ion-label>\r\n                <ion-select formControlName=\"prestadorSelecionado\" interface=\"action-sheet\" placeholder=\"Selecione\" cancelText=\"Cancelar\" (ionChange)=\"exibirFiltros()\">\r\n                <ion-select-option *ngFor=\"let prestador of listaPrestadores\" [value]=\"prestador.idPrestador\">{{ prestador.nomePrestador }}</ion-select-option>\r\n                </ion-select> \r\n            </ion-item> \r\n            <ion-item mode=\"md\" lines=\"none\" class=\"item-error\" *ngIf=\"(prestadorSelecionado.dirty || prestadorSelecionado.touched) && prestadorSelecionado.hasError('required')\">\r\n                <ion-note color=\"warning\" class=\"ion-padding-horizontal\">Campo obrigatório\r\n                <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n                </ion-note>\r\n            </ion-item>              \r\n            </ng-container>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"showFiltros\">   \r\n            <ion-card-header>\r\n            <ion-card-title class=\"ion-text-center\">Opções de Busca</ion-card-title>\r\n            </ion-card-header>                        \r\n            <ion-item>\r\n                <ion-label position=\"floating\">Paciente</ion-label>\r\n                <ion-input type=\"text\" inputmode=\"text\" formControlName=\"filtroPaciente\" inputmode=\"text\"></ion-input>\r\n            </ion-item>            \r\n            <ion-item>\r\n                <ion-label position=\"floating\">Número da Carteira</ion-label>\r\n                <ion-input type=\"text\" inputmode=\"text\" formControlName=\"filtroNumeroCarteira\" inputmode=\"text\"></ion-input>\r\n            </ion-item>                      \r\n            <ion-row>\r\n            <ion-col size=\"12\" class=\"ion-text-center\">\r\n                <ion-button (click)=\"buscarAcompanhamento()\" expand=\"block\" size=\"large\">\r\n                Buscar\r\n                </ion-button>  \r\n            </ion-col>\r\n            </ion-row>               \r\n        </ion-card> \r\n    </form>\r\n</ion-content>      "

/***/ }),

/***/ "./src/app/pages/importar/sem-senha/importar-sem-senha-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/importar/sem-senha/importar-sem-senha-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ImportarSemSenhaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportarSemSenhaPageRoutingModule", function() { return ImportarSemSenhaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _importar_sem_senha_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./importar-sem-senha.page */ "./src/app/pages/importar/sem-senha/importar-sem-senha.page.ts");




const routes = [
    {
        path: '',
        component: _importar_sem_senha_page__WEBPACK_IMPORTED_MODULE_3__["ImportarSemSenhaPage"]
    }
];
let ImportarSemSenhaPageRoutingModule = class ImportarSemSenhaPageRoutingModule {
};
ImportarSemSenhaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ImportarSemSenhaPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/importar/sem-senha/importar-sem-senha.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/importar/sem-senha/importar-sem-senha.module.ts ***!
  \***********************************************************************/
/*! exports provided: ImportarSemSenhaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportarSemSenhaPageModule", function() { return ImportarSemSenhaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _importar_sem_senha_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./importar-sem-senha-routing.module */ "./src/app/pages/importar/sem-senha/importar-sem-senha-routing.module.ts");
/* harmony import */ var _importar_sem_senha_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./importar-sem-senha.page */ "./src/app/pages/importar/sem-senha/importar-sem-senha.page.ts");







let ImportarSemSenhaPageModule = class ImportarSemSenhaPageModule {
};
ImportarSemSenhaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _importar_sem_senha_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImportarSemSenhaPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_importar_sem_senha_page__WEBPACK_IMPORTED_MODULE_6__["ImportarSemSenhaPage"]]
    })
], ImportarSemSenhaPageModule);



/***/ }),

/***/ "./src/app/pages/importar/sem-senha/importar-sem-senha.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/importar/sem-senha/importar-sem-senha.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ltcG9ydGFyL3NlbS1zZW5oYS9pbXBvcnRhci1zZW0tc2VuaGEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/importar/sem-senha/importar-sem-senha.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/importar/sem-senha/importar-sem-senha.page.ts ***!
  \*********************************************************************/
/*! exports provided: ImportarSemSenhaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportarSemSenhaPage", function() { return ImportarSemSenhaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/saudi-loading/saudi-loading.component */ "./src/app/components/saudi-loading/saudi-loading.component.ts");
/* harmony import */ var src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/saudi-toast/saudi-toast.component */ "./src/app/components/saudi-toast/saudi-toast.component.ts");
/* harmony import */ var src_app_model_AcompanhamentoMedico_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/model/AcompanhamentoMedico.model */ "./src/app/model/AcompanhamentoMedico.model.ts");
/* harmony import */ var src_app_model_Beneficiario_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/model/Beneficiario.model */ "./src/app/model/Beneficiario.model.ts");
/* harmony import */ var src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/model/DominioCodigo.model */ "./src/app/model/DominioCodigo.model.ts");
/* harmony import */ var src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/model/Operadora.model */ "./src/app/model/Operadora.model.ts");
/* harmony import */ var src_app_model_Prestador_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/model/Prestador.model */ "./src/app/model/Prestador.model.ts");
/* harmony import */ var src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/model/Usuario.model */ "./src/app/model/Usuario.model.ts");
/* harmony import */ var src_app_services_acompanhamento_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/acompanhamento.service */ "./src/app/services/acompanhamento.service.ts");
/* harmony import */ var src_app_services_prestador_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/prestador.service */ "./src/app/services/prestador.service.ts");
















let ImportarSemSenhaPage = class ImportarSemSenhaPage {
    constructor(router, formBuilder, navCtrl, loading, toast, prestadorService, atrCtrl, acompanhamentoService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.toast = toast;
        this.prestadorService = prestadorService;
        this.atrCtrl = atrCtrl;
        this.acompanhamentoService = acompanhamentoService;
        this.showFiltros = false;
        this.listaPrestadores = [];
        this.listaEstados = [];
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_5__["locale"]('pt-br');
        this.listaEstados = [];
        this.buscarUf();
        this.formImportar = this.formBuilder.group({
            estado: [{ value: '', disabled: false }],
            prestadorSelecionado: [{ value: this.prestador ? this.prestador.idPrestador : '', disabled: true }, !this.prestador ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]) : ''],
            filtroPaciente: [''],
            filtroNumeroCarteira: ['']
        });
    }
    get estado() {
        return this.formImportar.get("estado");
    }
    get prestadorSelecionado() {
        return this.formImportar.get('prestadorSelecionado');
    }
    get filtroPaciente() {
        return this.formImportar.get('filtroPaciente');
    }
    get filtroNumeroCarteira() {
        return this.formImportar.get('filtroNumeroCarteira');
    }
    buscarUf() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_11__["Operadora"]();
            operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
            const loading = yield this.loading.presentLoading('Buscando estado(s)...');
            this.prestadorService.getUFPrestadores(operadora).subscribe((data) => {
                this.listaEstados = data;
                loading.dismiss();
                this.prestadorSelecionado.enable();
            }, error => {
                this.toast.errorToast(error);
                loading.dismiss();
            });
        });
    }
    exibirPrestador() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.listaPrestadores = [];
            this.showFiltros = false;
            let uf = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"]();
            let operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_11__["Operadora"]();
            let prestador = new src_app_model_Prestador_model__WEBPACK_IMPORTED_MODULE_12__["Prestador"]();
            operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
            uf.seqDominio = this.estado.value;
            prestador.operadora = operadora;
            prestador.uf = uf;
            const loading = yield this.loading.presentLoading('Buscando prestador(es)...');
            this.prestadorService.getPrestadoresPorUf(prestador).subscribe((data) => {
                this.listaPrestadores = data;
                loading.dismiss();
            }, error => {
                this.toast.errorToast(error);
                loading.dismiss();
                this.listaPrestadores = [];
                this.showFiltros = false;
            });
        });
    }
    exibirFiltros() {
        this.showFiltros = true;
    }
    buscarAcompanhamento() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let acompanhamentoMedico = new src_app_model_AcompanhamentoMedico_model__WEBPACK_IMPORTED_MODULE_8__["AcompanhamentoMedico"]();
            let beneficiario = new src_app_model_Beneficiario_model__WEBPACK_IMPORTED_MODULE_9__["Beneficiario"]();
            let prestador = new src_app_model_Prestador_model__WEBPACK_IMPORTED_MODULE_12__["Prestador"]();
            let usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_13__["Usuario"]();
            usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
            prestador.idPrestador = this.prestadorSelecionado.value;
            beneficiario.nomeBeneficiario = this.filtroPaciente.value;
            beneficiario.carteiraBeneficiario = this.filtroNumeroCarteira.value;
            acompanhamentoMedico.prestador = prestador;
            acompanhamentoMedico.beneficiario = beneficiario;
            acompanhamentoMedico.usuario = usuario;
            const loading = yield this.loading.presentLoading('Buscando acompanhamentos...');
            this.acompanhamentoService.getAcompanhamentosParaImportar(acompanhamentoMedico).subscribe((data) => {
                if (data != null && data != '') {
                    loading.dismiss();
                    let lista = data;
                    let navigationExtras = {
                        state: {
                            lista
                        }
                    };
                    this.navCtrl.navigateForward(['menu-principal/listar-acompanhamento'], navigationExtras);
                }
                else {
                    loading.dismiss();
                    this.toast.errorToast("Não existem acompanhamentos para os dados informados");
                }
            }, error => {
                this.toast.errorToast(error);
                loading.dismiss();
            });
        });
    }
};
ImportarSemSenhaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_6__["SaudiLoadingComponent"] },
    { type: src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_7__["SaudiToastComponent"] },
    { type: src_app_services_prestador_service__WEBPACK_IMPORTED_MODULE_15__["PrestadorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_services_acompanhamento_service__WEBPACK_IMPORTED_MODULE_14__["AcompanhamentoService"] }
];
ImportarSemSenhaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-importar-sem-senha',
        template: __webpack_require__(/*! raw-loader!./importar-sem-senha.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/importar/sem-senha/importar-sem-senha.page.html"),
        styles: [__webpack_require__(/*! ./importar-sem-senha.page.scss */ "./src/app/pages/importar/sem-senha/importar-sem-senha.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_6__["SaudiLoadingComponent"],
        src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_7__["SaudiToastComponent"],
        src_app_services_prestador_service__WEBPACK_IMPORTED_MODULE_15__["PrestadorService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        src_app_services_acompanhamento_service__WEBPACK_IMPORTED_MODULE_14__["AcompanhamentoService"]])
], ImportarSemSenhaPage);



/***/ })

}]);
//# sourceMappingURL=pages-importar-sem-senha-importar-sem-senha-module-es2015.js.map