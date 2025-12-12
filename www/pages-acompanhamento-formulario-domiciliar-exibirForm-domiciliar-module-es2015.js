(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-acompanhamento-formulario-domiciliar-exibirForm-domiciliar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/acompanhamento/formulario-domiciliar/exibirForm-domiciliar.page.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/acompanhamento/formulario-domiciliar/exibirForm-domiciliar.page.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"ion-text-center\">\r\n        <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/menu-principal\" text=\"\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-uppercase\">Acompanhamento Médico</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n        <ion-menu-button menuId=\"main-content\"></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>   \r\n</ion-header>\r\n<ion-content>\r\n    <form [formGroup]=\"formAcompanhamento\">\r\n       <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"{{opcaoExibir}}\">\r\n            <ion-segment-button value=\"paciente\">\r\n              <ion-label>Paciente</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"acompanhamento\">\r\n              <ion-label>Acompanhamento</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"alta\">\r\n                <ion-label>Alta</ion-label>\r\n            </ion-segment-button>\r\n        </ion-segment>\r\n        <ion-list *ngIf=\"opcaoExibir == 'paciente'\">\r\n            <ion-item>\r\n                <ion-label>Responsável pelo Acompanhamento:<br><span [innerHTML]=\"acompanhamentoMedico.usuario.nome\"></span></ion-label>                \r\n            </ion-item>\r\n            <ion-card button=\"true\" class=\"stats-card\">\r\n                <ion-card-header (click)=\"exibirDados('paciente')\">\r\n                  <ion-row>\r\n                    <ion-col size=\"10\" class=\"ion-text-center ion-no-padding ion-no-margin\">\r\n                      <ion-card-title>Dados do Paciente</ion-card-title>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" class=\"ion-text-right ion-no-margin ion-no-padding\">\r\n                      <ion-button size=\"small\" fill=\"clear\" class=\"ion-no-padding\">\r\n                        <ion-icon *ngIf=\"!exibeDadosPaciente\" slot=\"icon-only\" name=\"ios-arrow-down\">\r\n                        </ion-icon>\r\n                        <ion-icon *ngIf=\"exibeDadosPaciente\" slot=\"icon-only\" name=\"ios-arrow-up\">\r\n                        </ion-icon>                       \r\n                      </ion-button>\r\n                    </ion-col>\r\n                  </ion-row>                                 \r\n                </ion-card-header>\r\n                <ion-card-content class=\"ion-padding\" *ngIf=\"exibeDadosPaciente\">               \r\n                    <ion-item>\r\n                        <ion-label>Prestador:<br><span [innerHTML]=\"acompanhamentoMedico.prestador.nomePrestador\"></span></ion-label>                \r\n                    </ion-item>        \r\n                    <ion-item>\r\n                        <ion-label>Nome do Paciente:<br><span [innerHTML]=\"acompanhamentoMedico.beneficiario.nomeBeneficiario\"></span></ion-label>                \r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>Número da Carteira do Paciente:<br><span [innerHTML]=\"acompanhamentoMedico.beneficiario.carteiraBeneficiario\"></span></ion-label>                \r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>Data de Nascimento:<br><span [innerHTML]=\"acompanhamentoMedico.beneficiario.dataNascimento\"></span></ion-label>                \r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>Idade:<br><span [innerHTML]=\"acompanhamentoMedico.beneficiario.idade\"></span></ion-label>                \r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>Sexo:<br><span [innerHTML]=\"acompanhamentoMedico.beneficiario.sexo\"></span></ion-label>                \r\n                    </ion-item>                        \r\n                </ion-card-content>  \r\n            </ion-card>\r\n            <ion-card button=\"true\" class=\"stats-card\">\r\n                <ion-card-header (click)=\"exibirDados('autorizacao')\">\r\n                  <ion-row>\r\n                    <ion-col size=\"10\" class=\"ion-text-center ion-no-padding ion-no-margin\">\r\n                      <ion-card-title>Dados da Autorização</ion-card-title>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" class=\"ion-text-right ion-no-margin ion-no-padding\">\r\n                      <ion-button size=\"small\" fill=\"clear\" class=\"ion-no-padding\">\r\n                        <ion-icon *ngIf=\"!exibeDadosAutorizacao\" slot=\"icon-only\" name=\"ios-arrow-down\">\r\n                        </ion-icon>\r\n                        <ion-icon *ngIf=\"exibeDadosAutorizacao\" slot=\"icon-only\" name=\"ios-arrow-up\">\r\n                        </ion-icon>                      \r\n                      </ion-button>\r\n                    </ion-col>\r\n                  </ion-row>                                 \r\n                </ion-card-header>\r\n                <ion-card-content class=\"ion-padding\" *ngIf=\"exibeDadosAutorizacao\">            \r\n                    <ion-item>\r\n                        <ion-label>Senha de Autorização:<br><span [innerHTML]=\"acompanhamentoMedico.senhaAutorizacao.senha\"></span></ion-label>                                        \r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Justificativa da Internação:</ion-label>\r\n                        <ion-textarea class=\"textarea-margin-background\" formControlName=\"justificativa\" rows=\"6\" cols=\"20\" (ionBlur)=\"atualizaCampos()\"></ion-textarea>                             \r\n                    </ion-item>\r\n                    <ion-item mode=\"md\" lines=\"none\" class=\"item-error\" *ngIf=\"((justificativa.dirty || justificativa.touched) && justificativa.hasError('required')) || justificativa.hasError('incorrect') || flgErroJustificativa\">\r\n                        <ion-note color=\"warning\" class=\"ion-padding-horizontal\">Campo obrigatório\r\n                            <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n                        </ion-note>\r\n                    </ion-item> \r\n                </ion-card-content>    \r\n            </ion-card>\r\n            <ion-card button=\"true\" class=\"stats-card\">\r\n                <ion-card-header (click)=\"exibirDados('acompanhamento')\">\r\n                  <ion-row>\r\n                    <ion-col size=\"10\" class=\"ion-text-center ion-no-padding ion-no-margin\">\r\n                      <ion-card-title>Dados do Acompanhamento</ion-card-title>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" class=\"ion-text-right ion-no-margin ion-no-padding\">\r\n                      <ion-button size=\"small\" fill=\"clear\" class=\"ion-no-padding\">\r\n                        <ion-icon *ngIf=\"!exibeDadosAcompanhamento\" slot=\"icon-only\" name=\"ios-arrow-down\">\r\n                        </ion-icon>\r\n                        <ion-icon *ngIf=\"exibeDadosAcompanhamento\" slot=\"icon-only\" name=\"ios-arrow-up\">\r\n                        </ion-icon>                       \r\n                      </ion-button>\r\n                    </ion-col>\r\n                  </ion-row>                                 \r\n                </ion-card-header>\r\n                <ion-card-content class=\"ion-padding\" *ngIf=\"exibeDadosAcompanhamento\">        \r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Data Estimada da Alta:</ion-label>\r\n                        <ion-input readonly=\"true\" clearInput (click)=\"abrirCalendarioDataEstimadaAlta($event)\" formControlName=\"dataEstimadaAlta\"></ion-input>\r\n                        <ion-icon *ngIf=\"!dataEstimadaAlta.disabled\" name=\"close-circle-outline\" slot=\"end\" class=\"iconCalendar\" (click)=\"limparDataEstimadaAlta()\"></ion-icon>\r\n                        <ion-icon *ngIf=\"!dataEstimadaAlta.disabled\" name=\"calendar\" slot=\"end\" class=\"iconCalendar\" (click)=\"abrirCalendarioDataEstimadaAlta($event)\"></ion-icon>\r\n                    </ion-item>              \r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Observação:</ion-label>\r\n                        <ion-textarea class=\"textarea-margin-background\" formControlName=\"observacao\" rows=\"6\" cols=\"20\" (ionBlur)=\"atualizaCampos()\"></ion-textarea>               \r\n                    </ion-item>\r\n                </ion-card-content>\r\n            </ion-card>\r\n\r\n\r\n            <ion-card button=\"true\" class=\"stats-card\" *ngIf=\"acompanhamentoMedico.ultimaInternacao.senha != null\">\r\n                <ion-card-header (click)=\"exibirDados('ultimaInternacao')\">\r\n                  <ion-row>\r\n                    <ion-col size=\"10\" class=\"ion-text-center ion-no-padding ion-no-margin\">\r\n                      <ion-card-title>Última Internação</ion-card-title>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" class=\"ion-text-right ion-no-margin ion-no-padding\">\r\n                      <ion-button size=\"small\" fill=\"clear\" class=\"ion-no-padding\">\r\n                        <ion-icon *ngIf=\"!exibeDadosUltimaInternacao\" slot=\"icon-only\" name=\"ios-arrow-down\">\r\n                        </ion-icon>\r\n                        <ion-icon *ngIf=\"exibeDadosUltimaInternacao\" slot=\"icon-only\" name=\"ios-arrow-up\">\r\n                        </ion-icon>                        \r\n                      </ion-button>\r\n                    </ion-col>\r\n                  </ion-row>                                 \r\n                </ion-card-header>\r\n                <ion-card-content class=\"ion-padding\" *ngIf=\"exibeDadosUltimaInternacao\">\r\n                    <ion-item>\r\n                        <ion-label>Senha:<br><span [innerHTML]=\"acompanhamentoMedico.ultimaInternacao.senha\"></span></ion-label> \r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>Período Internação:<br><span [innerHTML]=\"acompanhamentoMedico.ultimaInternacao.dataAutorizacaoInicial\"></span> a <span [innerHTML]=\"acompanhamentoMedico.ultimaInternacao.dataAutorizacaoFinal\"></span></ion-label> \r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>Prestador:<br><span [innerHTML]=\"acompanhamentoMedico.ultimaInternacao.prestador.concatCodNomePrestador\"></span></ion-label> \r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Motivo:</ion-label> \r\n                        <ion-textarea class=\"textarea-margin-background\" [innerHTML]=\"acompanhamentoMedico.ultimaInternacao.justificativaInternacao\" rows=\"6\" cols=\"20\" readonly></ion-textarea>\r\n                    </ion-item>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-list>\r\n        <ion-list *ngIf=\"opcaoExibir == 'acompanhamento'\">\r\n            <ion-item>\r\n                <ion-label position=\"floating\">Dia Acompanhamento:</ion-label>\r\n                <ion-input readonly=\"true\" clearInput (click)=\"abrirCalendarioDiaAcompanhamento($event)\" formControlName=\"diaAcompanhamento\"></ion-input>\r\n                <ion-icon *ngIf=\"!diaAcompanhamento.disabled\" name=\"calendar\" slot=\"end\" class=\"iconCalendar\" (click)=\"abrirCalendarioDiaAcompanhamento($event)\"></ion-icon>\r\n            </ion-item>\r\n            <ion-item mode=\"md\" lines=\"none\" class=\"item-error\" *ngIf=\"((diaAcompanhamento.dirty || diaAcompanhamento.touched) && diaAcompanhamento.hasError('required')) || diaAcompanhamento.hasError('incorrect')\">\r\n                <ion-note color=\"warning\" class=\"ion-padding-horizontal\">Campo obrigatório\r\n                    <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n                </ion-note>\r\n            </ion-item>                    \r\n            <ion-item>\r\n                <ion-label>Copiar Último Dia:</ion-label> \r\n                <ion-checkbox slot=\"start\" formControlName=\"flgCopiaUltimoDia\"></ion-checkbox>\r\n            </ion-item>  \r\n            <ion-item>\r\n                <ion-button expand=\"block\" size=\"default\" (click)=\"adicionarDiaAcompanhamento()\" [disabled]=\"acompanhamentoMedico.status === 'ENCERRADO'\">Adicionar</ion-button>\r\n            </ion-item> \r\n            <ion-item *ngIf=\"opcaoExibir == 'acompanhamento' && listaDiasAcompanhamento.length > 0\">\r\n                <ion-label>Dias de Acompanhamento</ion-label> \r\n            </ion-item>           \r\n        </ion-list>\r\n        <ion-card *ngIf=\"listaDiasAcompanhamento.length > 0 && opcaoExibir == 'acompanhamento'\" class=\"ion-no-margin\">\r\n            <ion-card-header class=\"ion-margin-bottom\">\r\n              <ion-card-title class=\"ion-text-center\">Dias de Acompanhamento</ion-card-title>              \r\n            </ion-card-header>\r\n            <ion-item-sliding *ngFor = \"let acompanhamentoDia of listaDiasAcompanhamento; let i=index\">\r\n                <ion-item (click)=\"abrirTelaDiaAcompanhamento(acompanhamentoDia)\">\r\n                    <ion-row>\r\n                        <ion-col size=\"12\">\r\n                          <span class=\"texto-card-text\" [innerHTML]=\"acompanhamentoDia.diaAcompanhamento\"></span> - \r\n                          <span class=\"texto-card-text\" [innerHTML]=\"acompanhamentoDia.diaSemanaAcompanhamento\"></span>\r\n                          <br>\r\n                          <span class=\"texto-card-label\">Sincronismo: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamentoDia.statusSincronismo\"></span>\r\n                          <br>\r\n                          <ion-note color=\"warning\" *ngIf=\"!verificaDiasCamposObrigatorios(acompanhamentoDia)\">Campo(s) Obrigatório(s) não preenchido(s)\r\n                            <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n                          </ion-note>\r\n                        </ion-col>\r\n                    </ion-row>                    \r\n                </ion-item>\r\n                <ion-item-options>\r\n                    <ion-button expand=\"block\" (click)=\"apagarDiaAcompanhamento(i)\" [disabled]=\"acompanhamentoMedico.status === 'ENCERRADO'\">\r\n                        <ion-icon name=\"trash\"></ion-icon>Excluir\r\n                    </ion-button>\r\n                </ion-item-options>\r\n            </ion-item-sliding>\r\n        </ion-card>\r\n        <ion-list *ngIf=\"opcaoExibir == 'alta'\">\r\n            <ion-item>\r\n                <ion-label position=\"floating\">Data da Alta:</ion-label>\r\n                <ion-input readonly=\"true\" clearInput (click)=\"abrirCalendarioDataAlta($event)\" formControlName=\"dataAlta\"></ion-input>\r\n                <ion-icon *ngIf=\"!dataAlta.disabled\" name=\"close-circle-outline\" slot=\"end\" class=\"iconCalendar\" (click)=\"limparDataAlta()\"></ion-icon>\r\n                <ion-icon *ngIf=\"!dataAlta.disabled\" name=\"calendar\" slot=\"end\" class=\"iconCalendar\" (click)=\"abrirCalendarioDataAlta($event)\"></ion-icon>\r\n            </ion-item>           \r\n            <ion-item>\r\n                <ion-label position=\"floating\">Motivo da Alta:</ion-label>\r\n                <!--tem o ngIf no select para corrigir o bug que existe na tag e garantir q venha selecionado o vamor quando tiver-->\r\n                <ion-select *ngIf=\"listaMotivosAlta && listaMotivosAlta.length\" formControlName=\"motivoAlta\"  interface=\"action-sheet\" placeholder=\"Selecione\" cancelText=\"Cancelar\" okText=\"Ok\" (ionChange)=\"atualizaCampos()\">\r\n                    <ion-select-option [value]=\"\">Selecione</ion-select-option>\r\n                    <ion-select-option *ngFor=\"let motivo of listaMotivosAlta\" [value]=\"motivo.seqDominio\">{{ motivo.desDominio }}</ion-select-option>\r\n                </ion-select>                \r\n            </ion-item>\r\n            <ion-row>\r\n                <ion-col size=\"12\" class=\"ion-text-center\">\r\n                    <ion-button id=\"btnEncerrarAuditoria\" expand=\"block\" size=\"large\" [disabled]=\"!formAcompanhamento.valid || acompanhamentoMedico.status === 'ENCERRADO' || listaDiasAcompanhamento.length === 0\" (click)=\"encerrarAuditoria()\">Encerrar Auditoria</ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-list>     \r\n    </form>    \r\n</ion-content>  "

/***/ }),

