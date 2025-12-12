(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js":
/*!************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/cubic-bezier-2812fda3.js ***!
  \************************************************************************/
/*! exports provided: P, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTimeGivenProgression; });
/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
/**
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return NaN.
 */
var getTimeGivenProgression = function (p0, p1, p2, p3, progression) {
    var tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
    return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
};
/**
 * Solve a cubic equation in one dimension (time)
 */
var solveCubicParametricEquation = function (p0, p1, p2, p3, t) {
    var partA = (3 * p1) * Math.pow(t - 1, 2);
    var partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
    var partC = p0 * Math.pow(t - 1, 3);
    return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
var solveCubicBezier = function (p0, p1, p2, p3, refPoint) {
    p0 -= refPoint;
    p1 -= refPoint;
    p2 -= refPoint;
    p3 -= refPoint;
    var roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
    return roots.filter(function (root) { return root >= 0 && root <= 1; });
};
var solveQuadraticEquation = function (a, b, c) {
    var discriminant = b * b - 4 * a * c;
    if (discriminant < 0) {
        return [];
    }
    else {
        return [
            (-b + Math.sqrt(discriminant)) / (2 * a),
            (-b - Math.sqrt(discriminant)) / (2 * a)
        ];
    }
};
var solveCubicEquation = function (a, b, c, d) {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }
    b /= a;
    c /= a;
    d /= a;
    var p = (3 * c - b * b) / 3;
    var q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
    if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
    }
    else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
    }
    var discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
    }
    else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
    }
    var r = Math.sqrt(Math.pow(-(p / 3), 3));
    var phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
    var s = 2 * Math.pow(r, 1 / 3);
    return [
        s * Math.cos(phi / 3) - b / 3,
        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
    ];
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/haptic-c8f1473e.js ***!
  \******************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
var hapticSelectionStart = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
var hapticSelectionChanged = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
var hapticSelectionEnd = function () {
    var engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js ***!
  \*****************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
var sanitizeDOMString = function (untrustedString) {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        var documentFragment_1 = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment_1.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(function (blockedTag) {
            var getElementsToRemove = documentFragment_1.querySelectorAll(blockedTag);
            for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                var element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment_1.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                var childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        var dfChildren = getElementChildren(documentFragment_1);
        /* tslint:disable-next-line */
        for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment_1);
        // First child is always the div we did our work in
        var getInnerDiv = fragmentDiv.querySelector('div');
        return (getInnerDiv !== null) ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
    }
    catch (err) {
        console.error(err);
        return '';
    }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */
var sanitizeElement = function (element) {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes.item(i);
        var attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        var attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    var childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (var i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
var getElementChildren = function (el) {
    return (el.children != null) ? el.children : el.childNodes;
};
var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js ***!
  \*****************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var hostContext = function (selector, el) {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
var createColorClasses = function (color) {
    var _a;
    return (typeof color === 'string' && color.length > 0) ? (_a = {
            'ion-color': true
        },
        _a["ion-color-" + color] = true,
        _a) : undefined;
};
var getClassList = function (classes) {
    if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(function (c) { return c != null; })
            .map(function (c) { return c.trim(); })
            .filter(function (c) { return c !== ''; });
    }
    return [];
};
var getClassMap = function (classes) {
    var map = {};
    getClassList(classes).forEach(function (c) { return map[c] = true; });
    return map;
};
var SCHEME = /^[a-z][a-z0-9+\-.]*:/;
var openURL = function (url, ev, direction) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    var router;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
            router = document.querySelector('ion-router');
            if (router) {
                if (ev != null) {
                    ev.preventDefault();
                }
                return [2 /*return*/, router.push(url, direction)];
            }
        }
        return [2 /*return*/, false];
    });
}); };



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/watch-options-2af96011.js ***!
  \*************************************************************************/
/*! exports provided: f, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findCheckedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return watchForOptions; });
var watchForOptions = function (containerEl, tagName, onChange) {
    var mutation = new MutationObserver(function (mutationList) {
        onChange(getSelectedOption(mutationList, tagName));
    });
    mutation.observe(containerEl, {
        childList: true,
        subtree: true
    });
    return mutation;
};
var getSelectedOption = function (mutationList, tagName) {
    var newOption;
    mutationList.forEach(function (mut) {
        // tslint:disable-next-line: prefer-for-of
        for (var i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
    });
    return newOption;
};
var findCheckedOption = function (el, tagName) {
    if (el.nodeType !== 1) {
        return undefined;
    }
    var options = (el.tagName === tagName.toUpperCase())
        ? [el]
        : Array.from(el.querySelectorAll(tagName));
    return options.find(function (o) { return o.checked === true; });
};



/***/ }),

