(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-acompanhamento-anexo-anexo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/acompanhamento/anexo/anexo.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/acompanhamento/anexo/anexo.page.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"ion-text-center\">\r\n        <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/menu-principal\" text=\"\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-uppercase\">Anexo Acompanhamento</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n        <ion-menu-button menuId=\"main-content\"></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>   \r\n</ion-header>\r\n<ion-content>\r\n    <form [formGroup]=\"formAnexo\">\r\n        <ion-card>   \r\n            <ion-card-header>\r\n              <ion-card-title class=\"ion-text-center\">Lista de Observações ({{acompanhamentoMedico.senhaAutorizacao.beneficiario.nomeBeneficiario}})</ion-card-title>\r\n            </ion-card-header>        \r\n            <ion-item>\r\n                <ion-label>\r\n                    Data da Observação: <span [innerHTML]=\"dataObservacao\"></span>\r\n                </ion-label>                \r\n            </ion-item>\r\n            <ion-row>\r\n                <ion-col size=\"12\" class=\"ion-text-center\">                    \r\n                    <ion-button expand=\"block\" size=\"large\"   (click)=\"upload()\" [disabled]=\"acompanhamentoMedico.status === 'ENCERRADO'\">\r\n                        <ion-icon slot=\"start\" name=\"attach\"></ion-icon>                        \r\n                        Escolher Arquivo\r\n                    </ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"12\" class=\"ion-text-center\">\r\n                    <ion-button expand=\"block\" size=\"large\" (click)=\"tirarFoto()\" [disabled]=\"acompanhamentoMedico.status === 'ENCERRADO'\">\r\n                        <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\r\n                        Tirar Foto\r\n                    </ion-button>                    \r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row *ngIf=\"photoImage !== '' && photoImage !== null\">\r\n                <ion-col size=\"12\" class=\"ion-text-center\">\r\n                    <ion-thumbnail>\r\n                        <img [src]=\"photoImage\"/> \r\n                    </ion-thumbnail>                                                          \r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row *ngIf=\"uploadImage !== '' && uploadImage !== null\">\r\n                <ion-col size=\"12\" class=\"ion-text-center\">\r\n                    <ion-thumbnail>\r\n                        <img [src]=\"uploadImage\"/> \r\n                    </ion-thumbnail>                                                          \r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-item>\r\n                <ion-label position=\"stacked\">Observação:</ion-label>\r\n                <ion-textarea class=\"textarea-margin-background\" formControlName=\"observacao\" rows=\"6\" cols=\"20\"></ion-textarea>              \r\n            </ion-item> \r\n            <ion-item mode=\"md\" lines=\"none\" class=\"item-error\" *ngIf=\"((observacao.dirty || observacao.touched) && observacao.hasError('required')) || observacao.hasError('incorrect')\">\r\n                <ion-note color=\"warning\" class=\"ion-padding-horizontal\">Campo obrigatório\r\n                    <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n                </ion-note>\r\n            </ion-item>  \r\n            <br>        \r\n        </ion-card>\r\n        <ion-row>\r\n            <ion-col size=\"12\" class=\"ion-text-center\">\r\n                <ion-button expand=\"block\" size=\"large\" [disabled]=\"!formAnexo.valid\" (click)=\"salvarAnexo()\">Salvar</ion-button>\r\n            </ion-col>\r\n        </ion-row>\r\n        <ion-list>\r\n        <ion-grid *ngIf=\"acompanhamentoMedico.listaAcompanhamentoObs.length > 0\">       \r\n            <ion-row class=\"cabecalho-tabela\"> \r\n                <ion-col size=\"3\" class=\"col-cabecalho-tabela\">Data</ion-col>\r\n                <ion-col size=\"4\" class=\"col-cabecalho-tabela\">Observação</ion-col>\r\n                <ion-col size=\"3\" class=\"col-cabecalho-tabela\">Imagem</ion-col>\r\n                <ion-col size=\"2\" class=\"col-cabecalho-tabela\">Ação</ion-col>\r\n            </ion-row>\r\n            <div *ngFor=\"let obs of acompanhamentoMedico.listaAcompanhamentoObs; let i=index\">\r\n                <ion-row *ngIf=\"obs.tipoTransacao !== 'EXCLUIR'\">                \r\n                    <ion-col size=\"3\" class=\"col-tabela text-col-tabela-center\">\r\n                        {{obs.dataObservacao}}\r\n                    </ion-col>\r\n                    <ion-col size=\"4\" class=\"col-tabela text-col-tabela-left\">\r\n                        {{obs.observacao}}\r\n                    </ion-col>\r\n                    <ion-col size=\"3\" class=\"col-icon-tabela\">\r\n                        <ion-icon name=\"attach\" (click)=\"visualizarAnexo(i)\" *ngIf=\"obs.anexo !== '' && obs.anexo !== null && acompanhamentoMedico.status !== 'ENCERRADO'\"></ion-icon>\r\n                    </ion-col>\r\n                    <ion-col size=\"2\" class=\"col-icon-tabela\">                        \r\n                        <ion-icon name=\"trash\" (click)=\"apagarAnexo(i) && acompanhamentoMedico.status !== 'ENCERRADO'\"></ion-icon>\r\n                    </ion-col>                  \r\n                </ion-row>\r\n            </div>\r\n        </ion-grid>\r\n        </ion-list>      \r\n    </form>    \r\n</ion-content>            "

/***/ }),

