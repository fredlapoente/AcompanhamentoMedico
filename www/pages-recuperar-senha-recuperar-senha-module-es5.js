(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recuperar-senha-recuperar-senha-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/recuperar-senha/recuperar-senha.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/recuperar-senha/recuperar-senha.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar color=\"secondary\" class=\"ion-text-center ion-padding header-toolbar\">\r\n    <ion-img class=\"login-image-header\" src=\"../assets/images/logo-acomp.png\"></ion-img>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-no-padding\" scrollY=\"false\">\r\n  <ion-grid class=\"height-100\" fixed>\r\n    <ion-row class=\"height-100 ion-align-items-center ion-justify-content-center\">\r\n      <ion-col size-sm=\"8\" size-md=\"8\" size-lg=\"6\" size-xl=\"6\" class=\"ion-no-padding ion-text-center ion-no-margin\">\r\n        <form [formGroup]=\"formRecSenha\" (submit)=\"recuperarSenha()\" (keyup.enter)=\"recuperarSenha()\">\r\n          <ion-item>\r\n            <ion-icon slot=\"start\" name=\"person\" color=\"light\"></ion-icon>\r\n            <ion-label position=\"floating\">Usuário</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"usuario\" inputmode=\"text\" enterkeyhint=\"go\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item mode=\"md\" lines=\"none\" class=\"item-error\">\r\n            <ion-note color=\"warning\" class=\"ion-padding-horizontal\" *ngIf=\"(usuario.dirty || usuario.touched) && usuario.hasError('required')\">Campo obrigatório\r\n              <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n            </ion-note>\r\n          </ion-item>\r\n          <ion-button class=\"ion-margin-top custom-button\" type=\"submit\" fill=\"clear\" expand=\"block\" size=\"large\"\r\n            [disabled]=\"!formRecSenha.valid\">\r\n            ENVIAR\r\n          </ion-button>\r\n        </form>\r\n        <ion-row class=\"ion-text-center\">\r\n          <ion-col>\r\n            <ion-button class=\"no-weight\" fill=\"clear\" color=\"tertiary\" [routerLink]=\"['/login']\">\r\n              <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\r\n              VOLTAR\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-text-center\" *ngIf=\"urlImageOperadora\" no-border>\r\n  <ion-toolbar>\r\n    <ion-row class=\"ion-margin-bottom\">\r\n      <ion-col>\r\n        <ion-img class=\"login-image-footer\" src=\"{{urlImageOperadora}}\"></ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/recuperar-senha/recuperar-senha-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/recuperar-senha/recuperar-senha-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: RecuperarSenhaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarSenhaPageRoutingModule", function() { return RecuperarSenhaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recuperar_senha_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recuperar-senha.page */ "./src/app/pages/recuperar-senha/recuperar-senha.page.ts");




var routes = [
    {
        path: '',
        component: _recuperar_senha_page__WEBPACK_IMPORTED_MODULE_3__["RecuperarSenhaPage"]
    }
];
var RecuperarSenhaPageRoutingModule = /** @class */ (function () {
    function RecuperarSenhaPageRoutingModule() {
    }
    RecuperarSenhaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], RecuperarSenhaPageRoutingModule);
    return RecuperarSenhaPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/recuperar-senha/recuperar-senha.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/recuperar-senha/recuperar-senha.module.ts ***!
  \*****************************************************************/
/*! exports provided: RecuperarSenhaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarSenhaPageModule", function() { return RecuperarSenhaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _recuperar_senha_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recuperar-senha-routing.module */ "./src/app/pages/recuperar-senha/recuperar-senha-routing.module.ts");
/* harmony import */ var _recuperar_senha_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recuperar-senha.page */ "./src/app/pages/recuperar-senha/recuperar-senha.page.ts");