/***/ "./src/app/model/AcompanhamentoMedico.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/model/AcompanhamentoMedico.model.ts ***!
  \*****************************************************/
/*! exports provided: AcompanhamentoMedico */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcompanhamentoMedico", function() { return AcompanhamentoMedico; });
/* harmony import */ var _Beneficiario_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Beneficiario.model */ "./src/app/model/Beneficiario.model.ts");
/* harmony import */ var _ConfigFormulario_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConfigFormulario.model */ "./src/app/model/ConfigFormulario.model.ts");
/* harmony import */ var _DispositivoMovel_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DispositivoMovel.model */ "./src/app/model/DispositivoMovel.model.ts");
/* harmony import */ var _DominioCodigo_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DominioCodigo.model */ "./src/app/model/DominioCodigo.model.ts");
/* harmony import */ var _Operadora_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Operadora.model */ "./src/app/model/Operadora.model.ts");
/* harmony import */ var _Prestador_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Prestador.model */ "./src/app/model/Prestador.model.ts");
/* harmony import */ var _SenhaAutorizacao_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SenhaAutorizacao.model */ "./src/app/model/SenhaAutorizacao.model.ts");
/* harmony import */ var _Usuario_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Usuario.model */ "./src/app/model/Usuario.model.ts");








var AcompanhamentoMedico = /** @class */ (function () {
    function AcompanhamentoMedico() {
        this.tipoAcomodacao = new _DominioCodigo_model__WEBPACK_IMPORTED_MODULE_3__["DominioCodigo"];
        this.tipoInternacao = new _DominioCodigo_model__WEBPACK_IMPORTED_MODULE_3__["DominioCodigo"];
        this.caraterAtendimento = new _DominioCodigo_model__WEBPACK_IMPORTED_MODULE_3__["DominioCodigo"];
        this.origemInternacao = new _DominioCodigo_model__WEBPACK_IMPORTED_MODULE_3__["DominioCodigo"];
        this.medicoAssistente = '';
        this.crmMedicoAssistente = null;
        this.cidDiagnostico = new _DominioCodigo_model__WEBPACK_IMPORTED_MODULE_3__["DominioCodigo"];
        this.dataEstimadaAlta = '';
        this.usuario = new _Usuario_model__WEBPACK_IMPORTED_MODULE_7__["Usuario"]();
        this.operadora = new _Operadora_model__WEBPACK_IMPORTED_MODULE_4__["Operadora"]();
        this.beneficiario = new _Beneficiario_model__WEBPACK_IMPORTED_MODULE_0__["Beneficiario"]();
        this.prestador = new _Prestador_model__WEBPACK_IMPORTED_MODULE_5__["Prestador"]();
        this.senhaAutorizacao = new _SenhaAutorizacao_model__WEBPACK_IMPORTED_MODULE_6__["SenhaAutorizacao"]();
        this.motivoAlta = new _DominioCodigo_model__WEBPACK_IMPORTED_MODULE_3__["DominioCodigo"]();
        this.configFormulario = new _ConfigFormulario_model__WEBPACK_IMPORTED_MODULE_1__["ConfigFormulario"]();
        this.dispositivoMovel = new _DispositivoMovel_model__WEBPACK_IMPORTED_MODULE_2__["DispositivoMovel"]();
        this.ultimaInternacao = new _SenhaAutorizacao_model__WEBPACK_IMPORTED_MODULE_6__["SenhaAutorizacao"]();
        this.erroSincronismo = '';
        this.dataSincronizado = '';
        this.listaAcompanhamentoDia = [];
        this.listaAcompanhamentoObs = [];
        this.exibeDadosSincronismo = false;
        this.flgSincronizar = false;
        this.flgExibeGifProcessando = false;
        this.flgExibeSucessoProcesso = false;
        this.flgExibeErroProcesso = false;
        this.erroAnexoAcompanhamento = "";
        this.flgImportar = false;
        this.flgPossuiFormulario = true;
        this.flgExisteDispositivo = false;
        this.flgImportadoSucesso = false;
        this.dataUltimaVisualizacao = '';
        this.appVersion = '';
    }
    return AcompanhamentoMedico;
}());



/***/ }),