/***/ "./src/app/pages/acompanhamento/formulario-domiciliar/exibirForm-domiciliar-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/formulario-domiciliar/exibirForm-domiciliar-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: ExibirFormDomiciliarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExibirFormDomiciliarPageRoutingModule", function() { return ExibirFormDomiciliarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _exibirForm_domiciliar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exibirForm-domiciliar.page */ "./src/app/pages/acompanhamento/formulario-domiciliar/exibirForm-domiciliar.page.ts");




const routes = [
    {
        path: '',
        component: _exibirForm_domiciliar_page__WEBPACK_IMPORTED_MODULE_3__["ExibirFormDomiciliarPage"]
    }
];
let ExibirFormDomiciliarPageRoutingModule = class ExibirFormDomiciliarPageRoutingModule {
};
ExibirFormDomiciliarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExibirFormDomiciliarPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/acompanhamento/formulario-domiciliar/exibirForm-domiciliar.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/formulario-domiciliar/exibirForm-domiciliar.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ExibirFormDomiciliarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExibirFormDomiciliarPageModule", function() { return ExibirFormDomiciliarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _exibirForm_domiciliar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exibirForm-domiciliar-routing.module */ "./src/app/pages/acompanhamento/formulario-domiciliar/exibirForm-domiciliar-routing.module.ts");
/* harmony import */ var _exibirForm_domiciliar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exibirForm-domiciliar.page */ "./src/app/pages/acompanhamento/formulario-domiciliar/exibirForm-domiciliar.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let ExibirFormDomiciliarPageModule = class ExibirFormDomiciliarPageModule {
};
ExibirFormDomiciliarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _exibirForm_domiciliar_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExibirFormDomiciliarPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_exibirForm_domiciliar_page__WEBPACK_IMPORTED_MODULE_6__["ExibirFormDomiciliarPage"]]
    })
], ExibirFormDomiciliarPageModule);



