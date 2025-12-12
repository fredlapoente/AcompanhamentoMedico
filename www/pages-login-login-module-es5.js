(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar color=\"secondary\" class=\"ion-text-center\">\r\n    <ion-img class=\"login-image-header\" src=\"../assets/images/logo-acomp.png\"></ion-img>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-no-padding\">\r\n  <ion-grid class=\"height-100\">\r\n    <ion-row class=\"height-100 ion-align-items-end ion-justify-content-center\">\r\n      <ion-col size-sm=\"8\" size-md=\"8\" size-lg=\"6\" size-xl=\"6\" class=\"ion-no-padding ion-text-center ion-no-margin\">\r\n        <form [formGroup]=\"formLogin\" (submit)=\"login()\">\r\n          <ion-item>\r\n            <ion-icon slot=\"start\" name=\"person\" color=\"light\"></ion-icon>\r\n            <ion-label position=\"floating\">Usuário</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"usuario\" inputmode=\"text\" enterkeyhint=\"next\"\r\n              (keyup.enter)=\"toNextField(inputSenha)\">\r\n            </ion-input>\r\n          </ion-item>\r\n          <ion-item mode=\"md\" lines=\"none\" class=\"item-error\">\r\n            <ion-note color=\"warning\" class=\"ion-padding-horizontal\"\r\n              *ngIf=\"(usuario.dirty || usuario.touched) && usuario.hasError('required')\">Campo obrigatório\r\n              <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n            </ion-note>\r\n            <ion-note color=\"warning\" class=\"ion-padding-horizontal\"\r\n              *ngIf=\"(usuario.dirty || usuario.touched) && usuario.hasError('pattern')\">Campo levemente incorreto\r\n              <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n            </ion-note>\r\n          </ion-item>\r\n\r\n          <ion-item>\r\n            <ion-icon slot=\"start\" name=\"lock\" color=\"light\"></ion-icon>\r\n            <ion-label position=\"floating\">Senha</ion-label>\r\n            <ion-input type=\"{{passwordType}}\" formControlName=\"senha\" enterkeyhint=\"go\" (keyup.enter)=\"login()\"\r\n              #inputSenha></ion-input>\r\n            <ion-icon slot=\"end\" name=\"{{icone}}\" [ngStyle]=\"{'color': buttonColor}\"\r\n              (mousedown)=\"$event.preventDefault(); showHidePassword()\">\r\n            </ion-icon>\r\n          </ion-item>\r\n          <ion-item mode=\"md\" lines=\"none\" class=\"item-error\">\r\n            <ion-note color=\"warning\" class=\"ion-padding-horizontal\"\r\n              *ngIf=\"(senha.dirty || senha.touched) && senha.hasError('required')\">Campo obrigatório\r\n              <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n            </ion-note>\r\n            <ion-note color=\"warning\" class=\"ion-padding-horizontal\"\r\n              *ngIf=\"(senha.dirty || senha.touched) && senha.hasError('minlength')\">Min 4 caracteres\r\n              <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n            </ion-note>\r\n            <ion-note color=\"warning\" class=\"ion-padding-horizontal\"\r\n              *ngIf=\"(senha.dirty || senha.touched) && senha.hasError('maxlength')\">Max 4 caracteres\r\n              <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n            </ion-note>\r\n          </ion-item>\r\n\r\n          <ion-button class=\"ion-margin-top custom-button\" type=\"submit\" fill=\"clear\" expand=\"block\" \r\n            [disabled]=\"!formLogin.valid\">\r\n            ENTRAR\r\n          </ion-button>\r\n        </form>\r\n        <ion-row class=\"ion-text-center\">\r\n          <ion-col>\r\n            <ion-button class=\"no-weight trocar-operadora\" fill=\"clear\" (click)=\"toSelecionarOperadora()\">\r\n              <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\r\n              TROCAR OPERADORA\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-text-center\">\r\n          <ion-col>\r\n            <ion-button class=\"no-weight trocar-operadora\" fill=\"clear\" (click)=\"toRecuperarSenha()\">\r\n              <ion-icon slot=\"start\" name=\"key\"></ion-icon>\r\n              RECUPERAR SENHA\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-text-center\" *ngIf=\"urlImageOperadora\" no-border>\r\n  <ion-toolbar>\r\n    <ion-img class=\"login-image-footer\" src=\"{{urlImageOperadora}}\"></ion-img>\r\n  </ion-toolbar>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
var LoginPageRoutingModule = /** @class */ (function () {
    function LoginPageRoutingModule() {
    }
    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], LoginPageRoutingModule);
    return LoginPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll-content {\n  padding-bottom: 0 !important;\n}\n\nion-item {\n  --background: transparent;\n  --color: var(--ion-color-dark-contrast);\n  --border-color: #BFDFDF;\n  font-size: 16px;\n}\n\nion-content {\n  --background: var(--ion-color-primary);\n}\n\n.trocar-operadora {\n  color: #f4f5f8;\n}\n\n.margin-top-02em {\n  margin-top: 0.2em;\n}\n\n.icon-5em {\n  font-size: 4em;\n}\n\nh1 {\n  padding: 0;\n  margin: 0;\n}\n\n.login-image-header {\n  margin: 0.6em auto 0.2em;\n  width: 40vh;\n  max-width: 40vh;\n}\n\n.login-image-footer {\n  margin: 0 auto 0.2em;\n  width: 40vh;\n  max-width: 40vh;\n}\n\n.label-floating {\n  color: var(--ion-color-primary-contrast) !important;\n}\n\n@media (min-width: 1024px) and (max-width: 1366px) {\n  .login-image-header {\n    width: 30vh;\n    max-width: 30vh;\n  }\n}\n\n@media (max-width: 576px) {\n  .login-image-header {\n    width: 20vh;\n    max-width: 20vh;\n  }\n\n  .login-image-footer {\n    margin: 0 auto 0.2em;\n    width: 20vh;\n    max-width: 20vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXERlc2VuXFx3b3Jrc3BhY2VfYXBsaWNhdGl2b1xcQXBwQWNvbXBhbmhhbWVudG9NZWRpY28vc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQ0NKOztBRENBO0VBQ0kseUJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0VKOztBRENBO0VBQ0ksc0NBQUE7QUNFSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURDQTtFQUNJLGlCQUFBO0FDRUo7O0FEQ0E7RUFDSSxjQUFBO0FDRUo7O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQ0VKOztBRENBO0VBQ0ksd0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0VKOztBRENBO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0VKOztBRENBO0VBQ0ksbURBQUE7QUNFSjs7QURDQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGVBQUE7RUNFTjtBQUNGOztBRENBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsZUFBQTtFQ0NOOztFREVFO0lBQ0ksb0JBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAgIWltcG9ydGFudDtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QpO1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNCRkRGREY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG4udHJvY2FyLW9wZXJhZG9yYSB7XHJcbiAgICBjb2xvcjogI2Y0ZjVmODtcclxufVxyXG5cclxuLm1hcmdpbi10b3AtMDJlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAuMmVtO1xyXG59XHJcblxyXG4uaWNvbi01ZW0ge1xyXG4gICAgZm9udC1zaXplOiA0ZW07XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5sb2dpbi1pbWFnZS1oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAuNmVtIGF1dG8gLjJlbTtcclxuICAgIHdpZHRoOiA0MHZoO1xyXG4gICAgbWF4LXdpZHRoOiA0MHZoO1xyXG59XHJcblxyXG4ubG9naW4taW1hZ2UtZm9vdGVyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvIC4yZW07XHJcbiAgICB3aWR0aDogNDB2aDtcclxuICAgIG1heC13aWR0aDogNDB2aDtcclxufVxyXG5cclxuLmxhYmVsLWZsb2F0aW5nIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTM2NnB4KSB7XHJcbiAgICAubG9naW4taW1hZ2UtaGVhZGVyIHtcclxuICAgICAgICB3aWR0aDogMzB2aDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMwdmg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLmxvZ2luLWltYWdlLWhlYWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDIwdmg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMHZoO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dpbi1pbWFnZS1mb290ZXIge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvIC4yZW07XHJcbiAgICAgICAgd2lkdGg6IDIwdmg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMHZoO1xyXG4gICAgfVxyXG59XHJcbiAgICIsIi5zY3JvbGwtY29udGVudCB7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QpO1xuICAtLWJvcmRlci1jb2xvcjogI0JGREZERjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4udHJvY2FyLW9wZXJhZG9yYSB7XG4gIGNvbG9yOiAjZjRmNWY4O1xufVxuXG4ubWFyZ2luLXRvcC0wMmVtIHtcbiAgbWFyZ2luLXRvcDogMC4yZW07XG59XG5cbi5pY29uLTVlbSB7XG4gIGZvbnQtc2l6ZTogNGVtO1xufVxuXG5oMSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmxvZ2luLWltYWdlLWhlYWRlciB7XG4gIG1hcmdpbjogMC42ZW0gYXV0byAwLjJlbTtcbiAgd2lkdGg6IDQwdmg7XG4gIG1heC13aWR0aDogNDB2aDtcbn1cblxuLmxvZ2luLWltYWdlLWZvb3RlciB7XG4gIG1hcmdpbjogMCBhdXRvIDAuMmVtO1xuICB3aWR0aDogNDB2aDtcbiAgbWF4LXdpZHRoOiA0MHZoO1xufVxuXG4ubGFiZWwtZmxvYXRpbmcge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgLmxvZ2luLWltYWdlLWhlYWRlciB7XG4gICAgd2lkdGg6IDMwdmg7XG4gICAgbWF4LXdpZHRoOiAzMHZoO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcbiAgLmxvZ2luLWltYWdlLWhlYWRlciB7XG4gICAgd2lkdGg6IDIwdmg7XG4gICAgbWF4LXdpZHRoOiAyMHZoO1xuICB9XG5cbiAgLmxvZ2luLWltYWdlLWZvb3RlciB7XG4gICAgbWFyZ2luOiAwIGF1dG8gMC4yZW07XG4gICAgd2lkdGg6IDIwdmg7XG4gICAgbWF4LXdpZHRoOiAyMHZoO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/model/Usuario.model */ "./src/app/model/Usuario.model.ts");
/* harmony import */ var src_app_model_DispositivoMovel_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/DispositivoMovel.model */ "./src/app/model/DispositivoMovel.model.ts");
/* harmony import */ var src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/saudi-toast/saudi-toast.component */ "./src/app/components/saudi-toast/saudi-toast.component.ts");
/* harmony import */ var src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/saudi-loading/saudi-loading.component */ "./src/app/components/saudi-loading/saudi-loading.component.ts");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ "./node_modules/@ionic-native/unique-device-id/ngx/index.js");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/config/constantes/constantes */ "./src/app/config/constantes/constantes.ts");
/* harmony import */ var src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/model/Operadora.model */ "./src/app/model/Operadora.model.ts");
/* harmony import */ var src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/model/DominioCodigo.model */ "./src/app/model/DominioCodigo.model.ts");
/* harmony import */ var src_app_services_prestador_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/services/prestador.service */ "./src/app/services/prestador.service.ts");
/* harmony import */ var src_app_services_parametros_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/services/parametros.service */ "./src/app/services/parametros.service.ts");




















