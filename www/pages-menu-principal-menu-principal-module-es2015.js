(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-principal-menu-principal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/menu-principal/menu-principal.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/menu-principal/menu-principal.page.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button menuId=\"main-content\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ion-padding\">{{titulo}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"card-background-page\">\r\n  <ion-grid ion-no-padding class=\"ion-text-uppercase\" fixed>\r\n    <ion-row class=\"ion-align-items-stretch\">\r\n      <ion-col size=\"12\">\r\n        <ion-card *ngIf=\"flgTrabalhaComSenha == 1\" class=\"ion-text-left ion-padding\" [routerLink]=\"['./buscar-senha']\" routerDirection=\"forward\">\r\n          <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col size-sm=\"8\" size-md=\"6\" size-lg=\"6\" size-xl=\"4\">\r\n              <ion-card-title>Abrir</ion-card-title>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-icon name=\"open\" class=\"ion-float-right icon\"></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"flgTrabalhaSemSenha == 1\" class=\"ion-text-left ion-padding\" [routerLink]=\"['./abrir-sem-senha']\" routerDirection=\"forward\">\r\n          <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col size-sm=\"8\" size-md=\"6\" size-lg=\"6\" size-xl=\"4\">\r\n              <ion-card-title>Abrir</ion-card-title>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-icon name=\"open\" class=\"ion-float-right icon\"></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n        <ion-card *ngIf=\"flgTrabalhaComSenhaDom == 1\" class=\"ion-text-left ion-padding\" [routerLink]=\"['./abrir-sem-senha-domiciliar']\" routerDirection=\"forward\">\r\n          <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col size-sm=\"8\" size-md=\"6\" size-lg=\"6\" size-xl=\"4\">\r\n              <ion-card-title>Abrir</ion-card-title>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-icon name=\"open\" class=\"ion-float-right icon\"></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-card class=\"ion-text-left ion-padding\" [routerLink]=\"['./acompanhar']\" routerDirection=\"forward\">\r\n          <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col size-sm=\"8\" size-md=\"6\" size-lg=\"6\" size-xl=\"4\">\r\n              <ion-card-title>Acompanhar</ion-card-title>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-icon name=\"create\" class=\"ion-float-right icon\"></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-card class=\"ion-text-left ion-padding\" *ngIf=\"flgTrabalhaComSenha || flgTrabalhaComSenhaDom\" [routerLink]=\"['./importar-com-senha']\" routerDirection=\"forward\">\r\n          <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col size-sm=\"8\" size-md=\"6\" size-lg=\"6\" size-xl=\"4\">\r\n              <ion-card-title>Importar</ion-card-title>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-icon name=\"download\" class=\"ion-float-right icon\"></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n        <ion-card class=\"ion-text-left ion-padding\" *ngIf=\"flgTrabalhaSemSenha\" [routerLink]=\"['./importar-sem-senha']\" routerDirection=\"forward\">\r\n          <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col size-sm=\"8\" size-md=\"6\" size-lg=\"6\" size-xl=\"4\">\r\n              <ion-card-title>Importar</ion-card-title>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-icon name=\"download\" class=\"ion-float-right icon\"></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>        \r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-card class=\"ion-text-left ion-padding\" [routerLink]=\"['./restaurar']\"\r\n          routerDirection=\"forward\">\r\n          <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col size-sm=\"8\" size-md=\"6\" size-lg=\"6\" size-xl=\"4\">\r\n              <ion-card-title>Restaurar</ion-card-title>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-icon name=\"sync\" class=\"ion-float-right icon\"></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-card class=\"ion-text-left ion-padding\" [routerLink]=\"['./sincronizar']\"\r\n          routerDirection=\"forward\">\r\n          <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col size-sm=\"8\" size-md=\"6\" size-lg=\"6\" size-xl=\"4\">\r\n              <ion-card-title>Sincronizar</ion-card-title>\r\n            </ion-col>\r\n            <ion-col>\r\n              <ion-icon name=\"cloud\" class=\"ion-float-right icon\"></ion-icon>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/menu-principal/menu-principal-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/menu-principal/menu-principal-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: MenuPrincipalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPrincipalPageRoutingModule", function() { return MenuPrincipalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menu_principal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-principal.page */ "./src/app/pages/menu-principal/menu-principal.page.ts");




const routes = [
    {
        path: '',
        component: _menu_principal_page__WEBPACK_IMPORTED_MODULE_3__["MenuPrincipalPage"]
    }
];
let MenuPrincipalPageRoutingModule = class MenuPrincipalPageRoutingModule {
};
MenuPrincipalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuPrincipalPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/menu-principal/menu-principal.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/menu-principal/menu-principal.module.ts ***!
  \***************************************************************/
/*! exports provided: MenuPrincipalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPrincipalPageModule", function() { return MenuPrincipalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_principal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-principal-routing.module */ "./src/app/pages/menu-principal/menu-principal-routing.module.ts");
/* harmony import */ var _menu_principal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-principal.page */ "./src/app/pages/menu-principal/menu-principal.page.ts");







