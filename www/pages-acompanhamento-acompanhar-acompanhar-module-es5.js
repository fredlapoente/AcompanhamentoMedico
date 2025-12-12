(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-acompanhamento-acompanhar-acompanhar-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/acompanhamento/acompanhar/acompanhar.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/acompanhamento/acompanhar/acompanhar.page.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"ion-text-center\">\r\n      <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/menu-principal\" text=\"\"></ion-back-button>\r\n      </ion-buttons>\r\n      <ion-title class=\"ion-text-uppercase\">Acompanhar</ion-title>\r\n      <ion-buttons slot=\"end\">\r\n      <ion-menu-button menuId=\"main-content\"></ion-menu-button>\r\n      </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <form [formGroup]=\"formAcompanhar\">    \r\n      <ion-card>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Prestador</ion-label>\r\n            <ion-select formControlName=\"prestadorSelecionado\" interface=\"action-sheet\" placeholder=\"Selecione\" cancelText=\"Cancelar\" okText=\"Ok\" (ionChange)=\"exibirAcompanhamentos('')\">\r\n              <ion-select-option *ngFor=\"let prestador of listaPrestadores\" [value]=\"prestador.idPrestador\">{{ prestador.nomePrestador }}</ion-select-option>\r\n            </ion-select>      \r\n        </ion-item> \r\n      </ion-card>\r\n      <ion-segment *ngIf=\"exibirAbas\"  (ionChange)=\"segmentChanged($event)\" value=\"{{opcaoExibir}}\">\r\n          <ion-segment-button value=\"ambos\">\r\n            <ion-label>Ambos</ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"abertos\">\r\n            <ion-label>Abertos</ion-label>\r\n          </ion-segment-button>\r\n          <ion-segment-button value=\"encerrados\">\r\n            <ion-label>Encerrados</ion-label>\r\n          </ion-segment-button>\r\n      </ion-segment>\r\n      <ion-list>\r\n        <ion-searchbar *ngIf=\"exibirAbas\" formControlName=\"filtroAcompanhamento\" (keyup)=\"filtrarAcompanhamentos($event)\" (ionCancel)=\"cancelaFiltroAcompanhamento()\" (ionClear)=\"cancelaFiltroAcompanhamento()\" cancelButtonText=\"Cancelar\" placeholder=\"Pesquisar: Beneficiário ou Senha\" [debounce]=\"250\" inputmode=\"text\" type=\"text\" enterkeyhint=\"search\" animated #searchInput></ion-searchbar> \r\n        <ion-row *ngIf=\"exibirAbas\" (click)=\"abrirModalLegenda()\">                   \r\n          <ion-col size=\"12\">                           \r\n            <ion-icon name=\"information-circle\"></ion-icon>\r\n            <span class=\"texto-card-title\">Legenda</span> \r\n          </ion-col>\r\n        </ion-row>  \r\n        <ion-card class=\"ion-no-margin\">         \r\n          <ion-item-sliding *ngFor = \"let acompanhamento of listaAcompanhamentosFiltradas; let i=index\">\r\n            <ion-item>                   \r\n              <ion-row class=\"coluna-cabecalho-lista\" (click)=\"abrirAcompanhamento(acompanhamento)\">                   \r\n                <ion-col size=\"10\">\r\n                  <span class=\"texto-card-title\" [innerHTML]=\"acompanhamento.beneficiario.nomeBeneficiario\"></span>\r\n                </ion-col>\r\n                <ion-col size=\"2\" class=\" aling-col-last-end\">\r\n                  <ion-icon name=\"square\" class=\"imagem-indicador-cinza\" *ngIf=\"acompanhamento.dataUltimaVisualizacao == '' || acompanhamento.dataUltimaVisualizacao != dataAtual\"></ion-icon>\r\n                  <ion-icon name=\"square\" class=\"imagem-indicador-verde\" *ngIf=\"acompanhamento.dataUltimaVisualizacao != '' && acompanhamento.dataUltimaVisualizacao == dataAtual\"></ion-icon>\r\n                  <ion-icon name=\"square\" class=\"imagem-indicador-vermelho\" *ngIf=\"(acompanhamento.dataEncerramento == '' || acompanhamento.dataEncerramento == null) && (acompanhamento.dataAlta != '' && acompanhamento.dataAlta != null)\"></ion-icon>\r\n                  <ion-icon name=\"square\" class=\"imagem-indicador-cinza\" *ngIf=\"((acompanhamento.dataEncerramento != '' && acompanhamento.dataEncerramento != null) && (acompanhamento.dataAlta != '' && acompanhamento.dataAlta != null)) || (acompanhamento.dataAlta == '' || acompanhamento.dataAlta == null)\"></ion-icon>                   \r\n                </ion-col>\r\n                <ion-col size=\"12\">\r\n                  <span class=\"texto-card-label\">Carteira: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.beneficiario.carteiraBeneficiario\"></span><br>\r\n                  <span class=\"texto-card-label\">Senha: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.senhaAutorizacao.senha\"></span><br>\r\n                  <span class=\"texto-card-label\">Status: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.status\"></span>                     \r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-item>\r\n            <ion-item-options>\r\n              <ion-button expand=\"block\" (click)=\"apagarAcompanhamento(i)\">\r\n                <ion-icon name=\"trash\"></ion-icon>Excluir\r\n              </ion-button>\r\n            </ion-item-options>\r\n          </ion-item-sliding>      \r\n        </ion-card>                    \r\n      </ion-list>       \r\n  </form>    \r\n</ion-content>    "

/***/ }),

