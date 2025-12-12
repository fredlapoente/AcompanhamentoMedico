(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-acompanhamento-listar-senhas-listar-senhas-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/acompanhamento/listar-senhas/listar-senhas.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/acompanhamento/listar-senhas/listar-senhas.page.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"ion-text-center\">\r\n        <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/menu-principal\" text=\"\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-uppercase\">Abrir Acompanhamento</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n        <ion-menu-button menuId=\"main-content\"></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>   \r\n</ion-header>\r\n<ion-content>\r\n  <ion-searchbar [(ngModel)]=\"filtroSenha\" (keyup)=\"filtrarSenha($event)\" (ionCancel)=\"cancelaFiltroSenha()\" (ionClear)=\"cancelaFiltroSenha()\" cancelButtonText=\"Cancelar\" placeholder=\"Beneficiário, Senha ou Internação\" [debounce]=\"250\" inputmode=\"text\" type=\"text\" enterkeyhint=\"search\" animated #searchInput></ion-searchbar> \r\n  <ion-list *ngFor=\"let senhaAutorizacao of listaSenhasFiltradas\">\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-row (click)=\"selecionarSenha(senhaAutorizacao)\">        \r\n          <ion-col size=\"10\">\r\n              <ion-card-title>Senha: <span [innerHTML]=\"senhaAutorizacao.senha\"></span></ion-card-title>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n              <ion-button size=\"small\" fill=\"clear\">\r\n                  <ion-icon slot=\"icon-only\" name=\"ios-arrow-forward\"></ion-icon>               \r\n              </ion-button>                \r\n          </ion-col>            \r\n        </ion-row>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"card-conteudo\">      \r\n        <ion-row>\r\n          <ion-col>\r\n            <span class=\"texto-card-label\">Beneficiário: </span><span class=\"texto-card-text\" [innerHTML]=\"senhaAutorizacao.beneficiario.nomeBeneficiario\"></span>\r\n            <br>\r\n            <span class=\"texto-card-label\">Carteira: </span><span class=\"texto-card-text\" [innerHTML]=\"senhaAutorizacao.beneficiario.carteiraBeneficiario\"></span>\r\n            <br>\r\n            <span class=\"texto-card-label\">Data de Nascimento: </span><span class=\"texto-card-text\" [innerHTML]=\"senhaAutorizacao.beneficiario.dataNascimento\"></span>\r\n            <br>\r\n            <span class=\"texto-card-label\">Data da Autorização: </span><span class=\"texto-card-text\" [innerHTML]=\"senhaAutorizacao.dataAutorizacao\"></span>\r\n            <br>\r\n            <span class=\"texto-card-label\">Data de Internação: </span><span [ngClass]=\"{'texto-card-text-red': senhaAutorizacao.diasInternacao > 10, 'texto-card-text': senhaAutorizacao.diasInternacao <= 10}\" [innerHTML]=\"senhaAutorizacao.dataInternacao\"></span>\r\n            <br>\r\n            <span class=\"texto-card-label\">Dias Internado: </span><span [ngClass]=\"{'texto-card-text-red': senhaAutorizacao.diasInternacao > 10, 'texto-card-text': senhaAutorizacao.diasInternacao <= 10}\" [innerHTML]=\"senhaAutorizacao.diasInternacao\"></span>\r\n          </ion-col>             \r\n        </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>  \r\n\r\n  "

/***/ }),

/***/ "./src/app/pages/acompanhamento/listar-senhas/listar-senhas-routing.module.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/listar-senhas/listar-senhas-routing.module.ts ***!
  \************************************************************************************/
/*! exports provided: ListarSenhasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarSenhasPageRoutingModule", function() { return ListarSenhasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _listar_senhas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listar-senhas.page */ "./src/app/pages/acompanhamento/listar-senhas/listar-senhas.page.ts");




var routes = [
    {
        path: '',
        component: _listar_senhas_page__WEBPACK_IMPORTED_MODULE_3__["ListarSenhasPage"]
    }
];
var ListarSenhasPageRoutingModule = /** @class */ (function () {
    function ListarSenhasPageRoutingModule() {
    }
    ListarSenhasPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ListarSenhasPageRoutingModule);
    return ListarSenhasPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/acompanhamento/listar-senhas/listar-senhas.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/listar-senhas/listar-senhas.module.ts ***!
  \****************************************************************************/
/*! exports provided: ListarSenhasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarSenhasPageModule", function() { return ListarSenhasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _listar_senhas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listar-senhas-routing.module */ "./src/app/pages/acompanhamento/listar-senhas/listar-senhas-routing.module.ts");
/* harmony import */ var _listar_senhas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listar-senhas.page */ "./src/app/pages/acompanhamento/listar-senhas/listar-senhas.page.ts");