/***/ "./src/app/model/AcompanhamentoMedicoObs.model.ts":
/*!********************************************************!*\
  !*** ./src/app/model/AcompanhamentoMedicoObs.model.ts ***!
  \********************************************************/
/*! exports provided: AcompanhamentoMedicoObs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcompanhamentoMedicoObs", function() { return AcompanhamentoMedicoObs; });
var AcompanhamentoMedicoObs = /** @class */ (function () {
    function AcompanhamentoMedicoObs() {
    }
    return AcompanhamentoMedicoObs;
}());



/***/ }),

/***/ "./src/app/pages/acompanhamento/anexo/anexo-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/acompanhamento/anexo/anexo-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: AnexoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnexoPageRoutingModule", function() { return AnexoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _anexo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./anexo.page */ "./src/app/pages/acompanhamento/anexo/anexo.page.ts");




var routes = [
    {
        path: '',
        component: _anexo_page__WEBPACK_IMPORTED_MODULE_3__["AnexoPage"]
    }
];
var AnexoPageRoutingModule = /** @class */ (function () {
    function AnexoPageRoutingModule() {
    }
    AnexoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], AnexoPageRoutingModule);
    return AnexoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/acompanhamento/anexo/anexo.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/acompanhamento/anexo/anexo.module.ts ***!
  \************************************************************/
/*! exports provided: AnexoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnexoPageModule", function() { return AnexoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _anexo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./anexo-routing.module */ "./src/app/pages/acompanhamento/anexo/anexo-routing.module.ts");
/* harmony import */ var _anexo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./anexo.page */ "./src/app/pages/acompanhamento/anexo/anexo.page.ts");







