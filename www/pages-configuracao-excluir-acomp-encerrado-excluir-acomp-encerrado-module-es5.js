(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-configuracao-excluir-acomp-encerrado-excluir-acomp-encerrado-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.page.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.page.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"ion-text-center\">\r\n        <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/menu-principal\" text=\"\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-uppercase\">Excluir Acompanhamentos Encerrados</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n        <ion-menu-button menuId=\"main-content\"></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>   \r\n</ion-header>\r\n<ion-content>\r\n    <form [formGroup]=\"formExcluirAcompEncerrado\">   \r\n        <ion-card>   \r\n            <ion-card-header>\r\n                <ion-card-title class=\"ion-text-center\">Filtrar Acompanhamentos Encerrados</ion-card-title>\r\n            </ion-card-header>        \r\n            <ion-item>\r\n                <ion-label position=\"floating\"></ion-label>\r\n                <ion-select formControlName=\"filtroPeriodo\" interface=\"action-sheet\" placeholder=\"Selecione\" cancelText=\"Cancelar\" okTxt=\"Selecionar\" (ionChange)=\"buscarAcompanhamentosEncerrados()\">\r\n                    <ion-select-option *ngFor=\"let periodo of listaPeriodo\" [value]=\"periodo\">{{ periodo }}</ion-select-option>\r\n                </ion-select>                \r\n            </ion-item>            \r\n        </ion-card> \r\n        <ion-card class=\"ion-no-margin\" *ngIf=\"listaAcompEncerrados.length != 0\">         \r\n            <ion-card-header>\r\n                <ion-card-title class=\"ion-text-center\">Acompanhamentos Encerrados</ion-card-title>\r\n            </ion-card-header>\r\n            <ion-item-sliding *ngFor = \"let acompanhamento of listaAcompEncerrados; let i=index\">\r\n              <ion-item>    \r\n                <ion-row>        \r\n                  <ion-col size=\"12\">\r\n                    <span class=\"texto-card-title\" [innerHTML]=\"acompanhamento.beneficiario.nomeBeneficiario\"></span><br>\r\n                    <span class=\"texto-card-label\">Carteira: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.beneficiario.carteiraBeneficiario\"></span><br>\r\n                    <span class=\"texto-card-label\">Senha: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.senhaAutorizacao.senha\"></span><br>\r\n                    <span class=\"texto-card-label\">Prestador: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.prestador.nomePrestador\"></span><br>                     \r\n                    <span class=\"texto-card-label\">Encerramento: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.dataEncerramento\"></span>                     \r\n                </ion-col>\r\n                </ion-row>\r\n              </ion-item>\r\n              <ion-item-options>\r\n                <ion-button expand=\"block\" (click)=\"apagarAcompanhamento(i)\">\r\n                  <ion-icon name=\"trash\"></ion-icon>Excluir\r\n                </ion-button>\r\n              </ion-item-options>\r\n            </ion-item-sliding>      \r\n        </ion-card>\r\n        <ion-row *ngIf=\"listaAcompEncerrados.length != 0\">\r\n            <ion-col size=\"12\" class=\"ion-text-center\">\r\n                <ion-button expand=\"block\" size=\"large\" (click)=\"apagarTodos()\">Excluir Todos</ion-button>\r\n            </ion-col>           \r\n        </ion-row> \r\n    </form>    \r\n</ion-content>        "

/***/ }),

/***/ "./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado-routing.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: ExcluirAcompEncerradoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcluirAcompEncerradoPageRoutingModule", function() { return ExcluirAcompEncerradoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _excluir_acomp_encerrado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./excluir-acomp-encerrado.page */ "./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.page.ts");




var routes = [
    {
        path: '',
        component: _excluir_acomp_encerrado_page__WEBPACK_IMPORTED_MODULE_3__["ExcluirAcompEncerradoPage"]
    }
];
var ExcluirAcompEncerradoPageRoutingModule = /** @class */ (function () {
    function ExcluirAcompEncerradoPageRoutingModule() {
    }
    ExcluirAcompEncerradoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ExcluirAcompEncerradoPageRoutingModule);
    return ExcluirAcompEncerradoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: ExcluirAcompEncerradoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcluirAcompEncerradoPageModule", function() { return ExcluirAcompEncerradoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _excluir_acomp_encerrado_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./excluir-acomp-encerrado-routing.module */ "./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado-routing.module.ts");
/* harmony import */ var _excluir_acomp_encerrado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./excluir-acomp-encerrado.page */ "./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.page.ts");







