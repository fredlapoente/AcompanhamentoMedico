(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-acompanhamento-formulario-exibirFormulario-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/acompanhamento/formulario/exibirFormulario.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/acompanhamento/formulario/exibirFormulario.page.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"ion-text-center\">\r\n        <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/menu-principal\" text=\"\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-uppercase\">Acompanhamento Médico</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n        <ion-menu-button menuId=\"main-content\"></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>   \r\n</ion-header>\r\n<ion-content>\r\n    <form [formGroup]=\"formAcompanhamento\">\r\n       <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"{{opcaoExibir}}\">\r\n            <ion-segment-button value=\"paciente\">\r\n              <ion-label>Paciente</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"acompanhamento\">\r\n              <ion-label>Acompanhamento</ion-label>\r\n            </ion-segment-button>\r\n            <ion-segment-button value=\"alta\">\r\n                <ion-label>Alta</ion-label>\r\n            </ion-segment-button>\r\n        </ion-segment>\r\n        <ion-list *ngIf=\"opcaoExibir == 'paciente'\">\r\n            <ion-item>\r\n                <ion-label>Responsável pelo Acompanhamento:<br><span [innerHTML]=\"acompanhamentoMedico.usuario.nome\"></span></ion-label>                \r\n            </ion-item>\r\n            <ion-card button=\"true\" class=\"stats-card\">\r\n                <ion-card-header (click)=\"exibirDados('paciente')\">\r\n                  <ion-row>\r\n                    <ion-col size=\"10\" class=\"ion-text-center ion-no-padding ion-no-margin\">\r\n                      <ion-card-title>Dados do Paciente</ion-card-title>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" class=\"ion-text-right ion-no-margin ion-no-padding\">\r\n                      <ion-button size=\"small\" fill=\"clear\" class=\"ion-no-padding\">\r\n                        <ion-icon *ngIf=\"!exibeDadosPaciente\" slot=\"icon-only\" name=\"ios-arrow-down\">\r\n                        </ion-icon>\r\n                        <ion-icon *ngIf=\"exibeDadosPaciente\" slot=\"icon-only\" name=\"ios-arrow-up\">\r\n                        </ion-icon>                       \r\n                      </ion-button>\r\n                    </ion-col>\r\n                  </ion-row>                                 \r\n                </ion-card-header>\r\n                <ion-card-content class=\"ion-padding\" *ngIf=\"exibeDadosPaciente\">               \r\n                    <ion-item>\r\n                        <ion-label>Prestador:<br><span [innerHTML]=\"acompanhamentoMedico.prestador.nomePrestador\"></span></ion-label>                \r\n                    </ion-item>        \r\n                    <ion-item>\r\n                        <ion-label>Nome do Paciente:<br><span [innerHTML]=\"acompanhamentoMedico.beneficiario.nomeBeneficiario\"></span></ion-label>                \r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>Número da Carteira do Paciente:<br><span [innerHTML]=\"acompanhamentoMedico.beneficiario.carteiraBeneficiario\"></span></ion-label>                \r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>Data de Nascimento:<br><span [innerHTML]=\"acompanhamentoMedico.beneficiario.dataNascimento\"></span></ion-label>                \r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>Idade:<br><span [innerHTML]=\"acompanhamentoMedico.beneficiario.idade\"></span></ion-label>                \r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>Sexo:<br><span [innerHTML]=\"acompanhamentoMedico.beneficiario.sexo\"></span></ion-label>                \r\n                    </ion-item>                        \r\n                </ion-card-content>  \r\n            </ion-card>\r\n            <ion-card button=\"true\" class=\"stats-card\">\r\n                <ion-card-header (click)=\"exibirDados('autorizacao')\">\r\n                  <ion-row>\r\n                    <ion-col size=\"10\" class=\"ion-text-center ion-no-padding ion-no-margin\">\r\n                      <ion-card-title>Dados da Autorização</ion-card-title>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" class=\"ion-text-right ion-no-margin ion-no-padding\">\r\n                      <ion-button size=\"small\" fill=\"clear\" class=\"ion-no-padding\">\r\n                        <ion-icon *ngIf=\"!exibeDadosAutorizacao\" slot=\"icon-only\" name=\"ios-arrow-down\">\r\n                        </ion-icon>\r\n                        <ion-icon *ngIf=\"exibeDadosAutorizacao\" slot=\"icon-only\" name=\"ios-arrow-up\">\r\n                        </ion-icon>                      \r\n                      </ion-button>\r\n                    </ion-col>\r\n                  </ion-row>                                 \r\n                </ion-card-header>\r\n                <ion-card-content class=\"ion-padding\" *ngIf=\"exibeDadosAutorizacao\">            \r\n                    <ion-item>\r\n                        <ion-label>Senha de Autorização:<br><span [innerHTML]=\"acompanhamentoMedico.senhaAutorizacao.senha\"></span></ion-label>                                        \r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Data da Internação:</ion-label>\r\n                        <ion-input readonly=\"true\" clearInput (click)=\"abrirCalendarioDataInternacao($event)\" formControlName=\"dataInternacao\"></ion-input>\r\n                        <ion-icon *ngIf=\"!dataInternacao.disabled\" name=\"close-circle-outline\" slot=\"end\" class=\"iconCalendar\" (click)=\"limparDataInternacao()\"></ion-icon>\r\n                        <ion-icon *ngIf=\"!dataInternacao.disabled\" name=\"calendar\" slot=\"end\" class=\"iconCalendar\" (click)=\"abrirCalendarioDataInternacao($event)\"></ion-icon>\r\n                    </ion-item>\r\n                    <ion-item mode=\"md\" lines=\"none\" class=\"item-error\" *ngIf=\"((dataInternacao.dirty || dataInternacao.touched) && dataInternacao.hasError('required')) || dataInternacao.hasError('incorrect') || flgErroDataInternacao\">\r\n                        <ion-note color=\"warning\" class=\"ion-padding-horizontal\">Campo obrigatório\r\n                            <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n                        </ion-note>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Hora da Internação:</ion-label>\r\n                        <ion-datetime presentation=\"time\" displayFormat=\"h:mm A\" formControlName=\"horaInternacao\" cancelText=\"Cancelar\" doneText=\"Confirmar\" (ionChange)=\"atualizaCampos()\"></ion-datetime> \r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Justificativa da Internação:</ion-label>\r\n                        <ion-textarea class=\"textarea-margin-background\" formControlName=\"justificativa\" rows=\"6\" cols=\"20\" (ionBlur)=\"atualizaCampos()\"></ion-textarea>                             \r\n                    </ion-item>\r\n                    <ion-item mode=\"md\" lines=\"none\" class=\"item-error\" *ngIf=\"((justificativa.dirty || justificativa.touched) && justificativa.hasError('required')) || justificativa.hasError('incorrect') || flgErroJustificativa\">\r\n                        <ion-note color=\"warning\" class=\"ion-padding-horizontal\">Campo obrigatório\r\n                            <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n                        </ion-note>\r\n                    </ion-item> \r\n                </ion-card-content>    \r\n            </ion-card>\r\n            <ion-card button=\"true\" class=\"stats-card\">\r\n                <ion-card-header (click)=\"exibirDados('acompanhamento')\">\r\n                  <ion-row>\r\n                    <ion-col size=\"10\" class=\"ion-text-center ion-no-padding ion-no-margin\">\r\n                      <ion-card-title>Dados do Acompanhamento</ion-card-title>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" class=\"ion-text-right ion-no-margin ion-no-padding\">\r\n                      <ion-button size=\"small\" fill=\"clear\" class=\"ion-no-padding\">\r\n                        <ion-icon *ngIf=\"!exibeDadosAcompanhamento\" slot=\"icon-only\" name=\"ios-arrow-down\">\r\n                        </ion-icon>\r\n                        <ion-icon *ngIf=\"exibeDadosAcompanhamento\" slot=\"icon-only\" name=\"ios-arrow-up\">\r\n                        </ion-icon>                       \r\n                      </ion-button>\r\n                    </ion-col>\r\n                  </ion-row>                                 \r\n                </ion-card-header>\r\n                <ion-card-content class=\"ion-padding\" *ngIf=\"exibeDadosAcompanhamento\">\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Acomodação Inicial:</ion-label>\r\n                        <!--tem o ngIf no select para corrigir o bug que existe na tag e garantir q venha selecionado o vamor quando tiver-->\r\n                        <ion-select *ngIf=\"listaTipoAcomodacao && listaTipoAcomodacao.length\" formControlName=\"tipoAcomodacao\"  interface=\"action-sheet\" placeholder=\"Selecione\" cancelText=\"Cancelar\" okText=\"Ok\" (ionChange)=\"atualizaCampos()\">\r\n                            <ion-select-option [value]=\"\">Selecione</ion-select-option>\r\n                            <ion-select-option *ngFor=\"let acomodacao of listaTipoAcomodacao\" [value]=\"acomodacao.seqDominio\">{{ acomodacao.desDominio }}</ion-select-option>\r\n                        </ion-select>                \r\n                    </ion-item>\r\n                    <ion-item mode=\"md\" lines=\"none\" class=\"item-error\" *ngIf=\"((tipoAcomodacao.dirty || tipoAcomodacao.touched) && tipoAcomodacao.hasError('required')) || tipoAcomodacao.hasError('incorrect') || flgErroAcomodacao\">\r\n                        <ion-note color=\"warning\" class=\"ion-padding-horizontal\">Campo obrigatório\r\n                            <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n                        </ion-note>\r\n                    </ion-item>                        \r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Tipo de Internação:</ion-label>\r\n                        <!--tem o ngIf no select para corrigir o bug que existe na tag e garantir q venha selecionado o vamor quando tiver-->\r\n                        <ion-select *ngIf=\"listaTipoInternacao && listaTipoInternacao.length\" formControlName=\"tipoInternacao\"  interface=\"action-sheet\" placeholder=\"Selecione\" cancelText=\"Cancelar\" okText=\"Ok\" (ionChange)=\"atualizaCampos()\">\r\n                            <ion-select-option [value]=\"\">Selecione</ion-select-option>\r\n                            <ion-select-option *ngFor=\"let internacao of listaTipoInternacao\" [value]=\"internacao.seqDominio\">{{ internacao.desDominio }}</ion-select-option>\r\n                        </ion-select>                \r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Caráter do Atendimento:</ion-label>\r\n                        <!--tem o ngIf no select para corrigir o bug que existe na tag e garantir q venha selecionado o vamor quando tiver-->\r\n                        <ion-select *ngIf=\"listaCaraterAtendimento && listaCaraterAtendimento.length\" formControlName=\"caraterAtendimento\"  interface=\"action-sheet\" placeholder=\"Selecione\" cancelText=\"Cancelar\" okText=\"Ok\" (ionChange)=\"atualizaCampos()\">\r\n                            <ion-select-option [value]=\"\">Selecione</ion-select-option>\r\n                            <ion-select-option *ngFor=\"let caraterAtend of listaCaraterAtendimento\" [value]=\"caraterAtend.seqDominio\">{{ caraterAtend.desDominio }}</ion-select-option>\r\n                        </ion-select>                \r\n                    </ion-item>         \r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Origem da Internação Inicial:</ion-label>\r\n                        <!--tem o ngIf no select para corrigir o bug que existe na tag e garantir q venha selecionado o vamor quando tiver-->\r\n                        <ion-select *ngIf=\"listaOrigemInternacao && listaOrigemInternacao.length\" formControlName=\"origemInternacao\"  interface=\"action-sheet\" placeholder=\"Selecione\" cancelText=\"Cancelar\" okText=\"Ok\" (ionChange)=\"atualizaCampos()\">\r\n                            <ion-select-option [value]=\"\">Selecione</ion-select-option>\r\n                            <ion-select-option *ngFor=\"let oInternacao of listaOrigemInternacao\" [value]=\"oInternacao.seqDominio\">{{ oInternacao.desDominio }}</ion-select-option>\r\n                        </ion-select>                \r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Médico Assistente:</ion-label>\r\n                        <ion-input type=\"text\" formControlName=\"medicoAssistente\" inputmode=\"text\" (ionBlur)=\"atualizaCampos()\"></ion-input>               \r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">CRM Médico Assistente:</ion-label>\r\n                        <ion-input type=\"text\" pattern=\"[0-9]*\" maxlength=\"10\" inputmode=\"numeric\" formControlName=\"crmMedicoAssistente\" (ionBlur)=\"atualizaCampos()\"></ion-input>               \r\n                    </ion-item>\r\n                    <ion-item mode=\"md\" lines=\"none\" class=\"item-error\" *ngIf=\"crmMedicoAssistente.hasError('pattern')\">            \r\n                        <ion-note color=\"warning\" class=\"ion-padding-horizontal\">Só são permitidos valores numéricos\r\n                            <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n                        </ion-note>\r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">CID de Diagnóstico:</ion-label>\r\n                        <ion-input type=\"text\" maxlength=\"10\" inputmode=\"text\" formControlName=\"cidDiagnostico\" (ionBlur)=\"atualizaCampos()\"></ion-input>               \r\n                    </ion-item>          \r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Data Estimada da Alta:</ion-label>\r\n                        <ion-input readonly=\"true\" clearInput (click)=\"abrirCalendarioDataEstimadaAlta($event)\" formControlName=\"dataEstimadaAlta\"></ion-input>\r\n                        <ion-icon *ngIf=\"!dataEstimadaAlta.disabled\" name=\"close-circle-outline\" slot=\"end\" class=\"iconCalendar\" (click)=\"limparDataEstimadaAlta()\"></ion-icon>\r\n                        <ion-icon *ngIf=\"!dataEstimadaAlta.disabled\" name=\"calendar\" slot=\"end\" class=\"iconCalendar\" (click)=\"abrirCalendarioDataEstimadaAlta($event)\"></ion-icon>\r\n                    </ion-item>                   \r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Observação:</ion-label>\r\n                        <ion-textarea class=\"textarea-margin-background\" formControlName=\"observacao\" rows=\"6\" cols=\"20\" (ionBlur)=\"atualizaCampos()\"></ion-textarea>               \r\n                    </ion-item>\r\n                </ion-card-content>\r\n            </ion-card>\r\n\r\n\r\n            <ion-card button=\"true\" class=\"stats-card\" *ngIf=\"acompanhamentoMedico.ultimaInternacao.senha != null\">\r\n                <ion-card-header (click)=\"exibirDados('ultimaInternacao')\">\r\n                  <ion-row>\r\n                    <ion-col size=\"10\" class=\"ion-text-center ion-no-padding ion-no-margin\">\r\n                      <ion-card-title>Última Internação</ion-card-title>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" class=\"ion-text-right ion-no-margin ion-no-padding\">\r\n                      <ion-button size=\"small\" fill=\"clear\" class=\"ion-no-padding\">\r\n                        <ion-icon *ngIf=\"!exibeDadosUltimaInternacao\" slot=\"icon-only\" name=\"ios-arrow-down\">\r\n                        </ion-icon>\r\n                        <ion-icon *ngIf=\"exibeDadosUltimaInternacao\" slot=\"icon-only\" name=\"ios-arrow-up\">\r\n                        </ion-icon>                        \r\n                      </ion-button>\r\n                    </ion-col>\r\n                  </ion-row>                                 \r\n                </ion-card-header>\r\n                <ion-card-content class=\"ion-padding\" *ngIf=\"exibeDadosUltimaInternacao\">\r\n                    <ion-item>\r\n                        <ion-label>Senha:<br><span [innerHTML]=\"acompanhamentoMedico.ultimaInternacao.senha\"></span></ion-label> \r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>Período Internação:<br><span [innerHTML]=\"acompanhamentoMedico.ultimaInternacao.dataAutorizacaoInicial\"></span> a <span [innerHTML]=\"acompanhamentoMedico.ultimaInternacao.dataAutorizacaoFinal\"></span></ion-label> \r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label>Prestador:<br><span [innerHTML]=\"acompanhamentoMedico.ultimaInternacao.prestador.concatCodNomePrestador\"></span></ion-label> \r\n                    </ion-item>\r\n                    <ion-item>\r\n                        <ion-label position=\"floating\">Motivo:</ion-label> \r\n                        <ion-textarea class=\"textarea-margin-background\" [innerHTML]=\"acompanhamentoMedico.ultimaInternacao.justificativaInternacao\" rows=\"6\" cols=\"20\" readonly></ion-textarea>\r\n                    </ion-item>\r\n                </ion-card-content>\r\n            </ion-card>\r\n        </ion-list>\r\n        <ion-list *ngIf=\"opcaoExibir == 'acompanhamento'\">\r\n            <ion-item>\r\n                <ion-label position=\"floating\">Dia Acompanhamento:</ion-label>\r\n                <ion-input readonly=\"true\" clearInput (click)=\"abrirCalendarioDiaAcompanhamento($event)\" formControlName=\"diaAcompanhamento\"></ion-input>\r\n                <ion-icon *ngIf=\"!diaAcompanhamento.disabled\" name=\"calendar\" slot=\"end\" class=\"iconCalendar\" (click)=\"abrirCalendarioDiaAcompanhamento($event)\"></ion-icon>\r\n            </ion-item>\r\n            <ion-item mode=\"md\" lines=\"none\" class=\"item-error\" *ngIf=\"((diaAcompanhamento.dirty || diaAcompanhamento.touched) && diaAcompanhamento.hasError('required')) || diaAcompanhamento.hasError('incorrect')\">\r\n                <ion-note color=\"warning\" class=\"ion-padding-horizontal\">Campo obrigatório\r\n                    <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n                </ion-note>\r\n            </ion-item>                    \r\n            <ion-item>\r\n                <ion-label>Copiar Último Dia:</ion-label> \r\n                <ion-checkbox slot=\"start\" formControlName=\"flgCopiaUltimoDia\"></ion-checkbox>\r\n            </ion-item>  \r\n            <ion-item>\r\n                <ion-button expand=\"block\" size=\"default\" (click)=\"adicionarDiaAcompanhamento()\" [disabled]=\"acompanhamentoMedico.status === 'ENCERRADO'\">Adicionar</ion-button>\r\n            </ion-item> \r\n            <ion-item *ngIf=\"opcaoExibir == 'acompanhamento' && listaDiasAcompanhamento.length > 0\">\r\n                <ion-label>Dias de Acompanhamento</ion-label> \r\n            </ion-item>           \r\n        </ion-list>\r\n        <ion-card *ngIf=\"listaDiasAcompanhamento.length > 0 && opcaoExibir == 'acompanhamento'\" class=\"ion-no-margin\">\r\n            <ion-card-header class=\"ion-margin-bottom\">\r\n              <ion-card-title class=\"ion-text-center\">Dias de Acompanhamento</ion-card-title>              \r\n            </ion-card-header>\r\n            <ion-item-sliding *ngFor = \"let acompanhamentoDia of listaDiasAcompanhamento; let i=index\">\r\n                <ion-item (click)=\"abrirTelaDiaAcompanhamento(acompanhamentoDia)\">\r\n                    <ion-row>\r\n                        <ion-col size=\"12\">\r\n                          <span class=\"texto-card-text\" [innerHTML]=\"acompanhamentoDia.diaAcompanhamento\"></span> - \r\n                          <span class=\"texto-card-text\" [innerHTML]=\"acompanhamentoDia.diaSemanaAcompanhamento\"></span>\r\n                          <br>\r\n                          <span class=\"texto-card-label\">Sincronismo: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamentoDia.statusSincronismo\"></span>\r\n                          <br>\r\n                          <ion-note color=\"warning\" *ngIf=\"!verificaDiasCamposObrigatorios(acompanhamentoDia)\">Campo(s) Obrigatório(s) não preenchido(s)\r\n                            <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n                          </ion-note>\r\n                        </ion-col>\r\n                    </ion-row>                    \r\n                </ion-item>\r\n                <ion-item-options>\r\n                    <ion-button expand=\"block\" (click)=\"apagarDiaAcompanhamento(i)\" [disabled]=\"acompanhamentoMedico.status === 'ENCERRADO'\">\r\n                        <ion-icon name=\"trash\"></ion-icon>Excluir\r\n                    </ion-button>\r\n                </ion-item-options>\r\n            </ion-item-sliding>\r\n        </ion-card>\r\n        <ion-list *ngIf=\"opcaoExibir == 'alta'\">\r\n            <ion-item>\r\n                <ion-label position=\"floating\">Data da Alta:</ion-label>\r\n                <ion-input readonly=\"true\" clearInput (click)=\"abrirCalendarioDataAlta($event)\" formControlName=\"dataAlta\"></ion-input>\r\n                <ion-icon *ngIf=\"!dataAlta.disabled\" name=\"close-circle-outline\" slot=\"end\" class=\"iconCalendar\" (click)=\"limparDataAlta()\"></ion-icon>\r\n                <ion-icon *ngIf=\"!dataAlta.disabled\" name=\"calendar\" slot=\"end\" class=\"iconCalendar\" (click)=\"abrirCalendarioDataAlta($event)\"></ion-icon>\r\n            </ion-item>           \r\n            <ion-item>\r\n                <ion-label position=\"floating\">Motivo da Alta:</ion-label>\r\n                <!--tem o ngIf no select para corrigir o bug que existe na tag e garantir q venha selecionado o vamor quando tiver-->\r\n                <ion-select *ngIf=\"listaMotivosAlta && listaMotivosAlta.length\" formControlName=\"motivoAlta\"  interface=\"action-sheet\" placeholder=\"Selecione\" cancelText=\"Cancelar\" okText=\"Ok\" (ionChange)=\"atualizaCampos()\">\r\n                    <ion-select-option [value]=\"\">Selecione</ion-select-option>\r\n                    <ion-select-option *ngFor=\"let motivo of listaMotivosAlta\" [value]=\"motivo.seqDominio\">{{ motivo.desDominio }}</ion-select-option>\r\n                </ion-select>                \r\n            </ion-item>\r\n            <ion-row>\r\n                <ion-col size=\"12\" class=\"ion-text-center\">\r\n                    <ion-button id=\"btnEncerrarAuditoria\" expand=\"block\" size=\"large\" [disabled]=\"!formAcompanhamento.valid || acompanhamentoMedico.status === 'ENCERRADO' || listaDiasAcompanhamento.length === 0\" (click)=\"encerrarAuditoria()\">Encerrar Auditoria</ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-list>     \r\n    </form>    \r\n</ion-content>  "

/***/ }),

