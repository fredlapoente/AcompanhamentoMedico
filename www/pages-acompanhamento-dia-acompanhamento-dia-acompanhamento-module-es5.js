(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-acompanhamento-dia-acompanhamento-dia-acompanhamento-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/acompanhamento/dia-acompanhamento/dia-acompanhamento.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/acompanhamento/dia-acompanhamento/dia-acompanhamento.page.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"ion-text-center\">\r\n      <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/menu-principal\" text=\"\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title class=\"ion-text-uppercase\">Dia Acompanhamento</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n      <ion-menu-button menuId=\"main-content\"></ion-menu-button>\r\n      </ion-buttons>\r\n  </ion-toolbar>   \r\n</ion-header>\r\n<ion-content>\r\n  <form [formGroup]=\"formAcompanhamentoDia\">\r\n      <ion-card>   \r\n          <ion-card-header>\r\n            <ion-card-title class=\"ion-text-center\">Informações do Paciente</ion-card-title>\r\n          </ion-card-header>        \r\n          <ion-item>\r\n              <ion-label>\r\n                  Paciente:\r\n                  <br>\r\n                  <span [innerHTML]=\"acompanhamentoMedico.senhaAutorizacao.beneficiario.nomeBeneficiario\"></span>\r\n              </ion-label>                \r\n          </ion-item>\r\n          <ion-item>\r\n              <ion-label>\r\n                  Dia de Acompanhamento:\r\n                  <br>\r\n                  <span [innerHTML]=\"acompanhamentoMedicoDia.diaAcompanhamento\"></span>\r\n              </ion-label>                \r\n          </ion-item>\r\n      </ion-card>\r\n      <ion-card>  \r\n          <ion-card-header>\r\n              <ion-card-title class=\"ion-text-center\">Resumo do dia</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-item>\r\n              <ion-textarea formControlName=\"resumoDia\" rows=\"5\" cols=\"20\" [readonly]=\"isReadOnly\"></ion-textarea>               \r\n          </ion-item>\r\n          <ion-item mode=\"md\" lines=\"none\" class=\"item-error\" *ngIf=\"((resumoDia.dirty || resumoDia.touched) && resumoDia.hasError('required'))\">\r\n              <ion-note color=\"warning\" class=\"ion-padding-horizontal\">Campo obrigatório\r\n                  <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n              </ion-note>\r\n          </ion-item>          \r\n      </ion-card>\r\n      <ion-card>     \r\n          <ion-card-header>\r\n              <ion-card-title class=\"ion-text-center\">Documentos</ion-card-title>\r\n          </ion-card-header>\r\n          <ion-row>\r\n              <ion-col size=\"12\" class=\"ion-text-center\">\r\n                <ion-button expand=\"block\" size=\"large\" (click)=\"abrirTelaAnexo()\">Anexos</ion-button>  \r\n              </ion-col>\r\n            </ion-row>\r\n      </ion-card>\r\n      <ng-container *ngFor=\"let grupo of acompanhamentoMedico.configFormulario.listaGrupoConfigFormulario; let i = index\">\r\n          <ion-card button=\"true\" class=\"stats-card\">\r\n            <ion-card-header (click)=\"exibirDados(i)\">\r\n              <ion-row>\r\n                <ion-col size=\"10\" class=\"ion-text-center ion-no-padding ion-no-margin\">\r\n                  <ion-card-title>{{grupo.desGrupoConfigFormulario}}</ion-card-title>\r\n                </ion-col>\r\n                <ion-col size=\"2\" class=\"ion-text-right ion-no-margin ion-no-padding\">\r\n                  <ion-button size=\"small\" fill=\"clear\" class=\"ion-no-padding\">\r\n                    <ion-icon *ngIf=\"!grupo.open\" slot=\"icon-only\" name=\"ios-arrow-down\">\r\n                    </ion-icon>\r\n                    <ion-icon *ngIf=\"grupo.open\" slot=\"icon-only\" name=\"ios-arrow-up\">\r\n                    </ion-icon>\r\n                  </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n              <ion-row *ngIf=\"!validaCamposObrigatorios(grupo)\">\r\n                <ion-col size=\"12\">\r\n                    <ion-note color=\"warning\">Campo(s) Obrigatório(s) não preenchido(s)\r\n                        <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n                    </ion-note>\r\n                </ion-col>\r\n              </ion-row>                \r\n            </ion-card-header>\r\n            <ion-card-content class=\"ion-padding\" *ngIf=\"grupo.open\">               \r\n                <ion-list *ngFor=\"let item of grupo.listaItemGrupoConfigFormulario\">\r\n                  <ion-row>\r\n                    <ion-col size=\"12\" class=\"ion-text-left text-font-size-18\">\r\n                      <ion-label position=\"stacked\">{{item.desItemGrupoConfigFormulario}}</ion-label>\r\n                    </ion-col>                      \r\n                  </ion-row>                                       \r\n                  <div *ngFor=\"let dado of item.listaDadoItemGrupoConfigFormulario\">\r\n                    <dynamic-forms [dado]=\"dado\" [form]=\"formAcompanhamentoDia\" [statusAcompanhamento]=\"acompanhamentoMedico.status\"></dynamic-forms>\r\n                  </div>\r\n                </ion-list>                    \r\n            </ion-card-content>                     \r\n          </ion-card>\r\n      </ng-container>\r\n      <ion-row>\r\n          <ion-col size=\"12\" class=\"ion-text-center\">\r\n              <ion-button expand=\"block\" size=\"large\" (click)=\"salvar()\" [disabled]=\"acompanhamentoMedico.status === 'ENCERRADO'\">Salvar</ion-button>\r\n          </ion-col>\r\n      </ion-row>\r\n  </form>\r\n</ion-content>            "

/***/ }),

