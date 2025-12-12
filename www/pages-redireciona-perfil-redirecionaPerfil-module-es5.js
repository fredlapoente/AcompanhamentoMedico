(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-redireciona-perfil-redirecionaPerfil-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/redireciona-perfil/redirecionaPerfil.page.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/redireciona-perfil/redirecionaPerfil.page.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/redireciona-perfil/redirecionaPerfil-routing.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/redireciona-perfil/redirecionaPerfil-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: RedirecionaPerfilRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirecionaPerfilRoutingModule", function() { return RedirecionaPerfilRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _redirecionaPerfil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redirecionaPerfil.page */ "./src/app/pages/redireciona-perfil/redirecionaPerfil.page.ts");




var routes = [
    {
        path: '',
        component: _redirecionaPerfil_page__WEBPACK_IMPORTED_MODULE_3__["RedirecionaPerfilPage"]
    }
];
var RedirecionaPerfilRoutingModule = /** @class */ (function () {
    function RedirecionaPerfilRoutingModule() {
    }
    RedirecionaPerfilRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RedirecionaPerfilRoutingModule);
    return RedirecionaPerfilRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/redireciona-perfil/redirecionaPerfil.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/redireciona-perfil/redirecionaPerfil.module.ts ***!
  \**********************************************************************/
/*! exports provided: RedirecionaPerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirecionaPerfilPageModule", function() { return RedirecionaPerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _redirecionaPerfil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redirecionaPerfil-routing.module */ "./src/app/pages/redireciona-perfil/redirecionaPerfil-routing.module.ts");
/* harmony import */ var _redirecionaPerfil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redirecionaPerfil.page */ "./src/app/pages/redireciona-perfil/redirecionaPerfil.page.ts");







var RedirecionaPerfilPageModule = /** @class */ (function () {
    function RedirecionaPerfilPageModule() {
    }
    RedirecionaPerfilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _redirecionaPerfil_routing_module__WEBPACK_IMPORTED_MODULE_5__["RedirecionaPerfilRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_redirecionaPerfil_page__WEBPACK_IMPORTED_MODULE_6__["RedirecionaPerfilPage"]]
        })
    ], RedirecionaPerfilPageModule);
    return RedirecionaPerfilPageModule;
}());



/***/ }),

/***/ "./src/app/pages/redireciona-perfil/redirecionaPerfil.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/redireciona-perfil/redirecionaPerfil.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZGlyZWNpb25hLXBlcmZpbC9yZWRpcmVjaW9uYVBlcmZpbC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/redireciona-perfil/redirecionaPerfil.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/redireciona-perfil/redirecionaPerfil.page.ts ***!
  \********************************************************************/
/*! exports provided: RedirecionaPerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirecionaPerfilPage", function() { return RedirecionaPerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/Usuario.model */ "./src/app/model/Usuario.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/config/constantes/constantes */ "./src/app/config/constantes/constantes.ts");







var RedirecionaPerfilPage = /** @class */ (function () {
    function RedirecionaPerfilPage(navCtrl, storageService, router) {
        this.navCtrl = navCtrl;
        this.storageService = storageService;
        this.router = router;
    }
    RedirecionaPerfilPage.prototype.ngOnInit = function () {
        var usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
        usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
        usuario.operadora.codOperadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora')).codOperadora;
        if (JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:operadoraUsuario')).flagUtilizaSenhaAcompMedico == 1) {
            this.flgTrabalhaComSenha = 1;
        }
        if (usuario.configFormulario.codDominio == src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_6__["default"].PERFIL_DOMICILIAR) {
            this.navCtrl.navigateForward('/menu-principal/abrir-sem-senha-domiciliar');
        }
        else {
            if (this.flgTrabalhaComSenha == 1) {
                this.navCtrl.navigateForward('/menu-principal/buscar-senha');
            }
            else {
                this.navCtrl.navigateForward('/menu-principal/abrir-sem-senha');
            }
        }
        var rota = '/menu-principal';
        if (usuario.configFormulario.codDominio === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_6__["default"].PERFIL_DOMICILIAR) {
            rota = '/menu-principal/abrir-sem-senha-domiciliar';
        }
        else if (this.flgTrabalhaComSenha == 1) {
            rota = '/menu-principal/buscar-senha';
        }
        else {
            rota = '/menu-principal/abrir-sem-senha';
        }
        // Redireciona sem guardar na pilha (não será possível voltar para cá)
        this.router.navigateByUrl(rota, { replaceUrl: true });
    };
    RedirecionaPerfilPage.prototype.gravaDadosUsuarioDispositivo = function (usuario) {
        var _this = this;
        this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_6__["default"].STORAGE_USUARIO).then(function (items) {
            var usuarioOff;
            if (items != null) {
                usuarioOff = items.find(function (x) { return x.idUsuario === usuario.idUsuario; });
            }
            if (usuarioOff) {
                _this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_6__["default"].STORAGE_USUARIO, usuario, "idUsuario");
            }
            else {
                _this.storageService.adicionar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_6__["default"].STORAGE_USUARIO, usuario);
            }
        });
    };
    RedirecionaPerfilPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    RedirecionaPerfilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'redirecionaPerfil',
            template: __webpack_require__(/*! raw-loader!./redirecionaPerfil.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/redireciona-perfil/redirecionaPerfil.page.html"),
            styles: [__webpack_require__(/*! ./redirecionaPerfil.page.scss */ "./src/app/pages/redireciona-perfil/redirecionaPerfil.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RedirecionaPerfilPage);
    return RedirecionaPerfilPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-redireciona-perfil-redirecionaPerfil-module-es5.js.map