var AnexoPageModule = /** @class */ (function () {
    function AnexoPageModule() {
    }
    AnexoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _anexo_routing_module__WEBPACK_IMPORTED_MODULE_5__["AnexoPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_anexo_page__WEBPACK_IMPORTED_MODULE_6__["AnexoPage"]]
        })
    ], AnexoPageModule);
    return AnexoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/acompanhamento/anexo/anexo.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/acompanhamento/anexo/anexo.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cabecalho-tabela {\n  background: var(--ion-color-primary);\n  color: var(--ion-color-primary-contrast);\n  text-align: center;\n}\n\n.col-cabecalho-tabela {\n  border-right: 1px solid #FFFF;\n  border-left: 1px solid #FFFF;\n  text-align: center;\n  font-family: var(--ion-font-family, inherit);\n  font-size: 0.9rem;\n}\n\n.col-tabela {\n  border-right: 1px solid #FFFF;\n  border-left: 1px solid #FFFF;\n  text-align: center;\n  color: var(--ion-color-primary);\n  font-family: var(--ion-font-family, inherit);\n  font-size: 0.9rem;\n}\n\n.col-icon-tabela {\n  text-align: center;\n  color: var(--ion-color-primary);\n}\n\n.text-col-tabela-center {\n  text-align: center;\n}\n\n.text-col-tabela-left {\n  text-align: left;\n}\n\n.textarea-margin-background {\n  margin-top: 20px;\n  margin-bottom: 5px;\n  background-color: var(--ion-color-light-tint);\n}\n\n.label-floating.sc-ion-label-md-h, .label-stacked.sc-ion-label-md-h {\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNvbXBhbmhhbWVudG8vYW5leG8vQzpcXERlc2VuXFx3b3Jrc3BhY2VfYXBsaWNhdGl2b1xcQXBwQWNvbXBhbmhhbWVudG9NZWRpY28vc3JjXFxhcHBcXHBhZ2VzXFxhY29tcGFuaGFtZW50b1xcYW5leG9cXGFuZXhvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWNvbXBhbmhhbWVudG8vYW5leG8vYW5leG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNHLGtCQUFBO0VBQ0EsK0JBQUE7QUNDSDs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hY29tcGFuaGFtZW50by9hbmV4by9hbmV4by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FiZWNhbGhvLXRhYmVsYXtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgXHJcbn1cclxuXHJcbi5jb2wtY2FiZWNhbGhvLXRhYmVsYXtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNGRkZGO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRkZGRjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCk7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLmNvbC10YWJlbGF7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRkZGRjtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0ZGRkY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KTtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4uY29sLWljb24tdGFiZWxhe1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7ICAgIFxyXG59XHJcblxyXG4udGV4dC1jb2wtdGFiZWxhLWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQtY29sLXRhYmVsYS1sZWZ0e1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgXHJcbn1cclxuXHJcbi50ZXh0YXJlYS1tYXJnaW4tYmFja2dyb3VuZHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XHJcbn1cclxuXHJcbi5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaCwgLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWh7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn0iLCIuY2FiZWNhbGhvLXRhYmVsYSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29sLWNhYmVjYWxoby10YWJlbGEge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjRkZGRjtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjRkZGRjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5jb2wtdGFiZWxhIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0ZGRkY7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI0ZGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uY29sLWljb24tdGFiZWxhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4udGV4dC1jb2wtdGFiZWxhLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtY29sLXRhYmVsYS1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRleHRhcmVhLW1hcmdpbi1iYWNrZ3JvdW5kIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XG59XG5cbi5sYWJlbC1mbG9hdGluZy5zYy1pb24tbGFiZWwtbWQtaCwgLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWgge1xuICBmb250LXNpemU6IDIycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/acompanhamento/anexo/anexo.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/acompanhamento/anexo/anexo.page.ts ***!
  \**********************************************************/
/*! exports provided: AnexoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnexoPage", function() { return AnexoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/saudi-toast/saudi-toast.component */ "./src/app/components/saudi-toast/saudi-toast.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_AcompanhamentoMedicoDia_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/model/AcompanhamentoMedicoDia.model */ "./src/app/model/AcompanhamentoMedicoDia.model.ts");
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ "./node_modules/@awesome-cordova-plugins/camera/ngx/index.js");
/* harmony import */ var _awesome_cordova_plugins_chooser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @awesome-cordova-plugins/chooser/ngx */ "./node_modules/@awesome-cordova-plugins/chooser/ngx/index.js");
/* harmony import */ var src_app_model_AcompanhamentoMedico_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/model/AcompanhamentoMedico.model */ "./src/app/model/AcompanhamentoMedico.model.ts");
/* harmony import */ var src_app_model_AcompanhamentoMedicoObs_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/model/AcompanhamentoMedicoObs.model */ "./src/app/model/AcompanhamentoMedicoObs.model.ts");
/* harmony import */ var src_app_components_modal_exibir_imagem_modal_exibir_imagem_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/modal-exibir-imagem/modal-exibir-imagem.component */ "./src/app/components/modal-exibir-imagem/modal-exibir-imagem.component.ts");
/* harmony import */ var src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/config/constantes/constantes */ "./src/app/config/constantes/constantes.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");