/***/ "./src/app/model/AcompanhamentoMedicoDado.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/model/AcompanhamentoMedicoDado.model.ts ***!
  \*********************************************************/
/*! exports provided: AcompanhamentoMedicoDado */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcompanhamentoMedicoDado", function() { return AcompanhamentoMedicoDado; });
/* harmony import */ var _DadoItemGrupoConfigFormulario_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DadoItemGrupoConfigFormulario.model */ "./src/app/model/DadoItemGrupoConfigFormulario.model.ts");

var AcompanhamentoMedicoDado = /** @class */ (function () {
    function AcompanhamentoMedicoDado() {
        this.dadoItemGrupoConfigFormulario = new _DadoItemGrupoConfigFormulario_model__WEBPACK_IMPORTED_MODULE_0__["DadoItemGrupoConfigFormulario"]();
    }
    return AcompanhamentoMedicoDado;
}());



/***/ }),

/***/ "./src/app/model/AcompanhamentoMedicoDia.model.ts":
/*!********************************************************!*\
  !*** ./src/app/model/AcompanhamentoMedicoDia.model.ts ***!
  \********************************************************/
/*! exports provided: AcompanhamentoMedicoDia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcompanhamentoMedicoDia", function() { return AcompanhamentoMedicoDia; });
var AcompanhamentoMedicoDia = /** @class */ (function () {
    function AcompanhamentoMedicoDia() {
        this.dataSincronizado = '';
        this.erroSincronismo = '';
        this.flgSincronizar = false;
        this.flgExibeSucessoProcesso = false;
        this.flgExibeErroProcesso = false;
    }
    return AcompanhamentoMedicoDia;
}());



/***/ }),

/***/ "./src/app/model/Beneficiario.model.ts":
/*!*********************************************!*\
  !*** ./src/app/model/Beneficiario.model.ts ***!
  \*********************************************/
/*! exports provided: Beneficiario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Beneficiario", function() { return Beneficiario; });
var Beneficiario = /** @class */ (function () {
    function Beneficiario() {
    }
    return Beneficiario;
}());



/***/ }),

/***/ "./src/app/model/Prestador.model.ts":
/*!******************************************!*\
  !*** ./src/app/model/Prestador.model.ts ***!
  \******************************************/
/*! exports provided: Prestador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prestador", function() { return Prestador; });
/* harmony import */ var _Operadora_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Operadora.model */ "./src/app/model/Operadora.model.ts");
/* harmony import */ var _Usuario_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Usuario.model */ "./src/app/model/Usuario.model.ts");
/* harmony import */ var _DominioCodigo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DominioCodigo.model */ "./src/app/model/DominioCodigo.model.ts");



var Prestador = /** @class */ (function () {
    function Prestador() {
        this.usuario = new _Usuario_model__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
        this.operadora = new _Operadora_model__WEBPACK_IMPORTED_MODULE_0__["Operadora"]();
        this.uf = new _DominioCodigo_model__WEBPACK_IMPORTED_MODULE_2__["DominioCodigo"]();
    }
    return Prestador;
}());



/***/ }),

/***/ "./src/app/model/SenhaAutorizacao.model.ts":
/*!*************************************************!*\
  !*** ./src/app/model/SenhaAutorizacao.model.ts ***!
  \*************************************************/
/*! exports provided: SenhaAutorizacao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenhaAutorizacao", function() { return SenhaAutorizacao; });
/* harmony import */ var _Beneficiario_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Beneficiario.model */ "./src/app/model/Beneficiario.model.ts");
/* harmony import */ var _Operadora_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Operadora.model */ "./src/app/model/Operadora.model.ts");
/* harmony import */ var _Prestador_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Prestador.model */ "./src/app/model/Prestador.model.ts");



var SenhaAutorizacao = /** @class */ (function () {
    function SenhaAutorizacao() {
        this.prestador = new _Prestador_model__WEBPACK_IMPORTED_MODULE_2__["Prestador"]();
        this.beneficiario = new _Beneficiario_model__WEBPACK_IMPORTED_MODULE_0__["Beneficiario"]();
        this.operadora = new _Operadora_model__WEBPACK_IMPORTED_MODULE_1__["Operadora"]();
    }
    return SenhaAutorizacao;
}());



/***/ }),

/***/ "./src/app/services/acompanhamento.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/acompanhamento.service.ts ***!
  \****************************************************/
/*! exports provided: AcompanhamentoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcompanhamentoService", function() { return AcompanhamentoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config_service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config-service/config.service */ "./src/app/config/config-service/config.service.ts");





