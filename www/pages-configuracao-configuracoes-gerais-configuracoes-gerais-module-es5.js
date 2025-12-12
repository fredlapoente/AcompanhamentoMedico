(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-configuracao-configuracoes-gerais-configuracoes-gerais-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/configuracao/configuracoes-gerais/configuracoes-gerais.page.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/configuracao/configuracoes-gerais/configuracoes-gerais.page.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar class=\"ion-text-center\">\r\n        <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/menu-principal\" text=\"\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title class=\"ion-text-uppercase\">Configurações Gerais</ion-title>\r\n        <ion-buttons slot=\"end\">\r\n        <ion-menu-button menuId=\"main-content\"></ion-menu-button>\r\n        </ion-buttons>\r\n    </ion-toolbar>   \r\n</ion-header>\r\n<ion-content>\r\n    <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-button expand=\"block\" size=\"large\" (click)=\"alterarPerfilFormulario($event)\">Perfil Formulário</ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-button expand=\"block\" size=\"large\" (click)=\"atualizarMotivoAlta()\">Atualizar Motivos de Alta</ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-button expand=\"block\" size=\"large\" (click)=\"atualizarTipoAcomodacao()\">Atualizar Tipos de Acomodação Inicial</ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-button expand=\"block\" size=\"large\" (click)=\"atualizarTipoInternacao()\">Atualizar Tipos de Internação</ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-button expand=\"block\" size=\"large\" (click)=\"atualizarCaraterAtendimento()\">Atualizar Caráter do Atendimento</ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-button expand=\"block\" size=\"large\" (click)=\"atualizarOrigemInternacao()\">Atualizar Origem Internação</ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-button expand=\"block\" size=\"large\" (click)=\"atualizarPosologia()\">Atualizar Posologias</ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-button expand=\"block\" size=\"large\" (click)=\"atualizarItensPrincipais()\">Atualizar Itens principais</ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-button expand=\"block\" size=\"large\" (click)=\"atualizarUF()\">Atualizar UF</ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-button expand=\"block\" size=\"large\" (click)=\"abirTelaExcluirAcompanhamentosEncerrados()\">Apagar Acompanhamentos Encerrados</ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n            <ion-button expand=\"block\" size=\"large\" (click)=\"enviarAcompanhamentosEmail()\">Enviar os acompanhamentos por e-mail</ion-button>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/configuracao/configuracoes-gerais/configuracoes-gerais-routing.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/configuracao/configuracoes-gerais/configuracoes-gerais-routing.module.ts ***!
  \************************************************************************************************/
/*! exports provided: ConfiguracoesGeraisPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesGeraisPageRoutingModule", function() { return ConfiguracoesGeraisPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _configuracoes_gerais_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuracoes-gerais.page */ "./src/app/pages/configuracao/configuracoes-gerais/configuracoes-gerais.page.ts");




var routes = [
    {
        path: '',
        component: _configuracoes_gerais_page__WEBPACK_IMPORTED_MODULE_3__["ConfiguracoesGeraisPage"]
    }
];
var ConfiguracoesGeraisPageRoutingModule = /** @class */ (function () {
    function ConfiguracoesGeraisPageRoutingModule() {
    }
    ConfiguracoesGeraisPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ConfiguracoesGeraisPageRoutingModule);
    return ConfiguracoesGeraisPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/configuracao/configuracoes-gerais/configuracoes-gerais.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/configuracao/configuracoes-gerais/configuracoes-gerais.module.ts ***!
  \****************************************************************************************/
/*! exports provided: ConfiguracoesGeraisPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesGeraisPageModule", function() { return ConfiguracoesGeraisPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _configuracoes_gerais_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configuracoes-gerais-routing.module */ "./src/app/pages/configuracao/configuracoes-gerais/configuracoes-gerais-routing.module.ts");
/* harmony import */ var _configuracoes_gerais_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuracoes-gerais.page */ "./src/app/pages/configuracao/configuracoes-gerais/configuracoes-gerais.page.ts");







