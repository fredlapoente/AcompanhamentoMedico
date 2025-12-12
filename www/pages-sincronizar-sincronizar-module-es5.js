(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sincronizar-sincronizar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/sincronizar/sincronizar.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/sincronizar/sincronizar.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"ion-text-center\">\r\n        <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/menu-principal\" text=\"\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-uppercase\">Sincronizar Acompanhamentos</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n        <ion-menu-button menuId=\"main-content\"></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <ion-segment (ionChange)=\"segmentChanged($event)\" value=\"{{opcaoExibir}}\">\r\n        <ion-segment-button value=\"sincronizar\" (click)=\"buscarAcompanhamentosSincronizar()\">\r\n            <ion-label>Sincronizar</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"comFalha\" (click)=\"buscarAcompanhamentosFalha()\">\r\n            <ion-label>Com Falha</ion-label>\r\n        </ion-segment-button>\r\n    </ion-segment> \r\n    <ion-searchbar [(ngModel)]=\"filtroAcompanhamento\" (keyup)=\"filtrarAcompanhamento($event)\" (ionCancel)=\"cancelaFiltroAcompanhamento()\" (ionClear)=\"cancelaFiltroAcompanhamento()\" cancelButtonText=\"Cancelar\" placeholder=\"Beneficiário, Senha ou Internação\" [debounce]=\"250\" inputmode=\"text\" type=\"text\" enterkeyhint=\"search\" animated #searchInput></ion-searchbar>        \r\n    <ion-list *ngIf=\"opcaoExibir == 'sincronizar'\">\r\n        <ion-item class=\"item_alert\" *ngIf=\"listaAcompanhamentosSincronizarPagina.length > 0\"> \r\n            <ion-icon name=\"alert\"></ion-icon>                           \r\n            <ion-label>Total para sincronizar: {{qtdGuiasSincronizar}}.</ion-label> \r\n        </ion-item>            \r\n        <ion-chip *ngIf=\"listaAcompanhamentosSincronizarPagina.length > 0\" (click)=\"marcarDesmarcarTodos()\">\r\n            <ion-icon name=\"checkmark-circle\" *ngIf=\"!flgMarcarTodos\"></ion-icon>\r\n            <ion-label *ngIf=\"!flgMarcarTodos\">Marcar Todos da Página</ion-label>\r\n            <ion-icon name=\"checkmark-circle\" *ngIf=\"flgMarcarTodos\"></ion-icon>\r\n            <ion-label *ngIf=\"flgMarcarTodos\">Desmarcar Todos da Página</ion-label>\r\n        </ion-chip>               \r\n        <ion-card *ngFor=\"let acompanhamento of listaAcompanhamentosSincronizarPagina\">\r\n            <ion-card-header>\r\n                <ion-row (click)=\"exibirInfoSincronizar(acompanhamento)\"> \r\n                <ion-col size=\"2\">\r\n                    <ion-button size=\"small\" fill=\"clear\">\r\n                        <ion-icon slot=\"icon-only\" name=\"add-circle\" *ngIf=\"!acompanhamento.exibeDadosSincronismo\"></ion-icon> \r\n                        <ion-icon slot=\"icon-only\" name=\"remove-circle\" *ngIf=\"acompanhamento.exibeDadosSincronismo\"></ion-icon>\r\n                    </ion-button>                \r\n                </ion-col>\r\n                <ion-col size=\"10\">\r\n                    <ion-card-title><span [innerHTML]=\"acompanhamento.beneficiario.nomeBeneficiario\"></span></ion-card-title>\r\n                </ion-col>                                \r\n                </ion-row>\r\n            </ion-card-header>\r\n            <ion-card-content class=\"card-conteudo\">      \r\n                <ion-row>\r\n                    <ion-col>\r\n                        <span class=\"texto-card-label\">Carteira: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.beneficiario.carteiraBeneficiario\"></span>\r\n                        <br>\r\n                        <span class=\"texto-card-label\">Senha: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.senhaAutorizacao.senha\"></span>\r\n                        <br>\r\n                        <span class=\"texto-card-label\">Prestador: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.prestador.nomePrestador\"></span>\r\n                        <br>\r\n                        <span class=\"texto-card-label\">Status: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.status\"></span>\r\n                        <div *ngIf=\"!acompanhamento.flgExibeGifProcessando && acompanhamento.protocoloSincronismo != null\">\r\n                            <span class=\"texto-card-label\">Status Sincronismo: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.statusSincronismo\"></span>\r\n                            <br>\r\n                            <span class=\"texto-card-label\">Protocolo: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.protocoloSincronismo\"></span>\r\n                        </div>\r\n                        <div *ngIf=\"!acompanhamento.flgExibeGifProcessando && acompanhamento.protocoloSincronismo != null && acompanhamento.erroAnexoAcompanhamento != '' && acompanhamento.erroAnexoAcompanhamento != null\">\r\n                            <br>\r\n                            <span class=\"texto-card-label\">Erro: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.erroAnexoAcompanhamento\"></span>\r\n                        </div>\r\n                    </ion-col>             \r\n                </ion-row>                  \r\n            </ion-card-content>\r\n            <ion-card-content class=\"card-conteudo card-sem-espaco\" *ngIf=\"acompanhamento.exibeDadosSincronismo && acompanhamento.listaAcompanhamentoDia.length > 0\">\r\n                <ion-list *ngFor=\"let acompanhamentoDia of acompanhamento.listaAcompanhamentoDia\">\r\n                    <ion-item>                            \r\n                        <ion-toggle (ionChange)=\"atualizaSincronizarDia($event,acompanhamento, acompanhamentoDia)\" [checked]=\"acompanhamentoDia.flgSincronizar\" *ngIf=\"!acompanhamentoDia.flgExibeSucessoProcesso && !acompanhamentoDia.flgExibeErroProcesso\"></ion-toggle>\r\n                        <ion-label>{{acompanhamentoDia.diaAcompanhamento}}</ion-label> \r\n                        <ion-spinner name=\"lines\" color=\"success\" *ngIf=\"acompanhamento.flgExibeGifProcessando && acompanhamentoDia.flgSincronizar\"></ion-spinner>\r\n                        <ion-icon name=\"checkmark-circle\" *ngIf=\"acompanhamentoDia.flgExibeSucessoProcesso\"></ion-icon>\r\n                        <ion-icon name=\"close-circle\" *ngIf=\"acompanhamentoDia.flgExibeErroProcesso\" (click)=\"visualizarErroSincronismo(acompanhamentoDia.erroSincronismo)\"></ion-icon>\r\n                    </ion-item>\r\n                </ion-list>         \r\n            </ion-card-content>\r\n            <ion-card-content class=\"card-conteudo card-sem-espaco\" *ngIf=\"acompanhamento.exibeDadosSincronismo && acompanhamento.listaAcompanhamentoDia.length == 0\">\r\n                <ion-list>\r\n                    <ion-item>                            \r\n                        <ion-toggle (ionChange)=\"atualizaSincronizarAcompanhamento($event,acompanhamento)\" [checked]=\"acompanhamento.flgSincronizar\" *ngIf=\"!acompanhamento.flgExibeSucessoProcesso && !acompanhamento.flgExibeErroProcesso\"></ion-toggle>\r\n                        <ion-label>Sincronizar</ion-label>\r\n                        <ion-spinner name=\"lines\" color=\"success\" *ngIf=\"acompanhamento.flgExibeGifProcessando && acompanhamento.flgSincronizar\"></ion-spinner>\r\n                        <ion-icon name=\"checkmark-circle\" *ngIf=\"acompanhamento.flgExibeSucessoProcesso\"></ion-icon>\r\n                        <ion-icon name=\"close-circle\" *ngIf=\"acompanhamento.flgExibeErroProcesso\" (click)=\"visualizarErroSincronismo(acompanhamento.erroSincronismo)\"></ion-icon>\r\n                    </ion-item>\r\n                </ion-list>         \r\n            </ion-card-content>    \r\n        </ion-card>\r\n        <ion-row *ngIf=\"listaAcompanhamentosSincronizarPagina.length == 0\">\r\n            <ion-col size=\"12\" class=\"ion-text-center\">\r\n                <ion-label>Não há acompanhamento</ion-label>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"listaAcompanhamentosSincronizarPagina.length > 0\">\r\n            <ion-col size=\"12\" class=\"ion-text-center\">\r\n                <ion-button id=\"btnSincronizar\" [disabled]=\"!flgHabilitaBtnSincronizar\" expand=\"block\" size=\"large\" (click)=\"confirmarSincronizar()\">Sincronizar</ion-button>\r\n            </ion-col>\r\n        </ion-row>        \r\n        <ion-row *ngIf=\"paginadorSincronizar.paginas && paginadorSincronizar.paginas.length\" class=\"ion-justify-content-center\">\r\n            <ion-col size=\"2\" *ngFor=\"let pagina of paginadorSincronizar.paginas\" >\r\n                <div class=\"paginador\" [ngClass]=\"{'paginador': paginaAtualSincronismo != pagina, 'paginador1': paginaAtualSincronismo == pagina}\" >\r\n                    <a class=\"linkPaginador\" [ngClass]=\"{'linkPaginador': paginaAtualSincronismo != pagina, 'linkPaginador1': paginaAtualSincronismo == pagina}\" (click)=\"setPaginaSincronizar(pagina,paginadorSincronizar.tamanhoPagina,paginadorSincronizar.totalPaginas)\">{{pagina}}</a>\r\n                </div>\r\n            </ion-col>             \r\n        </ion-row> \r\n    </ion-list> \r\n    <ion-list *ngIf=\"opcaoExibir == 'comFalha'\">\r\n        <ion-item class=\"item_alert\" *ngIf=\"listaAcompanhamentosFalhaPagina.length > 0\"> \r\n            <ion-icon name=\"alert\"></ion-icon>                           \r\n            <ion-label>Total de Acompanhamentos com falha: {{qtdGuiasFalha}}.</ion-label> \r\n        </ion-item>\r\n        <ion-card *ngFor=\"let acompanhamento of listaAcompanhamentosFalhaPagina\">\r\n            <ion-card-header>\r\n                <ion-row (click)=\"exibirInfoSincronizar(acompanhamento)\"> \r\n                <ion-col size=\"2\">\r\n                    <ion-button size=\"small\" fill=\"clear\">\r\n                        <ion-icon slot=\"icon-only\" name=\"add-circle\" *ngIf=\"!acompanhamento.exibeDadosSincronismo\"></ion-icon> \r\n                        <ion-icon slot=\"icon-only\" name=\"remove-circle\" *ngIf=\"acompanhamento.exibeDadosSincronismo\"></ion-icon>\r\n                    </ion-button>                \r\n                </ion-col>\r\n                <ion-col size=\"10\">\r\n                    <ion-card-title><span [innerHTML]=\"acompanhamento.beneficiario.nomeBeneficiario\"></span></ion-card-title>\r\n                </ion-col>                                \r\n                </ion-row>\r\n            </ion-card-header>\r\n            <ion-card-content class=\"card-conteudo\">      \r\n                <ion-row>\r\n                    <ion-col>\r\n                    <span class=\"texto-card-label\">Carteira: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.beneficiario.carteiraBeneficiario\"></span>\r\n                    <br>\r\n                    <span class=\"texto-card-label\">Senha: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.senhaAutorizacao.senha\"></span>\r\n                    <br>\r\n                    <span class=\"texto-card-label\">Prestador: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.prestador.nomePrestador\"></span>\r\n                    <br>\r\n                    <span class=\"texto-card-label\">Protocolo sinc: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.protocoloSincronismo\"></span>\r\n                    <br>\r\n                    <span class=\"texto-card-label\" *ngIf=\"acompanhamento.flgEmailEnviado\">E-mail enviado</span>\r\n                    <span class=\"texto-card-label\" *ngIf=\"!acompanhamento.flgEmailEnviado\">E-mail não enviado</span>\r\n                    </ion-col>             \r\n                </ion-row>                    \r\n            </ion-card-content>\r\n            <ion-card-content class=\"card-conteudo card-sem-espaco\" *ngIf=\"acompanhamento.exibeDadosSincronismo && acompanhamento.listaAcompanhamentoDia.length > 0\">\r\n                <ion-row *ngIf=\"acompanhamento.erroAnexoAcompanhamento !== null && acompanhamento.erroAnexoAcompanhamento != ''\"> \r\n                    <ion-col size=\"12\">\r\n                        <span class=\"texto-card-label\">Erro de sincronismo: </span>\r\n                            <span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.erroAnexoAcompanhamento\"></span>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-list *ngFor=\"let acompanhamentoDia of acompanhamento.listaAcompanhamentoDia\">\r\n                    <ion-item>                            \r\n                        <ion-label>{{acompanhamentoDia.diaAcompanhamento}}</ion-label> \r\n                        <ion-icon name=\"close-circle\" (click)=\"visualizarErroSincronismo(acompanhamentoDia.erroSincronismo)\"></ion-icon>\r\n                    </ion-item>\r\n                </ion-list>         \r\n            </ion-card-content>\r\n            <ion-card-content class=\"card-conteudo card-sem-espaco\" *ngIf=\"acompanhamento.exibeDadosSincronismo && acompanhamento.listaAcompanhamentoDia.length == 0\">\r\n                <ion-row> \r\n                    <ion-col size=\"12\">\r\n                        <span class=\"texto-card-label\">Erro de sincronismo: </span>\r\n                            <span class=\"texto-card-text\" *ngIf=\"acompanhamento.erroSincronismo !== null && acompanhamento.erroSincronismo !== ''\" [innerHTML]=\"acompanhamento.erroSincronismo\"></span>\r\n                            <span class=\"texto-card-text\" *ngIf=\"acompanhamento.erroAnexoAcompanhamento !== null && acompanhamento.erroAnexoAcompanhamento != ''\" [innerHTML]=\"acompanhamento.erroAnexoAcompanhamento\"></span>\r\n                    </ion-col>\r\n                </ion-row>        \r\n            </ion-card-content>\r\n            <ion-card-content class=\"card-conteudo\" *ngIf=\"acompanhamento.exibeDadosSincronismo\">                \r\n                <ion-row> \r\n                    <ion-col size=\"6\" *ngIf=\"!acompanhamento.flgEmailEnviado && !acompanhamento.flgPendenciaVerificada\">\r\n                        <ion-button id=\"btnEnviarEmail\" expand=\"block\" (click)=\"confirmaEnviarEmail(acompanhamento)\">Enviar e-mail</ion-button>\r\n                    </ion-col>                    \r\n                    <ion-col size=\"6\" *ngIf=\"acompanhamento.dataPendencia != null && !acompanhamento.flgPendenciaVerificada\">\r\n                        <ion-button id=\"btnReEnviarEmail\" expand=\"block\" (click)=\"confirmaEnviarEmail(acompanhamento)\">Reenviar e-mail</ion-button>\r\n                    </ion-col>\r\n                    <ion-col size=\"6\">\r\n                        <ion-button id=\"btnExcluirAcompanhamento\" expand=\"block\" (click)=\"excluirAcompanhamento(acompanhamento)\">Excluir</ion-button>\r\n                    </ion-col>\r\n                    <ion-col size=\"12\" *ngIf=\"acompanhamento.flgEmailEnviado && !acompanhamento.flgPendenciaVerificada\">\r\n                        <ion-button id=\"btnVerificarPendencia\" expand=\"block\" (click)=\"verificarPendencia(acompanhamento)\">Verificar Pendência</ion-button>\r\n                    </ion-col>                   \r\n                </ion-row>           \r\n            </ion-card-content>                   \r\n        </ion-card>\r\n        <ion-row *ngIf=\"listaAcompanhamentosFalhaPagina.length == 0\">\r\n            <ion-col size=\"12\" class=\"ion-text-center\">\r\n                <ion-label>Não há acompanhamento</ion-label>                    \r\n            </ion-col>\r\n        </ion-row>        \r\n        <ion-row *ngIf=\"paginadorFalha.paginas && paginadorFalha.paginas.length\" class=\"ion-justify-content-center\">\r\n            <ion-col class=\"ion-text-center\" size=\"2\" *ngFor=\"let pagina of paginadorFalha.paginas\">\r\n                <div class=\"paginador\" [ngClass]=\"{'paginador': paginaAtualFalha != pagina, 'paginador1': paginaAtualFalha == pagina}\" >\r\n                    <a class=\"linkPaginador\" [ngClass]=\"{'linkPaginador': paginaAtualFalha != pagina, 'linkPaginador1': paginaAtualFalha == pagina}\" (click)=\"setPaginaFalha(pagina,paginadorFalha.tamanhoPagina,paginadorFalha.totalPaginas)\">{{pagina}}</a>\r\n                </div>    \r\n            </ion-col>             \r\n        </ion-row>\r\n    </ion-list>   \r\n</ion-content>        "

/***/ }),