/***/ "./src/app/pages/acompanhamento/formulario/exibirFormulario-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/formulario/exibirFormulario-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: ExibirFormularioPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExibirFormularioPageRoutingModule", function() { return ExibirFormularioPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _exibirFormulario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exibirFormulario.page */ "./src/app/pages/acompanhamento/formulario/exibirFormulario.page.ts");




var routes = [
    {
        path: '',
        component: _exibirFormulario_page__WEBPACK_IMPORTED_MODULE_3__["ExibirFormularioPage"]
    }
];
var ExibirFormularioPageRoutingModule = /** @class */ (function () {
    function ExibirFormularioPageRoutingModule() {
    }
    ExibirFormularioPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ExibirFormularioPageRoutingModule);
    return ExibirFormularioPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/acompanhamento/formulario/exibirFormulario.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/formulario/exibirFormulario.module.ts ***!
  \****************************************************************************/
/*! exports provided: ExibirFormularioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExibirFormularioPageModule", function() { return ExibirFormularioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _exibirFormulario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exibirFormulario-routing.module */ "./src/app/pages/acompanhamento/formulario/exibirFormulario-routing.module.ts");
/* harmony import */ var _exibirFormulario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exibirFormulario.page */ "./src/app/pages/acompanhamento/formulario/exibirFormulario.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var ExibirFormularioPageModule = /** @class */ (function () {
    function ExibirFormularioPageModule() {
    }
    ExibirFormularioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _exibirFormulario_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExibirFormularioPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_exibirFormulario_page__WEBPACK_IMPORTED_MODULE_6__["ExibirFormularioPage"]]
        })
    ], ExibirFormularioPageModule);
    return ExibirFormularioPageModule;
}());