/***/ }),

/***/ "./src/app/pages/acompanhamento/formulario-domiciliar/exibirForm-domiciliar.page.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/formulario-domiciliar/exibirForm-domiciliar.page.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-item-sliding {\n  display: block;\n  position: relative;\n  width: 95%;\n  overflow: hidden;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ion-margin-bottom, [margin-bottom] {\n  margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 2px);\n}\n\nion-item-options ion-button {\n  height: auto;\n}\n\nion-item-sliding ion-item {\n  --inner-border-width: 0 0 0px 0;\n  --border-width: 1px 1px 1px;\n  --border-radius: 10px;\n  --border-color:var(--ion-color-secondary-shade);\n  -webkit-margin-before: 2px;\n          margin-block-start: 2px;\n  -webkit-margin-after: 5px;\n          margin-block-end: 5px;\n}\n\nion-select {\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background-color: var(--ion-color-light-tint);\n}\n\nion-datetime {\n  margin-top: 30px;\n  margin-bottom: 5px;\n  background-color: var(--ion-color-light-tint);\n  opacity: unset;\n}\n\n.item-has-focus.label-floating.sc-ion-label-md-h, .item-has-focus .label-floating.sc-ion-label-md-h, .item-has-placeholder.label-floating.sc-ion-label-md-h, .item-has-placeholder .label-floating.sc-ion-label-md-h, .item-has-value.label-floating.sc-ion-label-md-h, .item-has-value .label-floating.sc-ion-label-md-h {\n  font-size: 22px;\n}\n\n.item-has-focus.label-floating.sc-ion-label-ios-h, .item-has-focus .label-floating.sc-ion-label-ios-h, .item-has-placeholder.label-floating.sc-ion-label-ios-h, .item-has-placeholder .label-floating.sc-ion-label-ios-h, .item-has-value.label-floating.sc-ion-label-ios-h, .item-has-value .label-floating.sc-ion-label-ios-h {\n  font-size: 22px;\n  -webkit-transform: none;\n          transform: none;\n}\n\n.label-floating.sc-ion-label-ios-h {\n  font-size: 22px;\n}\n\n.textarea-margin-background {\n  margin-top: 30px;\n  margin-bottom: 5px;\n  background-color: var(--ion-color-light-tint);\n}\n\n.iconCalendar {\n  margin-top: auto;\n}\n\nion-input {\n  margin-top: 30px;\n  margin-bottom: 5px;\n  background-color: var(--ion-color-light-tint);\n  opacity: unset;\n  font-weight: 100;\n}\n\n.label-size18-left10 {\n  font-size: 18px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNvbXBhbmhhbWVudG8vZm9ybXVsYXJpby1kb21pY2lsaWFyL0M6XFxEZXNlblxcd29ya3NwYWNlX2FwbGljYXRpdm9cXEFwcEFjb21wYW5oYW1lbnRvTWVkaWNvL3NyY1xcYXBwXFxwYWdlc1xcYWNvbXBhbmhhbWVudG9cXGZvcm11bGFyaW8tZG9taWNpbGlhclxcZXhpYmlyRm9ybS1kb21pY2lsaWFyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWNvbXBhbmhhbWVudG8vZm9ybXVsYXJpby1kb21pY2lsaWFyL2V4aWJpckZvcm0tZG9taWNpbGlhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQ0FBQTtFQUNBLHFDQUFBO0FDQ0o7O0FER0k7RUFDRSxZQUFBO0FDQU47O0FETUk7RUFDSSwrQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQ0FBQTtFQUNBLDBCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0FDSFI7O0FET0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7QUNKSjs7QURPQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGNBQUE7QUNKSjs7QURPQTtFQUNJLGVBQUE7QUNKSjs7QURPQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtVQUFBLGVBQUE7QUNKSjs7QURPQTtFQUNJLGVBQUE7QUNKSjs7QURPQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQ0pKOztBRE9BO0VBQ0ksZ0JBQUE7QUNKSjs7QURPQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0pKOztBRE9BO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY29tcGFuaGFtZW50by9mb3JtdWxhcmlvLWRvbWljaWxpYXIvZXhpYmlyRm9ybS1kb21pY2lsaWFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24taXRlbS1zbGlkaW5nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmlvbi1tYXJnaW4tYm90dG9tLCBbbWFyZ2luLWJvdHRvbV0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAycHgpO1xyXG59ICAgICAgICAgICAgICAgICAgIFxyXG5cclxuaW9uLWl0ZW0tb3B0aW9uc3tcclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbmlvbi1pdGVtLXNsaWRpbmd7XHJcblxyXG4gICAgaW9uLWl0ZW17XHJcbiAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcclxuICAgICAgICAtLWJvcmRlci13aWR0aDogMXB4IDFweCAxcHg7XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOnZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUpO1xyXG4gICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMnB4O1xyXG4gICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDVweDtcclxuICAgIH0gIFxyXG59XHJcblxyXG5pb24tc2VsZWN0IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7ICAgXHJcbn1cclxuXHJcbmlvbi1kYXRldGltZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpOyBcclxuICAgIG9wYWNpdHk6IHVuc2V0OyAgXHJcbn1cclxuXHJcbi5pdGVtLWhhcy1mb2N1cy5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaCwgLml0ZW0taGFzLWZvY3VzIC5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaCwgLml0ZW0taGFzLXBsYWNlaG9sZGVyLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1tZC1oLCAuaXRlbS1oYXMtcGxhY2Vob2xkZXIgLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1tZC1oLCAuaXRlbS1oYXMtdmFsdWUubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgsIC5pdGVtLWhhcy12YWx1ZSAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWh7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5pdGVtLWhhcy1mb2N1cy5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtaW9zLWgsIC5pdGVtLWhhcy1mb2N1cyAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLWlvcy1oLCAuaXRlbS1oYXMtcGxhY2Vob2xkZXIubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLWlvcy1oLCAuaXRlbS1oYXMtcGxhY2Vob2xkZXIgLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1pb3MtaCwgLml0ZW0taGFzLXZhbHVlLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1pb3MtaCwgLml0ZW0taGFzLXZhbHVlIC5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtaW9zLWh7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxuXHJcbi5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtaW9zLWh7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi50ZXh0YXJlYS1tYXJnaW4tYmFja2dyb3VuZHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XHJcbn1cclxuXHJcbi5pY29uQ2FsZW5kYXIge1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG5cclxuaW9uLWlucHV0IHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7IFxyXG4gICAgb3BhY2l0eTogdW5zZXQ7IFxyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDsgXHJcbn1cclxuXHJcbi5sYWJlbC1zaXplMTgtbGVmdDEwe1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn0iLCIuaW9uLWl0ZW0tc2xpZGluZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA5NSU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5pb24tbWFyZ2luLWJvdHRvbSwgW21hcmdpbi1ib3R0b21dIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDJweCk7XG59XG5cbmlvbi1pdGVtLW9wdGlvbnMgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuaW9uLWl0ZW0tc2xpZGluZyBpb24taXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHggMXB4IDFweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtLWJvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlKTtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAycHg7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDVweDtcbn1cblxuaW9uLXNlbGVjdCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpO1xufVxuXG5pb24tZGF0ZXRpbWUge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbiAgb3BhY2l0eTogdW5zZXQ7XG59XG5cbi5pdGVtLWhhcy1mb2N1cy5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaCwgLml0ZW0taGFzLWZvY3VzIC5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaCwgLml0ZW0taGFzLXBsYWNlaG9sZGVyLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1tZC1oLCAuaXRlbS1oYXMtcGxhY2Vob2xkZXIgLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1tZC1oLCAuaXRlbS1oYXMtdmFsdWUubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgsIC5pdGVtLWhhcy12YWx1ZSAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5pdGVtLWhhcy1mb2N1cy5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtaW9zLWgsIC5pdGVtLWhhcy1mb2N1cyAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLWlvcy1oLCAuaXRlbS1oYXMtcGxhY2Vob2xkZXIubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLWlvcy1oLCAuaXRlbS1oYXMtcGxhY2Vob2xkZXIgLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1pb3MtaCwgLml0ZW0taGFzLXZhbHVlLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1pb3MtaCwgLml0ZW0taGFzLXZhbHVlIC5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtaW9zLWgge1xuICBmb250LXNpemU6IDIycHg7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1pb3MtaCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLnRleHRhcmVhLW1hcmdpbi1iYWNrZ3JvdW5kIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XG59XG5cbi5pY29uQ2FsZW5kYXIge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuXG5pb24taW5wdXQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbiAgb3BhY2l0eTogdW5zZXQ7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5sYWJlbC1zaXplMTgtbGVmdDEwIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/acompanhamento/formulario-domiciliar/exibirForm-domiciliar.page.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/formulario-domiciliar/exibirForm-domiciliar.page.ts ***!
  \******************************************************************************************/