/***/ "./src/app/pages/acompanhamento/dia-acompanhamento/dia-acompanhamento-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/dia-acompanhamento/dia-acompanhamento-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: DiaAcompanhamentoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaAcompanhamentoPageRoutingModule", function() { return DiaAcompanhamentoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dia_acompanhamento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dia-acompanhamento.page */ "./src/app/pages/acompanhamento/dia-acompanhamento/dia-acompanhamento.page.ts");




var routes = [
    {
        path: '',
        component: _dia_acompanhamento_page__WEBPACK_IMPORTED_MODULE_3__["DiaAcompanhamentoPage"]
    }
];
var DiaAcompanhamentoPageRoutingModule = /** @class */ (function () {
    function DiaAcompanhamentoPageRoutingModule() {
    }
    DiaAcompanhamentoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], DiaAcompanhamentoPageRoutingModule);
    return DiaAcompanhamentoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/acompanhamento/dia-acompanhamento/dia-acompanhamento.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/dia-acompanhamento/dia-acompanhamento.module.ts ***!
  \**************************************************************************************/
/*! exports provided: DiaAcompanhamentoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaAcompanhamentoPageModule", function() { return DiaAcompanhamentoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dia_acompanhamento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dia-acompanhamento-routing.module */ "./src/app/pages/acompanhamento/dia-acompanhamento/dia-acompanhamento-routing.module.ts");
/* harmony import */ var _dia_acompanhamento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dia-acompanhamento.page */ "./src/app/pages/acompanhamento/dia-acompanhamento/dia-acompanhamento.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var DiaAcompanhamentoPageModule = /** @class */ (function () {
    function DiaAcompanhamentoPageModule() {
    }
    DiaAcompanhamentoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _dia_acompanhamento_routing_module__WEBPACK_IMPORTED_MODULE_5__["DiaAcompanhamentoPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_dia_acompanhamento_page__WEBPACK_IMPORTED_MODULE_6__["DiaAcompanhamentoPage"]]
        })
    ], DiaAcompanhamentoPageModule);
    return DiaAcompanhamentoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/acompanhamento/dia-acompanhamento/dia-acompanhamento.page.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/dia-acompanhamento/dia-acompanhamento.page.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fjb21wYW5oYW1lbnRvL2RpYS1hY29tcGFuaGFtZW50by9kaWEtYWNvbXBhbmhhbWVudG8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/acompanhamento/dia-acompanhamento/dia-acompanhamento.page.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/dia-acompanhamento/dia-acompanhamento.page.ts ***!
  \************************************************************************************/