var ListarSenhasPageModule = /** @class */ (function () {
    function ListarSenhasPageModule() {
    }
    ListarSenhasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _listar_senhas_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListarSenhasPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_listar_senhas_page__WEBPACK_IMPORTED_MODULE_6__["ListarSenhasPage"]]
        })
    ], ListarSenhasPageModule);
    return ListarSenhasPageModule;
}());



/***/ }),

/***/ "./src/app/pages/acompanhamento/listar-senhas/listar-senhas.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/listar-senhas/listar-senhas.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card-header {\n  padding: 0px;\n}\n\n.card-conteudo {\n  padding: 8px;\n}\n\n.texto-card-label {\n  font-size: 12px;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\n.texto-card-text {\n  font-size: 11px;\n  color: var(--ion-color-primary);\n}\n\n.texto-card-text-red {\n  font-size: 11px;\n  color: var(--ion-color-danger);\n  font-weight: bold;\n}\n\n.alert-message.sc-ion-alert-md {\n  font-size: 14px;\n}\n\n.sc-ion-card-ios-h {\n  margin-top: 4px;\n}\n\n.list-ios {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNvbXBhbmhhbWVudG8vbGlzdGFyLXNlbmhhcy9DOlxcRGVzZW5cXHdvcmtzcGFjZV9hcGxpY2F0aXZvXFxBcHBBY29tcGFuaGFtZW50b01lZGljby9zcmNcXGFwcFxccGFnZXNcXGFjb21wYW5oYW1lbnRvXFxsaXN0YXItc2VuaGFzXFxsaXN0YXItc2VuaGFzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWNvbXBhbmhhbWVudG8vbGlzdGFyLXNlbmhhcy9saXN0YXItc2VuaGFzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fjb21wYW5oYW1lbnRvL2xpc3Rhci1zZW5oYXMvbGlzdGFyLXNlbmhhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250ZXVkbyB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbi50ZXh0by1jYXJkLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnRleHRvLWNhcmQtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyAgICBcclxufVxyXG5cclxuLnRleHRvLWNhcmQtdGV4dC1yZWQge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7ICAgXHJcbn1cclxuXHJcbi5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1tZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5zYy1pb24tY2FyZC1pb3MtaHtcclxuICAgIG1hcmdpbi10b3A6NHB4O1xyXG59XHJcblxyXG4ubGlzdC1pb3N7XHJcbiAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206MHB4OyBcclxufSIsImlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmNhcmQtY29udGV1ZG8ge1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbi50ZXh0by1jYXJkLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHRvLWNhcmQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnRleHRvLWNhcmQtdGV4dC1yZWQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1tZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnNjLWlvbi1jYXJkLWlvcy1oIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4ubGlzdC1pb3Mge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/acompanhamento/listar-senhas/listar-senhas.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/listar-senhas/listar-senhas.page.ts ***!
  \**************************************************************************/
/*! exports provided: ListarSenhasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarSenhasPage", function() { return ListarSenhasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/saudi-toast/saudi-toast.component */ "./src/app/components/saudi-toast/saudi-toast.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_acompanhamento_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/acompanhamento.service */ "./src/app/services/acompanhamento.service.ts");
/* harmony import */ var src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/model/Usuario.model */ "./src/app/model/Usuario.model.ts");
/* harmony import */ var src_app_model_AcompanhamentoMedico_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/model/AcompanhamentoMedico.model */ "./src/app/model/AcompanhamentoMedico.model.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/config/constantes/constantes */ "./src/app/config/constantes/constantes.ts");
/* harmony import */ var src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/model/DominioCodigo.model */ "./src/app/model/DominioCodigo.model.ts");