var LoginPage = /** @class */ (function () {
    function LoginPage(appComponent, formBuilder, loginService, navCtrl, router, toast, loading, keyboard, networkService, uniqueDeviceID, storageService, parametrosService, prestadorService) {
        this.appComponent = appComponent;
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.toast = toast;
        this.loading = loading;
        this.keyboard = keyboard;
        this.networkService = networkService;
        this.uniqueDeviceID = uniqueDeviceID;
        this.storageService = storageService;
        this.parametrosService = parametrosService;
        this.prestadorService = prestadorService;
        this.urlImageOperadora = null;
        this.passwordType = "password";
        this.icone = "eye-off";
        this.buttonColor = "#a8c4c4";
    }
    LoginPage.prototype.ngOnInit = function () {
        var logoOperadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora')).logoOperadora;
        this.urlImageOperadora = logoOperadora;
        this.criarFormulario();
        this.getUniqueDeviceID();
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        this.keyboard.disableScroll(true);
    };
    Object.defineProperty(LoginPage.prototype, "usuario", {
        get: function () {
            return this.formLogin.get('usuario');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "senha", {
        get: function () {
            return this.formLogin.get('senha');
        },
        enumerable: true,
        configurable: true
    });
    LoginPage.prototype.criarFormulario = function () {
        var login = localStorage.getItem('@appAcompanhamentoMedico:ultimoUsuarioLogado');
        if (!login) {
            login = '';
        }
        this.formLogin = this.formBuilder.group({
            usuario: [login, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ])],
            senha: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(28)
                ])]
        });
    };
    LoginPage.prototype.toNextField = function (inputSenha) {
        inputSenha.setFocus();
    };
    LoginPage.prototype.showHidePassword = function () {
        if (this.passwordType == "password") {
            this.passwordType = "text";
            this.icone = "eye";
            this.buttonColor = "#BFDFDF";
        }
        else {
            this.passwordType = "password";
            this.icone = "eye-off";
            this.buttonColor = "#a8c4c4";
        }
    };
    LoginPage.prototype.toSelecionarOperadora = function () {
        var usuario = localStorage.getItem('@appAcompanhamentoMedico:ultimoUsuarioLogado');
        if (usuario) {
            localStorage.removeItem('@appAcompanhamentoMedico:ultimoUsuarioLogado');
        }
        this.navCtrl.navigateBack('selecionar-operadora');
    };
    LoginPage.prototype.toRecuperarSenha = function () {
        this.router.navigateByUrl('/recuperar-senha', {
            state: {
                login: this.formLogin.value
            }
        });
    };
    LoginPage.prototype.login = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (this.formLogin.invalid) {
                    return [2 /*return*/];
                }
                this.networkService.CheckNetworkStatus();
                if (this.networkService.NetworkStatus.value) {
                    this.loginOnline();
                }
                else {
                    this.loginOffline();
                }
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.loginOnline = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var usuario, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_4__["Usuario"]();
                        return [4 /*yield*/, this.loading.presentLoading('Verificando usuário...')];
                    case 1:
                        loading = _a.sent();
                        usuario.login = this.formLogin.value.usuario;
                        usuario.senha = this.formLogin.value.senha;
                        usuario.operadora.codOperadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora')).codOperadora;
                        usuario.dispositivoMovel = new src_app_model_DispositivoMovel_model__WEBPACK_IMPORTED_MODULE_5__["DispositivoMovel"]();
                        usuario.dispositivoMovel.idDispositivoMovel = this.deviceId;
                        usuario.dispositivoMovel.flgAtivado = "1";
                        console.log("ID > " + this.deviceId);
                        this.loginService.loginAcompanhamentoMedico(usuario).subscribe(function (dadosUsuario) {
                            localStorage.setItem("@appAcompanhamentoMedico:dadosUsuario", JSON.stringify(dadosUsuario));
                            localStorage.setItem('@appAcompanhamentoMedico:operadoraUsuario', JSON.stringify(dadosUsuario.operadora));
                            _this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].STORAGE_USUARIO, dadosUsuario, "idUsuario");
                            _this.gravaDadosUsuarioDispositivo(dadosUsuario);
                            _this.gravaDadosItensPrincipaisDispositivo();
                            _this.gravaDadosTipoAcomodacaoDispositivo();
                            _this.gravaDadosTipoInternacaoDispositivo();
                            _this.gravaDadosCaraterAtendimentoDispositivo();
                            _this.gravaDadosOrigemInternacaoDispositivo();
                            _this.gravaDadosMotivoAltaDispositivo();
                            _this.gravaDadosPosologiaDispositivo();
                            _this.gravaDadosUfDispositivo();
                            _this.appComponent.initializeApp();
                            _this.navCtrl.navigateForward('/menu-principal');
                            loading.dismiss();
                        }, function (error) {
                            _this.toast.errorToast(error);
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.loginOffline = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var usuario, listaUsuarios, loading, usuarioOff, mensagem;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usuario = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_4__["Usuario"]();
                        listaUsuarios = [];
                        return [4 /*yield*/, this.loading.presentLoading('Verificando usuário...')];
                    case 1:
                        loading = _a.sent();
                        usuario.login = this.formLogin.value.usuario;
                        usuario.senha = this.formLogin.value.senha;
                        usuario.operadora.codOperadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora')).codOperadora;
                        return [4 /*yield*/, this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].STORAGE_USUARIO).then(function (items) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    if (items != null) {
                                        listaUsuarios = items;
                                        usuarioOff = listaUsuarios.find(function (x) { return x.login === usuario.login && x.operadora.codOperadora === usuario.operadora.codOperadora; });
                                        if (usuarioOff) {
                                            usuarioOff = listaUsuarios.find(function (x) { return x.login === usuario.login && x.senha === usuario.senha && x.operadora.codOperadora === usuario.operadora.codOperadora; });
                                            if (usuarioOff === undefined) {
                                                mensagem = "Senha inválida.";
                                            }
                                        }
                                        else {
                                            mensagem = "Usuario inválido.";
                                        }
                                    }
                                    else {
                                        mensagem = "Novo Usuário apenas online. Verifique sua conexão com a internet.";
                                    }
                                    if (usuarioOff) {
                                        localStorage.setItem("@appAcompanhamentoMedico:dadosUsuario", JSON.stringify(usuarioOff));
                                        localStorage.setItem('@appAcompanhamentoMedico:operadoraUsuario', JSON.stringify(usuarioOff.operadora));
                                        this.appComponent.initializeApp();
                                        this.navCtrl.navigateForward('/menu-principal');
                                        loading.dismiss();
                                    }
                                    else {
                                        this.toast.errorToast(mensagem);
                                        loading.dismiss();
                                    }
                                    return [2 /*return*/];
                                });
                            }); }, function (error) {
                                _this.toast.errorToast(error);
                                loading.dismiss();
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.getUniqueDeviceID = function () {
        var _this = this;
        console.log("getUniqueDeviceID");
        this.uniqueDeviceID.get()
            .then(function (uuid) {
            console.log(uuid);
            _this.deviceId = uuid;
        })
            .catch(function (error) {
            console.log(error);
            _this.deviceId = "Error! > " + error;
        });
    };
    LoginPage.prototype.gravaDadosUsuarioDispositivo = function (usuario) {
        var _this = this;
        this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].STORAGE_USUARIO).then(function (items) {
            var usuarioOff;
            if (items != null) {
                usuarioOff = items.find(function (x) { return x.idUsuario === usuario.idUsuario; });
            }
            if (usuarioOff) {
                _this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].STORAGE_USUARIO, usuario, "idUsuario");
            }
            else {
                _this.storageService.adicionar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].STORAGE_USUARIO, usuario);
            }
        });
    };
    LoginPage.prototype.gravaDadosItensPrincipaisDispositivo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].STORAGE_ITENS_PRINCIPAIS).then(function (items) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var dadosOperadora;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(items == null)) return [3 /*break*/, 2];
                                        dadosOperadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
                                        return [4 /*yield*/, this.parametrosService.getListaItemPrincipal(dadosOperadora.codOperadora).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                var _i, data_1, item;
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            _i = 0, data_1 = data;
                                                            _a.label = 1;
                                                        case 1:
                                                            if (!(_i < data_1.length)) return [3 /*break*/, 4];
                                                            item = data_1[_i];
                                                            return [4 /*yield*/, this.storageService.adicionar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].STORAGE_ITENS_PRINCIPAIS, item)];
                                                        case 2:
                                                            _a.sent();
                                                            _a.label = 3;
                                                        case 3:
                                                            _i++;
                                                            return [3 /*break*/, 1];
                                                        case 4: return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.gravaDadosTipoAcomodacaoDispositivo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].STORAGE_TIPO_ACOMODACAO).then(function (items) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var dominioCodigo, operadora;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(items == null)) return [3 /*break*/, 2];
                                        dominioCodigo = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_17__["DominioCodigo"];
                                        operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_16__["Operadora"];
                                        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
                                        dominioCodigo.codTabela = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].TABELA_TIPO_ACOMODACAO;
                                        dominioCodigo.operadora = operadora;
                                        return [4 /*yield*/, this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                var _i, data_2, motivo;
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            _i = 0, data_2 = data;
                                                            _a.label = 1;
                                                        case 1:
                                                            if (!(_i < data_2.length)) return [3 /*break*/, 4];
                                                            motivo = data_2[_i];
                                                            return [4 /*yield*/, this.storageService.adicionar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].STORAGE_TIPO_ACOMODACAO, motivo)];
                                                        case 2:
                                                            _a.sent();
                                                            _a.label = 3;
                                                        case 3:
                                                            _i++;
                                                            return [3 /*break*/, 1];
                                                        case 4: return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.gravaDadosTipoInternacaoDispositivo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].STORAGE_TIPO_INTERNACAO).then(function (items) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var dominioCodigo, operadora;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(items == null)) return [3 /*break*/, 2];
                                        dominioCodigo = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_17__["DominioCodigo"];
                                        operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_16__["Operadora"];
                                        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
                                        dominioCodigo.codTabela = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].TABELA_TIPO_INTERNACAO;
                                        dominioCodigo.operadora = operadora;
                                        return [4 /*yield*/, this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                var _i, data_3, motivo;
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            _i = 0, data_3 = data;
                                                            _a.label = 1;
                                                        case 1:
                                                            if (!(_i < data_3.length)) return [3 /*break*/, 4];
                                                            motivo = data_3[_i];
                                                            return [4 /*yield*/, this.storageService.adicionar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].STORAGE_TIPO_INTERNACAO, motivo)];
                                                        case 2:
                                                            _a.sent();
                                                            _a.label = 3;
                                                        case 3:
                                                            _i++;
                                                            return [3 /*break*/, 1];
                                                        case 4: return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.gravaDadosCaraterAtendimentoDispositivo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].STORAGE_CARATER_ATENDIMENTO).then(function (items) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var dominioCodigo, operadora;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(items == null)) return [3 /*break*/, 2];
                                        dominioCodigo = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_17__["DominioCodigo"];
                                        operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_16__["Operadora"];
                                        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
                                        dominioCodigo.codTabela = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].TABELA_CARATER_ATENDIMENTO;
                                        dominioCodigo.operadora = operadora;
                                        return [4 /*yield*/, this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                var _i, data_4, motivo;
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            _i = 0, data_4 = data;
                                                            _a.label = 1;
                                                        case 1:
                                                            if (!(_i < data_4.length)) return [3 /*break*/, 4];
                                                            motivo = data_4[_i];
                                                            return [4 /*yield*/, this.storageService.adicionar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].STORAGE_CARATER_ATENDIMENTO, motivo)];
                                                        case 2:
                                                            _a.sent();
                                                            _a.label = 3;
                                                        case 3:
                                                            _i++;
                                                            return [3 /*break*/, 1];
                                                        case 4: return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.gravaDadosOrigemInternacaoDispositivo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].STORAGE_ORIGEM_INTERNACAO).then(function (items) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var dominioCodigo, operadora;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(items == null)) return [3 /*break*/, 2];
                                        dominioCodigo = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_17__["DominioCodigo"];
                                        operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_16__["Operadora"];
                                        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
                                        dominioCodigo.codTabela = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].TABELA_ORIGEM_INTERNACAO;
                                        dominioCodigo.operadora = operadora;
                                        return [4 /*yield*/, this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                var _i, data_5, motivo;
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            _i = 0, data_5 = data;
                                                            _a.label = 1;
                                                        case 1:
                                                            if (!(_i < data_5.length)) return [3 /*break*/, 4];
                                                            motivo = data_5[_i];
                                                            return [4 /*yield*/, this.storageService.adicionar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].STORAGE_ORIGEM_INTERNACAO, motivo)];
                                                        case 2:
                                                            _a.sent();
                                                            _a.label = 3;
                                                        case 3:
                                                            _i++;
                                                            return [3 /*break*/, 1];
                                                        case 4: return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.gravaDadosMotivoAltaDispositivo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].STORAGE_MOTIVO_SAIDA).then(function (items) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var dominioCodigo, operadora;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(items == null)) return [3 /*break*/, 2];
                                        dominioCodigo = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_17__["DominioCodigo"];
                                        operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_16__["Operadora"];
                                        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
                                        dominioCodigo.codTabela = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].TABELA_MOTIVO_ALTA;
                                        dominioCodigo.operadora = operadora;
                                        return [4 /*yield*/, this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                var _i, data_6, motivo;
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            _i = 0, data_6 = data;
                                                            _a.label = 1;
                                                        case 1:
                                                            if (!(_i < data_6.length)) return [3 /*break*/, 4];
                                                            motivo = data_6[_i];
                                                            return [4 /*yield*/, this.storageService.adicionar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].STORAGE_MOTIVO_SAIDA, motivo)];
                                                        case 2:
                                                            _a.sent();
                                                            _a.label = 3;
                                                        case 3:
                                                            _i++;
                                                            return [3 /*break*/, 1];
                                                        case 4: return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.gravaDadosUfDispositivo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].STORAGE_UF).then(function (items) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var operadora;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(items == null)) return [3 /*break*/, 2];
                                        operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_16__["Operadora"];
                                        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
                                        return [4 /*yield*/, this.prestadorService.getUFPrestadores(operadora).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                var _i, data_7, estado;
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            _i = 0, data_7 = data;
                                                            _a.label = 1;
                                                        case 1:
                                                            if (!(_i < data_7.length)) return [3 /*break*/, 4];
                                                            estado = data_7[_i];
                                                            return [4 /*yield*/, this.storageService.adicionar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].STORAGE_UF, estado)];
                                                        case 2:
                                                            _a.sent();
                                                            _a.label = 3;
                                                        case 3:
                                                            _i++;
                                                            return [3 /*break*/, 1];
                                                        case 4: return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.gravaDadosPosologiaDispositivo = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].STORAGE_POSOLOGIA).then(function (items) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var dominioCodigo, operadora;
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(items == null)) return [3 /*break*/, 2];
                                        dominioCodigo = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_17__["DominioCodigo"];
                                        operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_16__["Operadora"];
                                        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
                                        dominioCodigo.codTabela = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].TABELA_POSOLOGIA;
                                        dominioCodigo.operadora = operadora;
                                        return [4 /*yield*/, this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                var _i, data_8, posologia;
                                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            _i = 0, data_8 = data;
                                                            _a.label = 1;
                                                        case 1:
                                                            if (!(_i < data_8.length)) return [3 /*break*/, 4];
                                                            posologia = data_8[_i];
                                                            return [4 /*yield*/, this.storageService.adicionar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_15__["default"].STORAGE_POSOLOGIA, posologia)];
                                                        case 2:
                                                            _a.sent();
                                                            _a.label = 3;
                                                        case 3:
                                                            _i++;
                                                            return [3 /*break*/, 1];
                                                        case 4: return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.ctorParameters = function () { return [
        { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
        { type: src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_6__["SaudiToastComponent"] },
        { type: src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_7__["SaudiLoadingComponent"] },
        { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_11__["Keyboard"] },
        { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_12__["NetworkService"] },
        { type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_13__["UniqueDeviceID"] },
        { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_14__["StorageService"] },
        { type: src_app_services_parametros_service__WEBPACK_IMPORTED_MODULE_19__["ParametrosService"] },
        { type: src_app_services_prestador_service__WEBPACK_IMPORTED_MODULE_18__["PrestadorService"] }
    ]; };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"],
            src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_6__["SaudiToastComponent"],
            src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_7__["SaudiLoadingComponent"],
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_11__["Keyboard"],
            src_app_services_network_service__WEBPACK_IMPORTED_MODULE_12__["NetworkService"],
            _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_13__["UniqueDeviceID"],
            src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_14__["StorageService"],
            src_app_services_parametros_service__WEBPACK_IMPORTED_MODULE_19__["ParametrosService"],
            src_app_services_prestador_service__WEBPACK_IMPORTED_MODULE_18__["PrestadorService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map