/*! exports provided: DiaAcompanhamentoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaAcompanhamentoPage", function() { return DiaAcompanhamentoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/saudi-toast/saudi-toast.component */ "./src/app/components/saudi-toast/saudi-toast.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_AcompanhamentoMedico_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/model/AcompanhamentoMedico.model */ "./src/app/model/AcompanhamentoMedico.model.ts");
/* harmony import */ var src_app_model_AcompanhamentoMedicoDia_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/model/AcompanhamentoMedicoDia.model */ "./src/app/model/AcompanhamentoMedicoDia.model.ts");
/* harmony import */ var src_app_model_AcompanhamentoMedicoDado_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/model/AcompanhamentoMedicoDado.model */ "./src/app/model/AcompanhamentoMedicoDado.model.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/config/constantes/constantes */ "./src/app/config/constantes/constantes.ts");
/* harmony import */ var src_app_model_AcompanhamentoMedicoItem_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/model/AcompanhamentoMedicoItem.model */ "./src/app/model/AcompanhamentoMedicoItem.model.ts");
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ "./node_modules/@awesome-cordova-plugins/geolocation/ngx/index.js");














var DiaAcompanhamentoPage = /** @class */ (function () {
    function DiaAcompanhamentoPage(router, formBuilder, navCtrl, toast, popover, storageService, geolocation) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.popover = popover;
        this.storageService = storageService;
        this.geolocation = geolocation;
        this.listaMedicamentosAcompanhamento = [];
        this.isReadOnly = false;
    }
    DiaAcompanhamentoPage.prototype.ngOnInit = function () {
        moment__WEBPACK_IMPORTED_MODULE_2__["locale"]('pt-br');
        this.exibeFormulario();
        this.getCurrentCoordinates();
    };
    Object.defineProperty(DiaAcompanhamentoPage.prototype, "resumoDia", {
        get: function () {
            return this.formAcompanhamentoDia.get('resumoDia');
        },
        enumerable: true,
        configurable: true
    });
    DiaAcompanhamentoPage.prototype.exibeFormulario = function () {
        var getNav = this.router.getCurrentNavigation();
        this.acompanhamentoMedico = new src_app_model_AcompanhamentoMedico_model__WEBPACK_IMPORTED_MODULE_7__["AcompanhamentoMedico"]();
        this.acompanhamentoMedicoDia = new src_app_model_AcompanhamentoMedicoDia_model__WEBPACK_IMPORTED_MODULE_8__["AcompanhamentoMedicoDia"]();
        if (getNav.extras.state) {
            this.acompanhamentoMedico = getNav.extras.state.acompanhamentoMedico;
            this.acompanhamentoMedicoDia = getNav.extras.state.acompanhamentoMedicoDia;
        }
        else {
            this.toast.errorToast('Ocorreu um erro inesperado, por favor tente novamente.');
            this.navCtrl.navigateBack('menu-principal/exibirFormulario');
        }
        this.formAcompanhamentoDia = this.formBuilder.group({
            resumoDia: [this.acompanhamentoMedicoDia.resumoDia || '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
        });
        if (this.acompanhamentoMedico.status === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STATUS_ENCERRADO) {
            this.isReadOnly = true;
        }
        this.montarControleCamposDynamicForm();
        this.setValoresCampos();
    };
    DiaAcompanhamentoPage.prototype.montarControleCamposDynamicForm = function () {
        for (var _i = 0, _a = this.acompanhamentoMedico.configFormulario.listaGrupoConfigFormulario; _i < _a.length; _i++) {
            var grupo = _a[_i];
            for (var _b = 0, _c = grupo.listaItemGrupoConfigFormulario; _b < _c.length; _b++) {
                var item = _c[_b];
                for (var _d = 0, _e = item.listaDadoItemGrupoConfigFormulario; _d < _e.length; _d++) {
                    var dado = _e[_d];
                    var validacoes = [];
                    this.formAcompanhamentoDia.addControl(dado.idDadoItemGrupoConfigFormularioModel.toString(), new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]());
                    if (dado.flgObrigatorio) {
                        validacoes.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
                    }
                    if (dado.tamanhoCampo && dado.tamanhoCampo > 0) {
                        validacoes.push(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(dado.tamanhoCampo));
                    }
                    this.formAcompanhamentoDia.controls[dado.idDadoItemGrupoConfigFormularioModel.toString()].setValidators(validacoes);
                    if (this.acompanhamentoMedico.status === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STATUS_ENCERRADO) {
                        this.formAcompanhamentoDia.get(dado.idDadoItemGrupoConfigFormularioModel.toString()).disable();
                    }
                }
            }
        }
    };
    DiaAcompanhamentoPage.prototype.setValoresCampos = function () {
        for (var _i = 0, _a = this.acompanhamentoMedicoDia.listaAcompanhamentoDado; _i < _a.length; _i++) {
            var dado = _a[_i];
            if (dado.dadoItemGrupoConfigFormulario.tipoDado == 'SELEÇÃO MULTIPLA') {
                if (dado.valorDado && dado.valorDado != '') {
                    var arrayDado = [];
                    var atributos = dado.valorDado.split("|");
                    for (var _b = 0, atributos_1 = atributos; _b < atributos_1.length; _b++) {
                        var item = atributos_1[_b];
                        arrayDado.push(item);
                    }
                    this.formAcompanhamentoDia.get(dado.dadoItemGrupoConfigFormulario.idDadoItemGrupoConfigFormularioModel.toString()).setValue(arrayDado);
                }
            }
            else {
                if (dado.dadoItemGrupoConfigFormulario.tipoDado == 'LIVRE ESCOLHA') {
                    for (var _c = 0, _d = this.acompanhamentoMedico.configFormulario.listaGrupoConfigFormulario; _c < _d.length; _c++) {
                        var grupo = _d[_c];
                        for (var _e = 0, _f = grupo.listaItemGrupoConfigFormulario; _e < _f.length; _e++) {
                            var item = _f[_e];
                            for (var _g = 0, _h = item.listaDadoItemGrupoConfigFormulario; _g < _h.length; _g++) {
                                var dadoItem = _h[_g];
                                if (dado.listaAcompanhamentoItem != null) {
                                    dadoItem.listaItens = dado.listaAcompanhamentoItem;
                                    for (var _j = 0, _k = dadoItem.listaItens; _j < _k.length; _j++) {
                                        var item_1 = _k[_j];
                                        item_1.concatCodDesItem = item_1.codItem + " - " + item_1.desItem;
                                        item_1.concatCodDesItemRed = item_1.concatCodDesItem.substring(0, 25) + "...";
                                    }
                                }
                                else {
                                    dadoItem.listaItens = [];
                                }
                            }
                        }
                    }
                }
                else {
                    if (dado.valorDado !== null && dado.valorDado !== undefined) {
                        this.formAcompanhamentoDia.get(dado.dadoItemGrupoConfigFormulario.idDadoItemGrupoConfigFormularioModel.toString()).setValue(dado.valorDado);
                    }
                }
            }
        }
    };
    DiaAcompanhamentoPage.prototype.exibirDados = function (i) {
        var itensGrupo = [];
        itensGrupo = this.acompanhamentoMedico.configFormulario.listaGrupoConfigFormulario;
        var index = 0;
        for (var _i = 0, itensGrupo_1 = itensGrupo; _i < itensGrupo_1.length; _i++) {
            var item = itensGrupo_1[_i];
            if (i == index) {
                itensGrupo[i].open = !itensGrupo[i].open;
            }
            else {
                itensGrupo[index].open = false;
            }
            index = index + 1;
        }
    };
    DiaAcompanhamentoPage.prototype.abrirTelaAnexo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var acompanhamento, acompanhamentoDia, navigationExtras;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                acompanhamento = this.acompanhamentoMedico;
                acompanhamentoDia = this.acompanhamentoMedicoDia;
                navigationExtras = {
                    state: {
                        acompanhamento: acompanhamento,
                        acompanhamentoDia: acompanhamentoDia
                    }
                };
                this.router.navigateByUrl('menu-principal/anexo', navigationExtras);
                return [2 /*return*/];
            });
        });
    };
    DiaAcompanhamentoPage.prototype.salvar = function () {
        var listaDados = [];
        for (var _i = 0, _a = this.acompanhamentoMedico.configFormulario.listaGrupoConfigFormulario; _i < _a.length; _i++) {
            var grupo = _a[_i];
            for (var _b = 0, _c = grupo.listaItemGrupoConfigFormulario; _b < _c.length; _b++) {
                var item = _c[_b];
                var _loop_1 = function (dado) {
                    if (dado.tipoDado != 'LIVRE ESCOLHA') {
                        if (dado.tipoDado === 'TEXTO LIVRE' && !this_1.validaCamposTextoLivre(dado)) {
                            this_1.toast.errorToast('Existem campos com preenchimento inválido. Por favor revise o preenchimento.');
                            return { value: void 0 };
                        }
                        else {
                            var acompanhamentoDado = new src_app_model_AcompanhamentoMedicoDado_model__WEBPACK_IMPORTED_MODULE_9__["AcompanhamentoMedicoDado"]();
                            acompanhamentoDado.dadoItemGrupoConfigFormulario = dado;
                            if (dado.tipoDado == 'SELEÇÃO MULTIPLA') {
                                var dadosSelecionados = this_1.formAcompanhamentoDia.get(dado.idDadoItemGrupoConfigFormularioModel.toString()).value;
                                if (dadosSelecionados && dadosSelecionados != '' && dadosSelecionados != null) {
                                    acompanhamentoDado.valorDado = '';
                                    for (var _i = 0, dadosSelecionados_1 = dadosSelecionados; _i < dadosSelecionados_1.length; _i++) {
                                        var item_2 = dadosSelecionados_1[_i];
                                        if (acompanhamentoDado.valorDado != '') {
                                            acompanhamentoDado.valorDado = acompanhamentoDado.valorDado.concat('|');
                                        }
                                        acompanhamentoDado.valorDado = acompanhamentoDado.valorDado.concat(item_2);
                                    }
                                }
                                else {
                                    acompanhamentoDado.valorDado = '';
                                }
                            }
                            else {
                                acompanhamentoDado.valorDado = this_1.formAcompanhamentoDia.get(dado.idDadoItemGrupoConfigFormularioModel.toString()).value;
                            }
                            listaDados.push(acompanhamentoDado);
                        }
                    }
                    else {
                        var listaItens_1 = [];
                        var listaItensExcluir_1 = [];
                        var acompanhamentoDado = new src_app_model_AcompanhamentoMedicoDado_model__WEBPACK_IMPORTED_MODULE_9__["AcompanhamentoMedicoDado"]();
                        acompanhamentoDado.dadoItemGrupoConfigFormulario = dado;
                        if (dado.listaItens != null && dado.listaItens.length > 0) {
                            dado.listaItens.forEach(function (item, indice) {
                                var acompanhamentoItem = new src_app_model_AcompanhamentoMedicoItem_model__WEBPACK_IMPORTED_MODULE_12__["AcompanhamentoMedicoItem"]();
                                acompanhamentoItem.codItem = item.codItem;
                                acompanhamentoItem.desItem = item.desItem;
                                acompanhamentoItem.posologia = item.posologia;
                                listaItens_1.push(acompanhamentoItem);
                            });
                        }
                        if (dado.listaItensExcluir != null && dado.listaItensExcluir.length > 0) {
                            dado.listaItensExcluir.forEach(function (itemExcluir, indice) {
                                var acompanhamentoItemExcluir = new src_app_model_AcompanhamentoMedicoItem_model__WEBPACK_IMPORTED_MODULE_12__["AcompanhamentoMedicoItem"]();
                                acompanhamentoItemExcluir.codItem = itemExcluir.codItem;
                                acompanhamentoItemExcluir.desItem = itemExcluir.desItem;
                                acompanhamentoItemExcluir.posologia = itemExcluir.posologia;
                                listaItensExcluir_1.push(acompanhamentoItemExcluir);
                            });
                        }
                        acompanhamentoDado.listaAcompanhamentoItem = listaItens_1;
                        acompanhamentoDado.listaAcompanhamentoItemExcluir = listaItensExcluir_1;
                        listaDados.push(acompanhamentoDado);
                    }
                };
                var this_1 = this;
                for (var _d = 0, _e = item.listaDadoItemGrupoConfigFormulario; _d < _e.length; _d++) {
                    var dado = _e[_d];
                    var state_1 = _loop_1(dado);
                    if (typeof state_1 === "object")
                        return state_1.value;
                }
            }
        }
        this.acompanhamentoMedicoDia.resumoDia = this.resumoDia.value;
        this.acompanhamentoMedicoDia.dataCheckOut = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD/MM/YYYY HH:mm:ss");
        this.acompanhamentoMedicoDia.listaAcompanhamentoDado = listaDados;
        this.acompanhamentoMedicoDia.statusSincronismo = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STATUS_PENDENTE;
        this.acompanhamentoMedicoDia.flgExibeErroProcesso = false;
        this.acompanhamentoMedicoDia.flgExibeSucessoProcesso = false;
        this.acompanhamentoMedicoDia.erroSincronismo = '';
        if (this.latitude != null) {
            this.acompanhamentoMedicoDia.latitudeCheckOut = this.latitude.toString();
            this.acompanhamentoMedicoDia.longitudeCheckOut = this.longitude.toString();
        }
        var index = this.acompanhamentoMedico.listaAcompanhamentoDia.indexOf(this.acompanhamentoMedicoDia);
        this.acompanhamentoMedico.listaAcompanhamentoDia[index] = this.acompanhamentoMedicoDia;
        this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, this.acompanhamentoMedico, "senhaAutorizacao.senha");
        this.toast.successToast('Informações salvas com sucesso');
    };
    DiaAcompanhamentoPage.prototype.validaCamposObrigatorios = function (grupo) {
        for (var _i = 0, _a = grupo.listaItemGrupoConfigFormulario; _i < _a.length; _i++) {
            var item = _a[_i];
            var _loop_2 = function (dado) {
                if (dado.flgObrigatorio) {
                    var acompanhamentoMedicoDado = void 0;
                    acompanhamentoMedicoDado = this_2.acompanhamentoMedicoDia.listaAcompanhamentoDado.find(function (x) { return x.dadoItemGrupoConfigFormulario.idDadoItemGrupoConfigFormularioModel == dado.idDadoItemGrupoConfigFormularioModel; });
                    if (acompanhamentoMedicoDado) {
                        if (acompanhamentoMedicoDado.dadoItemGrupoConfigFormulario.tipoDado == 'LIVRE ESCOLHA') {
                            if (!acompanhamentoMedicoDado.dadoItemGrupoConfigFormulario.listaValor) {
                                return { value: false };
                            }
                        }
                        else {
                            if (acompanhamentoMedicoDado.dadoItemGrupoConfigFormulario.tipoDado !== 'SIM OU NÃO' && (!acompanhamentoMedicoDado.valorDado || acompanhamentoMedicoDado.valorDado == null)) {
                                return { value: false };
                            }
                        }
                    }
                    else {
                        return { value: false };
                    }
                }
            };
            var this_2 = this;
            for (var _b = 0, _c = item.listaDadoItemGrupoConfigFormulario; _b < _c.length; _b++) {
                var dado = _c[_b];
                var state_2 = _loop_2(dado);
                if (typeof state_2 === "object")
                    return state_2.value;
            }
        }
        return true;
    };
    DiaAcompanhamentoPage.prototype.validaCamposTextoLivre = function (dado) {
        var valor = this.formAcompanhamentoDia.get(dado.idDadoItemGrupoConfigFormularioModel.toString()).value;
        if (dado.tamanhoCampo && dado.tamanhoCampo > 0 && valor && valor != '' && valor != null) {
            if (valor.length > dado.tamanhoCampo) {
                return false;
            }
        }
        if (dado.valorValido && dado.valorValido != '' && valor && valor != '') {
            var valorValido = false;
            var atributos = dado.valorValido.split("|");
            for (var _i = 0, atributos_2 = atributos; _i < atributos_2.length; _i++) {
                var item = atributos_2[_i];
                if (item.toUpperCase() === valor.toUpperCase()) {
                    valorValido = true;
                }
            }
            return valorValido;
        }
        return true;
    };
    DiaAcompanhamentoPage.prototype.getCurrentCoordinates = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    DiaAcompanhamentoPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_5__["SaudiToastComponent"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
        { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"] },
        { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_13__["Geolocation"] }
    ]; };
    DiaAcompanhamentoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dia-acompanhamento',
            template: __webpack_require__(/*! raw-loader!./dia-acompanhamento.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/acompanhamento/dia-acompanhamento/dia-acompanhamento.page.html"),
            styles: [__webpack_require__(/*! ./dia-acompanhamento.page.scss */ "./src/app/pages/acompanhamento/dia-acompanhamento/dia-acompanhamento.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_5__["SaudiToastComponent"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
            src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"],
            _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_13__["Geolocation"]])
    ], DiaAcompanhamentoPage);
    return DiaAcompanhamentoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-acompanhamento-dia-acompanhamento-dia-acompanhamento-module-es5.js.map