var ExcluirAcompEncerradoPageModule = /** @class */ (function () {
    function ExcluirAcompEncerradoPageModule() {
    }
    ExcluirAcompEncerradoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _excluir_acomp_encerrado_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExcluirAcompEncerradoPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_excluir_acomp_encerrado_page__WEBPACK_IMPORTED_MODULE_6__["ExcluirAcompEncerradoPage"]]
        })
    ], ExcluirAcompEncerradoPageModule);
    return ExcluirAcompEncerradoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.page.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.page.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".texto-card-title {\n  font-size: 14px;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\n.texto-card-label {\n  font-size: 12px;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\n.texto-card-text {\n  font-size: 11px;\n  color: var(--ion-color-primary);\n}\n\n.ion-item-sliding {\n  display: block;\n  position: relative;\n  width: 95%;\n  overflow: hidden;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.ion-margin-bottom, [margin-bottom] {\n  margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 2px);\n}\n\nion-item-options ion-button {\n  height: auto;\n}\n\nion-item-sliding ion-item {\n  --inner-border-width: 0 0 0px 0;\n  --border-width: 1px 1px 1px;\n  --border-radius: 10px;\n  --border-color:var(--ion-color-secondary-shade);\n  -webkit-margin-before: 2px;\n          margin-block-start: 2px;\n  -webkit-margin-after: 5px;\n          margin-block-end: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uZmlndXJhY2FvL2V4Y2x1aXItYWNvbXAtZW5jZXJyYWRvL0M6XFxEZXNlblxcd29ya3NwYWNlX2FwbGljYXRpdm9cXEFwcEFjb21wYW5oYW1lbnRvTWVkaWNvL3NyY1xcYXBwXFxwYWdlc1xcY29uZmlndXJhY2FvXFxleGNsdWlyLWFjb21wLWVuY2VycmFkb1xcZXhjbHVpci1hY29tcC1lbmNlcnJhZG8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb25maWd1cmFjYW8vZXhjbHVpci1hY29tcC1lbmNlcnJhZG8vZXhjbHVpci1hY29tcC1lbmNlcnJhZG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLHNDQUFBO0VBQ0EscUNBQUE7QUNDSjs7QURHSTtFQUNFLFlBQUE7QUNBTjs7QURNSTtFQUNJLCtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLCtDQUFBO0VBQ0EsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZ3VyYWNhby9leGNsdWlyLWFjb21wLWVuY2VycmFkby9leGNsdWlyLWFjb21wLWVuY2VycmFkby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dG8tY2FyZC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnRleHRvLWNhcmQtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4udGV4dG8tY2FyZC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7ICAgIFxyXG59XHJcblxyXG4uaW9uLWl0ZW0tc2xpZGluZyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5pb24tbWFyZ2luLWJvdHRvbSwgW21hcmdpbi1ib3R0b21dIHtcclxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMnB4KTtcclxufSAgICAgICAgICAgICAgICAgICBcclxuXHJcbmlvbi1pdGVtLW9wdGlvbnN7XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG5pb24taXRlbS1zbGlkaW5ne1xyXG5cclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDFweCAxcHggMXB4O1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAtLWJvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlKTtcclxuICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDJweDtcclxuICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiA1cHg7XHJcbiAgICB9ICBcclxufSIsIi50ZXh0by1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHRvLWNhcmQtbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dG8tY2FyZC10ZXh0IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uaW9uLWl0ZW0tc2xpZGluZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA5NSU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5pb24tbWFyZ2luLWJvdHRvbSwgW21hcmdpbi1ib3R0b21dIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDJweCk7XG59XG5cbmlvbi1pdGVtLW9wdGlvbnMgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuaW9uLWl0ZW0tc2xpZGluZyBpb24taXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHggMXB4IDFweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAtLWJvcmRlci1jb2xvcjp2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlKTtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAycHg7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.page.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.page.ts ***!
  \********************************************************************************************/
/*! exports provided: ExcluirAcompEncerradoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcluirAcompEncerradoPage", function() { return ExcluirAcompEncerradoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/config/constantes/constantes */ "./src/app/config/constantes/constantes.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var ExcluirAcompEncerradoPage = /** @class */ (function () {
    function ExcluirAcompEncerradoPage(formBuilder, storageService, atrCtrl) {
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        this.atrCtrl = atrCtrl;
        this.listaPeriodo = ["Todos", "Mais de 3 dias", "Mais de 15 dias", "Mais de 30 dias"];
    }
    ExcluirAcompEncerradoPage.prototype.ngOnInit = function () {
        moment__WEBPACK_IMPORTED_MODULE_2__["locale"]('pt-br');
        this.formExcluirAcompEncerrado = this.formBuilder.group({
            filtroPeriodo: [''],
        });
        this.listaAcompEncerrados = [];
    };
    Object.defineProperty(ExcluirAcompEncerradoPage.prototype, "filtroPeriodo", {
        get: function () {
            return this.formExcluirAcompEncerrado.get('filtroPeriodo');
        },
        enumerable: true,
        configurable: true
    });
    ExcluirAcompEncerradoPage.prototype.buscarAcompanhamentosEncerrados = function () {
        var _this = this;
        var acompanhamentoMedico;
        this.listaAcompEncerrados = [];
        var dataFiltro = new Date();
        switch (this.filtroPeriodo.value) {
            case "Todos":
                dataFiltro = null;
                break;
            case "Mais de 3 dias":
                dataFiltro.setDate(dataFiltro.getDate() - 3);
                break;
            case "Mais de 15 dias":
                dataFiltro.setDate(dataFiltro.getDate() - 15);
                break;
            case "Mais de 30 dias":
                dataFiltro.setDate(dataFiltro.getDate() - 30);
                break;
        }
        this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_4__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then(function (items) {
            if (items != null) {
                items.forEach(function (acomp) {
                    if (acomp.status == src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_4__["default"].STATUS_ENCERRADO) {
                        var dataEncerramento = new Date(moment__WEBPACK_IMPORTED_MODULE_2__(acomp.dataEncerramento, "DD/MM/YYYY").toISOString());
                        if (dataFiltro != null) {
                            if (dataEncerramento <= dataFiltro) {
                                _this.listaAcompEncerrados.push(acomp);
                            }
                        }
                        else {
                            _this.listaAcompEncerrados.push(acomp);
                        }
                    }
                });
            }
        });
    };
    ExcluirAcompEncerradoPage.prototype.apagarAcompanhamento = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mensagem, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mensagem = "Ao confirmar o acompanhamento será excluído do seu dispositivo.Deseja excluir o acompanhamento?";
                        return [4 /*yield*/, this.atrCtrl.create({
                                header: 'Excluir acompanhamento encerrado',
                                message: mensagem,
                                buttons: [{
                                        text: 'Cancelar',
                                        role: 'cancel',
                                        handler: function (blah) { }
                                    },
                                    {
                                        text: 'Confirmar',
                                        handler: function () {
                                            _this.listaAcompEncerrados.forEach(function (item, indice) {
                                                if (indice == index) {
                                                    _this.listaAcompEncerrados.splice(indice, 1);
                                                    _this.storageService.apagar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_4__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, item, "senhaAutorizacao.senha");
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
    ExcluirAcompEncerradoPage.prototype.apagarTodos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mensagem, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mensagem = "Ao confirmar TODOS os acompanhamentos encerrados serão excluídos do seu dispositivo.Deseja excluir todos os acompanhamentos encerrados?";
                        return [4 /*yield*/, this.atrCtrl.create({
                                header: 'Excluir TODOS os acompanhamentos encerrados',
                                message: mensagem,
                                buttons: [{
                                        text: 'Cancelar',
                                        role: 'cancel',
                                        handler: function (blah) { }
                                    },
                                    {
                                        text: 'Confirmar',
                                        handler: function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            var _i, _a, acomp;
                                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        _i = 0, _a = this.listaAcompEncerrados;
                                                        _b.label = 1;
                                                    case 1:
                                                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                                                        acomp = _a[_i];
                                                        return [4 /*yield*/, this.storageService.apagar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_4__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, acomp, "senhaAutorizacao.senha")];
                                                    case 2:
                                                        _b.sent();
                                                        _b.label = 3;
                                                    case 3:
                                                        _i++;
                                                        return [3 /*break*/, 1];
                                                    case 4:
                                                        this.listaAcompEncerrados = [];
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }
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
    ExcluirAcompEncerradoPage.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
    ]; };
    ExcluirAcompEncerradoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-excluir-acomp-encerrado',
            template: __webpack_require__(/*! raw-loader!./excluir-acomp-encerrado.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.page.html"),
            styles: [__webpack_require__(/*! ./excluir-acomp-encerrado.page.scss */ "./src/app/pages/configuracao/excluir-acomp-encerrado/excluir-acomp-encerrado.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
    ], ExcluirAcompEncerradoPage);
    return ExcluirAcompEncerradoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-configuracao-excluir-acomp-encerrado-excluir-acomp-encerrado-module-es5.js.map