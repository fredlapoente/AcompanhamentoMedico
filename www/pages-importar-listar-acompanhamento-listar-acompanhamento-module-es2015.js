(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-importar-listar-acompanhamento-listar-acompanhamento-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/importar/listar-acompanhamento/listar-acompanhamento.page.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/importar/listar-acompanhamento/listar-acompanhamento.page.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"ion-text-center\">\r\n        <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/menu-principal\" text=\"\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-uppercase\">Importar Acompanhamento</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n        <ion-menu-button menuId=\"main-content\"></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>   \r\n</ion-header>\r\n<ion-content>\r\n    <ion-searchbar [(ngModel)]=\"filtroLista\" (keyup)=\"filtrarLista($event)\" (ionCancel)=\"cancelaFiltroLista()\" (ionClear)=\"cancelaFiltroLista()\" cancelButtonText=\"Cancelar\" placeholder=\"Paciente, Carteira ou Senha\" [debounce]=\"250\" inputmode=\"text\" type=\"text\" enterkeyhint=\"search\" animated #searchInput></ion-searchbar> \r\n    <ion-chip *ngIf=\"listaAcompanhamentosFiltrados.length > 0\" (click)=\"marcarDesmarcarTodos()\">\r\n        <ion-icon name=\"checkmark-circle\" *ngIf=\"!flgMarcarTodos\"></ion-icon>\r\n        <ion-label *ngIf=\"!flgMarcarTodos\">Marcar Todos</ion-label>\r\n        <ion-icon name=\"checkmark-circle\" *ngIf=\"flgMarcarTodos\"></ion-icon>\r\n        <ion-label *ngIf=\"flgMarcarTodos\">Desmarcar Todos</ion-label>\r\n    </ion-chip> \r\n    <ion-list *ngFor=\"let acompanhamento of listaAcompanhamentosFiltrados\">\r\n        <ion-card>\r\n            <ion-card-header>\r\n                <ion-row> \r\n                    <ion-col size=\"2\">\r\n                        <ion-button size=\"small\" fill=\"clear\">\r\n                            <ion-spinner name=\"lines\" color=\"success\" *ngIf=\"acompanhamento.flgExibeGifProcessando && acompanhamento.flgImportar\"></ion-spinner>\r\n                            <ion-icon name=\"checkmark-circle\" *ngIf=\"acompanhamento.flgImportadoSucesso\"></ion-icon>\r\n                            <ion-checkbox slot=\"start\" [(ngModel)]=\"acompanhamento.flgImportar\" [disabled]=\"(!acompanhamento.flgPossuiFormulario)\" *ngIf=\"!acompanhamento.flgExibeGifProcessando && !acompanhamento.flgImportadoSucesso\"></ion-checkbox>\r\n                        </ion-button>                \r\n                    </ion-col>\r\n                    <ion-col size=\"10\">\r\n                        <ion-card-title><span [innerHTML]=\"acompanhamento.beneficiario.nomeBeneficiario\"></span></ion-card-title>\r\n                    </ion-col>                                \r\n                </ion-row>\r\n            </ion-card-header>           \r\n            <ion-card-content class=\"card-conteudo\">      \r\n                <ion-row>\r\n                  <ion-col>\r\n                    <span class=\"texto-card-label\">Carteira: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.beneficiario.carteiraBeneficiario\"></span>\r\n                    <br>\r\n                    <span class=\"texto-card-label\">Senha: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.senhaAutorizacao.senha\"></span>\r\n                    <br>\r\n                    <span class=\"texto-card-label\">Formulário: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.configFormulario.nomeConfigFormulario\"></span>\r\n                    <br>\r\n                    <span class=\"texto-card-label\">Usuário: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.usuario.nome\"></span>\r\n                    <br>\r\n                    <span class=\"texto-card-label\">Status: </span><span class=\"texto-card-text\" [innerHTML]=\"acompanhamento.status\"></span>\r\n                    <div *ngIf=\"!acompanhamento.flgPossuiFormulario\">\r\n                        <span class=\"texto-card-text-red\">* Formulário do acompanhamento não habilitado para o usuário</span>\r\n                    </div>\r\n                    <div *ngIf=\"acompanhamento.flgExisteDispositivo\">\r\n                        <span class=\"texto-card-text-yellow\">* Acompanhamento já existe no dispositivo e será atualizado.</span>\r\n                    </div> \r\n                  </ion-col>             \r\n                </ion-row>\r\n            </ion-card-content>\r\n        </ion-card>\r\n    </ion-list>\r\n    <ion-row *ngIf=\"listaAcompanhamentosFiltrados.length > 0\">\r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-button id=\"btnImportar\" expand=\"block\" size=\"large\" (click)=\"confirmarImportarAcompanhamento()\">Importar</ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content> "

/***/ }),