/*! exports provided: ExibirFormDomiciliarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExibirFormDomiciliarPage", function() { return ExibirFormDomiciliarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/saudi-loading/saudi-loading.component */ "./src/app/components/saudi-loading/saudi-loading.component.ts");
/* harmony import */ var src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/saudi-toast/saudi-toast.component */ "./src/app/components/saudi-toast/saudi-toast.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/model/Usuario.model */ "./src/app/model/Usuario.model.ts");
/* harmony import */ var src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/model/Operadora.model */ "./src/app/model/Operadora.model.ts");
/* harmony import */ var src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/model/DominioCodigo.model */ "./src/app/model/DominioCodigo.model.ts");
/* harmony import */ var src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/config/constantes/constantes */ "./src/app/config/constantes/constantes.ts");
/* harmony import */ var src_app_model_AcompanhamentoMedico_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/model/AcompanhamentoMedico.model */ "./src/app/model/AcompanhamentoMedico.model.ts");
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var src_app_model_AcompanhamentoMedicoDia_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/model/AcompanhamentoMedicoDia.model */ "./src/app/model/AcompanhamentoMedicoDia.model.ts");
/* harmony import */ var src_app_model_AcompanhamentoMedicoDado_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/model/AcompanhamentoMedicoDado.model */ "./src/app/model/AcompanhamentoMedicoDado.model.ts");
/* harmony import */ var src_app_services_parametros_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/services/parametros.service */ "./src/app/services/parametros.service.ts");
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ "./node_modules/@awesome-cordova-plugins/geolocation/ngx/index.js");
/* harmony import */ var src_app_components_popover_calendario_popover_calendario_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/components/popover-calendario/popover-calendario.component */ "./src/app/components/popover-calendario/popover-calendario.component.ts");
/* harmony import */ var src_app_model_SenhaAutorizacao_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/model/SenhaAutorizacao.model */ "./src/app/model/SenhaAutorizacao.model.ts");
/* harmony import */ var src_app_services_senhaAutorizacao_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/services/senhaAutorizacao.service */ "./src/app/services/senhaAutorizacao.service.ts");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");























