(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js ***!
  \********************************************************************/
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
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
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
const getTimeGivenProgression = (p0, p1, p2, p3, progression) => {
    const tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
    return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
};
/**
 * Solve a cubic equation in one dimension (time)
 */
const solveCubicParametricEquation = (p0, p1, p2, p3, t) => {
    const partA = (3 * p1) * Math.pow(t - 1, 2);
    const partB = (-3 * p2 * t) + (3 * p2) + (p3 * t);
    const partC = p0 * Math.pow(t - 1, 3);
    return t * (partA + (t * partB)) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */
const solveCubicBezier = (p0, p1, p2, p3, refPoint) => {
    p0 -= refPoint;
    p1 -= refPoint;
    p2 -= refPoint;
    p3 -= refPoint;
    const roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
    return roots.filter(root => root >= 0 && root <= 1);
};
const solveQuadraticEquation = (a, b, c) => {
    const discriminant = b * b - 4 * a * c;
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
const solveCubicEquation = (a, b, c, d) => {
    if (a === 0) {
        return solveQuadraticEquation(b, c, d);
    }
    b /= a;
    c /= a;
    d /= a;
    const p = (3 * c - b * b) / 3;
    const q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;
    if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
    }
    else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
    }
    const discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);
    if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
    }
    else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow((q / 2) + Math.sqrt(discriminant), 1 / 3) - b / 3];
    }
    const r = Math.sqrt(Math.pow(-(p / 3), 3));
    const phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
    const s = 2 * Math.pow(r, 1 / 3);
    return [
        s * Math.cos(phi / 3) - b / 3,
        s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3,
        s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3
    ];
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
    if (delegate) {
        return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }
    if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
        throw new Error('framework delegate is missing');
    }
    const el = (typeof component === 'string')
        ? container.ownerDocument && container.ownerDocument.createElement(component)
        : component;
    if (cssClasses) {
        cssClasses.forEach(c => el.classList.add(c));
    }
    if (componentProps) {
        Object.assign(el, componentProps);
    }
    container.appendChild(el);
    if (el.componentOnReady) {
        await el.componentOnReady();
    }
    return el;
};
const detachComponent = (delegate, element) => {
    if (element) {
        if (delegate) {
            const container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
        }
        element.remove();
    }
    return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
  \**************************************************************/
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
const hapticSelection = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.selection();
    }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionStart();
    }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionChanged();
    }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
    const engine = window.TapticEngine;
    if (engine) {
        engine.gestureSelectionEnd();
    }
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/index-3476b023.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3476b023.js ***!
  \*************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
const sanitizeDOMString = (untrustedString) => {
    try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
            return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */
        const documentFragment = document.createDocumentFragment();
        const workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */
        blockedTags.forEach(blockedTag => {
            const getElementsToRemove = documentFragment.querySelectorAll(blockedTag);
            for (let elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
                const element = getElementsToRemove[elementIndex];
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
                else {
                    documentFragment.removeChild(element);
                }
                /**
                 * We still need to sanitize
                 * the children of this element
                 * as they are left behind
                 */
                const childElements = getElementChildren(element);
                /* tslint:disable-next-line */
                for (let childIndex = 0; childIndex < childElements.length; childIndex++) {
                    sanitizeElement(childElements[childIndex]);
                }
            }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes
        const dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */
        for (let childIndex = 0; childIndex < dfChildren.length; childIndex++) {
            sanitizeElement(dfChildren[childIndex]);
        }
        // Append document fragment to div
        const fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment);
        // First child is always the div we did our work in
        const getInnerDiv = fragmentDiv.querySelector('div');
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
const sanitizeElement = (element) => {
    // IE uses childNodes, so ignore nodes that are not elements
    if (element.nodeType && element.nodeType !== 1) {
        return;
    }
    for (let i = element.attributes.length - 1; i >= 0; i--) {
        const attribute = element.attributes.item(i);
        const attributeName = attribute.name;
        // remove non-allowed attribs
        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
            element.removeAttribute(attributeName);
            continue;
        }
        // clean up any allowed attribs
        // that attempt to do any JS funny-business
        const attributeValue = attribute.value;
        /* tslint:disable-next-line */
        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
            element.removeAttribute(attributeName);
        }
    }
    /**
     * Sanitize any nested children
     */
    const childElements = getElementChildren(element);
    /* tslint:disable-next-line */
    for (let i = 0; i < childElements.length; i++) {
        sanitizeElement(childElements[i]);
    }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */
const getElementChildren = (el) => {
    return (el.children != null) ? el.children : el.childNodes;
};
const allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
const blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/index-4d91f03a.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-4d91f03a.js ***!
  \*************************************************************/
/*! exports provided: d, g, l, s, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getIonPageElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return transition; });
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-feeeff0d.js */ "./node_modules/@ionic/core/dist/esm/core-feeeff0d.js");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");