var AcompanhamentoService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AcompanhamentoService, _super);
    function AcompanhamentoService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.rootService = _config_config_service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"].rootSaudiServico;
        _this.moduleService = "acompanhamentoMedico";
        return _this;
    }
    AcompanhamentoService.prototype.getAcompanhamentoMedicoPorSenha = function (acompanhamentoMedico) {
        return this.postData(JSON.parse(JSON.stringify(acompanhamentoMedico)), 'getAcompanhamentoMedicoPorSenha');
    };
    AcompanhamentoService.prototype.restaurarFormulariosAcompanhamentos = function (usuario) {
        return this.postData(JSON.parse(JSON.stringify(usuario)), 'restaurarFormulariosAcompanhamentos');
    };
    AcompanhamentoService.prototype.getAcompanhamentosParaImportar = function (acompanhamentoMedico) {
        return this.postData(JSON.parse(JSON.stringify(acompanhamentoMedico)), 'getAcompanhamentosParaImportar');
    };
    AcompanhamentoService.prototype.sincronizar = function (listaAcompanhamentos) {
        return this.postData(JSON.parse(JSON.stringify(listaAcompanhamentos)), 'sincronizar');
    };
    AcompanhamentoService.prototype.verificarPendenciaSincronismo = function (acompanhamentoMedicoPendencia, acompanhamentoMedicoDispositivo) {
        return this.postData(JSON.parse(JSON.stringify([acompanhamentoMedicoPendencia, acompanhamentoMedicoDispositivo])), 'verificarPendenciaSincronismo');
    };
    AcompanhamentoService.prototype.enviarEmailPendencia = function (acompanhamentoMedico) {
        return this.postData(JSON.parse(JSON.stringify(acompanhamentoMedico)), 'enviarEmailPendencia');
    };
    AcompanhamentoService.prototype.enviarAcompanhamentosEmail = function (listaAcompanhamentos, loginUsuario) {
        return this.postData(JSON.parse(JSON.stringify(listaAcompanhamentos)), 'enviarAcompanhamentosEmail/' + loginUsuario);
    };
    AcompanhamentoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    AcompanhamentoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AcompanhamentoService);
    return AcompanhamentoService;
}(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ }),

/***/ "./src/app/services/prestador.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/prestador.service.ts ***!
  \***********************************************/
/*! exports provided: PrestadorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrestadorService", function() { return PrestadorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config_service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config-service/config.service */ "./src/app/config/config-service/config.service.ts");





var PrestadorService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PrestadorService, _super);
    function PrestadorService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.rootService = _config_config_service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"].rootSaudiServico;
        _this.moduleService = "prestador";
        return _this;
    }
    PrestadorService.prototype.getPrestadores = function (prestador) {
        return this.postData(JSON.parse(JSON.stringify(prestador)), 'getPrestadores');
    };
    PrestadorService.prototype.getUFPrestadores = function (operadora) {
        return this.postData(JSON.parse(JSON.stringify(operadora)), 'getUFPrestadores');
    };
    PrestadorService.prototype.getPrestadoresPorUf = function (prestador) {
        return this.postData(JSON.parse(JSON.stringify(prestador)), 'getPrestadoresPorUf');
    };
    PrestadorService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    PrestadorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], PrestadorService);
    return PrestadorService;
}(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/services/senhaAutorizacao.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/senhaAutorizacao.service.ts ***!
  \******************************************************/
/*! exports provided: SenhaAutorizacaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenhaAutorizacaoService", function() { return SenhaAutorizacaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config_service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config-service/config.service */ "./src/app/config/config-service/config.service.ts");





var SenhaAutorizacaoService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SenhaAutorizacaoService, _super);
    function SenhaAutorizacaoService(http) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.rootService = _config_config_service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"].rootSaudiServico;
        _this.moduleService = "senhaAutorizacao";
        return _this;
    }
    SenhaAutorizacaoService.prototype.getSenhasAutorizacao = function (senhaAutorizacao) {
        return this.postData(JSON.parse(JSON.stringify(senhaAutorizacao)), 'getSenhasAutorizacao');
    };
    SenhaAutorizacaoService.prototype.getUltimaInternacao = function (senhaAutorizacao) {
        return this.postData(JSON.parse(JSON.stringify(senhaAutorizacao)), 'getUltimaInternacao');
    };
    SenhaAutorizacaoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    SenhaAutorizacaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SenhaAutorizacaoService);
    return SenhaAutorizacaoService;
}(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map