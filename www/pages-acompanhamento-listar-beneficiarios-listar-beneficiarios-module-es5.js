(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-acompanhamento-listar-beneficiarios-listar-beneficiarios-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/acompanhamento/listar-beneficiarios/listar-beneficiarios.page.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/acompanhamento/listar-beneficiarios/listar-beneficiarios.page.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"ion-text-center\">\r\n        <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/menu-principal\" text=\"\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-uppercase\">Abrir Acompanhamento</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n        <ion-menu-button menuId=\"main-content\"></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>   \r\n</ion-header>\r\n<ion-content>\r\n  <ion-searchbar [(ngModel)]=\"filtroBeneficiario\" (keyup)=\"filtrarBeneficiario($event)\" (ionCancel)=\"cancelaFiltroBeneficiario()\" (ionClear)=\"cancelaFiltroBeneficiario()\" cancelButtonText=\"Cancelar\" placeholder=\"Beneficiário\" [debounce]=\"250\" inputmode=\"text\" type=\"text\" enterkeyhint=\"search\" animated #searchInput></ion-searchbar> \r\n  <ion-list *ngFor=\"let beneficiario of listaBeneficiariosFiltrados\">\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-row (click)=\"selecionarBeneficiario(beneficiario)\">        \r\n          <ion-col size=\"10\">\r\n              <ion-card-title>Cartão: <span [innerHTML]=\"beneficiario.carteiraBeneficiario\"></span></ion-card-title>\r\n          </ion-col>\r\n          <ion-col size=\"2\">\r\n              <ion-button size=\"small\" fill=\"clear\">\r\n                  <ion-icon slot=\"icon-only\" name=\"ios-arrow-forward\"></ion-icon>               \r\n              </ion-button>                \r\n          </ion-col>            \r\n        </ion-row>\r\n      </ion-card-header>\r\n      <ion-card-content class=\"card-conteudo\">      \r\n        <ion-row>\r\n          <ion-col>\r\n            <span class=\"texto-card-label\">Beneficiário: </span><span class=\"texto-card-text\" [innerHTML]=\"beneficiario.nomeBeneficiario\"></span>\r\n            <br>\r\n            <span class=\"texto-card-label\">Data de Nascimento: </span><span class=\"texto-card-text\" [innerHTML]=\"beneficiario.dataNascimento\"></span>\r\n            <br>\r\n            <span class=\"texto-card-label\">Data Emissão: </span><span class=\"texto-card-text\" [innerHTML]=\"beneficiario.datEmissaoCarteira\"></span>\r\n            <br>\r\n            <span class=\"texto-card-label\">Data Validade: </span><span class=\"texto-card-text\" [innerHTML]=\"beneficiario.datValidadeCarteira\"></span>\r\n            <br>\r\n            <span class=\"texto-card-label\">Idade: </span><span class=\"texto-card-text\" [innerHTML]=\"beneficiario.idade\"></span>\r\n            <br>\r\n            <span class=\"texto-card-label\">Sexo: </span><span class=\"texto-card-text\" [innerHTML]=\"beneficiario.sexo\"></span>\r\n          </ion-col>             \r\n        </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </ion-list>\r\n</ion-content>  \r\n\r\n  "

/***/ }),

/***/ "./src/app/pages/acompanhamento/listar-beneficiarios/listar-beneficiarios-routing.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/listar-beneficiarios/listar-beneficiarios-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: ListarBeneficiariosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarBeneficiariosPageRoutingModule", function() { return ListarBeneficiariosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _listar_beneficiarios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listar-beneficiarios.page */ "./src/app/pages/acompanhamento/listar-beneficiarios/listar-beneficiarios.page.ts");