let MenuPrincipalPageModule = class MenuPrincipalPageModule {
};
MenuPrincipalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_principal_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPrincipalPageRoutingModule"]
        ],
        declarations: [_menu_principal_page__WEBPACK_IMPORTED_MODULE_6__["MenuPrincipalPage"]]
    })
], MenuPrincipalPageModule);



/***/ }),

/***/ "./src/app/pages/menu-principal/menu-principal.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/menu-principal/menu-principal.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center;\n}\n\n.card-background-page ion-card-title {\n  --color: var(--ion-color-primary);\n  margin-bottom: 0.4em;\n  font-size: 20px;\n}\n\n.card-background-page ion-card-subtitle {\n  --color: var(--ion-color-primary);\n}\n\n.card-background-page ion-icon {\n  font-size: 50px;\n}\n\n.card-background-page .padding-top-80 {\n  padding-top: 80px;\n}\n\n.card-background-page .margin-top-40 {\n  margin-top: 40px;\n}\n\n.card-background-page .scroll-content {\n  overflow-y: auto;\n}\n\n.card-background-page ion-card {\n  padding: 10px;\n  margin: 2px;\n}\n\n.image-footer {\n  width: 50%;\n  height: 320%;\n}\n\nion-button ion-badge {\n  position: absolute;\n  top: -0.2rem;\n  right: -0.2rem;\n  opacity: 0.9;\n}\n\nion-button ion-badge ~ ion-icon {\n  margin-right: 1.2rem;\n}\n\n@media (max-width: 320px), (max-height: 320px) {\n  ion-card-title {\n    font-size: 1.1rem !important;\n  }\n\n  ion-icon {\n    font-size: 40px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudS1wcmluY2lwYWwvQzpcXERlc2VuXFx3b3Jrc3BhY2VfYXBsaWNhdGl2b1xcQXBwQWNvbXBhbmhhbWVudG9NZWRpY28vc3JjXFxhcHBcXHBhZ2VzXFxtZW51LXByaW5jaXBhbFxcbWVudS1wcmluY2lwYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tZW51LXByaW5jaXBhbC9tZW51LXByaW5jaXBhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FESUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUU7RUFDSSxpQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ0ZOOztBREtFO0VBQ0UsaUNBQUE7QUNISjs7QURNRTtFQUNFLGVBQUE7QUNKSjs7QURPRTtFQUNFLGlCQUFBO0FDTEo7O0FET0U7RUFDRSxnQkFBQTtBQ0xKOztBRFFFO0VBQ0UsZ0JBQUE7QUNOSjs7QURTRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0FDUEo7O0FEWUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ1RGOztBRGFFO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNWTjs7QURZTTtFQUNJLG9CQUFBO0FDVlY7O0FEZ0JBO0VBQ0M7SUFDRyw0QkFBQTtFQ2JGOztFRGdCQTtJQUNFLDBCQUFBO0VDYkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUtcHJpbmNpcGFsL21lbnUtcHJpbmNpcGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XHJcbiAgbWF4LWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2Uge1xyXG5cclxuICBpb24tY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogLjRlbTtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICB9XHJcblxyXG4gIC5wYWRkaW5nLXRvcC04MHtcclxuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gIH1cclxuICAubWFyZ2luLXRvcC00MHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuc2Nyb2xsLWNvbnRlbnQge1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuICBpb24tY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmltYWdlLWZvb3RlcntcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMzIwJTtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgaW9uLWJhZGdlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IC0wLjJyZW07XHJcbiAgICAgIHJpZ2h0OiAtMC4ycmVtO1xyXG4gICAgICBvcGFjaXR5OiAwLjk7XHJcblxyXG4gICAgICAmIH4gaW9uLWljb24ge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjJyZW07XHJcbiAgICAgIH1cclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCksIChtYXgtaGVpZ2h0OiAzMjBweCl7XHJcbiBpb24tY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59IiwiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIGlvbi1jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgaW9uLWNhcmQtdGl0bGUge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDAuNGVtO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgaW9uLWNhcmQtc3VidGl0bGUge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgaW9uLWljb24ge1xuICBmb250LXNpemU6IDUwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLnBhZGRpbmctdG9wLTgwIHtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgLm1hcmdpbi10b3AtNDAge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlIC5zY3JvbGwtY29udGVudCB7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UgaW9uLWNhcmQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDJweDtcbn1cblxuLmltYWdlLWZvb3RlciB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMzIwJTtcbn1cblxuaW9uLWJ1dHRvbiBpb24tYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTAuMnJlbTtcbiAgcmlnaHQ6IC0wLjJyZW07XG4gIG9wYWNpdHk6IDAuOTtcbn1cbmlvbi1idXR0b24gaW9uLWJhZGdlIH4gaW9uLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSwgKG1heC1oZWlnaHQ6IDMyMHB4KSB7XG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogNDBweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/menu-principal/menu-principal.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/menu-principal/menu-principal.page.ts ***!
  \*************************************************************/