var RecuperarSenhaPageModule = /** @class */ (function () {
    function RecuperarSenhaPageModule() {
    }
    RecuperarSenhaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _recuperar_senha_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecuperarSenhaPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_recuperar_senha_page__WEBPACK_IMPORTED_MODULE_6__["RecuperarSenhaPage"]]
        })
    ], RecuperarSenhaPageModule);
    return RecuperarSenhaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/recuperar-senha/recuperar-senha.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/recuperar-senha/recuperar-senha.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --background: transparent;\n  --color: var(--ion-color-dark-contrast);\n  --border-color: #BFDFDF;\n  font-size: 16px;\n}\n\nion-content {\n  --background: #326565;\n}\n\n.margin-top-02em {\n  margin-top: 0.2em;\n}\n\n.icon-5em {\n  font-size: 4em;\n}\n\nh1 {\n  padding: 0;\n  margin: 0;\n}\n\n.login-image-header {\n  margin: 0.6em auto 0.2em;\n  width: 40vh;\n  max-width: 40vh;\n}\n\n.login-image-footer {\n  margin: 0 auto 0.2em;\n  width: 20vh;\n  max-width: 20vh;\n}\n\n.label-floating {\n  color: var(--ion-color-primary-contrast) !important;\n}\n\n@media (min-width: 1024px) and (max-width: 1366px) {\n  .login-image-header {\n    width: 30vh;\n    max-width: 30vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVjdXBlcmFyLXNlbmhhL0M6XFxEZXNlblxcd29ya3NwYWNlX2FwbGljYXRpdm9cXEFwcEFjb21wYW5oYW1lbnRvTWVkaWNvL3NyY1xcYXBwXFxwYWdlc1xccmVjdXBlcmFyLXNlbmhhXFxyZWN1cGVyYXItc2VuaGEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWN1cGVyYXItc2VuaGEvcmVjdXBlcmFyLXNlbmhhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLG1EQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNJLFdBQUE7SUFDQSxlQUFBO0VDQ0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY3VwZXJhci1zZW5oYS9yZWN1cGVyYXItc2VuaGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QpO1xyXG4gIC0tYm9yZGVyLWNvbG9yOiAjQkZERkRGO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogICMzMjY1NjU7XHJcbn1cclxuXHJcbi5tYXJnaW4tdG9wLTAyZW0ge1xyXG4gIG1hcmdpbi10b3A6IC4yZW07XHJcbn1cclxuXHJcbi5pY29uLTVlbSB7XHJcbiAgZm9udC1zaXplOiA0ZW07XHJcbn1cclxuXHJcbmgxIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmxvZ2luLWltYWdlLWhlYWRlciB7XHJcbiAgbWFyZ2luOiAuNmVtIGF1dG8gLjJlbTtcclxuICB3aWR0aDogNDB2aDtcclxuICBtYXgtd2lkdGg6IDQwdmg7XHJcbn1cclxuXHJcbi5sb2dpbi1pbWFnZS1mb290ZXIge1xyXG4gIG1hcmdpbjogMCBhdXRvIC4yZW07XHJcbiAgd2lkdGg6IDIwdmg7XHJcbiAgbWF4LXdpZHRoOiAyMHZoO1xyXG59XHJcblxyXG4ubGFiZWwtZmxvYXRpbmcge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgYW5kIChtYXgtd2lkdGg6IDEzNjZweCkge1xyXG4gIC5sb2dpbi1pbWFnZS1oZWFkZXIge1xyXG4gICAgICB3aWR0aDogMzB2aDtcclxuICAgICAgbWF4LXdpZHRoOiAzMHZoO1xyXG4gIH1cclxufSIsImlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QpO1xuICAtLWJvcmRlci1jb2xvcjogI0JGREZERjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogIzMyNjU2NTtcbn1cblxuLm1hcmdpbi10b3AtMDJlbSB7XG4gIG1hcmdpbi10b3A6IDAuMmVtO1xufVxuXG4uaWNvbi01ZW0ge1xuICBmb250LXNpemU6IDRlbTtcbn1cblxuaDEge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5sb2dpbi1pbWFnZS1oZWFkZXIge1xuICBtYXJnaW46IDAuNmVtIGF1dG8gMC4yZW07XG4gIHdpZHRoOiA0MHZoO1xuICBtYXgtd2lkdGg6IDQwdmg7XG59XG5cbi5sb2dpbi1pbWFnZS1mb290ZXIge1xuICBtYXJnaW46IDAgYXV0byAwLjJlbTtcbiAgd2lkdGg6IDIwdmg7XG4gIG1heC13aWR0aDogMjB2aDtcbn1cblxuLmxhYmVsLWZsb2F0aW5nIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTM2NnB4KSB7XG4gIC5sb2dpbi1pbWFnZS1oZWFkZXIge1xuICAgIHdpZHRoOiAzMHZoO1xuICAgIG1heC13aWR0aDogMzB2aDtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/recuperar-senha/recuperar-senha.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/recuperar-senha/recuperar-senha.page.ts ***!
  \***************************************************************/