var routes = [
    {
        path: '',
        component: _listar_beneficiarios_page__WEBPACK_IMPORTED_MODULE_3__["ListarBeneficiariosPage"]
    }
];
var ListarBeneficiariosPageRoutingModule = /** @class */ (function () {
    function ListarBeneficiariosPageRoutingModule() {
    }
    ListarBeneficiariosPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ListarBeneficiariosPageRoutingModule);
    return ListarBeneficiariosPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/acompanhamento/listar-beneficiarios/listar-beneficiarios.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/listar-beneficiarios/listar-beneficiarios.module.ts ***!
  \******************************************************************************************/
/*! exports provided: ListarBeneficiariosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarBeneficiariosPageModule", function() { return ListarBeneficiariosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _listar_beneficiarios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listar-beneficiarios-routing.module */ "./src/app/pages/acompanhamento/listar-beneficiarios/listar-beneficiarios-routing.module.ts");
/* harmony import */ var _listar_beneficiarios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listar-beneficiarios.page */ "./src/app/pages/acompanhamento/listar-beneficiarios/listar-beneficiarios.page.ts");







var ListarBeneficiariosPageModule = /** @class */ (function () {
    function ListarBeneficiariosPageModule() {
    }
    ListarBeneficiariosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _listar_beneficiarios_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListarBeneficiariosPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_listar_beneficiarios_page__WEBPACK_IMPORTED_MODULE_6__["ListarBeneficiariosPage"]]
        })
    ], ListarBeneficiariosPageModule);
    return ListarBeneficiariosPageModule;
}());



/***/ }),

/***/ "./src/app/pages/acompanhamento/listar-beneficiarios/listar-beneficiarios.page.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/listar-beneficiarios/listar-beneficiarios.page.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card-header {\n  padding: 0px;\n}\n\n.card-conteudo {\n  padding: 8px;\n}\n\n.texto-card-label {\n  font-size: 12px;\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\n.texto-card-text {\n  font-size: 11px;\n  color: var(--ion-color-primary);\n}\n\n.texto-card-text-red {\n  font-size: 11px;\n  color: var(--ion-color-danger);\n  font-weight: bold;\n}\n\n.alert-message.sc-ion-alert-md {\n  font-size: 14px;\n}\n\n.sc-ion-card-ios-h {\n  margin-top: 4px;\n}\n\n.list-ios {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNvbXBhbmhhbWVudG8vbGlzdGFyLWJlbmVmaWNpYXJpb3MvQzpcXERlc2VuXFx3b3Jrc3BhY2VfYXBsaWNhdGl2b1xcQXBwQWNvbXBhbmhhbWVudG9NZWRpY28vc3JjXFxhcHBcXHBhZ2VzXFxhY29tcGFuaGFtZW50b1xcbGlzdGFyLWJlbmVmaWNpYXJpb3NcXGxpc3Rhci1iZW5lZmljaWFyaW9zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWNvbXBhbmhhbWVudG8vbGlzdGFyLWJlbmVmaWNpYXJpb3MvbGlzdGFyLWJlbmVmaWNpYXJpb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNvbXBhbmhhbWVudG8vbGlzdGFyLWJlbmVmaWNpYXJpb3MvbGlzdGFyLWJlbmVmaWNpYXJpb3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmNhcmQtY29udGV1ZG8ge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4udGV4dG8tY2FyZC1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50ZXh0by1jYXJkLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTsgICAgXHJcbn1cclxuXHJcbi50ZXh0by1jYXJkLXRleHQtcmVkIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkOyAgIFxyXG59XHJcblxyXG4uYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtbWQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uc2MtaW9uLWNhcmQtaW9zLWh7XHJcbiAgICBtYXJnaW4tdG9wOjRweDtcclxufVxyXG5cclxuLmxpc3QtaW9ze1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjBweDsgXHJcbn0iLCJpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5jYXJkLWNvbnRldWRvIHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4udGV4dG8tY2FyZC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50ZXh0by1jYXJkLXRleHQge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi50ZXh0by1jYXJkLXRleHQtcmVkIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtbWQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zYy1pb24tY2FyZC1pb3MtaCB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLmxpc3QtaW9zIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/acompanhamento/listar-beneficiarios/listar-beneficiarios.page.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/acompanhamento/listar-beneficiarios/listar-beneficiarios.page.ts ***!
  \****************************************************************************************/