var ConfiguracoesGeraisPageModule = /** @class */ (function () {
    function ConfiguracoesGeraisPageModule() {
    }
    ConfiguracoesGeraisPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _configuracoes_gerais_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfiguracoesGeraisPageRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_configuracoes_gerais_page__WEBPACK_IMPORTED_MODULE_6__["ConfiguracoesGeraisPage"]]
        })
    ], ConfiguracoesGeraisPageModule);
    return ConfiguracoesGeraisPageModule;
}());



/***/ }),

/***/ "./src/app/pages/configuracao/configuracoes-gerais/configuracoes-gerais.page.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/configuracao/configuracoes-gerais/configuracoes-gerais.page.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-large {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uZmlndXJhY2FvL2NvbmZpZ3VyYWNvZXMtZ2VyYWlzL0M6XFxEZXNlblxcd29ya3NwYWNlX2FwbGljYXRpdm9cXEFwcEFjb21wYW5oYW1lbnRvTWVkaWNvL3NyY1xcYXBwXFxwYWdlc1xcY29uZmlndXJhY2FvXFxjb25maWd1cmFjb2VzLWdlcmFpc1xcY29uZmlndXJhY29lcy1nZXJhaXMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb25maWd1cmFjYW8vY29uZmlndXJhY29lcy1nZXJhaXMvY29uZmlndXJhY29lcy1nZXJhaXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29uZmlndXJhY2FvL2NvbmZpZ3VyYWNvZXMtZ2VyYWlzL2NvbmZpZ3VyYWNvZXMtZ2VyYWlzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tbGFyZ2V7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuIiwiLmJ1dHRvbi1sYXJnZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/configuracao/configuracoes-gerais/configuracoes-gerais.page.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/configuracao/configuracoes-gerais/configuracoes-gerais.page.ts ***!
  \**************************************************************************************/
/*! exports provided: ConfiguracoesGeraisPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesGeraisPage", function() { return ConfiguracoesGeraisPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/Operadora.model */ "./src/app/model/Operadora.model.ts");
/* harmony import */ var src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/model/DominioCodigo.model */ "./src/app/model/DominioCodigo.model.ts");
/* harmony import */ var src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/config/constantes/constantes */ "./src/app/config/constantes/constantes.ts");
/* harmony import */ var src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/saudi-toast/saudi-toast.component */ "./src/app/components/saudi-toast/saudi-toast.component.ts");
/* harmony import */ var src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/saudi-loading/saudi-loading.component */ "./src/app/components/saudi-loading/saudi-loading.component.ts");
/* harmony import */ var src_app_components_popover_perfil_formulario_popover_perfil_formulario_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/popover-perfil-formulario/popover-perfil-formulario.component */ "./src/app/components/popover-perfil-formulario/popover-perfil-formulario.component.ts");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var src_app_services_prestador_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/prestador.service */ "./src/app/services/prestador.service.ts");
/* harmony import */ var src_app_services_parametros_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/parametros.service */ "./src/app/services/parametros.service.ts");
/* harmony import */ var src_app_services_acompanhamento_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/acompanhamento.service */ "./src/app/services/acompanhamento.service.ts");