/*! exports provided: MenuPrincipalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPrincipalPage", function() { return MenuPrincipalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/Usuario.model */ "./src/app/model/Usuario.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/saudi-loading/saudi-loading.component */ "./src/app/components/saudi-loading/saudi-loading.component.ts");
/* harmony import */ var src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/saudi-toast/saudi-toast.component */ "./src/app/components/saudi-toast/saudi-toast.component.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/config/constantes/constantes */ "./src/app/config/constantes/constantes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_app_util_verifica_versao_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/util/verifica-versao-util */ "./src/app/util/verifica-versao-util.ts");











let MenuPrincipalPage = class MenuPrincipalPage {
    constructor(menu, loading, atrCtrl, router, toast, storageService, verificaVersao) {
        this.menu = menu;
        this.loading = loading;
        this.atrCtrl = atrCtrl;
        this.router = router;
        this.toast = toast;
        this.storageService = storageService;
        this.verificaVersao = verificaVersao;
        this.loginSuccess = false;
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_9__["locale"]('pt-br');
        this.menu.enable(true);
        this.menu.swipeGesture(true);
        this.usuarioLogado = new src_app_model_Usuario_model__WEBPACK_IMPORTED_MODULE_2__["Usuario"]();
        this.usuarioLogado = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
        const operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:operadoraUsuario'));
        if (operadora) {
            this.titulo = operadora.nomeOperadora;
        }
        else {
            this.titulo = 'Menu Principal';
        }
        if (this.usuarioLogado.configFormulario.codDominio == src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].PERFIL_DOMICILIAR) {
            this.flgTrabalhaComSenhaDom = 1;
            this.flgTrabalhaComSenha = 0;
            this.flgTrabalhaSemSenha = 0;
        }
        else {
            if (JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:operadoraUsuario')).flagUtilizaSenhaAcompMedico == 1) {
                this.flgTrabalhaComSenha = 1;
                this.flgTrabalhaComSenhaDom = 0;
            }
            else {
                this.flgTrabalhaSemSenha = 1;
                this.flgTrabalhaComSenhaDom = 0;
            }
        }
        this.verificaVersao.checkAppVersion();
        this.verificaAcompanhamentoSincronizar();
        this.limparAcompanhamentosEncerrados();
    }
    verificaAcompanhamentoSincronizar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let flgPossuiAcompSincronizar = false;
            this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then(items => {
                if (items != null) {
                    let listaAcompanhamentos = items;
                    for (let acomp of listaAcompanhamentos) {
                        if (acomp.usuario.login === this.usuarioLogado.login &&
                            acomp.operadora.codOperadora === this.usuarioLogado.operadora.codOperadora) {
                            if (acomp.listaAcompanhamentoDia && acomp.listaAcompanhamentoDia.length > 0) {
                                let diaAcompanhamento = acomp.listaAcompanhamentoDia.find(y => y.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_PENDENTE);
                                if (diaAcompanhamento != null) {
                                    flgPossuiAcompSincronizar = true;
                                    break;
                                }
                            }
                            if (!flgPossuiAcompSincronizar) {
                                if (acomp.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_PENDENTE) {
                                    flgPossuiAcompSincronizar = true;
                                    break;
                                }
                            }
                        }
                    }
                    if (flgPossuiAcompSincronizar) {
                        this.informaAcompanhamentoSincronizar();
                    }
                }
            }, error => {
                this.toast.errorToast(error);
            });
        });
    }
    informaAcompanhamentoSincronizar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let mensagem = "Você possui acompanhamento(s) para sincronizar. Por favor, sincronize seu(s) acompanhamento(s).";
            const alert = yield this.atrCtrl.create({
                header: 'Sincronizar Acompanhameto',
                message: mensagem,
                buttons: [
                    {
                        text: 'Sincronizar depois',
                        role: 'cancel',
                        handler: (blah) => { }
                    }, {
                        text: 'Sincronizar agora',
                        handler: () => {
                            this.router.navigateByUrl('menu-principal/sincronizar');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    limparAcompanhamentosEncerrados() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then(items => {
                if (items != null) {
                    let listaAcompanhamentos = items;
                    for (let acomp of listaAcompanhamentos) {
                        if (acomp.statusSincronismo === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_SINCRONIZADO &&
                            acomp.status === src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STATUS_ENCERRADO &&
                            acomp.usuario.login === this.usuarioLogado.login) {
                            let dataAtual = moment__WEBPACK_IMPORTED_MODULE_9__(new Date());
                            let dataEncerramento = new Date(moment__WEBPACK_IMPORTED_MODULE_9__(acomp.dataEncerramento, "DD/MM/YYYY").toISOString());
                            let qtdDiasEncerrado = dataAtual.diff(dataEncerramento, 'days');
                            if (qtdDiasEncerrado >= src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].QTD_DIAS_APAGAR_ENCERRADO) {
                                this.storageService.apagar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO, acomp, "senhaAutorizacao.senha");
                            }
                        }
                    }
                }
            }, error => {
                this.toast.errorToast(error);
            });
        });
    }
};
MenuPrincipalPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_4__["SaudiLoadingComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_5__["SaudiToastComponent"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: src_app_util_verifica_versao_util__WEBPACK_IMPORTED_MODULE_10__["VerificaVersao"] }
];
MenuPrincipalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'menu-principal',
        template: __webpack_require__(/*! raw-loader!./menu-principal.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/menu-principal/menu-principal.page.html"),
        styles: [__webpack_require__(/*! ./menu-principal.page.scss */ "./src/app/pages/menu-principal/menu-principal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_4__["SaudiLoadingComponent"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
        src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_5__["SaudiToastComponent"],
        src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
        src_app_util_verifica_versao_util__WEBPACK_IMPORTED_MODULE_10__["VerificaVersao"]])
], MenuPrincipalPage);



/***/ })

}]);
//# sourceMappingURL=pages-menu-principal-menu-principal-module-es2015.js.map