/***/ }),

/***/ "./src/app/pages/acompanhamento/formulario/exibirFormulario.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/formulario/exibirFormulario.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-item-sliding {\n  display: block;\n  position: relative;\n  width: 95%;\n  overflow: hidden;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ion-margin-bottom, [margin-bottom] {\n  margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 2px);\n}\n\nion-item-options ion-button {\n  height: auto;\n}\n\nion-item-sliding ion-item {\n  --inner-border-width: 0 0 0px 0;\n  --border-width: 1px 1px 1px;\n  --border-radius: 10px;\n  --border-color:var(--ion-color-secondary-shade);\n  -webkit-margin-before: 2px;\n          margin-block-start: 2px;\n  -webkit-margin-after: 5px;\n          margin-block-end: 5px;\n}\n\nion-select {\n  margin-top: 10px;\n  margin-bottom: 5px;\n  background-color: var(--ion-color-light-tint);\n}\n\nion-datetime {\n  margin-top: 30px;\n  margin-bottom: 5px;\n  background-color: var(--ion-color-light-tint);\n  opacity: unset;\n}\n\n.item-has-focus.label-floating.sc-ion-label-md-h, .item-has-focus .label-floating.sc-ion-label-md-h, .item-has-placeholder.label-floating.sc-ion-label-md-h, .item-has-placeholder .label-floating.sc-ion-label-md-h, .item-has-value.label-floating.sc-ion-label-md-h, .item-has-value .label-floating.sc-ion-label-md-h {\n  font-size: 22px;\n}\n\n.item-has-focus.label-floating.sc-ion-label-ios-h, .item-has-focus .label-floating.sc-ion-label-ios-h, .item-has-placeholder.label-floating.sc-ion-label-ios-h, .item-has-placeholder .label-floating.sc-ion-label-ios-h, .item-has-value.label-floating.sc-ion-label-ios-h, .item-has-value .label-floating.sc-ion-label-ios-h {\n  font-size: 22px;\n  -webkit-transform: none;\n          transform: none;\n}\n\n.label-floating.sc-ion-label-ios-h {\n  font-size: 22px;\n}\n\n.textarea-margin-background {\n  margin-top: 30px;\n  margin-bottom: 5px;\n  background-color: var(--ion-color-light-tint);\n}\n\n.iconCalendar {\n  margin-top: auto;\n}\n\nion-input {\n  margin-top: 30px;\n  margin-bottom: 5px;\n  background-color: var(--ion-color-light-tint);\n  opacity: unset;\n  font-weight: 100;\n}\n\n.label-size18-left10 {\n  font-size: 18px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNvbXBhbmhhbWVudG8vZm9ybXVsYXJpby9DOlxcRGVzZW5cXHdvcmtzcGFjZV9hcGxpY2F0aXZvXFxBcHBBY29tcGFuaGFtZW50b01lZGljby9zcmNcXGFwcFxccGFnZXNcXGFjb21wYW5oYW1lbnRvXFxmb3JtdWxhcmlvXFxleGliaXJGb3JtdWxhcmlvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWNvbXBhbmhhbWVudG8vZm9ybXVsYXJpby9leGliaXJGb3JtdWxhcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLHNDQUFBO0VBQ0EscUNBQUE7QUNDSjs7QURHSTtFQUNFLFlBQUE7QUNBTjs7QURNSTtFQUNJLCtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLCtDQUFBO0VBQ0EsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7QUNIUjs7QURPQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQ0pKOztBRE9BO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsY0FBQTtBQ0pKOztBRE9BO0VBQ0ksZUFBQTtBQ0pKOztBRE9BO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO1VBQUEsZUFBQTtBQ0pKOztBRE9BO0VBQ0ksZUFBQTtBQ0pKOztBRE9BO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDSko7O0FET0E7RUFDSSxnQkFBQTtBQ0pKOztBRE9BO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDSko7O0FET0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fjb21wYW5oYW1lbnRvL2Zvcm11bGFyaW8vZXhpYmlyRm9ybXVsYXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLWl0ZW0tc2xpZGluZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5pb24tbWFyZ2luLWJvdHRvbSwgW21hcmdpbi1ib3R0b21dIHtcclxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMnB4KTtcclxufSAgICAgICAgICAgICAgICAgICBcclxuXHJcbmlvbi1pdGVtLW9wdGlvbnN7XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5pb24taXRlbS1zbGlkaW5ne1xyXG5cclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDFweCAxcHggMXB4O1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAtLWJvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlKTtcclxuICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDJweDtcclxuICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiA1cHg7XHJcbiAgICB9ICBcclxufVxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpOyAgIFxyXG59XHJcblxyXG5pb24tZGF0ZXRpbWUge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTsgXHJcbiAgICBvcGFjaXR5OiB1bnNldDsgIFxyXG59XHJcblxyXG4uaXRlbS1oYXMtZm9jdXMubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgsIC5pdGVtLWhhcy1mb2N1cyAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgsIC5pdGVtLWhhcy1wbGFjZWhvbGRlci5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaCwgLml0ZW0taGFzLXBsYWNlaG9sZGVyIC5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaCwgLml0ZW0taGFzLXZhbHVlLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1tZC1oLCAuaXRlbS1oYXMtdmFsdWUgLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1tZC1oe1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uaXRlbS1oYXMtZm9jdXMubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLWlvcy1oLCAuaXRlbS1oYXMtZm9jdXMgLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1pb3MtaCwgLml0ZW0taGFzLXBsYWNlaG9sZGVyLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1pb3MtaCwgLml0ZW0taGFzLXBsYWNlaG9sZGVyIC5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtaW9zLWgsIC5pdGVtLWhhcy12YWx1ZS5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtaW9zLWgsIC5pdGVtLWhhcy12YWx1ZSAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLWlvcy1oe1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4ubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLWlvcy1oe1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4udGV4dGFyZWEtbWFyZ2luLWJhY2tncm91bmR7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpO1xyXG59XHJcblxyXG4uaWNvbkNhbGVuZGFyIHtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpOyBcclxuICAgIG9wYWNpdHk6IHVuc2V0OyBcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7IFxyXG59XHJcblxyXG4ubGFiZWwtc2l6ZTE4LWxlZnQxMHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59IiwiLmlvbi1pdGVtLXNsaWRpbmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogOTUlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uaW9uLW1hcmdpbi1ib3R0b20sIFttYXJnaW4tYm90dG9tXSB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAycHgpO1xufVxuXG5pb24taXRlbS1vcHRpb25zIGlvbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbmlvbi1pdGVtLXNsaWRpbmcgaW9uLWl0ZW0ge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICAtLWJvcmRlci13aWR0aDogMXB4IDFweCAxcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweDtcbiAgLS1ib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZSk7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMnB4O1xuICBtYXJnaW4tYmxvY2stZW5kOiA1cHg7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbn1cblxuaW9uLWRhdGV0aW1lIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XG4gIG9wYWNpdHk6IHVuc2V0O1xufVxuXG4uaXRlbS1oYXMtZm9jdXMubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgsIC5pdGVtLWhhcy1mb2N1cyAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLW1kLWgsIC5pdGVtLWhhcy1wbGFjZWhvbGRlci5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaCwgLml0ZW0taGFzLXBsYWNlaG9sZGVyIC5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaCwgLml0ZW0taGFzLXZhbHVlLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1tZC1oLCAuaXRlbS1oYXMtdmFsdWUgLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uaXRlbS1oYXMtZm9jdXMubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLWlvcy1oLCAuaXRlbS1oYXMtZm9jdXMgLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1pb3MtaCwgLml0ZW0taGFzLXBsYWNlaG9sZGVyLmxhYmVsLWZsb2F0aW5nLnNjLWlvbi1sYWJlbC1pb3MtaCwgLml0ZW0taGFzLXBsYWNlaG9sZGVyIC5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtaW9zLWgsIC5pdGVtLWhhcy12YWx1ZS5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtaW9zLWgsIC5pdGVtLWhhcy12YWx1ZSAubGFiZWwtZmxvYXRpbmcuc2MtaW9uLWxhYmVsLWlvcy1oIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtaW9zLWgge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi50ZXh0YXJlYS1tYXJnaW4tYmFja2dyb3VuZCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQpO1xufVxuXG4uaWNvbkNhbGVuZGFyIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cblxuaW9uLWlucHV0IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XG4gIG9wYWNpdHk6IHVuc2V0O1xuICBmb250LXdlaWdodDogMTAwO1xufVxuXG4ubGFiZWwtc2l6ZTE4LWxlZnQxMCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/acompanhamento/formulario/exibirFormulario.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/formulario/exibirFormulario.page.ts ***!
  \**************************************************************************/