const iosTransitionAnimation = () => __webpack_require__.e(/*! import() | ios-transition-504cdd09-js */ "ios-transition-504cdd09-js").then(__webpack_require__.bind(null, /*! ./ios.transition-504cdd09.js */ "./node_modules/@ionic/core/dist/esm/ios.transition-504cdd09.js"));
const mdTransitionAnimation = () => __webpack_require__.e(/*! import() | md-transition-fea2bbfb-js */ "md-transition-fea2bbfb-js").then(__webpack_require__.bind(null, /*! ./md.transition-fea2bbfb.js */ "./node_modules/@ionic/core/dist/esm/md.transition-fea2bbfb.js"));
const transition = (opts) => {
    return new Promise((resolve, reject) => {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
            beforeTransition(opts);
            runTransition(opts).then(result => {
                if (result.animation) {
                    result.animation.destroy();
                }
                afterTransition(opts);
                resolve(result);
            }, error => {
                afterTransition(opts);
                reject(error);
            });
        });
    });
};
const beforeTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    setZIndex(enteringEl, leavingEl, opts.direction);
    if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
    }
    else {
        enteringEl.classList.remove('can-go-back');
    }
    setPageHidden(enteringEl, false);
    if (leavingEl) {
        setPageHidden(leavingEl, false);
    }
};
const runTransition = async (opts) => {
    const animationBuilder = await getAnimationBuilder(opts);
    const ani = (animationBuilder)
        ? animation(animationBuilder, opts)
        : noAnimation(opts); // fast path for no animation
    return ani;
};
const afterTransition = (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    enteringEl.classList.remove('ion-page-invisible');
    if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
    }
};
const getAnimationBuilder = async (opts) => {
    if (!opts.leavingEl || !opts.animated || opts.duration === 0) {
        return undefined;
    }
    if (opts.animationBuilder) {
        return opts.animationBuilder;
    }
    const getAnimation = (opts.mode === 'ios')
        ? (await iosTransitionAnimation()).iosTransitionAnimation
        : (await mdTransitionAnimation()).mdTransitionAnimation;
    return getAnimation;
};
const animation = async (animationBuilder, opts) => {
    await waitForReady(opts, true);
    let trans;
    try {
        const mod = await __webpack_require__.e(/*! import() | index-69c37885-js */ "index-69c37885-js").then(__webpack_require__.bind(null, /*! ./index-69c37885.js */ "./node_modules/@ionic/core/dist/esm/index-69c37885.js"));
        trans = await mod.create(animationBuilder, opts.baseEl, opts);
    }
    catch (err) {
        trans = animationBuilder(opts.baseEl, opts);
    }
    fireWillEvents(opts.enteringEl, opts.leavingEl);
    const didComplete = await playTransition(trans, opts);
    if (opts.progressCallback) {
        opts.progressCallback(undefined);
    }
    if (didComplete) {
        fireDidEvents(opts.enteringEl, opts.leavingEl);
    }
    return {
        hasCompleted: didComplete,
        animation: trans
    };
};
const noAnimation = async (opts) => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    await waitForReady(opts, false);
    fireWillEvents(enteringEl, leavingEl);
    fireDidEvents(enteringEl, leavingEl);
    return {
        hasCompleted: true
    };
};
const waitForReady = async (opts, defaultDeep) => {
    const deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
    const promises = deep ? [
        deepReady(opts.enteringEl),
        deepReady(opts.leavingEl),
    ] : [
        shallowReady(opts.enteringEl),
        shallowReady(opts.leavingEl),
    ];
    await Promise.all(promises);
    await notifyViewReady(opts.viewIsReady, opts.enteringEl);
};
const notifyViewReady = async (viewIsReady, enteringEl) => {
    if (viewIsReady) {
        await viewIsReady(enteringEl);
    }
};
const playTransition = (trans, opts) => {
    const progressCallback = opts.progressCallback;
    // TODO: Remove AnimationBuilder
    const promise = new Promise(resolve => {
        trans.onFinish((currentStep) => {
            if (typeof currentStep === 'number') {
                resolve(currentStep === 1);
            }
            else if (trans.hasCompleted !== undefined) {
                resolve(trans.hasCompleted);
            }
        });
    });
    // cool, let's do this, start the transition
    if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart(true);
        progressCallback(trans);
    }
    else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
    }
    // create a callback for when the animation is done
    return promise;
};
const fireWillEvents = (enteringEl, leavingEl) => {
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
};
const fireDidEvents = (enteringEl, leavingEl) => {
    lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
    lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
};
const lifecycle = (el, eventName) => {
    if (el) {
        const ev = new CustomEvent(eventName, {
            bubbles: false,
            cancelable: false,
        });
        el.dispatchEvent(ev);
    }
};
const shallowReady = (el) => {
    if (el && el.componentOnReady) {
        return el.componentOnReady();
    }
    return Promise.resolve();
};
const deepReady = async (el) => {
    const element = el;
    if (element) {
        if (element.componentOnReady != null) {
            const stencilEl = await element.componentOnReady();
            if (stencilEl != null) {
                return;
            }
        }
        await Promise.all(Array.from(element.children).map(deepReady));
    }
};
const setPageHidden = (el, hidden) => {
    if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
    }
    else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
    }
};
const setZIndex = (enteringEl, leavingEl, direction) => {
    if (enteringEl !== undefined) {
        enteringEl.style.zIndex = (direction === 'back')
            ? '99'
            : '101';
    }
    if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
    }
};
const getIonPageElement = (element) => {
    if (element.classList.contains('ion-page')) {
        return element;
    }
    const ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
    if (ionPage) {
        return ionPage;
    }
    // idk, return the original element so at least something animates and we don't have a null pointer
    return element;
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
    return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color) => {
    return (typeof color === 'string' && color.length > 0) ? {
        'ion-color': true,
        [`ion-color-${color}`]: true
    } : undefined;
};
const getClassList = (classes) => {
    if (classes !== undefined) {
        const array = Array.isArray(classes) ? classes : classes.split(' ');
        return array
            .filter(c => c != null)
            .map(c => c.trim())
            .filter(c => c !== '');
    }
    return [];
};
const getClassMap = (classes) => {
    const map = {};
    getClassList(classes).forEach(c => map[c] = true);
    return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction) => {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
        const router = document.querySelector('ion-router');
        if (router) {
            if (ev != null) {
                ev.preventDefault();
            }
            return router.push(url, direction);
        }
    }
    return false;
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js ***!
  \*********************************************************************/