/***/ "./src/app/pages/sincronizar/sincronizar-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/sincronizar/sincronizar-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SincronizarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SincronizarPageRoutingModule", function() { return SincronizarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sincronizar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sincronizar.page */ "./src/app/pages/sincronizar/sincronizar.page.ts");




var routes = [
    {
        path: '',
        component: _sincronizar_page__WEBPACK_IMPORTED_MODULE_3__["SincronizarPage"]
    }
];
var SincronizarPageRoutingModule = /** @class */ (function () {
    function SincronizarPageRoutingModule() {
    }
    SincronizarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], SincronizarPageRoutingModule);
    return SincronizarPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/sincronizar/sincronizar.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/sincronizar/sincronizar.module.ts ***!
  \*********************************************************/
/*! exports provided: SincronizarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SincronizarPageModule", function() { return SincronizarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sincronizar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sincronizar-routing.module */ "./src/app/pages/sincronizar/sincronizar-routing.module.ts");
/* harmony import */ var _sincronizar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sincronizar.page */ "./src/app/pages/sincronizar/sincronizar.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var SincronizarPageModule = /** @class */ (function () {
    function SincronizarPageModule() {
    }
    SincronizarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _sincronizar_routing_module__WEBPACK_IMPORTED_MODULE_5__["SincronizarPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_sincronizar_page__WEBPACK_IMPORTED_MODULE_6__["SincronizarPage"]]
        })
    ], SincronizarPageModule);
    return SincronizarPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sincronizar/sincronizar.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/sincronizar/sincronizar.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-sem-espaco {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.list-md {\n  padding-top: 0px;\n}\n\n.item_alert {\n  --padding-start: 8px;\n  --min-height: 0px;\n}\n\n.hydrated {\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.paginador {\n  border: 1px solid var(--ion-color-primary);\n  text-align: center;\n  border-radius: 4px;\n}\n\n.paginador:hover {\n  border: 1px solid var(--ion-color-primary-shade);\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  box-shadow: 0 5px 15px var(--ion-color-primary-tint);\n  background-color: var(--ion-color-primary);\n}\n\n.linkPaginador:hover {\n  color: var(--ion-color-primary-contrast);\n}\n\n.paginador1 {\n  border: 1px solid var(--ion-color-primary-shade);\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  box-shadow: 0 5px 15px var(--ion-color-primary-tint);\n  background-color: var(--ion-color-primary);\n  text-align: center;\n  border-radius: 4px;\n}\n\n.linkPaginador1 {\n  color: var(--ion-color-primary-contrast);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2luY3Jvbml6YXIvQzpcXERlc2VuXFx3b3Jrc3BhY2VfYXBsaWNhdGl2b1xcQXBwQWNvbXBhbmhhbWVudG9NZWRpY28vc3JjXFxhcHBcXHBhZ2VzXFxzaW5jcm9uaXphclxcc2luY3Jvbml6YXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaW5jcm9uaXphci9zaW5jcm9uaXphci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksb0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0UsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDSSxnREFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSxvREFBQTtFQUNBLDBDQUFBO0FDQ0o7O0FERUE7RUFDSSx3Q0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0RBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0Esb0RBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLHdDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaW5jcm9uaXphci9zaW5jcm9uaXphci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1zZW0tZXNwYWNve1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5saXN0LW1ke1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5cclxuLml0ZW1fYWxlcnR7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcclxuICAgIC0tbWluLWhlaWdodDogMHB4O1xyXG59ICBcclxuXHJcbi5oeWRyYXRlZHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0gICAgXHJcblxyXG4ucGFnaW5hZG9yIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnBhZ2luYWRvcjpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7IFxyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgICBcclxufVxyXG5cclxuLmxpbmtQYWdpbmFkb3I6aG92ZXJ7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xyXG59XHJcblxyXG4ucGFnaW5hZG9yMSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7IFxyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgICBcclxufVxyXG5cclxuLmxpbmtQYWdpbmFkb3Ixe1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcclxufVxyXG4iLCIuY2FyZC1zZW0tZXNwYWNvIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLmxpc3QtbWQge1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4uaXRlbV9hbGVydCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLW1pbi1oZWlnaHQ6IDBweDtcbn1cblxuLmh5ZHJhdGVkIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBhZ2luYWRvciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5wYWdpbmFkb3I6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmxpbmtQYWdpbmFkb3I6aG92ZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xufVxuXG4ucGFnaW5hZG9yMSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmxpbmtQYWdpbmFkb3IxIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/sincronizar/sincronizar.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/sincronizar/sincronizar.page.ts ***!
  \*******************************************************/
/*! exports provided: SincronizarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SincronizarPage", function() { return SincronizarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_components_modal_mensagem_sincronismo_modal_mensagem_sincronismo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/modal-mensagem-sincronismo/modal-mensagem-sincronismo.component */ "./src/app/components/modal-mensagem-sincronismo/modal-mensagem-sincronismo.component.ts");
/* harmony import */ var src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/saudi-loading/saudi-loading.component */ "./src/app/components/saudi-loading/saudi-loading.component.ts");
/* harmony import */ var src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/saudi-toast/saudi-toast.component */ "./src/app/components/saudi-toast/saudi-toast.component.ts");
/* harmony import */ var src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/config/constantes/constantes */ "./src/app/config/constantes/constantes.ts");
/* harmony import */ var src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/model/Usuario.model */ "./src/app/model/Usuario.model.ts");
/* harmony import */ var src_app_services_acompanhamento_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/acompanhamento.service */ "./src/app/services/acompanhamento.service.ts");
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var src_app_util_paginador_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/util/paginador-util */ "./src/app/util/paginador-util.ts");