var ListarSenhasPage = /** @class */ (function () {
    function ListarSenhasPage(router, navCtrl, toast, atrCtrl, acompanhamentoService, storageService) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.atrCtrl = atrCtrl;
        this.acompanhamentoService = acompanhamentoService;
        this.storageService = storageService;
        this.listaSenhas = [];
        this.listaSenhasFiltradas = [];
    }
    ListarSenhasPage.prototype.ngOnInit = function () {
        moment__WEBPACK_IMPORTED_MODULE_2__["locale"]('pt-br');
        this.recuperarDados();
    };
    ListarSenhasPage.prototype.recuperarDados = function () {
        var getNav = this.router.getCurrentNavigation();
        if (getNav.extras.state) {
            this.listaSenhas = getNav.extras.state.lista;
            this.listaSenhasFiltradas = this.listaSenhas;
        }
        else {
            this.toast.errorToast('Ocorreu um erro inesperado, por favor tente novamente.');
            this.navCtrl.navigateBack('menu-principal/buscar-senha');
        }
    };
    ListarSenhasPage.prototype.selecionarSenha = function (senhaAutorizacao) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var usuario, acompanhamentoMedicoBusca;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
                acompanhamentoMedicoBusca = new src_app_model_AcompanhamentoMedico_model__WEBPACK_IMPORTED_MODULE_8__["AcompanhamentoMedico"]();
                acompanhamentoMedicoBusca.configFormulario = usuario.configFormulario;
                acompanhamentoMedicoBusca.senhaAutorizacao = senhaAutorizacao;
                this.acompanhamentoService.getAcompanhamentoMedicoPorSenha(acompanhamentoMedicoBusca).subscribe(function (data) {
                    var acompanhamentoMedico = data;
                    if (acompanhamentoMedico != null) {
                        if (acompanhamentoMedico.dataEncerramento != null) {
                            _this.toast.errorToast('Já existe acompanhamento ENCERRADO com a senha ' + senhaAutorizacao.senha + '. Não é possível abrir acompanhamento.');
                        }
                        else {
                            _this.toast.errorToast('Já existe acompanhamento ABERTO com a senha ' + senhaAutorizacao.senha + '. Favor importar acompanhamento na opção de menu Importar.');
                        }
                    }
                    else {
                        _this.confirmarSelecaoSenha(senhaAutorizacao);
                    }
                }, function (error) {
                    _this.toast.errorToast(error);
                });
                return [2 /*return*/];
            });
        });
    };
    ListarSenhasPage.prototype.confirmarSelecaoSenha = function (senhaAutorizacao) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var usuario, acompanhamentoMedico;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
                usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
                //Verifica se o usuário já possui acompanhamento medico cadastrado              
                this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_10__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then(function (items) {
                    if (items != null) {
                        //Busca acompanhamento para usuario, formulario e senha
                        acompanhamentoMedico = items.find(function (x) { return x.senhaAutorizacao.senha === senhaAutorizacao.senha &&
                            x.configFormulario.idConfigFormulario === usuario.configFormulario.idConfigFormulario; });
                        if (acompanhamentoMedico != null) {
                            //Exibe mensagem para confirmar se o usuario quer ou não abrir o acompanhamento existente
                            _this.confirmarAbrirAcompanhamentoSenhaExistente(acompanhamentoMedico);
                        }
                        else {
                            //Exibe mensagem para confirmar se o usuario quer ou não abrir o acompanhamento novo
                            _this.confirmarAbrirAcompanhamentoSenhaNovo(senhaAutorizacao);
                        }
                    }
                    else {
                        //Exibe mensagem para confirmar se o usuario quer ou não abrir o acompanhamento novo
                        _this.confirmarAbrirAcompanhamentoSenhaNovo(senhaAutorizacao);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ListarSenhasPage.prototype.confirmarAbrirAcompanhamentoSenhaNovo = function (senhaAutorizacao) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dataInternacao, mensagem, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataInternacao = '';
                        if (senhaAutorizacao.dataInternacao != null) {
                            dataInternacao = senhaAutorizacao.dataInternacao;
                        }
                        mensagem = "<br><b>Senha: </b>" + senhaAutorizacao.senha +
                            "<br><b>Beneficiário: </b>" + senhaAutorizacao.beneficiario.nomeBeneficiario +
                            "<br><b>Data de Nascimento: </b>" + senhaAutorizacao.beneficiario.dataNascimento +
                            "<br><b>Data da Autorização: </b>" + senhaAutorizacao.dataAutorizacao +
                            "<br><b>Data da Internação: </b>" + dataInternacao +
                            "<br><b>Prestador: </b>" + senhaAutorizacao.prestador.nomePrestador;
                        return [4 /*yield*/, this.atrCtrl.create({
                                header: 'Abrir acompanhamento com os dados abaixo?',
                                message: mensagem,
                                buttons: [
                                    {
                                        text: 'Cancelar',
                                        role: 'cancel',
                                        handler: function (blah) { }
                                    },
                                    {
                                        text: 'Confirmar',
                                        handler: function () {
                                            var usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
                                            usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
                                            //Verifica se o formulário possui grupo configurado
                                            if (usuario.configFormulario.listaGrupoConfigFormulario != null && usuario.configFormulario.listaGrupoConfigFormulario.length > 0) {
                                                //Abre o formulário
                                                var flgAbrindo = true;
                                                var usuario_1 = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
                                                usuario_1 = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
                                                var acompanhamentoMedico = new src_app_model_AcompanhamentoMedico_model__WEBPACK_IMPORTED_MODULE_8__["AcompanhamentoMedico"]();
                                                acompanhamentoMedico.dataAbertura = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD/MM/YYYY");
                                                acompanhamentoMedico.senhaAutorizacao = senhaAutorizacao;
                                                acompanhamentoMedico.dataInternacao = senhaAutorizacao.dataInternacao;
                                                acompanhamentoMedico.beneficiario = senhaAutorizacao.beneficiario;
                                                acompanhamentoMedico.prestador = senhaAutorizacao.prestador;
                                                acompanhamentoMedico.diagnosticoInternacao = senhaAutorizacao.justificativaInternacao;
                                                acompanhamentoMedico.configFormulario = usuario_1.configFormulario;
                                                acompanhamentoMedico.usuario = usuario_1;
                                                acompanhamentoMedico.operadora = usuario_1.operadora;
                                                acompanhamentoMedico.dispositivoMovel = usuario_1.dispositivoMovel;
                                                acompanhamentoMedico.motivoAlta = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_11__["DominioCodigo"]();
                                                acompanhamentoMedico.status = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_10__["default"].STATUS_ABERTO;
                                                acompanhamentoMedico.statusSincronismo = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_10__["default"].STATUS_PENDENTE;
                                                var navigationExtras = {
                                                    state: {
                                                        acompanhamentoMedico: acompanhamentoMedico,
                                                        flgAbrindo: flgAbrindo
                                                    }
                                                };
                                                _this.router.navigateByUrl('menu-principal/exibirFormulario', navigationExtras);
                                            }
                                            else {
                                                _this.toast.errorToast("Sr. Usuário, não existe configuração de formulário cadastrada. É necessário criar a configuração no SAUDI !");
                                            }
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
    ListarSenhasPage.prototype.confirmarAbrirAcompanhamentoSenhaExistente = function (acompanhamentoMedico) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mensagem, flgAbrindo, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mensagem = "Já existe um acompanhamento para a senha: " + acompanhamentoMedico.senhaAutorizacao.senha + " Abrir acompanhamento existente?";
                        flgAbrindo = false;
                        return [4 /*yield*/, this.atrCtrl.create({
                                header: 'Abrir Acompanhamento Médico',
                                message: mensagem,
                                buttons: [
                                    {
                                        text: 'Cancelar',
                                        role: 'cancel',
                                        handler: function (blah) { }
                                    }, {
                                        text: 'Confirmar',
                                        handler: function () {
                                            var navigationExtras = {
                                                state: {
                                                    acompanhamentoMedico: acompanhamentoMedico,
                                                    flgAbrindo: flgAbrindo
                                                }
                                            };
                                            _this.router.navigateByUrl('menu-principal/exibirFormulario', navigationExtras);
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
    ListarSenhasPage.prototype.filtrarSenha = function (event) {
        var _this = this;
        this.filtroSenha = event.target.value.toLowerCase();
        this.listaSenhasFiltradas = this.listaSenhas;
        this.listaSenhasFiltradas = this.listaSenhasFiltradas.filter(function (item) {
            return item.concatDadosSenhaFiltro.toLowerCase().includes(_this.filtroSenha);
        });
    };
    ListarSenhasPage.prototype.cancelaFiltroSenha = function () {
        this.filtroSenha = '';
        this.listaSenhasFiltradas = this.listaSenhas;
    };
    ListarSenhasPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_4__["SaudiToastComponent"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: src_app_services_acompanhamento_service__WEBPACK_IMPORTED_MODULE_6__["AcompanhamentoService"] },
        { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"] }
    ]; };
    ListarSenhasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listar-senhas',
            template: __webpack_require__(/*! raw-loader!./listar-senhas.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/acompanhamento/listar-senhas/listar-senhas.page.html"),
            styles: [__webpack_require__(/*! ./listar-senhas.page.scss */ "./src/app/pages/acompanhamento/listar-senhas/listar-senhas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_4__["SaudiToastComponent"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_app_services_acompanhamento_service__WEBPACK_IMPORTED_MODULE_6__["AcompanhamentoService"],
            src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"]])
    ], ListarSenhasPage);
    return ListarSenhasPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-acompanhamento-listar-senhas-listar-senhas-module-es5.js.map