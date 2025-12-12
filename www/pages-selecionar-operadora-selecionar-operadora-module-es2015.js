(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-selecionar-operadora-selecionar-operadora-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/selecionar-operadora/selecionar-operadora.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/selecionar-operadora/selecionar-operadora.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\r\n  <ion-toolbar color=\"secondary\" class=\"ion-text-center ion-padding login-toolbar\">\r\n    <ion-img class=\"login-image-header\" src=\"../assets/images/logo-acomp.png\"></ion-img>\r\n  </ion-toolbar>\r\n\r\n  <ion-toolbar>\r\n    <ion-item lines=\"none\">\r\n      <ion-icon color=\"light\" slot=\"end\" name=\"information-circle-outline\" (click)=\"abrirModalOperadora()\"></ion-icon>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-no-padding\">\r\n  <ion-grid class=\"height-100\" fixed>\r\n    <ion-row class=\"height-100 ion-align-items-center ion-justify-content-center\">\r\n      <ion-col size-sm=\"8\" size-md=\"8\" size-lg=\"6\" size-xl=\"6\" class=\"ion-no-padding ion-text-center ion-no-margin\">\r\n        <form [formGroup]=\"formOperadora\" (submit)=\"buscarOperadora()\" (keyup.enter)=\"buscarOperadora()\">\r\n          <ion-item>\r\n            <!-- <ion-icon slot=\"start\" name=\"medical\" color=\"light\"></ion-icon> -->\r\n            <ion-label position=\"floating\">Código da Operadora</ion-label>\r\n            <ion-input type=\"text\" pattern=\"[0-9]*\" maxlength=\"6\" inputmode=\"numeric\" formControlName=\"codOperadora\">\r\n            </ion-input>\r\n            <ion-button class=\"ion-margin-bottom custom-button\" slot=\"end\" expand=\"block\" size=\"default\" type=\"submit\"\r\n              [disabled]=\"codOperadora.invalid\">\r\n              <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n            </ion-button>\r\n          </ion-item>\r\n          <ion-item mode=\"md\" lines=\"none\" class=\"item-error\">\r\n            <ion-note color=\"warning\" class=\"ion-padding-horizontal\" *ngIf=\"(codOperadora.dirty || codOperadora.touched) && codOperadora.hasError('required')\">Campo\r\n              obrigatório\r\n              <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n            </ion-note>\r\n            <ion-note color=\"warning\" class=\"ion-padding-horizontal\" *ngIf=\"codOperadora.hasError('pattern')\">Só são permitidos valores numéricos\r\n              <ion-icon color=\"warning\" class=\"margin-top-02em\" name=\"alert\"></ion-icon>\r\n            </ion-note>\r\n          </ion-item>\r\n          <ion-item class=\"ion-padding-top\">\r\n            <ng-container *ngIf=\"listaOperadora.length == 0\">\r\n              <ion-select class=\"select-full-width\" interface=\"action-sheet\" placeholder=\"Selecione sua Operadora\"  formControlName=\"operadora\" cancelText=\"Cancelar\">\r\n              </ion-select>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"listaOperadora.length > 0\">\r\n              <ion-select class=\"select-full-width\" interface=\"action-sheet\"\r\n                placeholder=\"Selecione sua Operadora\"  formControlName=\"operadora\" cancelText=\"Cancelar\" (ionChange)=\"mudarCor();\">\r\n                <ion-select-option *ngFor=\"let operadora of listaOperadora\" [value]=\"operadora.idOperadora\">\r\n                  {{operadora.nomeOperadora}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ng-container>\r\n          </ion-item>\r\n          <ion-button class=\"ion-margin-top custom-button\" expand=\"block\" size=\"large\" (click)=\"selecionarOperadora()\"\r\n            [disabled]=\"listaOperadora.length < 1 || !operadora.valid \">\r\n            CONTINUAR           \r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/selecionar-operadora/selecionar-operadora-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/selecionar-operadora/selecionar-operadora-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SelecionarOperadoraPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarOperadoraPageRoutingModule", function() { return SelecionarOperadoraPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _selecionar_operadora_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selecionar-operadora.page */ "./src/app/pages/selecionar-operadora/selecionar-operadora.page.ts");




const routes = [
    {
        path: '',
        component: _selecionar_operadora_page__WEBPACK_IMPORTED_MODULE_3__["SelecionarOperadoraPage"]
    }
];
let SelecionarOperadoraPageRoutingModule = class SelecionarOperadoraPageRoutingModule {
};
SelecionarOperadoraPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SelecionarOperadoraPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/selecionar-operadora/selecionar-operadora.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/selecionar-operadora/selecionar-operadora.module.ts ***!
  \***************************************************************************/
/*! exports provided: SelecionarOperadoraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarOperadoraPageModule", function() { return SelecionarOperadoraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _selecionar_operadora_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selecionar-operadora-routing.module */ "./src/app/pages/selecionar-operadora/selecionar-operadora-routing.module.ts");
/* harmony import */ var _selecionar_operadora_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selecionar-operadora.page */ "./src/app/pages/selecionar-operadora/selecionar-operadora.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let SelecionarOperadoraPageModule = class SelecionarOperadoraPageModule {
};
SelecionarOperadoraPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _selecionar_operadora_routing_module__WEBPACK_IMPORTED_MODULE_5__["SelecionarOperadoraPageRoutingModule"]
        ],
        declarations: [_selecionar_operadora_page__WEBPACK_IMPORTED_MODULE_6__["SelecionarOperadoraPage"]]
    })
], SelecionarOperadoraPageModule);