let ExibirFormDomiciliarPage = class ExibirFormDomiciliarPage {
    constructor(router, formBuilder, navCtrl, loading, toast, atrCtrl, parametrosService, senhaAutorizacaoService, networkService, storageService, geolocation, popover, appVersion) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.toast = toast;
        this.atrCtrl = atrCtrl;
        this.parametrosService = parametrosService;
        this.senhaAutorizacaoService = senhaAutorizacaoService;
        this.networkService = networkService;
        this.storageService = storageService;
        this.geolocation = geolocation;
        this.popover = popover;
        this.appVersion = appVersion;
        this.acompanhamentoMedico = new src_app_model_AcompanhamentoMedico_model__WEBPACK_IMPORTED_MODULE_12__["AcompanhamentoMedico"]();
        this.listaMotivosAlta = [];
        this.opcaoExibir = "paciente";
        this.flgErroJustificativa = false;
        this.flgErroDataEstimadaAlta = false;
        this.exibeDadosPaciente = false;
        this.exibeDadosAcompanhamento = false;
        this.exibeDadosAutorizacao = false;
        this.appVersion.getVersionNumber().then(value => {
            this.versionNumber = value;
            console.log("VERSION NUMBER >>> " + this.versionNumber);
        }).catch(error => {
            console.log('Error getting version', error);
        });
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_2__["locale"]('pt-br');
        this.exibeFormulario();
        this.getCurrentCoordinates();
    }
    get justificativa() {
        return this.formAcompanhamento.get('justificativa');
    }
    get dataAlta() {
        return this.formAcompanhamento.get('dataAlta');
    }
    get motivoAlta() {
        return this.formAcompanhamento.get('motivoAlta');
    }
    get dataEstimadaAlta() {
        return this.formAcompanhamento.get('dataEstimadaAlta');
    }
    get observacao() {
        return this.formAcompanhamento.get('observacao');
    }
    get diaAcompanhamento() {
        return this.formAcompanhamento.get('diaAcompanhamento');
    }
    get flgCopiaUltimoDia() {
        return this.formAcompanhamento.get('flgCopiaUltimoDia');
    }
    exibeFormulario() {
        this.buscaMotivosAlta();
        let flgAbrindo = false;
        let getNav = this.router.getCurrentNavigation();
        if (getNav.extras.state) {
            this.acompanhamentoMedico = getNav.extras.state.acompanhamentoMedico;
            flgAbrindo = getNav.extras.state.flgAbrindo;
        }
        else {
            this.toast.errorToast('Ocorreu um erro inesperado, por favor tente novamente.');
            this.navCtrl.navigateBack('menu-principal/listar-senhas');
        }
        this.formAcompanhamento = this.formBuilder.group({
            justificativa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            dataAlta: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            motivoAlta: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            dataEstimadaAlta: [''],
            observacao: [''],
            diaAcompanhamento: [moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD/MM/YYYY"), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            flgCopiaUltimoDia: [false]
        });
        this.acompanhamentoMedico.dataUltimaVisualizacao = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD/MM/YYYY");
        this.formAcompanhamento.get("justificativa").setValue(this.acompanhamentoMedico.diagnosticoInternacao);
        if (flgAbrindo) {
            this.listaDiasAcompanhamento = [];
            this.flgCopiaUltimoDia.disable();
            this.adicionarAcompanhamentoMedicoDispositivo();
        }
        else {
            if (this.acompanhamentoMedico.dataAlta) {
                this.formAcompanhamento.get("dataAlta").setValue(this.acompanhamentoMedico.dataAlta);
            }
            if (this.acompanhamentoMedico.dataEstimadaAlta) {
                this.formAcompanhamento.get("dataEstimadaAlta").setValue(this.acompanhamentoMedico.dataEstimadaAlta);
            }
            if (this.acompanhamentoMedico.motivoAlta && this.acompanhamentoMedico.motivoAlta.seqDominio) {
                this.formAcompanhamento.get("motivoAlta").setValue(this.acompanhamentoMedico.motivoAlta.seqDominio);
            }
            this.formAcompanhamento.get("observacao").setValue(this.acompanhamentoMedico.obsEncerramento);
            if (this.acompanhamentoMedico.listaAcompanhamentoDia) {
                this.listaDiasAcompanhamento = this.acompanhamentoMedico.listaAcompanhamentoDia;
            }
            else {
                this.listaDiasAcompanhamento = [];
                this.flgCopiaUltimoDia.disable();
            }
            if (this.acompanhamentoMedico.status === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STATUS_ENCERRADO) {
                this.justificativa.disable();
                this.dataAlta.disable();
                this.dataEstimadaAlta.disable();
                this.motivoAlta.disable();
                this.observacao.disable();
                this.diaAcompanhamento.disable();
                this.flgCopiaUltimoDia.disable();
            }
            this.atualizarAcompanhamentoMedicoDispositivo();
        }
    }
    adicionarAcompanhamentoMedicoDispositivo() {
        this.storageService.adicionar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, this.acompanhamentoMedico);
    }
    segmentChanged(ev) {
        this.opcaoExibir = ev.detail.value;
    }
    buscaMotivosAlta() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.networkService.CheckNetworkStatus();
            if (this.networkService.NetworkStatus.value) {
                yield this.buscaMotivosAltaOnline();
            }
            else {
                yield this.buscaMotivosAltaOffline();
            }
        });
    }
    buscaMotivosAltaOnline() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_9__["Operadora"];
            let dominioCodigo = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"];
            operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
            dominioCodigo.codTabela = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].TABELA_MOTIVO_ALTA;
            dominioCodigo.operadora = operadora;
            const loading = yield this.loading.presentLoading('Buscando Motivos de Alta...');
            this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe((data) => {
                this.listaMotivosAlta = data;
                loading.dismiss();
            }, (error) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this.buscaMotivosAltaOffline();
                loading.dismiss();
            }));
        });
    }
    buscaMotivosAltaOffline() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loading.presentLoading('Buscando Motivos de Alta...');
            this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_MOTIVO_SAIDA).then(items => {
                if (items != null) {
                    this.listaMotivosAlta = items;
                    loading.dismiss();
                }
            }, error => {
                this.toast.errorToast(error);
                loading.dismiss();
            });
        });
    }
    adicionarDiaAcompanhamento() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
            usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
            //Valida os campos obrigatórios    
            if (!this.justificativa.valid || this.diaAcompanhamento.invalid) {
                this.toast.errorToast('Preencha os campos obrigatórios.');
                if (!this.justificativa.valid) {
                    this.justificativa.setErrors({ 'incorrect': true });
                    this.justificativa.invalid;
                    this.opcaoExibir = "paciente";
                    this.exibeDadosAutorizacao = true;
                    this.flgErroJustificativa = true;
                }
                if (this.diaAcompanhamento.invalid) {
                    this.diaAcompanhamento.setErrors({ 'incorrect': true });
                    this.diaAcompanhamento.invalid;
                }
            }
            else {
                //Valida o dia do acompanhamento
                if (this.diaAcompanhamento.valid) {
                    let dataAtual = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(moment__WEBPACK_IMPORTED_MODULE_2__().format("DD/MM/YYYY"), "DD/MM/YYYY").toISOString());
                    //let dataDiaAcompanhamento = new Date(moment(moment(this.diaAcompanhamento.value).format("DD/MM/YYYY"),"DD/MM/YYYY").toISOString())
                    let dataDiaAcompanhamento = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(this.diaAcompanhamento.value, "DD/MM/YYYY").toISOString());
                    if (this.acompanhamentoMedico.listaAcompanhamentoDia != null && this.acompanhamentoMedico.listaAcompanhamentoDia.length > 0) {
                        let acompanhamentoMedicoDia = new src_app_model_AcompanhamentoMedicoDia_model__WEBPACK_IMPORTED_MODULE_15__["AcompanhamentoMedicoDia"]();
                        acompanhamentoMedicoDia = this.acompanhamentoMedico.listaAcompanhamentoDia.find(x => x.diaAcompanhamento === this.diaAcompanhamento.value);
                        if (acompanhamentoMedicoDia != null) {
                            this.toast.errorToast('Dia de Acompanhamento existente !');
                            return;
                        }
                    }
                    if (dataAtual < dataDiaAcompanhamento) {
                        this.toast.errorToast('Dia de acompanhamento não pode ser posterior a data atual.');
                        return;
                    }
                    if (usuario.operadora.flagBloqueiaDiaAnterior === 1 && dataAtual > dataDiaAcompanhamento) {
                        this.toast.errorToast('Dia de acompanhamento não pode ser anterior a data atual.');
                        return;
                    }
                    if (usuario.operadora.flagBloqueiaVisitaAcomp === 1 && dataAtual.getMonth() !== dataDiaAcompanhamento.getMonth()) {
                        this.toast.errorToast('Mês de acompanhamento não pode ser diferente do mês atual.');
                        return;
                    }
                }
                //Recupera os campos preenchidos do acompanhamento
                let motivoAlta = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"]();
                this.acompanhamentoMedico.diagnosticoInternacao = this.justificativa.value;
                motivoAlta.seqDominio = this.motivoAlta.value;
                this.acompanhamentoMedico.motivoAlta = motivoAlta;
                this.acompanhamentoMedico.obsEncerramento = this.observacao.value;
                //Se ainda não preencheu a versão do app preenche nesse momento. Usado para controle no momento de troca de versão
                if (this.versionNumber != null) {
                    this.acompanhamentoMedico.appVersion = this.versionNumber;
                }
                //Cria o objeto do dia
                let acompanhamentoMedicoDia = new src_app_model_AcompanhamentoMedicoDia_model__WEBPACK_IMPORTED_MODULE_15__["AcompanhamentoMedicoDia"]();
                acompanhamentoMedicoDia.diaAcompanhamento = this.diaAcompanhamento.value;
                acompanhamentoMedicoDia.diaSemanaAcompanhamento = moment__WEBPACK_IMPORTED_MODULE_2__(new Date(moment__WEBPACK_IMPORTED_MODULE_2__(this.diaAcompanhamento.value, "DD/MM/YYYY").toISOString())).format("dddd");
                acompanhamentoMedicoDia.statusSincronismo = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STATUS_PENDENTE;
                acompanhamentoMedicoDia.dataCheckIn = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD/MM/YYYY HH:mm:ss");
                if (this.latitude != null) {
                    acompanhamentoMedicoDia.latitude = this.latitude.toString();
                    acompanhamentoMedicoDia.longitude = this.longitude.toString();
                }
                acompanhamentoMedicoDia.listaAcompanhamentoDado = [];
                //Verifica se o check de copiar o ultimo dia está marcado
                if (this.flgCopiaUltimoDia.value) {
                    let acompamentoDiaCopiado = new src_app_model_AcompanhamentoMedicoDia_model__WEBPACK_IMPORTED_MODULE_15__["AcompanhamentoMedicoDia"]();
                    acompamentoDiaCopiado = this.acompanhamentoMedico.listaAcompanhamentoDia[this.acompanhamentoMedico.listaAcompanhamentoDia.length - 1];
                    acompanhamentoMedicoDia.resumoDia = acompamentoDiaCopiado.resumoDia;
                    acompanhamentoMedicoDia.listaAcompanhamentoDado = acompamentoDiaCopiado.listaAcompanhamentoDado;
                    this.acompanhamentoMedico.listaAcompanhamentoDia.push(acompanhamentoMedicoDia);
                    this.listaDiasAcompanhamento = this.listaDiasAcompanhamento.sort((b, a) => new Date(moment__WEBPACK_IMPORTED_MODULE_2__(b.diaAcompanhamento, "DD/MM/YYYY").toISOString()).getTime() - new Date(moment__WEBPACK_IMPORTED_MODULE_2__(a.diaAcompanhamento, "DD/MM/YYYY").toISOString()).getTime());
                    this.atualizarAcompanhamentoMedicoDispositivo();
                }
                else {
                    //Recupera os dados da configuração do formulário, atualiza a lista de dias e ordena
                    usuario.configFormulario.listaGrupoConfigFormulario.forEach(grupo => {
                        grupo.listaItemGrupoConfigFormulario.forEach(item => {
                            item.listaDadoItemGrupoConfigFormulario.forEach(dado => {
                                let acompanhamentoDado = new src_app_model_AcompanhamentoMedicoDado_model__WEBPACK_IMPORTED_MODULE_16__["AcompanhamentoMedicoDado"]();
                                acompanhamentoDado.dadoItemGrupoConfigFormulario = dado;
                                acompanhamentoMedicoDia.listaAcompanhamentoDado.push(acompanhamentoDado);
                            });
                        });
                    });
                    this.acompanhamentoMedico.listaAcompanhamentoDia.push(acompanhamentoMedicoDia);
                    this.listaDiasAcompanhamento = this.acompanhamentoMedico.listaAcompanhamentoDia;
                    this.listaDiasAcompanhamento = this.listaDiasAcompanhamento.sort((b, a) => new Date(moment__WEBPACK_IMPORTED_MODULE_2__(b.diaAcompanhamento, "DD/MM/YYYY").toISOString()).getTime() - new Date(moment__WEBPACK_IMPORTED_MODULE_2__(a.diaAcompanhamento, "DD/MM/YYYY").toISOString()).getTime());
                    this.atualizarAcompanhamentoMedicoDispositivo();
                }
                //habilita o check para permitir a copia do ultimo dia
                this.flgCopiaUltimoDia.enable();
            }
        });
    }
    atualizarAcompanhamentoMedicoDispositivo() {
        this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, this.acompanhamentoMedico, "senhaAutorizacao.senha");
    }
    abrirTelaDiaAcompanhamento(acompanhamentoMedicoDia) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let acompanhamentoMedico = this.acompanhamentoMedico;
            let navigationExtras = {
                state: {
                    acompanhamentoMedico,
                    acompanhamentoMedicoDia
                }
            };
            this.router.navigateByUrl('menu-principal/dia-acompanhamento', navigationExtras);
        });
    }
    verificaDiasCamposObrigatorios(acompanhamentoDia) {
        if (acompanhamentoDia.listaAcompanhamentoDado.length > 0) {
            for (let dado of acompanhamentoDia.listaAcompanhamentoDado) {
                if (dado.dadoItemGrupoConfigFormulario.flgObrigatorio) {
                    if (dado.dadoItemGrupoConfigFormulario.tipoDado == 'LIVRE ESCOLHA') {
                        if (dado.listaAcompanhamentoItem.length == 0) {
                            return false;
                        }
                    }
                    else {
                        if (dado.dadoItemGrupoConfigFormulario.tipoDado !== 'SIM OU NÃO' && !dado.valorDado) {
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    }
    apagarDiaAcompanhamento(index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.listaDiasAcompanhamento[index].statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STATUS_SINCRONIZADO || this.listaDiasAcompanhamento[index].statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STATUS_RESTAURADO) {
                this.toast.errorToast("Não é possível excluir dia sincronizado.");
            }
            else {
                let mensagem = "Dia de Acompanhamento: " + this.listaDiasAcompanhamento[index].diaAcompanhamento + ", " + this.listaDiasAcompanhamento[index].diaSemanaAcompanhamento;
                const alert = yield this.atrCtrl.create({
                    header: 'Deseja realmente excluir o dia abaixo?',
                    message: mensagem,
                    buttons: [
                        {
                            text: 'Cancelar',
                            role: 'cancel',
                            handler: (blah) => { }
                        }, {
                            text: 'Confirmar',
                            handler: () => {
                                this.listaDiasAcompanhamento.forEach((item, indice) => {
                                    if (indice == index) {
                                        this.listaDiasAcompanhamento.splice(indice, 1);
                                    }
                                });
                                this.acompanhamentoMedico.listaAcompanhamentoDia = this.listaDiasAcompanhamento;
                                this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, this.acompanhamentoMedico, "senhaAutorizacao.senha");
                            }
                        }
                    ]
                });
                yield alert.present();
            }
        });
    }
    atualizaCampos() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let motivoAlta = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"]();
            motivoAlta = this.listaMotivosAlta.find(x => x.seqDominio === this.motivoAlta.value);
            this.acompanhamentoMedico.motivoAlta = motivoAlta;
            if (this.motivoAlta.value == 'Selecione') {
                this.formAcompanhamento.get("motivoAlta").setValue('');
            }
            if (this.observacao.value != null) {
                this.formAcompanhamento.get('observacao').setValue(this.observacao.value.trim());
                this.acompanhamentoMedico.obsEncerramento = this.observacao.value.trim();
            }
            if (this.justificativa.valid) {
                this.formAcompanhamento.get('justificativa').setValue(this.justificativa.value.trim());
                this.acompanhamentoMedico.diagnosticoInternacao = this.justificativa.value.trim();
                this.flgErroJustificativa = false;
            }
            //Se ainda não preencheu a versão do app preenche nesse momento. Usado para controle no momento de troca de versão
            if (this.versionNumber != null) {
                this.acompanhamentoMedico.appVersion = this.versionNumber;
            }
            this.acompanhamentoMedico.statusSincronismo = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STATUS_PENDENTE;
            this.acompanhamentoMedico.flgExibeGifProcessando = false;
            this.acompanhamentoMedico.flgExibeSucessoProcesso = false;
            this.acompanhamentoMedico.flgExibeErroProcesso = false;
            yield this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, this.acompanhamentoMedico, "senhaAutorizacao.senha");
        });
    }
    encerrarAuditoria() {
        let usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
        usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
        let dataAtual = new Date();
        let dataAlta = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(this.dataAlta.value, "DD/MM/YYYY").toISOString());
        //Valida se a data da alta é inferior a alguma data do acompanhamentoDia
        for (let dia of this.listaDiasAcompanhamento) {
            let dataDia = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(dia.diaAcompanhamento, "DD/MM/YYYY").toISOString());
            //Valida se operadora deve validar e se o dia é posterior a data da alta
            if (usuario.operadora.flagBloqueiaDiaPosteriorAlta === 1 && dataAlta < dataDia) {
                this.toast.errorToast('Data da alta não pode ser anterior a data do dia (' + dia.diaAcompanhamento + ').');
                return;
            }
            if (!this.verificaDiasCamposObrigatorios(dia)) {
                this.toast.errorToast('Preencha os campos obrigatórios do dia (' + dia.diaAcompanhamento + ').');
                return;
            }
        }
        //Valida se a data da alta é posterior ao dia atual
        if (dataAlta > dataAtual) {
            this.toast.errorToast('Data da alta não pode ser posterior a data atual.');
            return;
        }
        this.acompanhamentoMedico.dataAlta = this.dataAlta.value;
        let motivoAlta = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"]();
        motivoAlta = this.listaMotivosAlta.find(x => x.seqDominio === this.motivoAlta.value);
        this.acompanhamentoMedico.motivoAlta = motivoAlta;
        this.acompanhamentoMedico.obsEncerramento = this.observacao.value;
        this.acompanhamentoMedico.diagnosticoInternacao = this.justificativa.value;
        this.acompanhamentoMedico.dataEstimadaAlta = this.dataEstimadaAlta.value;
        this.acompanhamentoMedico.status = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STATUS_ENCERRADO;
        this.acompanhamentoMedico.statusSincronismo = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STATUS_PENDENTE;
        this.acompanhamentoMedico.flgExibeGifProcessando = false;
        this.acompanhamentoMedico.flgExibeSucessoProcesso = false;
        this.acompanhamentoMedico.flgExibeErroProcesso = false;
        this.acompanhamentoMedico.dataEncerramento = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD/MM/YYYY");
        //Se ainda não preencheu a versão do app preenche nesse momento. Usado para controle no momento de troca de versão
        if (this.versionNumber != null) {
            this.acompanhamentoMedico.appVersion = this.versionNumber;
        }
        this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, this.acompanhamentoMedico, "senhaAutorizacao.senha");
        this.toast.successToast('Acompanhamento encerrado com sucesso');
        let navigationExtras = {
            state: {}
        };
        this.router.navigateByUrl('', navigationExtras);
    }
    getCurrentCoordinates() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.latitude = resp.coords.latitude;
            this.longitude = resp.coords.longitude;
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    abrirCalendarioDataInternacao(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let dataInternacao;
            /*if(this.dataInternacao.value != null && this.dataInternacao.value != ''){
              dataInternacao = new Date(moment(this.dataInternacao.value,"DD/MM/YYYY").toISOString())
            }else{
              dataInternacao = new Date()
            } */
            const pop = yield this.popover.create({
                component: src_app_components_popover_calendario_popover_calendario_component__WEBPACK_IMPORTED_MODULE_19__["PopoverCalendarioComponent"],
                event: ev,
                cssClass: 'popover-custon',
                componentProps: {
                    titulo: 'Data Internação',
                    data: dataInternacao
                },
                translucent: true
            });
            pop.onDidDismiss().then((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (result.data) {
                    let dataInternacao = result.data;
                    if (dataInternacao != null && dataInternacao != '') {
                        this.acompanhamentoMedico.senhaAutorizacao.dataInternacao = moment__WEBPACK_IMPORTED_MODULE_2__(dataInternacao).format("DD/MM/YYYY");
                        this.acompanhamentoMedico.dataInternacao = moment__WEBPACK_IMPORTED_MODULE_2__(dataInternacao).format("DD/MM/YYYY");
                        this.formAcompanhamento.get("dataInternacao").setValue(this.acompanhamentoMedico.dataInternacao);
                    }
                    else {
                        this.acompanhamentoMedico.dataInternacao = '';
                        this.acompanhamentoMedico.senhaAutorizacao.dataInternacao = '';
                    }
                    //Se ainda não preencheu a versão do app preenche nesse momento. Usado para controle no momento de troca de versão
                    if (this.versionNumber != null) {
                        this.acompanhamentoMedico.appVersion = this.versionNumber;
                    }
                    yield this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, this.acompanhamentoMedico, "senhaAutorizacao.senha");
                }
            }));
            return yield pop.present();
        });
    }
    abrirCalendarioDataAlta(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let dataAlta;
            if (this.dataAlta.value != null && this.dataAlta.value != '') {
                dataAlta = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(this.dataAlta.value, "DD/MM/YYYY").toISOString());
            }
            else {
                dataAlta = new Date();
            }
            const pop = yield this.popover.create({
                component: src_app_components_popover_calendario_popover_calendario_component__WEBPACK_IMPORTED_MODULE_19__["PopoverCalendarioComponent"],
                event: ev,
                cssClass: 'popover-custon',
                componentProps: {
                    titulo: 'Data Alta',
                    data: dataAlta
                },
                translucent: true
            });
            pop.onDidDismiss().then((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (result.data) {
                    let dataAlta = result.data;
                    if (dataAlta != null && dataAlta != '') {
                        this.acompanhamentoMedico.dataAlta = moment__WEBPACK_IMPORTED_MODULE_2__(dataAlta).format("DD/MM/YYYY");
                        this.formAcompanhamento.get("dataAlta").setValue(this.acompanhamentoMedico.dataAlta);
                    }
                    else {
                        this.acompanhamentoMedico.dataAlta = '';
                    }
                    //Se ainda não preencheu a versão do app preenche nesse momento. Usado para controle no momento de troca de versão
                    if (this.versionNumber != null) {
                        this.acompanhamentoMedico.appVersion = this.versionNumber;
                    }
                    yield this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, this.acompanhamentoMedico, "senhaAutorizacao.senha");
                }
            }));
            return yield pop.present();
        });
    }
    limparDataAlta() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.dataAlta.reset();
            this.acompanhamentoMedico.dataAlta = '';
            yield this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, this.acompanhamentoMedico, "senhaAutorizacao.senha");
        });
    }
    abrirCalendarioDiaAcompanhamento(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let diaAcompanhamento;
            if (this.diaAcompanhamento.value != null && this.diaAcompanhamento.value != '') {
                diaAcompanhamento = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(this.diaAcompanhamento.value, "DD/MM/YYYY").toISOString());
            }
            else {
                diaAcompanhamento = new Date();
            }
            const pop = yield this.popover.create({
                component: src_app_components_popover_calendario_popover_calendario_component__WEBPACK_IMPORTED_MODULE_19__["PopoverCalendarioComponent"],
                event: ev,
                cssClass: 'popover-custon',
                componentProps: {
                    titulo: 'Dia Acompanhamento',
                    data: diaAcompanhamento
                },
                translucent: true
            });
            pop.onDidDismiss().then((result) => {
                if (result.data) {
                    let diaAcompanhamento = result.data;
                    if (diaAcompanhamento != null && diaAcompanhamento != '') {
                        this.formAcompanhamento.get("diaAcompanhamento").setValue(moment__WEBPACK_IMPORTED_MODULE_2__(diaAcompanhamento).format("DD/MM/YYYY"));
                    }
                    else {
                        this.formAcompanhamento.get("diaAcompanhamento").setValue(moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD/MM/YYYY"));
                    }
                }
            });
            return yield pop.present();
        });
    }
    abrirCalendarioDataEstimadaAlta(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let dataEstimadaAlta;
            if (this.dataEstimadaAlta.value != null && this.dataEstimadaAlta.value != '') {
                dataEstimadaAlta = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(this.dataEstimadaAlta.value, "DD/MM/YYYY").toISOString());
            }
            else {
                dataEstimadaAlta = new Date();
            }
            const pop = yield this.popover.create({
                component: src_app_components_popover_calendario_popover_calendario_component__WEBPACK_IMPORTED_MODULE_19__["PopoverCalendarioComponent"],
                event: ev,
                cssClass: 'popover-custon',
                componentProps: {
                    titulo: 'Data Estimada da Alta',
                    data: dataEstimadaAlta
                },
                translucent: true
            });
            pop.onDidDismiss().then((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (result.data) {
                    let dataEstimadaAlta = result.data;
                    if (dataEstimadaAlta != null && dataEstimadaAlta != '') {
                        let dataEstimadaAltaDate = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(dataEstimadaAlta, "DD/MM/YYYY").toISOString());
                        this.acompanhamentoMedico.dataEstimadaAlta = moment__WEBPACK_IMPORTED_MODULE_2__(dataEstimadaAlta).format("DD/MM/YYYY");
                        this.formAcompanhamento.get("dataEstimadaAlta").setValue(this.acompanhamentoMedico.dataEstimadaAlta);
                        this.flgErroDataEstimadaAlta = false;
                    }
                    else {
                        this.acompanhamentoMedico.dataEstimadaAlta = '';
                    }
                }
            }));
            return yield pop.present();
        });
    }
    limparDataEstimadaAlta() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.dataEstimadaAlta.reset();
            this.acompanhamentoMedico.dataEstimadaAlta = '';
        });
    }
    getUltimaInternacao() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
            let senhaAutorizacao = new src_app_model_SenhaAutorizacao_model__WEBPACK_IMPORTED_MODULE_20__["SenhaAutorizacao"]();
            senhaAutorizacao.senha = this.acompanhamentoMedico.senhaAutorizacao.senha;
            senhaAutorizacao.beneficiario = this.acompanhamentoMedico.beneficiario;
            usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
            senhaAutorizacao.operadora = usuario.operadora;
            const loading = yield this.loading.presentLoading('Buscando última internação...');
            this.senhaAutorizacaoService.getUltimaInternacao(senhaAutorizacao).subscribe((data) => {
                if (data != null) {
                    let ultimaInternacao = data;
                    this.acompanhamentoMedico.ultimaInternacao = ultimaInternacao;
                    loading.dismiss();
                }
                else {
                    loading.dismiss();
                }
            }, error => {
                this.toast.errorToast(error);
                loading.dismiss();
            });
        });
    }
    exibirDados(aba) {
        switch (aba) {
            case 'paciente':
                this.exibeDadosPaciente = !this.exibeDadosPaciente;
                break;
            case 'autorizacao':
                this.exibeDadosAutorizacao = !this.exibeDadosAutorizacao;
                break;
            case 'acompanhamento':
                this.exibeDadosAcompanhamento = !this.exibeDadosAcompanhamento;
                break;
        }
    }
};
ExibirFormDomiciliarPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_5__["SaudiLoadingComponent"] },
    { type: src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_6__["SaudiToastComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: src_app_services_parametros_service__WEBPACK_IMPORTED_MODULE_17__["ParametrosService"] },
    { type: src_app_services_senhaAutorizacao_service__WEBPACK_IMPORTED_MODULE_21__["SenhaAutorizacaoService"] },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_13__["NetworkService"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_14__["StorageService"] },
    { type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_18__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_22__["AppVersion"] }
];
ExibirFormDomiciliarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-exibirForm-domiciliar',
        template: __webpack_require__(/*! raw-loader!./exibirForm-domiciliar.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/acompanhamento/formulario-domiciliar/exibirForm-domiciliar.page.html"),
        styles: [__webpack_require__(/*! ./exibirForm-domiciliar.page.scss */ "./src/app/pages/acompanhamento/formulario-domiciliar/exibirForm-domiciliar.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_5__["SaudiLoadingComponent"],
        src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_6__["SaudiToastComponent"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        src_app_services_parametros_service__WEBPACK_IMPORTED_MODULE_17__["ParametrosService"],
        src_app_services_senhaAutorizacao_service__WEBPACK_IMPORTED_MODULE_21__["SenhaAutorizacaoService"],
        src_app_services_network_service__WEBPACK_IMPORTED_MODULE_13__["NetworkService"],
        src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_14__["StorageService"],
        _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_18__["Geolocation"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"],
        _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_22__["AppVersion"]])
], ExibirFormDomiciliarPage);



/***/ })

}]);
//# sourceMappingURL=pages-acompanhamento-formulario-domiciliar-exibirForm-domiciliar-module-es2015.js.map