/***/ "./src/app/pages/importar/listar-acompanhamento/listar-acompanhamento-routing.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/importar/listar-acompanhamento/listar-acompanhamento-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: ListarAcompanhamentoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarAcompanhamentoPageRoutingModule", function() { return ListarAcompanhamentoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _listar_acompanhamento_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listar-acompanhamento.page */ "./src/app/pages/importar/listar-acompanhamento/listar-acompanhamento.page.ts");




const routes = [
    {
        path: '',
        component: _listar_acompanhamento_page__WEBPACK_IMPORTED_MODULE_3__["ListarAcompanhamentoPage"]
    }
];
let ListarAcompanhamentoPageRoutingModule = class ListarAcompanhamentoPageRoutingModule {
};
ListarAcompanhamentoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListarAcompanhamentoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/importar/listar-acompanhamento/listar-acompanhamento.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/importar/listar-acompanhamento/listar-acompanhamento.module.ts ***!
  \**************************************************************************************/
/*! exports provided: ListarAcompanhamentoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarAcompanhamentoPageModule", function() { return ListarAcompanhamentoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _listar_acompanhamento_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listar-acompanhamento-routing.module */ "./src/app/pages/importar/listar-acompanhamento/listar-acompanhamento-routing.module.ts");
/* harmony import */ var _listar_acompanhamento_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listar-acompanhamento.page */ "./src/app/pages/importar/listar-acompanhamento/listar-acompanhamento.page.ts");







let ListarAcompanhamentoPageModule = class ListarAcompanhamentoPageModule {
};
ListarAcompanhamentoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _listar_acompanhamento_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListarAcompanhamentoPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_listar_acompanhamento_page__WEBPACK_IMPORTED_MODULE_6__["ListarAcompanhamentoPage"]]
    })
], ListarAcompanhamentoPageModule);



/***/ }),