var AnexoPage = /** @class */ (function () {
    function AnexoPage(router, formBuilder, navCtrl, toast, atrCtrl, modalCtrl, camera, chooser, storageService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.atrCtrl = atrCtrl;
        this.modalCtrl = modalCtrl;
        this.camera = camera;
        this.chooser = chooser;
        this.storageService = storageService;
        this.options = {
            quality: 30,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.photoImage = "";
        this.uploadImage = "";
        this.nomeImagem = "";
        this.acompanhamentoMedicoObs = new src_app_model_AcompanhamentoMedicoObs_model__WEBPACK_IMPORTED_MODULE_11__["AcompanhamentoMedicoObs"]();
    }
    AnexoPage.prototype.ngOnInit = function () {
        moment__WEBPACK_IMPORTED_MODULE_2__["locale"]('pt-br');
        this.exibeFormulario();
    };
    Object.defineProperty(AnexoPage.prototype, "observacao", {
        get: function () {
            return this.formAnexo.get('observacao');
        },
        enumerable: true,
        configurable: true
    });
    AnexoPage.prototype.exibeFormulario = function () {
        var getNav = this.router.getCurrentNavigation();
        this.acompanhamentoMedico = new src_app_model_AcompanhamentoMedico_model__WEBPACK_IMPORTED_MODULE_10__["AcompanhamentoMedico"]();
        this.acompanhamentoMedicoDia = new src_app_model_AcompanhamentoMedicoDia_model__WEBPACK_IMPORTED_MODULE_7__["AcompanhamentoMedicoDia"]();
        if (getNav.extras.state) {
            this.acompanhamentoMedico = getNav.extras.state.acompanhamento;
            this.acompanhamentoMedicoDia = getNav.extras.state.acompanhamentoDia;
        }
        else {
            this.toast.errorToast('Ocorreu um erro inesperado, por favor tente novamente.');
            this.navCtrl.navigateBack('menu-principal/diaAcompanhamento');
        }
        this.dataObservacao = this.acompanhamentoMedicoDia.diaAcompanhamento;
        this.formAnexo = this.formBuilder.group({
            observacao: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
        if (this.acompanhamentoMedico.status === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_13__["default"].STATUS_ENCERRADO) {
            this.observacao.disable();
        }
    };
    AnexoPage.prototype.tirarFoto = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            var str = base64Image;
            _this.photoImage = base64Image;
            _this.nomeImagem = _this.dataObservacao.replace("/", "").replace("/", "") + "_" + _this.acompanhamentoMedico.listaAcompanhamentoObs.length + ".jpeg";
            _this.uploadImage = "";
        }, function (error) {
            console.log(error);
        });
    };
    AnexoPage.prototype.upload = function () {
        var _this = this;
        this.chooser.getFile("image/jpeg,image/gif,image/jpg,image/png").then(function (value) {
            _this.uploadImage = value.dataURI;
            _this.nomeImagem = value.name;
            _this.photoImage = "";
        }, function (error) {
            _this.toast.errorToast(JSON.stringify(error));
        });
    };
    AnexoPage.prototype.salvarAnexo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.acompanhamentoMedicoObs.anexo = "";
                        this.acompanhamentoMedicoObs.dataObservacao = this.dataObservacao;
                        this.acompanhamentoMedicoObs.observacao = this.observacao.value;
                        this.acompanhamentoMedicoObs.nomeAnexo = this.nomeImagem;
                        this.acompanhamentoMedicoObs.tipoTransacao = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_13__["default"].TIPO_TRANSACAO_INSERIR;
                        this.acompanhamentoMedicoObs.statusSincronismo = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_13__["default"].STATUS_PENDENTE;
                        this.acompanhamentoMedico.statusSincronismo = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_13__["default"].STATUS_PENDENTE;
                        this.acompanhamentoMedico.flgExibeGifProcessando = false;
                        this.acompanhamentoMedico.flgExibeSucessoProcesso = false;
                        this.acompanhamentoMedico.flgExibeErroProcesso = false;
                        if (this.uploadImage !== "" && this.uploadImage !== null) {
                            this.acompanhamentoMedicoObs.anexo = this.uploadImage.replace('data:image/jpeg;base64,', '');
                        }
                        else {
                            if (this.photoImage !== "" && this.photoImage !== null) {
                                this.acompanhamentoMedicoObs.anexo = this.photoImage.replace('data:image/jpeg;base64,', '');
                            }
                        }
                        this.acompanhamentoMedico.listaAcompanhamentoObs.push(this.acompanhamentoMedicoObs);
                        return [4 /*yield*/, this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_13__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, this.acompanhamentoMedico, "senhaAutorizacao.senha")];
                    case 1:
                        _a.sent();
                        this.observacao.setValue("");
                        this.uploadImage = "";
                        this.photoImage = "";
                        this.nomeImagem = "";
                        return [2 /*return*/];
                }
            });
        });
    };
    AnexoPage.prototype.apagarAnexo = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mensagem, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mensagem = "Tem certeza que deseja excluir a Observação " + this.acompanhamentoMedico.listaAcompanhamentoObs[index].observacao + " ?";
                        return [4 /*yield*/, this.atrCtrl.create({
                                header: 'Excluir Observação ',
                                message: mensagem,
                                buttons: [
                                    {
                                        text: 'Cancelar',
                                        role: 'cancel',
                                        handler: function (blah) { }
                                    }, {
                                        text: 'Confirmar',
                                        handler: function () {
                                            _this.acompanhamentoMedico.listaAcompanhamentoObs.forEach(function (item, indice) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            if (!(indice == index)) return [3 /*break*/, 2];
                                                            if (this.acompanhamentoMedico.listaAcompanhamentoObs[indice].statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_13__["default"].STATUS_SINCRONIZADO) {
                                                                this.acompanhamentoMedico.listaAcompanhamentoObs[indice].tipoTransacao = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_13__["default"].TIPO_TRANSACAO_EXCLUIR;
                                                                this.acompanhamentoMedico.listaAcompanhamentoObs[indice].statusSincronismo = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_13__["default"].STATUS_PENDENTE;
                                                                this.acompanhamentoMedico.statusSincronismo = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_13__["default"].STATUS_PENDENTE;
                                                                this.acompanhamentoMedico.flgExibeGifProcessando = false;
                                                                this.acompanhamentoMedico.flgExibeSucessoProcesso = false;
                                                                this.acompanhamentoMedico.flgExibeErroProcesso = false;
                                                            }
                                                            else {
                                                                this.acompanhamentoMedico.listaAcompanhamentoObs.splice(indice, 1);
                                                            }
                                                            return [4 /*yield*/, this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_13__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, this.acompanhamentoMedico, "senhaAutorizacao.senha")];
                                                        case 1:
                                                            _a.sent();
                                                            _a.label = 2;
                                                        case 2: return [2 /*return*/];
                                                    }
                                                });
                                            }); });
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
    AnexoPage.prototype.visualizarAnexo = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_components_modal_exibir_imagem_modal_exibir_imagem_component__WEBPACK_IMPORTED_MODULE_12__["ModalExibirImagemComponent"],
                            cssClass: 'modal-exibir-imagem-modal',
                            componentProps: {
                                imagem: 'data:image/jpeg;base64,' + this.acompanhamentoMedico.listaAcompanhamentoObs[index].anexo
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
    AnexoPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
        { type: src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_5__["SaudiToastComponent"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"] },
        { type: _awesome_cordova_plugins_chooser_ngx__WEBPACK_IMPORTED_MODULE_9__["Chooser"] },
        { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_14__["StorageService"] }
    ]; };
    AnexoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-anexo',
            template: __webpack_require__(/*! raw-loader!./anexo.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/acompanhamento/anexo/anexo.page.html"),
            styles: [__webpack_require__(/*! ./anexo.page.scss */ "./src/app/pages/acompanhamento/anexo/anexo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_5__["SaudiToastComponent"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_8__["Camera"],
            _awesome_cordova_plugins_chooser_ngx__WEBPACK_IMPORTED_MODULE_9__["Chooser"],
            src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_14__["StorageService"]])
    ], AnexoPage);
    return AnexoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-acompanhamento-anexo-anexo-module-es5.js.map