/***/ }),

/***/ "./src/app/pages/selecionar-operadora/selecionar-operadora.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/selecionar-operadora/selecionar-operadora.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  --background: transparent;\n  --color: var(--ion-color-dark-contrast);\n  --border-color: #BFDFDF;\n  font-size: 16px;\n}\n\nion-content {\n  --background: var(--ion-color-primary);\n}\n\nion-slides {\n  height: 100%;\n  --bullet-background: #E4F1F1;\n  --bullet-background-active: #f4f5f8;\n}\n\nion-icon {\n  color: var(--ion-color-primary);\n}\n\nh2 {\n  color: var(--ion-color-secondary);\n}\n\nh3 {\n  color: var(--ion-color-light);\n}\n\nb {\n  font-weight: 500;\n}\n\np {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #E4F1F1;\n}\n\n.select-full-width {\n  max-width: 100%;\n  width: 100%;\n  padding-left: 0;\n}\n\n.login-toolbar {\n  border-bottom: 2px #E4F1F1 solid;\n}\n\n.title-operadora {\n  font-size: 18px;\n  color: #E4F1F1;\n}\n\n.login-image-header {\n  margin: 0.6em auto 0.2em;\n  width: 40vh;\n  max-width: 40vh;\n}\n\n.login-image-footer {\n  margin: 0 auto 0.2em;\n  width: 20vh;\n  max-width: 20vh;\n}\n\n.label-floating {\n  color: var(--ion-color-primary-contrast) !important;\n}\n\n@media (min-width: 1024px) and (max-width: 1366px) {\n  .login-image-header {\n    width: 30vh;\n    max-width: 30vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VsZWNpb25hci1vcGVyYWRvcmEvQzpcXERlc2VuXFx3b3Jrc3BhY2VfYXBsaWNhdGl2b1xcQXBwQWNvbXBhbmhhbWVudG9NZWRpY28vc3JjXFxhcHBcXHBhZ2VzXFxzZWxlY2lvbmFyLW9wZXJhZG9yYVxcc2VsZWNpb25hci1vcGVyYWRvcmEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZWxlY2lvbmFyLW9wZXJhZG9yYS9zZWxlY2lvbmFyLW9wZXJhZG9yYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLHVDQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDRSxzQ0FBQTtBQ0NGOztBREVBO0VBQ0ksWUFBQTtFQUNBLDRCQUFBO0VBQ0EsbUNBQUE7QUNDSjs7QURFRTtFQUNFLCtCQUFBO0FDQ0o7O0FERUU7RUFDRSxpQ0FBQTtBQ0NKOztBREVFO0VBQ0UsNkJBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxnQ0FBQTtBQ0NKOztBREVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNJLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNFLG1EQUFBO0FDQ0Y7O0FERUE7RUFDSTtJQUNJLFdBQUE7SUFDQSxlQUFBO0VDQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlbGVjaW9uYXItb3BlcmFkb3JhL3NlbGVjaW9uYXItb3BlcmFkb3JhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdCk7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogI0JGREZERjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6ICNFNEYxRjE7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogI2Y0ZjVmODtcclxuICB9XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICB9XHJcblxyXG4gIGIge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgcGFkZGluZzogMCA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjRTRGMUYxO1xyXG4gIH1cclxuXHJcbi5zZWxlY3QtZnVsbC13aWR0aCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICB9XHJcblxyXG4ubG9naW4tdG9vbGJhciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggI0U0RjFGMSBzb2xpZDtcclxufVxyXG5cclxuLnRpdGxlLW9wZXJhZG9yYSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjRTRGMUYxO1xyXG59XHJcblxyXG4ubG9naW4taW1hZ2UtaGVhZGVyIHtcclxuICAgIG1hcmdpbjogLjZlbSBhdXRvIC4yZW07XHJcbiAgICB3aWR0aDogNDB2aDtcclxuICAgIG1heC13aWR0aDogNDB2aDtcclxufVxyXG5cclxuLmxvZ2luLWltYWdlLWZvb3RlciB7XHJcbiAgICBtYXJnaW46IDAgYXV0byAuMmVtO1xyXG4gICAgd2lkdGg6IDIwdmg7XHJcbiAgICBtYXgtd2lkdGg6IDIwdmg7XHJcbn1cclxuXHJcbi5sYWJlbC1mbG9hdGluZyB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSBhbmQgKG1heC13aWR0aDogMTM2NnB4KSB7XHJcbiAgICAubG9naW4taW1hZ2UtaGVhZGVyIHtcclxuICAgICAgICB3aWR0aDogMzB2aDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMwdmg7XHJcbiAgICB9XHJcbn1cclxuICAgIiwiaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdCk7XG4gIC0tYm9yZGVyLWNvbG9yOiAjQkZERkRGO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQ6ICNFNEYxRjE7XG4gIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjZjRmNWY4O1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmgyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG5oMyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG5iIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogI0U0RjFGMTtcbn1cblxuLnNlbGVjdC1mdWxsLXdpZHRoIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ubG9naW4tdG9vbGJhciB7XG4gIGJvcmRlci1ib3R0b206IDJweCAjRTRGMUYxIHNvbGlkO1xufVxuXG4udGl0bGUtb3BlcmFkb3JhIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI0U0RjFGMTtcbn1cblxuLmxvZ2luLWltYWdlLWhlYWRlciB7XG4gIG1hcmdpbjogMC42ZW0gYXV0byAwLjJlbTtcbiAgd2lkdGg6IDQwdmg7XG4gIG1heC13aWR0aDogNDB2aDtcbn1cblxuLmxvZ2luLWltYWdlLWZvb3RlciB7XG4gIG1hcmdpbjogMCBhdXRvIDAuMmVtO1xuICB3aWR0aDogMjB2aDtcbiAgbWF4LXdpZHRoOiAyMHZoO1xufVxuXG4ubGFiZWwtZmxvYXRpbmcge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIGFuZCAobWF4LXdpZHRoOiAxMzY2cHgpIHtcbiAgLmxvZ2luLWltYWdlLWhlYWRlciB7XG4gICAgd2lkdGg6IDMwdmg7XG4gICAgbWF4LXdpZHRoOiAzMHZoO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/selecionar-operadora/selecionar-operadora.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/selecionar-operadora/selecionar-operadora.page.ts ***!
  \*************************************************************************/