/*! exports provided: ExibirFormularioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExibirFormularioPage", function() { return ExibirFormularioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/saudi-loading/saudi-loading.component */ "./src/app/components/saudi-loading/saudi-loading.component.ts");
/* harmony import */ var src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/saudi-toast/saudi-toast.component */ "./src/app/components/saudi-toast/saudi-toast.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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























var ExibirFormularioPage = /** @class */ (function () {
    function ExibirFormularioPage(router, formBuilder, navCtrl, loading, toast, atrCtrl, parametrosService, senhaAutorizacaoService, networkService, storageService, geolocation, popover, appVersion) {
        var _this = this;
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
        this.listaTipoAcomodacao = [];
        this.listaTipoInternacao = [];
        this.listaCaraterAtendimento = [];
        this.listaOrigemInternacao = [];
        this.opcaoExibir = "paciente";
        this.flgErroJustificativa = false;
        this.flgErroAcomodacao = false;
        this.flgErroTipoInternacao = false;
        this.flgErroCaraterAtendimento = false;
        this.flgErroOrigemInternacao = false;
        this.flgErroDataInternacao = false;
        this.flgErroHoraInternacao = false;
        this.flgErroMedicoAssistente = false;
        this.flgErroCrmMedicoAssistente = false;
        this.flgErroCidDiagnostico = false;
        this.flgErroDataEstimadaAlta = false;
        this.exibeDadosPaciente = false;
        this.exibeDadosAutorizacao = false;
        this.exibeDadosAcompanhamento = false;
        this.exibeDadosUltimaInternacao = false;
        this.appVersion.getVersionNumber().then(function (value) {
            _this.versionNumber = value;
            console.log("VERSION NUMBER >>> " + _this.versionNumber);
        }).catch(function (error) {
            console.log('Error getting version', error);
        });
    }
    ExibirFormularioPage.prototype.ngOnInit = function () {
        moment__WEBPACK_IMPORTED_MODULE_2__["locale"]('pt-br');
        this.exibeFormulario();
        this.getCurrentCoordinates();
    };
    Object.defineProperty(ExibirFormularioPage.prototype, "dataInternacao", {
        get: function () {
            return this.formAcompanhamento.get('dataInternacao');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExibirFormularioPage.prototype, "horaInternacao", {
        get: function () {
            return this.formAcompanhamento.get('horaInternacao');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExibirFormularioPage.prototype, "justificativa", {
        get: function () {
            return this.formAcompanhamento.get('justificativa');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExibirFormularioPage.prototype, "dataAlta", {
        get: function () {
            return this.formAcompanhamento.get('dataAlta');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExibirFormularioPage.prototype, "motivoAlta", {
        get: function () {
            return this.formAcompanhamento.get('motivoAlta');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExibirFormularioPage.prototype, "tipoAcomodacao", {
        get: function () {
            return this.formAcompanhamento.get('tipoAcomodacao');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExibirFormularioPage.prototype, "tipoInternacao", {
        get: function () {
            return this.formAcompanhamento.get('tipoInternacao');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExibirFormularioPage.prototype, "caraterAtendimento", {
        get: function () {
            return this.formAcompanhamento.get('caraterAtendimento');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExibirFormularioPage.prototype, "origemInternacao", {
        get: function () {
            return this.formAcompanhamento.get('origemInternacao');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExibirFormularioPage.prototype, "medicoAssistente", {
        get: function () {
            return this.formAcompanhamento.get('medicoAssistente');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExibirFormularioPage.prototype, "crmMedicoAssistente", {
        get: function () {
            return this.formAcompanhamento.get('crmMedicoAssistente');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExibirFormularioPage.prototype, "cidDiagnostico", {
        get: function () {
            return this.formAcompanhamento.get('cidDiagnostico');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExibirFormularioPage.prototype, "dataEstimadaAlta", {
        get: function () {
            return this.formAcompanhamento.get('dataEstimadaAlta');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExibirFormularioPage.prototype, "observacao", {
        get: function () {
            return this.formAcompanhamento.get('observacao');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExibirFormularioPage.prototype, "diaAcompanhamento", {
        get: function () {
            return this.formAcompanhamento.get('diaAcompanhamento');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExibirFormularioPage.prototype, "flgCopiaUltimoDia", {
        get: function () {
            return this.formAcompanhamento.get('flgCopiaUltimoDia');
        },
        enumerable: true,
        configurable: true
    });
    ExibirFormularioPage.prototype.exibeFormulario = function () {
        this.buscaTipoAcomodacao();
        this.buscaTipoInternacao();
        this.buscaCaraterAtendimento();
        this.buscaOrigemInternacao();
        this.buscaMotivosAlta();
        var flgAbrindo = false;
        var getNav = this.router.getCurrentNavigation();
        if (getNav.extras.state) {
            this.acompanhamentoMedico = getNav.extras.state.acompanhamentoMedico;
            flgAbrindo = getNav.extras.state.flgAbrindo;
        }
        else {
            this.toast.errorToast('Ocorreu um erro inesperado, por favor tente novamente.');
            this.navCtrl.navigateBack('menu-principal/listarSenhas');
        }
        this.formAcompanhamento = this.formBuilder.group({
            dataInternacao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            horaInternacao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            justificativa: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            dataAlta: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            motivoAlta: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            tipoAcomodacao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            tipoInternacao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            caraterAtendimento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            origemInternacao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            medicoAssistente: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            crmMedicoAssistente: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            cidDiagnostico: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            dataEstimadaAlta: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            observacao: [''],
            diaAcompanhamento: [moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD/MM/YYYY"), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            flgCopiaUltimoDia: [false]
        });
        this.acompanhamentoMedico.dataUltimaVisualizacao = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD/MM/YYYY");
        if (this.acompanhamentoMedico.senhaAutorizacao.dataInternacao != null && this.acompanhamentoMedico.senhaAutorizacao.dataInternacao != '') {
            this.formAcompanhamento.get("dataInternacao").setValue(this.acompanhamentoMedico.senhaAutorizacao.dataInternacao);
        }
        if (this.acompanhamentoMedico.senhaAutorizacao.horaInternacao != null && this.acompanhamentoMedico.senhaAutorizacao.horaInternacao != '') {
            this.formAcompanhamento.get("horaInternacao").setValue(this.acompanhamentoMedico.senhaAutorizacao.horaInternacao);
        }
        if (this.acompanhamentoMedico.diagnosticoInternacao != null && this.acompanhamentoMedico.diagnosticoInternacao != '') {
            this.formAcompanhamento.get("justificativa").setValue(this.acompanhamentoMedico.diagnosticoInternacao);
        }
        if (flgAbrindo) {
            this.listaDiasAcompanhamento = [];
            this.flgCopiaUltimoDia.disable();
            this.adicionarAcompanhamentoMedicoDispositivo();
        }
        else {
            if (this.acompanhamentoMedico.dataAlta) {
                this.formAcompanhamento.get("dataAlta").setValue(this.acompanhamentoMedico.dataAlta);
            }
            if (this.acompanhamentoMedico.tipoAcomodacao && this.acompanhamentoMedico.tipoAcomodacao.seqDominio) {
                this.formAcompanhamento.get("tipoAcomodacao").setValue(this.acompanhamentoMedico.tipoAcomodacao.seqDominio);
            }
            if (this.acompanhamentoMedico.tipoInternacao && this.acompanhamentoMedico.tipoInternacao.seqDominio) {
                this.formAcompanhamento.get("tipoInternacao").setValue(this.acompanhamentoMedico.tipoInternacao.seqDominio);
            }
            if (this.acompanhamentoMedico.caraterAtendimento && this.acompanhamentoMedico.caraterAtendimento.seqDominio) {
                this.formAcompanhamento.get("caraterAtendimento").setValue(this.acompanhamentoMedico.caraterAtendimento.seqDominio);
            }
            if (this.acompanhamentoMedico.origemInternacao && this.acompanhamentoMedico.origemInternacao.seqDominio) {
                this.formAcompanhamento.get("origemInternacao").setValue(this.acompanhamentoMedico.origemInternacao.seqDominio);
            }
            if (this.acompanhamentoMedico.medicoAssistente) {
                this.formAcompanhamento.get("medicoAssistente").setValue(this.acompanhamentoMedico.medicoAssistente);
            }
            if (this.acompanhamentoMedico.crmMedicoAssistente) {
                this.formAcompanhamento.get("crmMedicoAssistente").setValue(this.acompanhamentoMedico.crmMedicoAssistente);
            }
            if (this.acompanhamentoMedico.cidDiagnostico && this.acompanhamentoMedico.cidDiagnostico.codDominio) {
                this.formAcompanhamento.get("cidDiagnostico").setValue(this.acompanhamentoMedico.cidDiagnostico.codDominio);
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
                this.dataInternacao.disable();
                this.horaInternacao.disable();
                this.justificativa.disable();
                this.dataAlta.disable();
                this.tipoAcomodacao.disable();
                this.tipoInternacao.disable();
                this.caraterAtendimento.disable();
                this.origemInternacao.disable();
                this.medicoAssistente.disable();
                this.crmMedicoAssistente.disable();
                this.cidDiagnostico.disable();
                this.dataEstimadaAlta.disable();
                this.motivoAlta.disable();
                this.observacao.disable();
                this.diaAcompanhamento.disable();
                this.flgCopiaUltimoDia.disable();
            }
            this.atualizarAcompanhamentoMedicoDispositivo();
        }
        this.getUltimaInternacao();
    };
    ExibirFormularioPage.prototype.adicionarAcompanhamentoMedicoDispositivo = function () {
        this.storageService.adicionar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, this.acompanhamentoMedico);
    };
    ExibirFormularioPage.prototype.segmentChanged = function (ev) {
        this.opcaoExibir = ev.detail.value;
    };
    ExibirFormularioPage.prototype.buscaMotivosAlta = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.networkService.CheckNetworkStatus();
                        if (!this.networkService.NetworkStatus.value) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.buscaMotivosAltaOnline()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.buscaMotivosAltaOffline()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ExibirFormularioPage.prototype.buscaMotivosAltaOnline = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var operadora, dominioCodigo, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_9__["Operadora"];
                        dominioCodigo = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"];
                        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
                        dominioCodigo.codTabela = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].TABELA_MOTIVO_ALTA;
                        dominioCodigo.operadora = operadora;
                        return [4 /*yield*/, this.loading.presentLoading('Buscando Motivos de Alta...')];
                    case 1:
                        loading = _a.sent();
                        this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(function (data) {
                            _this.listaMotivosAlta = data;
                            loading.dismiss();
                        }, function (error) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.buscaMotivosAltaOffline()];
                                    case 1:
                                        _a.sent();
                                        loading.dismiss();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ExibirFormularioPage.prototype.buscaMotivosAltaOffline = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading.presentLoading('Buscando Motivos de Alta...')];
                    case 1:
                        loading = _a.sent();
                        this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_MOTIVO_SAIDA).then(function (items) {
                            if (items != null) {
                                _this.listaMotivosAlta = items;
                                loading.dismiss();
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
    ExibirFormularioPage.prototype.buscaTipoAcomodacao = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.networkService.CheckNetworkStatus();
                        if (!this.networkService.NetworkStatus.value) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.buscaTipoAcomodacaoOnline()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.buscaTipoAcomodacaoOffline()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ExibirFormularioPage.prototype.buscaTipoAcomodacaoOnline = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var operadora, dominioCodigo, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_9__["Operadora"];
                        dominioCodigo = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"];
                        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
                        dominioCodigo.codTabela = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].TABELA_TIPO_ACOMODACAO;
                        dominioCodigo.operadora = operadora;
                        return [4 /*yield*/, this.loading.presentLoading('Buscando Acomodação...')];
                    case 1:
                        loading = _a.sent();
                        this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(function (data) {
                            _this.listaTipoAcomodacao = data;
                            loading.dismiss();
                        }, function (error) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.buscaTipoAcomodacaoOffline()];
                                    case 1:
                                        _a.sent();
                                        loading.dismiss();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ExibirFormularioPage.prototype.buscaTipoAcomodacaoOffline = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading.presentLoading('Buscando Acomodação...')];
                    case 1:
                        loading = _a.sent();
                        this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_TIPO_ACOMODACAO).then(function (items) {
                            if (items != null) {
                                _this.listaTipoAcomodacao = items;
                                loading.dismiss();
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
    ExibirFormularioPage.prototype.buscaTipoInternacao = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.networkService.CheckNetworkStatus();
                        if (!this.networkService.NetworkStatus.value) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.buscaTipoInternacaoOnline()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.buscaTipoInternacaoOffline()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ExibirFormularioPage.prototype.buscaTipoInternacaoOnline = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var operadora, dominioCodigo, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_9__["Operadora"];
                        dominioCodigo = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"];
                        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
                        dominioCodigo.codTabela = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].TABELA_TIPO_INTERNACAO;
                        dominioCodigo.operadora = operadora;
                        return [4 /*yield*/, this.loading.presentLoading('Buscando Tipo de Internação...')];
                    case 1:
                        loading = _a.sent();
                        this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(function (data) {
                            _this.listaTipoInternacao = data;
                            loading.dismiss();
                        }, function (error) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.buscaTipoInternacaoOffline()];
                                    case 1:
                                        _a.sent();
                                        loading.dismiss();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ExibirFormularioPage.prototype.buscaTipoInternacaoOffline = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading.presentLoading('Buscando Tipo de Internação...')];
                    case 1:
                        loading = _a.sent();
                        this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_TIPO_INTERNACAO).then(function (items) {
                            if (items != null) {
                                _this.listaTipoInternacao = items;
                                loading.dismiss();
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
    ExibirFormularioPage.prototype.buscaCaraterAtendimento = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.networkService.CheckNetworkStatus();
                        if (!this.networkService.NetworkStatus.value) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.buscaCaraterAtendimentoOnline()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.buscaCaraterAtendimentoOffline()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ExibirFormularioPage.prototype.buscaCaraterAtendimentoOnline = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var operadora, dominioCodigo, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_9__["Operadora"];
                        dominioCodigo = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"];
                        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
                        dominioCodigo.codTabela = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].TABELA_CARATER_ATENDIMENTO;
                        dominioCodigo.operadora = operadora;
                        return [4 /*yield*/, this.loading.presentLoading('Buscando Caráter do Atendimento...')];
                    case 1:
                        loading = _a.sent();
                        this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(function (data) {
                            _this.listaCaraterAtendimento = data;
                            loading.dismiss();
                        }, function (error) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.buscaCaraterAtendimentoOffline()];
                                    case 1:
                                        _a.sent();
                                        loading.dismiss();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ExibirFormularioPage.prototype.buscaCaraterAtendimentoOffline = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading.presentLoading('Buscando Caráter do Atendimento...')];
                    case 1:
                        loading = _a.sent();
                        this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_CARATER_ATENDIMENTO).then(function (items) {
                            if (items != null) {
                                _this.listaCaraterAtendimento = items;
                                loading.dismiss();
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
    ExibirFormularioPage.prototype.buscaOrigemInternacao = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.networkService.CheckNetworkStatus();
                        if (!this.networkService.NetworkStatus.value) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.buscaOrigemInternacaoOnline()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.buscaOrigemInternacaoOffline()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ExibirFormularioPage.prototype.buscaOrigemInternacaoOnline = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var operadora, dominioCodigo, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_9__["Operadora"];
                        dominioCodigo = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"];
                        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
                        dominioCodigo.codTabela = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].TABELA_ORIGEM_INTERNACAO;
                        dominioCodigo.operadora = operadora;
                        return [4 /*yield*/, this.loading.presentLoading('Buscando Origem Internação...')];
                    case 1:
                        loading = _a.sent();
                        this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(function (data) {
                            _this.listaOrigemInternacao = data;
                            loading.dismiss();
                        }, function (error) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.buscaOrigemInternacaoOffline()];
                                    case 1:
                                        _a.sent();
                                        loading.dismiss();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ExibirFormularioPage.prototype.buscaOrigemInternacaoOffline = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loading.presentLoading('Buscando Origem Internação...')];
                    case 1:
                        loading = _a.sent();
                        this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_ORIGEM_INTERNACAO).then(function (items) {
                            if (items != null) {
                                _this.listaOrigemInternacao = items;
                                loading.dismiss();
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
    ExibirFormularioPage.prototype.adicionarDiaAcompanhamento = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var usuario, dataAtual, dataDiaAcompanhamento, dataInternacao, acompanhamentoMedicoDia_1, tipoAcomodacao, tipoInternacao, caraterAtendimento, origemInternacao, motivoAlta, acompanhamentoMedicoDia_2, acompamentoDiaCopiado;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
                usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
                //Valida os campos obrigatórios    
                if (!this.justificativa.valid || !this.dataInternacao.valid || !this.horaInternacao.valid || this.tipoAcomodacao.value == "" ||
                    this.tipoInternacao.value == "" || this.caraterAtendimento.value == "" || this.origemInternacao.value == "" ||
                    !this.medicoAssistente.valid || !this.crmMedicoAssistente.valid || !this.cidDiagnostico.valid ||
                    !this.dataEstimadaAlta.valid || this.diaAcompanhamento.invalid) {
                    this.toast.errorToast('Preencha os campos obrigatórios.');
                    if (!this.justificativa.valid) {
                        this.justificativa.setErrors({ 'incorrect': true });
                        this.justificativa.invalid;
                        this.opcaoExibir = "paciente";
                        this.flgErroJustificativa = true;
                        this.exibeDadosAutorizacao = true;
                    }
                    if (this.tipoAcomodacao.value == "") {
                        this.flgErroAcomodacao = true;
                        this.opcaoExibir = "paciente";
                        this.exibeDadosAcompanhamento = true;
                    }
                    if (this.tipoInternacao.value == "") {
                        this.flgErroTipoInternacao = true;
                        this.opcaoExibir = "paciente";
                        this.exibeDadosAcompanhamento = true;
                    }
                    if (this.caraterAtendimento.value == "") {
                        this.flgErroCaraterAtendimento = true;
                        this.opcaoExibir = "paciente";
                        this.exibeDadosAcompanhamento = true;
                    }
                    if (this.origemInternacao.value == "") {
                        this.flgErroOrigemInternacao = true;
                        this.opcaoExibir = "paciente";
                        this.exibeDadosAcompanhamento = true;
                    }
                    if (!this.medicoAssistente.valid) {
                        this.medicoAssistente.setErrors({ 'incorrect': true });
                        this.medicoAssistente.invalid;
                        this.opcaoExibir = "paciente";
                        this.flgErroMedicoAssistente = true;
                        this.exibeDadosAcompanhamento = true;
                    }
                    if (!this.crmMedicoAssistente.valid) {
                        this.crmMedicoAssistente.setErrors({ 'incorrect': true });
                        this.crmMedicoAssistente.invalid;
                        this.opcaoExibir = "paciente";
                        this.flgErroCrmMedicoAssistente = true;
                        this.exibeDadosAcompanhamento = true;
                    }
                    if (!this.cidDiagnostico.valid) {
                        this.cidDiagnostico.setErrors({ 'incorrect': true });
                        this.cidDiagnostico.invalid;
                        this.opcaoExibir = "paciente";
                        this.flgErroCidDiagnostico = true;
                        this.exibeDadosAcompanhamento = true;
                    }
                    if (!this.dataEstimadaAlta.valid) {
                        this.dataEstimadaAlta.setErrors({ 'incorrect': true });
                        this.dataEstimadaAlta.invalid;
                        this.opcaoExibir = "paciente";
                        this.flgErroDataEstimadaAlta = true;
                        this.exibeDadosAcompanhamento = true;
                    }
                    if (!this.dataInternacao.valid) {
                        this.dataInternacao.setErrors({ 'incorrect': true });
                        this.dataInternacao.invalid;
                        this.opcaoExibir = "paciente";
                        this.flgErroDataInternacao = true;
                        this.exibeDadosAutorizacao = true;
                    }
                    if (!this.horaInternacao.valid) {
                        this.horaInternacao.setErrors({ 'incorrect': true });
                        this.horaInternacao.invalid;
                        this.opcaoExibir = "paciente";
                        this.flgErroHoraInternacao = true;
                        this.exibeDadosAutorizacao = true;
                    }
                    if (this.diaAcompanhamento.invalid) {
                        this.diaAcompanhamento.setErrors({ 'incorrect': true });
                        this.diaAcompanhamento.invalid;
                    }
                }
                else {
                    //Valida o dia do acompanhamento
                    if (this.diaAcompanhamento.valid) {
                        dataAtual = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(moment__WEBPACK_IMPORTED_MODULE_2__().format("DD/MM/YYYY"), "DD/MM/YYYY").toISOString());
                        dataDiaAcompanhamento = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(this.diaAcompanhamento.value, "DD/MM/YYYY").toISOString());
                        dataInternacao = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(this.dataInternacao.value, "DD/MM/YYYY").toISOString());
                        if (this.acompanhamentoMedico.listaAcompanhamentoDia != null && this.acompanhamentoMedico.listaAcompanhamentoDia.length > 0) {
                            acompanhamentoMedicoDia_1 = new src_app_model_AcompanhamentoMedicoDia_model__WEBPACK_IMPORTED_MODULE_15__["AcompanhamentoMedicoDia"]();
                            acompanhamentoMedicoDia_1 = this.acompanhamentoMedico.listaAcompanhamentoDia.find(function (x) { return x.diaAcompanhamento === _this.diaAcompanhamento.value; });
                            if (acompanhamentoMedicoDia_1 != null) {
                                this.toast.errorToast('Dia de Acompanhamento existente !');
                                return [2 /*return*/];
                            }
                        }
                        if (dataInternacao > dataDiaAcompanhamento) {
                            this.toast.errorToast('Dia de acompanhamento não pode ser anterior a data de internação.');
                            return [2 /*return*/];
                        }
                        if (dataAtual < dataDiaAcompanhamento) {
                            this.toast.errorToast('Dia de acompanhamento não pode ser posterior a data atual.');
                            return [2 /*return*/];
                        }
                        if (usuario.operadora.flagBloqueiaDiaAnterior === 1 && dataAtual > dataDiaAcompanhamento) {
                            this.toast.errorToast('Dia de acompanhamento não pode ser anterior a data atual.');
                            return [2 /*return*/];
                        }
                        if (usuario.operadora.flagBloqueiaVisitaAcomp === 1 && dataAtual.getMonth() !== dataDiaAcompanhamento.getMonth()) {
                            this.toast.errorToast('Mês de acompanhamento não pode ser diferente do mês atual.');
                            return [2 /*return*/];
                        }
                    }
                    tipoAcomodacao = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"]();
                    tipoAcomodacao.seqDominio = this.tipoAcomodacao.value;
                    this.acompanhamentoMedico.tipoAcomodacao = tipoAcomodacao;
                    tipoInternacao = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"]();
                    tipoInternacao.seqDominio = this.tipoInternacao.value;
                    this.acompanhamentoMedico.tipoInternacao = tipoInternacao;
                    caraterAtendimento = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"]();
                    caraterAtendimento.seqDominio = this.caraterAtendimento.value;
                    this.acompanhamentoMedico.caraterAtendimento = caraterAtendimento;
                    origemInternacao = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"]();
                    origemInternacao.seqDominio = this.origemInternacao.value;
                    this.acompanhamentoMedico.origemInternacao = origemInternacao;
                    this.acompanhamentoMedico.medicoAssistente = this.medicoAssistente.value;
                    this.acompanhamentoMedico.crmMedicoAssistente = this.crmMedicoAssistente.value;
                    motivoAlta = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"]();
                    this.acompanhamentoMedico.diagnosticoInternacao = this.justificativa.value;
                    motivoAlta.seqDominio = this.motivoAlta.value;
                    this.acompanhamentoMedico.motivoAlta = motivoAlta;
                    this.acompanhamentoMedico.obsEncerramento = this.observacao.value;
                    //Se ainda não preencheu a versão do app preenche nesse momento. Usado para controle no momento de troca de versão
                    if (this.versionNumber != null) {
                        this.acompanhamentoMedico.appVersion = this.versionNumber;
                    }
                    acompanhamentoMedicoDia_2 = new src_app_model_AcompanhamentoMedicoDia_model__WEBPACK_IMPORTED_MODULE_15__["AcompanhamentoMedicoDia"]();
                    acompanhamentoMedicoDia_2.diaAcompanhamento = this.diaAcompanhamento.value;
                    acompanhamentoMedicoDia_2.diaSemanaAcompanhamento = moment__WEBPACK_IMPORTED_MODULE_2__(new Date(moment__WEBPACK_IMPORTED_MODULE_2__(this.diaAcompanhamento.value, "DD/MM/YYYY").toISOString())).format("dddd");
                    acompanhamentoMedicoDia_2.statusSincronismo = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STATUS_PENDENTE;
                    if (this.latitude != null) {
                        acompanhamentoMedicoDia_2.latitude = this.latitude.toString();
                        acompanhamentoMedicoDia_2.longitude = this.longitude.toString();
                    }
                    acompanhamentoMedicoDia_2.listaAcompanhamentoDado = [];
                    //Verifica se o check de copiar o ultimo dia está marcado
                    if (this.flgCopiaUltimoDia.value) {
                        acompamentoDiaCopiado = new src_app_model_AcompanhamentoMedicoDia_model__WEBPACK_IMPORTED_MODULE_15__["AcompanhamentoMedicoDia"]();
                        acompamentoDiaCopiado = this.acompanhamentoMedico.listaAcompanhamentoDia[this.acompanhamentoMedico.listaAcompanhamentoDia.length - 1];
                        acompanhamentoMedicoDia_2.resumoDia = acompamentoDiaCopiado.resumoDia;
                        acompanhamentoMedicoDia_2.listaAcompanhamentoDado = acompamentoDiaCopiado.listaAcompanhamentoDado;
                        this.acompanhamentoMedico.listaAcompanhamentoDia.push(acompanhamentoMedicoDia_2);
                        this.listaDiasAcompanhamento = this.listaDiasAcompanhamento.sort(function (b, a) { return new Date(moment__WEBPACK_IMPORTED_MODULE_2__(b.diaAcompanhamento, "DD/MM/YYYY").toISOString()).getTime() - new Date(moment__WEBPACK_IMPORTED_MODULE_2__(a.diaAcompanhamento, "DD/MM/YYYY").toISOString()).getTime(); });
                        this.atualizarAcompanhamentoMedicoDispositivo();
                    }
                    else {
                        //Recupera os dados da configuração do formulário, atualiza a lista de dias e ordena
                        usuario.configFormulario.listaGrupoConfigFormulario.forEach(function (grupo) {
                            grupo.listaItemGrupoConfigFormulario.forEach(function (item) {
                                item.listaDadoItemGrupoConfigFormulario.forEach(function (dado) {
                                    var acompanhamentoDado = new src_app_model_AcompanhamentoMedicoDado_model__WEBPACK_IMPORTED_MODULE_16__["AcompanhamentoMedicoDado"]();
                                    acompanhamentoDado.dadoItemGrupoConfigFormulario = dado;
                                    acompanhamentoMedicoDia_2.listaAcompanhamentoDado.push(acompanhamentoDado);
                                });
                            });
                        });
                        this.acompanhamentoMedico.listaAcompanhamentoDia.push(acompanhamentoMedicoDia_2);
                        this.listaDiasAcompanhamento = this.acompanhamentoMedico.listaAcompanhamentoDia;
                        this.listaDiasAcompanhamento = this.listaDiasAcompanhamento.sort(function (b, a) { return new Date(moment__WEBPACK_IMPORTED_MODULE_2__(b.diaAcompanhamento, "DD/MM/YYYY").toISOString()).getTime() - new Date(moment__WEBPACK_IMPORTED_MODULE_2__(a.diaAcompanhamento, "DD/MM/YYYY").toISOString()).getTime(); });
                        this.atualizarAcompanhamentoMedicoDispositivo();
                    }
                    //habilita o check para permitir a copia do ultimo dia
                    this.flgCopiaUltimoDia.enable();
                }
                return [2 /*return*/];
            });
        });
    };
    ExibirFormularioPage.prototype.atualizarAcompanhamentoMedicoDispositivo = function () {
        this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, this.acompanhamentoMedico, "senhaAutorizacao.senha");
    };
    ExibirFormularioPage.prototype.abrirTelaDiaAcompanhamento = function (acompanhamentoMedicoDia) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var acompanhamentoMedico, navigationExtras;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                acompanhamentoMedico = this.acompanhamentoMedico;
                navigationExtras = {
                    state: {
                        acompanhamentoMedico: acompanhamentoMedico,
                        acompanhamentoMedicoDia: acompanhamentoMedicoDia
                    }
                };
                this.router.navigateByUrl('menu-principal/dia-acompanhamento', navigationExtras);
                return [2 /*return*/];
            });
        });
    };
    ExibirFormularioPage.prototype.verificaDiasCamposObrigatorios = function (acompanhamentoDia) {
        if (acompanhamentoDia.listaAcompanhamentoDado.length > 0) {
            for (var _i = 0, _a = acompanhamentoDia.listaAcompanhamentoDado; _i < _a.length; _i++) {
                var dado = _a[_i];
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
    };
    ExibirFormularioPage.prototype.apagarDiaAcompanhamento = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mensagem, alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.listaDiasAcompanhamento[index].statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STATUS_SINCRONIZADO || this.listaDiasAcompanhamento[index].statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STATUS_RESTAURADO)) return [3 /*break*/, 1];
                        this.toast.errorToast("Não é possível excluir dia sincronizado.");
                        return [3 /*break*/, 4];
                    case 1:
                        mensagem = "Dia de Acompanhamento: " + this.listaDiasAcompanhamento[index].diaAcompanhamento + ", " + this.listaDiasAcompanhamento[index].diaSemanaAcompanhamento;
                        return [4 /*yield*/, this.atrCtrl.create({
                                header: 'Deseja realmente excluir o dia abaixo?',
                                message: mensagem,
                                buttons: [
                                    {
                                        text: 'Cancelar',
                                        role: 'cancel',
                                        handler: function (blah) { }
                                    }, {
                                        text: 'Confirmar',
                                        handler: function () {
                                            _this.listaDiasAcompanhamento.forEach(function (item, indice) {
                                                if (indice == index) {
                                                    _this.listaDiasAcompanhamento.splice(indice, 1);
                                                }
                                            });
                                            _this.acompanhamentoMedico.listaAcompanhamentoDia = _this.listaDiasAcompanhamento;
                                            _this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, _this.acompanhamentoMedico, "senhaAutorizacao.senha");
                                        }
                                    }
                                ]
                            })];
                    case 2:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ExibirFormularioPage.prototype.atualizaCampos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var hora, tipoAcomodacao, tipoInternacao, caraterAtendimento, origemInternacao, cidDiagnostico, motivoAlta;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.horaInternacao.valid) {
                            hora = moment__WEBPACK_IMPORTED_MODULE_2__(this.horaInternacao.value, 'hh:mm a').format('HH:mm');
                            this.formAcompanhamento.get('horaInternacao').setValue(this.horaInternacao.value.trim());
                            this.acompanhamentoMedico.horaInternacao = hora;
                            this.acompanhamentoMedico.senhaAutorizacao.horaInternacao = hora;
                            this.flgErroHoraInternacao = false;
                        }
                        tipoAcomodacao = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"]();
                        tipoAcomodacao = this.listaTipoAcomodacao.find(function (x) { return x.seqDominio === _this.tipoAcomodacao.value; });
                        this.acompanhamentoMedico.tipoAcomodacao = tipoAcomodacao;
                        this.flgErroAcomodacao = false;
                        if (this.tipoAcomodacao.value == 'Selecione') {
                            this.formAcompanhamento.get("tipoAcomodacao").setValue('');
                            this.flgErroAcomodacao = true;
                        }
                        tipoInternacao = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"]();
                        tipoInternacao = this.listaTipoInternacao.find(function (x) { return x.seqDominio === _this.tipoInternacao.value; });
                        this.acompanhamentoMedico.tipoInternacao = tipoInternacao;
                        this.flgErroTipoInternacao = false;
                        if (this.tipoInternacao.value == 'Selecione') {
                            this.formAcompanhamento.get("tipoInternacao").setValue('');
                            this.flgErroTipoInternacao = true;
                        }
                        caraterAtendimento = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"]();
                        caraterAtendimento = this.listaCaraterAtendimento.find(function (x) { return x.seqDominio === _this.caraterAtendimento.value; });
                        this.acompanhamentoMedico.caraterAtendimento = caraterAtendimento;
                        this.flgErroCaraterAtendimento = false;
                        if (this.caraterAtendimento.value == 'Selecione') {
                            this.formAcompanhamento.get("caraterAtendimento").setValue('');
                            this.flgErroCaraterAtendimento = true;
                        }
                        origemInternacao = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"]();
                        origemInternacao = this.listaOrigemInternacao.find(function (x) { return x.seqDominio === _this.origemInternacao.value; });
                        this.acompanhamentoMedico.origemInternacao = origemInternacao;
                        this.flgErroOrigemInternacao = false;
                        if (this.origemInternacao.value == 'Selecione') {
                            this.formAcompanhamento.get("origemInternacao").setValue('');
                            this.flgErroOrigemInternacao = true;
                        }
                        if (this.medicoAssistente.valid) {
                            this.formAcompanhamento.get('medicoAssistente').setValue(this.medicoAssistente.value.trim());
                            this.acompanhamentoMedico.medicoAssistente = this.medicoAssistente.value.trim();
                            this.flgErroMedicoAssistente = false;
                        }
                        else {
                            this.acompanhamentoMedico.medicoAssistente = "";
                        }
                        if (this.crmMedicoAssistente.valid) {
                            this.formAcompanhamento.get('crmMedicoAssistente').setValue(this.crmMedicoAssistente.value);
                            this.acompanhamentoMedico.crmMedicoAssistente = this.crmMedicoAssistente.value;
                            this.flgErroCrmMedicoAssistente = false;
                        }
                        else {
                            this.acompanhamentoMedico.crmMedicoAssistente = null;
                        }
                        cidDiagnostico = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"]();
                        if (!this.cidDiagnostico.valid) return [3 /*break*/, 4];
                        this.formAcompanhamento.get('cidDiagnostico').setValue(this.cidDiagnostico.value.trim());
                        this.networkService.CheckNetworkStatus();
                        if (!this.networkService.NetworkStatus.value) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.validarCid()];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        cidDiagnostico.codDominio = this.cidDiagnostico.value.trim();
                        this.acompanhamentoMedico.cidDiagnostico = cidDiagnostico;
                        _a.label = 3;
                    case 3:
                        this.flgErroCidDiagnostico = false;
                        return [3 /*break*/, 5];
                    case 4:
                        this.acompanhamentoMedico.cidDiagnostico = cidDiagnostico;
                        _a.label = 5;
                    case 5:
                        motivoAlta = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"]();
                        motivoAlta = this.listaMotivosAlta.find(function (x) { return x.seqDominio === _this.motivoAlta.value; });
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
                        return [4 /*yield*/, this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, this.acompanhamentoMedico, "senhaAutorizacao.senha")];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ExibirFormularioPage.prototype.encerrarAuditoria = function () {
        var _this = this;
        var usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
        usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
        var dataAtual = new Date();
        var dataInternacao = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(this.dataInternacao.value, "DD/MM/YYYY").toISOString());
        var dataAlta = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(this.dataAlta.value, "DD/MM/YYYY").toISOString());
        //Valida se a data da alta é anterior a data da internação
        if (dataAlta < dataInternacao) {
            this.toast.errorToast('Data da alta não pode ser anterior a data da internação.');
            return;
        }
        //Valida se a data da alta é inferior a alguma data do acompanhamentoDia
        for (var _i = 0, _a = this.listaDiasAcompanhamento; _i < _a.length; _i++) {
            var dia = _a[_i];
            var dataDia = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(dia.diaAcompanhamento, "DD/MM/YYYY").toISOString());
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
        //Valida se a data de internação é posterior a data atual
        if (dataInternacao > dataAtual) {
            this.toast.errorToast('Data da internação não pode ser posterior a data atual.');
            return;
        }
        var tipoAcomodacao = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"]();
        tipoAcomodacao = this.listaTipoAcomodacao.find(function (x) { return x.seqDominio === _this.tipoAcomodacao.value; });
        this.acompanhamentoMedico.tipoAcomodacao = tipoAcomodacao;
        this.acompanhamentoMedico.dataAlta = this.dataAlta.value;
        var motivoAlta = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"]();
        motivoAlta = this.listaMotivosAlta.find(function (x) { return x.seqDominio === _this.motivoAlta.value; });
        this.acompanhamentoMedico.motivoAlta = motivoAlta;
        this.acompanhamentoMedico.obsEncerramento = this.observacao.value;
        this.acompanhamentoMedico.dataInternacao = this.dataInternacao.value;
        this.acompanhamentoMedico.senhaAutorizacao.dataInternacao = this.dataInternacao.value;
        this.acompanhamentoMedico.diagnosticoInternacao = this.justificativa.value;
        var tipoInternacao = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"]();
        tipoInternacao = this.listaTipoInternacao.find(function (x) { return x.seqDominio === _this.tipoInternacao.value; });
        this.acompanhamentoMedico.tipoInternacao = tipoInternacao;
        var caraterAtendimento = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"]();
        caraterAtendimento = this.listaCaraterAtendimento.find(function (x) { return x.seqDominio === _this.caraterAtendimento.value; });
        this.acompanhamentoMedico.caraterAtendimento = caraterAtendimento;
        var origemInternacao = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"]();
        origemInternacao = this.listaOrigemInternacao.find(function (x) { return x.seqDominio === _this.origemInternacao.value; });
        this.acompanhamentoMedico.origemInternacao = origemInternacao;
        this.acompanhamentoMedico.medicoAssistente = this.medicoAssistente.value;
        this.acompanhamentoMedico.crmMedicoAssistente = this.crmMedicoAssistente.value;
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
        var navigationExtras = {
            state: {}
        };
        this.router.navigateByUrl('', navigationExtras);
    };
    ExibirFormularioPage.prototype.getCurrentCoordinates = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.latitude = resp.coords.latitude;
            _this.longitude = resp.coords.longitude;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    ExibirFormularioPage.prototype.abrirCalendarioDataInternacao = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dataInternacao, pop;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.dataInternacao.value != null && this.dataInternacao.value != '') {
                            dataInternacao = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(this.dataInternacao.value, "DD/MM/YYYY").toISOString());
                        }
                        else {
                            dataInternacao = new Date();
                        }
                        return [4 /*yield*/, this.popover.create({
                                component: src_app_components_popover_calendario_popover_calendario_component__WEBPACK_IMPORTED_MODULE_19__["PopoverCalendarioComponent"],
                                event: ev,
                                cssClass: 'popover-custon',
                                componentProps: {
                                    titulo: 'Data Internação',
                                    data: dataInternacao
                                },
                                translucent: true
                            })];
                    case 1:
                        pop = _a.sent();
                        pop.onDidDismiss().then(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var dataInternacao_1;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!result.data) return [3 /*break*/, 2];
                                        dataInternacao_1 = result.data;
                                        if (dataInternacao_1 != null && dataInternacao_1 != '') {
                                            this.acompanhamentoMedico.senhaAutorizacao.dataInternacao = moment__WEBPACK_IMPORTED_MODULE_2__(dataInternacao_1).format("DD/MM/YYYY");
                                            this.acompanhamentoMedico.dataInternacao = moment__WEBPACK_IMPORTED_MODULE_2__(dataInternacao_1).format("DD/MM/YYYY");
                                            this.formAcompanhamento.get("dataInternacao").setValue(this.acompanhamentoMedico.dataInternacao);
                                            this.flgErroDataInternacao = false;
                                        }
                                        else {
                                            this.acompanhamentoMedico.dataInternacao = '';
                                            this.acompanhamentoMedico.senhaAutorizacao.dataInternacao = '';
                                        }
                                        //Se ainda não preencheu a versão do app preenche nesse momento. Usado para controle no momento de troca de versão
                                        if (this.versionNumber != null) {
                                            this.acompanhamentoMedico.appVersion = this.versionNumber;
                                        }
                                        return [4 /*yield*/, this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, this.acompanhamentoMedico, "senhaAutorizacao.senha")];
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
    ExibirFormularioPage.prototype.limparDataInternacao = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.dataInternacao.reset();
                        this.acompanhamentoMedico.senhaAutorizacao.dataInternacao = '';
                        this.acompanhamentoMedico.dataInternacao = '';
                        return [4 /*yield*/, this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, this.acompanhamentoMedico, "senhaAutorizacao.senha")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ExibirFormularioPage.prototype.abrirCalendarioDataAlta = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dataAlta, pop;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.dataAlta.value != null && this.dataAlta.value != '') {
                            dataAlta = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(this.dataAlta.value, "DD/MM/YYYY").toISOString());
                        }
                        else {
                            dataAlta = new Date();
                        }
                        return [4 /*yield*/, this.popover.create({
                                component: src_app_components_popover_calendario_popover_calendario_component__WEBPACK_IMPORTED_MODULE_19__["PopoverCalendarioComponent"],
                                event: ev,
                                cssClass: 'popover-custon',
                                componentProps: {
                                    titulo: 'Data Alta',
                                    data: dataAlta
                                },
                                translucent: true
                            })];
                    case 1:
                        pop = _a.sent();
                        pop.onDidDismiss().then(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var dataAlta_1;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!result.data) return [3 /*break*/, 2];
                                        dataAlta_1 = result.data;
                                        if (dataAlta_1 != null && dataAlta_1 != '') {
                                            this.acompanhamentoMedico.dataAlta = moment__WEBPACK_IMPORTED_MODULE_2__(dataAlta_1).format("DD/MM/YYYY");
                                            this.formAcompanhamento.get("dataAlta").setValue(this.acompanhamentoMedico.dataAlta);
                                        }
                                        else {
                                            this.acompanhamentoMedico.dataAlta = '';
                                        }
                                        //Se ainda não preencheu a versão do app preenche nesse momento. Usado para controle no momento de troca de versão
                                        if (this.versionNumber != null) {
                                            this.acompanhamentoMedico.appVersion = this.versionNumber;
                                        }
                                        return [4 /*yield*/, this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, this.acompanhamentoMedico, "senhaAutorizacao.senha")];
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
    ExibirFormularioPage.prototype.limparDataAlta = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.dataAlta.reset();
                        this.acompanhamentoMedico.dataAlta = '';
                        return [4 /*yield*/, this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, this.acompanhamentoMedico, "senhaAutorizacao.senha")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ExibirFormularioPage.prototype.abrirCalendarioDiaAcompanhamento = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var diaAcompanhamento, pop;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.diaAcompanhamento.value != null && this.diaAcompanhamento.value != '') {
                            diaAcompanhamento = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(this.diaAcompanhamento.value, "DD/MM/YYYY").toISOString());
                        }
                        else {
                            diaAcompanhamento = new Date();
                        }
                        return [4 /*yield*/, this.popover.create({
                                component: src_app_components_popover_calendario_popover_calendario_component__WEBPACK_IMPORTED_MODULE_19__["PopoverCalendarioComponent"],
                                event: ev,
                                cssClass: 'popover-custon',
                                componentProps: {
                                    titulo: 'Dia Acompanhamento',
                                    data: diaAcompanhamento
                                },
                                translucent: true
                            })];
                    case 1:
                        pop = _a.sent();
                        pop.onDidDismiss().then(function (result) {
                            if (result.data) {
                                var diaAcompanhamento_1 = result.data;
                                if (diaAcompanhamento_1 != null && diaAcompanhamento_1 != '') {
                                    _this.formAcompanhamento.get("diaAcompanhamento").setValue(moment__WEBPACK_IMPORTED_MODULE_2__(diaAcompanhamento_1).format("DD/MM/YYYY"));
                                }
                                else {
                                    _this.formAcompanhamento.get("diaAcompanhamento").setValue(moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD/MM/YYYY"));
                                }
                            }
                        });
                        return [4 /*yield*/, pop.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ExibirFormularioPage.prototype.abrirCalendarioDataEstimadaAlta = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dataEstimadaAlta, pop;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.dataEstimadaAlta.value != null && this.dataEstimadaAlta.value != '') {
                            dataEstimadaAlta = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(this.dataEstimadaAlta.value, "DD/MM/YYYY").toISOString());
                        }
                        else {
                            dataEstimadaAlta = new Date();
                        }
                        return [4 /*yield*/, this.popover.create({
                                component: src_app_components_popover_calendario_popover_calendario_component__WEBPACK_IMPORTED_MODULE_19__["PopoverCalendarioComponent"],
                                event: ev,
                                cssClass: 'popover-custon',
                                componentProps: {
                                    titulo: 'Data Estimada da Alta',
                                    data: dataEstimadaAlta
                                },
                                translucent: true
                            })];
                    case 1:
                        pop = _a.sent();
                        pop.onDidDismiss().then(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var dataEstimadaAlta_1, dataEstimadaAltaDate, dataInternacao;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                if (result.data) {
                                    dataEstimadaAlta_1 = result.data;
                                    if (dataEstimadaAlta_1 != null && dataEstimadaAlta_1 != '') {
                                        dataEstimadaAltaDate = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(dataEstimadaAlta_1, "DD/MM/YYYY").toISOString());
                                        dataInternacao = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(this.dataInternacao.value, "DD/MM/YYYY").toISOString());
                                        if (dataEstimadaAltaDate < dataInternacao) {
                                            this.toast.errorToast("A Data Estimada da Alta não pode ser anterior a Data de Internação.");
                                            this.limparDataEstimadaAlta();
                                        }
                                        else {
                                            this.acompanhamentoMedico.dataEstimadaAlta = moment__WEBPACK_IMPORTED_MODULE_2__(dataEstimadaAlta_1).format("DD/MM/YYYY");
                                            this.formAcompanhamento.get("dataEstimadaAlta").setValue(this.acompanhamentoMedico.dataEstimadaAlta);
                                            this.flgErroDataEstimadaAlta = false;
                                        }
                                    }
                                    else {
                                        this.acompanhamentoMedico.dataEstimadaAlta = '';
                                    }
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        return [4 /*yield*/, pop.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ExibirFormularioPage.prototype.limparDataEstimadaAlta = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.dataEstimadaAlta.reset();
                this.acompanhamentoMedico.dataEstimadaAlta = '';
                return [2 /*return*/];
            });
        });
    };
    ExibirFormularioPage.prototype.validarCid = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var operadora, dominioCodigo, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_9__["Operadora"];
                        dominioCodigo = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"]();
                        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
                        dominioCodigo.codDominio = this.cidDiagnostico.value.trim();
                        dominioCodigo.codTabela = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].TABELA_CID;
                        dominioCodigo.operadora = operadora;
                        return [4 /*yield*/, this.loading.presentLoading('Validando CID...')];
                    case 1:
                        loading = _a.sent();
                        this.parametrosService.getVerificaDominioCodigo(dominioCodigo).subscribe(function (data) {
                            _this.acompanhamentoMedico.cidDiagnostico = data;
                            loading.dismiss();
                        }, function (error) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                if (this.cidDiagnostico.value.trim().length > 5) {
                                    this.cidDiagnostico.setValue("");
                                    loading.dismiss();
                                    this.toast.errorToast("CID Inválido. O código deve ter no máximo 5 caracteres.");
                                }
                                else {
                                    dominioCodigo = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"]();
                                    dominioCodigo.codDominio = this.cidDiagnostico.value.trim();
                                    this.acompanhamentoMedico.cidDiagnostico = dominioCodigo;
                                    loading.dismiss();
                                    this.toast.errorToast("CID Inválido.");
                                }
                                return [2 /*return*/];
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ExibirFormularioPage.prototype.getUltimaInternacao = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var usuario, senhaAutorizacao, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
                        senhaAutorizacao = new src_app_model_SenhaAutorizacao_model__WEBPACK_IMPORTED_MODULE_20__["SenhaAutorizacao"]();
                        senhaAutorizacao.senha = this.acompanhamentoMedico.senhaAutorizacao.senha;
                        senhaAutorizacao.beneficiario = this.acompanhamentoMedico.beneficiario;
                        usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
                        senhaAutorizacao.operadora = usuario.operadora;
                        return [4 /*yield*/, this.loading.presentLoading('Buscando última internação...')];
                    case 1:
                        loading = _a.sent();
                        this.senhaAutorizacaoService.getUltimaInternacao(senhaAutorizacao).subscribe(function (data) {
                            if (data != null) {
                                var ultimaInternacao = data;
                                _this.acompanhamentoMedico.ultimaInternacao = ultimaInternacao;
                                loading.dismiss();
                            }
                            else {
                                loading.dismiss();
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
    ExibirFormularioPage.prototype.exibirDados = function (aba) {
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
            case 'ultimaInternacao':
                this.exibeDadosUltimaInternacao = !this.exibeDadosUltimaInternacao;
                break;
        }
    };
    ExibirFormularioPage.ctorParameters = function () { return [
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
    ]; };
    ExibirFormularioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exibirFormulario',
            template: __webpack_require__(/*! raw-loader!./exibirFormulario.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/acompanhamento/formulario/exibirFormulario.page.html"),
            styles: [__webpack_require__(/*! ./exibirFormulario.page.scss */ "./src/app/pages/acompanhamento/formulario/exibirFormulario.page.scss")]
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
    ], ExibirFormularioPage);
    return ExibirFormularioPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-acompanhamento-formulario-exibirFormulario-module-es5.js.map