/***/ "./src/app/pages/importar/listar-acompanhamento/listar-acompanhamento.page.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/importar/listar-acompanhamento/listar-acompanhamento.page.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card-header {\n  padding: 0px;\n}\n\n.card-conteudo {\n  padding: 8px;\n}\n\n.texto-card-label {\n  font-size: 12px;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\n.texto-card-text {\n  font-size: 11px;\n  color: var(--ion-color-primary);\n}\n\n.texto-card-text-red {\n  font-size: 11px;\n  color: var(--ion-color-danger);\n  font-weight: bold;\n}\n\n.texto-card-text-yellow {\n  font-size: 11px;\n  color: var(--ion-color-warning);\n  font-weight: bold;\n}\n\n.texto-card-text-green {\n  font-size: 11px;\n  color: var(--ion-color-success);\n  font-weight: bold;\n}\n\n.alert-message.sc-ion-alert-md {\n  font-size: 14px;\n}\n\n.sc-ion-card-ios-h {\n  margin-top: 4px;\n}\n\n.list-ios {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW1wb3J0YXIvbGlzdGFyLWFjb21wYW5oYW1lbnRvL0M6XFxEZXNlblxcd29ya3NwYWNlX2FwbGljYXRpdm9cXEFwcEFjb21wYW5oYW1lbnRvTWVkaWNvL3NyY1xcYXBwXFxwYWdlc1xcaW1wb3J0YXJcXGxpc3Rhci1hY29tcGFuaGFtZW50b1xcbGlzdGFyLWFjb21wYW5oYW1lbnRvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaW1wb3J0YXIvbGlzdGFyLWFjb21wYW5oYW1lbnRvL2xpc3Rhci1hY29tcGFuaGFtZW50by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ltcG9ydGFyL2xpc3Rhci1hY29tcGFuaGFtZW50by9saXN0YXItYWNvbXBhbmhhbWVudG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmNhcmQtY29udGV1ZG8ge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4udGV4dG8tY2FyZC1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50ZXh0by1jYXJkLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgICAgXHJcbn1cclxuXHJcbi50ZXh0by1jYXJkLXRleHQtcmVkIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgIFxyXG59XHJcblxyXG4udGV4dG8tY2FyZC10ZXh0LXllbGxvdyB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7ICAgXHJcbn1cclxuXHJcbi50ZXh0by1jYXJkLXRleHQtZ3JlZW4ge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgIFxyXG59XHJcblxyXG4uYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtbWQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uc2MtaW9uLWNhcmQtaW9zLWh7XHJcbiAgICBtYXJnaW4tdG9wOjRweDtcclxufVxyXG5cclxuLmxpc3QtaW9ze1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjBweDsgXHJcbn0iLCJpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5jYXJkLWNvbnRldWRvIHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4udGV4dG8tY2FyZC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50ZXh0by1jYXJkLXRleHQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi50ZXh0by1jYXJkLXRleHQtcmVkIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dG8tY2FyZC10ZXh0LXllbGxvdyB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50ZXh0by1jYXJkLXRleHQtZ3JlZW4ge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtbWQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zYy1pb24tY2FyZC1pb3MtaCB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLmxpc3QtaW9zIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/importar/listar-acompanhamento/listar-acompanhamento.page.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/importar/listar-acompanhamento/listar-acompanhamento.page.ts ***!
  \************************************************************************************/
/*! exports provided: ListarAcompanhamentoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarAcompanhamentoPage", function() { return ListarAcompanhamentoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/saudi-toast/saudi-toast.component */ "./src/app/components/saudi-toast/saudi-toast.component.ts");
/* harmony import */ var src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/config/constantes/constantes */ "./src/app/config/constantes/constantes.ts");
/* harmony import */ var src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/model/Usuario.model */ "./src/app/model/Usuario.model.ts");
/* harmony import */ var src_app_services_acompanhamento_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/acompanhamento.service */ "./src/app/services/acompanhamento.service.ts");
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");