/*! exports provided: f, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findCheckedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return watchForOptions; });
const watchForOptions = (containerEl, tagName, onChange) => {
    const mutation = new MutationObserver(mutationList => {
        onChange(getSelectedOption(mutationList, tagName));
    });
    mutation.observe(containerEl, {
        childList: true,
        subtree: true
    });
    return mutation;
};
const getSelectedOption = (mutationList, tagName) => {
    let newOption;
    mutationList.forEach(mut => {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < mut.addedNodes.length; i++) {
            newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
        }
    });
    return newOption;
};
const findCheckedOption = (el, tagName) => {
    if (el.nodeType !== 1) {
        return undefined;
    }
    const options = (el.tagName === tagName.toUpperCase())
        ? [el]
        : Array.from(el.querySelectorAll(tagName));
    return options.find((o) => o.checked === true);
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








class AcompanhamentoMedico {
    constructor() {
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
}


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

class AcompanhamentoMedicoDado {
    constructor() {
        this.dadoItemGrupoConfigFormulario = new _DadoItemGrupoConfigFormulario_model__WEBPACK_IMPORTED_MODULE_0__["DadoItemGrupoConfigFormulario"]();
    }
}


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
class AcompanhamentoMedicoDia {
    constructor() {
        this.dataSincronizado = '';
        this.erroSincronismo = '';
        this.flgSincronizar = false;
        this.flgExibeSucessoProcesso = false;
        this.flgExibeErroProcesso = false;
    }
}


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
class Beneficiario {
}


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



class Prestador {
    constructor() {
        this.usuario = new _Usuario_model__WEBPACK_IMPORTED_MODULE_1__["Usuario"]();
        this.operadora = new _Operadora_model__WEBPACK_IMPORTED_MODULE_0__["Operadora"]();
        this.uf = new _DominioCodigo_model__WEBPACK_IMPORTED_MODULE_2__["DominioCodigo"]();
    }
}


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



class SenhaAutorizacao {
    constructor() {
        this.prestador = new _Prestador_model__WEBPACK_IMPORTED_MODULE_2__["Prestador"]();
        this.beneficiario = new _Beneficiario_model__WEBPACK_IMPORTED_MODULE_0__["Beneficiario"]();
        this.operadora = new _Operadora_model__WEBPACK_IMPORTED_MODULE_1__["Operadora"]();
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config_config_service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config-service/config.service */ "./src/app/config/config-service/config.service.ts");