/*! exports provided: SelecionarOperadoraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelecionarOperadoraPage", function() { return SelecionarOperadoraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/saudi-toast/saudi-toast.component */ "./src/app/components/saudi-toast/saudi-toast.component.ts");
/* harmony import */ var src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/saudi-loading/saudi-loading.component */ "./src/app/components/saudi-loading/saudi-loading.component.ts");
/* harmony import */ var src_app_services_operadora_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/operadora.service */ "./src/app/services/operadora.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_components_modal_operadora_modal_operadora_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/modal-operadora/modal-operadora.component */ "./src/app/components/modal-operadora/modal-operadora.component.ts");
/* harmony import */ var src_app_config_config_theme_config_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/config/config-theme/config.theme */ "./src/app/config/config-theme/config.theme.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var src_app_services_network_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/network.service */ "./src/app/services/network.service.ts");
/* harmony import */ var src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/config/constantes/constantes */ "./src/app/config/constantes/constantes.ts");












let SelecionarOperadoraPage = class SelecionarOperadoraPage {
    constructor(formBuilder, toast, loading, operadoraService, navCtrl, modalCtrl, storageService, networkService) {
        this.formBuilder = formBuilder;
        this.toast = toast;
        this.loading = loading;
        this.operadoraService = operadoraService;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.storageService = storageService;
        this.networkService = networkService;
        this.listaOperadora = [];
        this.flgOperadoraHabilitada = true;
    }
    ngOnInit() {
        this.criarFormulario();
    }
    get codOperadora() {
        return this.formOperadora.get('codOperadora');
    }
    get operadora() {
        return this.formOperadora.get('operadora');
    }
    criarFormulario() {
        this.formOperadora = this.formBuilder.group({
            codOperadora: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            operadora: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
    }
    abrirModalOperadora() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_components_modal_operadora_modal_operadora_component__WEBPACK_IMPORTED_MODULE_7__["ModalOperadoraComponent"],
                cssClass: 'operadora-modal'
            });
            return yield modal.present();
        });
    }
    buscarOperadora() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.listaOperadora = [];
            this.flgOperadoraHabilitada = true;
            this.operadora.disable();
            this.networkService.CheckNetworkStatus();
            if (this.networkService.NetworkStatus.value) {
                this.buscaOnline();
            }
            else {
                this.buscaOffline();
            }
        });
    }
    buscaOnline() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const codOperadora = parseInt(this.codOperadora.value);
            const loading = yield this.loading.presentLoading('Buscando operadora(s)...');
            this.operadoraService.getOperadora(codOperadora).subscribe((data) => {
                this.listaOperadora = data;
                loading.dismiss();
                this.operadora.enable();
                if (this.listaOperadora.length === 1) {
                    this.formOperadora.get("operadora").setValue(this.listaOperadora[0].idOperadora);
                    this.mudarCor();
                }
            }, error => {
                this.toast.errorToast(error);
                loading.dismiss();
            });
        });
    }
    buscaOffline() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const codOperadora = parseInt(this.codOperadora.value);
            const loading = yield this.loading.presentLoading('Buscando operadora(s)...');
            let operadoraOff;
            this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_OPERADORA).then(items => {
                if (items != null) {
                    this.listaOperadora = items;
                    operadoraOff = this.listaOperadora.find(x => x.codOperadora === codOperadora);
                }
                if (operadoraOff) {
                    loading.dismiss();
                    this.operadora.enable();
                    this.formOperadora.get("operadora").setValue(operadoraOff.idOperadora);
                    this.mudarCor();
                }
                else {
                    this.listaOperadora = [];
                    this.toast.errorToast("Nova Operadora apenas online. Verifique sua conexão com a internet.");
                    loading.dismiss();
                }
            }, error => {
                this.toast.errorToast(error);
                loading.dismiss();
            });
        });
    }
    selecionarOperadora() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loading.presentLoading('Aguarde...');
            try {
                const idOperadora = this.operadora.value;
                const operadora = this.listaOperadora.find(x => x.idOperadora === idOperadora);
                this.gravaOperadoraOffline(operadora);
                localStorage.setItem('@appAcompanhamentoMedico:dadosOperadora', JSON.stringify(operadora));
                this.navCtrl.navigateForward('/login');
            }
            catch (error) {
                this.toast.errorToast('Desculpe, ocorreu um erro inesperado, tente novamente.');
            }
            finally {
                loading.dismiss();
            }
        });
    }
    gravaOperadoraOffline(operadora) {
        this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_OPERADORA).then(items => {
            let operadoraOff;
            if (items != null) {
                operadoraOff = items.find(x => x.idOperadora === operadora.idOperadora);
            }
            if (operadoraOff) {
                this.storageService.atualizar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_OPERADORA, operadora, "idOperadora");
            }
            else {
                this.storageService.adicionar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_11__["default"].STORAGE_OPERADORA, operadora);
            }
        });
    }
    mudarCor() {
        src_app_config_config_theme_config_theme__WEBPACK_IMPORTED_MODULE_8__["ConfigTheme"].mudarTema(this.formOperadora.value.codOperadora);
    }
};
SelecionarOperadoraPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_3__["SaudiToastComponent"] },
    { type: src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_4__["SaudiLoadingComponent"] },
    { type: src_app_services_operadora_service__WEBPACK_IMPORTED_MODULE_5__["OperadoraService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"] },
    { type: src_app_services_network_service__WEBPACK_IMPORTED_MODULE_10__["NetworkService"] }
];
SelecionarOperadoraPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-selecionar-operadora',
        template: __webpack_require__(/*! raw-loader!./selecionar-operadora.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/selecionar-operadora/selecionar-operadora.page.html"),
        styles: [__webpack_require__(/*! ./selecionar-operadora.page.scss */ "./src/app/pages/selecionar-operadora/selecionar-operadora.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_3__["SaudiToastComponent"],
        src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_4__["SaudiLoadingComponent"],
        src_app_services_operadora_service__WEBPACK_IMPORTED_MODULE_5__["OperadoraService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"],
        src_app_services_network_service__WEBPACK_IMPORTED_MODULE_10__["NetworkService"]])
], SelecionarOperadoraPage);



/***/ }),

/***/ "./src/app/services/operadora.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/operadora.service.ts ***!
  \***********************************************/
/*! exports provided: OperadoraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperadoraService", function() { return OperadoraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_config_config_service_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/config-service/config.service */ "./src/app/config/config-service/config.service.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let OperadoraService = class OperadoraService extends _base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"] {
    constructor(http) {
        super(http);
        this.http = http;
        this.operadoraUrl = src_app_config_config_service_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"].urlSaudiGedServico;
        this.rootService = src_app_config_config_service_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"].rootSaudiGedServico;
        this.moduleService = 'operadora';
    }
    getOperadora(codOperadora) {
        return this.getDataSaudiGedServico('getListaOperadoras', `${codOperadora}`);
    }
};
OperadoraService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
OperadoraService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
], OperadoraService);



/***/ })

}]);
//# sourceMappingURL=pages-selecionar-operadora-selecionar-operadora-module-es2015.js.map