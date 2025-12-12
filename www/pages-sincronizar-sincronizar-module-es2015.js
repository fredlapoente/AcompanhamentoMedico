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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _sincronizar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sincronizar.page */ "./src/app/pages/sincronizar/sincronizar.page.ts");




const routes = [
    {
        path: '',
        component: _sincronizar_page__WEBPACK_IMPORTED_MODULE_3__["SincronizarPage"]
    }
];
let SincronizarPageRoutingModule = class SincronizarPageRoutingModule {
};
SincronizarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SincronizarPageRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sincronizar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sincronizar-routing.module */ "./src/app/pages/sincronizar/sincronizar-routing.module.ts");
/* harmony import */ var _sincronizar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sincronizar.page */ "./src/app/pages/sincronizar/sincronizar.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let SincronizarPageModule = class SincronizarPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
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













let SincronizarPage = class SincronizarPage {
    constructor(networkService, atrCtrl, storageService, loading, toast, acompanhamentoService, modalCtrl) {
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
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_3__["locale"]('pt-br');
        this.flgMarcarTodos = true;
        this.marcarDesmarcarTodos();
        this.buscarAcompanhamentosSincronizar();
        this.buscarAcompanhamentosFalha();
    }
    segmentChanged(ev) {
        this.opcaoExibir = ev.detail.value;
    }
    buscarAcompanhamentosSincronizar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.listaAcompanhamentosSincronizar = [];
            this.listaAcompanhamentosSincronizarPagina = [];
            let qtdDiasAcomp = 0;
            const loading = yield this.loading.presentLoading('Buscando Acompanhamentos para Sincronizar...');
            let usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
            usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
            this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then(items => {
                if (items != null) {
                    for (let acompanhamento of items) {
                        if (acompanhamento.configFormulario.idConfigFormulario === usuario.configFormulario.idConfigFormulario &&
                            acompanhamento.usuario.idUsuario === usuario.idUsuario) {
                            acompanhamento.configFormulario.nomeConfigFormulario = usuario.configFormulario.nomeConfigFormulario;
                            acompanhamento.concatDadosAcompanhamentoFiltro = acompanhamento.senhaAutorizacao.senha + "|" + acompanhamento.beneficiario.carteiraBeneficiario + "|" + acompanhamento.beneficiario.nomeBeneficiario;
                            qtdDiasAcomp = acompanhamento.listaAcompanhamentoDia.length;
                            let listaDia = [];
                            let qtdDiasErro = 0;
                            for (let dia of acompanhamento.listaAcompanhamentoDia) {
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
                                this.listaAcompanhamentosSincronizar.push(acompanhamento);
                            }
                            else {
                                if (!acompanhamento.listaAcompanhamentoObs && acompanhamento.listaAcompanhamentoObs != null) {
                                    let obsSinc = acompanhamento.listaAcompanhamentoObs.find(x => x.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_PENDENTE);
                                    if (acompanhamento.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_PENDENTE && (qtdDiasAcomp > 0 || obsSinc) && qtdDiasErro < qtdDiasAcomp) {
                                        acompanhamento.listaAcompanhamentoDia = [];
                                        this.listaAcompanhamentosSincronizar.push(acompanhamento);
                                    }
                                }
                                else {
                                    if (acompanhamento.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_PENDENTE && qtdDiasAcomp > 0 && qtdDiasErro < qtdDiasAcomp) {
                                        acompanhamento.listaAcompanhamentoDia = [];
                                        this.listaAcompanhamentosSincronizar.push(acompanhamento);
                                    }
                                }
                            }
                        }
                    }
                    this.qtdGuiasSincronizar = this.listaAcompanhamentosSincronizar.length;
                    this.setPaginaSincronizar(1, src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].LIMITE_ACOMPANHAMENTOS_SINCRONIZAR, 0);
                    this.flgMarcarTodos = false;
                    this.paginaAtualSincronismo = 1;
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
    buscarAcompanhamentosFalha() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.listaAcompanhamentosFalha = [];
            this.listaAcompanhamentosFalhaPagina = [];
            const loading = yield this.loading.presentLoading('Buscando Acompanhamentos com Falha...');
            let usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
            usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
            this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then(items => {
                if (items != null) {
                    for (let acompanhamento of items) {
                        if (acompanhamento.configFormulario.idConfigFormulario === usuario.configFormulario.idConfigFormulario &&
                            acompanhamento.usuario.idUsuario === usuario.idUsuario) {
                            let listaDia = [];
                            acompanhamento.concatDadosAcompanhamentoFiltro = acompanhamento.senhaAutorizacao.senha + "|" + acompanhamento.beneficiario.carteiraBeneficiario + "|" + acompanhamento.beneficiario.nomeBeneficiario;
                            for (let dia of acompanhamento.listaAcompanhamentoDia) {
                                if (dia.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_ERRO_SINCRONIZACAO && dia.erroSincronismo !== null) {
                                    listaDia.push(dia);
                                }
                            }
                            if (listaDia.length > 0) {
                                acompanhamento.listaAcompanhamentoDia = listaDia;
                                this.listaAcompanhamentosFalha.push(acompanhamento);
                            }
                            else {
                                if (!acompanhamento.listaAcompanhamentoObs && acompanhamento.listaAcompanhamentoObs != null) {
                                    let obsSinc = acompanhamento.listaAcompanhamentoObs.find(x => x.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_ERRO_SINCRONIZACAO);
                                    if ((acompanhamento.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_ERRO_SINCRONIZACAO && (acompanhamento.erroSincronismo !== null && acompanhamento.erroSincronismo)) || obsSinc) {
                                        acompanhamento.listaAcompanhamentoDia = [];
                                        this.listaAcompanhamentosFalha.push(acompanhamento);
                                    }
                                    else {
                                        if (acompanhamento.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_ERRO_SINCRONIZACAO) {
                                            acompanhamento.listaAcompanhamentoDia = [];
                                            this.listaAcompanhamentosFalha.push(acompanhamento);
                                        }
                                    }
                                }
                                else {
                                    if (acompanhamento.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_ERRO_SINCRONIZACAO) {
                                        acompanhamento.listaAcompanhamentoDia = [];
                                        this.listaAcompanhamentosFalha.push(acompanhamento);
                                    }
                                }
                            }
                        }
                    }
                    this.qtdGuiasFalha = this.listaAcompanhamentosFalha.length;
                    this.setPaginaFalha(1, src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].LIMITE_ACOMPANHAMENTOS_SINCRONIZAR, 0);
                    this.paginaAtualFalha = 1;
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
    exibirInfoSincronizar(acompanhamentoMedico) {
        if (acompanhamentoMedico.exibeDadosSincronismo) {
            acompanhamentoMedico.exibeDadosSincronismo = false;
        }
        else {
            acompanhamentoMedico.exibeDadosSincronismo = true;
        }
    }
    atualizaSincronizarDia($event, acompanhamentoMedico, acompanhamentoDia) {
        acompanhamentoDia.flgSincronizar = $event.target.checked;
        let dia = acompanhamentoMedico.listaAcompanhamentoDia.find(x => x.flgSincronizar);
        if (dia) {
            acompanhamentoMedico.flgSincronizar = true;
        }
        this.habilitaDesabilitaBotao();
    }
    atualizaSincronizarAcompanhamento($event, acompanhamentoMedico) {
        acompanhamentoMedico.flgSincronizar = $event.target.checked;
        this.habilitaDesabilitaBotao();
    }
    marcarDesmarcarTodos() {
        this.flgMarcarTodos = !this.flgMarcarTodos;
        for (let acompanhamento of this.listaAcompanhamentosSincronizarPagina) {
            acompanhamento.exibeDadosSincronismo = this.flgMarcarTodos;
            acompanhamento.flgSincronizar = this.flgMarcarTodos;
            for (let acompanhamentoDia of acompanhamento.listaAcompanhamentoDia) {
                acompanhamentoDia.flgSincronizar = this.flgMarcarTodos;
            }
        }
        this.habilitaDesabilitaBotao();
    }
    habilitaDesabilitaBotao() {
        let flgHabilitaBtnSincronizar = false;
        for (let acompanhamento of this.listaAcompanhamentosSincronizarPagina) {
            if (acompanhamento.listaAcompanhamentoDia.length > 0) {
                for (let acompanhamentoDia of acompanhamento.listaAcompanhamentoDia) {
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
    }
    confirmarSincronizar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.flgHabilitaBtnSincronizar = false;
            this.networkService.CheckNetworkStatus();
            if (!this.networkService.NetworkStatus.value) {
                this.toast.errorToast("Sem conexão com a internet, não é possível sincronizar.");
            }
            else {
                let sincronizar = false;
                for (let acompanhamento of this.listaAcompanhamentosSincronizarPagina) {
                    if (acompanhamento.flgSincronizar && acompanhamento.listaAcompanhamentoDia.length === 0) {
                        sincronizar = true;
                        break;
                    }
                    else {
                        if (acompanhamento.listaAcompanhamentoDia.length > 0) {
                            for (let acompanhamentoDia of acompanhamento.listaAcompanhamentoDia) {
                                if (acompanhamentoDia.flgSincronizar) {
                                    sincronizar = true;
                                    break;
                                }
                            }
                        }
                    }
                }
                if (sincronizar) {
                    const alert = yield this.atrCtrl.create({
                        header: 'Vamos iniciar o sincronismo.',
                        buttons: [
                            {
                                text: 'Cancelar',
                                role: 'cancel',
                                handler: (_blah) => {
                                    this.flgHabilitaBtnSincronizar = true;
                                }
                            }, {
                                text: 'Confirmar',
                                handler: () => {
                                    this.sincronizar();
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }
                else {
                    this.toast.errorToast("Nenhum item selecionado para sincronizar");
                }
            }
        });
    }
    sincronizar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
            usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
            for (let acomp of this.listaAcompanhamentosSincronizarPagina) {
                if (acomp.flgSincronizar) {
                    acomp.flgExibeGifProcessando = true;
                    acomp.erroSincronismo = '';
                }
            }
            yield this.acompanhamentoService.sincronizar(this.listaAcompanhamentosSincronizarPagina).subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let respSinc = data;
                for (let acompanhamento of this.listaAcompanhamentosSincronizarPagina) {
                    let acompSinc = respSinc.find(x => x.senhaAutorizacao.senha === acompanhamento.senhaAutorizacao.senha);
                    if (acompanhamento.flgSincronizar && acompSinc && acompSinc != null) {
                        acompanhamento.statusSincronismo = acompSinc.statusSincronismo;
                        acompanhamento.protocoloSincronismo = acompSinc.protocoloSincronismo;
                        acompanhamento.listaAcompanhamentoObs = acompSinc.listaAcompanhamentoObs;
                        acompanhamento.dataSincronizado = acompSinc.dataSincronizado;
                        if (acompSinc.listaAcompanhamentoDia.length > 0) {
                            for (let dia of acompanhamento.listaAcompanhamentoDia) {
                                let diaSinc = acompSinc.listaAcompanhamentoDia.find(x => x.diaAcompanhamento === dia.diaAcompanhamento);
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
                        let obs = acompSinc.listaAcompanhamentoObs.find(x => x.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_ERRO_SINCRONIZACAO);
                        if (obs) {
                            acompanhamento.erroAnexoAcompanhamento = "Erro de sincronização no(s) anexo(s).";
                        }
                        else {
                            acompanhamento.erroAnexoAcompanhamento = "";
                        }
                        acompanhamento.flgExibeGifProcessando = false;
                        acompanhamento.flgSincronizar = false;
                        yield this.atualizaAcompanhamentoDispositivo(acompanhamento);
                    }
                }
            }), error => {
                this.toast.errorToast(error);
            });
        });
    }
    atualizaAcompanhamentoDispositivo(acompanhamentoMedico) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then((items) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (!items || items.length === 0) {
                    return null;
                }
                let acomp = items.find(x => x.senhaAutorizacao.senha === acompanhamentoMedico.senhaAutorizacao.senha);
                if (acomp != null) {
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
                        for (let dia of acomp.listaAcompanhamentoDia) {
                            let diaSinc = acompanhamentoMedico.listaAcompanhamentoDia.find(y => y.diaAcompanhamento === dia.diaAcompanhamento);
                            if (diaSinc) {
                                dia.protocoloSincronismo = diaSinc.protocoloSincronismo;
                                dia.statusSincronismo = diaSinc.statusSincronismo;
                                dia.flgExibeSucessoProcesso = diaSinc.flgExibeSucessoProcesso;
                                dia.flgExibeErroProcesso = diaSinc.flgExibeErroProcesso;
                                dia.flgSincronizar = diaSinc.flgSincronizar;
                                dia.erroSincronismo = diaSinc.erroSincronismo;
                                dia.dataSincronizado = diaSinc.dataSincronizado;
                                if (dia.flgExibeSucessoProcesso) {
                                    for (let dado of dia.listaAcompanhamentoDado) {
                                        dado.listaAcompanhamentoItemExcluir = [];
                                    }
                                }
                            }
                        }
                    }
                    yield this.atualizar(acomp);
                }
            }), error => {
                this.toast.errorToast(error);
            });
        });
    }
    atualizar(acompanhamentoMedico) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, acompanhamentoMedico, "senhaAutorizacao.senha").then((items) => {
                if (!items || items.length === 0) {
                    return null;
                }
            });
        });
    }
    visualizarErroSincronismo(mensagemErro) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_components_modal_mensagem_sincronismo_modal_mensagem_sincronismo_component__WEBPACK_IMPORTED_MODULE_4__["ModalMensagemSincronismoComponent"],
                cssClass: 'mensagem-erro-sincronismo-modal',
                componentProps: {
                    mensagem: mensagemErro
                }
            });
            return yield modal.present();
        });
    }
    excluirAcompanhamento(acompanhamentoMedico) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let flgDiaJaSincronizado = false;
            const indexFalha = this.listaAcompanhamentosFalha.findIndex(x => x.senhaAutorizacao.senha === acompanhamentoMedico.senhaAutorizacao.senha);
            const loading = yield this.loading.presentLoading('Excluindo Acompanhamento/Dia com falha...');
            this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then((items) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (items != null) {
                    let acomp = items.find(x => x.senhaAutorizacao.senha === acompanhamentoMedico.senhaAutorizacao.senha);
                    if (acomp != null) {
                        let qtdTotalDiasAcomp = acomp.listaAcompanhamentoDia.length;
                        let listaDia = [];
                        for (let dia of acompanhamentoMedico.listaAcompanhamentoDia) {
                            const indexDia = acomp.listaAcompanhamentoDia.findIndex(y => y.diaAcompanhamento === dia.diaAcompanhamento);
                            if (indexDia !== -1) {
                                let diaAcomp = acomp.listaAcompanhamentoDia[indexDia];
                                if (diaAcomp.dataSincronizado === null || diaAcomp.dataSincronizado === "") {
                                    acomp.listaAcompanhamentoDia.splice(indexDia, 1);
                                }
                                else {
                                    listaDia.push(dia);
                                    flgDiaJaSincronizado = true;
                                }
                            }
                        }
                        if (acompanhamentoMedico.listaAcompanhamentoDia.length > 0) {
                            if (listaDia.length === 0) {
                                this.listaAcompanhamentosFalha.splice(indexFalha, 1);
                                //se o acompanhamento nao tem nenhum dia já sincronizado com sucesso apaga o acompanhamento tb
                                if (qtdTotalDiasAcomp == acompanhamentoMedico.listaAcompanhamentoDia.length) {
                                    yield this.storageService.apagar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, acomp, "senhaAutorizacao.senha");
                                }
                            }
                            if (flgDiaJaSincronizado) {
                                this.toast.infoToast("Dia já sincronizado uma vez com sucesso não pode ser excluído");
                            }
                            yield this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, acomp, "senhaAutorizacao.senha");
                        }
                        else {
                            if (acomp.dataSincronizado !== null && acomp.dataSincronizado !== "") {
                                this.toast.infoToast("Acompanhamento já sincronizado uma vez com sucesso não pode ser excluído");
                            }
                            else {
                                this.listaAcompanhamentosFalha.splice(indexFalha, 1);
                                yield this.storageService.apagar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, acomp, "senhaAutorizacao.senha");
                            }
                        }
                        this.qtdGuiasFalha = this.listaAcompanhamentosFalha.length;
                        this.setPaginaFalha(this.paginadorFalha.paginaCorrente, src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].LIMITE_ACOMPANHAMENTOS_SINCRONIZAR, this.paginadorFalha.totalPaginas);
                        loading.dismiss();
                    }
                }
            }), error => {
                loading.dismiss();
                this.toast.errorToast(error);
            });
        });
    }
    confirmaEnviarEmail(acompanhamentoMedico) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.atrCtrl.create({
                header: 'Importante: É de suma importância que o e-mail seja enviado, pois somente assim poderemos resolver o problema, vamos prosseguir?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: (_blah) => { }
                    }, {
                        text: 'Confirmar',
                        handler: () => {
                            this.enviarEmail(acompanhamentoMedico);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    enviarEmail(acompanhamentoMedico) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_8__["Usuario"]();
            const loading = yield this.loading.presentLoading('Enviando e-mail...');
            this.acompanhamentoService.enviarEmailPendencia(acompanhamentoMedico).subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (data) {
                    this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then((items) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        if (items != null) {
                            let acomp = items.find(x => x.senhaAutorizacao.senha === acompanhamentoMedico.senhaAutorizacao.senha);
                            acomp.flgEmailEnviado = true;
                            acomp.flgPendenciaVerificada = false;
                            acomp.dataPendencia = moment__WEBPACK_IMPORTED_MODULE_3__(new Date()).format("DD/MM/YYYY");
                            yield this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, acomp, "senhaAutorizacao.senha");
                            loading.dismiss();
                            this.toast.successToast("E-mail enviado com sucesso.");
                        }
                    }), error => {
                        loading.dismiss();
                        this.toast.errorToast(error);
                    });
                }
                else {
                    loading.dismiss();
                    this.toast.errorToast("Ocorreu um erro ao enviar o e-mail. Por favor tente novamente mais tarde. Caso o problema persista, contate o suporte técnico.");
                }
            }), error => {
                loading.dismiss();
                this.toast.errorToast(error);
            });
        });
    }
    verificarPendencia(acompanhamentoMedico) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.networkService.CheckNetworkStatus();
            if (!this.networkService.NetworkStatus.value) {
                this.toast.errorToast("Sem conexão com a internet, não é possível verificar pendência.");
            }
            else {
                const loading = yield this.loading.presentLoading('Verificando Pendência...');
                this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then((items) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    if (items != null) {
                        let acompDispositivo = items.find(x => x.senhaAutorizacao.senha === acompanhamentoMedico.senhaAutorizacao.senha);
                        if (acompDispositivo != null) {
                            yield this.acompanhamentoService.verificarPendenciaSincronismo(acompanhamentoMedico, acompDispositivo).subscribe((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                let acompanhamentoAtualizar = data;
                                if (acompanhamentoAtualizar === null) {
                                    let dataAtual = moment__WEBPACK_IMPORTED_MODULE_3__(new Date());
                                    let dataPendencia = new Date(moment__WEBPACK_IMPORTED_MODULE_3__(acompanhamentoMedico.dataPendencia, "DD/MM/YYYY").toISOString());
                                    let duracao = moment__WEBPACK_IMPORTED_MODULE_3__["duration"](dataAtual.diff(dataPendencia));
                                    let dias = duracao.asDays();
                                    let difDias = (3 - dias);
                                    if (dias < 3) {
                                        this.toast.infoToast("Prazo para resolução das pendências são de " + difDias.toFixed(0) + " dia (s)");
                                    }
                                    else {
                                        this.toast.infoToast("Pendências não foram resolvidas, aguarde.");
                                    }
                                    loading.dismiss();
                                }
                                else {
                                    yield this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, acompanhamentoAtualizar, "senhaAutorizacao.senha");
                                    const indexFalha = this.listaAcompanhamentosFalha.findIndex(x => x.senhaAutorizacao.senha === acompanhamentoMedico.senhaAutorizacao.senha);
                                    this.listaAcompanhamentosFalha.splice(indexFalha, 1);
                                    this.qtdGuiasFalha = this.listaAcompanhamentosFalha.length;
                                    this.setPaginaFalha(this.paginadorFalha.paginaCorrente, src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].LIMITE_ACOMPANHAMENTOS_SINCRONIZAR, this.paginadorFalha.totalPaginas);
                                    loading.dismiss();
                                    this.toast.successToast("Pendências resolvidas com sucesso.");
                                }
                            }), error => {
                                loading.dismiss();
                                this.toast.errorToast(error);
                            });
                        }
                    }
                }), error => {
                    loading.dismiss();
                    this.toast.errorToast(error);
                });
            }
        });
    }
    filtrarAcompanhamento(event) {
        if (this.opcaoExibir == 'sincronizar') {
            this.filtroAcompanhamento = event.target.value.toLowerCase();
            this.listaAcompanhamentosSincronizarFiltradas = this.listaAcompanhamentosSincronizar.filter((item) => {
                return item.concatDadosAcompanhamentoFiltro.toLowerCase().includes(this.filtroAcompanhamento);
            });
            this.qtdGuiasSincronizar = this.listaAcompanhamentosSincronizarFiltradas.length;
            this.setPaginaSincronizar(1, src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].LIMITE_ACOMPANHAMENTOS_SINCRONIZAR, this.paginadorSincronizar.totalPaginas);
            this.flgMarcarTodos = false;
            this.paginaAtualSincronismo = 1;
        }
        else {
            this.filtroAcompanhamento = event.target.value.toLowerCase();
            this.listaAcompanhamentosFalhaFiltradas = this.listaAcompanhamentosFalha.filter((item) => {
                return item.concatDadosAcompanhamentoFiltro.toLowerCase().includes(this.filtroAcompanhamento);
            });
            this.qtdGuiasFalha = this.listaAcompanhamentosFalhaFiltradas.length;
            this.setPaginaFalha(1, src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].LIMITE_ACOMPANHAMENTOS_SINCRONIZAR, this.paginadorFalha.totalPaginas);
            this.flgMarcarTodos = false;
            this.paginaAtualFalha = 1;
        }
    }
    cancelaFiltroAcompanhamento() {
        this.filtroAcompanhamento = '';
        if (this.opcaoExibir == 'sincronizar') {
            this.qtdGuiasSincronizar = this.listaAcompanhamentosSincronizar.length;
            this.setPaginaSincronizar(1, src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].LIMITE_ACOMPANHAMENTOS_SINCRONIZAR, this.paginadorSincronizar.totalPaginas);
            this.flgMarcarTodos = false;
            this.paginaAtualSincronismo = 1;
        }
        else {
            let tamanhoLista = this.listaAcompanhamentosFalha.length > src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].LIMITE_ACOMPANHAMENTOS_SINCRONIZAR ? src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].LIMITE_ACOMPANHAMENTOS_SINCRONIZAR : this.listaAcompanhamentosFalha.length;
            this.listaAcompanhamentosFalhaFiltradas = this.listaAcompanhamentosFalha.slice(0, tamanhoLista);
            this.qtdGuiasFalha = this.listaAcompanhamentosFalha.length;
            this.setPaginaFalha(1, src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].LIMITE_ACOMPANHAMENTOS_SINCRONIZAR, this.paginadorFalha.totalPaginas);
            this.paginaAtualFalha = 1;
        }
    }
    setPaginaSincronizar(pagina, tamanhoPagina, totalPaginas) {
        if (pagina < 1 || (totalPaginas != 0 && pagina > totalPaginas)) {
            return;
        }
        let lista = this.listaAcompanhamentosSincronizar;
        if (this.filtroAcompanhamento != null && this.filtroAcompanhamento != '') {
            lista = this.listaAcompanhamentosSincronizarFiltradas;
        }
        this.paginadorSincronizar = src_app_util_paginador_util__WEBPACK_IMPORTED_MODULE_12__["PaginadorUtil"].getPaginador({ paginaCorrente: pagina, tamanhoPagina, tamanhoLista: lista.length });
        this.listaAcompanhamentosSincronizarPagina = lista.slice(this.paginadorSincronizar.indiceInicial, this.paginadorSincronizar.indiceFinal + 1);
        this.flgMarcarTodos = true;
        this.marcarDesmarcarTodos();
        this.paginaAtualSincronismo = pagina;
    }
    setPaginaFalha(pagina, tamanhoPagina, totalPaginas) {
        if (pagina < 1 || (totalPaginas != 0 && pagina > totalPaginas)) {
            return;
        }
        let lista = this.listaAcompanhamentosFalha;
        if (this.filtroAcompanhamento != null && this.filtroAcompanhamento != '') {
            lista = this.listaAcompanhamentosFalhaFiltradas;
        }
        this.paginadorFalha = src_app_util_paginador_util__WEBPACK_IMPORTED_MODULE_12__["PaginadorUtil"].getPaginador({ paginaCorrente: pagina, tamanhoPagina, tamanhoLista: lista.length });
        this.listaAcompanhamentosFalhaPagina = lista.slice(this.paginadorFalha.indiceInicial, this.paginadorFalha.indiceFinal + 1);
        this.paginaAtualFalha = pagina;
    }
};
SincronizarPage.ctorParameters = () => [
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_10__["NetworkService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"] },
    { type: src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_5__["SaudiLoadingComponent"] },
    { type: src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_6__["SaudiToastComponent"] },
    { type: src_app_services_acompanhamento_service__WEBPACK_IMPORTED_MODULE_9__["AcompanhamentoService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
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
class PaginadorUtil {
    static getPaginador({ paginaCorrente, tamanhoPagina, tamanhoLista }) {
        // calculando o total de paginas
        let totalPaginas = Math.ceil(tamanhoLista / tamanhoPagina);
        let paginaInicial;
        let paginaFinal;
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
        let startIndex = (paginaCorrente - 1) * tamanhoPagina;
        let endIndex = Math.min(startIndex + tamanhoPagina - 1, tamanhoLista - 1);
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
        let paginas = [];
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
    }
}


/***/ })

}]);
//# sourceMappingURL=pages-sincronizar-sincronizar-module-es2015.js.map