let AcompanhamentoService = class AcompanhamentoService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(http) {
        super(http);
        this.http = http;
        this.rootService = _config_config_service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"].rootSaudiServico;
        this.moduleService = "acompanhamentoMedico";
    }
    getAcompanhamentoMedicoPorSenha(acompanhamentoMedico) {
        return this.postData(JSON.parse(JSON.stringify(acompanhamentoMedico)), 'getAcompanhamentoMedicoPorSenha');
    }
    restaurarFormulariosAcompanhamentos(usuario) {
        return this.postData(JSON.parse(JSON.stringify(usuario)), 'restaurarFormulariosAcompanhamentos');
    }
    getAcompanhamentosParaImportar(acompanhamentoMedico) {
        return this.postData(JSON.parse(JSON.stringify(acompanhamentoMedico)), 'getAcompanhamentosParaImportar');
    }
    sincronizar(listaAcompanhamentos) {
        return this.postData(JSON.parse(JSON.stringify(listaAcompanhamentos)), 'sincronizar');
    }
    verificarPendenciaSincronismo(acompanhamentoMedicoPendencia, acompanhamentoMedicoDispositivo) {
        return this.postData(JSON.parse(JSON.stringify([acompanhamentoMedicoPendencia, acompanhamentoMedicoDispositivo])), 'verificarPendenciaSincronismo');
    }
    enviarEmailPendencia(acompanhamentoMedico) {
        return this.postData(JSON.parse(JSON.stringify(acompanhamentoMedico)), 'enviarEmailPendencia');
    }
    enviarAcompanhamentosEmail(listaAcompanhamentos, loginUsuario) {
        return this.postData(JSON.parse(JSON.stringify(listaAcompanhamentos)), 'enviarAcompanhamentosEmail/' + loginUsuario);
    }
};
AcompanhamentoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AcompanhamentoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], AcompanhamentoService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config_config_service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config-service/config.service */ "./src/app/config/config-service/config.service.ts");





let PrestadorService = class PrestadorService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    constructor(http) {
        super(http);
        this.http = http;
        this.rootService = _config_config_service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"].rootSaudiServico;
        this.moduleService = "prestador";
    }
    getPrestadores(prestador) {
        return this.postData(JSON.parse(JSON.stringify(prestador)), 'getPrestadores');
    }
    getUFPrestadores(operadora) {
        return this.postData(JSON.parse(JSON.stringify(operadora)), 'getUFPrestadores');
    }
    getPrestadoresPorUf(prestador) {
        return this.postData(JSON.parse(JSON.stringify(prestador)), 'getPrestadoresPorUf');
    }
};
PrestadorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
PrestadorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], PrestadorService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ "./src/app/services/base.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config_config_service_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config-service/config.service */ "./src/app/config/config-service/config.service.ts");





let SenhaAutorizacaoService = class SenhaAutorizacaoService extends _base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(http) {
        super(http);
        this.http = http;
        this.rootService = _config_config_service_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"].rootSaudiServico;
        this.moduleService = "senhaAutorizacao";
    }
    getSenhasAutorizacao(senhaAutorizacao) {
        return this.postData(JSON.parse(JSON.stringify(senhaAutorizacao)), 'getSenhasAutorizacao');
    }
    getUltimaInternacao(senhaAutorizacao) {
        return this.postData(JSON.parse(JSON.stringify(senhaAutorizacao)), 'getUltimaInternacao');
    }
};
SenhaAutorizacaoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
SenhaAutorizacaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
], SenhaAutorizacaoService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map