var SincronizarPage = /** @class */ (function () {
    function SincronizarPage(networkService, atrCtrl, storageService, loading, toast, acompanhamentoService, modalCtrl) {
        this.networkService = networkService;
        this.atrCtrl = atrCtrl;
        this.storageService = storageService;
        this.loading = loading;
        this.toast = toast;
        this.acompanhamentoService = acompanhamentoService;
        this.modalCtrl = modalCtrl;
        this.opcaoExibir = "sincronizar";
        this.listaAcompanhamentosSincronizar = [];
        this.listaAcompanhamentosFalha = [];
        this.listaAcompanhamentosSincronizarFiltradas = [];
        this.listaAcompanhamentosSincronizarPagina = [];
        this.listaAcompanhamentosFalhaFiltradas = [];
        this.listaAcompanhamentosFalhaPagina = [];
        this.paginadorSincronizar = {};
        this.paginadorFalha = {};
        this.flgHabilitaBtnSincronizar = false;
    }
    SincronizarPage.prototype.ngOnInit = function () {
        moment__WEBPACK_IMPORTED_MODULE_3__["locale"]('pt-br');
        this.flgMarcarTodos = true;
        this.marcarDesmarcarTodos();
        this.buscarAcompanhamentosSincronizar();
        this.buscarAcompanhamentosFalha();
    };
    SincronizarPage.prototype.segmentChanged = function (ev) {
        this.opcaoExibir = ev.detail.value;
    };
    SincronizarPage.prototype.buscarAcompanhamentosSincronizar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var qtdDiasAcomp, loading, usuario;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.listaAcompanhamentosSincronizar = [];
                        this.listaAcompanhamentosSincronizarPagina = [];
                        qtdDiasAcomp = 0;
                        return [4 /*yield*/, this.loading.presentLoading('Buscando Acompanhamentos para Sincronizar...')];
                    case 1:
                        loading = _a.sent();
                        usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
                        usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
                        this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then(function (items) {
                            if (items != null) {
                                for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                                    var acompanhamento = items_1[_i];
                                    if (acompanhamento.configFormulario.idConfigFormulario === usuario.configFormulario.idConfigFormulario &&
                                        acompanhamento.usuario.idUsuario === usuario.idUsuario) {
                                        acompanhamento.configFormulario.nomeConfigFormulario = usuario.configFormulario.nomeConfigFormulario;
                                        acompanhamento.concatDadosAcompanhamentoFiltro = acompanhamento.senhaAutorizacao.senha + "|" + acompanhamento.beneficiario.carteiraBeneficiario + "|" + acompanhamento.beneficiario.nomeBeneficiario;
                                        qtdDiasAcomp = acompanhamento.listaAcompanhamentoDia.length;
                                        var listaDia = [];
                                        var qtdDiasErro = 0;
                                        for (var _a = 0, _b = acompanhamento.listaAcompanhamentoDia; _a < _b.length; _a++) {
                                            var dia = _b[_a];
                                            if (dia.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_PENDENTE && (dia.erroSincronismo === null || !dia.erroSincronismo)) {
                                                listaDia.push(dia);
                                            }
                                            else {
                                                if (dia.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_ERRO_SINCRONIZACAO) {
                                                    qtdDiasErro = qtdDiasErro + 1;
                                                }
                                            }
                                        }
                                        if (listaDia.length > 0) {
                                            acompanhamento.listaAcompanhamentoDia = listaDia;
                                            _this.listaAcompanhamentosSincronizar.push(acompanhamento);
                                        }
                                        else {
                                            if (!acompanhamento.listaAcompanhamentoObs && acompanhamento.listaAcompanhamentoObs != null) {
                                                var obsSinc = acompanhamento.listaAcompanhamentoObs.find(function (x) { return x.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_PENDENTE; });
                                                if (acompanhamento.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_PENDENTE && (qtdDiasAcomp > 0 || obsSinc) && qtdDiasErro < qtdDiasAcomp) {
                                                    acompanhamento.listaAcompanhamentoDia = [];
                                                    _this.listaAcompanhamentosSincronizar.push(acompanhamento);
                                                }
                                            }
                                            else {
                                                if (acompanhamento.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_PENDENTE && qtdDiasAcomp > 0 && qtdDiasErro < qtdDiasAcomp) {
                                                    acompanhamento.listaAcompanhamentoDia = [];
                                                    _this.listaAcompanhamentosSincronizar.push(acompanhamento);
                                                }
                                            }
                                        }
                                    }
                                }
                                _this.qtdGuiasSincronizar = _this.listaAcompanhamentosSincronizar.length;
                                _this.setPaginaSincronizar(1, src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].LIMITE_ACOMPANHAMENTOS_SINCRONIZAR, 0);
                                _this.flgMarcarTodos = false;
                                _this.paginaAtualSincronismo = 1;
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
    SincronizarPage.prototype.buscarAcompanhamentosFalha = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, usuario;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.listaAcompanhamentosFalha = [];
                        this.listaAcompanhamentosFalhaPagina = [];
                        return [4 /*yield*/, this.loading.presentLoading('Buscando Acompanhamentos com Falha...')];
                    case 1:
                        loading = _a.sent();
                        usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
                        usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
                        this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then(function (items) {
                            if (items != null) {
                                for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
                                    var acompanhamento = items_2[_i];
                                    if (acompanhamento.configFormulario.idConfigFormulario === usuario.configFormulario.idConfigFormulario &&
                                        acompanhamento.usuario.idUsuario === usuario.idUsuario) {
                                        var listaDia = [];
                                        acompanhamento.concatDadosAcompanhamentoFiltro = acompanhamento.senhaAutorizacao.senha + "|" + acompanhamento.beneficiario.carteiraBeneficiario + "|" + acompanhamento.beneficiario.nomeBeneficiario;
                                        for (var _a = 0, _b = acompanhamento.listaAcompanhamentoDia; _a < _b.length; _a++) {
                                            var dia = _b[_a];
                                            if (dia.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_ERRO_SINCRONIZACAO && dia.erroSincronismo !== null) {
                                                listaDia.push(dia);
                                            }
                                        }
                                        if (listaDia.length > 0) {
                                            acompanhamento.listaAcompanhamentoDia = listaDia;
                                            _this.listaAcompanhamentosFalha.push(acompanhamento);
                                        }
                                        else {
                                            if (!acompanhamento.listaAcompanhamentoObs && acompanhamento.listaAcompanhamentoObs != null) {
                                                var obsSinc = acompanhamento.listaAcompanhamentoObs.find(function (x) { return x.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_ERRO_SINCRONIZACAO; });
                                                if ((acompanhamento.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_ERRO_SINCRONIZACAO && (acompanhamento.erroSincronismo !== null && acompanhamento.erroSincronismo)) || obsSinc) {
                                                    acompanhamento.listaAcompanhamentoDia = [];
                                                    _this.listaAcompanhamentosFalha.push(acompanhamento);
                                                }
                                                else {
                                                    if (acompanhamento.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_ERRO_SINCRONIZACAO) {
                                                        acompanhamento.listaAcompanhamentoDia = [];
                                                        _this.listaAcompanhamentosFalha.push(acompanhamento);
                                                    }
                                                }
                                            }
                                            else {
                                                if (acompanhamento.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_ERRO_SINCRONIZACAO) {
                                                    acompanhamento.listaAcompanhamentoDia = [];
                                                    _this.listaAcompanhamentosFalha.push(acompanhamento);
                                                }
                                            }
                                        }
                                    }
                                }
                                _this.qtdGuiasFalha = _this.listaAcompanhamentosFalha.length;
                                _this.setPaginaFalha(1, src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].LIMITE_ACOMPANHAMENTOS_SINCRONIZAR, 0);
                                _this.paginaAtualFalha = 1;
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
    SincronizarPage.prototype.exibirInfoSincronizar = function (acompanhamentoMedico) {
        if (acompanhamentoMedico.exibeDadosSincronismo) {
            acompanhamentoMedico.exibeDadosSincronismo = false;
        }
        else {
            acompanhamentoMedico.exibeDadosSincronismo = true;
        }
    };
    SincronizarPage.prototype.atualizaSincronizarDia = function ($event, acompanhamentoMedico, acompanhamentoDia) {
        acompanhamentoDia.flgSincronizar = $event.target.checked;
        var dia = acompanhamentoMedico.listaAcompanhamentoDia.find(function (x) { return x.flgSincronizar; });
        if (dia) {
            acompanhamentoMedico.flgSincronizar = true;
        }
        this.habilitaDesabilitaBotao();
    };
    SincronizarPage.prototype.atualizaSincronizarAcompanhamento = function ($event, acompanhamentoMedico) {
        acompanhamentoMedico.flgSincronizar = $event.target.checked;
        this.habilitaDesabilitaBotao();
    };
    SincronizarPage.prototype.marcarDesmarcarTodos = function () {
        this.flgMarcarTodos = !this.flgMarcarTodos;
        for (var _i = 0, _a = this.listaAcompanhamentosSincronizarPagina; _i < _a.length; _i++) {
            var acompanhamento = _a[_i];
            acompanhamento.exibeDadosSincronismo = this.flgMarcarTodos;
            acompanhamento.flgSincronizar = this.flgMarcarTodos;
            for (var _b = 0, _c = acompanhamento.listaAcompanhamentoDia; _b < _c.length; _b++) {
                var acompanhamentoDia = _c[_b];
                acompanhamentoDia.flgSincronizar = this.flgMarcarTodos;
            }
        }
        this.habilitaDesabilitaBotao();
    };
    SincronizarPage.prototype.habilitaDesabilitaBotao = function () {
        var flgHabilitaBtnSincronizar = false;
        for (var _i = 0, _a = this.listaAcompanhamentosSincronizarPagina; _i < _a.length; _i++) {
            var acompanhamento = _a[_i];
            if (acompanhamento.listaAcompanhamentoDia.length > 0) {
                for (var _b = 0, _c = acompanhamento.listaAcompanhamentoDia; _b < _c.length; _b++) {
                    var acompanhamentoDia = _c[_b];
                    if (acompanhamentoDia.flgSincronizar) {
                        flgHabilitaBtnSincronizar = true;
                        break;
                    }
                }
            }
            else {
                if (acompanhamento.flgSincronizar) {
                    flgHabilitaBtnSincronizar = true;
                    break;
                }
            }
        }
        this.flgHabilitaBtnSincronizar = flgHabilitaBtnSincronizar;
    };
    SincronizarPage.prototype.confirmarSincronizar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var sincronizar, _i, _a, acompanhamento, _b, _c, acompanhamentoDia, alert_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.flgHabilitaBtnSincronizar = false;
                        this.networkService.CheckNetworkStatus();
                        if (!!this.networkService.NetworkStatus.value) return [3 /*break*/, 1];
                        this.toast.errorToast("Sem conexão com a internet, não é possível sincronizar.");
                        return [3 /*break*/, 5];
                    case 1:
                        sincronizar = false;
                        for (_i = 0, _a = this.listaAcompanhamentosSincronizarPagina; _i < _a.length; _i++) {
                            acompanhamento = _a[_i];
                            if (acompanhamento.flgSincronizar && acompanhamento.listaAcompanhamentoDia.length === 0) {
                                sincronizar = true;
                                break;
                            }
                            else {
                                if (acompanhamento.listaAcompanhamentoDia.length > 0) {
                                    for (_b = 0, _c = acompanhamento.listaAcompanhamentoDia; _b < _c.length; _b++) {
                                        acompanhamentoDia = _c[_b];
                                        if (acompanhamentoDia.flgSincronizar) {
                                            sincronizar = true;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        if (!sincronizar) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.atrCtrl.create({
                                header: 'Vamos iniciar o sincronismo.',
                                buttons: [
                                    {
                                        text: 'Cancelar',
                                        role: 'cancel',
                                        handler: function (_blah) {
                                            _this.flgHabilitaBtnSincronizar = true;
                                        }
                                    }, {
                                        text: 'Confirmar',
                                        handler: function () {
                                            _this.sincronizar();
                                        }
                                    }
                                ]
                            })];
                    case 2:
                        alert_1 = _d.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 3:
                        _d.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        this.toast.errorToast("Nenhum item selecionado para sincronizar");
                        _d.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SincronizarPage.prototype.sincronizar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var usuario, _i, _a, acomp;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
                        usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
                        for (_i = 0, _a = this.listaAcompanhamentosSincronizarPagina; _i < _a.length; _i++) {
                            acomp = _a[_i];
                            if (acomp.flgSincronizar) {
                                acomp.flgExibeGifProcessando = true;
                                acomp.erroSincronismo = '';
                            }
                        }
                        return [4 /*yield*/, this.acompanhamentoService.sincronizar(this.listaAcompanhamentosSincronizarPagina).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var respSinc, _loop_1, this_1, _i, _a, acompanhamento;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            respSinc = data;
                                            _loop_1 = function (acompanhamento) {
                                                var acompSinc, _loop_2, _i, _a, dia, obs;
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                    switch (_b.label) {
                                                        case 0:
                                                            acompSinc = respSinc.find(function (x) { return x.senhaAutorizacao.senha === acompanhamento.senhaAutorizacao.senha; });
                                                            if (!(acompanhamento.flgSincronizar && acompSinc && acompSinc != null)) return [3 /*break*/, 2];
                                                            acompanhamento.statusSincronismo = acompSinc.statusSincronismo;
                                                            acompanhamento.protocoloSincronismo = acompSinc.protocoloSincronismo;
                                                            acompanhamento.listaAcompanhamentoObs = acompSinc.listaAcompanhamentoObs;
                                                            acompanhamento.dataSincronizado = acompSinc.dataSincronizado;
                                                            if (acompSinc.listaAcompanhamentoDia.length > 0) {
                                                                _loop_2 = function (dia) {
                                                                    var diaSinc = acompSinc.listaAcompanhamentoDia.find(function (x) { return x.diaAcompanhamento === dia.diaAcompanhamento; });
                                                                    if (diaSinc && diaSinc != null && diaSinc.flgSincronizar) {
                                                                        dia.statusSincronismo = diaSinc.statusSincronismo;
                                                                        dia.protocoloSincronismo = diaSinc.protocoloSincronismo;
                                                                        if (diaSinc.erroSincronismo !== null && diaSinc.erroSincronismo) {
                                                                            dia.erroSincronismo = diaSinc.erroSincronismo;
                                                                            dia.flgExibeErroProcesso = true;
                                                                            dia.flgExibeSucessoProcesso = false;
                                                                        }
                                                                        else {
                                                                            dia.dataSincronizado = diaSinc.dataSincronizado;
                                                                            dia.flgExibeSucessoProcesso = true;
                                                                            dia.flgExibeErroProcesso = false;
                                                                        }
                                                                        dia.flgSincronizar = false;
                                                                    }
                                                                };
                                                                for (_i = 0, _a = acompanhamento.listaAcompanhamentoDia; _i < _a.length; _i++) {
                                                                    dia = _a[_i];
                                                                    _loop_2(dia);
                                                                }
                                                            }
                                                            else {
                                                                acompanhamento.flgExibeErroProcesso = false;
                                                                acompanhamento.flgExibeSucessoProcesso = true;
                                                            }
                                                            if (acompSinc.erroSincronismo !== null && acompSinc.erroSincronismo !== "") {
                                                                acompanhamento.erroSincronismo = acompSinc.erroSincronismo;
                                                                acompanhamento.flgExibeErroProcesso = true;
                                                                acompanhamento.flgExibeSucessoProcesso = false;
                                                            }
                                                            obs = acompSinc.listaAcompanhamentoObs.find(function (x) { return x.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_ERRO_SINCRONIZACAO; });
                                                            if (obs) {
                                                                acompanhamento.erroAnexoAcompanhamento = "Erro de sincronização no(s) anexo(s).";
                                                            }
                                                            else {
                                                                acompanhamento.erroAnexoAcompanhamento = "";
                                                            }
                                                            acompanhamento.flgExibeGifProcessando = false;
                                                            acompanhamento.flgSincronizar = false;
                                                            return [4 /*yield*/, this_1.atualizaAcompanhamentoDispositivo(acompanhamento)];
                                                        case 1:
                                                            _b.sent();
                                                            _b.label = 2;
                                                        case 2: return [2 /*return*/];
                                                    }
                                                });
                                            };
                                            this_1 = this;
                                            _i = 0, _a = this.listaAcompanhamentosSincronizarPagina;
                                            _b.label = 1;
                                        case 1:
                                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                                            acompanhamento = _a[_i];
                                            return [5 /*yield**/, _loop_1(acompanhamento)];
                                        case 2:
                                            _b.sent();
                                            _b.label = 3;
                                        case 3:
                                            _i++;
                                            return [3 /*break*/, 1];
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); }, function (error) {
                                _this.toast.errorToast(error);
                            })];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SincronizarPage.prototype.atualizaAcompanhamentoDispositivo = function (acompanhamentoMedico) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then(function (items) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var acomp, _loop_3, _i, _a, dia;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (!items || items.length === 0) {
                                            return [2 /*return*/, null];
                                        }
                                        acomp = items.find(function (x) { return x.senhaAutorizacao.senha === acompanhamentoMedico.senhaAutorizacao.senha; });
                                        if (!(acomp != null)) return [3 /*break*/, 2];
                                        acomp.protocoloSincronismo = acompanhamentoMedico.protocoloSincronismo;
                                        acomp.statusSincronismo = acompanhamentoMedico.statusSincronismo;
                                        acomp.dataSincronizado = acompanhamentoMedico.dataSincronizado;
                                        acomp.flgExibeGifProcessando = acompanhamentoMedico.flgExibeGifProcessando;
                                        acomp.flgExibeErroProcesso = acompanhamentoMedico.flgExibeErroProcesso;
                                        acomp.flgExibeSucessoProcesso = acompanhamentoMedico.flgExibeSucessoProcesso;
                                        acomp.flgSincronizar = acompanhamentoMedico.flgSincronizar;
                                        acomp.erroSincronismo = acompanhamentoMedico.erroSincronismo;
                                        acomp.listaAcompanhamentoObs = acompanhamentoMedico.listaAcompanhamentoObs;
                                        acomp.erroAnexoAcompanhamento = acompanhamentoMedico.erroAnexoAcompanhamento;
                                        if (acomp.listaAcompanhamentoDia.length > 0) {
                                            _loop_3 = function (dia) {
                                                var diaSinc = acompanhamentoMedico.listaAcompanhamentoDia.find(function (y) { return y.diaAcompanhamento === dia.diaAcompanhamento; });
                                                if (diaSinc) {
                                                    dia.protocoloSincronismo = diaSinc.protocoloSincronismo;
                                                    dia.statusSincronismo = diaSinc.statusSincronismo;
                                                    dia.flgExibeSucessoProcesso = diaSinc.flgExibeSucessoProcesso;
                                                    dia.flgExibeErroProcesso = diaSinc.flgExibeErroProcesso;
                                                    dia.flgSincronizar = diaSinc.flgSincronizar;
                                                    dia.erroSincronismo = diaSinc.erroSincronismo;
                                                    dia.dataSincronizado = diaSinc.dataSincronizado;
                                                    if (dia.flgExibeSucessoProcesso) {
                                                        for (var _i = 0, _a = dia.listaAcompanhamentoDado; _i < _a.length; _i++) {
                                                            var dado = _a[_i];
                                                            dado.listaAcompanhamentoItemExcluir = [];
                                                        }
                                                    }
                                                }
                                            };
                                            for (_i = 0, _a = acomp.listaAcompanhamentoDia; _i < _a.length; _i++) {
                                                dia = _a[_i];
                                                _loop_3(dia);
                                            }
                                        }
                                        return [4 /*yield*/, this.atualizar(acomp)];
                                    case 1:
                                        _b.sent();
                                        _b.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); }, function (error) {
                            _this.toast.errorToast(error);
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SincronizarPage.prototype.atualizar = function (acompanhamentoMedico) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, acompanhamentoMedico, "senhaAutorizacao.senha").then(function (items) {
                            if (!items || items.length === 0) {
                                return null;
                            }
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SincronizarPage.prototype.visualizarErroSincronismo = function (mensagemErro) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_components_modal_mensagem_sincronismo_modal_mensagem_sincronismo_component__WEBPACK_IMPORTED_MODULE_4__["ModalMensagemSincronismoComponent"],
                            cssClass: 'mensagem-erro-sincronismo-modal',
                            componentProps: {
                                mensagem: mensagemErro
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SincronizarPage.prototype.excluirAcompanhamento = function (acompanhamentoMedico) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var flgDiaJaSincronizado, indexFalha, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        flgDiaJaSincronizado = false;
                        indexFalha = this.listaAcompanhamentosFalha.findIndex(function (x) { return x.senhaAutorizacao.senha === acompanhamentoMedico.senhaAutorizacao.senha; });
                        return [4 /*yield*/, this.loading.presentLoading('Excluindo Acompanhamento/Dia com falha...')];
                    case 1:
                        loading = _a.sent();
                        this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then(function (items) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var acomp, qtdTotalDiasAcomp, listaDia, _loop_4, _i, _a, dia;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (!(items != null)) return [3 /*break*/, 8];
                                        acomp = items.find(function (x) { return x.senhaAutorizacao.senha === acompanhamentoMedico.senhaAutorizacao.senha; });
                                        if (!(acomp != null)) return [3 /*break*/, 8];
                                        qtdTotalDiasAcomp = acomp.listaAcompanhamentoDia.length;
                                        listaDia = [];
                                        _loop_4 = function (dia) {
                                            var indexDia = acomp.listaAcompanhamentoDia.findIndex(function (y) { return y.diaAcompanhamento === dia.diaAcompanhamento; });
                                            if (indexDia !== -1) {
                                                var diaAcomp = acomp.listaAcompanhamentoDia[indexDia];
                                                if (diaAcomp.dataSincronizado === null || diaAcomp.dataSincronizado === "") {
                                                    acomp.listaAcompanhamentoDia.splice(indexDia, 1);
                                                }
                                                else {
                                                    listaDia.push(dia);
                                                    flgDiaJaSincronizado = true;
                                                }
                                            }
                                        };
                                        for (_i = 0, _a = acompanhamentoMedico.listaAcompanhamentoDia; _i < _a.length; _i++) {
                                            dia = _a[_i];
                                            _loop_4(dia);
                                        }
                                        if (!(acompanhamentoMedico.listaAcompanhamentoDia.length > 0)) return [3 /*break*/, 4];
                                        if (!(listaDia.length === 0)) return [3 /*break*/, 2];
                                        this.listaAcompanhamentosFalha.splice(indexFalha, 1);
                                        if (!(qtdTotalDiasAcomp == acompanhamentoMedico.listaAcompanhamentoDia.length)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.storageService.apagar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, acomp, "senhaAutorizacao.senha")];
                                    case 1:
                                        _b.sent();
                                        _b.label = 2;
                                    case 2:
                                        if (flgDiaJaSincronizado) {
                                            this.toast.infoToast("Dia já sincronizado uma vez com sucesso não pode ser excluído");
                                        }
                                        return [4 /*yield*/, this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, acomp, "senhaAutorizacao.senha")];
                                    case 3:
                                        _b.sent();
                                        return [3 /*break*/, 7];
                                    case 4:
                                        if (!(acomp.dataSincronizado !== null && acomp.dataSincronizado !== "")) return [3 /*break*/, 5];
                                        this.toast.infoToast("Acompanhamento já sincronizado uma vez com sucesso não pode ser excluído");
                                        return [3 /*break*/, 7];
                                    case 5:
                                        this.listaAcompanhamentosFalha.splice(indexFalha, 1);
                                        return [4 /*yield*/, this.storageService.apagar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, acomp, "senhaAutorizacao.senha")];
                                    case 6:
                                        _b.sent();
                                        _b.label = 7;
                                    case 7:
                                        this.qtdGuiasFalha = this.listaAcompanhamentosFalha.length;
                                        this.setPaginaFalha(this.paginadorFalha.paginaCorrente, src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].LIMITE_ACOMPANHAMENTOS_SINCRONIZAR, this.paginadorFalha.totalPaginas);
                                        loading.dismiss();
                                        _b.label = 8;
                                    case 8: return [2 /*return*/];
                                }
                            });
                        }); }, function (error) {
                            loading.dismiss();
                            _this.toast.errorToast(error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SincronizarPage.prototype.confirmaEnviarEmail = function (acompanhamentoMedico) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atrCtrl.create({
                            header: 'Importante: É de suma importância que o e-mail seja enviado, pois somente assim poderemos resolver o problema, vamos prosseguir?',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: function (_blah) { }
                                }, {
                                    text: 'Confirmar',
                                    handler: function () {
                                        _this.enviarEmail(acompanhamentoMedico);
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
    SincronizarPage.prototype.enviarEmail = function (acompanhamentoMedico) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var usuario, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
                        return [4 /*yield*/, this.loading.presentLoading('Enviando e-mail...')];
                    case 1:
                        loading = _a.sent();
                        this.acompanhamentoService.enviarEmailPendencia(acompanhamentoMedico).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                if (data) {
                                    this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then(function (items) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        var acomp;
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            switch (_a.label) {
                                                case 0:
                                                    if (!(items != null)) return [3 /*break*/, 2];
                                                    acomp = items.find(function (x) { return x.senhaAutorizacao.senha === acompanhamentoMedico.senhaAutorizacao.senha; });
                                                    acomp.flgEmailEnviado = true;
                                                    acomp.flgPendenciaVerificada = false;
                                                    acomp.dataPendencia = moment__WEBPACK_IMPORTED_MODULE_3__(new Date()).format("DD/MM/YYYY");
                                                    return [4 /*yield*/, this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, acomp, "senhaAutorizacao.senha")];
                                                case 1:
                                                    _a.sent();
                                                    loading.dismiss();
                                                    this.toast.successToast("E-mail enviado com sucesso.");
                                                    _a.label = 2;
                                                case 2: return [2 /*return*/];
                                            }
                                        });
                                    }); }, function (error) {
                                        loading.dismiss();
                                        _this.toast.errorToast(error);
                                    });
                                }
                                else {
                                    loading.dismiss();
                                    this.toast.errorToast("Ocorreu um erro ao enviar o e-mail. Por favor tente novamente mais tarde. Caso o problema persista, contate o suporte técnico.");
                                }
                                return [2 /*return*/];
                            });
                        }); }, function (error) {
                            loading.dismiss();
                            _this.toast.errorToast(error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SincronizarPage.prototype.verificarPendencia = function (acompanhamentoMedico) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.networkService.CheckNetworkStatus();
                        if (!!this.networkService.NetworkStatus.value) return [3 /*break*/, 1];
                        this.toast.errorToast("Sem conexão com a internet, não é possível verificar pendência.");
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.loading.presentLoading('Verificando Pendência...')];
                    case 2:
                        loading_1 = _a.sent();
                        this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then(function (items) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var acompDispositivo;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(items != null)) return [3 /*break*/, 2];
                                        acompDispositivo = items.find(function (x) { return x.senhaAutorizacao.senha === acompanhamentoMedico.senhaAutorizacao.senha; });
                                        if (!(acompDispositivo != null)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.acompanhamentoService.verificarPendenciaSincronismo(acompanhamentoMedico, acompDispositivo).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                var acompanhamentoAtualizar, dataAtual, dataPendencia, duracao, dias, difDias, indexFalha;
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            acompanhamentoAtualizar = data;
                                                            if (!(acompanhamentoAtualizar === null)) return [3 /*break*/, 1];
                                                            dataAtual = moment__WEBPACK_IMPORTED_MODULE_3__(new Date());
                                                            dataPendencia = new Date(moment__WEBPACK_IMPORTED_MODULE_3__(acompanhamentoMedico.dataPendencia, "DD/MM/YYYY").toISOString());
                                                            duracao = moment__WEBPACK_IMPORTED_MODULE_3__["duration"](dataAtual.diff(dataPendencia));
                                                            dias = duracao.asDays();
                                                            difDias = (3 - dias);
                                                            if (dias < 3) {
                                                                this.toast.infoToast("Prazo para resolução das pendências são de " + difDias.toFixed(0) + " dia (s)");
                                                            }
                                                            else {
                                                                this.toast.infoToast("Pendências não foram resolvidas, aguarde.");
                                                            }
                                                            loading_1.dismiss();
                                                            return [3 /*break*/, 3];
                                                        case 1: return [4 /*yield*/, this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, acompanhamentoAtualizar, "senhaAutorizacao.senha")];
                                                        case 2:
                                                            _a.sent();
                                                            indexFalha = this.listaAcompanhamentosFalha.findIndex(function (x) { return x.senhaAutorizacao.senha === acompanhamentoMedico.senhaAutorizacao.senha; });
                                                            this.listaAcompanhamentosFalha.splice(indexFalha, 1);
                                                            this.qtdGuiasFalha = this.listaAcompanhamentosFalha.length;
                                                            this.setPaginaFalha(this.paginadorFalha.paginaCorrente, src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].LIMITE_ACOMPANHAMENTOS_SINCRONIZAR, this.paginadorFalha.totalPaginas);
                                                            loading_1.dismiss();
                                                            this.toast.successToast("Pendências resolvidas com sucesso.");
                                                            _a.label = 3;
                                                        case 3: return [2 /*return*/];
                                                    }
                                                });
                                            }); }, function (error) {
                                                loading_1.dismiss();
                                                _this.toast.errorToast(error);
                                            })];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); }, function (error) {
                            loading_1.dismiss();
                            _this.toast.errorToast(error);
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SincronizarPage.prototype.filtrarAcompanhamento = function (event) {
        var _this = this;
        if (this.opcaoExibir == 'sincronizar') {
            this.filtroAcompanhamento = event.target.value.toLowerCase();
            this.listaAcompanhamentosSincronizarFiltradas = this.listaAcompanhamentosSincronizar.filter(function (item) {
                return item.concatDadosAcompanhamentoFiltro.toLowerCase().includes(_this.filtroAcompanhamento);
            });
            this.qtdGuiasSincronizar = this.listaAcompanhamentosSincronizarFiltradas.length;
            this.setPaginaSincronizar(1, src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].LIMITE_ACOMPANHAMENTOS_SINCRONIZAR, this.paginadorSincronizar.totalPaginas);
            this.flgMarcarTodos = false;
            this.paginaAtualSincronismo = 1;
        }
        else {
            this.filtroAcompanhamento = event.target.value.toLowerCase();
            this.listaAcompanhamentosFalhaFiltradas = this.listaAcompanhamentosFalha.filter(function (item) {
                return item.concatDadosAcompanhamentoFiltro.toLowerCase().includes(_this.filtroAcompanhamento);
            });
            this.qtdGuiasFalha = this.listaAcompanhamentosFalhaFiltradas.length;
            this.setPaginaFalha(1, src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].LIMITE_ACOMPANHAMENTOS_SINCRONIZAR, this.paginadorFalha.totalPaginas);
            this.flgMarcarTodos = false;
            this.paginaAtualFalha = 1;
        }
    };
    SincronizarPage.prototype.cancelaFiltroAcompanhamento = function () {
        this.filtroAcompanhamento = '';
        if (this.opcaoExibir == 'sincronizar') {
            this.qtdGuiasSincronizar = this.listaAcompanhamentosSincronizar.length;
            this.setPaginaSincronizar(1, src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].LIMITE_ACOMPANHAMENTOS_SINCRONIZAR, this.paginadorSincronizar.totalPaginas);
            this.flgMarcarTodos = false;
            this.paginaAtualSincronismo = 1;
        }
        else {
            var tamanhoLista = this.listaAcompanhamentosFalha.length > src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].LIMITE_ACOMPANHAMENTOS_SINCRONIZAR ? src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].LIMITE_ACOMPANHAMENTOS_SINCRONIZAR : this.listaAcompanhamentosFalha.length;
            this.listaAcompanhamentosFalhaFiltradas = this.listaAcompanhamentosFalha.slice(0, tamanhoLista);
            this.qtdGuiasFalha = this.listaAcompanhamentosFalha.length;
            this.setPaginaFalha(1, src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].LIMITE_ACOMPANHAMENTOS_SINCRONIZAR, this.paginadorFalha.totalPaginas);
            this.paginaAtualFalha = 1;
        }
    };
    SincronizarPage.prototype.setPaginaSincronizar = function (pagina, tamanhoPagina, totalPaginas) {
        if (pagina < 1 || (totalPaginas != 0 && pagina > totalPaginas)) {
            return;
        }
        var lista = this.listaAcompanhamentosSincronizar;
        if (this.filtroAcompanhamento != null && this.filtroAcompanhamento != '') {
            lista = this.listaAcompanhamentosSincronizarFiltradas;
        }
        this.paginadorSincronizar = src_app_util_paginador_util__WEBPACK_IMPORTED_MODULE_12__["PaginadorUtil"].getPaginador({ paginaCorrente: pagina, tamanhoPagina: tamanhoPagina, tamanhoLista: lista.length });
        this.listaAcompanhamentosSincronizarPagina = lista.slice(this.paginadorSincronizar.indiceInicial, this.paginadorSincronizar.indiceFinal + 1);
        this.flgMarcarTodos = true;
        this.marcarDesmarcarTodos();
        this.paginaAtualSincronismo = pagina;
    };
    SincronizarPage.prototype.setPaginaFalha = function (pagina, tamanhoPagina, totalPaginas) {
        if (pagina < 1 || (totalPaginas != 0 && pagina > totalPaginas)) {
            return;
        }
        var lista = this.listaAcompanhamentosFalha;
        if (this.filtroAcompanhamento != null && this.filtroAcompanhamento != '') {
            lista = this.listaAcompanhamentosFalhaFiltradas;
        }
        this.paginadorFalha = src_app_util_paginador_util__WEBPACK_IMPORTED_MODULE_12__["PaginadorUtil"].getPaginador({ paginaCorrente: pagina, tamanhoPagina: tamanhoPagina, tamanhoLista: lista.length });
        this.listaAcompanhamentosFalhaPagina = lista.slice(this.paginadorFalha.indiceInicial, this.paginadorFalha.indiceFinal + 1);
        this.paginaAtualFalha = pagina;
    };
    SincronizarPage.ctorParameters = function () { return [
        { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_10__["NetworkService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"] },
        { type: src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_5__["SaudiLoadingComponent"] },
        { type: src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_6__["SaudiToastComponent"] },
        { type: src_app_services_acompanhamento_service__WEBPACK_IMPORTED_MODULE_9__["AcompanhamentoService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    SincronizarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sincronizar',
            template: __webpack_require__(/*! raw-loader!./sincronizar.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/sincronizar/sincronizar.page.html"),
            styles: [__webpack_require__(/*! ./sincronizar.page.scss */ "./src/app/pages/sincronizar/sincronizar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_network_service__WEBPACK_IMPORTED_MODULE_10__["NetworkService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"],
            src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_5__["SaudiLoadingComponent"],
            src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_6__["SaudiToastComponent"],
            src_app_services_acompanhamento_service__WEBPACK_IMPORTED_MODULE_9__["AcompanhamentoService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], SincronizarPage);
    return SincronizarPage;
}());



/***/ }),

/***/ "./src/app/util/paginador-util.ts":
/*!****************************************!*\
  !*** ./src/app/util/paginador-util.ts ***!
  \****************************************/
/*! exports provided: PaginadorUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginadorUtil", function() { return PaginadorUtil; });
var PaginadorUtil = /** @class */ (function () {
    function PaginadorUtil() {
    }
    PaginadorUtil.getPaginador = function (_a) {
        var paginaCorrente = _a.paginaCorrente, tamanhoPagina = _a.tamanhoPagina, tamanhoLista = _a.tamanhoLista;
        // calculando o total de paginas
        var totalPaginas = Math.ceil(tamanhoLista / tamanhoPagina);
        var paginaInicial;
        var paginaFinal;
        if (totalPaginas <= 6) {
            // Se tiver menos de 6 páginas totais para mostrar tudo
            paginaInicial = 1;
            paginaFinal = totalPaginas;
        }
        else {
            // Se tiver mais de 6 páginas totais, calcular as páginas inicial e final
            if (paginaCorrente <= 4) {
                paginaInicial = 1;
                paginaFinal = 6;
            }
            else if (paginaCorrente + 2 >= totalPaginas) {
                paginaInicial = totalPaginas - 5;
                paginaFinal = totalPaginas;
            }
            else {
                paginaInicial = paginaCorrente - 3;
                paginaFinal = paginaCorrente + 2;
            }
        }
        // Cálculo de índices de itens iniciais e finais
        var startIndex = (paginaCorrente - 1) * tamanhoPagina;
        var endIndex = Math.min(startIndex + tamanhoPagina - 1, tamanhoLista - 1);
        //Se o indice inicial for maior que o indice final recalcula o indice inicial
        if (startIndex > endIndex) {
            if (Math.sign(startIndex - tamanhoPagina) == -1) {
                startIndex = 0;
            }
            else {
                startIndex = startIndex - tamanhoPagina;
            }
        }
        // Criar um array de páginas para o ng-repeat no componente
        var paginas = [];
        for (var i = paginaInicial; i < paginaFinal + 1; i++) {
            paginas.push(i);
        }
        // Retornar objeto com todas as propriedades exigidas para exibição
        return {
            totalItems: tamanhoLista,
            paginaCorrente: paginaCorrente,
            tamanhoPagina: tamanhoPagina,
            totalPaginas: totalPaginas,
            paginaInicial: paginaInicial,
            paginaFinal: paginaFinal,
            indiceInicial: startIndex,
            indiceFinal: endIndex,
            paginas: paginas,
        };
    };
    return PaginadorUtil;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sincronizar-sincronizar-module-es5.js.map