/***/ "./src/app/pages/acompanhamento/acompanhar/acompanhar.-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/acompanhar/acompanhar.-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AcompanharPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcompanharPageRoutingModule", function() { return AcompanharPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _acompanhar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./acompanhar.page */ "./src/app/pages/acompanhamento/acompanhar/acompanhar.page.ts");




var routes = [
    {
        path: '',
        component: _acompanhar_page__WEBPACK_IMPORTED_MODULE_3__["AcompanharPage"]
    }
];
var AcompanharPageRoutingModule = /** @class */ (function () {
    function AcompanharPageRoutingModule() {
    }
    AcompanharPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AcompanharPageRoutingModule);
    return AcompanharPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/acompanhamento/acompanhar/acompanhar.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/acompanhamento/acompanhar/acompanhar.module.ts ***!
  \**********************************************************************/
/*! exports provided: AcompanharPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcompanharPageModule", function() { return AcompanharPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _acompanhar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./acompanhar.-routing.module */ "./src/app/pages/acompanhamento/acompanhar/acompanhar.-routing.module.ts");
/* harmony import */ var _acompanhar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./acompanhar.page */ "./src/app/pages/acompanhamento/acompanhar/acompanhar.page.ts");







var AcompanharPageModule = /** @class */ (function () {
    function AcompanharPageModule() {
    }
    AcompanharPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _acompanhar_routing_module__WEBPACK_IMPORTED_MODULE_5__["AcompanharPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_acompanhar_page__WEBPACK_IMPORTED_MODULE_6__["AcompanharPage"]]
        })
    ], AcompanharPageModule);
    return AcompanharPageModule;
}());



/***/ }),