/*! exports provided: RecuperarSenhaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarSenhaPage", function() { return RecuperarSenhaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/saudi-toast/saudi-toast.component */ "./src/app/components/saudi-toast/saudi-toast.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/saudi-loading/saudi-loading.component */ "./src/app/components/saudi-loading/saudi-loading.component.ts");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var RecuperarSenhaPage = /** @class */ (function () {
    function RecuperarSenhaPage(menu, loginService, toast, loading, formBuilder, navCtrl, router) {
        this.menu = menu;
        this.loginService = loginService;
        this.toast = toast;
        this.loading = loading;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.router = router;
        this.urlImageOperadora = null;
    }
    RecuperarSenhaPage.prototype.ngOnInit = function () {
        var logoOperadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora')).logoOperadora;
        this.urlImageOperadora = logoOperadora;
        this.desabiliarMenu();
        this.getLogin();
        this.criarFormulario();
    };
    RecuperarSenhaPage.prototype.getLogin = function () {
        var getNav = this.router.getCurrentNavigation();
        if (getNav.extras.state) {
            var params = getNav.extras.state;
            this.login = params.login.usuario;
        }
        else {
            this.login = '';
        }
    };
    RecuperarSenhaPage.prototype.desabiliarMenu = function () {
        this.menu.enable(false);
        this.menu.swipeGesture(false);
    };
    Object.defineProperty(RecuperarSenhaPage.prototype, "usuario", {
        get: function () {
            return this.formRecSenha.get('usuario');
        },
        enumerable: true,
        configurable: true
    });
    RecuperarSenhaPage.prototype.criarFormulario = function () {
        this.formRecSenha = this.formBuilder.group({
            usuario: [this.login, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ])]
        });
    };
    RecuperarSenhaPage.prototype.recuperarSenha = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading, loginUsuario;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.formRecSenha.invalid) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.loading.presentLoading('Aguarde...')];
                    case 1:
                        loading = _a.sent();
                        loginUsuario = this.formRecSenha.value.usuario;
                        this.loginService.recuperarSenha(loginUsuario).subscribe(function (usuario) {
                            var mensagem = "E-mail enviado com sucesso. Verifique o e-mail: " + usuario.email + ".";
                            loading.dismiss();
                            _this.toast.successToast(mensagem, 60000);
                            _this.navCtrl.navigateBack('/login');
                        }, function (error) {
                            console.log(error);
                            loading.dismiss();
                            _this.toast.errorToast(error);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    RecuperarSenhaPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
        { type: src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_3__["SaudiToastComponent"] },
        { type: src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_5__["SaudiLoadingComponent"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    RecuperarSenhaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recuperar-senha',
            template: __webpack_require__(/*! raw-loader!./recuperar-senha.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/recuperar-senha/recuperar-senha.page.html"),
            styles: [__webpack_require__(/*! ./recuperar-senha.page.scss */ "./src/app/pages/recuperar-senha/recuperar-senha.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"],
            src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_3__["SaudiToastComponent"],
            src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_5__["SaudiLoadingComponent"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], RecuperarSenhaPage);
    return RecuperarSenhaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-recuperar-senha-recuperar-senha-module-es5.js.map