let ListarAcompanhamentoPage = class ListarAcompanhamentoPage {
    constructor(router, navCtrl, atrCtrl, toast, acompanhamentoService, storageService, networkService) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.atrCtrl = atrCtrl;
        this.toast = toast;
        this.acompanhamentoService = acompanhamentoService;
        this.storageService = storageService;
        this.networkService = networkService;
        this.listaAcompanhamentos = [];
        this.listaAcompanhamentosFiltrados = [];
        this.listaAcompanhamentosPagina = [];
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_4__["locale"]('pt-br');
        this.flgMarcarTodos = false;
        this.recuperarDados();
    }
    recuperarDados() {
        let getNav = this.router.getCurrentNavigation();
        if (getNav.extras.state) {
            this.listaAcompanhamentos = getNav.extras.state.lista;
            this.listaAcompanhamentosFiltrados = this.listaAcompanhamentos;
            this.verificaExisteDispositivo(this.listaAcompanhamentos);
        }
        else {
            this.toast.errorToast('Ocorreu um erro inesperado, por favor tente novamente.');
            this.navCtrl.navigateBack('menu-principal/importar-com-senha');
        }
    }
    filtrarLista(event) {
        this.filtroLista = event.target.value.toLowerCase();
        this.listaAcompanhamentosFiltrados = this.listaAcompanhamentos;
        this.listaAcompanhamentosFiltrados = this.listaAcompanhamentosFiltrados.filter((item) => {
            return item.concatDadosAcompanhamentoFiltro.toLowerCase().includes(this.filtroLista);
        });
    }
    cancelaFiltroLista() {
        this.filtroLista = '';
        this.listaAcompanhamentosFiltrados = this.listaAcompanhamentos;
    }
    confirmarImportarAcompanhamento() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.networkService.CheckNetworkStatus();
            if (!this.networkService.NetworkStatus.value) {
                this.toast.errorToast("Sem conexão com a internet, não é possível importar.");
            }
            else {
                let importar = false;
                for (let acompanhamento of this.listaAcompanhamentosFiltrados) {
                    if (acompanhamento.flgImportar) {
                        importar = true;
                        break;
                    }
                }
                if (importar) {
                    let mensagem = "Os acompanhamento médicos marcados serão importados.";
                    const alert = yield this.atrCtrl.create({
                        header: 'Importar Acompanhamento?',
                        message: mensagem,
                        buttons: [
                            {
                                text: 'Cancelar',
                                role: 'cancel',
                                handler: () => { }
                            },
                            {
                                text: 'Confirmar',
                                handler: () => {
                                    this.importarAcompanhamento();
                                }
                            }
                        ]
                    });
                    yield alert.present();
                }
                else {
                    this.toast.errorToast("Nenhum acompanhamento selecionado para importar");
                }
            }
        });
    }
    importarAcompanhamento() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
            usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
            for (let acompanhamento of this.listaAcompanhamentosFiltrados) {
                if (acompanhamento.flgImportar) {
                    acompanhamento.flgExibeGifProcessando = true;
                    acompanhamento.flgImportar = false;
                    acompanhamento.flgImportadoSucesso = true;
                    acompanhamento.flgExibeGifProcessando = false;
                    acompanhamento.usuario = usuario;
                    acompanhamento.operadora = usuario.operadora;
                    if (acompanhamento.flgExisteDispositivo) {
                        yield this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_6__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, acompanhamento, "senhaAutorizacao.senha");
                    }
                    else {
                        yield this.storageService.adicionar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_6__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, acompanhamento);
                    }
                }
            }
        });
    }
    verificaExisteDispositivo(listaAcompanhamentos) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let acompanhamentoDispositivo;
            let listaDispositivo = [];
            yield this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_6__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then(items => {
                if (items != null) {
                    listaDispositivo = items;
                }
            });
            for (let acomp of listaAcompanhamentos) {
                acompanhamentoDispositivo = listaDispositivo.find(x => x.senhaAutorizacao.senha === acomp.senhaAutorizacao.senha &&
                    x.beneficiario.carteiraBeneficiario === acomp.beneficiario.carteiraBeneficiario);
                if (acompanhamentoDispositivo != null) {
                    acomp.flgExisteDispositivo = true;
                }
                else {
                    acomp.flgExisteDispositivo = true;
                    acomp.flgExisteDispositivo = false;
                }
            }
        });
    }
    marcarDesmarcarTodos() {
        this.flgMarcarTodos = !this.flgMarcarTodos;
        for (let acompanhamento of this.listaAcompanhamentosFiltrados) {
            acompanhamento.flgImportar = this.flgMarcarTodos;
        }
    }
};
ListarAcompanhamentoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_5__["SaudiToastComponent"] },
    { type: src_app_services_acompanhamento_service__WEBPACK_IMPORTED_MODULE_8__["AcompanhamentoService"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"] },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"] }
];
ListarAcompanhamentoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listar-acompanhamento',
        template: __webpack_require__(/*! raw-loader!./listar-acompanhamento.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/importar/listar-acompanhamento/listar-acompanhamento.page.html"),
        styles: [__webpack_require__(/*! ./listar-acompanhamento.page.scss */ "./src/app/pages/importar/listar-acompanhamento/listar-acompanhamento.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_5__["SaudiToastComponent"],
        src_app_services_acompanhamento_service__WEBPACK_IMPORTED_MODULE_8__["AcompanhamentoService"],
        src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"],
        src_app_services_network_service__WEBPACK_IMPORTED_MODULE_9__["NetworkService"]])
], ListarAcompanhamentoPage);



/***/ })

}]);
//# sourceMappingURL=pages-importar-listar-acompanhamento-listar-acompanhamento-module-es2015.js.map