/*! exports provided: ListarBeneficiariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarBeneficiariosPage", function() { return ListarBeneficiariosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/saudi-toast/saudi-toast.component */ "./src/app/components/saudi-toast/saudi-toast.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/Usuario.model */ "./src/app/model/Usuario.model.ts");
/* harmony import */ var src_app_model_AcompanhamentoMedico_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/model/AcompanhamentoMedico.model */ "./src/app/model/AcompanhamentoMedico.model.ts");
/* harmony import */ var src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/config/constantes/constantes */ "./src/app/config/constantes/constantes.ts");
/* harmony import */ var src_app_model_SenhaAutorizacao_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/model/SenhaAutorizacao.model */ "./src/app/model/SenhaAutorizacao.model.ts");
/* harmony import */ var src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/model/DominioCodigo.model */ "./src/app/model/DominioCodigo.model.ts");











var ListarBeneficiariosPage = /** @class */ (function () {
    function ListarBeneficiariosPage(router, navCtrl, toast, atrCtrl) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.atrCtrl = atrCtrl;
        this.listaBeneficiarios = [];
        this.listaBeneficiariosFiltrados = [];
    }
    ListarBeneficiariosPage.prototype.ngOnInit = function () {
        moment__WEBPACK_IMPORTED_MODULE_2__["locale"]('pt-br');
        this.recuperarDados();
    };
    ListarBeneficiariosPage.prototype.recuperarDados = function () {
        var getNav = this.router.getCurrentNavigation();
        if (getNav.extras.state) {
            this.listaBeneficiarios = getNav.extras.state.lista;
            this.listaBeneficiariosFiltrados = this.listaBeneficiarios;
            this.prestadorModel = getNav.extras.state.prestadorModel;
        }
        else {
            this.toast.errorToast('aqui');
            this.navCtrl.navigateBack('menu-principal/abrir-sem-senha-domiciliar');
        }
    };
    ListarBeneficiariosPage.prototype.selecionarBeneficiario = function (beneficiario) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var usuario, acompanhamentoMedicoBusca, senhaAutorizacao, dataAtual;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
                acompanhamentoMedicoBusca = new src_app_model_AcompanhamentoMedico_model__WEBPACK_IMPORTED_MODULE_7__["AcompanhamentoMedico"]();
                acompanhamentoMedicoBusca.configFormulario = usuario.configFormulario;
                senhaAutorizacao = new src_app_model_SenhaAutorizacao_model__WEBPACK_IMPORTED_MODULE_9__["SenhaAutorizacao"]();
                senhaAutorizacao.beneficiario = beneficiario;
                senhaAutorizacao.prestador = this.prestadorModel;
                dataAtual = new Date();
                senhaAutorizacao.senha = dataAtual.getFullYear() + "" + ('0' + (dataAtual.getMonth() + 1)).slice(-2) + "" + ('0' + dataAtual.getDate()).slice(-2) + "" + ('0' + dataAtual.getHours()).slice(-2) + "" + ('0' + dataAtual.getMinutes()).slice(-2) + "" + ('0' + dataAtual.getSeconds()).slice(-2) + "" + dataAtual.getMilliseconds();
                this.confirmarSelecaoBeneficiario(senhaAutorizacao);
                return [2 /*return*/];
            });
        });
    };
    ListarBeneficiariosPage.prototype.gerarSenha = function (cartao) {
        var senha;
        var dataAtual = new Date();
        senha = cartao + dataAtual.getMilliseconds().toString().slice(-2);
        return senha;
    };
    ListarBeneficiariosPage.prototype.confirmarSelecaoBeneficiario = function (senhaAutorizacao) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var usuario;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_6__["Usuario"]();
                this.operCosta = 286;
                usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
                //Exibe mensagem para confirmar se o usuario quer ou não abrir o acompanhamento novo
                this.confirmarAbrirAcompanhamentoSenhaNovo(senhaAutorizacao);
                return [2 /*return*/];
            });
        });
    };
    ListarBeneficiariosPage.prototype.confirmarAbrirAcompanhamentoSenhaNovo = function (senhaAutorizacao) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var mensagem, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mensagem = "<br><b>Senha: </b>" + senhaAutorizacao.senha +
                            "<br><b>Beneficiário: </b>" + senhaAutorizacao.beneficiario.nomeBeneficiario +
                            "<br><b>Prestador: </b>" + senhaAutorizacao.prestador.nomePrestador +
                            "<br><b>Data de Nascimento: </b>" + senhaAutorizacao.beneficiario.dataNascimento +
                            "<br><b>Idade: </b>" + senhaAutorizacao.beneficiario.idade +
                            "<br><b>Sexo: </b>" + senhaAutorizacao.beneficiario.sexo;
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
                                            var usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_6__["Usuario"]();
                                            usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
                                            //Verifica se o formulário possui grupo configurado
                                            if (usuario.configFormulario.listaGrupoConfigFormulario != null && usuario.configFormulario.listaGrupoConfigFormulario.length > 0) {
                                                //Abre o formulário
                                                var flgAbrindo = true;
                                                var usuario_1 = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_6__["Usuario"]();
                                                usuario_1 = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
                                                var acompanhamentoMedico = new src_app_model_AcompanhamentoMedico_model__WEBPACK_IMPORTED_MODULE_7__["AcompanhamentoMedico"]();
                                                acompanhamentoMedico.dataAbertura = moment__WEBPACK_IMPORTED_MODULE_2__(new Date()).format("DD/MM/YYYY");
                                                acompanhamentoMedico.senhaAutorizacao = senhaAutorizacao;
                                                acompanhamentoMedico.dataInternacao = senhaAutorizacao.dataInternacao;
                                                acompanhamentoMedico.beneficiario = senhaAutorizacao.beneficiario;
                                                acompanhamentoMedico.prestador = senhaAutorizacao.prestador;
                                                acompanhamentoMedico.configFormulario = usuario_1.configFormulario;
                                                acompanhamentoMedico.usuario = usuario_1;
                                                acompanhamentoMedico.operadora = usuario_1.operadora;
                                                acompanhamentoMedico.dispositivoMovel = usuario_1.dispositivoMovel;
                                                acompanhamentoMedico.motivoAlta = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_10__["DominioCodigo"]();
                                                acompanhamentoMedico.status = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_8__["default"].STATUS_ABERTO;
                                                acompanhamentoMedico.statusSincronismo = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_8__["default"].STATUS_PENDENTE;
                                                var navigationExtras = {
                                                    state: {
                                                        acompanhamentoMedico: acompanhamentoMedico,
                                                        flgAbrindo: flgAbrindo
                                                    }
                                                };
                                                _this.router.navigateByUrl('menu-principal/exibirFormDomiciliar', navigationExtras);
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
    ListarBeneficiariosPage.prototype.confirmarAbrirAcompanhamentoSenhaExistente = function (acompanhamentoMedico) {
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
                                            _this.router.navigateByUrl('menu-principal/exibirForm-Domiciliar', navigationExtras);
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
    ListarBeneficiariosPage.prototype.filtrarBeneficiario = function (event) {
        var _this = this;
        this.filtroBeneficiario = event.target.value.toLowerCase();
        this.listaBeneficiariosFiltrados = this.listaBeneficiarios;
        this.listaBeneficiariosFiltrados = this.listaBeneficiariosFiltrados.filter(function (item) {
            return item.concatDadosSenhaFiltro.toLowerCase().includes(_this.filtroBeneficiario);
        });
    };
    ListarBeneficiariosPage.prototype.cancelaFiltroBeneficiario = function () {
        this.filtroBeneficiario = '';
        this.listaBeneficiariosFiltrados = this.listaBeneficiarios;
    };
    ListarBeneficiariosPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_4__["SaudiToastComponent"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
    ]; };
    ListarBeneficiariosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listar-beneficiarios',
            template: __webpack_require__(/*! raw-loader!./listar-beneficiarios.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/acompanhamento/listar-beneficiarios/listar-beneficiarios.page.html"),
            styles: [__webpack_require__(/*! ./listar-beneficiarios.page.scss */ "./src/app/pages/acompanhamento/listar-beneficiarios/listar-beneficiarios.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_4__["SaudiToastComponent"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
    ], ListarBeneficiariosPage);
    return ListarBeneficiariosPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-acompanhamento-listar-beneficiarios-listar-beneficiarios-module-es5.js.map