/***/ "./src/app/pages/acompanhamento/acompanhar/acompanhar.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/acompanhamento/acompanhar/acompanhar.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".texto-card-title {\n  font-size: 14px;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\n.texto-card-label {\n  font-size: 12px;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\n.texto-card-text {\n  font-size: 11px;\n  color: var(--ion-color-primary);\n}\n\n.ion-item-sliding {\n  display: block;\n  position: relative;\n  width: 95%;\n  overflow: hidden;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ion-margin-bottom, [margin-bottom] {\n  margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 2px);\n}\n\nion-item-options ion-button {\n  height: auto;\n}\n\nion-item-sliding ion-item {\n  --inner-border-width: 0 0 0px 0;\n  --border-width: 1px 1px 1px;\n  --border-radius: 10px;\n  --border-color:var(--ion-color-secondary-shade);\n  -webkit-margin-before: 2px;\n          margin-block-start: 2px;\n  -webkit-margin-after: 5px;\n          margin-block-end: 5px;\n}\n\nion-item-sliding ion-item ion-row {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNvbXBhbmhhbWVudG8vYWNvbXBhbmhhci9DOlxcRGVzZW5cXHdvcmtzcGFjZV9hcGxpY2F0aXZvXFxBcHBBY29tcGFuaGFtZW50b01lZGljby9zcmNcXGFwcFxccGFnZXNcXGFjb21wYW5oYW1lbnRvXFxhY29tcGFuaGFyXFxhY29tcGFuaGFyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWNvbXBhbmhhbWVudG8vYWNvbXBhbmhhci9hY29tcGFuaGFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQ0FBQTtFQUNBLHFDQUFBO0FDQ0o7O0FER0k7RUFDRSxZQUFBO0FDQU47O0FETUk7RUFDSSwrQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQ0FBQTtFQUNBLDBCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0FDSFI7O0FES1E7RUFDSSxXQUFBO0FDSFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY29tcGFuaGFtZW50by9hY29tcGFuaGFyL2Fjb21wYW5oYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHRvLWNhcmQtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50ZXh0by1jYXJkLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnRleHRvLWNhcmQtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyAgICBcclxufVxyXG5cclxuLmlvbi1pdGVtLXNsaWRpbmcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uaW9uLW1hcmdpbi1ib3R0b20sIFttYXJnaW4tYm90dG9tXSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcclxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDJweCk7XHJcbn0gICAgICAgICAgICAgICAgICAgXHJcblxyXG5pb24taXRlbS1vcHRpb25ze1xyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuaW9uLWl0ZW0tc2xpZGluZ3tcclxuXHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xyXG4gICAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHggMXB4IDFweDtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgLS1ib3JkZXItY29sb3I6dmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZSk7XHJcbiAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAycHg7XHJcbiAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogNXB4O1xyXG5cclxuICAgICAgICBpb24tcm93e1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9ICBcclxufSIsIi50ZXh0by1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHRvLWNhcmQtbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dG8tY2FyZC10ZXh0IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uaW9uLWl0ZW0tc2xpZGluZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA5NSU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5pb24tbWFyZ2luLWJvdHRvbSwgW21hcmdpbi1ib3R0b21dIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDJweCk7XG59XG5cbmlvbi1pdGVtLW9wdGlvbnMgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuaW9uLWl0ZW0tc2xpZGluZyBpb24taXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHggMXB4IDFweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtLWJvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlKTtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAycHg7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDVweDtcbn1cbmlvbi1pdGVtLXNsaWRpbmcgaW9uLWl0ZW0gaW9uLXJvdyB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/acompanhamento/acompanhar/acompanhar.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/acompanhamento/acompanhar/acompanhar.page.ts ***!
  \********************************************************************/
/*! exports provided: AcompanharPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcompanharPage", function() { return AcompanharPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/saudi-loading/saudi-loading.component */ "./src/app/components/saudi-loading/saudi-loading.component.ts");
/* harmony import */ var src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/saudi-toast/saudi-toast.component */ "./src/app/components/saudi-toast/saudi-toast.component.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/config/constantes/constantes */ "./src/app/config/constantes/constantes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_modal_legenda_acompanhar_modal_legenda_acompanhar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/modal-legenda-acompanhar/modal-legenda-acompanhar.component */ "./src/app/components/modal-legenda-acompanhar/modal-legenda-acompanhar.component.ts");











var AcompanharPage = /** @class */ (function () {
    function AcompanharPage(formBuilder, loading, toast, storageService, router, atrCtrl, modalCtrl) {
        this.formBuilder = formBuilder;
        this.loading = loading;
        this.toast = toast;
        this.storageService = storageService;
        this.router = router;
        this.atrCtrl = atrCtrl;
        this.modalCtrl = modalCtrl;
        this.exibirAbas = false;
        this.opcaoExibir = "ambos";
        this.listaPrestadores = [];
        this.listaAcompanhamentos = [];
        this.listaAcompanhamentosFiltradas = [];
        this.dataAtual = '';
    }
    AcompanharPage.prototype.ngOnInit = function () {
        moment__WEBPACK_IMPORTED_MODULE_2__["locale"]('pt-br');
        this.formAcompanhar = this.formBuilder.group({
            prestadorSelecionado: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            filtroAcompanhamento: ['']
        });
        this.dataAtual = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD/MM/YYYY");
        this.buscarPrestadoresComAcompanhamento();
    };
    Object.defineProperty(AcompanharPage.prototype, "prestadorSelecionado", {
        get: function () {
            return this.formAcompanhar.get('prestadorSelecionado');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AcompanharPage.prototype, "filtroAcompanhamento", {
        get: function () {
            return this.formAcompanhar.get('filtroAcompanhamento');
        },
        enumerable: true,
        configurable: true
    });
    AcompanharPage.prototype.buscarPrestadoresComAcompanhamento = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var usuario, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.listaPrestadores = [];
                        usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
                        return [4 /*yield*/, this.loading.presentLoading('Buscando prestador(es)...')];
                    case 1:
                        loading = _a.sent();
                        this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then(function (itens) {
                            if (itens) {
                                itens.forEach(function (acomp) {
                                    if (acomp.usuario.idUsuario === usuario.idUsuario) {
                                        if (_this.listaPrestadores.length > 0) {
                                            var prestador = _this.listaPrestadores.find(function (y) { return y.idPrestador === acomp.prestador.idPrestador; });
                                            if (!prestador) {
                                                _this.listaPrestadores.push(acomp.prestador);
                                            }
                                        }
                                        else {
                                            _this.listaPrestadores.push(acomp.prestador);
                                        }
                                    }
                                });
                                if (_this.listaPrestadores.length > 0) {
                                    loading.dismiss();
                                }
                                else {
                                    _this.toast.errorToast("Nenhum prestador localizado.");
                                    loading.dismiss();
                                }
                            }
                            else {
                                _this.toast.errorToast("Nenhum prestador localizado.");
                                loading.dismiss();
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AcompanharPage.prototype.segmentChanged = function (ev) {
        this.opcaoExibir = ev.detail.value;
        switch (this.opcaoExibir) {
            case 'ambos':
                this.exibirAcompanhamentos('');
                break;
            case 'abertos':
                this.exibirAcompanhamentos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_ABERTO);
                break;
            case 'encerrados':
                this.exibirAcompanhamentos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_ENCERRADO);
                break;
        }
    };
    AcompanharPage.prototype.exibirAcompanhamentos = function (status) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var usuario, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.listaAcompanhamentos = [];
                        usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
                        return [4 /*yield*/, this.loading.presentLoading('Buscando acompanhamentos...')];
                    case 1:
                        loading = _a.sent();
                        this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then(function (itens) {
                            _this.listaAcompanhamentos = itens.filter(function (x) { return x.usuario.idUsuario === usuario.idUsuario &&
                                x.prestador.idPrestador === _this.prestadorSelecionado.value &&
                                x.usuario.configFormulario.idDominio === usuario.configFormulario.idDominio &&
                                (x.status === status || status === ''); });
                            _this.listaAcompanhamentosFiltradas = _this.listaAcompanhamentos;
                            _this.exibirAbas = true;
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AcompanharPage.prototype.filtrarAcompanhamentos = function (event) {
        this.listaAcompanhamentosFiltradas = this.listaAcompanhamentos;
        this.listaAcompanhamentosFiltradas = this.listaAcompanhamentosFiltradas.filter(function (item) { return item.beneficiario.nomeBeneficiario.toLowerCase().includes(event.target.value.toLowerCase()) ||
            item.beneficiario.carteiraBeneficiario.toLowerCase().includes(event.target.value.toLowerCase()) ||
            item.senhaAutorizacao.senha.toLowerCase().includes(event.target.value.toLowerCase()); });
    };
    AcompanharPage.prototype.cancelaFiltroAcompanhamento = function () {
        this.listaAcompanhamentosFiltradas = this.listaAcompanhamentos;
    };
    AcompanharPage.prototype.abrirAcompanhamento = function (acompanhamentoMedico) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var flgAbrindo, navigationExtras;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                flgAbrindo = false;
                navigationExtras = {
                    state: {
                        acompanhamentoMedico: acompanhamentoMedico,
                        flgAbrindo: flgAbrindo
                    }
                };
                if (acompanhamentoMedico.usuario.configFormulario.codDominio == src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].PERFIL_DOMICILIAR) {
                    this.router.navigateByUrl('menu-principal/exibirFormDomiciliar', navigationExtras);
                }
                else {
                    this.router.navigateByUrl('menu-principal/exibirFormulario', navigationExtras);
                }
                return [2 /*return*/];
            });
        });
    };
    AcompanharPage.prototype.apagarAcompanhamento = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mensagem, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mensagem = "Ao confirmar o acompanhamento será excluído do seu dispositivo.Deseja excluir o acompanhamento?";
                        return [4 /*yield*/, this.atrCtrl.create({
                                header: 'Excluir acompanhamento',
                                message: mensagem,
                                buttons: [{
                                        text: 'Cancelar',
                                        role: 'cancel',
                                        handler: function (blah) { }
                                    },
                                    {
                                        text: 'Confirmar',
                                        handler: function () {
                                            _this.listaAcompanhamentos.forEach(function (item, indice) {
                                                if (indice == index) {
                                                    _this.listaAcompanhamentos.splice(indice, 1);
                                                    _this.storageService.apagar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, item, "senhaAutorizacao.senha");
                                                }
                                            });
                                        }
                                    }]
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
    AcompanharPage.prototype.abrirModalLegenda = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_components_modal_legenda_acompanhar_modal_legenda_acompanhar_component__WEBPACK_IMPORTED_MODULE_10__["ModalLegendaAcompanharComponent"],
                            cssClass: 'legenda-acompanhar-modal'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AcompanharPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_4__["SaudiLoadingComponent"] },
        { type: src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_5__["SaudiToastComponent"] },
        { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] }
    ]; };
    AcompanharPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-acompanhar',
            template: __webpack_require__(/*! raw-loader!./acompanhar.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/acompanhamento/acompanhar/acompanhar.page.html"),
            styles: [__webpack_require__(/*! ./acompanhar.page.scss */ "./src/app/pages/acompanhamento/acompanhar/acompanhar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_4__["SaudiLoadingComponent"],
            src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_5__["SaudiToastComponent"],
            src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]])
    ], AcompanharPage);
    return AcompanharPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-acompanhamento-acompanhar-acompanhar-module-es5.js.map