var ConfiguracoesGeraisPage = /** @class */ (function () {
    function ConfiguracoesGeraisPage(router, atrCtrl, toastCrl, loading, popover, parametrosService, storageService, prestadorService, acompanhamentoService) {
        this.router = router;
        this.atrCtrl = atrCtrl;
        this.toastCrl = toastCrl;
        this.loading = loading;
        this.popover = popover;
        this.parametrosService = parametrosService;
        this.storageService = storageService;
        this.prestadorService = prestadorService;
        this.acompanhamentoService = acompanhamentoService;
    }
    ConfiguracoesGeraisPage.prototype.ngOnInit = function () {
        moment__WEBPACK_IMPORTED_MODULE_2__["locale"]('pt-br');
        this.usuario = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosUsuario'));
    };
    ConfiguracoesGeraisPage.prototype.atualizarMotivoAlta = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atrCtrl.create({
                            header: 'Deseja atualizar os Motivos de Alta?',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: function (blah) { }
                                }, {
                                    text: 'Confirmar',
                                    handler: function () {
                                        _this.confirmarAtualizarMotivoAlta();
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
    ConfiguracoesGeraisPage.prototype.confirmarAtualizarMotivoAlta = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var operadora, dominioCodigo, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_5__["Operadora"];
                        dominioCodigo = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_6__["DominioCodigo"];
                        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
                        dominioCodigo.codTabela = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].TABELA_MOTIVO_ALTA;
                        dominioCodigo.operadora = operadora;
                        return [4 /*yield*/, this.loading.presentLoading('Buscando Motivos de Alta...')];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, this.storageService.apagarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_MOTIVO_SAIDA)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _i, data_1, motivo;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _i = 0, data_1 = data;
                                            _a.label = 1;
                                        case 1:
                                            if (!(_i < data_1.length)) return [3 /*break*/, 4];
                                            motivo = data_1[_i];
                                            return [4 /*yield*/, this.storageService.adicionar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_MOTIVO_SAIDA, motivo)];
                                        case 2:
                                            _a.sent();
                                            _a.label = 3;
                                        case 3:
                                            _i++;
                                            return [3 /*break*/, 1];
                                        case 4:
                                            loading.dismiss();
                                            this.toastCrl.successToast('Lista de Motivo de Alta atualizada.');
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, function (error) {
                                _this.toastCrl.errorToast(error);
                                loading.dismiss();
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfiguracoesGeraisPage.prototype.atualizarTipoAcomodacao = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atrCtrl.create({
                            header: 'Deseja atualizar os Tipos de Acomodação Inicial?',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: function (blah) { }
                                }, {
                                    text: 'Confirmar',
                                    handler: function () {
                                        _this.confirmarAtualizarTipoAcomodacao();
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
    ConfiguracoesGeraisPage.prototype.confirmarAtualizarTipoAcomodacao = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var operadora, dominioCodigo, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_5__["Operadora"];
                        dominioCodigo = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_6__["DominioCodigo"];
                        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
                        dominioCodigo.codTabela = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].TABELA_TIPO_ACOMODACAO;
                        dominioCodigo.operadora = operadora;
                        return [4 /*yield*/, this.loading.presentLoading('Buscando Tipos de Acomodação...')];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, this.storageService.apagarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_TIPO_ACOMODACAO)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _i, data_2, acomodacao;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _i = 0, data_2 = data;
                                            _a.label = 1;
                                        case 1:
                                            if (!(_i < data_2.length)) return [3 /*break*/, 4];
                                            acomodacao = data_2[_i];
                                            return [4 /*yield*/, this.storageService.adicionar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_TIPO_ACOMODACAO, acomodacao)];
                                        case 2:
                                            _a.sent();
                                            _a.label = 3;
                                        case 3:
                                            _i++;
                                            return [3 /*break*/, 1];
                                        case 4:
                                            loading.dismiss();
                                            this.toastCrl.successToast('Lista de Tipo de Acomodação Inicial atualizada.');
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, function (error) {
                                _this.toastCrl.errorToast(error);
                                loading.dismiss();
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfiguracoesGeraisPage.prototype.alterarPerfilFormulario = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var pop;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popover.create({
                            component: src_app_components_popover_perfil_formulario_popover_perfil_formulario_component__WEBPACK_IMPORTED_MODULE_10__["PopoverPerfilFormularioComponent"],
                            event: ev,
                            translucent: true
                        })];
                    case 1:
                        pop = _a.sent();
                        return [4 /*yield*/, pop.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ConfiguracoesGeraisPage.prototype.abirTelaExcluirAcompanhamentosEncerrados = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var usuario, navigationExtras;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                usuario = this.usuario;
                navigationExtras = {
                    state: {
                        usuario: usuario
                    }
                };
                this.router.navigateByUrl('menu-principal/excluir-acomp-encerrado', navigationExtras);
                return [2 /*return*/];
            });
        });
    };
    ConfiguracoesGeraisPage.prototype.atualizarPosologia = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atrCtrl.create({
                            header: 'Deseja atualizar as Posologias?',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: function (blah) { }
                                }, {
                                    text: 'Confirmar',
                                    handler: function () {
                                        _this.confirmarAtualizarPosologia();
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
    ConfiguracoesGeraisPage.prototype.confirmarAtualizarPosologia = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var operadora, dominioCodigo, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_5__["Operadora"];
                        dominioCodigo = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_6__["DominioCodigo"];
                        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
                        dominioCodigo.codTabela = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].TABELA_POSOLOGIA;
                        dominioCodigo.operadora = operadora;
                        return [4 /*yield*/, this.loading.presentLoading('Buscando Posologias...')];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, this.storageService.apagarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_POSOLOGIA)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _i, data_3, posologia;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _i = 0, data_3 = data;
                                            _a.label = 1;
                                        case 1:
                                            if (!(_i < data_3.length)) return [3 /*break*/, 4];
                                            posologia = data_3[_i];
                                            return [4 /*yield*/, this.storageService.adicionar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_POSOLOGIA, posologia)];
                                        case 2:
                                            _a.sent();
                                            _a.label = 3;
                                        case 3:
                                            _i++;
                                            return [3 /*break*/, 1];
                                        case 4:
                                            loading.dismiss();
                                            this.toastCrl.successToast('Lista de Posologia atualizada.');
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, function (error) {
                                _this.toastCrl.errorToast(error);
                                loading.dismiss();
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfiguracoesGeraisPage.prototype.atualizarItensPrincipais = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atrCtrl.create({
                            header: 'Deseja atualizar os Itens?',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: function (blah) { }
                                }, {
                                    text: 'Confirmar',
                                    handler: function () {
                                        _this.confirmarAtualizarItensPrincipais();
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
    ConfiguracoesGeraisPage.prototype.confirmarAtualizarItensPrincipais = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var operadora, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_5__["Operadora"];
                        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
                        return [4 /*yield*/, this.loading.presentLoading('Buscando Itens...')];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, this.storageService.apagarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ITENS_PRINCIPAIS)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.parametrosService.getListaItemPrincipal(operadora.codOperadora).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _i, data_4, item;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _i = 0, data_4 = data;
                                            _a.label = 1;
                                        case 1:
                                            if (!(_i < data_4.length)) return [3 /*break*/, 4];
                                            item = data_4[_i];
                                            return [4 /*yield*/, this.storageService.adicionar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ITENS_PRINCIPAIS, item)];
                                        case 2:
                                            _a.sent();
                                            _a.label = 3;
                                        case 3:
                                            _i++;
                                            return [3 /*break*/, 1];
                                        case 4:
                                            loading.dismiss();
                                            this.toastCrl.successToast('Lista de Itens atualizada.');
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, function (error) {
                                _this.toastCrl.errorToast(error);
                                loading.dismiss();
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfiguracoesGeraisPage.prototype.atualizarUF = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atrCtrl.create({
                            header: 'Deseja atualizar as UFs?',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: function (blah) { }
                                }, {
                                    text: 'Confirmar',
                                    handler: function () {
                                        _this.confirmarAtualizarUF();
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
    ConfiguracoesGeraisPage.prototype.confirmarAtualizarUF = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var operadora, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_5__["Operadora"];
                        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
                        return [4 /*yield*/, this.loading.presentLoading('Buscando UFs...')];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, this.storageService.apagarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_UF)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.prestadorService.getUFPrestadores(operadora).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _i, data_5, uf;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _i = 0, data_5 = data;
                                            _a.label = 1;
                                        case 1:
                                            if (!(_i < data_5.length)) return [3 /*break*/, 4];
                                            uf = data_5[_i];
                                            return [4 /*yield*/, this.storageService.adicionar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_UF, uf)];
                                        case 2:
                                            _a.sent();
                                            _a.label = 3;
                                        case 3:
                                            _i++;
                                            return [3 /*break*/, 1];
                                        case 4:
                                            loading.dismiss();
                                            this.toastCrl.successToast('Lista de UF atualizada.');
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, function (error) {
                                _this.toastCrl.errorToast(error);
                                loading.dismiss();
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfiguracoesGeraisPage.prototype.enviarAcompanhamentosEmail = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var listaAcompanhamentos;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.storageService.buscarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ACOMPANHAMENTO_MEDICO).then(function (itens) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var loading_1;
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!itens) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.loading.presentLoading('Enviando...')];
                            case 1:
                                loading_1 = _a.sent();
                                listaAcompanhamentos = itens;
                                return [4 /*yield*/, this.acompanhamentoService.enviarAcompanhamentosEmail(listaAcompanhamentos, this.usuario.login).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                        return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                            loading_1.dismiss();
                                            if (data) {
                                                this.toastCrl.successToast('Acompanhamentos enviados.');
                                            }
                                            else {
                                                this.toastCrl.errorToast('Erro no envio dos Acompanhamentos.');
                                            }
                                            return [2 /*return*/];
                                        });
                                    }); }, function (error) {
                                        _this.toastCrl.errorToast(error);
                                        loading_1.dismiss();
                                    })];
                            case 2:
                                _a.sent();
                                _a.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ConfiguracoesGeraisPage.prototype.atualizarTipoInternacao = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atrCtrl.create({
                            header: 'Deseja atualizar os Tipos de Internação?',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: function (blah) { }
                                }, {
                                    text: 'Confirmar',
                                    handler: function () {
                                        _this.confirmarAtualizarTipoInternacao();
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
    ConfiguracoesGeraisPage.prototype.confirmarAtualizarTipoInternacao = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var operadora, dominioCodigo, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_5__["Operadora"];
                        dominioCodigo = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_6__["DominioCodigo"];
                        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
                        dominioCodigo.codTabela = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].TABELA_TIPO_INTERNACAO;
                        dominioCodigo.operadora = operadora;
                        return [4 /*yield*/, this.loading.presentLoading('Buscando Tipos de Internação...')];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, this.storageService.apagarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_TIPO_INTERNACAO)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _i, data_6, internacao;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _i = 0, data_6 = data;
                                            _a.label = 1;
                                        case 1:
                                            if (!(_i < data_6.length)) return [3 /*break*/, 4];
                                            internacao = data_6[_i];
                                            return [4 /*yield*/, this.storageService.adicionar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_TIPO_INTERNACAO, internacao)];
                                        case 2:
                                            _a.sent();
                                            _a.label = 3;
                                        case 3:
                                            _i++;
                                            return [3 /*break*/, 1];
                                        case 4:
                                            loading.dismiss();
                                            this.toastCrl.successToast('Lista de Tipo de Internação atualizada.');
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, function (error) {
                                _this.toastCrl.errorToast(error);
                                loading.dismiss();
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfiguracoesGeraisPage.prototype.atualizarCaraterAtendimento = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atrCtrl.create({
                            header: 'Deseja atualizar Caráter de Atendimento?',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: function (blah) { }
                                }, {
                                    text: 'Confirmar',
                                    handler: function () {
                                        _this.confirmarAtualizarCaraterAtendimento();
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
    ConfiguracoesGeraisPage.prototype.confirmarAtualizarCaraterAtendimento = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var operadora, dominioCodigo, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_5__["Operadora"];
                        dominioCodigo = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_6__["DominioCodigo"];
                        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
                        dominioCodigo.codTabela = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].TABELA_CARATER_ATENDIMENTO;
                        dominioCodigo.operadora = operadora;
                        return [4 /*yield*/, this.loading.presentLoading('Buscando Tipos de Internação...')];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, this.storageService.apagarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_CARATER_ATENDIMENTO)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _i, data_7, carater;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _i = 0, data_7 = data;
                                            _a.label = 1;
                                        case 1:
                                            if (!(_i < data_7.length)) return [3 /*break*/, 4];
                                            carater = data_7[_i];
                                            return [4 /*yield*/, this.storageService.adicionar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_CARATER_ATENDIMENTO, carater)];
                                        case 2:
                                            _a.sent();
                                            _a.label = 3;
                                        case 3:
                                            _i++;
                                            return [3 /*break*/, 1];
                                        case 4:
                                            loading.dismiss();
                                            this.toastCrl.successToast('Lista de Caráter de Atendimento atualizada.');
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, function (error) {
                                _this.toastCrl.errorToast(error);
                                loading.dismiss();
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfiguracoesGeraisPage.prototype.atualizarOrigemInternacao = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atrCtrl.create({
                            header: 'Deseja atualizar Origem Internação?',
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    handler: function (blah) { }
                                }, {
                                    text: 'Confirmar',
                                    handler: function () {
                                        _this.confirmarAtualizarOrigemInternacao();
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
    ConfiguracoesGeraisPage.prototype.confirmarAtualizarOrigemInternacao = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var operadora, dominioCodigo, loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operadora = new src_app_model_Operadora_model__WEBPACK_IMPORTED_MODULE_5__["Operadora"];
                        dominioCodigo = new src_app_model_DominioCodigo_model__WEBPACK_IMPORTED_MODULE_6__["DominioCodigo"];
                        operadora = JSON.parse(localStorage.getItem('@appAcompanhamentoMedico:dadosOperadora'));
                        dominioCodigo.codTabela = src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].TABELA_ORIGEM_INTERNACAO;
                        dominioCodigo.operadora = operadora;
                        return [4 /*yield*/, this.loading.presentLoading('Buscando Origem Internação..')];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, this.storageService.apagarTodos(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ORIGEM_INTERNACAO)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.parametrosService.getListaDominioCodigo(dominioCodigo).subscribe(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                var _i, data_8, origem;
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _i = 0, data_8 = data;
                                            _a.label = 1;
                                        case 1:
                                            if (!(_i < data_8.length)) return [3 /*break*/, 4];
                                            origem = data_8[_i];
                                            return [4 /*yield*/, this.storageService.adicionar(src_app_config_constantes_constantes__WEBPACK_IMPORTED_MODULE_7__["default"].STORAGE_ORIGEM_INTERNACAO, origem)];
                                        case 2:
                                            _a.sent();
                                            _a.label = 3;
                                        case 3:
                                            _i++;
                                            return [3 /*break*/, 1];
                                        case 4:
                                            loading.dismiss();
                                            this.toastCrl.successToast('Lista de Origem Internação atualizada.');
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, function (error) {
                                _this.toastCrl.errorToast(error);
                                loading.dismiss();
                            })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfiguracoesGeraisPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_8__["SaudiToastComponent"] },
        { type: src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_9__["SaudiLoadingComponent"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"] },
        { type: src_app_services_parametros_service__WEBPACK_IMPORTED_MODULE_13__["ParametrosService"] },
        { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"] },
        { type: src_app_services_prestador_service__WEBPACK_IMPORTED_MODULE_12__["PrestadorService"] },
        { type: src_app_services_acompanhamento_service__WEBPACK_IMPORTED_MODULE_14__["AcompanhamentoService"] }
    ]; };
    ConfiguracoesGeraisPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-configuracoes-gerais',
            template: __webpack_require__(/*! raw-loader!./configuracoes-gerais.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/configuracao/configuracoes-gerais/configuracoes-gerais.page.html"),
            styles: [__webpack_require__(/*! ./configuracoes-gerais.page.scss */ "./src/app/pages/configuracao/configuracoes-gerais/configuracoes-gerais.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            src_app_components_saudi_toast_saudi_toast_component__WEBPACK_IMPORTED_MODULE_8__["SaudiToastComponent"],
            src_app_components_saudi_loading_saudi_loading_component__WEBPACK_IMPORTED_MODULE_9__["SaudiLoadingComponent"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"],
            src_app_services_parametros_service__WEBPACK_IMPORTED_MODULE_13__["ParametrosService"],
            src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"],
            src_app_services_prestador_service__WEBPACK_IMPORTED_MODULE_12__["PrestadorService"],
            src_app_services_acompanhamento_service__WEBPACK_IMPORTED_MODULE_14__["AcompanhamentoService"]])
    ], ConfiguracoesGeraisPage);
    return ConfiguracoesGeraisPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-configuracao-configuracoes-gerais-configuracoes-gerais-module-es5.js.map