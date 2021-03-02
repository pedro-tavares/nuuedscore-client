function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/alert/alert.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Components/alert/alert.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAlertAlertComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p-toast [preventOpenDuplicates]=\"true\"  position=\"bottom-right\">\n  <!-- <ng-template let-message pTemplate=\"message\">\n    <div style=\"text-align: center; top: 66px\">\n      <p innerHtml=\"{{ message.detail }}\"></p>\n    </div>\n  </ng-template> -->\n</p-toast>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<router-outlet><alert></alert><app-spinner></app-spinner></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin/admin.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin/admin.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\n  id=\"pcoded\"\n  class=\"pcoded iscollapsed\"\n  theme-layout=\"vertical\"\n  vertical-placement=\"left\"\n  vertical-layout=\"wide\"\n  vnavigation-view=\"view1\"\n>\n  <div class=\"pcoded-overlay-box\"></div>\n  <div class=\"pcoded-container navbar-wrapper\">\n    <!-- Header start -->\n    <div class=\"container\">\n      <nav class=\"navbar navbar-expand-lg position-sticky\" id=\"mainNav\">\n        <div class=\"container\">\n          <div class=\"imgsetting mr-5\">\n            <a href=\"{{ configURL }}\"\n              ><img\n                src=\"assets/content/NuLogo_Small.svg\"\n                style=\"width: 90px; height: 50px\"\n            /></a>\n          </div>\n          <div class=\"navbar-collapse\" id=\"navbarResponsive\">\n            <div ngbDropdown class=\"d-inline-block\">\n              <button\n                style=\"width: 155px\"\n                class=\"btn btn-outline-primary\"\n                id=\"dropdownMenuButton\"\n                ngbDropdownToggle\n              >\n                {{ UserName }}\n              </button>\n              <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton\">\n                <button\n                *ngIf=\"showmyaccount\"\n                ngbDropdownItem\n                (click)=\"myAccount()\"\n              >\n                My Account\n              </button>\n              <button\n                *ngIf=\"showcompanyaccount\"\n                ngbDropdownItem\n                (click)=\"systemAccount()\"\n              >\n                My Company Profile\n              </button>\n              <button\n                *ngIf=\"showadminaccount\"\n                ngbDropdownItem\n                (click)=\"adminAccount()\"\n              >\n              Admin Settings\n              </button>\n                <button ngbDropdownItem (click)=\"Logout()\" style=\"z-index: -1;\">Logout</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </nav>\n    </div>\n    <hr id=\"about\" class=\"bg-success textcolor\" style=\"height: 2px\" />\n    <!-- header end -->\n\n    <div\n      class=\"pcoded-main-container\"\n      style=\"margin-top: 64px; z-index: -1; position: revert\"\n    >\n      <div class=\"pcoded-wrapper\">\n        <nav\n          id=\"main_navbar\"\n          class=\"pcoded-navbar\"\n          [exclude]=\"'#mobile-collapse'\"\n          navbar-theme=\"themelight1\"\n          active-item-theme=\"theme4\"\n          sub-item-theme=\"theme2\"\n          active-item-style=\"style0\"\n          pcoded-navbar-position=\"fixed\"\n          pcoded-header-position=\"fixed\"\n        >\n          <div class=\"sidebar_toggle\">\n            <a href=\"javascript:;\"><i class=\"icon-close icons\"></i></a>\n          </div>\n          <div class=\"pcoded-inner-navbar main-menu\" appAccordion>\n            <perfect-scrollbar\n              [style.max-width]=\"'100%'\"\n              [style.max-height]=\"'calc(100vh - 56px)'\"\n            >\n              <div>\n                <div *ngFor=\"let asideItems of menuItems.getAll('admin')\">\n                  <div class=\"pcoded-navigatio-lavel\" menu-title-theme=\"theme5\">\n                    {{ asideItems.label }}\n                  </div>\n                  <ul\n                    class=\"pcoded-item pcoded-left-item\"\n                    item-border=\"none\"\n                    item-border-style=\"solid\"\n                    subitem-border=\"solid\"\n                    *ngFor=\"let asideItem of asideItems.main\"\n                    appAccordionLink\n                    group=\"{{ asideItem.state }}\"\n                  >\n                    <li\n                      [routerLinkActive]=\"['active']\"\n                      *ngIf=\"asideItem.type === 'link'\"\n                      appAccordionLink\n                      group=\"{{ asideItem.state }}\"\n                    >\n                      <a\n                        [routerLink]=\"[\n                          '/',\n                          asideItem.main_state,\n                          asideItem.state\n                        ]\"\n                        target=\"{{ asideItem.target ? '_blank' : '_self' }}\"\n                        appAccordionToggle\n                        *ngIf=\"asideItem.main_state; else mainContent\"\n                      >\n                        <span class=\"pcoded-micon\"\n                          ><i class=\"{{ asideItem.icon }}\"></i\n                        ></span>\n                        <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\n                        <span\n                          *ngFor=\"let asideBadge of asideItem.badge\"\n                          class=\"pcoded-badge label label-{{ asideBadge.type }}\"\n                          >{{ asideBadge.value }}</span\n                        >\n                        <span class=\"pcoded-mcaret\"></span>\n                      </a>\n                      <ng-template #mainContent>\n                        <a\n                          [routerLink]=\"['/', asideItem.state]\"\n                          target=\"{{ asideItem.target ? '_blank' : '_self' }}\"\n                          appAccordionToggle\n                        >\n                          <span class=\"pcoded-micon\"\n                            ><i class=\"{{ asideItem.icon }}\"></i\n                          ></span>\n                          <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\n                          <span\n                            *ngFor=\"let asideBadge of asideItem.badge\"\n                            class=\"pcoded-badge label label-{{\n                              asideBadge.type\n                            }}\"\n                            >{{ asideBadge.value }}</span\n                          >\n                          <span class=\"pcoded-mcaret\"></span>\n                        </a>\n                      </ng-template>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </perfect-scrollbar>\n          </div>\n        </nav>\n        <div class=\"pcoded-content\"  style=\"z-index: -1;position: inherit;\">\n          <div class=\"pcoded-inner-content\">\n            <div class=\"main-body\">\n              <div class=\"page-wrapper\">\n                <app-title></app-title>\n                <div class=\"page-body\">\n                  <router-outlet><app-spinner></app-spinner></router-outlet>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Footer start -->\n\n    <section id=\"NuuEDScore\" class=\"textcolor\">\n      <div\n        class=\"container text-md-left mr-auto d-block text-center segment-one\"\n      >\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-md-6\">\n            <div class=\"thumbnail\">\n              <a\n              href=\"{{ configURL }}\"\n              title=\"Return to Homepage\"\n              alt=\"NueedScore\"\n            >\n              <img\n                class=\"img-fluid\"\n                src=\"assets/content/NuLogo_Small_White.svg\"\n                class=\"img-fluid1\"\n                alt=\"Return to Homepage\"\n              />\n              </a>\n            </div>\n            <p>\n              NuuEDSCORE provides a platform of online services which help\n              learners, students, and trainees of all ages improve their skills.\n              <br />\n              <br />\n              Our service employs continuous learner analytics and adaptive\n              learning technologies to uncover each user’s personality type and deliver content to boost\n              skills based on their learning style assessment score. The\n              custom-tailored content is specific to each user's personality and\n              learning style.\n              <br />\n              <br />\n              Become the best version of you with NuuEDScore!\n              <br />\n            </p>\n          </div>\n          <div class=\"col-md-6 d-block\">\n            <ul\n              class=\"text-md-right mx-auto text-center segment-one\"\n              style=\"list-style: none; margin-top: 40px\"\n            >\n              <li class=\"nav-item\">\n                <a style=\"color: white\" href=\"#\">Blog</a>\n              </li>\n              <li class=\"nav-item\">\n                <a style=\"color: white\" href=\"/about.html\">About Us</a>\n              </li>\n              <li class=\"nav-item\">\n                <a style=\"color: white\" href=\"#\">FAQ</a>\n              </li>\n              <li class=\"nav-item\">\n                <a style=\"color: white\" href=\"{{ configURL }}app/#/auth/registration\">Register</a>\n              </li>\n            </ul>\n\n            <div\n              class=\"contactdisplay d-block text-md-right text-center segment-one\"\n            >\n              <h2 style=\"font-size: 14px\">\n                <b> CONTACT US </b>\n              </h2>\n              <p>\n                650 Castro Street <br />Suite #120-276 <br />\n                Mountain View, Ca 94041<br />\n                <br /><a href=\"info@nuueducation.com\" style=\"color: white\"\n                  >info@nuueducation.com</a\n                >\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <Footer>\n      <p class=\"footer-bottam-text text-center text-white\">\n        © NuuEDSCORE LLC 2020 | <a href=\"#\"><span class=\"text-white\">Privacy Policy</span></a>\n      </p>\n    </Footer>\n    <!-- footer end -->\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/assessment/assessmentLayout.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/assessment/assessmentLayout.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsAssessmentAssessmentLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\n  id=\"pcoded\"\n  class=\"pcoded iscollapsed\"\n  theme-layout=\"vertical\"\n  vertical-placement=\"left\"\n  vertical-layout=\"wide\"\n  [attr.pcoded-device-type]=\"deviceType\"\n  [attr.vertical-nav-type]=\"verticalNavType\"\n  [attr.vertical-effect]=\"verticalEffect\"\n  vnavigation-view=\"view1\"\n>\n  <div class=\"pcoded-overlay-box\"></div>\n  <div class=\"pcoded-container navbar-wrapper\">\n    <!-- Header start -->\n\n    <div class=\"container\">\n      <nav class=\"navbar navbar-expand-lg position-sticky\" id=\"mainNav\">\n        <div class=\"container\">\n          <div class=\"imgsetting mr-5\">\n            <a href=\"{{ configURL }}\"\n              ><img\n                src=\"assets/content/NuLogo_Small.svg\"\n                style=\"width: 90px; height: 50px\"\n            /></a>\n          </div>\n\n          <div class=\"navbar-collapse\" id=\"navbarResponsive\">\n            <div ngbDropdown class=\"d-inline-block\">\n              <button\n                style=\"width: 155px\"\n                class=\"btn btn-outline-primary\"\n                id=\"dropdownMenuButton\"\n                ngbDropdownToggle\n              >\n                {{ UserName }}\n              </button>\n\n              <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton\">\n                <button\n                  *ngIf=\"showmyaccount\"\n                  ngbDropdownItem\n                  (click)=\"myAccount()\"\n                >\n                  My Account\n                </button>\n                <button\n                  *ngIf=\"showcompanyaccount\"\n                  ngbDropdownItem\n                  (click)=\"systemAccount()\"\n                >\n                  My Company Profile\n                </button>\n                <button\n                  *ngIf=\"showadminaccount\"\n                  ngbDropdownItem\n                  (click)=\"adminAccount()\"\n                >\n                  Admin Settings\n                </button>\n                <button ngbDropdownItem (click)=\"Logout()\" style=\"z-index: -1;\">Logout</button>\n              </div>\n            </div>\n            <ul></ul>\n          </div>\n        </div>\n      </nav>\n    </div>\n    <hr id=\"about\" class=\"bg-success textcolor\" style=\"height: 2px\" />\n    <!-- header end -->\n\n    <!-- body start-->\n    <div\n      class=\"pcoded-main-container\"\n      style=\"margin-top: 40px; z-index: 1; position: revert\"\n    >\n      <div class=\"pcoded-wrapper\">\n        <div class=\"pcoded-content\" style=\"z-index: -1; position: inherit\">\n          <div class=\"pcoded-inner-content\">\n            <div class=\"main-body\">\n              <div class=\"page-wrapper\">\n                <app-title></app-title>\n                <!--   <app-breadcrumbs></app-breadcrumbs> -->\n                <div class=\"page-body\">\n                  <router-outlet><app-spinner></app-spinner></router-outlet>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- body end-->\n\n    <!-- Footer start -->\n\n    <section id=\"NuuEDScore\" class=\"textcolor\">\n      <div\n        class=\"container text-md-left mr-auto d-block text-center segment-one\"\n      >\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-md-6\">\n            <div class=\"thumbnail\">\n              <a\n                href=\"{{ configURL }}\"\n                title=\"Return to Homepage\"\n                alt=\"NueedScore\"\n              >\n                <img\n                  class=\"img-fluid\"\n                  src=\"assets/content/NuLogo_Small_White.svg\"\n                  class=\"img-fluid1\"\n              /></a>\n            </div>\n            <p>\n              NuuEDSCORE provides a platform of online services which help\n              learners, students, and trainees of all ages improve their skills.\n              <br />\n              <br />\n              Our service employs continuous learner analytics and adaptive\n              learning technologies to uncover each user’s personality type and\n              deliver content to boost skills based on their learning style\n              assessment score. The custom-tailored content is specific to each\n              user's personality and learning style.\n              <br />\n              <br />\n              Become the best version of you with NuuEDScore!\n              <br />\n            </p>\n          </div>\n          <div class=\"col-md-6 d-block\">\n            <ul\n              class=\"text-md-right mx-auto text-center segment-one\"\n              style=\"list-style: none; margin-top: 40px\"\n            >\n              <li class=\"nav-item\">\n                <a style=\"color: white\" href=\"#\">Blog</a>\n              </li>\n              <li class=\"nav-item\">\n                <a style=\"color: white\" href=\"/about.html\">About Us</a>\n              </li>\n              <li class=\"nav-item\">\n                <a style=\"color: white\" href=\"#\">FAQ</a>\n              </li>\n              <li class=\"nav-item\">\n                <a style=\"color: white\" href=\"{{ configURL }}app/#/auth/registration\">Register</a>\n              </li>\n            </ul>\n\n            <div\n              class=\"contactdisplay d-block text-md-right text-center segment-one\"\n            >\n              <h2 style=\"font-size: 14px\">\n                <b> CONTACT US </b>\n              </h2>\n              <p>\n                650 Castro Street <br />Suite #120-276 <br />\n                Mountain View, Ca 94041<br />\n                <br /><a href=\"info@nuueducation.com\" style=\"color: white\"\n                  >info@nuueducation.com</a\n                >\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <Footer>\n      <p class=\"footer-bottam-text text-center text-white\">\n        © NuuEDSCORE LLC 2020 | <a href=\"#\"><span class=\"text-white\">Privacy Policy</span></a>\n      </p>\n    </Footer>\n    <!-- footer end -->\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsAuthAuthComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-title></app-title>\n<router-outlet><app-spinner></app-spinner></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/companyLayout/companyLayout.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/companyLayout/companyLayout.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsCompanyLayoutCompanyLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\n  id=\"pcoded\"\n  class=\"pcoded iscollapsed\"\n  theme-layout=\"vertical\"\n  vertical-placement=\"left\"\n  vertical-layout=\"wide\"\n  vnavigation-view=\"view1\"\n>\n  <div class=\"pcoded-overlay-box\"></div>\n  <div class=\"pcoded-container navbar-wrapper\">\n    <!-- Header start -->\n    <div class=\"container\">\n      <nav class=\"navbar navbar-expand-lg position-sticky\" id=\"mainNav\">\n        <div class=\"container\">\n          <div class=\"imgsetting mr-5\">\n            <a href=\"{{ configURL }}\"\n              ><img\n                src=\"assets/content/NuLogo_Small.svg\"\n                style=\"width: 90px; height: 50px\"\n            /></a>\n          </div>\n          <div class=\"navbar-collapse\" id=\"navbarResponsive\">\n            <div ngbDropdown class=\"d-inline-block\">\n              <button\n                style=\"width: 155px\"\n                class=\"btn btn-outline-primary\"\n                id=\"dropdownMenuButton\"\n                ngbDropdownToggle\n              >\n                {{ UserName }}\n              </button>\n              <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton\">\n                <button\n                *ngIf=\"showmyaccount\"\n                ngbDropdownItem\n                (click)=\"myAccount()\"\n              >\n                My Account\n              </button>\n              <button\n                *ngIf=\"showcompanyaccount\"\n                ngbDropdownItem\n                (click)=\"systemAccount()\"\n              >\n                My Company Profile\n              </button>\n              <button\n                *ngIf=\"showadminaccount\"\n                ngbDropdownItem\n                (click)=\"adminAccount()\"\n              >\n              Admin Settings\n              </button>\n                <button ngbDropdownItem (click)=\"Logout()\" style=\"z-index: -1;\">Logout</button>\n              </div>\n            </div>\n            <ul></ul>\n          </div>\n        </div>\n      </nav>\n    </div>\n    <hr id=\"about\" class=\"bg-success textcolor\" style=\"height: 2px\" />\n    <!-- header end -->\n\n    <div\n      class=\"pcoded-main-container d-flex flex-fill\"\n      style=\"margin-top: 64px; z-index: -1; position: revert\"\n    >\n      <div class=\"pcoded-wrapper\">\n        <nav\n          id=\"main_navbar\"\n          class=\"pcoded-navbar h-100\"\n          [exclude]=\"'#mobile-collapse'\"\n          navbar-theme=\"themelight1\"\n          active-item-theme=\"theme4\"\n          sub-item-theme=\"theme2\"\n          active-item-style=\"style0\"\n          pcoded-navbar-position=\"fixed\"\n          pcoded-header-position=\"fixed\"\n        >\n          <div class=\"sidebar_toggle\">\n            <a href=\"javascript:;\"><i class=\"icon-close icons\"></i></a>\n          </div>\n          <div class=\"pcoded-inner-navbar main-menu\" appAccordion>\n            <perfect-scrollbar\n              [style.max-width]=\"'100%'\"\n              [style.max-height]=\"'calc(100vh - 56px)'\"\n            >\n              <div>\n                <div *ngFor=\"let asideItems of menuItems.getAll('company')\">\n                  <div class=\"pcoded-navigatio-lavel\" menu-title-theme=\"theme5\">\n                    {{ asideItems.label }}\n                  </div>\n                  <ul\n                    class=\"pcoded-item pcoded-left-item\"\n                    item-border=\"none\"\n                    item-border-style=\"solid\"\n                    subitem-border=\"solid\"\n                    *ngFor=\"let asideItem of asideItems.main\"\n                    appAccordionLink\n                    group=\"{{ asideItem.state }}\"\n                  >\n                    <li\n                      [routerLinkActive]=\"['active']\"\n                      *ngIf=\"asideItem.type === 'link'\"\n                      appAccordionLink\n                      group=\"{{ asideItem.state }}\"\n                    >\n                      <a\n                        [routerLink]=\"[\n                          '/',\n                          asideItem.main_state,\n                          asideItem.state\n                        ]\"\n                        target=\"{{ asideItem.target ? '_blank' : '_self' }}\"\n                        appAccordionToggle\n                        *ngIf=\"asideItem.main_state; else mainContent\"\n                      >\n                        <span class=\"pcoded-micon\"\n                          ><i class=\"{{ asideItem.icon }}\"></i\n                        ></span>\n                        <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\n                        <span\n                          *ngFor=\"let asideBadge of asideItem.badge\"\n                          class=\"pcoded-badge label label-{{ asideBadge.type }}\"\n                          >{{ asideBadge.value }}</span\n                        >\n                        <span class=\"pcoded-mcaret\"></span>\n                      </a>\n                      <ng-template #mainContent>\n                        <a\n                          [routerLink]=\"['/', asideItem.state]\"\n                          target=\"{{ asideItem.target ? '_blank' : '_self' }}\"\n                          appAccordionToggle\n                        >\n                          <span class=\"pcoded-micon\"\n                            ><i class=\"{{ asideItem.icon }}\"></i\n                          ></span>\n                          <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\n                          <span\n                            *ngFor=\"let asideBadge of asideItem.badge\"\n                            class=\"pcoded-badge label label-{{\n                              asideBadge.type\n                            }}\"\n                            >{{ asideBadge.value }}</span\n                          >\n                          <span class=\"pcoded-mcaret\"></span>\n                        </a>\n                      </ng-template>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </perfect-scrollbar>\n          </div>\n        </nav>\n        <div class=\"pcoded-content\" style=\"z-index: -1;position: inherit;\">\n          <div class=\"pcoded-inner-content\">\n            <div class=\"main-body\">\n              <div class=\"page-wrapper\">\n                <app-title></app-title>\n                <div class=\"page-body\">\n                  <router-outlet><app-spinner></app-spinner></router-outlet>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Footer start -->\n\n    <section id=\"NuuEDScore\" class=\"textcolor\">\n      <div\n        class=\"container text-md-left mr-auto d-block text-center segment-one\"\n      >\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-md-6\">\n            <div class=\"thumbnail\">\n              <a\n                href=\"{{ configURL }}\"\n                title=\"Return to Homepage\"\n                alt=\"NueedScore\"\n              >\n              <img\n                class=\"img-fluid\"\n                src=\"assets/content/NuLogo_Small_White.svg\"\n                class=\"img-fluid1\"\n                alt=\"Return to Homepage\"\n              />\n            </a>\n            </div>\n            <p>\n              NuuEDSCORE provides a platform of online services which help\n              learners, students, and trainees of all ages improve their skills.\n              <br />\n              <br />\n              Our service employs continuous learner analytics and adaptive\n              learning technologies to discover each personality type and boost\n              skills based on the learning style assessment score. The\n              custom-tailored content is specific to each user's personality and\n              learning style.\n              <br />\n              <br />\n              Become the best version of you with NuuEDScore!\n              <br />\n            </p>\n          </div>\n          <div class=\"col-md-6 d-block\">\n            <ul\n              class=\"text-md-right mx-auto text-center segment-one\"\n              style=\"list-style: none; margin-top: 40px\"\n            >\n              <li class=\"nav-item\">\n                <a style=\"color: white\" href=\"#\">Blog</a>\n              </li>\n              <li class=\"nav-item\">\n                <a style=\"color: white\" href=\"/about.html\">About Us</a>\n              </li>\n              <li class=\"nav-item\">\n                <a style=\"color: white\" href=\"#\">FAQ</a>\n              </li>\n              <li class=\"nav-item\">\n                <a style=\"color: white\" href=\"{{ configURL }}app/#/auth/registration\">Register</a>\n              </li>\n            </ul>\n\n            <div\n              class=\"contactdisplay d-block text-md-right text-center segment-one\"\n            >\n              <h2 style=\"font-size: 14px\">\n                <b> CONTACT US </b>\n              </h2>\n              <p>\n                650 Castro Street <br />Suite #120-276 <br />\n                Mountain View, Ca 94041<br />\n                <br /><a href=\"info@nuueducation.com\" style=\"color: white\"\n                  >info@nuueducation.com</a\n                >\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <Footer>\n      <p class=\"footer-bottam-text text-center text-white\">\n        © NuuEDSCORE LLC 2020 | <a href=\"#\"><span class=\"text-white\">Privacy Policy</span></a>\n      </p>\n    </Footer>\n    <!-- footer end -->\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/settings/breadcrumbs/breadcrumbs.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/settings/breadcrumbs/breadcrumbs.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsSettingsBreadcrumbsBreadcrumbsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-header\">\n  <div class=\"page-header-title\">\n    <span *ngFor=\"let breadcrumb of breadcrumbs; let last = last\"><h4 *ngIf=\"last\">{{ breadcrumb.label }}</h4></span>\n  </div>\n  <div class=\"page-header-breadcrumb\">\n    <ul class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\">\n        <a [routerLink]=\"'/'\">\n          <i class=\"icofont icofont-home\"></i>\n        </a>\n      </li>\n      <li class=\"breadcrumb-item\" *ngFor=\"let breadcrumb of breadcrumbs\">\n        <a [ngClass]=\"breadcrumb.status === false ? 'not-active': ''\" [routerLink]=\"breadcrumb.url\">{{breadcrumb.label}}</a>\n      </li>\n    </ul>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/settings/settings.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/settings/settings.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutsSettingsSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div\n  id=\"pcoded\"\n  class=\"pcoded iscollapsed\"\n  theme-layout=\"vertical\"\n  vertical-placement=\"left\"\n  vertical-layout=\"wide\"\n  vnavigation-view=\"view1\"\n>\n  <div class=\"pcoded-overlay-box\"></div>\n  <div class=\"pcoded-container navbar-wrapper\">\n    <!-- Header start -->\n    <div class=\"container\">\n      <nav class=\"navbar navbar-expand-lg position-sticky\" id=\"mainNav\">\n        <div class=\"container\">\n          <div class=\"imgsetting mr-5\">\n            <a href=\"{{ configURL }}\"\n              ><img\n                src=\"assets/content/NuLogo_Small.svg\"\n                style=\"width: 90px; height: 50px\"\n            /></a>\n          </div>\n          <div class=\"navbar-collapse\" id=\"navbarResponsive\">\n            <div ngbDropdown class=\"d-inline-block\">\n              <button\n                style=\"width: 155px\"\n                class=\"btn btn-outline-primary\"\n                id=\"dropdownMenuButton\"\n                ngbDropdownToggle\n              >\n                {{ UserName }}\n              </button>\n\n              <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton\">\n                <button\n                *ngIf=\"showmyaccount\"\n                ngbDropdownItem\n                (click)=\"myAccount()\"\n              >\n                My Account\n              </button>\n              <button\n                *ngIf=\"showcompanyaccount\"\n                ngbDropdownItem\n                (click)=\"systemAccount()\"\n              >\n                My Company Profile\n              </button>\n              <button\n                *ngIf=\"showadminaccount\"\n                ngbDropdownItem\n                (click)=\"adminAccount()\"\n              >\n                Admin Account\n              </button>\n                <button ngbDropdownItem (click)=\"Logout()\" style=\"z-index: -1;\">Logout</button>\n              </div>\n            </div>\n            <ul></ul>\n          </div>\n        </div>\n      </nav>\n    </div>\n    <hr id=\"about\" class=\"bg-success textcolor\" style=\"height: 2px\" />\n    <!-- header end -->\n\n    <div\n      class=\"pcoded-main-container h-100\"\n      style=\"margin-top: 64px; z-index: 1; position: revert;\"\n    >\n      <div class=\"pcoded-wrapper\">\n        <nav\n          id=\"main_navbar\"\n          class=\"pcoded-navbar\"\n          [exclude]=\"'#mobile-collapse'\"\n          navbar-theme=\"themelight1\"\n          active-item-theme=\"theme4\"\n          sub-item-theme=\"theme2\"\n          active-item-style=\"style0\"\n          pcoded-navbar-position=\"fixed\"\n          pcoded-header-position=\"fixed\"\n        >\n          <div class=\"sidebar_toggle\">\n            <a href=\"javascript:;\"><i class=\"icon-close icons\"></i></a>\n          </div>\n          <div class=\"pcoded-inner-navbar main-menu\" appAccordion>\n            <perfect-scrollbar\n              [style.max-width]=\"'100%'\"\n              [style.max-height]=\"'calc(100vh - 56px)'\"\n            >\n              <div>\n                <div *ngFor=\"let asideItems of menuItems.getAll('account')\">\n                  <div class=\"pcoded-navigatio-lavel\" menu-title-theme=\"theme5\">\n                    {{ asideItems.label }}\n                  </div>\n                  <ul\n                    class=\"pcoded-item pcoded-left-item\"\n                    item-border=\"none\"\n                    item-border-style=\"solid\"\n                    subitem-border=\"solid\"\n                    *ngFor=\"let asideItem of asideItems.main\"\n                    appAccordionLink\n                    group=\"{{ asideItem.state }}\"\n                  >\n                    <li\n                      [routerLinkActive]=\"['active']\"\n                      *ngIf=\"asideItem.type === 'link'\"\n                      appAccordionLink\n                      group=\"{{ asideItem.state }}\"\n                    >\n                      <a\n                        [routerLink]=\"[\n                          '/',\n                          asideItem.main_state,\n                          asideItem.state\n                        ]\"\n                        target=\"{{ asideItem.target ? '_blank' : '_self' }}\"\n                        appAccordionToggle\n                        *ngIf=\"asideItem.main_state; else mainContent\"\n                      >\n                        <span class=\"pcoded-micon\"\n                          ><i class=\"{{ asideItem.icon }}\"></i\n                        ></span>\n                        <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\n                        <span\n                          *ngFor=\"let asideBadge of asideItem.badge\"\n                          class=\"pcoded-badge label label-{{ asideBadge.type }}\"\n                          >{{ asideBadge.value }}</span\n                        >\n                        <span class=\"pcoded-mcaret\"></span>\n                      </a>\n                      <ng-template #mainContent>\n                        <a\n                          [routerLink]=\"['/', asideItem.state]\"\n                          target=\"{{ asideItem.target ? '_blank' : '_self' }}\"\n                          appAccordionToggle\n                        >\n                          <span class=\"pcoded-micon\"\n                            ><i class=\"{{ asideItem.icon }}\"></i\n                          ></span>\n                          <span class=\"pcoded-mtext\">{{ asideItem.name }}</span>\n                          <span\n                            *ngFor=\"let asideBadge of asideItem.badge\"\n                            class=\"pcoded-badge label label-{{\n                              asideBadge.type\n                            }}\"\n                            >{{ asideBadge.value }}</span\n                          >\n                          <span class=\"pcoded-mcaret\"></span>\n                        </a>\n                      </ng-template>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </perfect-scrollbar>\n          </div>\n        </nav>\n        <div class=\"pcoded-content\"  style=\"z-index: -1;position: inherit;\">\n          <div class=\"pcoded-inner-content\">\n            <div class=\"main-body\">\n              <div class=\"page-wrapper\">\n                <app-title></app-title>\n                <div class=\"page-body\">\n                  <router-outlet><app-spinner></app-spinner></router-outlet>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Footer start -->\n\n    <section id=\"NuuEDScore\" class=\"textcolor\">\n      <div\n        class=\"container text-md-left mr-auto d-block text-center segment-one\"\n      >\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-md-6\">\n            <div class=\"thumbnail\">\n              <a\n              href=\"{{ configURL }}\"\n              title=\"Return to Homepage\"\n              alt=\"NueedScore\"\n            >\n              <img\n                class=\"img-fluid\"\n                src=\"assets/content/NuLogo_Small_White.svg\"\n                class=\"img-fluid1\"\n                alt=\"Return to Homepage\"\n              />\n              </a>\n            </div>\n            <p>\n              NuuEDSCORE provides a platform of online services which help\n              learners, students, and trainees of all ages improve their skills.\n              <br />\n              <br />\n              Our service employs continuous learner analytics and adaptive\n              learning technologies to uncover each user’s personality type and deliver content to boost\n              skills based on their learning style assessment score. The\n              custom-tailored content is specific to each user's personality and\n              learning style.\n              <br />\n              <br />\n              Become the best version of you with NuuEDScore!\n              <br />\n            </p>\n          </div>\n          <div class=\"col-md-6 d-block\">\n            <ul\n              class=\"text-md-right mx-auto text-center segment-one\"\n              style=\"list-style: none; margin-top: 40px\"\n            >\n              <li class=\"nav-item\">\n                <a style=\"color: white\" href=\"#\">Blog</a>\n              </li>\n              <li class=\"nav-item\">\n                <a style=\"color: white\" href=\"/about.html\">About Us</a>\n              </li>\n              <li class=\"nav-item\">\n                <a style=\"color: white\" href=\"#\">FAQ</a>\n              </li>\n              <li class=\"nav-item\">\n                <a style=\"color: white\" href=\"{{ configURL }}app/#/auth/registration\">Register</a>\n              </li>\n            </ul>\n\n            <div\n              class=\"contactdisplay d-block text-md-right text-center segment-one\"\n            >\n              <h2 style=\"font-size: 14px\">\n                <b> CONTACT US </b>\n              </h2>\n              <p>\n                650 Castro Street <br />Suite #120-276 <br />\n                Mountain View, Ca 94041<br />\n                <br /><a href=\"info@nuueducation.com\" style=\"color: white\"\n                  >info@nuueducation.com</a\n                >\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <Footer>\n      <p class=\"footer-bottam-text text-center text-white\">\n        © NuuEDSCORE LLC 2020 | <a href=\"#\"><span class=\"text-white\">Privacy Policy</span></a>\n      </p>\n    </Footer>\n    <!-- footer end -->\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/card/card.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/card/card.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedCardCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card {{ fullCard }}\" [@cardClose]=\"cardClose\" [ngClass]=\"cardClass\">\n  <div class=\"card-header\" *ngIf=\"title\">\n    <h5>{{ title }}</h5>\n    <span *ngIf=\"!classHeader\">{{ headerContent }}</span>\n    <span *ngIf=\"classHeader\">\n      <ng-content select=\".code-header\"></ng-content>\n    </span>\n    <div class=\"card-header-right\">\n      <i class=\"icofont icofont-rounded-down\" cardToggleEvent (click)=\"toggleCard()\"></i>\n      <i class=\"fa {{ fullCardIcon }} full-card\" (click)=\"fullScreen($event)\"></i>\n      <i class=\"icofont icofont-refresh\" cardRefresh></i>\n      <i class=\"icofont icofont-close-circled\" (click)=\"closeCard()\"></i>\n    </div>\n  </div>\n\n  <div [@cardToggle]=\"cardToggle\">\n    <div class=\"card-body\" [ngClass]=\"blockClass\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modal-animation/modal-animation.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modal-animation/modal-animation.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedModalAnimationModalAnimationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"md-modal\" [ngClass]=\"modalClass\" id=\"{{modalID}}\">\n  <div class=\"md-content\" [ngClass]=\"contentClass\">\n    <ng-content></ng-content>\n  </div>\n</div>\n<div *ngIf=\"(backDrop); else: backDropOver\" class=\"md-overlay\"></div>\n<ng-template #backDropOver>\n  <div class=\"md-overlay\" (click)=\"close(modalID)\"></div>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modal-basic/modal-basic.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modal-basic/modal-basic.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedModalBasicModalBasicComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div (click)=\"onContainerClicked($event)\" class=\"basic modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': visibleAnimate}\"\n     [ngStyle]=\"{'display': visible ? 'block' : 'none', 'opacity': visibleAnimate ? 1 : 0}\">\n  <div class=\"modal-dialog\" [ngClass]=\"dialogClass\">\n    <div class=\"modal-content\">\n      <div *ngIf=\"!hideHeader\" class=\"modal-header\">\n        <ng-content select=\".app-modal-header\"></ng-content>\n      </div>\n      <div class=\"modal-body\">\n        <ng-content select=\".app-modal-body\"></ng-content>\n      </div>\n      <div *ngIf=\"!hideFooter\" class=\"modal-footer\">\n        <ng-content select=\".app-modal-footer\"></ng-content>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/spinner/spinner.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/spinner/spinner.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedSpinnerSpinnerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"http-loader\" *ngIf=\"isSpinnerVisible\">\n  <div class=\"loader-bg\">\n    <!--sk-cube-grid-->\n    <div class=\"sk-cube-grid\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skCubeGrid\">\n      <div class=\"sk-cube sk-cube1\" [style.background-color]='backgroundColor'></div>\n      <div class=\"sk-cube sk-cube2\" [style.background-color]='backgroundColor'></div>\n      <div class=\"sk-cube sk-cube3\" [style.background-color]='backgroundColor'></div>\n      <div class=\"sk-cube sk-cube4\" [style.background-color]='backgroundColor'></div>\n      <div class=\"sk-cube sk-cube5\" [style.background-color]='backgroundColor'></div>\n      <div class=\"sk-cube sk-cube6\" [style.background-color]='backgroundColor'></div>\n      <div class=\"sk-cube sk-cube7\" [style.background-color]='backgroundColor'></div>\n      <div class=\"sk-cube sk-cube8\" [style.background-color]='backgroundColor'></div>\n      <div class=\"sk-cube sk-cube9\" [style.background-color]='backgroundColor'></div>\n    </div>\n    <!--sk-rotating-plane-->\n    <div class=\"sk-rotating-plane colored-parent\" *ngIf=\"spinner === Spinkit.skRotatingPlane\" [style.background-color]='backgroundColor'></div>\n    <!--sk-double-bounce-->\n    <div class=\"sk-double-bounce\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skDoubleBounce\">\n      <div class=\"double-bounce1\" [style.background-color]='backgroundColor'></div>\n      <div class=\"double-bounce2\" [style.background-color]='backgroundColor'></div>\n    </div>\n    <!--sk-wave-->\n    <div class=\"sk-wave\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skWave\">\n      <div class=\"sk-rect sk-rect1\" [style.background-color]='backgroundColor'></div>\n      <div class=\"sk-rect sk-rect2\" [style.background-color]='backgroundColor'></div>\n      <div class=\"sk-rect sk-rect3\" [style.background-color]='backgroundColor'></div>\n      <div class=\"sk-rect sk-rect4\" [style.background-color]='backgroundColor'></div>\n      <div class=\"sk-rect sk-rect5\" [style.background-color]='backgroundColor'></div>\n    </div>\n    <!--sk-wandering-cubes-->\n    <div class=\"sk-wandering-cubes\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skWanderingCubes\">\n      <div class=\"sk-cube sk-cube1\" [style.background-color]='backgroundColor'></div>\n      <div class=\"sk-cube sk-cube2\" [style.background-color]='backgroundColor'></div>\n    </div>\n    <!--sk-spinner-pulse-->\n    <div class=\"sk-spinner sk-spinner-pulse colored-parent\" *ngIf=\"spinner === Spinkit.skSpinnerPulse\" [style.background-color]='backgroundColor'></div>\n    <!--sk-chasing-dots-->\n    <div class=\"sk-chasing-dots\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skChasingDots\">\n      <div class=\"sk-child sk-dot1\" [style.background-color]='backgroundColor'></div>\n      <div class=\"sk-child sk-dot2\" [style.background-color]='backgroundColor'></div>\n    </div>\n    <!--sk-three-bounce-->\n    <div class=\"sk-three-bounce\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skThreeBounce\">\n      <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\n      <div class=\"sk-child sk-bounce2\" [style.background-color]='backgroundColor'></div>\n      <div class=\"sk-child sk-bounce3\" [style.background-color]='backgroundColor'></div>\n    </div>\n    <!-- material-line -->\n    <div class=\"sk-line-material\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skLine\">\n      <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\n    </div>\n\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/Components/alert/alert.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/Components/alert/alert.component.ts ***!
    \*****************************************************/

  /*! exports provided: AlertComponent */

  /***/
  function srcAppComponentsAlertAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return AlertComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services */
    "./src/app/services/index.ts");
    /* harmony import */


    var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! primeng/api */
    "./node_modules/primeng/fesm2015/primeng-api.js");

    var AlertComponent = /*#__PURE__*/function () {
      function AlertComponent(alertService, messageService, ngZone) {
        _classCallCheck(this, AlertComponent);

        this.alertService = alertService;
        this.messageService = messageService;
        this.ngZone = ngZone; //  alert("in cons");
      }

      _createClass(AlertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.subscription = this.alertService.getAlert().subscribe(function (message) {
            switch (message && message.type) {
              case "success":
                _this.ngZone.run(function () {
                  _this.messageService.add({
                    severity: "success",
                    summary: "Success Message",
                    detail: message.text,
                    life: 10000
                  });
                });

                break;

              case "error":
                _this.ngZone.run(function () {
                  _this.messageService.add({
                    severity: "error",
                    summary: "Error Message",
                    detail: message.text,
                    life: 10000
                  });
                });

                break;

              case "info":
                _this.ngZone.run(function () {
                  _this.messageService.add({
                    severity: "info",
                    summary: "Info Message",
                    detail: message.text,
                    life: 10000
                  });
                });

                break;

              case "warn":
                _this.ngZone.run(function () {
                  _this.messageService.add({
                    severity: "warn",
                    summary: "Warn Message",
                    detail: message.text,
                    life: 10000
                  });
                });

                break;
            }

            _this.message = message;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return AlertComponent;
    }();

    AlertComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
      }, {
        type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "alert",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alert.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Components/alert/alert.component.html"))["default"],
      providers: [primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"]]
    })], AlertComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layouts/auth/auth.component */
    "./src/app/layouts/auth/auth.component.ts");
    /* harmony import */


    var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./helpers/auth.guard */
    "./src/app/helpers/auth.guard.ts");
    /* harmony import */


    var _layouts_assessment_assessmentLayout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./layouts/assessment/assessmentLayout.component */
    "./src/app/layouts/assessment/assessmentLayout.component.ts");
    /* harmony import */


    var _layouts_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./layouts/settings/settings.component */
    "./src/app/layouts/settings/settings.component.ts");
    /* harmony import */


    var _layouts_companyLayout_companyLayout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layouts/companyLayout/companyLayout.component */
    "./src/app/layouts/companyLayout/companyLayout.component.ts");
    /* harmony import */


    var _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./layouts/admin/admin.component */
    "./src/app/layouts/admin/admin.component.ts");

    var routes = [{
      path: "",
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
      component: _layouts_assessment_assessmentLayout_component__WEBPACK_IMPORTED_MODULE_5__["AssessmentLayoutComponent"],
      children: [{
        path: "",
        redirectTo: "assessment",
        pathMatch: "full"
      }, {
        path: "assessment",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | assessment-assessment-module */
          "assessment-assessment-module").then(__webpack_require__.bind(null,
          /*! ./assessment/assessment.module */
          "./src/app/assessment/assessment.module.ts")).then(function (m) {
            return m.AssessmentModule;
          });
        }
      }, {
        path: "personality",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | Components-forms-AssessmentResult-assessmentResult-module */
          [__webpack_require__.e("default~Components-forms-Account-profile-module~Components-forms-Admin-admin-module~Components-forms~7466630e"), __webpack_require__.e("default~Components-forms-Account-profile-module~Components-forms-Admin-admin-module~Components-forms~f978326e"), __webpack_require__.e("Components-forms-AssessmentResult-assessmentResult-module")]).then(__webpack_require__.bind(null,
          /*! ./Components/forms/AssessmentResult/assessmentResult.module */
          "./src/app/Components/forms/AssessmentResult/assessmentResult.module.ts")).then(function (m) {
            return m.AssessmentResultElementsModule;
          });
        }
      }]
    }, {
      path: "settings",
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
      component: _layouts_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"],
      children: [{
        path: "",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | Components-forms-Account-profile-module */
          [__webpack_require__.e("default~Components-forms-Account-profile-module~Components-forms-Admin-admin-module~Components-forms~7466630e"), __webpack_require__.e("default~Components-forms-Account-profile-module~Components-forms-Admin-admin-module~Components-forms~f978326e"), __webpack_require__.e("Components-forms-Account-profile-module")]).then(__webpack_require__.bind(null,
          /*! ./Components/forms/Account/profile.module */
          "./src/app/Components/forms/Account/profile.module.ts")).then(function (m) {
            return m.ProfileElementsModule;
          });
        }
      }]
    }, {
      path: "company",
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
      component: _layouts_companyLayout_companyLayout_component__WEBPACK_IMPORTED_MODULE_7__["CompanyLayoutComponent"],
      children: [{
        path: "",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | Components-forms-Company-company-module */
          [__webpack_require__.e("default~Components-forms-Account-profile-module~Components-forms-Admin-admin-module~Components-forms~7466630e"), __webpack_require__.e("default~Components-forms-Account-profile-module~Components-forms-Admin-admin-module~Components-forms~f978326e"), __webpack_require__.e("Components-forms-Company-company-module")]).then(__webpack_require__.bind(null,
          /*! ./Components/forms/Company/company.module */
          "./src/app/Components/forms/Company/company.module.ts")).then(function (m) {
            return m.CompanyElementsModule;
          });
        }
      }]
    }, {
      path: "admin",
      canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
      component: _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"],
      children: [{
        path: "",
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | Components-forms-Admin-admin-module */
          [__webpack_require__.e("default~Components-forms-Account-profile-module~Components-forms-Admin-admin-module~Components-forms~7466630e"), __webpack_require__.e("default~Components-forms-Account-profile-module~Components-forms-Admin-admin-module~Components-forms~f978326e"), __webpack_require__.e("default~Components-forms-Admin-admin-module~login-basic-login-basic-login-module~social-login-social~282b6259"), __webpack_require__.e("Components-forms-Admin-admin-module")]).then(__webpack_require__.bind(null,
          /*! ./Components/forms/Admin/admin.module */
          "./src/app/Components/forms/Admin/admin.module.ts")).then(function (m) {
            return m.AdminElementsModule;
          });
        }
      }]
    }, {
      path: "",
      component: _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
      children: [{
        path: "auth",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | auth-auth-module */
          "auth-auth-module").then(__webpack_require__.bind(null,
          /*! ./auth/auth.module */
          "./src/app/auth/auth.module.ts")).then(function (m) {
            return m.AuthModule;
          });
        }
      }]
    }, {
      path: "**",
      redirectTo: "auth"
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host ::ng-deep button {\n  margin-right: 0.25em;\n}\n\n:host ::ng-deep .custom-toast .ui-toast-message {\n  background: #FC466B;\n  background: -webkit-gradient(linear, left top, right top, from(#3F5EFB), to(#FC466B));\n  background: linear-gradient(to right, #3F5EFB, #FC466B);\n}\n\n:host ::ng-deep .custom-toast .ui-toast-message div {\n  color: #ffffff;\n}\n\n:host ::ng-deep .custom-toast .ui-toast-message.ui-toast-message-info .ui-toast-close-icon {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NndF9qcHJfbGluX3Bhd2FuL0RvY3VtZW50cy9udXVlZC1wcm9kL251dWVkLXVpL251dWVkLXVpLWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBRUEscUZBQUE7RUFBQSx1REFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgOjpuZy1kZWVwIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAuMjVlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tdG9hc3QgLnVpLXRvYXN0LW1lc3NhZ2Uge1xuICAgIGJhY2tncm91bmQ6ICNGQzQ2NkI7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMzRjVFRkIsICNGQzQ2NkIpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzNGNUVGQiwgI0ZDNDY2Qik7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLXRvYXN0IC51aS10b2FzdC1tZXNzYWdlIGRpdiB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLXRvYXN0IC51aS10b2FzdC1tZXNzYWdlLnVpLXRvYXN0LW1lc3NhZ2UtaW5mbyAudWktdG9hc3QtY2xvc2UtaWNvbiB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59IiwiOmhvc3QgOjpuZy1kZWVwIGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMC4yNWVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmN1c3RvbS10b2FzdCAudWktdG9hc3QtbWVzc2FnZSB7XG4gIGJhY2tncm91bmQ6ICNGQzQ2NkI7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjM0Y1RUZCLCAjRkM0NjZCKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjM0Y1RUZCLCAjRkM0NjZCKTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdXN0b20tdG9hc3QgLnVpLXRvYXN0LW1lc3NhZ2UgZGl2IHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY3VzdG9tLXRvYXN0IC51aS10b2FzdC1tZXNzYWdlLnVpLXRvYXN0LW1lc3NhZ2UtaW5mbyAudWktdG9hc3QtY2xvc2UtaWNvbiB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services */
    "./src/app/services/index.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router, authenticationService) {
        var _this2 = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.authenticationService = authenticationService;
        this.title = "app";
        this.authenticationService.currentUser.subscribe(function (x) {
          return _this2.currentUser = x;
        });
      }

      _createClass(AppComponent, [{
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigate(["/login"]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
              return;
            }

            window.scrollTo(0, 0);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./layouts/auth/auth.component */
    "./src/app/layouts/auth/auth.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/fesm2015/ng2-charts.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./helpers */
    "./src/app/helpers/index.ts");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var _layouts_assessment_assessmentLayout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./layouts/assessment/assessmentLayout.component */
    "./src/app/layouts/assessment/assessmentLayout.component.ts");
    /* harmony import */


    var _Components_alert_alert_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./Components/alert/alert.component */
    "./src/app/Components/alert/alert.component.ts");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/fesm2015/primeng-toast.js");
    /* harmony import */


    var _layouts_settings_settings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./layouts/settings/settings.component */
    "./src/app/layouts/settings/settings.component.ts");
    /* harmony import */


    var _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./layouts/admin/admin.component */
    "./src/app/layouts/admin/admin.component.ts");
    /* harmony import */


    var _layouts_companyLayout_companyLayout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./layouts/companyLayout/companyLayout.component */
    "./src/app/layouts/companyLayout/companyLayout.component.ts");
    /* harmony import */


    var _layouts_settings_title_title_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./layouts/settings/title/title.component */
    "./src/app/layouts/settings/title/title.component.ts");
    /* harmony import */


    var _layouts_settings_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./layouts/settings/breadcrumbs/breadcrumbs.component */
    "./src/app/layouts/settings/breadcrumbs/breadcrumbs.component.ts");
    /* harmony import */


    var ngx_loading__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ngx-loading */
    "./node_modules/ngx-loading/fesm2015/ngx-loading.js"); // import {DynamicDialogModule} from 'primeng/dynamicdialog';
    // import {ConfirmDialogModule} from 'primeng/confirmdialog';
    // import {DialogModule} from 'primeng/dialog';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _layouts_settings_settings_component__WEBPACK_IMPORTED_MODULE_18__["SettingsComponent"], _layouts_assessment_assessmentLayout_component__WEBPACK_IMPORTED_MODULE_15__["AssessmentLayoutComponent"], _layouts_settings_title_title_component__WEBPACK_IMPORTED_MODULE_21__["TitleComponent"], _layouts_settings_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_22__["BreadcrumbsComponent"], _layouts_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"], _Components_alert_alert_component__WEBPACK_IMPORTED_MODULE_16__["AlertComponent"], _layouts_companyLayout_companyLayout_component__WEBPACK_IMPORTED_MODULE_20__["CompanyLayoutComponent"], _layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_19__["AdminComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_17__["ToastModule"], _material_module__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_23__["NgxLoadingModule"].forRoot({}) // DialogModule,
      // ConfirmDialogModule,
      // DynamicDialogModule
      ],
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_9__["HashLocationStrategy"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
        useClass: _helpers__WEBPACK_IMPORTED_MODULE_12__["JwtInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
        useClass: _helpers__WEBPACK_IMPORTED_MODULE_12__["ErrorInterceptor"],
        multi: true
      }, _helpers__WEBPACK_IMPORTED_MODULE_12__["fakeBackendProvider"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/helpers/auth.guard.ts":
  /*!***************************************!*\
    !*** ./src/app/helpers/auth.guard.ts ***!
    \***************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppHelpersAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services */
    "./src/app/services/index.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, authenticationService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.authenticationService = authenticationService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var currentToken = this.authenticationService.currentTokenValue;

          if (currentToken) {
            return true;
          } // not logged in so redirect to login page with the return url


          this.router.navigate(['/auth/login']); //this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});

          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/helpers/constant.ts":
  /*!*************************************!*\
    !*** ./src/app/helpers/constant.ts ***!
    \*************************************/

  /*! exports provided: AuthURL, AssessmentURL, carrierdeck, bigfive, learingStyle, core, superhero, introvertextrovert, perseverance, persuasion, bigfiveid, learingStyleid, carrierdeckid, coreid, superheroid, introvertextrovertid, perseveranceid, persuasionid, maleavatar, femaleavatar, CompanyURL, planstatus */

  /***/
  function srcAppHelpersConstantTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthURL", function () {
      return AuthURL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssessmentURL", function () {
      return AssessmentURL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "carrierdeck", function () {
      return carrierdeck;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bigfive", function () {
      return bigfive;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "learingStyle", function () {
      return learingStyle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "core", function () {
      return core;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "superhero", function () {
      return superhero;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "introvertextrovert", function () {
      return introvertextrovert;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "perseverance", function () {
      return perseverance;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "persuasion", function () {
      return persuasion;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bigfiveid", function () {
      return bigfiveid;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "learingStyleid", function () {
      return learingStyleid;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "carrierdeckid", function () {
      return carrierdeckid;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "coreid", function () {
      return coreid;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "superheroid", function () {
      return superheroid;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "introvertextrovertid", function () {
      return introvertextrovertid;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "perseveranceid", function () {
      return perseveranceid;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "persuasionid", function () {
      return persuasionid;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "maleavatar", function () {
      return maleavatar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "femaleavatar", function () {
      return femaleavatar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyURL", function () {
      return CompanyURL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "planstatus", function () {
      return planstatus;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AuthURL = "nuued-auth/";
    var AssessmentURL = "nuued-assessment/api/v1/";
    var carrierdeck = "career-deck";
    var bigfive = "big-five";
    var learingStyle = "learning-style";
    var core = "core";
    var superhero = "super-hero";
    var introvertextrovert = "introvert-extrovert";
    var perseverance = "perseverance";
    var persuasion = "persuasion";
    var bigfiveid = 1;
    var learingStyleid = 2;
    var carrierdeckid = 3;
    var coreid = 4;
    var superheroid = 5;
    var introvertextrovertid = 6;
    var perseveranceid = 7;
    var persuasionid = 8;
    var maleavatar = "assets/content/avatar-4.png";
    var femaleavatar = "assets/content/avatar-5.png";
    var CompanyURL = "nuued-org/api/v1/";
    var planstatus = "Active";
    /***/
  },

  /***/
  "./src/app/helpers/error.interceptor.ts":
  /*!**********************************************!*\
    !*** ./src/app/helpers/error.interceptor.ts ***!
    \**********************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcAppHelpersErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _services_company_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/company.service */
    "./src/app/services/company.service.ts");
    /* harmony import */


    var _services_admin_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/admin.service */
    "./src/app/services/admin.service.ts");

    var ErrorInterceptor = /*#__PURE__*/function () {
      function ErrorInterceptor(authenticationService, companyService, alertService, adminservice) {
        _classCallCheck(this, ErrorInterceptor);

        this.authenticationService = authenticationService;
        this.companyService = companyService;
        this.alertService = alertService;
        this.adminservice = adminservice;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this3 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (evt) {
            if (evt instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
              if (evt.body && evt.body.message) _this3.alertService.success(evt.body.message);
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            var error = err.message || err.statusText;

            if (err.status === 401) {
              // auto logout if 401 response returned from api
              if (!!err.error && err.error.message) error = err.error.message;else {
                err.error.message = "Something went wrong,please contact your system administrator!";

                _this3.authenticationService.logout();

                location.reload(true);
              }
            }

            if (err.status === 201) {
              if (!!err.error && err.error.message) error = err.error.message;

              _this3.alertService.success(err.error.message);
            }

            if (err.status === 404) {}

            if (err.status === 403) {
              if (!!err.error && err.error.message) error = err.error.message;
            }

            if (err.status === 400) {
              if (!!err.error && err.error.message) error = err.error.message;else if (!!err.error && err.error) error = err.error;
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }, {
        type: _services_company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }, {
        type: _services_admin_service__WEBPACK_IMPORTED_MODULE_7__["AdminService"]
      }];
    };

    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/helpers/fake-backend.ts":
  /*!*****************************************!*\
    !*** ./src/app/helpers/fake-backend.ts ***!
    \*****************************************/

  /*! exports provided: FakeBackendInterceptor, fakeBackendProvider */

  /***/
  function srcAppHelpersFakeBackendTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () {
      return FakeBackendInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () {
      return fakeBackendProvider;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); // array in local storage for registered users


    var users = JSON.parse(localStorage.getItem('users')) || [];

    var FakeBackendInterceptor = /*#__PURE__*/function () {
      function FakeBackendInterceptor() {
        _classCallCheck(this, FakeBackendInterceptor);
      }

      _createClass(FakeBackendInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var url = request.url,
              method = request.method,
              headers = request.headers,
              body = request.body; // wrap in delayed observable to simulate server api call

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(handleRoute)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());

          function handleRoute() {
            switch (true) {
              // case url.endsWith('/users/authenticate') && method === 'POST':
              //     return authenticate();
              // case url.endsWith('/users/register') && method === 'POST':
              //     return register();
              // case url.endsWith('/users') && method === 'GET':
              //     return getUsers();
              // case url.match(/\/users\/\d+$/) && method === 'DELETE':
              //     return deleteUser();
              default:
                // pass through any requests not handled above
                return next.handle(request);
            }
          } // route functions


          function authenticate() {
            var username = body.username,
                password = body.password;
            var user = users.find(function (x) {
              return x.username === username && x.password === password;
            });
            if (!user) return error('Username or password is incorrect');
            return ok({
              id: user.id,
              username: user.username,
              firstName: user.firstName,
              lastName: user.lastName,
              token: 'fake-jwt-token'
            });
          }

          function register() {
            var user = body;

            if (users.find(function (x) {
              return x.username === user.username;
            })) {
              return error('Username "' + user.username + '" is already taken');
            }

            user.id = users.length ? Math.max.apply(Math, _toConsumableArray(users.map(function (x) {
              return x.id;
            }))) + 1 : 1;
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
          }

          function getUsers() {
            if (!isLoggedIn()) return unauthorized();
            return ok(users);
          }

          function deleteUser() {
            if (!isLoggedIn()) return unauthorized();
            users = users.filter(function (x) {
              return x.id !== idFromUrl();
            });
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
          } // helper functions


          function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({
              status: 200,
              body: body
            }));
          }

          function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({
              error: {
                message: message
              }
            });
          }

          function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({
              status: 401,
              error: {
                message: 'Unauthorised'
              }
            });
          }

          function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
          }

          function idFromUrl() {
            var urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
          }
        }
      }]);

      return FakeBackendInterceptor;
    }();

    FakeBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], FakeBackendInterceptor);
    var fakeBackendProvider = {
      // use fake backend in place of Http service for backend-less development
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
      useClass: FakeBackendInterceptor,
      multi: true
    };
    /***/
  },

  /***/
  "./src/app/helpers/index.ts":
  /*!**********************************!*\
    !*** ./src/app/helpers/index.ts ***!
    \**********************************/

  /*! exports provided: AuthGuard, ErrorInterceptor, JwtInterceptor, FakeBackendInterceptor, fakeBackendProvider */

  /***/
  function srcAppHelpersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/helpers/auth.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"];
    });
    /* harmony import */


    var _error_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./error.interceptor */
    "./src/app/helpers/error.interceptor.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return _error_interceptor__WEBPACK_IMPORTED_MODULE_2__["ErrorInterceptor"];
    });
    /* harmony import */


    var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./jwt.interceptor */
    "./src/app/helpers/jwt.interceptor.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_3__["JwtInterceptor"];
    });
    /* harmony import */


    var _fake_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./fake-backend */
    "./src/app/helpers/fake-backend.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () {
      return _fake_backend__WEBPACK_IMPORTED_MODULE_4__["FakeBackendInterceptor"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () {
      return _fake_backend__WEBPACK_IMPORTED_MODULE_4__["fakeBackendProvider"];
    });
    /***/

  },

  /***/
  "./src/app/helpers/jwt.interceptor.ts":
  /*!********************************************!*\
    !*** ./src/app/helpers/jwt.interceptor.ts ***!
    \********************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcAppHelpersJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _services_assessment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/assessment.service */
    "./src/app/services/assessment.service.ts");
    /* harmony import */


    var _services_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/company.service */
    "./src/app/services/company.service.ts");
    /* harmony import */


    var _services_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/admin.service */
    "./src/app/services/admin.service.ts");

    var JwtInterceptor = /*#__PURE__*/function () {
      function JwtInterceptor(authenticationService, userservice, adminservice, assessmentService, companyService) {
        _classCallCheck(this, JwtInterceptor);

        this.authenticationService = authenticationService;
        this.userservice = userservice;
        this.adminservice = adminservice;
        this.assessmentService = assessmentService;
        this.companyService = companyService;
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var currentToken = this.authenticationService.currentTokenValue;

          if (currentToken && currentToken.access_token) {
            request = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(currentToken.access_token)
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _services_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"]
      }, {
        type: _services_assessment_service__WEBPACK_IMPORTED_MODULE_3__["AssessmentService"]
      }, {
        type: _services_company_service__WEBPACK_IMPORTED_MODULE_4__["CompanyService"]
      }];
    };

    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], JwtInterceptor);
    /***/
  },

  /***/
  "./src/app/layouts/admin/admin.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/layouts/admin/admin.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsAdminAdminComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".headfont {\n  font-size: 30px;\n  color: #46bc61;\n}\n\n.btnNuuED {\n  border: 2px solid #46bc61;\n}\n\n.textcolor {\n  color: white;\n}\n\n.textcolorblue {\n  color: #3a74b9;\n}\n\n.textcolorblack {\n  color: #a9a4a4;\n}\n\n.txtcolorblack {\n  color: #0c0b0b;\n}\n\n.bgcolorblue {\n  background-color: #3a74b9;\n  height: 80px;\n}\n\n.nav-item1 {\n  list-style: none;\n}\n\n.footer-bottam-text {\n  line-height: 80px;\n  background-color: #0074b9;\n  color: white;\n}\n\n.img-fluid1 {\n  max-width: 60%;\n  height: 60px;\n}\n\n.thumbnail {\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.dropdown {\n  position: absolute;\n  top: 10px;\n  right: 20px;\n}\n\n.contactdisplay {\n  margin-top: 75px;\n}\n\n#NuuEDScore {\n  background-color: #46bc61;\n}\n\n/* portrait tablet, e-reader kindle*/\n\n@media (max-width: 990px) {\n  .contactdisplay {\n    margin-top: 210px;\n  }\n}\n\n@media (max-width: 750px) {\n  .contactdisplay {\n    margin-top: 60px;\n  }\n}\n\n.pcoded-main-container {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.pcoded-main-container > * {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: 40ch;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NndF9qcHJfbGluX3Bhd2FuL0RvY3VtZW50cy9udXVlZC1wcm9kL251dWVkLXVpL251dWVkLXVpLWFwcC9zcmMvYXBwL2xheW91dHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0ZGOztBRElBO0VBQ0UseUJBQUE7QUNERjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7QUNFRjs7QURBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0dGOztBRERBO0VBQ0UsZ0JBQUE7QUNJRjs7QURGQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDS0Y7O0FESEE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQ01GOztBREpBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ09GOztBREpBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ09GOztBRExBO0VBQ0UsZ0JBQUE7QUNRRjs7QUROQTtFQUNFLHlCQUFBO0FDU0Y7O0FETkEsb0NBQUE7O0FBQ0E7RUFDRTtJQUNFLGlCQUFBO0VDU0Y7QUFDRjs7QUROQTtFQUNFO0lBQ0UsZ0JBQUE7RUNRRjtBQUNGOztBRE5BO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtBQ1FGOztBRE5BO0VBQ0UsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDU0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYm9keXtcbi8vICAgZm9udC1mYW1pbHk6ICdQcm94aW1hIE5vdmEgQWx0IFJlZ3VsYXInO1xuLy8gfVxuLmhlYWRmb250IHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzQ2YmM2MTtcbn1cbi5idG5OdXVFRCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0NmJjNjE7XG59XG4udGV4dGNvbG9yIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnRleHRjb2xvcmJsdWUge1xuICBjb2xvcjogIzNhNzRiOTtcbn1cblxuLnRleHRjb2xvcmJsYWNrIHtcbiAgY29sb3I6ICNhOWE0YTQ7XG59XG4udHh0Y29sb3JibGFjayB7XG4gIGNvbG9yOiAjMGMwYjBiO1xufVxuLmJnY29sb3JibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhNzRiOTtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuLm5hdi1pdGVtMSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4uZm9vdGVyLWJvdHRhbS10ZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc0Yjk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5pbWctZmx1aWQxIHtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIGhlaWdodDogNjBweDtcbn1cbi50aHVtYm5haWwge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uZHJvcGRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDIwcHg7XG59XG4uY29udGFjdGRpc3BsYXkge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xufVxuI051dUVEU2NvcmV7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NmJjNjE7XG59XG5cbi8qIHBvcnRyYWl0IHRhYmxldCwgZS1yZWFkZXIga2luZGxlKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTBweCkge1xuICAuY29udGFjdGRpc3BsYXkge1xuICAgIG1hcmdpbi10b3A6IDIxMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuY29udGFjdGRpc3BsYXkge1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gIH1cbn1cbi5wY29kZWQtbWFpbi1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5wY29kZWQtbWFpbi1jb250YWluZXIgPiAqIHtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LXNocmluazogMTtcbiAgZmxleC1iYXNpczogNDBjaDtcbn0iLCIuaGVhZGZvbnQge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjNDZiYzYxO1xufVxuXG4uYnRuTnV1RUQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjNDZiYzYxO1xufVxuXG4udGV4dGNvbG9yIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGV4dGNvbG9yYmx1ZSB7XG4gIGNvbG9yOiAjM2E3NGI5O1xufVxuXG4udGV4dGNvbG9yYmxhY2sge1xuICBjb2xvcjogI2E5YTRhNDtcbn1cblxuLnR4dGNvbG9yYmxhY2sge1xuICBjb2xvcjogIzBjMGIwYjtcbn1cblxuLmJnY29sb3JibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhNzRiOTtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4ubmF2LWl0ZW0xIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmZvb3Rlci1ib3R0YW0tdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NGI5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbWctZmx1aWQxIHtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLnRodW1ibmFpbCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMjBweDtcbn1cblxuLmNvbnRhY3RkaXNwbGF5IHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbn1cblxuI051dUVEU2NvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDZiYzYxO1xufVxuXG4vKiBwb3J0cmFpdCB0YWJsZXQsIGUtcmVhZGVyIGtpbmRsZSovXG5AbWVkaWEgKG1heC13aWR0aDogOTkwcHgpIHtcbiAgLmNvbnRhY3RkaXNwbGF5IHtcbiAgICBtYXJnaW4tdG9wOiAyMTBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5jb250YWN0ZGlzcGxheSB7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgfVxufVxuLnBjb2RlZC1tYWluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnBjb2RlZC1tYWluLWNvbnRhaW5lciA+ICoge1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtc2hyaW5rOiAxO1xuICBmbGV4LWJhc2lzOiA0MGNoO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layouts/admin/admin.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/layouts/admin/admin.component.ts ***!
    \**************************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppLayoutsAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/add/operator/filter */
    "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
    /* harmony import */


    var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/menu-items/menu-items */
    "./src/app/shared/menu-items/menu-items.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services */
    "./src/app/services/index.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AdminComponent = /*#__PURE__*/function () {
      function AdminComponent(menuItems, route, router, authService) {
        _classCallCheck(this, AdminComponent);

        this.menuItems = menuItems;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.UserName = null;
        this.rolename = "";
        this.showmyaccount = false;
        this.showcompanyaccount = false;
        this.showadminaccount = false;
        this.configURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["domain"];
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var lastname = "";

          if (this.authService.currentUserValue.lastName != undefined) {
            lastname = " " + this.authService.currentUserValue.lastName;
          }

          this.UserName = this.authService.currentUserValue.firstName + lastname;
          this.rolename = this.authService.currentUserValue.roles;

          for (var i = 0; i < this.rolename.length; i++) {
            if (this.rolename[i] === "USER") {
              this.showmyaccount = true;
            }

            if (this.rolename[i] === "ADMIN") {
              this.showcompanyaccount = true;
            }

            if (this.rolename[i] === "SYSADMIN") {
              this.showadminaccount = true;
            }
          }
        }
      }, {
        key: "Logout",
        value: function Logout() {
          this.authService.logout();
          this.router.navigate(["/auth/login"]);
        }
      }, {
        key: "myAccount",
        value: function myAccount() {
          this.router.navigate(["/settings/profile"]);
        }
      }, {
        key: "systemAccount",
        value: function systemAccount() {
          this.router.navigate(["/company/dashboard"]);
        }
      }, {
        key: "adminAccount",
        value: function adminAccount() {
          this.router.navigate(["/admin/managecompany"]);
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ctorParameters = function () {
      return [{
        type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__["MenuItems"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }];
    };

    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-admin",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin/admin.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin.component.scss */
      "./src/app/layouts/admin/admin.component.scss"))["default"]]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/layouts/assessment/assessmentLayout.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/layouts/assessment/assessmentLayout.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsAssessmentAssessmentLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".headfont {\n  font-size: 30px;\n  color: #46bc61;\n}\n\n.btnNuuED {\n  border: 2px solid #46bc61;\n}\n\n.textcolor {\n  color: white;\n}\n\n.textcolorblue {\n  color: #3a74b9;\n}\n\n.textcolorblack {\n  color: #a9a4a4;\n}\n\n.txtcolorblack {\n  color: #0c0b0b;\n}\n\n.bgcolorblue {\n  background-color: #3a74b9;\n  height: 80px;\n}\n\n.nav-item1 {\n  list-style: none;\n}\n\n.footer-bottam-text {\n  line-height: 80px;\n  background-color: #0074b9;\n  color: white;\n}\n\n.img-fluid1 {\n  max-width: 60%;\n  height: 60px;\n}\n\n.thumbnail {\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.dropdown {\n  position: absolute;\n  top: 10px;\n  right: 20px;\n}\n\n.contactdisplay {\n  margin-top: 75px;\n}\n\n#NuuEDScore {\n  background-color: #46bc61;\n}\n\n/* portrait tablet, e-reader kindle*/\n\n@media (max-width: 750px) {\n  .contactdisplay {\n    margin-top: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NndF9qcHJfbGluX3Bhd2FuL0RvY3VtZW50cy9udXVlZC1wcm9kL251dWVkLXVpL251dWVkLXVpLWFwcC9zcmMvYXBwL2xheW91dHMvYXNzZXNzbWVudC9hc3Nlc3NtZW50TGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXRzL2Fzc2Vzc21lbnQvYXNzZXNzbWVudExheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVFLGVBQUE7RUFDQSxjQUFBO0FDSEY7O0FES0E7RUFDSSx5QkFBQTtBQ0ZKOztBREtFO0VBQ0MsWUFBQTtBQ0ZIOztBRElFO0VBQ0UsY0FBQTtBQ0RKOztBRElFO0VBQ0UsY0FBQTtBQ0RKOztBREdFO0VBQ0UsY0FBQTtBQ0FKOztBREVFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0M7RUFDRSxnQkFBQTtBQ0VIOztBREFDO0VBQ0MsaUJBQUE7RUFDQSx5QkFBQTtFQUNELFlBQUE7QUNHRDs7QUREQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FDSUY7O0FERkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDS0Y7O0FERkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDS0Y7O0FESEE7RUFDQyxnQkFBQTtBQ01EOztBREpBO0VBQ0UseUJBQUE7QUNPRjs7QURKQSxvQ0FBQTs7QUFJQTtFQUNFO0lBQ0UsZ0JBQUE7RUNJRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9hc3Nlc3NtZW50L2Fzc2Vzc21lbnRMYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBib2R5e1xuLy8gICBmb250LWZhbWlseTogJ1Byb3hpbWEgTm92YSBBbHQgUmVndWxhcic7XG4vLyB9XG4uaGVhZGZvbnRcbntcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzQ2YmM2MSA7XG59XG4uYnRuTnV1RUQge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0NmJjNjE7XG4gXG4gIH1cbiAgLnRleHRjb2xvciB7XG4gICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLnRleHRjb2xvcmJsdWUge1xuICAgIGNvbG9yOiAjM2E3NGI5O1xuICB9XG4gIFxuICAudGV4dGNvbG9yYmxhY2sge1xuICAgIGNvbG9yOiAjYTlhNGE0O1xuICB9XG4gIC50eHRjb2xvcmJsYWNrIHtcbiAgICBjb2xvcjogIzBjMGIwYjtcbiAgfVxuICAuYmdjb2xvcmJsdWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYTc0Yjk7XG4gICAgaGVpZ2h0OjgwcHg7XG4gIH1cbiAubmF2LWl0ZW0xe1xuICAgbGlzdC1zdHlsZTogbm9uZTtcbiB9XG4gLmZvb3Rlci1ib3R0YW0tdGV4dHtcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICAjMDA3NGI5O1xuIGNvbG9yOiB3aGl0ZTtcbn1cbi5pbWctZmx1aWQxIHtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIGhlaWdodDogNjBweDtcbn1cbi50aHVtYm5haWx7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5kcm9wZG93bntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAyMHB4O1xufVxuLmNvbnRhY3RkaXNwbGF5IHtcbiBtYXJnaW4tdG9wOiA3NXB4O1xufVxuI051dUVEU2NvcmV7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NmJjNjE7XG59XG5cbi8qIHBvcnRyYWl0IHRhYmxldCwgZS1yZWFkZXIga2luZGxlKi9cbkBtZWRpYShtYXgtd2lkdGg6OTkwcHgpe1xufVxuXG5AbWVkaWEobWF4LXdpZHRoOjc1MHB4KXtcbiAgLmNvbnRhY3RkaXNwbGF5IHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgfVxuICB9IiwiLmhlYWRmb250IHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzQ2YmM2MTtcbn1cblxuLmJ0bk51dUVEIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzQ2YmM2MTtcbn1cblxuLnRleHRjb2xvciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRleHRjb2xvcmJsdWUge1xuICBjb2xvcjogIzNhNzRiOTtcbn1cblxuLnRleHRjb2xvcmJsYWNrIHtcbiAgY29sb3I6ICNhOWE0YTQ7XG59XG5cbi50eHRjb2xvcmJsYWNrIHtcbiAgY29sb3I6ICMwYzBiMGI7XG59XG5cbi5iZ2NvbG9yYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTc0Yjk7XG4gIGhlaWdodDogODBweDtcbn1cblxuLm5hdi1pdGVtMSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5mb290ZXItYm90dGFtLXRleHQge1xuICBsaW5lLWhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzRiOTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uaW1nLWZsdWlkMSB7XG4gIG1heC13aWR0aDogNjAlO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi50aHVtYm5haWwge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4uZHJvcGRvd24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDIwcHg7XG59XG5cbi5jb250YWN0ZGlzcGxheSB7XG4gIG1hcmdpbi10b3A6IDc1cHg7XG59XG5cbiNOdXVFRFNjb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2YmM2MTtcbn1cblxuLyogcG9ydHJhaXQgdGFibGV0LCBlLXJlYWRlciBraW5kbGUqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5jb250YWN0ZGlzcGxheSB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layouts/assessment/assessmentLayout.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/layouts/assessment/assessmentLayout.component.ts ***!
    \******************************************************************/

  /*! exports provided: AssessmentLayoutComponent */

  /***/
  function srcAppLayoutsAssessmentAssessmentLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssessmentLayoutComponent", function () {
      return AssessmentLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/add/operator/filter */
    "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
    /* harmony import */


    var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/menu-items/menu-items */
    "./src/app/shared/menu-items/menu-items.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services */
    "./src/app/services/index.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AssessmentLayoutComponent = /*#__PURE__*/function () {
      function AssessmentLayoutComponent(menuItems, route, router, authService) {
        _classCallCheck(this, AssessmentLayoutComponent);

        this.menuItems = menuItems;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.deviceType = "desktop";
        this.verticalNavType = "expanded";
        this.verticalEffect = "shrink";
        this.chatToggle = "out";
        this.chatInnerToggle = "off";
        this.isScrolled = false;
        this.isCollapsedMobile = "no-block";
        this.toggleOn = true;
        this.UserName = null;
        this.isLoggedIn = false;
        this.configURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["domain"];
        this.rolename = "";
        this.showmyaccount = false;
        this.showcompanyaccount = false;
        this.showadminaccount = false;
        var scrollHeight = window.screen.height - 150;
        this.innerHeight = scrollHeight + "px";
        this.windowWidth = window.innerWidth;

        if (!!this.authService.currentTokenValue && this.authService.currentTokenValue.access_token) {
          this.isLoggedIn = true;
        }

        if (!!this.authService.currentUserValue && this.authService.currentUserValue.firstName) {
          var lastname = "";

          if (this.authService.currentUserValue.lastName != undefined) {
            lastname = " " + this.authService.currentUserValue.lastName;
          }

          this.UserName = this.authService.currentUserValue.firstName + lastname;
          this.rolename = this.authService.currentUserValue.roles;

          for (var i = 0; i < this.rolename.length; i++) {
            if (this.rolename[i] === "USER") {
              this.showmyaccount = true;
            }

            if (this.rolename[i] === "ADMIN") {
              this.showcompanyaccount = true;
            }

            if (this.rolename[i] === "SYSADMIN") {
              this.showadminaccount = true;
            }
          }
        }
      }

      _createClass(AssessmentLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClickedOutside",
        value: function onClickedOutside(e) {
          if (this.windowWidth < 768 && this.toggleOn && this.verticalNavType !== "offcanvas") {
            this.toggleOn = true;
            this.verticalNavType = "offcanvas";
          }
        }
      }, {
        key: "Logout",
        value: function Logout() {
          // localStorage.clear();
          this.authService.logout();
          this.router.navigate(["/auth/login"]);
        }
      }, {
        key: "gotoLogin",
        value: function gotoLogin() {
          this.router.navigate(["/auth/login"]);
        }
      }, {
        key: "myAccount",
        value: function myAccount() {
          this.router.navigate(["/settings/profile"]);
        }
      }, {
        key: "systemAccount",
        value: function systemAccount() {
          this.router.navigate(["/company/dashboard"]);
        }
      }, {
        key: "adminAccount",
        value: function adminAccount() {
          this.router.navigate(["/admin/managecompany"]);
        }
      }, {
        key: "about",
        value: function about() {
          window.location.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["domain"] + "about.html";
        }
      }, {
        key: "contact",
        value: function contact() {
          window.location.href = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["domain"] + "contactus.html";
        }
      }, {
        key: "onScroll",
        value: function onScroll(event) {
          this.isScrolled = false;
        }
      }]);

      return AssessmentLayoutComponent;
    }();

    AssessmentLayoutComponent.ctorParameters = function () {
      return [{
        type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_4__["MenuItems"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }];
    };

    AssessmentLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-assessmentLayout",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./assessmentLayout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/assessment/assessmentLayout.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("slideInOut", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translate3d(0, 0, 0)"
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translate3d(100%, 0, 0)"
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("in => out", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("400ms ease-in-out")), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("out => in", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("400ms ease-in-out"))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("slideOnOff", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("on", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translate3d(0, 0, 0)"
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("off", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        transform: "translate3d(100%, 0, 0)"
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("on => off", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("400ms ease-in-out")), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("off => on", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("400ms ease-in-out"))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])("mobileMenuTop", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("no-block, void", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        overflow: "hidden",
        height: "0px"
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])("yes-block", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
        height: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AUTO_STYLE"]
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])("no-block <=> yes-block", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])("400ms ease-in-out")])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./assessmentLayout.component.scss */
      "./src/app/layouts/assessment/assessmentLayout.component.scss"))["default"]]
    })], AssessmentLayoutComponent);
    /***/
  },

  /***/
  "./src/app/layouts/auth/auth.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/layouts/auth/auth.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsAuthAuthComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/layouts/auth/auth.component.ts":
  /*!************************************************!*\
    !*** ./src/app/layouts/auth/auth.component.ts ***!
    \************************************************/

  /*! exports provided: AuthComponent */

  /***/
  function srcAppLayoutsAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
      return AuthComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var AuthComponent = /*#__PURE__*/function () {
      function AuthComponent(authenticationService) {
        _classCallCheck(this, AuthComponent);

        this.authenticationService = authenticationService;

        if (!!authenticationService.currentTokenValue && !!authenticationService.currentTokenValue.access_token) {//  history.back();
        }
      }

      _createClass(AuthComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AuthComponent;
    }();

    AuthComponent.ctorParameters = function () {
      return [{
        type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-auth",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./auth.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth/auth.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./auth.component.scss */
      "./src/app/layouts/auth/auth.component.scss"))["default"]]
    })], AuthComponent);
    /***/
  },

  /***/
  "./src/app/layouts/companyLayout/companyLayout.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/layouts/companyLayout/companyLayout.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsCompanyLayoutCompanyLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".headfont {\n  font-size: 30px;\n  color: #46bc61;\n}\n\n.btnNuuED {\n  border: 2px solid #46bc61;\n}\n\n.textcolor {\n  color: white;\n}\n\n.textcolorblue {\n  color: #3a74b9;\n}\n\n.textcolorblack {\n  color: #a9a4a4;\n}\n\n.txtcolorblack {\n  color: #0c0b0b;\n}\n\n.bgcolorblue {\n  background-color: #3a74b9;\n  height: 80px;\n}\n\n.nav-item1 {\n  list-style: none;\n}\n\n.footer-bottam-text {\n  line-height: 80px;\n  background-color: #0074b9;\n  color: white;\n}\n\n.img-fluid1 {\n  max-width: 60%;\n  height: 60px;\n}\n\n.thumbnail {\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.dropdown {\n  position: absolute;\n  top: 10px;\n  right: 20px;\n}\n\n.contactdisplay {\n  margin-top: 75px;\n}\n\n.pcoded-main-container {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.pcoded-main-container > * {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: 40ch;\n}\n\n#NuuEDScore {\n  background-color: #46bc61;\n}\n\n/* portrait tablet, e-reader kindle*/\n\n@media (max-width: 750px) {\n  .contactdisplay {\n    margin-top: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NndF9qcHJfbGluX3Bhd2FuL0RvY3VtZW50cy9udXVlZC1wcm9kL251dWVkLXVpL251dWVkLXVpLWFwcC9zcmMvYXBwL2xheW91dHMvY29tcGFueUxheW91dC9jb21wYW55TGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXRzL2NvbXBhbnlMYXlvdXQvY29tcGFueUxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDRkY7O0FESUE7RUFDRSx5QkFBQTtBQ0RGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtBQ0VGOztBREFBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDR0Y7O0FEREE7RUFDRSxnQkFBQTtBQ0lGOztBREZBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNLRjs7QURIQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FDTUY7O0FESkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDT0Y7O0FESkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDT0Y7O0FETEE7RUFDRSxnQkFBQTtBQ1FGOztBRE5BO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtBQ1NGOztBRFBBO0VBQ0UsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDVUY7O0FEUkE7RUFDRSx5QkFBQTtBQ1dGOztBRFJBLG9DQUFBOztBQUtBO0VBQ0U7SUFDRSxnQkFBQTtFQ09GO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2NvbXBhbnlMYXlvdXQvY29tcGFueUxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGJvZHl7XG4vLyAgIGZvbnQtZmFtaWx5OiAnUHJveGltYSBOb3ZhIEFsdCBSZWd1bGFyJztcbi8vIH1cbi5oZWFkZm9udCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM0NmJjNjE7XG59XG4uYnRuTnV1RUQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjNDZiYzYxO1xufVxuLnRleHRjb2xvciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi50ZXh0Y29sb3JibHVlIHtcbiAgY29sb3I6ICMzYTc0Yjk7XG59XG5cbi50ZXh0Y29sb3JibGFjayB7XG4gIGNvbG9yOiAjYTlhNGE0O1xufVxuLnR4dGNvbG9yYmxhY2sge1xuICBjb2xvcjogIzBjMGIwYjtcbn1cbi5iZ2NvbG9yYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTc0Yjk7XG4gIGhlaWdodDogODBweDtcbn1cbi5uYXYtaXRlbTEge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmZvb3Rlci1ib3R0YW0tdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NGI5O1xuICBjb2xvcjogd2hpdGU7XG59XG4uaW1nLWZsdWlkMSB7XG4gIG1heC13aWR0aDogNjAlO1xuICBoZWlnaHQ6IDYwcHg7XG59XG4udGh1bWJuYWlsIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAyMHB4O1xufVxuLmNvbnRhY3RkaXNwbGF5IHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbn1cbi5wY29kZWQtbWFpbi1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5wY29kZWQtbWFpbi1jb250YWluZXIgPiAqIHtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LXNocmluazogMTtcbiAgZmxleC1iYXNpczogNDBjaDtcbn1cbiNOdXVFRFNjb3Jle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDZiYzYxO1xufVxuXG4vKiBwb3J0cmFpdCB0YWJsZXQsIGUtcmVhZGVyIGtpbmRsZSovXG5AbWVkaWEgKG1heC13aWR0aDogOTkwcHgpIHtcblxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgLmNvbnRhY3RkaXNwbGF5IHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICB9XG59XG4iLCIuaGVhZGZvbnQge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiAjNDZiYzYxO1xufVxuXG4uYnRuTnV1RUQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjNDZiYzYxO1xufVxuXG4udGV4dGNvbG9yIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGV4dGNvbG9yYmx1ZSB7XG4gIGNvbG9yOiAjM2E3NGI5O1xufVxuXG4udGV4dGNvbG9yYmxhY2sge1xuICBjb2xvcjogI2E5YTRhNDtcbn1cblxuLnR4dGNvbG9yYmxhY2sge1xuICBjb2xvcjogIzBjMGIwYjtcbn1cblxuLmJnY29sb3JibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhNzRiOTtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuXG4ubmF2LWl0ZW0xIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmZvb3Rlci1ib3R0YW0tdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NGI5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbWctZmx1aWQxIHtcbiAgbWF4LXdpZHRoOiA2MCU7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLnRodW1ibmFpbCB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMjBweDtcbn1cblxuLmNvbnRhY3RkaXNwbGF5IHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbn1cblxuLnBjb2RlZC1tYWluLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnBjb2RlZC1tYWluLWNvbnRhaW5lciA+ICoge1xuICBmbGV4LWdyb3c6IDE7XG4gIGZsZXgtc2hyaW5rOiAxO1xuICBmbGV4LWJhc2lzOiA0MGNoO1xufVxuXG4jTnV1RURTY29yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NmJjNjE7XG59XG5cbi8qIHBvcnRyYWl0IHRhYmxldCwgZS1yZWFkZXIga2luZGxlKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuY29udGFjdGRpc3BsYXkge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layouts/companyLayout/companyLayout.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/layouts/companyLayout/companyLayout.component.ts ***!
    \******************************************************************/

  /*! exports provided: CompanyLayoutComponent */

  /***/
  function srcAppLayoutsCompanyLayoutCompanyLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyLayoutComponent", function () {
      return CompanyLayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/add/operator/filter */
    "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
    /* harmony import */


    var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/menu-items/menu-items */
    "./src/app/shared/menu-items/menu-items.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services */
    "./src/app/services/index.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var CompanyLayoutComponent = /*#__PURE__*/function () {
      function CompanyLayoutComponent(menuItems, route, router, authService) {
        _classCallCheck(this, CompanyLayoutComponent);

        this.menuItems = menuItems;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.UserName = null;
        this.rolename = "";
        this.showmyaccount = false;
        this.showcompanyaccount = false;
        this.showadminaccount = false;
        this.configURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["domain"];
      }

      _createClass(CompanyLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var lastname = "";

          if (this.authService.currentUserValue.lastName != undefined) {
            lastname = " " + this.authService.currentUserValue.lastName;
          }

          this.UserName = this.authService.currentUserValue.firstName + lastname;
          this.rolename = this.authService.currentUserValue.roles;

          for (var i = 0; i < this.rolename.length; i++) {
            if (this.rolename[i] === "USER") {
              this.showmyaccount = true;
            }

            if (this.rolename[i] === "ADMIN") {
              this.showcompanyaccount = true;
            }

            if (this.rolename[i] === "SYSADMIN") {
              this.showadminaccount = true;
            }
          }
        }
      }, {
        key: "Logout",
        value: function Logout() {
          this.authService.logout();
          this.router.navigate(["/auth/login"]);
        }
      }, {
        key: "myAccount",
        value: function myAccount() {
          this.router.navigate(["/settings/profile"]);
        }
      }, {
        key: "systemAccount",
        value: function systemAccount() {
          this.router.navigate(["/company/dashboard"]);
        }
      }, {
        key: "adminAccount",
        value: function adminAccount() {
          this.router.navigate(["/admin/managecompany"]);
        }
      }]);

      return CompanyLayoutComponent;
    }();

    CompanyLayoutComponent.ctorParameters = function () {
      return [{
        type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__["MenuItems"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }];
    };

    CompanyLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-companyLayout",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./companyLayout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/companyLayout/companyLayout.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./companyLayout.component.scss */
      "./src/app/layouts/companyLayout/companyLayout.component.scss"))["default"]]
    })], CompanyLayoutComponent);
    /***/
  },

  /***/
  "./src/app/layouts/settings/breadcrumbs/breadcrumbs.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/layouts/settings/breadcrumbs/breadcrumbs.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsSettingsBreadcrumbsBreadcrumbsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvc2V0dGluZ3MvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layouts/settings/breadcrumbs/breadcrumbs.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/layouts/settings/breadcrumbs/breadcrumbs.component.ts ***!
    \***********************************************************************/

  /*! exports provided: BreadcrumbsComponent */

  /***/
  function srcAppLayoutsSettingsBreadcrumbsBreadcrumbsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function () {
      return BreadcrumbsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var BreadcrumbsComponent = /*#__PURE__*/function () {
      function BreadcrumbsComponent(router, route, titleService) {
        var _this4 = this;

        _classCallCheck(this, BreadcrumbsComponent);

        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.tempState = [];
        this.router.events.filter(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
        }).subscribe(function (event) {
          _this4.breadcrumbs = [];
          _this4.tempState = [];
          var currentRoute = _this4.route.root,
              url = '';

          do {
            var childrenRoutes = currentRoute.children;
            currentRoute = null;
            childrenRoutes.forEach(function (routes) {
              if (routes.outlet === 'primary') {
                var routeSnapshot = routes.snapshot;
                url += '/' + routeSnapshot.url.map(function (segment) {
                  return segment.path;
                }).join('/');

                if (routes.snapshot.data.breadcrumb !== undefined) {
                  var status = true;

                  if (routes.snapshot.data.status !== undefined) {
                    status = routes.snapshot.data.status;
                  }

                  if (!_this4.tempState.includes(routes.snapshot.data.breadcrumb)) {
                    _this4.tempState.push(routes.snapshot.data.breadcrumb);

                    _this4.breadcrumbs.push({
                      label: routes.snapshot.data.breadcrumb,
                      status: status,
                      url: url
                    });
                  }
                }

                currentRoute = routes;
              }
            });
          } while (currentRoute);
        });
      }

      _createClass(BreadcrumbsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BreadcrumbsComponent;
    }();

    BreadcrumbsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
      }];
    };

    BreadcrumbsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-breadcrumbs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./breadcrumbs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/settings/breadcrumbs/breadcrumbs.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./breadcrumbs.component.scss */
      "./src/app/layouts/settings/breadcrumbs/breadcrumbs.component.scss"))["default"]]
    })], BreadcrumbsComponent);
    /***/
  },

  /***/
  "./src/app/layouts/settings/settings.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/layouts/settings/settings.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutsSettingsSettingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".headfont {\n  font-size: 30px;\n  color: #46bc61;\n}\n\n.btnNuuED {\n  border: 2px solid #46bc61;\n}\n\n.textcolor {\n  color: white;\n}\n\n.textcolorblue {\n  color: #3a74b9;\n}\n\n.textcolorblack {\n  color: #a9a4a4;\n}\n\n.txtcolorblack {\n  color: #0c0b0b;\n}\n\n.bgcolorblue {\n  background-color: #3a74b9;\n  height: 80px;\n}\n\n.nav-item1 {\n  list-style: none;\n}\n\n.footer-bottam-text {\n  line-height: 80px;\n  background-color: #0074b9;\n  color: white;\n}\n\n.img-fluid1 {\n  max-width: 60%;\n  height: 60px;\n}\n\n.thumbnail {\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.dropdown {\n  position: absolute;\n  top: 10px;\n  right: 20px;\n}\n\n.contactdisplay {\n  margin-top: 75px;\n}\n\n.pcoded-main-container {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.pcoded-main-container > * {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  flex-shrink: 1;\n  flex-basis: 40ch;\n}\n\n#NuuEDScore {\n  background-color: #46bc61;\n}\n\n/* portrait tablet, e-reader kindle*/\n\n@media (max-width: 750px) {\n  .contactdisplay {\n    margin-top: 50px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NndF9qcHJfbGluX3Bhd2FuL0RvY3VtZW50cy9udXVlZC1wcm9kL251dWVkLXVpL251dWVkLXVpLWFwcC9zcmMvYXBwL2xheW91dHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0ZGOztBRElBO0VBQ0UseUJBQUE7QUNERjs7QURHQTtFQUNFLFlBQUE7QUNBRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURDQTtFQUNFLGNBQUE7QUNFRjs7QURBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0dGOztBRERBO0VBQ0UsZ0JBQUE7QUNJRjs7QURGQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDS0Y7O0FESEE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtBQ01GOztBREpBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ09GOztBREpBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ09GOztBRExBO0VBQ0UsZ0JBQUE7QUNRRjs7QUROQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7QUNTRjs7QURQQTtFQUNFLG1CQUFBO1VBQUEsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1VGOztBRFJBO0VBQ0UseUJBQUE7QUNXRjs7QURMQSxvQ0FBQTs7QUFLQTtFQUNFO0lBQ0UsZ0JBQUE7RUNJRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGJvZHl7XG4vLyAgIGZvbnQtZmFtaWx5OiAnUHJveGltYSBOb3ZhIEFsdCBSZWd1bGFyJztcbi8vIH1cbi5oZWFkZm9udCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM0NmJjNjE7XG59XG4uYnRuTnV1RUQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjNDZiYzYxO1xufVxuLnRleHRjb2xvciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi50ZXh0Y29sb3JibHVlIHtcbiAgY29sb3I6ICMzYTc0Yjk7XG59XG5cbi50ZXh0Y29sb3JibGFjayB7XG4gIGNvbG9yOiAjYTlhNGE0O1xufVxuLnR4dGNvbG9yYmxhY2sge1xuICBjb2xvcjogIzBjMGIwYjtcbn1cbi5iZ2NvbG9yYmx1ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTc0Yjk7XG4gIGhlaWdodDogODBweDtcbn1cbi5uYXYtaXRlbTEge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmZvb3Rlci1ib3R0YW0tdGV4dCB7XG4gIGxpbmUtaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NGI5O1xuICBjb2xvcjogd2hpdGU7XG59XG4uaW1nLWZsdWlkMSB7XG4gIG1heC13aWR0aDogNjAlO1xuICBoZWlnaHQ6IDYwcHg7XG59XG4udGh1bWJuYWlsIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAyMHB4O1xufVxuLmNvbnRhY3RkaXNwbGF5IHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbn1cbi5wY29kZWQtbWFpbi1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5wY29kZWQtbWFpbi1jb250YWluZXIgPiAqIHtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LXNocmluazogMTtcbiAgZmxleC1iYXNpczogNDBjaDtcbn1cbiNOdXVFRFNjb3Jle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDZiYzYxO1xufVxuXG5cblxuXG4vKiBwb3J0cmFpdCB0YWJsZXQsIGUtcmVhZGVyIGtpbmRsZSovXG5AbWVkaWEgKG1heC13aWR0aDogOTkwcHgpIHtcbiAgXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NTBweCkge1xuICAuY29udGFjdGRpc3BsYXkge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gIH1cbn1cbiIsIi5oZWFkZm9udCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6ICM0NmJjNjE7XG59XG5cbi5idG5OdXVFRCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0NmJjNjE7XG59XG5cbi50ZXh0Y29sb3Ige1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50ZXh0Y29sb3JibHVlIHtcbiAgY29sb3I6ICMzYTc0Yjk7XG59XG5cbi50ZXh0Y29sb3JibGFjayB7XG4gIGNvbG9yOiAjYTlhNGE0O1xufVxuXG4udHh0Y29sb3JibGFjayB7XG4gIGNvbG9yOiAjMGMwYjBiO1xufVxuXG4uYmdjb2xvcmJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E3NGI5O1xuICBoZWlnaHQ6IDgwcHg7XG59XG5cbi5uYXYtaXRlbTEge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uZm9vdGVyLWJvdHRhbS10ZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc0Yjk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmltZy1mbHVpZDEge1xuICBtYXgtd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4udGh1bWJuYWlsIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAyMHB4O1xufVxuXG4uY29udGFjdGRpc3BsYXkge1xuICBtYXJnaW4tdG9wOiA3NXB4O1xufVxuXG4ucGNvZGVkLW1haW4tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucGNvZGVkLW1haW4tY29udGFpbmVyID4gKiB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZmxleC1zaHJpbms6IDE7XG4gIGZsZXgtYmFzaXM6IDQwY2g7XG59XG5cbiNOdXVFRFNjb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ2YmM2MTtcbn1cblxuLyogcG9ydHJhaXQgdGFibGV0LCBlLXJlYWRlciBraW5kbGUqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIC5jb250YWN0ZGlzcGxheSB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layouts/settings/settings.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/layouts/settings/settings.component.ts ***!
    \********************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppLayoutsSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/add/operator/filter */
    "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
    /* harmony import */


    var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/menu-items/menu-items */
    "./src/app/shared/menu-items/menu-items.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services */
    "./src/app/services/index.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var SettingsComponent = /*#__PURE__*/function () {
      function SettingsComponent(menuItems, route, router, authService) {
        _classCallCheck(this, SettingsComponent);

        this.menuItems = menuItems;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.UserName = null;
        this.menuItem = [];
        this.rolename = "";
        this.showmyaccount = false;
        this.showcompanyaccount = false;
        this.showadminaccount = false;
        this.configURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["domain"];
      }

      _createClass(SettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var lastname = "";

          if (this.authService.currentUserValue.lastName != undefined) {
            lastname = " " + this.authService.currentUserValue.lastName;
          }

          this.UserName = this.authService.currentUserValue.firstName + lastname;
          this.rolename = this.authService.currentUserValue.roles;

          for (var i = 0; i < this.rolename.length; i++) {
            if (this.rolename[i] === "USER") {
              this.showmyaccount = true;
            }

            if (this.rolename[i] === "ADMIN") {
              this.showcompanyaccount = true;
            }

            if (this.rolename[i] === "SYSADMIN") {
              this.showadminaccount = true;
            }
          }
        }
      }, {
        key: "Logout",
        value: function Logout() {
          this.authService.logout();
          this.router.navigate(["/auth/login"]);
        }
      }, {
        key: "myAccount",
        value: function myAccount() {
          this.router.navigate(["/settings/profile"]);
        }
      }, {
        key: "systemAccount",
        value: function systemAccount() {
          this.router.navigate(["/company/dashboard"]);
        }
      }, {
        key: "adminAccount",
        value: function adminAccount() {
          this.router.navigate(["/admin/managecompany"]);
        }
      }]);

      return SettingsComponent;
    }();

    SettingsComponent.ctorParameters = function () {
      return [{
        type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__["MenuItems"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }];
    };

    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-settings",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/settings/settings.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./settings.component.scss */
      "./src/app/layouts/settings/settings.component.scss"))["default"]]
    })], SettingsComponent);
    /***/
  },

  /***/
  "./src/app/layouts/settings/title/title.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/layouts/settings/title/title.component.ts ***!
    \***********************************************************/

  /*! exports provided: TitleComponent */

  /***/
  function srcAppLayoutsSettingsTitleTitleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TitleComponent", function () {
      return TitleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var TitleComponent = /*#__PURE__*/function () {
      function TitleComponent(router, route, titleService) {
        var _this5 = this;

        _classCallCheck(this, TitleComponent);

        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.router.events.filter(function (event) {
          return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
        }).subscribe(function (event) {
          var currentRoute = _this5.route.root;
          var title = '';

          do {
            var childrenRoutes = currentRoute.children;
            currentRoute = null;
            childrenRoutes.forEach(function (routes) {
              if (routes.outlet === 'primary') {
                title = routes.snapshot.data.breadcrumb;
                currentRoute = routes;
              }
            });
          } while (currentRoute);

          _this5.titleService.setTitle(title + ' | NuuED Score');
        });
      }

      _createClass(TitleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TitleComponent;
    }();

    TitleComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
      }];
    };

    TitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-title',
      template: ''
    })], TitleComponent);
    /***/
  },

  /***/
  "./src/app/material.module.ts":
  /*!************************************!*\
    !*** ./src/app/material.module.ts ***!
    \************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"]],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/services/admin.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/admin.service.ts ***!
    \*******************************************/

  /*! exports provided: AdminService */

  /***/
  function srcAppServicesAdminServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminService", function () {
      return AdminService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _helpers_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../helpers/constant */
    "./src/app/helpers/constant.ts");

    var AdminService = /*#__PURE__*/function () {
      function AdminService(http) {
        _classCallCheck(this, AdminService);

        this.http = http;
        this.endpointURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _helpers_constant__WEBPACK_IMPORTED_MODULE_4__["AuthURL"] + "api/v1/";
      } ///oauth/token


      _createClass(AdminService, [{
        key: "Getallcompanyusers",
        value: function Getallcompanyusers() {
          return this.http.get("".concat(this.endpointURL, "users/individual"));
        }
      }, {
        key: "createUSers",
        value: function createUSers(id, users) {
          var formData = new FormData();
          formData.append("file", users);
          return this.http.post("".concat(this.endpointURL, "companies/") + id + "/users", formData);
        }
      }, {
        key: "changeStatus",
        value: function changeStatus(email, status) {
          return this.http.put("".concat(this.endpointURL, "users/") + email + "/changeStatus/" + status, null);
        }
      }, {
        key: "triggerActivationEmail",
        value: function triggerActivationEmail(email) {
          return this.http.put("".concat(this.endpointURL, "users/") + email + "/triggerActivationEmail/", null);
        }
      }, {
        key: "GetUsersBycompanyId",
        value: function GetUsersBycompanyId(companyId) {
          return this.http.get("".concat(this.endpointURL, "users/companies/") + companyId);
        }
      }, {
        key: "makeadmin",
        value: function makeadmin(companyId, email) {
          return this.http.put("".concat(this.endpointURL, "users/companies/") + companyId + "/makeadmin/" + email, null);
        }
      }, {
        key: "removeadmin",
        value: function removeadmin(companyId, email) {
          return this.http.put("".concat(this.endpointURL, "users/companies/") + companyId + "/removeadmin/" + email, null);
        }
      }]);

      return AdminService;
    }();

    AdminService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AdminService);
    /***/
  },

  /***/
  "./src/app/services/alert.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/alert.service.ts ***!
    \*******************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppServicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AlertService = /*#__PURE__*/function () {
      function AlertService(router) {
        var _this6 = this;

        _classCallCheck(this, AlertService);

        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterRouteChange = false;
        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            if (_this6.keepAfterRouteChange) {
              _this6.keepAfterRouteChange = false;
            } else {
              _this6.clear();
            }
          }
        });
      }

      _createClass(AlertService, [{
        key: "getAlert",
        value: function getAlert() {
          return this.subject.asObservable();
        }
      }, {
        key: "success",
        value: function success(message) {
          var keepAfterRouteChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.keepAfterRouteChange = keepAfterRouteChange;
          this.subject.next({
            severity: "success",
            summary: "Success",
            type: "success",
            text: message
          });
        }
      }, {
        key: "error",
        value: function error(message) {
          var keepAfterRouteChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.keepAfterRouteChange = keepAfterRouteChange;
          this.subject.next({
            severity: "error",
            summary: "Error",
            type: "error",
            text: message
          });
        }
      }, {
        key: "showInfo",
        value: function showInfo(message) {
          var keepAfterRouteChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.keepAfterRouteChange = keepAfterRouteChange;
          this.subject.next({
            severity: "info",
            summary: "Info",
            type: "info",
            text: message
          });
        }
      }, {
        key: "showWarn",
        value: function showWarn(message) {
          var keepAfterRouteChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.keepAfterRouteChange = keepAfterRouteChange;
          this.subject.next({
            severity: "warn",
            summary: "Warn",
            type: "warn",
            text: message
          });
        }
      }, {
        key: "clear",
        value: function clear() {
          // clear by calling subject.next() without parameters
          this.subject.next();
        }
      }]);

      return AlertService;
    }();

    AlertService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AlertService);
    /***/
  },

  /***/
  "./src/app/services/assessment.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/assessment.service.ts ***!
    \************************************************/

  /*! exports provided: AssessmentService */

  /***/
  function srcAppServicesAssessmentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssessmentService", function () {
      return AssessmentService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _helpers_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../helpers/constant */
    "./src/app/helpers/constant.ts");

    var headers = {};

    var AssessmentService = /*#__PURE__*/function () {
      function AssessmentService(http) {
        _classCallCheck(this, AssessmentService);

        this.http = http;
        this.endpointURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _helpers_constant__WEBPACK_IMPORTED_MODULE_4__["AssessmentURL"];
      } // createAuthorizationHeader(type: boolean) {
      //   let basic =
      //     "Basic " + btoa(environment.publicKey + ":" + environment.Password);
      //   if (!type) {
      //     headers = new HttpHeaders({
      //       Authorization: basic,
      //     });
      //   } else {
      //     headers = new HttpHeaders({
      //       "Content-Type": "application/json",
      //       Authorization: basic,
      //     });
      //   }
      //   return headers;
      // }


      _createClass(AssessmentService, [{
        key: "GetAlldecks",
        value: function GetAlldecks() {
          return this.http.get("".concat(this.endpointURL, "decks"));
        }
      }, {
        key: "GetSlides",
        value: function GetSlides(id) {
          return this.http.get("".concat(this.endpointURL, "assessment/slides/") + id);
        }
      }, {
        key: "GetAssessmentResult",
        value: function GetAssessmentResult(id) {
          return this.http.get("".concat(this.endpointURL, "assessment/") + id);
        }
      }, {
        key: "createAssessment",
        value: function createAssessment(input) {
          return this.http.post("".concat(this.endpointURL, "assessment/"), input);
        }
      }, {
        key: "UpdateAssessmentResult",
        value: function UpdateAssessmentResult(input) {
          return this.http.post("".concat(this.endpointURL, "assessments/{assessment_id}/slides/{slide_id}"), input);
        }
      }, {
        key: "BulkUpdateAssessmentResult",
        value: function BulkUpdateAssessmentResult(input, assessmentId) {
          return this.http.put("".concat(this.endpointURL, "assessment/") + assessmentId, input);
        }
      }, {
        key: "getCareerMatches",
        value: function getCareerMatches(sort, page, assessmentId, experience_levels1, experience_levels2, experience_levels3, experience_levels4, experience_levels5, highlighted) {
          https: return this.http.get("".concat(this.endpointURL, "careers/") + assessmentId + "/experience?sort=" + sort + "&highlighted=" + highlighted + "&page=" + page + "&experience_levels=" + experience_levels1 + "&experience_levels=" + experience_levels2 + "&experience_levels=" + experience_levels3 + "&experience_levels=" + experience_levels4 + "&experience_levels=" + experience_levels5);
        }
      }, {
        key: "getSearchCareerMatches",
        value: function getSearchCareerMatches(assessmentId, sort, page, search, experience_levels1, experience_levels2, experience_levels3, experience_levels4, experience_levels5) {
          var experiencelevelString = "";
          if (experience_levels1 == 1) experiencelevelString = experiencelevelString + "&experience_levels=" + experience_levels1;
          if (experience_levels2 == 2) experiencelevelString = experiencelevelString + "&experience_levels=" + experience_levels2;
          if (experience_levels3 == 3) experiencelevelString = experiencelevelString + "&experience_levels=" + experience_levels3;
          if (experience_levels4 == 4) experiencelevelString = experiencelevelString + "&experience_levels=" + experience_levels4;
          if (experience_levels5 == 5) experiencelevelString = experiencelevelString + "&experience_levels=" + experience_levels5;

          https: return this.http.get("".concat(this.endpointURL, "careers/") + assessmentId + "/search?sort=" + sort + "&search=" + search + "&page=" + page + experiencelevelString);
        }
      }, {
        key: "getDashboardReport",
        value: function getDashboardReport() {
          return this.http.get("".concat(this.endpointURL, "reports"));
        }
      }]);

      return AssessmentService;
    }();

    AssessmentService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AssessmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AssessmentService);
    /***/
  },

  /***/
  "./src/app/services/authentication.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/authentication.service.ts ***!
    \****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _endpoint_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./endpoint.service */
    "./src/app/services/endpoint.service.ts");
    /* harmony import */


    var _helpers_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../helpers/constant */
    "./src/app/helpers/constant.ts");
    /* harmony import */


    var _local_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./local.service */
    "./src/app/services/local.service.ts");

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(http, endPoint, localService) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.endPoint = endPoint;
        this.localService = localService;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(this.localService.getJsonValue("currentUser")));
        this.currentUser = this.currentUserSubject.asObservable();
        this.currentTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(this.localService.getJsonValue("currentToken")));
        this.currentToken = this.currentTokenSubject.asObservable();
        this.currentUserDashboardSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(this.localService.getJsonValue("currentUserDashboard")));
        this.currentUserDashboard = this.currentUserDashboardSubject.asObservable();
        this.endpointURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + _helpers_constant__WEBPACK_IMPORTED_MODULE_7__["AuthURL"];
        this.orgendpointURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + _helpers_constant__WEBPACK_IMPORTED_MODULE_7__["CompanyURL"];
        this.assessmentEndppointURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + _helpers_constant__WEBPACK_IMPORTED_MODULE_7__["AssessmentURL"];
      }

      _createClass(AuthenticationService, [{
        key: "createAuthorizationHeader",
        value: function createAuthorizationHeader() {
          var basic = "Basic " + btoa(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].client_id + ":" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].client_secret);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: basic
          });
          return headers;
        }
      }, {
        key: "createplanHeader",
        value: function createplanHeader(header) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Bearer ".concat(header.access_token)
          });
          return headers;
        } //bnV1ZWQ6c2VjcmV0
        // test() {
        //   let data = JSON.stringify({
        //     address: "address",
        //     company: "string",
        //     email: "email",
        //     firstName: "firstname",
        //     interests: "Please put comma seperated interests",
        //     lastName: "lastname",
        //     message: "message",
        //     subject: "subject",
        //     type: "CONTACT",
        //   });
        //   return this.http
        //     .put<any>(
        //       `http://34.68.194.35:9090/nuued-org/api/v1/contact/create`,
        //       data
        //     )
        //     .pipe(
        //       map((response) => {
        //         console.log(response);
        //         return response;
        //       })
        //     );
        // }

      }, {
        key: "login",
        value: function login(user) {
          var _this7 = this;

          var headers = this.createAuthorizationHeader();
          var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("grant_type", "password").set("username", user.Username).set("password", user.Password);
          return this.http.post("".concat(this.endpointURL, "oauth/token"), body.toString(), {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            //    localStorage.setItem("currentToken", JSON.stringify(response));
            _this7.localService.setJsonValue("currentToken", JSON.stringify(response));

            _this7.currentTokenSubject.next(response);

            return response;
          }));
        }
      }, {
        key: "getAllPlanstoken",
        value: function getAllPlanstoken() {
          var headers = this.createAuthorizationHeader();
          var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("grant_type", "client_credentials");
          return this.http.post("".concat(this.endpointURL, "oauth/token"), body.toString(), {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
          }));
        }
      }, {
        key: "getAllPlans",
        value: function getAllPlans(type, header) {
          return this.http.get("".concat(this.orgendpointURL, "plans/type/") + type, {
            headers: this.createplanHeader(header)
          });
        } // getCurrentUser() {
        //   return this.http.get<any>(`${this.endpointURL}api/v1/users/me`).pipe(
        //     map((response) => {
        //       return response;
        //     })
        //   );
        // }

      }, {
        key: "getDashboard",
        value: function getDashboard() {
          var _this8 = this;

          return this.http.get("".concat(this.assessmentEndppointURL, "dashboard/main")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            if (!!response) {
              // localStorage.setItem("currentUser", JSON.stringify(response.user));
              _this8.localService.setJsonValue("currentUser", JSON.stringify(response.user));

              _this8.currentUserSubject.next(response.user);

              var processedObject = _this8.sortByCreatedDate(response); //  localStorage.setItem("currentUserDashboard",JSON.stringify(processedObject));


              _this8.localService.setJsonValue("currentUserDashboard", JSON.stringify(processedObject));

              _this8.currentUserDashboardSubject.next(response);
            }

            return response;
          }));
        }
      }, {
        key: "sortByCreatedDate",
        value: function sortByCreatedDate(response) {
          if (!!response && response.assessmentList.length > 0) {
            response.assessmentList = response.assessmentList.sort(function (a, b) {
              return new Date(a.created_at).valueOf() - new Date(b.created_at).valueOf();
            }).reverse();
          }

          return response;
        }
      }, {
        key: "Register",
        value: function Register(user) {
          return this.http.post("".concat(this.endpointURL, "signup"), user);
        }
      }, {
        key: "getUserProfile",
        value: function getUserProfile() {
          return this.http.get("".concat(this.endpointURL, "api/v1/profile"));
        }
      }, {
        key: "updateUserProfile",
        value: function updateUserProfile(user) {
          return this.http.post("".concat(this.endpointURL, "api/v1/profile"), user);
        }
      }, {
        key: "ForgetPassword",
        value: function ForgetPassword(forgetPassword) {
          return this.http.post("".concat(this.endpointURL, "forgetPassword"), forgetPassword);
        }
      }, {
        key: "SetPassword",
        value: function SetPassword(setPassword) {
          return this.http.post("".concat(this.endpointURL, "setPassword"), setPassword);
        }
      }, {
        key: "SocialLogin",
        value: function SocialLogin(option) {
          var form = document.createElement("form");
          form.method = "POST";
          form.action = "".concat(this.endpointURL, "oauth2/authorize/").concat(option, "?redirect_uri=").concat(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["callbackURL"]);
          document.body.appendChild(form);
          form.submit();
        }
      }, {
        key: "ActivateAccount",
        value: function ActivateAccount(activateAccount) {
          return this.http.post("".concat(this.endpointURL, "activateUser"), activateAccount);
        }
      }, {
        key: "logout",
        value: function logout() {
          // remove user from local storage and set current user to null
          // localStorage.clear();
          this.localService.clearToken();
          this.currentUserSubject.next(null);
          this.currentTokenSubject.next(null);
          this.currentUserDashboardSubject.next(null);
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }, {
        key: "currentTokenValue",
        get: function get() {
          return this.currentTokenSubject.value;
        }
      }, {
        key: "currentUserDashboardValue",
        get: function get() {
          return this.currentUserDashboardSubject.value;
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _endpoint_service__WEBPACK_IMPORTED_MODULE_6__["EndPoint"]
      }, {
        type: _local_service__WEBPACK_IMPORTED_MODULE_8__["LocalService"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/services/company.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/company.service.ts ***!
    \*********************************************/

  /*! exports provided: CompanyService */

  /***/
  function srcAppServicesCompanyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyService", function () {
      return CompanyService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _helpers_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../helpers/constant */
    "./src/app/helpers/constant.ts");

    var CompanyService = /*#__PURE__*/function () {
      function CompanyService(http) {
        _classCallCheck(this, CompanyService);

        this.http = http;
        this.endpointURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + _helpers_constant__WEBPACK_IMPORTED_MODULE_4__["CompanyURL"];
      } ///oauth/token


      _createClass(CompanyService, [{
        key: "getCompany",
        value: function getCompany() {
          return this.http.get("".concat(this.endpointURL, "admin/companies"));
        }
      }, {
        key: "getCompanySubscription",
        value: function getCompanySubscription() {
          return this.http.get("".concat(this.endpointURL, "admin/companies/subscription"));
        }
      }, {
        key: "updateCompany",
        value: function updateCompany(company) {
          return this.http.put("".concat(this.endpointURL, "admin/companies"), company);
        }
      }, {
        key: "getAllCompanies",
        value: function getAllCompanies() {
          return this.http.get("".concat(this.endpointURL, "companies"));
        }
      }, {
        key: "createCompanies",
        value: function createCompanies(company) {
          return this.http.post("".concat(this.endpointURL, "companies"), company);
        }
      }, {
        key: "updateCompanies",
        value: function updateCompanies(id, company) {
          return this.http.put("".concat(this.endpointURL, "companies/") + id, company);
        }
      }, {
        key: "createsubscription",
        value: function createsubscription(id, subscription) {
          return this.http.post("".concat(this.endpointURL, "companies/") + id + "/subscription", subscription);
        }
      }, {
        key: "updatesubscription",
        value: function updatesubscription(id, subscription) {
          return this.http.put("".concat(this.endpointURL, "companies/") + id + "/subscription", subscription);
        }
      }, {
        key: "renewsubscription",
        value: function renewsubscription(id, subscription) {
          return this.http.post("".concat(this.endpointURL, "companies/") + id + "/subscription/renew", subscription);
        }
      }, {
        key: "getAllPlans",
        value: function getAllPlans() {
          return this.http.get("".concat(this.endpointURL, "plans"));
        }
      }, {
        key: "createPlans",
        value: function createPlans(plan) {
          return this.http.post("".concat(this.endpointURL, "plans"), plan);
        }
      }, {
        key: "updatePlans",
        value: function updatePlans(id, plan) {
          return this.http.put("".concat(this.endpointURL, "plans/") + id, plan);
        }
      }, {
        key: "createusersubscription",
        value: function createusersubscription(email, subscription) {
          return this.http.post("".concat(this.endpointURL, "users/") + email + "/subscription", subscription);
        }
      }, {
        key: "updateusersubscription",
        value: function updateusersubscription(email, subscription) {
          return this.http.put("".concat(this.endpointURL, "users/") + email + "/subscription", subscription);
        }
      }, {
        key: "renewusersubscription",
        value: function renewusersubscription(email, subscription) {
          return this.http.post("".concat(this.endpointURL, "users/") + email + "/subscription/renew", subscription);
        }
      }]);

      return CompanyService;
    }();

    CompanyService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], CompanyService);
    /***/
  },

  /***/
  "./src/app/services/endpoint.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/endpoint.service.ts ***!
    \**********************************************/

  /*! exports provided: EndPoint */

  /***/
  function srcAppServicesEndpointServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EndPoint", function () {
      return EndPoint;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _logger_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./logger.service */
    "./src/app/services/logger.service.ts");

    var EndPoint = /*#__PURE__*/function () {
      function EndPoint(http, logger) {
        _classCallCheck(this, EndPoint);

        this.http = http;
        this.logger = logger;
      }

      _createClass(EndPoint, [{
        key: "get",
        value: function get(url, body) {
          var _this9 = this;

          var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl) + url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (swap) {
            _this9.logger.log({
              url: JSON.stringify(swap)
            });

            return swap;
          }));
        }
      }, {
        key: "post",
        value: function post(url, body) {
          var _this10 = this;

          var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl) + url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (swap) {
            _this10.logger.log({
              url: JSON.stringify(swap)
            });

            return swap;
          }));
        }
      }, {
        key: "put",
        value: function put(url, body, header) {
          var _this11 = this;

          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl) + url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (swap) {
            _this11.logger.log({
              url: JSON.stringify(swap)
            });

            return swap;
          }));
        }
      }, {
        key: "delete",
        value: function _delete(url, body) {
          var _this12 = this;

          var header = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl) + url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (swap) {
            _this12.logger.log({
              url: JSON.stringify(swap)
            });

            return swap;
          }));
        }
      }, {
        key: "deleteById",
        value: function deleteById(url, Id, header) {
          var _this13 = this;

          return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl) + url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (swap) {
            _this13.logger.log({
              url: JSON.stringify(swap)
            });

            return swap;
          }));
        }
      }]);

      return EndPoint;
    }();

    EndPoint.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _logger_service__WEBPACK_IMPORTED_MODULE_5__["Logger"]
      }];
    };

    EndPoint = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], EndPoint);
    /***/
  },

  /***/
  "./src/app/services/index.ts":
  /*!***********************************!*\
    !*** ./src/app/services/index.ts ***!
    \***********************************/

  /*! exports provided: AlertService, AuthenticationService, UserService */

  /***/
  function srcAppServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"];
    });
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"];
    });
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/services/user.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"];
    });
    /***/

  },

  /***/
  "./src/app/services/local.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/local.service.ts ***!
    \*******************************************/

  /*! exports provided: LocalService */

  /***/
  function srcAppServicesLocalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocalService", function () {
      return LocalService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./storage.service */
    "./src/app/services/storage.service.ts");

    var LocalService = /*#__PURE__*/function () {
      function LocalService(storageService) {
        _classCallCheck(this, LocalService);

        this.storageService = storageService;
      } // Set the json data to local storage


      _createClass(LocalService, [{
        key: "setJsonValue",
        value: function setJsonValue(key, value) {
          this.storageService.secureStorage.setItem(key, value);
        } // Get the json value from local storage

      }, {
        key: "getJsonValue",
        value: function getJsonValue(key) {
          return this.storageService.secureStorage.getItem(key);
        } // Clear the local storage

      }, {
        key: "clearToken",
        value: function clearToken() {
          return this.storageService.secureStorage.clear();
        }
      }]);

      return LocalService;
    }();

    LocalService.ctorParameters = function () {
      return [{
        type: _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]
      }];
    };

    LocalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], LocalService);
    /***/
  },

  /***/
  "./src/app/services/logger.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/logger.service.ts ***!
    \********************************************/

  /*! exports provided: Logger */

  /***/
  function srcAppServicesLoggerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Logger", function () {
      return Logger;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Logger = /*#__PURE__*/function () {
      function Logger() {
        _classCallCheck(this, Logger);
      }

      _createClass(Logger, [{
        key: "log",
        value: function log(msg) {
          console.log(msg);
        }
      }, {
        key: "error",
        value: function error(msg) {
          console.error(msg);
        }
      }, {
        key: "warn",
        value: function warn(msg) {
          console.warn(msg);
        }
      }]);

      return Logger;
    }();

    Logger = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], Logger);
    /***/
  },

  /***/
  "./src/app/services/storage.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/storage.service.ts ***!
    \*********************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppServicesStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! crypto-js */
    "./node_modules/crypto-js/index.js");
    /* harmony import */


    var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var secure_web_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! secure-web-storage */
    "./node_modules/secure-web-storage/secure-storage.js");
    /* harmony import */


    var secure_web_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(secure_web_storage__WEBPACK_IMPORTED_MODULE_3__);

    var SECRET_KEY = "secret_key";

    var StorageService = function StorageService() {
      _classCallCheck(this, StorageService);

      this.secureStorage = new secure_web_storage__WEBPACK_IMPORTED_MODULE_3__(localStorage, {
        hash: function hash(key) {
          key = crypto_js__WEBPACK_IMPORTED_MODULE_2__["SHA256"](key, SECRET_KEY);
          return key.toString();
        },
        // Encrypt the localstorage data
        encrypt: function encrypt(data) {
          data = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].encrypt(data, SECRET_KEY);
          data = data.toString();
          return data;
        },
        // Decrypt the encrypted data
        decrypt: function decrypt(data) {
          data = crypto_js__WEBPACK_IMPORTED_MODULE_2__["AES"].decrypt(data, SECRET_KEY);
          data = data.toString(crypto_js__WEBPACK_IMPORTED_MODULE_2__["enc"].Utf8);
          return data;
        }
      });
    };

    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], StorageService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      } ///oauth/token


      _createClass(UserService, [{
        key: "register",
        value: function register(user) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "signup"), user);
        }
      }, {
        key: "login",
        value: function login(user) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl, "oauth/token"), user);
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/shared/accordion/accordion.directive.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/accordion/accordion.directive.ts ***!
    \*********************************************************/

  /*! exports provided: AccordionDirective */

  /***/
  function srcAppSharedAccordionAccordionDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionDirective", function () {
      return AccordionDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AccordionDirective = /*#__PURE__*/function () {
      function AccordionDirective(router) {
        _classCallCheck(this, AccordionDirective);

        this.router = router;
        this.navlinks = [];
        this.countState = 0;
      }

      _createClass(AccordionDirective, [{
        key: "closeOtherLinks",
        value: function closeOtherLinks(openLink) {
          this.countState++;

          if ((openLink.group !== 'sub-toggled' || openLink.group !== 'main-toggled') && this.countState === 1) {
            if (window.innerWidth < 768) {
              document.querySelector('#pcoded').setAttribute('vertical-nav-type', 'offcanvas');
              var toggled_element = document.querySelector('#mobile-collapse');
              toggled_element.click();
            } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
              document.querySelector('#pcoded').setAttribute('vertical-nav-type', 'collapsed');
              /*const toggled_element = <HTMLElement>document.querySelector('#mobile-collapse');
              toggled_element.click();*/
            }
          }

          this.navlinks.forEach(function (link) {
            if (link !== openLink && (link.group === 'sub-toggled' || openLink.group !== 'sub-toggled')) {
              link.open = false;
            }
          });
        }
      }, {
        key: "addLink",
        value: function addLink(link) {
          this.navlinks.push(link);
        }
      }, {
        key: "removeGroup",
        value: function removeGroup(link) {
          var index = this.navlinks.indexOf(link);

          if (index !== -1) {
            this.navlinks.splice(index, 1);
          }
        }
      }, {
        key: "getUrl",
        value: function getUrl() {
          return this.router.url;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this._router = this.router.events.filter(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
          }).subscribe(function (event) {
            _this14.countState = 0;

            _this14.navlinks.forEach(function (link) {
              if (link.group) {
                var routeUrl = _this14.getUrl();

                var currentUrl = routeUrl.split('/');

                if (currentUrl.indexOf(link.group) > 0) {
                  link.open = true;

                  _this14.closeOtherLinks(link);
                }
              }
            });
          });
        }
      }]);

      return AccordionDirective;
    }();

    AccordionDirective.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AccordionDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appAccordion]'
    })], AccordionDirective);
    /***/
  },

  /***/
  "./src/app/shared/accordion/accordionanchor.directive.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/accordion/accordionanchor.directive.ts ***!
    \***************************************************************/

  /*! exports provided: AccordionAnchorDirective */

  /***/
  function srcAppSharedAccordionAccordionanchorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function () {
      return AccordionAnchorDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./accordionlink.directive */
    "./src/app/shared/accordion/accordionlink.directive.ts");

    var AccordionAnchorDirective = /*#__PURE__*/function () {
      function AccordionAnchorDirective(navlink) {
        _classCallCheck(this, AccordionAnchorDirective);

        this.navlink = navlink;
      }

      _createClass(AccordionAnchorDirective, [{
        key: "onClick",
        value: function onClick(e) {
          this.navlink.toggle();
        }
      }]);

      return AccordionAnchorDirective;
    }();

    AccordionAnchorDirective.ctorParameters = function () {
      return [{
        type: _accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"]]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event'])], AccordionAnchorDirective.prototype, "onClick", null);
    AccordionAnchorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appAccordionToggle]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"]))], AccordionAnchorDirective);
    /***/
  },

  /***/
  "./src/app/shared/accordion/accordionlink.directive.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/accordion/accordionlink.directive.ts ***!
    \*************************************************************/

  /*! exports provided: AccordionLinkDirective */

  /***/
  function srcAppSharedAccordionAccordionlinkDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function () {
      return AccordionLinkDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./accordion.directive */
    "./src/app/shared/accordion/accordion.directive.ts");

    var AccordionLinkDirective = /*#__PURE__*/function () {
      function AccordionLinkDirective(nav) {
        _classCallCheck(this, AccordionLinkDirective);

        this.nav = nav;
      }

      _createClass(AccordionLinkDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.nav.addLink(this);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.nav.removeGroup(this);
        }
      }, {
        key: "toggle",
        value: function toggle() {
          /*for slimscroll on and off*/
          document.querySelector('.pcoded-inner-navbar').classList.add('scroll-sidebar');
          this.open = !this.open;
        }
      }, {
        key: "open",
        get: function get() {
          return this._open;
        },
        set: function set(value) {
          this._open = value;
          /*for slimscroll on and off*/

          document.querySelector('.pcoded-inner-navbar').classList.toggle('scroll-sidebar');

          if (value) {
            this.nav.closeOtherLinks(this);
          }
        }
      }]);

      return AccordionLinkDirective;
    }();

    AccordionLinkDirective.ctorParameters = function () {
      return [{
        type: _accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AccordionLinkDirective.prototype, "group", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.pcoded-trigger'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AccordionLinkDirective.prototype, "open", null);
    AccordionLinkDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appAccordionLink]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]))], AccordionLinkDirective);
    /***/
  },

  /***/
  "./src/app/shared/accordion/index.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/accordion/index.ts ***!
    \*******************************************/

  /*! exports provided: AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective */

  /***/
  function srcAppSharedAccordionIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./accordionanchor.directive */
    "./src/app/shared/accordion/accordionanchor.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function () {
      return _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionAnchorDirective"];
    });
    /* harmony import */


    var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./accordionlink.directive */
    "./src/app/shared/accordion/accordionlink.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function () {
      return _accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"];
    });
    /* harmony import */


    var _accordion_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./accordion.directive */
    "./src/app/shared/accordion/accordion.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AccordionDirective", function () {
      return _accordion_directive__WEBPACK_IMPORTED_MODULE_3__["AccordionDirective"];
    });
    /***/

  },

  /***/
  "./src/app/shared/card/card-animation.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/card/card-animation.ts ***!
    \***********************************************/

  /*! exports provided: cardToggle, cardClose */

  /***/
  function srcAppSharedCardCardAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cardToggle", function () {
      return cardToggle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cardClose", function () {
      return cardClose;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var cardToggle = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('cardToggle', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      overflow: 'hidden',
      height: '0px'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      height: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"]
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('collapsed <=> expanded', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')])]);
    var cardClose = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])("cardClose", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("open", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 1
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])("closed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 0,
      display: 'none'
    })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])("open <=> closed", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])("400ms"))]);
    /***/
  },

  /***/
  "./src/app/shared/card/card-refresh.directive.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/card/card-refresh.directive.ts ***!
    \*******************************************************/

  /*! exports provided: CardRefreshDirective */

  /***/
  function srcAppSharedCardCardRefreshDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardRefreshDirective", function () {
      return CardRefreshDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CardRefreshDirective = /*#__PURE__*/function () {
      function CardRefreshDirective(el) {
        _classCallCheck(this, CardRefreshDirective);

        this.el = el;
      }

      _createClass(CardRefreshDirective, [{
        key: "open",
        value: function open() {
          this.el.nativeElement.classList.add('rotate-refresh');
        }
      }, {
        key: "close",
        value: function close() {
          this.el.nativeElement.classList.remove('rotate-refresh');
        }
      }]);

      return CardRefreshDirective;
    }();

    CardRefreshDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter')], CardRefreshDirective.prototype, "open", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave')], CardRefreshDirective.prototype, "close", null);
    CardRefreshDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[cardRefresh]'
    })], CardRefreshDirective);
    /***/
  },

  /***/
  "./src/app/shared/card/card-toggle.directive.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/card/card-toggle.directive.ts ***!
    \******************************************************/

  /*! exports provided: CardToggleDirective */

  /***/
  function srcAppSharedCardCardToggleDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardToggleDirective", function () {
      return CardToggleDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CardToggleDirective = /*#__PURE__*/function () {
      function CardToggleDirective(el) {
        _classCallCheck(this, CardToggleDirective);

        this.el = el;
      }

      _createClass(CardToggleDirective, [{
        key: "onToggle",
        value: function onToggle($event) {
          $event.preventDefault();
          this.el.nativeElement.classList.toggle('icon-up');
        }
      }]);

      return CardToggleDirective;
    }();

    CardToggleDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event'])], CardToggleDirective.prototype, "onToggle", null);
    CardToggleDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[cardToggleEvent]'
    })], CardToggleDirective);
    /***/
  },

  /***/
  "./src/app/shared/card/card.component.css":
  /*!************************************************!*\
    !*** ./src/app/shared/card/card.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedCardCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card-header-right {\n    z-index: 999;\n}\n\n.card.full-card {\n  position: fixed;\n  top: 56px;\n  z-index: 99999;\n  box-shadow: none;\n  left: 0;\n  border-radius: 0;\n  border: 1px solid #ddd;\n  width: 100vw;\n  height: calc(100vh - 56px);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaGVhZGVyLXJpZ2h0IHtcbiAgICB6LWluZGV4OiA5OTk7XG59XG5cbi5jYXJkLmZ1bGwtY2FyZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1NnB4O1xuICB6LWluZGV4OiA5OTk5OTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/card/card.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/card/card.component.ts ***!
    \***********************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppSharedCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _card_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./card-animation */
    "./src/app/shared/card/card-animation.ts");

    var CardComponent = /*#__PURE__*/function () {
      function CardComponent() {
        _classCallCheck(this, CardComponent);

        this.classHeader = false;
        this.cardToggle = 'expanded';
        this.cardClose = 'open';
        this.fullCardIcon = 'fa-expand';
      }

      _createClass(CardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleCard",
        value: function toggleCard() {
          this.cardToggle = this.cardToggle === 'collapsed' ? 'expanded' : 'collapsed';
        }
      }, {
        key: "closeCard",
        value: function closeCard() {
          this.cardClose = this.cardClose === 'closed' ? 'open' : 'closed';
        }
      }, {
        key: "fullScreen",
        value: function fullScreen(event) {
          this.fullCard = this.fullCard === 'full-card' ? '' : 'full-card';
          this.fullCardIcon = this.fullCardIcon === 'fa-expand' ? 'fa-compress' : 'fa-expand';
        }
      }]);

      return CardComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "headerContent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "blockClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "cardClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CardComponent.prototype, "classHeader", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/card/card.component.html"))["default"],
      animations: [_card_animation__WEBPACK_IMPORTED_MODULE_2__["cardToggle"], _card_animation__WEBPACK_IMPORTED_MODULE_2__["cardClose"]],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card.component.css */
      "./src/app/shared/card/card.component.css"))["default"]]
    })], CardComponent);
    /***/
  },

  /***/
  "./src/app/shared/elements/data-filter.pipe.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/elements/data-filter.pipe.ts ***!
    \*****************************************************/

  /*! exports provided: DataFilterPipe */

  /***/
  function srcAppSharedElementsDataFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataFilterPipe", function () {
      return DataFilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DataFilterPipe = /*#__PURE__*/function () {
      function DataFilterPipe() {
        _classCallCheck(this, DataFilterPipe);
      }

      _createClass(DataFilterPipe, [{
        key: "transform",
        value: function transform(array, query) {
          if (query) {
            return lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](array, function (row) {
              return row.name.indexOf(query) > -1;
            });
          }

          return array;
        }
      }]);

      return DataFilterPipe;
    }();

    DataFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
      name: "dataFilter"
    })], DataFilterPipe);
    /***/
  },

  /***/
  "./src/app/shared/elements/parent-remove.directive.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/elements/parent-remove.directive.ts ***!
    \************************************************************/

  /*! exports provided: ParentRemoveDirective */

  /***/
  function srcAppSharedElementsParentRemoveDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParentRemoveDirective", function () {
      return ParentRemoveDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ParentRemoveDirective = /*#__PURE__*/function () {
      function ParentRemoveDirective(elements) {
        _classCallCheck(this, ParentRemoveDirective);

        this.elements = elements;
      }

      _createClass(ParentRemoveDirective, [{
        key: "onToggle",
        value: function onToggle($event) {
          $event.preventDefault();
          this.alert_parent = this.elements.nativeElement.parentElement;
          this.alert_parent.remove();
        }
      }]);

      return ParentRemoveDirective;
    }();

    ParentRemoveDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event'])], ParentRemoveDirective.prototype, "onToggle", null);
    ParentRemoveDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[parentRemove]'
    })], ParentRemoveDirective);
    /***/
  },

  /***/
  "./src/app/shared/fullscreen/toggle-fullscreen.directive.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/fullscreen/toggle-fullscreen.directive.ts ***!
    \******************************************************************/

  /*! exports provided: ToggleFullscreenDirective */

  /***/
  function srcAppSharedFullscreenToggleFullscreenDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToggleFullscreenDirective", function () {
      return ToggleFullscreenDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! screenfull */
    "./node_modules/screenfull/dist/screenfull.js");
    /* harmony import */


    var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);

    var ToggleFullscreenDirective = /*#__PURE__*/function () {
      function ToggleFullscreenDirective() {
        _classCallCheck(this, ToggleFullscreenDirective);
      }

      _createClass(ToggleFullscreenDirective, [{
        key: "onClick",
        value: function onClick() {
          if (screenfull__WEBPACK_IMPORTED_MODULE_2__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_2__["toggle"]();
          }
        }
      }]);

      return ToggleFullscreenDirective;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')], ToggleFullscreenDirective.prototype, "onClick", null);
    ToggleFullscreenDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appToggleFullscreen]'
    })], ToggleFullscreenDirective);
    /***/
  },

  /***/
  "./src/app/shared/menu-items/menu-items.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/menu-items/menu-items.ts ***!
    \*************************************************/

  /*! exports provided: MenuItems */

  /***/
  function srcAppSharedMenuItemsMenuItemsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuItems", function () {
      return MenuItems;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MENUITEMS = [{
      type: "account",
      label: "My Account",
      main: [{
        main_state: "auth",
        state: "login",
        name: "Home",
        type: "link",
        icon: "fa fa-home"
      }, {
        main_state: "settings",
        state: "profile",
        name: "My Profile",
        type: "link",
        icon: "fa fa-user"
      }, {
        main_state: "settings",
        state: "results",
        name: "My Assessments",
        type: "link",
        icon: "fa fa-file-text"
      }]
    }, {
      type: "company",
      label: "My Company",
      main: [{
        main_state: "auth",
        state: "login",
        name: "Home",
        type: "link",
        icon: "fa fa-home"
      }, {
        main_state: "company",
        state: "dashboard",
        name: "Dashboard View",
        type: "link",
        icon: "fa fa-tachometer"
      }, {
        main_state: "company",
        state: "detail",
        name: "My Company Profile",
        type: "link",
        icon: "fa fa-university"
      }, {
        main_state: "company",
        state: "subscription",
        name: "Subscription Details",
        type: "link",
        icon: "fa fa-plug"
      }]
    }, {
      type: "admin",
      label: "System Admin",
      main: [{
        main_state: "auth",
        state: "login",
        name: "Home",
        type: "link",
        icon: "fa fa-home"
      }, {
        main_state: "admin",
        state: "managecompany",
        name: "Manage Companies",
        type: "link",
        icon: "fa fa-users"
      }, {
        main_state: "admin",
        state: "managesubscription",
        name: "Manage Plans",
        type: "link",
        icon: "fa fa-map-signs"
      }, {
        main_state: "admin",
        state: "manageusers",
        name: "Manage Users",
        type: "link",
        icon: "fa fa-universal-access"
      }]
    }];

    var MenuItems = /*#__PURE__*/function () {
      function MenuItems() {
        _classCallCheck(this, MenuItems);
      }

      _createClass(MenuItems, [{
        key: "getAll",
        value: function getAll(type) {
          return MENUITEMS.filter(function (s) {
            return s.type === type;
          });
        }
      }]);

      return MenuItems;
    }();

    MenuItems = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], MenuItems);
    /***/
  },

  /***/
  "./src/app/shared/modal-animation/modal-animation.component.css":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/modal-animation/modal-animation.component.css ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedModalAnimationModalAnimationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".md-close-btn {\n    border: 0;\n    background: none;\n    color: #ffffff;\n    position: absolute;\n    top: 21px;\n    right: 16px;\n    font-size: 1.2em;\n    cursor: pointer;\n}\n\n/* General styles for the modal */\n\n/*\nStyles for the html/body for special modal where we want 3d effects\nNote that we need a container wrapping all content on the page for the\nperspective effects (not including the modals and the overlay).\n*/\n\n.md-perspective,\n.md-perspective body {\n    height: 100%;\n    overflow: hidden;\n}\n\n.md-perspective body  {\n    background: #222;\n    -webkit-perspective: 600px;\n    perspective: 600px;\n}\n\n.container {\n    min-height: 100%;\n}\n\n.md-modal {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    width: 50%;\n    max-width: 630px;\n    min-width: 320px;\n    height: auto;\n    z-index: 2000;\n    visibility: hidden;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-transform: translateX(-50%) translateY(-50%);\n            transform: translateX(-50%) translateY(-50%);\n}\n\n.md-show {\n    visibility: visible;\n}\n\n.md-overlay {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    visibility: hidden;\n    top: 0;\n    left: 0;\n    z-index: 1100;\n    opacity: 0;\n    background: rgba(55, 58, 60, 0.65);\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n\n.md-show ~ .md-overlay {\n    opacity: 1;\n    visibility: visible;\n}\n\n/* Content styles */\n\n.md-content {\n    color: #666666;\n    background: #fff;\n    position: relative;\n    border-radius: 3px;\n    margin: 0 auto;\n}\n\n.md-content h3 {\n    color: #fff;\n    margin: 0;\n    padding: 0.4em;\n    text-align: center;\n    font-size: 2.4em;\n    font-weight: 300;\n    opacity: 0.8;\n    background: rgba(0, 115, 170, 0.93);\n    border-radius: 3px 3px 0 0;\n}\n\n.md-content > div {\n    padding: 15px 40px 30px;\n    margin: 0;\n    font-weight: 300;\n    font-size: 1.15em;\n}\n\n.md-content > div p {\n    margin: 0;\n    padding: 10px 0;\n}\n\n.md-content > div ul {\n    margin: 0;\n    padding: 0 0 30px 20px;\n}\n\n.md-content > div ul li {\n    padding: 5px 0;\n}\n\n.md-content button {\n    display: block;\n    margin: 0 auto;\n    font-size: 0.8em;\n}\n\n/* Individual modal styles with animations/transitions */\n\n/* Effect 1: Fade in and scale up */\n\n.md-effect-1 .md-content {\n    -webkit-transform: scale(0.7);\n            transform: scale(0.7);\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n\n.md-show.md-effect-1 .md-content {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n}\n\n/* Effect 2: Slide from the right */\n\n.md-effect-2 .md-content {\n    -webkit-transform: translateX(20%);\n            transform: translateX(20%);\n    opacity: 0;\n    -webkit-transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);\n    transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);\n}\n\n.md-show.md-effect-2 .md-content {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n}\n\n/* Effect 3: Slide from the bottom */\n\n.md-effect-3 .md-content {\n    -webkit-transform: translateY(20%);\n            transform: translateY(20%);\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n\n.md-show.md-effect-3 .md-content {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n}\n\n/* Effect 4: Newspaper */\n\n.md-effect-4 .md-content {\n    -webkit-transform: scale(0) rotate(720deg);\n            transform: scale(0) rotate(720deg);\n    opacity: 0;\n}\n\n.md-show.md-effect-4 ~ .md-overlay,\n.md-effect-4 .md-content {\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s;\n}\n\n.md-show.md-effect-4 .md-content {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg);\n    opacity: 1;\n}\n\n/* Effect 5: fall */\n\n.md-effect-5.md-modal {\n    -webkit-perspective: 1300px;\n            perspective: 1300px;\n}\n\n.md-effect-5 .md-content {\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n    -webkit-transform: translateZ(600px) rotateX(20deg);\n            transform: translateZ(600px) rotateX(20deg);\n    opacity: 0;\n}\n\n.md-show.md-effect-5 .md-content {\n    -webkit-transition: all 0.3s ease-in;\n    transition: all 0.3s ease-in;\n    -webkit-transform: translateZ(0px) rotateX(0deg);\n            transform: translateZ(0px) rotateX(0deg);\n    opacity: 1;\n}\n\n/* Effect 6: side fall */\n\n.md-effect-6.md-modal {\n    -webkit-perspective: 1300px;\n            perspective: 1300px;\n}\n\n.md-effect-6 .md-content {\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n    -webkit-transform: translate(30%) translateZ(600px) rotate(10deg);\n            transform: translate(30%) translateZ(600px) rotate(10deg);\n    opacity: 0;\n}\n\n.md-show.md-effect-6 .md-content {\n    -webkit-transition: all 0.3s ease-in;\n    transition: all 0.3s ease-in;\n    -webkit-transform: translate(0%) translateZ(0) rotate(0deg);\n            transform: translate(0%) translateZ(0) rotate(0deg);\n    opacity: 1;\n}\n\n/* Effect 7:  slide and stick to top */\n\n.md-effect-7{\n    top: 0;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n}\n\n.md-effect-7 .md-content {\n    -webkit-transform: translateY(-200%);\n            transform: translateY(-200%);\n    -webkit-transition: all .3s;\n    transition: all .3s;\n    opacity: 0;\n}\n\n.md-show.md-effect-7 .md-content {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n    border-radius: 0 0 3px 3px;\n    opacity: 1;\n}\n\n/* Effect 8: 3D flip horizontal */\n\n.md-effect-8.md-modal {\n    -webkit-perspective: 1300px;\n            perspective: 1300px;\n}\n\n.md-effect-8 .md-content {\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n    -webkit-transform: rotateY(-70deg);\n            transform: rotateY(-70deg);\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    opacity: 0;\n}\n\n.md-show.md-effect-8 .md-content {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg);\n    opacity: 1;\n}\n\n/* Effect 9: 3D flip vertical */\n\n.md-effect-9.md-modal {\n    -webkit-perspective: 1300px;\n            perspective: 1300px;\n}\n\n.md-effect-9 .md-content {\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n    -webkit-transform: rotateX(-70deg);\n            transform: rotateX(-70deg);\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    opacity: 0;\n}\n\n.md-show.md-effect-9 .md-content {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1;\n}\n\n/* Effect 10: 3D sign */\n\n.md-effect-10.md-modal {\n    -webkit-perspective: 1300px;\n            perspective: 1300px;\n}\n\n.md-effect-10 .md-content {\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n    -webkit-transform: rotateX(-60deg);\n            transform: rotateX(-60deg);\n    -webkit-transform-origin: 50% 0;\n            transform-origin: 50% 0;\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n\n.md-show.md-effect-10 .md-content {\n    -webkit-transform: rotateX(0deg);\n            transform: rotateX(0deg);\n    opacity: 1;\n}\n\n/* Effect 11: Super scaled */\n\n.md-effect-11 .md-content {\n    -webkit-transform: scale(2);\n            transform: scale(2);\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n\n.md-show.md-effect-11 .md-content {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n}\n\n/* Effect 12:  Just me */\n\n.md-effect-12 .md-content {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n\n.md-show.md-effect-12 ~ .md-overlay {\n    background: #0073aa;\n}\n\n.md-effect-12 .md-content h3,\n.md-effect-12 .md-content {\n    color: #fff;\n    background: transparent;\n}\n\n.md-show.md-effect-12 .md-content {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n    border: 1px solid #fff;\n}\n\n/* Effect 13: 3D slit */\n\n.md-effect-13.md-modal {\n    -webkit-perspective: 1300px;\n            perspective: 1300px;\n}\n\n.md-effect-13 .md-content {\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n    -webkit-transform: translateZ(-3000px) rotateY(90deg);\n            transform: translateZ(-3000px) rotateY(90deg);\n    opacity: 0;\n}\n\n.md-show.md-effect-13 .md-content {\n    -webkit-animation: slit .7s forwards ease-out;\n            animation: slit .7s forwards ease-out;\n}\n\n@-webkit-keyframes slit {\n    50% { -webkit-transform: translateZ(-250px) rotateY(89deg); transform: translateZ(-250px) rotateY(89deg); opacity: 1; -webkit-animation-timing-function: ease-in; animation-timing-function: ease-in;}\n    100% { -webkit-transform: translateZ(0) rotateY(0deg); transform: translateZ(0) rotateY(0deg); opacity: 1; }\n}\n\n@keyframes slit {\n    50% { -webkit-transform: translateZ(-250px) rotateY(89deg); transform: translateZ(-250px) rotateY(89deg); opacity: 1; -webkit-animation-timing-function: ease-in; animation-timing-function: ease-in;}\n    100% { -webkit-transform: translateZ(0) rotateY(0deg); transform: translateZ(0) rotateY(0deg); opacity: 1; }\n}\n\n/* Effect 14:  3D Rotate from bottom */\n\n.md-effect-14.md-modal {\n    -webkit-perspective: 1300px;\n            perspective: 1300px;\n}\n\n.md-effect-14 .md-content {\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n    -webkit-transform: translateY(100%) rotateX(90deg);\n            transform: translateY(100%) rotateX(90deg);\n    -webkit-transform-origin: 0 100%;\n            transform-origin: 0 100%;\n    opacity: 0;\n    -webkit-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out;\n}\n\n.md-show.md-effect-14 .md-content {\n    -webkit-transform: translateY(0%) rotateX(0deg);\n            transform: translateY(0%) rotateX(0deg);\n    opacity: 1;\n}\n\n/* Effect 15:  3D Rotate in from left */\n\n.md-effect-15.md-modal {\n    -webkit-perspective: 1300px;\n            perspective: 1300px;\n}\n\n.md-effect-15 .md-content {\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n    -webkit-transform: translateZ(100px) translateX(-30%) rotateY(90deg);\n            transform: translateZ(100px) translateX(-30%) rotateY(90deg);\n    -webkit-transform-origin: 0 100%;\n            transform-origin: 0 100%;\n    opacity: 0;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n\n.md-show.md-effect-15 .md-content {\n    -webkit-transform: translateZ(0px) translateX(0%) rotateY(0deg);\n            transform: translateZ(0px) translateX(0%) rotateY(0deg);\n    opacity: 1;\n}\n\n/* Effect 16:  Blur */\n\n.md-show.md-effect-16 ~ .md-overlay {\n    background: rgba(180,46,32,0.5);\n}\n\n.md-show.md-effect-16 ~ .container {\n    -webkit-filter: blur(3px);\n            filter: blur(3px);\n}\n\n.md-effect-16 .md-content {\n    -webkit-transform: translateY(-5%);\n            transform: translateY(-5%);\n    opacity: 0;\n}\n\n.md-show.md-effect-16 ~ .container,\n.md-effect-16 .md-content {\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n}\n\n.md-show.md-effect-16 .md-content {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n}\n\n/* Effect 17:  Slide in from bottom with perspective on container */\n\n.md-show.md-effect-17 ~ .container {\n    height: 100%;\n    overflow: hidden;\n    -webkit-transition: -webkit-transform 0.3s;\n    transition: -webkit-transform 0.3s;\n    transition: transform 0.3s;\n    transition: transform 0.3s, -webkit-transform 0.3s;\n}\n\n.md-show.md-effect-17 ~ .container,\n.md-show.md-effect-17 ~ .md-overlay  {\n    -webkit-transform: rotateX(-2deg);\n            transform: rotateX(-2deg);\n    -webkit-transform-origin: 50% 0%;\n            transform-origin: 50% 0%;\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n}\n\n.md-effect-17 .md-content {\n    opacity: 0;\n    -webkit-transform: translateY(200%);\n            transform: translateY(200%);\n}\n\n.md-show.md-effect-17 .md-content {\n    opacity: 1;\n    -webkit-transition: all 0.3s 0.2s;\n    transition: all 0.3s 0.2s;\n}\n\n/* Effect 18:  Slide from right with perspective on container */\n\n.md-show.md-effect-18 ~ .container {\n    height: 100%;\n    overflow: hidden;\n}\n\n.md-show.md-effect-18 ~ .md-overlay {\n    background: rgba(143,27,15,0.8);\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s;\n}\n\n.md-show.md-effect-18 ~ .container,\n.md-show.md-effect-18 ~ .md-overlay {\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n    -webkit-transform-origin: 0% 50%;\n            transform-origin: 0% 50%;\n    -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;\n            animation: rotateRightSideFirst 0.5s forwards ease-in;\n}\n\n@-webkit-keyframes rotateRightSideFirst {\n    50% { -webkit-transform: translateZ(-50px) rotateY(5deg); transform: translateZ(-50px) rotateY(5deg); -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }\n    100% { -webkit-transform: translateZ(-200px); transform: translateZ(-200px); }\n}\n\n@keyframes rotateRightSideFirst {\n    50% { -webkit-transform: translateZ(-50px) rotateY(5deg); transform: translateZ(-50px) rotateY(5deg); -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }\n    100% { -webkit-transform: translateZ(-200px); transform: translateZ(-200px); }\n}\n\n.md-effect-18 .md-content {\n    -webkit-transform: translateX(200%);\n            transform: translateX(200%);\n    opacity: 0;\n}\n\n.md-show.md-effect-18 .md-content {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    opacity: 1;\n    -webkit-transition: all 0.5s 0.1s;\n    transition: all 0.5s 0.1s;\n}\n\n/* Effect 19:  Slip in from the top with perspective on container */\n\n.md-show.md-effect-19 ~ .container {\n    height: 100%;\n    overflow: hidden;\n}\n\n.md-show.md-effect-19 ~ .md-overlay {\n    -webkit-transition: all 0.5s;\n    transition: all 0.5s;\n}\n\n.md-show.md-effect-19 ~ .container,\n.md-show.md-effect-19 ~ .md-overlay {\n    -webkit-transform-style: preserve-3d;\n            transform-style: preserve-3d;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-animation: OpenTop 0.5s forwards ease-in;\n            animation: OpenTop 0.5s forwards ease-in;\n}\n\n@-webkit-keyframes OpenTop {\n    50% {\n        -webkit-transform: rotateX(10deg);\n                transform: rotateX(10deg);\n        -webkit-animation-timing-function: ease-out;\n                animation-timing-function: ease-out;\n    }\n}\n\n@keyframes OpenTop {\n    50% {\n        -webkit-transform: rotateX(10deg);\n                transform: rotateX(10deg);\n        -webkit-animation-timing-function: ease-out;\n                animation-timing-function: ease-out;\n    }\n}\n\n.md-effect-19 .md-content {\n    -webkit-transform: translateY(-200%);\n            transform: translateY(-200%);\n    opacity: 0;\n}\n\n.md-show.md-effect-19 .md-content {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    opacity: 1;\n    -webkit-transition: all 0.5s 0.1s;\n    transition: all 0.5s 0.1s;\n}\n\n@media screen and (max-width: 32em) {\n    body { font-size: 75%; }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZGFsLWFuaW1hdGlvbi9tb2RhbC1hbmltYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBLGlDQUFpQzs7QUFFakM7Ozs7Q0FJQzs7QUFDRDs7SUFFSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUUxQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLG9EQUE0QztZQUE1Qyw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2IsVUFBVTtJQUNWLGtDQUFrQztJQUNsQyw0QkFBNEI7SUFFNUIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQSxtQkFBbUI7O0FBQ25CO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQSx3REFBd0Q7O0FBRXhELG1DQUFtQzs7QUFDbkM7SUFDSSw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDViw0QkFBb0I7SUFBcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUEsbUNBQW1DOztBQUNuQztJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsVUFBVTtJQUNWLDhEQUFzRDtJQUF0RCxzREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLFVBQVU7QUFDZDs7QUFFQSxvQ0FBb0M7O0FBQ3BDO0lBQ0ksa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixVQUFVO0lBQ1YsNEJBQW9CO0lBQXBCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsVUFBVTtBQUNkOztBQUVBLHdCQUF3Qjs7QUFDeEI7SUFDSSwwQ0FBa0M7WUFBbEMsa0NBQWtDO0lBQ2xDLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSw0QkFBb0I7SUFBcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyxVQUFVO0FBQ2Q7O0FBRUEsbUJBQW1COztBQUNuQjtJQUNJLDJCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLG1EQUEyQztZQUEzQywyQ0FBMkM7SUFDM0MsVUFBVTtBQUNkOztBQUVBO0lBQ0ksb0NBQTRCO0lBQTVCLDRCQUE0QjtJQUM1QixnREFBd0M7WUFBeEMsd0NBQXdDO0lBQ3hDLFVBQVU7QUFDZDs7QUFFQSx3QkFBd0I7O0FBQ3hCO0lBQ0ksMkJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsaUVBQXlEO1lBQXpELHlEQUF5RDtJQUN6RCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxvQ0FBNEI7SUFBNUIsNEJBQTRCO0lBQzVCLDJEQUFtRDtZQUFuRCxtREFBbUQ7SUFDbkQsVUFBVTtBQUNkOztBQUVBLHNDQUFzQzs7QUFDdEM7SUFDSSxNQUFNO0lBQ04sbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsMkJBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixVQUFVO0FBQ2Q7O0FBRUEsaUNBQWlDOztBQUNqQztJQUNJLDJCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsNEJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLFVBQVU7QUFDZDs7QUFFQSwrQkFBK0I7O0FBQy9CO0lBQ0ksMkJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQiw0QkFBb0I7SUFBcEIsb0JBQW9CO0lBQ3BCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsVUFBVTtBQUNkOztBQUVBLHVCQUF1Qjs7QUFDdkI7SUFDSSwyQkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLDRCQUFvQjtJQUFwQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLFVBQVU7QUFDZDs7QUFFQSw0QkFBNEI7O0FBQzVCO0lBQ0ksMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsNEJBQW9CO0lBQXBCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBLHdCQUF3Qjs7QUFDeEI7SUFDSSw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDViw0QkFBb0I7SUFBcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwyQkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUEsdUJBQXVCOztBQUN2QjtJQUNJLDJCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLHFEQUE2QztZQUE3Qyw2Q0FBNkM7SUFDN0MsVUFBVTtBQUNkOztBQUVBO0lBQ0ksNkNBQXFDO1lBQXJDLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLE1BQU0sb0RBQTRDLEVBQTVDLDRDQUE0QyxFQUFFLFVBQVUsRUFBRSwwQ0FBa0MsRUFBbEMsa0NBQWtDLENBQUM7SUFDbkcsT0FBTyw4Q0FBc0MsRUFBdEMsc0NBQXNDLEVBQUUsVUFBVSxFQUFFO0FBQy9EOztBQUhBO0lBQ0ksTUFBTSxvREFBNEMsRUFBNUMsNENBQTRDLEVBQUUsVUFBVSxFQUFFLDBDQUFrQyxFQUFsQyxrQ0FBa0MsQ0FBQztJQUNuRyxPQUFPLDhDQUFzQyxFQUF0QyxzQ0FBc0MsRUFBRSxVQUFVLEVBQUU7QUFDL0Q7O0FBRUEsc0NBQXNDOztBQUN0QztJQUNJLDJCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLGtEQUEwQztZQUExQywwQ0FBMEM7SUFDMUMsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1YscUNBQTZCO0lBQTdCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLCtDQUF1QztZQUF2Qyx1Q0FBdUM7SUFDdkMsVUFBVTtBQUNkOztBQUVBLHVDQUF1Qzs7QUFDdkM7SUFDSSwyQkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixvRUFBNEQ7WUFBNUQsNERBQTREO0lBQzVELGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsVUFBVTtJQUNWLDRCQUFvQjtJQUFwQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSwrREFBdUQ7WUFBdkQsdURBQXVEO0lBQ3ZELFVBQVU7QUFDZDs7QUFFQSxxQkFBcUI7O0FBQ3JCO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0kseUJBQWlCO1lBQWpCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsVUFBVTtBQUNkOztBQUVBOztJQUVJLDRCQUFvQjtJQUFwQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLFVBQVU7QUFDZDs7QUFFQSxtRUFBbUU7O0FBQ25FO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQiwwQ0FBMEI7SUFBMUIsa0NBQTBCO0lBQTFCLDBCQUEwQjtJQUExQixrREFBMEI7QUFDOUI7O0FBRUE7O0lBRUksaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLG9DQUE0QjtZQUE1Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQ0FBeUI7SUFBekIseUJBQXlCO0FBQzdCOztBQUVBLCtEQUErRDs7QUFDL0Q7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLDRCQUE0QjtJQUU1QixvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLDZEQUFxRDtZQUFyRCxxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxNQUFNLGtEQUEwQyxFQUExQywwQ0FBMEMsRUFBRSwyQ0FBbUMsRUFBbkMsbUNBQW1DLEVBQUU7SUFDdkYsT0FBTyxxQ0FBNkIsRUFBN0IsNkJBQTZCLEVBQUU7QUFDMUM7O0FBSEE7SUFDSSxNQUFNLGtEQUEwQyxFQUExQywwQ0FBMEMsRUFBRSwyQ0FBbUMsRUFBbkMsbUNBQW1DLEVBQUU7SUFDdkYsT0FBTyxxQ0FBNkIsRUFBN0IsNkJBQTZCLEVBQUU7QUFDMUM7O0FBRUE7SUFDSSxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsVUFBVTtJQUNWLGlDQUF5QjtJQUF6Qix5QkFBeUI7QUFDN0I7O0FBRUEsbUVBQW1FOztBQUNuRTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw0QkFBb0I7SUFBcEIsb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLG9DQUE0QjtZQUE1Qiw0QkFBNEI7SUFDNUIsa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixnREFBd0M7WUFBeEMsd0NBQXdDO0FBQzVDOztBQUdBO0lBQ0k7UUFDSSxpQ0FBeUI7Z0JBQXpCLHlCQUF5QjtRQUN6QiwyQ0FBbUM7Z0JBQW5DLG1DQUFtQztJQUN2QztBQUNKOztBQUxBO0lBQ0k7UUFDSSxpQ0FBeUI7Z0JBQXpCLHlCQUF5QjtRQUN6QiwyQ0FBbUM7Z0JBQW5DLG1DQUFtQztJQUN2QztBQUNKOztBQUVBO0lBQ0ksb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixpQ0FBeUI7SUFBekIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksT0FBTyxjQUFjLEVBQUU7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbW9kYWwtYW5pbWF0aW9uL21vZGFsLWFuaW1hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1kLWNsb3NlLWJ0biB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjFweDtcbiAgICByaWdodDogMTZweDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogR2VuZXJhbCBzdHlsZXMgZm9yIHRoZSBtb2RhbCAqL1xuXG4vKlxuU3R5bGVzIGZvciB0aGUgaHRtbC9ib2R5IGZvciBzcGVjaWFsIG1vZGFsIHdoZXJlIHdlIHdhbnQgM2QgZWZmZWN0c1xuTm90ZSB0aGF0IHdlIG5lZWQgYSBjb250YWluZXIgd3JhcHBpbmcgYWxsIGNvbnRlbnQgb24gdGhlIHBhZ2UgZm9yIHRoZVxucGVyc3BlY3RpdmUgZWZmZWN0cyAobm90IGluY2x1ZGluZyB0aGUgbW9kYWxzIGFuZCB0aGUgb3ZlcmxheSkuXG4qL1xuLm1kLXBlcnNwZWN0aXZlLFxuLm1kLXBlcnNwZWN0aXZlIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubWQtcGVyc3BlY3RpdmUgYm9keSAge1xuICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogNjAwcHg7XG4gICAgLW1vei1wZXJzcGVjdGl2ZTogNjAwcHg7XG4gICAgcGVyc3BlY3RpdmU6IDYwMHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4ubWQtbW9kYWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXgtd2lkdGg6IDYzMHB4O1xuICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHotaW5kZXg6IDIwMDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLm1kLXNob3cge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5tZC1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMTAwO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYmFja2dyb3VuZDogcmdiYSg1NSwgNTgsIDYwLCAwLjY1KTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5tZC1zaG93IH4gLm1kLW92ZXJsYXkge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLyogQ29udGVudCBzdHlsZXMgKi9cbi5tZC1jb250ZW50IHtcbiAgICBjb2xvcjogIzY2NjY2NjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5tZC1jb250ZW50IGgzIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMC40ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMi40ZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAxMTUsIDE3MCwgMC45Myk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XG59XG5cbi5tZC1jb250ZW50ID4gZGl2IHtcbiAgICBwYWRkaW5nOiAxNXB4IDQwcHggMzBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXNpemU6IDEuMTVlbTtcbn1cblxuLm1kLWNvbnRlbnQgPiBkaXYgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuLm1kLWNvbnRlbnQgPiBkaXYgdWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwIDAgMzBweCAyMHB4O1xufVxuXG4ubWQtY29udGVudCA+IGRpdiB1bCBsaSB7XG4gICAgcGFkZGluZzogNXB4IDA7XG59XG5cbi5tZC1jb250ZW50IGJ1dHRvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLyogSW5kaXZpZHVhbCBtb2RhbCBzdHlsZXMgd2l0aCBhbmltYXRpb25zL3RyYW5zaXRpb25zICovXG5cbi8qIEVmZmVjdCAxOiBGYWRlIGluIGFuZCBzY2FsZSB1cCAqL1xuLm1kLWVmZmVjdC0xIC5tZC1jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTEgLm1kLWNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDI6IFNsaWRlIGZyb20gdGhlIHJpZ2h0ICovXG4ubWQtZWZmZWN0LTIgLm1kLWNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNSwgMC41LCAwLjkpO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMiAubWQtY29udGVudCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCAzOiBTbGlkZSBmcm9tIHRoZSBib3R0b20gKi9cbi5tZC1lZmZlY3QtMyAubWQtY29udGVudCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwJSk7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTMgLm1kLWNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgNDogTmV3c3BhcGVyICovXG4ubWQtZWZmZWN0LTQgLm1kLWNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDcyMGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTQgfiAubWQtb3ZlcmxheSxcbi5tZC1lZmZlY3QtNCAubWQtY29udGVudCB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC00IC5tZC1jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSgwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgNTogZmFsbCAqL1xuLm1kLWVmZmVjdC01Lm1kLW1vZGFsIHtcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xufVxuXG4ubWQtZWZmZWN0LTUgLm1kLWNvbnRlbnQge1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGVYKDIwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtNSAubWQtY29udGVudCB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCA2OiBzaWRlIGZhbGwgKi9cbi5tZC1lZmZlY3QtNi5tZC1tb2RhbCB7XG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcbn1cblxuLm1kLWVmZmVjdC02IC5tZC1jb250ZW50IHtcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtNiAubWQtY29udGVudCB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSkgdHJhbnNsYXRlWigwKSByb3RhdGUoMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDc6ICBzbGlkZSBhbmQgc3RpY2sgdG8gdG9wICovXG4ubWQtZWZmZWN0LTd7XG4gICAgdG9wOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLm1kLWVmZmVjdC03IC5tZC1jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTcgLm1kLWNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDg6IDNEIGZsaXAgaG9yaXpvbnRhbCAqL1xuLm1kLWVmZmVjdC04Lm1kLW1vZGFsIHtcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xufVxuXG4ubWQtZWZmZWN0LTggLm1kLWNvbnRlbnQge1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTggLm1kLWNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgOTogM0QgZmxpcCB2ZXJ0aWNhbCAqL1xuLm1kLWVmZmVjdC05Lm1kLW1vZGFsIHtcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xufVxuXG4ubWQtZWZmZWN0LTkgLm1kLWNvbnRlbnQge1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC03MGRlZyk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTkgLm1kLWNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4vKiBFZmZlY3QgMTA6IDNEIHNpZ24gKi9cbi5tZC1lZmZlY3QtMTAubWQtbW9kYWwge1xuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XG59XG5cbi5tZC1lZmZlY3QtMTAgLm1kLWNvbnRlbnQge1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC02MGRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTEwIC5tZC1jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDExOiBTdXBlciBzY2FsZWQgKi9cbi5tZC1lZmZlY3QtMTEgLm1kLWNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMik7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTExIC5tZC1jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCAxMjogIEp1c3QgbWUgKi9cbi5tZC1lZmZlY3QtMTIgLm1kLWNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTIgfiAubWQtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZDogIzAwNzNhYTtcbn1cblxuLm1kLWVmZmVjdC0xMiAubWQtY29udGVudCBoMyxcbi5tZC1lZmZlY3QtMTIgLm1kLWNvbnRlbnQge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTIgLm1kLWNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xufVxuXG4vKiBFZmZlY3QgMTM6IDNEIHNsaXQgKi9cbi5tZC1lZmZlY3QtMTMubWQtbW9kYWwge1xuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XG59XG5cbi5tZC1lZmZlY3QtMTMgLm1kLWNvbnRlbnQge1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0zMDAwcHgpIHJvdGF0ZVkoOTBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xMyAubWQtY29udGVudCB7XG4gICAgYW5pbWF0aW9uOiBzbGl0IC43cyBmb3J3YXJkcyBlYXNlLW91dDtcbn1cblxuQGtleWZyYW1lcyBzbGl0IHtcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTI1MHB4KSByb3RhdGVZKDg5ZGVnKTsgb3BhY2l0eTogMTsgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjt9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpOyBvcGFjaXR5OiAxOyB9XG59XG5cbi8qIEVmZmVjdCAxNDogIDNEIFJvdGF0ZSBmcm9tIGJvdHRvbSAqL1xuLm1kLWVmZmVjdC0xNC5tZC1tb2RhbCB7XG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcbn1cblxuLm1kLWVmZmVjdC0xNCAubWQtY29udGVudCB7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgcm90YXRlWCg5MGRlZyk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xNCAubWQtY29udGVudCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKSByb3RhdGVYKDBkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCAxNTogIDNEIFJvdGF0ZSBpbiBmcm9tIGxlZnQgKi9cbi5tZC1lZmZlY3QtMTUubWQtbW9kYWwge1xuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XG59XG5cbi5tZC1lZmZlY3QtMTUgLm1kLWNvbnRlbnQge1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDEwMHB4KSB0cmFuc2xhdGVYKC0zMCUpIHJvdGF0ZVkoOTBkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTUgLm1kLWNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHRyYW5zbGF0ZVgoMCUpIHJvdGF0ZVkoMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLyogRWZmZWN0IDE2OiAgQmx1ciAqL1xuLm1kLXNob3cubWQtZWZmZWN0LTE2IH4gLm1kLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTgwLDQ2LDMyLDAuNSk7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xNiB+IC5jb250YWluZXIge1xuICAgIGZpbHRlcjogYmx1cigzcHgpO1xufVxuXG4ubWQtZWZmZWN0LTE2IC5tZC1jb250ZW50IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTYgfiAuY29udGFpbmVyLFxuLm1kLWVmZmVjdC0xNiAubWQtY29udGVudCB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xNiAubWQtY29udGVudCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi8qIEVmZmVjdCAxNzogIFNsaWRlIGluIGZyb20gYm90dG9tIHdpdGggcGVyc3BlY3RpdmUgb24gY29udGFpbmVyICovXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTcgfiAuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTE3IH4gLmNvbnRhaW5lcixcbi5tZC1zaG93Lm1kLWVmZmVjdC0xNyB+IC5tZC1vdmVybGF5ICB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLm1kLWVmZmVjdC0xNyAubWQtY29udGVudCB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwJSk7XG59XG5cbi5tZC1zaG93Lm1kLWVmZmVjdC0xNyAubWQtY29udGVudCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyAwLjJzO1xufVxuXG4vKiBFZmZlY3QgMTg6ICBTbGlkZSBmcm9tIHJpZ2h0IHdpdGggcGVyc3BlY3RpdmUgb24gY29udGFpbmVyICovXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTggfiAuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTE4IH4gLm1kLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTQzLDI3LDE1LDAuOCk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTggfiAuY29udGFpbmVyLFxuLm1kLXNob3cubWQtZWZmZWN0LTE4IH4gLm1kLW92ZXJsYXkge1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgNTAlO1xuICAgIGFuaW1hdGlvbjogcm90YXRlUmlnaHRTaWRlRmlyc3QgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZVJpZ2h0U2lkZUZpcnN0IHtcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpIHJvdGF0ZVkoNWRlZyk7IGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0OyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjAwcHgpOyB9XG59XG5cbi5tZC1lZmZlY3QtMTggLm1kLWNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTggLm1kLWNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7XG59XG5cbi8qIEVmZmVjdCAxOTogIFNsaXAgaW4gZnJvbSB0aGUgdG9wIHdpdGggcGVyc3BlY3RpdmUgb24gY29udGFpbmVyICovXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTkgfiAuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm1kLXNob3cubWQtZWZmZWN0LTE5IH4gLm1kLW92ZXJsYXkge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTkgfiAuY29udGFpbmVyLFxuLm1kLXNob3cubWQtZWZmZWN0LTE5IH4gLm1kLW92ZXJsYXkge1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XG4gICAgYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcbn1cblxuXG5Aa2V5ZnJhbWVzIE9wZW5Ub3Age1xuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgxMGRlZyk7XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgIH1cbn1cblxuLm1kLWVmZmVjdC0xOSAubWQtY29udGVudCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTkgLm1kLWNvbnRlbnQge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyZW0pIHtcbiAgICBib2R5IHsgZm9udC1zaXplOiA3NSU7IH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/modal-animation/modal-animation.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/modal-animation/modal-animation.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ModalAnimationComponent */

  /***/
  function srcAppSharedModalAnimationModalAnimationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalAnimationComponent", function () {
      return ModalAnimationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ModalAnimationComponent = /*#__PURE__*/function () {
      function ModalAnimationComponent() {
        _classCallCheck(this, ModalAnimationComponent);

        this.backDrop = false;
      }

      _createClass(ModalAnimationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "close",
        value: function close(event) {
          document.querySelector("#" + event).classList.remove('md-show');
        }
      }]);

      return ModalAnimationComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModalAnimationComponent.prototype, "modalClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModalAnimationComponent.prototype, "contentClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModalAnimationComponent.prototype, "modalID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModalAnimationComponent.prototype, "backDrop", void 0);
    ModalAnimationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-animation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal-animation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modal-animation/modal-animation.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal-animation.component.css */
      "./src/app/shared/modal-animation/modal-animation.component.css"))["default"]]
    })], ModalAnimationComponent);
    /***/
  },

  /***/
  "./src/app/shared/modal-basic/modal-basic.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/shared/modal-basic/modal-basic.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedModalBasicModalBasicComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".basic.modal {\n    background: rgba(0,0,0,0.6);\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1050;\n    display: none;\n    overflow: hidden;\n    -webkit-overflow-scrolling: touch;\n    outline: 0;\n}\n\n.basic.fade {\n    opacity: 0;\n    -webkit-transition: opacity .15s linear;\n    transition: opacity .15s linear;\n}\n\n.basic.fade.in {\n    opacity: 1;\n}\n\n.basic.modal.fade.in .modal-dialog {\n    -webkit-transform: translate(0,0);\n    transform: translate(0,0);\n}\n\n.basic.modal.fade .modal-dialog {\n    -webkit-transition: all .3s ease-out;\n    transition: all .3s ease-out;\n    -webkit-transform: translate(0,-25%);\n    transform: translate(0,-25%);\n}\n\n.basic .basic-close {\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    font-size: 16px;\n    color: #292b2c;\n}\n\n.basic .basic-close-light-box {\n    position: absolute;\n    top: -31px;\n    right: -20px;\n    font-size: 30px;\n    color: rgb(255, 255, 255);\n    text-shadow: none;\n}\n\n.basic h5 {\n    margin-bottom: 0;\n    color: #757575;\n    font-size: 16px;\n    font-weight: 600;\n    text-transform: uppercase;\n    display: inline-block;\n    margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZGFsLWJhc2ljL21vZGFsLWJhc2ljLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHVDQUF1QztJQUV2QywrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQ0FBaUM7SUFHakMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksb0NBQW9DO0lBRXBDLDRCQUE0QjtJQUM1QixvQ0FBb0M7SUFHcEMsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFJQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2RhbC1iYXNpYy9tb2RhbC1iYXNpYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2ljLm1vZGFsIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB6LWluZGV4OiAxMDUwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgb3V0bGluZTogMDtcbn1cblxuLmJhc2ljLmZhZGUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyO1xuICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBsaW5lYXI7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMTVzIGxpbmVhcjtcbn1cblxuLmJhc2ljLmZhZGUuaW4ge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5iYXNpYy5tb2RhbC5mYWRlLmluIC5tb2RhbC1kaWFsb2cge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XG59XG5cbi5iYXNpYy5tb2RhbC5mYWRlIC5tb2RhbC1kaWFsb2cge1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC0yNSUpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC0yNSUpO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTI1JSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtMjUlKTtcbn1cblxuLmJhc2ljIC5iYXNpYy1jbG9zZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMyOTJiMmM7XG59XG5cbi5iYXNpYyAuYmFzaWMtY2xvc2UtbGlnaHQtYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMzFweDtcbiAgICByaWdodDogLTIwcHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG5cblxuXG4uYmFzaWMgaDUge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgY29sb3I6ICM3NTc1NzU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/modal-basic/modal-basic.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/modal-basic/modal-basic.component.ts ***!
    \*************************************************************/

  /*! exports provided: ModalBasicComponent */

  /***/
  function srcAppSharedModalBasicModalBasicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalBasicComponent", function () {
      return ModalBasicComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ModalBasicComponent = /*#__PURE__*/function () {
      function ModalBasicComponent() {
        _classCallCheck(this, ModalBasicComponent);

        this.hideHeader = false;
        this.hideFooter = false;
        this.visible = false;
        this.visibleAnimate = false;
      }

      _createClass(ModalBasicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "show",
        value: function show() {
          var _this15 = this;

          this.visible = true;
          setTimeout(function () {
            return _this15.visibleAnimate = true;
          }, 100);
        }
      }, {
        key: "hide",
        value: function hide() {
          var _this16 = this;

          this.visibleAnimate = false;
          setTimeout(function () {
            return _this16.visible = false;
          }, 300);
        }
      }, {
        key: "onContainerClicked",
        value: function onContainerClicked(event) {
          if (event.target.classList.contains('modal')) {
            this.hide();
          }
        }
      }]);

      return ModalBasicComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModalBasicComponent.prototype, "dialogClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModalBasicComponent.prototype, "hideHeader", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModalBasicComponent.prototype, "hideFooter", void 0);
    ModalBasicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-basic',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal-basic.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modal-basic/modal-basic.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal-basic.component.css */
      "./src/app/shared/modal-basic/modal-basic.component.css"))["default"]]
    })], ModalBasicComponent);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./menu-items/menu-items */
    "./src/app/shared/menu-items/menu-items.ts");
    /* harmony import */


    var _accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./accordion */
    "./src/app/shared/accordion/index.ts");
    /* harmony import */


    var _fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./fullscreen/toggle-fullscreen.directive */
    "./src/app/shared/fullscreen/toggle-fullscreen.directive.ts");
    /* harmony import */


    var _card_card_refresh_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./card/card-refresh.directive */
    "./src/app/shared/card/card-refresh.directive.ts");
    /* harmony import */


    var _card_card_toggle_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./card/card-toggle.directive */
    "./src/app/shared/card/card-toggle.directive.ts");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./card/card.component */
    "./src/app/shared/card/card.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _elements_parent_remove_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./elements/parent-remove.directive */
    "./src/app/shared/elements/parent-remove.directive.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _modal_animation_modal_animation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./modal-animation/modal-animation.component */
    "./src/app/shared/modal-animation/modal-animation.component.ts");
    /* harmony import */


    var _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./modal-basic/modal-basic.component */
    "./src/app/shared/modal-basic/modal-basic.component.ts");
    /* harmony import */


    var ng2_toasty__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ng2-toasty */
    "./node_modules/ng2-toasty/index.js");
    /* harmony import */


    var angular2_notifications__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! angular2-notifications */
    "./node_modules/angular2-notifications/dist/index.js");
    /* harmony import */


    var angular2_notifications__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */


    var css_animator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! css-animator */
    "./node_modules/css-animator/index.js");
    /* harmony import */


    var css_animator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(css_animator__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var _elements_data_filter_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./elements/data-filter.pipe */
    "./src/app/shared/elements/data-filter.pipe.ts");
    /* harmony import */


    var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @nicky-lenaers/ngx-scroll-to */
    "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm2015/nicky-lenaers-ngx-scroll-to.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _todo_todo_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./todo/todo.service */
    "./src/app/shared/todo/todo.service.ts");
    /* harmony import */


    var ng_click_outside__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ng-click-outside */
    "./node_modules/ng-click-outside/lib/index.js");
    /* harmony import */


    var ng_click_outside__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_21__);
    /* harmony import */


    var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./spinner/spinner.component */
    "./src/app/shared/spinner/spinner.component.ts");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");

    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
      suppressScrollX: true
    };

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], ng2_toasty__WEBPACK_IMPORTED_MODULE_14__["ToastyModule"].forRoot(), angular2_notifications__WEBPACK_IMPORTED_MODULE_15__["SimpleNotificationsModule"].forRoot(), css_animator__WEBPACK_IMPORTED_MODULE_16__["AnimatorModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_18__["ScrollToModule"].forRoot(), _agm_core__WEBPACK_IMPORTED_MODULE_19__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk'
      }), ng_click_outside__WEBPACK_IMPORTED_MODULE_21__["ClickOutsideModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_23__["PerfectScrollbarModule"]],
      declarations: [_accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionAnchorDirective"], _accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionLinkDirective"], _accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionDirective"], _fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_5__["ToggleFullscreenDirective"], _card_card_refresh_directive__WEBPACK_IMPORTED_MODULE_6__["CardRefreshDirective"], _card_card_toggle_directive__WEBPACK_IMPORTED_MODULE_7__["CardToggleDirective"], _elements_parent_remove_directive__WEBPACK_IMPORTED_MODULE_10__["ParentRemoveDirective"], _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_22__["SpinnerComponent"], _modal_animation_modal_animation_component__WEBPACK_IMPORTED_MODULE_12__["ModalAnimationComponent"], _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_13__["ModalBasicComponent"], _elements_data_filter_pipe__WEBPACK_IMPORTED_MODULE_17__["DataFilterPipe"]],
      exports: [_accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionAnchorDirective"], _accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionLinkDirective"], _accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionDirective"], _fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_5__["ToggleFullscreenDirective"], _card_card_refresh_directive__WEBPACK_IMPORTED_MODULE_6__["CardRefreshDirective"], _card_card_toggle_directive__WEBPACK_IMPORTED_MODULE_7__["CardToggleDirective"], _elements_parent_remove_directive__WEBPACK_IMPORTED_MODULE_10__["ParentRemoveDirective"], _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_22__["SpinnerComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_13__["ModalBasicComponent"], _modal_animation_modal_animation_component__WEBPACK_IMPORTED_MODULE_12__["ModalAnimationComponent"], ng2_toasty__WEBPACK_IMPORTED_MODULE_14__["ToastyModule"], angular2_notifications__WEBPACK_IMPORTED_MODULE_15__["SimpleNotificationsModule"], css_animator__WEBPACK_IMPORTED_MODULE_16__["AnimatorModule"], _elements_data_filter_pipe__WEBPACK_IMPORTED_MODULE_17__["DataFilterPipe"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_18__["ScrollToModule"], _agm_core__WEBPACK_IMPORTED_MODULE_19__["AgmCoreModule"], ng_click_outside__WEBPACK_IMPORTED_MODULE_21__["ClickOutsideModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_23__["PerfectScrollbarModule"]],
      providers: [_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__["MenuItems"], _todo_todo_service__WEBPACK_IMPORTED_MODULE_20__["TodoService"], angular2_notifications__WEBPACK_IMPORTED_MODULE_15__["NotificationsService"], {
        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_23__["PERFECT_SCROLLBAR_CONFIG"],
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/shared/spinner/spinkit-css/sk-chasing-dots.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/spinner/spinkit-css/sk-chasing-dots.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSpinnerSpinkitCssSkChasingDotsScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sk-chasing-dots {\n  top: 50%;\n  margin: auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n  text-align: center;\n  -webkit-animation: sk-chasingDotsRotate 2s infinite linear;\n  animation: sk-chasingDotsRotate 2s infinite linear;\n}\n.sk-chasing-dots .sk-child {\n  width: 60%;\n  height: 60%;\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  border-radius: 100%;\n  -webkit-animation: sk-chasingDotsBounce 2s infinite ease-in-out;\n  animation: sk-chasingDotsBounce 2s infinite ease-in-out;\n}\n.sk-chasing-dots .sk-dot2 {\n  top: auto;\n  bottom: 0;\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n@-webkit-keyframes sk-chasingDotsRotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@keyframes sk-chasingDotsRotate {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes sk-chasingDotsBounce {\n  0%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@keyframes sk-chasingDotsBounce {\n  0%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NndF9qcHJfbGluX3Bhd2FuL0RvY3VtZW50cy9udXVlZC1wcm9kL251dWVkLXVpL251dWVkLXVpLWFwcC9zcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5raXQtY3NzL3NrLWNoYXNpbmctZG90cy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1jaGFzaW5nLWRvdHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMERBQUE7RUFDQSxrREFBQTtBQ0NGO0FEQUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsbUJBQUE7RUFDQSwrREFBQTtFQUNBLHVEQUFBO0FDRUo7QURBRTtFQUNFLFNBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtBQ0VKO0FERUE7RUFDRTtJQUNFLGlDQUFBO0lBQ0EseUJBQUE7RUNDRjtBQUNGO0FER0E7RUFDRTtJQUNFLGlDQUFBO0lBQ0EseUJBQUE7RUNERjtBQUNGO0FES0E7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsbUJBQUE7RUNIRjtFRE1BO0lBQ0UsMkJBQUE7SUFDQSxtQkFBQTtFQ0pGO0FBQ0Y7QURRQTtFQUNFO0lBQ0UsMkJBQUE7SUFDQSxtQkFBQTtFQ05GO0VEU0E7SUFDRSwyQkFBQTtJQUNBLG1CQUFBO0VDUEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5raXQtY3NzL3NrLWNoYXNpbmctZG90cy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNrLWNoYXNpbmctZG90cyB7XG4gIHRvcDogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2stY2hhc2luZ0RvdHNSb3RhdGUgMnMgaW5maW5pdGUgbGluZWFyO1xuICBhbmltYXRpb246IHNrLWNoYXNpbmdEb3RzUm90YXRlIDJzIGluZmluaXRlIGxpbmVhcjtcbiAgLnNrLWNoaWxkIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogNjAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWNoYXNpbmdEb3RzQm91bmNlIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbjogc2stY2hhc2luZ0RvdHNCb3VuY2UgMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgLnNrLWRvdDIge1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IDA7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xcztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xcztcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stY2hhc2luZ0RvdHNSb3RhdGUge1xuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5cbkBrZXlmcmFtZXMgc2stY2hhc2luZ0RvdHNSb3RhdGUge1xuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1jaGFzaW5nRG90c0JvdW5jZSB7XG4gIDAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuXG5Aa2V5ZnJhbWVzIHNrLWNoYXNpbmdEb3RzQm91bmNlIHtcbiAgMCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG5cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuIiwiLnNrLWNoYXNpbmctZG90cyB7XG4gIHRvcDogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2stY2hhc2luZ0RvdHNSb3RhdGUgMnMgaW5maW5pdGUgbGluZWFyO1xuICBhbmltYXRpb246IHNrLWNoYXNpbmdEb3RzUm90YXRlIDJzIGluZmluaXRlIGxpbmVhcjtcbn1cbi5zay1jaGFzaW5nLWRvdHMgLnNrLWNoaWxkIHtcbiAgd2lkdGg6IDYwJTtcbiAgaGVpZ2h0OiA2MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1jaGFzaW5nRG90c0JvdW5jZSAycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uOiBzay1jaGFzaW5nRG90c0JvdW5jZSAycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cbi5zay1jaGFzaW5nLWRvdHMgLnNrLWRvdDIge1xuICB0b3A6IGF1dG87XG4gIGJvdHRvbTogMDtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1jaGFzaW5nRG90c1JvdGF0ZSB7XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNrLWNoYXNpbmdEb3RzUm90YXRlIHtcbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzay1jaGFzaW5nRG90c0JvdW5jZSB7XG4gIDAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNrLWNoYXNpbmdEb3RzQm91bmNlIHtcbiAgMCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/spinner/spinkit-css/sk-cube-grid.scss":
  /*!**************************************************************!*\
    !*** ./src/app/shared/spinner/spinkit-css/sk-cube-grid.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSpinnerSpinkitCssSkCubeGridScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sk-cube-grid {\n  position: relative;\n  top: 50%;\n  width: 40px;\n  height: 40px;\n  margin: auto;\n}\n.sk-cube-grid .sk-cube {\n  width: 33%;\n  height: 33%;\n  float: left;\n  -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n  animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n}\n.sk-cube-grid .sk-cube1 {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n.sk-cube-grid .sk-cube2 {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s;\n}\n.sk-cube-grid .sk-cube3 {\n  -webkit-animation-delay: 0.4s;\n  animation-delay: 0.4s;\n}\n.sk-cube-grid .sk-cube4 {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n}\n.sk-cube-grid .sk-cube5 {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n.sk-cube-grid .sk-cube6 {\n  -webkit-animation-delay: 0.3s;\n  animation-delay: 0.3s;\n}\n.sk-cube-grid .sk-cube7 {\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s;\n}\n.sk-cube-grid .sk-cube8 {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n}\n.sk-cube-grid .sk-cube9 {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n@-webkit-keyframes sk-cubeGridScaleDelay {\n  0%, 70%, 100% {\n    -webkit-transform: scale3D(1, 1, 1);\n    transform: scale3D(1, 1, 1);\n  }\n  35% {\n    -webkit-transform: scale3D(0, 0, 1);\n    transform: scale3D(0, 0, 1);\n  }\n}\n@keyframes sk-cubeGridScaleDelay {\n  0%, 70%, 100% {\n    -webkit-transform: scale3D(1, 1, 1);\n    transform: scale3D(1, 1, 1);\n  }\n  35% {\n    -webkit-transform: scale3D(0, 0, 1);\n    transform: scale3D(0, 0, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NndF9qcHJfbGluX3Bhd2FuL0RvY3VtZW50cy9udXVlZC1wcm9kL251dWVkLXVpL251dWVkLXVpLWFwcC9zcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5raXQtY3NzL3NrLWN1YmUtZ3JpZC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1jdWJlLWdyaWQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrRUFBQTtFQUNBLDBEQUFBO0FDRUo7QURBRTtFQUNFLDZCQUFBO0VBQ0EscUJBQUE7QUNFSjtBREFFO0VBQ0UsNkJBQUE7RUFDQSxxQkFBQTtBQ0VKO0FEQUU7RUFDRSw2QkFBQTtFQUNBLHFCQUFBO0FDRUo7QURBRTtFQUNFLDZCQUFBO0VBQ0EscUJBQUE7QUNFSjtBREFFO0VBQ0UsNkJBQUE7RUFDQSxxQkFBQTtBQ0VKO0FEQUU7RUFDRSw2QkFBQTtFQUNBLHFCQUFBO0FDRUo7QURBRTtFQUNFLDJCQUFBO0VBQ0EsbUJBQUE7QUNFSjtBREFFO0VBQ0UsNkJBQUE7RUFDQSxxQkFBQTtBQ0VKO0FEQUU7RUFDRSw2QkFBQTtFQUNBLHFCQUFBO0FDRUo7QURFQTtFQUNFO0lBQ0UsbUNBQUE7SUFDQSwyQkFBQTtFQ0NGO0VERUE7SUFDRSxtQ0FBQTtJQUNBLDJCQUFBO0VDQUY7QUFDRjtBRElBO0VBQ0U7SUFDRSxtQ0FBQTtJQUNBLDJCQUFBO0VDRkY7RURLQTtJQUNFLG1DQUFBO0lBQ0EsMkJBQUE7RUNIRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stY3ViZS1ncmlkLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2stY3ViZS1ncmlkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICAuc2stY3ViZSB7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBoZWlnaHQ6IDMzJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stY3ViZUdyaWRTY2FsZURlbGF5IDEuM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uOiBzay1jdWJlR3JpZFNjYWxlRGVsYXkgMS4zcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgfVxuICAuc2stY3ViZTEge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcbiAgfVxuICAuc2stY3ViZTIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcbiAgfVxuICAuc2stY3ViZTMge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgfVxuICAuc2stY3ViZTQge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4xcztcbiAgfVxuICAuc2stY3ViZTUge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcbiAgfVxuICAuc2stY3ViZTYge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcbiAgfVxuICAuc2stY3ViZTcge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xuICB9XG4gIC5zay1jdWJlOCB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xuICB9XG4gIC5zay1jdWJlOSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1jdWJlR3JpZFNjYWxlRGVsYXkge1xuICAwJSwgNzAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XG4gIH1cblxuICAzNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcbiAgfVxufVxuXG5cbkBrZXlmcmFtZXMgc2stY3ViZUdyaWRTY2FsZURlbGF5IHtcbiAgMCUsIDcwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xuICB9XG5cbiAgMzUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMCwgMCwgMSk7XG4gIH1cbn1cbiIsIi5zay1jdWJlLWdyaWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uc2stY3ViZS1ncmlkIC5zay1jdWJlIHtcbiAgd2lkdGg6IDMzJTtcbiAgaGVpZ2h0OiAzMyU7XG4gIGZsb2F0OiBsZWZ0O1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2stY3ViZUdyaWRTY2FsZURlbGF5IDEuM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogc2stY3ViZUdyaWRTY2FsZURlbGF5IDEuM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG59XG4uc2stY3ViZS1ncmlkIC5zay1jdWJlMSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XG59XG4uc2stY3ViZS1ncmlkIC5zay1jdWJlMiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XG59XG4uc2stY3ViZS1ncmlkIC5zay1jdWJlMyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuNHM7XG59XG4uc2stY3ViZS1ncmlkIC5zay1jdWJlNCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuMXM7XG59XG4uc2stY3ViZS1ncmlkIC5zay1jdWJlNSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XG59XG4uc2stY3ViZS1ncmlkIC5zay1jdWJlNiB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XG59XG4uc2stY3ViZS1ncmlkIC5zay1jdWJlNyB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbn1cbi5zay1jdWJlLWdyaWQgLnNrLWN1YmU4IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4xcztcbn1cbi5zay1jdWJlLWdyaWQgLnNrLWN1YmU5IHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4ycztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWN1YmVHcmlkU2NhbGVEZWxheSB7XG4gIDAlLCA3MCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDEsIDEsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcbiAgfVxuICAzNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNEKDAsIDAsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBzay1jdWJlR3JpZFNjYWxlRGVsYXkge1xuICAwJSwgNzAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XG4gIH1cbiAgMzUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM0QoMCwgMCwgMSk7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/spinner/spinkit-css/sk-double-bounce.scss":
  /*!******************************************************************!*\
    !*** ./src/app/shared/spinner/spinkit-css/sk-double-bounce.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSpinnerSpinkitCssSkDoubleBounceScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sk-double-bounce {\n  top: 50%;\n  width: 40px;\n  height: 40px;\n  position: relative;\n  margin: auto;\n}\n\n.double-bounce1 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2s infinite ease-in-out;\n  animation: sk-bounce 2s infinite ease-in-out;\n}\n\n.double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2s infinite ease-in-out;\n  animation: sk-bounce 2s infinite ease-in-out;\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0);\n  }\n  50% {\n    -webkit-transform: scale(1);\n  }\n}\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NndF9qcHJfbGluX3Bhd2FuL0RvY3VtZW50cy9udXVlZC1wcm9kL251dWVkLXVpL251dWVkLXVpLWFwcC9zcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5raXQtY3NzL3NrLWRvdWJsZS1ib3VuY2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stZG91YmxlLWJvdW5jZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvREFBQTtFQUNBLDRDQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvREFBQTtFQUNBLDRDQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSwyQkFBQTtFQ0NGO0VERUE7SUFDRSwyQkFBQTtFQ0FGO0FBQ0Y7O0FESUE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsMkJBQUE7RUNGRjtFREtBO0lBQ0UsbUJBQUE7SUFDQSwyQkFBQTtFQ0hGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1kb3VibGUtYm91bmNlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2stZG91YmxlLWJvdW5jZSB7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmRvdWJsZS1ib3VuY2UxIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvcGFjaXR5OiAwLjY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG59XG5cbi5kb3VibGUtYm91bmNlMiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3BhY2l0eTogMC42O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IHNrLWJvdW5jZSAyLjBzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMHM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTEuMHM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2Uge1xuICAwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG5cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuXG5Aa2V5ZnJhbWVzIHNrLWJvdW5jZSB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbiIsIi5zay1kb3VibGUtYm91bmNlIHtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZG91YmxlLWJvdW5jZTEge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9wYWNpdHk6IDAuNjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2UgMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogc2stYm91bmNlIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xufVxuXG4uZG91YmxlLWJvdW5jZTIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9wYWNpdHk6IDAuNjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2UgMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogc2stYm91bmNlIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTFzO1xuICBhbmltYXRpb24tZGVsYXk6IC0xcztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZSB7XG4gIDAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2stYm91bmNlIHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/spinner/spinkit-css/sk-line-material.scss":
  /*!******************************************************************!*\
    !*** ./src/app/shared/spinner/spinkit-css/sk-line-material.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSpinnerSpinkitCssSkLineMaterialScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sk-line-material {\n  top: 0;\n  position: relative;\n  margin: auto;\n  width: 100%;\n}\n.sk-line-material .sk-child {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  -webkit-transform-origin: 0% 0%;\n          transform-origin: 0% 0%;\n  -webkit-animation: sk-line-material 2s ease-in-out 0s infinite both;\n  animation: sk-line-material 2s ease-in-out 0s infinite both;\n}\n@-webkit-keyframes sk-line-material {\n  0%, 80%, 100% {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0);\n  }\n  40% {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n  }\n}\n@keyframes sk-line-material {\n  0% {\n    -webkit-transform: scaleX(0);\n    transform: scaleX(0);\n  }\n  100% {\n    -webkit-transform: scaleX(1);\n    transform: scaleX(1);\n  }\n}\n#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0);\n}\n.colored-parent, .colored > div {\n  background-color: rgba(26, 188, 156, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NndF9qcHJfbGluX3Bhd2FuL0RvY3VtZW50cy9udXVlZC1wcm9kL251dWVkLXVpL251dWVkLXVpLWFwcC9zcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5raXQtY3NzL3NrLWxpbmUtbWF0ZXJpYWwuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stbGluZS1tYXRlcmlhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsTUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSxtRUFBQTtFQUNBLDJEQUFBO0FDRUo7QURFQTtFQUNFO0lBQ0UsNEJBQUE7SUFDQSxvQkFBQTtFQ0NGO0VERUE7SUFDRSw0QkFBQTtJQUNBLG9CQUFBO0VDQUY7QUFDRjtBRElBO0VBQ0U7SUFDRSw0QkFBQTtJQUNBLG9CQUFBO0VDRkY7RURLQTtJQUNFLDRCQUFBO0lBQ0Esb0JBQUE7RUNIRjtBQUNGO0FET0E7RUFDRSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNMRjtBRFFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtDQUFBO0FDTEY7QURRQTtFQUNFLHlDQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1saW5lLW1hdGVyaWFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2stbGluZS1tYXRlcmlhbCB7XG4gIHRvcDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICAuc2stY2hpbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1saW5lLW1hdGVyaWFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XG4gICAgYW5pbWF0aW9uOiBzay1saW5lLW1hdGVyaWFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWxpbmUtbWF0ZXJpYWwge1xuICAwJSwgODAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICB9XG5cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICB9XG59XG5cblxuQGtleWZyYW1lcyBzay1saW5lLW1hdGVyaWFsIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICB9XG59XG5cblxuI2h0dHAtbG9hZGVyIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5sb2FkZXItYmcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eSA9IDcwKTtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuLmNvbG9yZWQtcGFyZW50LCAuY29sb3JlZCA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDE4OCwgMTU2LCAwLjgpO1xufVxuIiwiLnNrLWxpbmUtbWF0ZXJpYWwge1xuICB0b3A6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cbi5zay1saW5lLW1hdGVyaWFsIC5zay1jaGlsZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1saW5lLW1hdGVyaWFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XG4gIGFuaW1hdGlvbjogc2stbGluZS1tYXRlcmlhbCAycyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stbGluZS1tYXRlcmlhbCB7XG4gIDAlLCA4MCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNrLWxpbmUtbWF0ZXJpYWwge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICB9XG59XG4jaHR0cC1sb2FkZXIge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmxvYWRlci1iZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcbiAgb3BhY2l0eTogMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuLmNvbG9yZWQtcGFyZW50LCAuY29sb3JlZCA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjYsIDE4OCwgMTU2LCAwLjgpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/spinner/spinkit-css/sk-rotating-plane.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/spinner/spinkit-css/sk-rotating-plane.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSpinnerSpinkitCssSkRotatingPlaneScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sk-rotating-plane {\n  position: relative;\n  top: 50%;\n  width: 40px;\n  height: 40px;\n  margin: auto;\n  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n  animation: sk-rotateplane 1.2s infinite ease-in-out;\n}\n\n@-webkit-keyframes sk-rotateplane {\n  0% {\n    -webkit-transform: perspective(120px);\n  }\n  50% {\n    -webkit-transform: perspective(120px) rotateY(180deg);\n  }\n  100% {\n    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);\n  }\n}\n\n@keyframes sk-rotateplane {\n  0% {\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n  }\n  50% {\n    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n  }\n  100% {\n    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NndF9qcHJfbGluX3Bhd2FuL0RvY3VtZW50cy9udXVlZC1wcm9kL251dWVkLXVpL251dWVkLXVpLWFwcC9zcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5raXQtY3NzL3NrLXJvdGF0aW5nLXBsYW5lLnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5raXQtY3NzL3NrLXJvdGF0aW5nLXBsYW5lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwyREFBQTtFQUNBLG1EQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLHFDQUFBO0VDQ0Y7RURFQTtJQUNFLHFEQUFBO0VDQUY7RURHQTtJQUNFLHFFQUFBO0VDREY7QUFDRjs7QURLQTtFQUNFO0lBQ0UseURBQUE7SUFDQSxpRUFBQTtFQ0hGO0VETUE7SUFDRSw4REFBQTtJQUNBLHNFQUFBO0VDSkY7RURPQTtJQUNFLGlFQUFBO0lBQ0EseUVBQUE7RUNMRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stcm90YXRpbmctcGxhbmUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay1yb3RhdGluZy1wbGFuZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLXJvdGF0ZXBsYW5lIDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogc2stcm90YXRlcGxhbmUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLXJvdGF0ZXBsYW5lIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCk7XG4gIH1cblxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWSgxODBkZWcpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVZKDE4MGRlZykgcm90YXRlWCgxODBkZWcpO1xuICB9XG59XG5cblxuQGtleWZyYW1lcyBzay1yb3RhdGVwbGFuZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZyk7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MC4xZGVnKSByb3RhdGVZKDBkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwLjFkZWcpIHJvdGF0ZVkoMGRlZyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODBkZWcpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MGRlZykgcm90YXRlWSgtMTc5LjlkZWcpO1xuICB9XG59XG4iLCIuc2stcm90YXRpbmctcGxhbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzay1yb3RhdGVwbGFuZSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb246IHNrLXJvdGF0ZXBsYW5lIDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1yb3RhdGVwbGFuZSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpO1xuICB9XG4gIDUwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVZKDE4MGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVZKDE4MGRlZykgcm90YXRlWCgxODBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNrLXJvdGF0ZXBsYW5lIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoLTE4MC4xZGVnKSByb3RhdGVZKDBkZWcpO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwLjFkZWcpIHJvdGF0ZVkoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwZGVnKSByb3RhdGVZKC0xNzkuOWRlZyk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODBkZWcpIHJvdGF0ZVkoLTE3OS45ZGVnKTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/spinner/spinkit-css/sk-spinner-pulse.scss":
  /*!******************************************************************!*\
    !*** ./src/app/shared/spinner/spinkit-css/sk-spinner-pulse.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSpinnerSpinkitCssSkSpinnerPulseScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sk-spinner-pulse {\n  position: relative;\n  top: 50%;\n  width: 40px;\n  height: 40px;\n  margin: auto;\n  border-radius: 100%;\n  -webkit-animation: sk-pulseScaleOut 1s infinite ease-in-out;\n  animation: sk-pulseScaleOut 1s infinite ease-in-out;\n}\n\n@-webkit-keyframes sk-pulseScaleOut {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 0;\n  }\n}\n\n@keyframes sk-pulseScaleOut {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NndF9qcHJfbGluX3Bhd2FuL0RvY3VtZW50cy9udXVlZC1wcm9kL251dWVkLXVpL251dWVkLXVpLWFwcC9zcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5raXQtY3NzL3NrLXNwaW5uZXItcHVsc2Uuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stc3Bpbm5lci1wdWxzZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyREFBQTtFQUNBLG1EQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsbUJBQUE7RUNDRjtFREVBO0lBQ0UsMkJBQUE7SUFDQSxtQkFBQTtJQUNBLFVBQUE7RUNBRjtBQUNGOztBRElBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLG1CQUFBO0VDRkY7RURLQTtJQUNFLDJCQUFBO0lBQ0EsbUJBQUE7SUFDQSxVQUFBO0VDSEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5raXQtY3NzL3NrLXNwaW5uZXItcHVsc2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay1zcGlubmVyLXB1bHNlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2stcHVsc2VTY2FsZU91dCAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uOiBzay1wdWxzZVNjYWxlT3V0IDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stcHVsc2VTY2FsZU91dCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuXG5Aa2V5ZnJhbWVzIHNrLXB1bHNlU2NhbGVPdXQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4iLCIuc2stc3Bpbm5lci1wdWxzZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLXB1bHNlU2NhbGVPdXQgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbjogc2stcHVsc2VTY2FsZU91dCAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLXB1bHNlU2NhbGVPdXQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBzay1wdWxzZVNjYWxlT3V0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/spinner/spinkit-css/sk-three-bounce.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/spinner/spinkit-css/sk-three-bounce.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSpinnerSpinkitCssSkThreeBounceScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sk-three-bounce {\n  top: 50%;\n  position: relative;\n  margin: auto;\n  width: 80px;\n  text-align: center;\n}\n.sk-three-bounce .sk-child {\n  width: 20px;\n  height: 20px;\n  border-radius: 100%;\n  display: inline-block;\n  -webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;\n  animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;\n}\n.sk-three-bounce .sk-bounce1 {\n  -webkit-animation-delay: -0.32s;\n  animation-delay: -0.32s;\n}\n.sk-three-bounce .sk-bounce2 {\n  -webkit-animation-delay: -0.16s;\n  animation-delay: -0.16s;\n}\n@-webkit-keyframes sk-three-bounce {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n@keyframes sk-three-bounce {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NndF9qcHJfbGluX3Bhd2FuL0RvY3VtZW50cy9udXVlZC1wcm9kL251dWVkLXVpL251dWVkLXVpLWFwcC9zcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5raXQtY3NzL3NrLXRocmVlLWJvdW5jZS5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc3Bpbm5lci9zcGlua2l0LWNzcy9zay10aHJlZS1ib3VuY2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0VBQUE7RUFDQSw0REFBQTtBQ0VKO0FEQUU7RUFDRSwrQkFBQTtFQUNBLHVCQUFBO0FDRUo7QURBRTtFQUNFLCtCQUFBO0VBQ0EsdUJBQUE7QUNFSjtBREVBO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLG1CQUFBO0VDQ0Y7RURFQTtJQUNFLDJCQUFBO0lBQ0EsbUJBQUE7RUNBRjtBQUNGO0FESUE7RUFDRTtJQUNFLDJCQUFBO0lBQ0EsbUJBQUE7RUNGRjtFREtBO0lBQ0UsMkJBQUE7SUFDQSxtQkFBQTtFQ0hGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc3Bpbm5lci9zcGlua2l0LWNzcy9zay10aHJlZS1ib3VuY2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay10aHJlZS1ib3VuY2Uge1xuICB0b3A6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC5zay1jaGlsZCB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay10aHJlZS1ib3VuY2UgMS40cyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBib3RoO1xuICAgIGFuaW1hdGlvbjogc2stdGhyZWUtYm91bmNlIDEuNHMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYm90aDtcbiAgfVxuICAuc2stYm91bmNlMSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgfVxuICAuc2stYm91bmNlMiB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stdGhyZWUtYm91bmNlIHtcbiAgMCUsIDgwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cblxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cblxuQGtleWZyYW1lcyBzay10aHJlZS1ib3VuY2Uge1xuICAwJSwgODAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuXG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbiIsIi5zay10aHJlZS1ib3VuY2Uge1xuICB0b3A6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2stdGhyZWUtYm91bmNlIC5zay1jaGlsZCB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLXRocmVlLWJvdW5jZSAxLjRzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XG4gIGFuaW1hdGlvbjogc2stdGhyZWUtYm91bmNlIDEuNHMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYm90aDtcbn1cbi5zay10aHJlZS1ib3VuY2UgLnNrLWJvdW5jZTEge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcbn1cbi5zay10aHJlZS1ib3VuY2UgLnNrLWJvdW5jZTIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLXRocmVlLWJvdW5jZSB7XG4gIDAlLCA4MCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2stdGhyZWUtYm91bmNlIHtcbiAgMCUsIDgwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgNDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/spinner/spinkit-css/sk-wandering-cubes.scss":
  /*!********************************************************************!*\
    !*** ./src/app/shared/spinner/spinkit-css/sk-wandering-cubes.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSpinnerSpinkitCssSkWanderingCubesScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sk-wandering-cubes {\n  top: 50%;\n  margin: auto;\n  width: 40px;\n  height: 40px;\n  position: relative;\n}\n.sk-wandering-cubes .sk-cube {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-wanderingCube 1.8s ease-in-out -1.8s infinite both;\n  animation: sk-wanderingCube 1.8s ease-in-out -1.8s infinite both;\n}\n.sk-wandering-cubes .sk-cube2 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n@-webkit-keyframes sk-wanderingCube {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  25% {\n    -webkit-transform: translateX(30px) rotate(-90deg) scale(0.5);\n    transform: translateX(30px) rotate(-90deg) scale(0.5);\n  }\n  50% {\n    /* Hack to make FF rotate in the right direction */\n    -webkit-transform: translateX(30px) translateY(30px) rotate(-179deg);\n    transform: translateX(30px) translateY(30px) rotate(-179deg);\n  }\n  50.1% {\n    -webkit-transform: translateX(30px) translateY(30px) rotate(-180deg);\n    transform: translateX(30px) translateY(30px) rotate(-180deg);\n  }\n  75% {\n    -webkit-transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);\n    transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);\n  }\n  100% {\n    -webkit-transform: rotate(-360deg);\n    transform: rotate(-360deg);\n  }\n}\n@keyframes sk-wanderingCube {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  25% {\n    -webkit-transform: translateX(30px) rotate(-90deg) scale(0.5);\n    transform: translateX(30px) rotate(-90deg) scale(0.5);\n  }\n  50% {\n    /* Hack to make FF rotate in the right direction */\n    -webkit-transform: translateX(30px) translateY(30px) rotate(-179deg);\n    transform: translateX(30px) translateY(30px) rotate(-179deg);\n  }\n  50.1% {\n    -webkit-transform: translateX(30px) translateY(30px) rotate(-180deg);\n    transform: translateX(30px) translateY(30px) rotate(-180deg);\n  }\n  75% {\n    -webkit-transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);\n    transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);\n  }\n  100% {\n    -webkit-transform: rotate(-360deg);\n    transform: rotate(-360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NndF9qcHJfbGluX3Bhd2FuL0RvY3VtZW50cy9udXVlZC1wcm9kL251dWVkLXVpL251dWVkLXVpLWFwcC9zcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5raXQtY3NzL3NrLXdhbmRlcmluZy1jdWJlcy5zY3NzIiwic3JjL2FwcC9zaGFyZWQvc3Bpbm5lci9zcGlua2l0LWNzcy9zay13YW5kZXJpbmctY3ViZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx3RUFBQTtFQUNBLGdFQUFBO0FDRUo7QURBRTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7QUNFSjtBREVBO0VBQ0U7SUFDRSwrQkFBQTtJQUNBLHVCQUFBO0VDQ0Y7RURFQTtJQUNFLDZEQUFBO0lBQ0EscURBQUE7RUNBRjtFREdBO0lBQ0Usa0RBQUE7SUFDQSxvRUFBQTtJQUNBLDREQUFBO0VDREY7RURJQTtJQUNFLG9FQUFBO0lBQ0EsNERBQUE7RUNGRjtFREtBO0lBQ0UsNEVBQUE7SUFDQSxvRUFBQTtFQ0hGO0VETUE7SUFDRSxrQ0FBQTtJQUNBLDBCQUFBO0VDSkY7QUFDRjtBRFFBO0VBQ0U7SUFDRSwrQkFBQTtJQUNBLHVCQUFBO0VDTkY7RURTQTtJQUNFLDZEQUFBO0lBQ0EscURBQUE7RUNQRjtFRFVBO0lBQ0Usa0RBQUE7SUFDQSxvRUFBQTtJQUNBLDREQUFBO0VDUkY7RURXQTtJQUNFLG9FQUFBO0lBQ0EsNERBQUE7RUNURjtFRFlBO0lBQ0UsNEVBQUE7SUFDQSxvRUFBQTtFQ1ZGO0VEYUE7SUFDRSxrQ0FBQTtJQUNBLDBCQUFBO0VDWEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5raXQtY3NzL3NrLXdhbmRlcmluZy1jdWJlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNrLXdhbmRlcmluZy1jdWJlcyB7XG4gIHRvcDogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLnNrLWN1YmUge1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLXdhbmRlcmluZ0N1YmUgMS44cyBlYXNlLWluLW91dCAtMS44cyBpbmZpbml0ZSBib3RoO1xuICAgIGFuaW1hdGlvbjogc2std2FuZGVyaW5nQ3ViZSAxLjhzIGVhc2UtaW4tb3V0IC0xLjhzIGluZmluaXRlIGJvdGg7XG4gIH1cbiAgLnNrLWN1YmUyIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcbiAgfVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2std2FuZGVyaW5nQ3ViZSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG5cbiAgMjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpO1xuICB9XG5cbiAgNTAlIHtcbiAgICAvKiBIYWNrIHRvIG1ha2UgRkYgcm90YXRlIGluIHRoZSByaWdodCBkaXJlY3Rpb24gKi9cbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KSB0cmFuc2xhdGVZKDMwcHgpIHJvdGF0ZSgtMTc5ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgdHJhbnNsYXRlWSgzMHB4KSByb3RhdGUoLTE3OWRlZyk7XG4gIH1cblxuICA1MC4xJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgdHJhbnNsYXRlWSgzMHB4KSByb3RhdGUoLTE4MGRlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpIHRyYW5zbGF0ZVkoMzBweCkgcm90YXRlKC0xODBkZWcpO1xuICB9XG5cbiAgNzUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDMwcHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDMwcHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgfVxufVxuXG5cbkBrZXlmcmFtZXMgc2std2FuZGVyaW5nQ3ViZSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG5cbiAgMjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpO1xuICB9XG5cbiAgNTAlIHtcbiAgICAvKiBIYWNrIHRvIG1ha2UgRkYgcm90YXRlIGluIHRoZSByaWdodCBkaXJlY3Rpb24gKi9cbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KSB0cmFuc2xhdGVZKDMwcHgpIHJvdGF0ZSgtMTc5ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgdHJhbnNsYXRlWSgzMHB4KSByb3RhdGUoLTE3OWRlZyk7XG4gIH1cblxuICA1MC4xJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgdHJhbnNsYXRlWSgzMHB4KSByb3RhdGUoLTE4MGRlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpIHRyYW5zbGF0ZVkoMzBweCkgcm90YXRlKC0xODBkZWcpO1xuICB9XG5cbiAgNzUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDMwcHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDMwcHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgfVxufVxuIiwiLnNrLXdhbmRlcmluZy1jdWJlcyB7XG4gIHRvcDogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zay13YW5kZXJpbmctY3ViZXMgLnNrLWN1YmUge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLXdhbmRlcmluZ0N1YmUgMS44cyBlYXNlLWluLW91dCAtMS44cyBpbmZpbml0ZSBib3RoO1xuICBhbmltYXRpb246IHNrLXdhbmRlcmluZ0N1YmUgMS44cyBlYXNlLWluLW91dCAtMS44cyBpbmZpbml0ZSBib3RoO1xufVxuLnNrLXdhbmRlcmluZy1jdWJlcyAuc2stY3ViZTIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOXM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay13YW5kZXJpbmdDdWJlIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMjUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpO1xuICB9XG4gIDUwJSB7XG4gICAgLyogSGFjayB0byBtYWtlIEZGIHJvdGF0ZSBpbiB0aGUgcmlnaHQgZGlyZWN0aW9uICovXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgdHJhbnNsYXRlWSgzMHB4KSByb3RhdGUoLTE3OWRlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpIHRyYW5zbGF0ZVkoMzBweCkgcm90YXRlKC0xNzlkZWcpO1xuICB9XG4gIDUwLjElIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KSB0cmFuc2xhdGVZKDMwcHgpIHJvdGF0ZSgtMTgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgdHJhbnNsYXRlWSgzMHB4KSByb3RhdGUoLTE4MGRlZyk7XG4gIH1cbiAgNzUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDMwcHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDMwcHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2std2FuZGVyaW5nQ3ViZSB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDI1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgcm90YXRlKC05MGRlZykgc2NhbGUoMC41KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgcm90YXRlKC05MGRlZykgc2NhbGUoMC41KTtcbiAgfVxuICA1MCUge1xuICAgIC8qIEhhY2sgdG8gbWFrZSBGRiByb3RhdGUgaW4gdGhlIHJpZ2h0IGRpcmVjdGlvbiAqL1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpIHRyYW5zbGF0ZVkoMzBweCkgcm90YXRlKC0xNzlkZWcpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KSB0cmFuc2xhdGVZKDMwcHgpIHJvdGF0ZSgtMTc5ZGVnKTtcbiAgfVxuICA1MC4xJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgdHJhbnNsYXRlWSgzMHB4KSByb3RhdGUoLTE4MGRlZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpIHRyYW5zbGF0ZVkoMzBweCkgcm90YXRlKC0xODBkZWcpO1xuICB9XG4gIDc1JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgzMHB4KSByb3RhdGUoLTI3MGRlZykgc2NhbGUoMC41KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgzMHB4KSByb3RhdGUoLTI3MGRlZykgc2NhbGUoMC41KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/spinner/spinkit-css/sk-wave.scss":
  /*!*********************************************************!*\
    !*** ./src/app/shared/spinner/spinkit-css/sk-wave.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSpinnerSpinkitCssSkWaveScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sk-wave {\n  position: relative;\n  top: 50%;\n  margin: auto;\n  width: 50px;\n  height: 40px;\n  text-align: center;\n  font-size: 10px;\n}\n.sk-wave .sk-rect {\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n  -webkit-animation: sk-waveStretchDelay 1.2s infinite ease-in-out;\n  animation: sk-waveStretchDelay 1.2s infinite ease-in-out;\n}\n.sk-wave .sk-rect1 {\n  -webkit-animation-delay: -1.2s;\n  animation-delay: -1.2s;\n}\n.sk-wave .sk-rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n.sk-wave .sk-rect3 {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s;\n}\n.sk-wave .sk-rect5 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n.sk-wave .sk-rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n@-webkit-keyframes sk-waveStretchDelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4);\n    transform: scaleY(0.4);\n  }\n  20% {\n    -webkit-transform: scaleY(1);\n    transform: scaleY(1);\n  }\n}\n@keyframes sk-waveStretchDelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4);\n    transform: scaleY(0.4);\n  }\n  20% {\n    -webkit-transform: scaleY(1);\n    transform: scaleY(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NndF9qcHJfbGluX3Bhd2FuL0RvY3VtZW50cy9udXVlZC1wcm9kL251dWVkLXVpL251dWVkLXVpLWFwcC9zcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5raXQtY3NzL3NrLXdhdmUuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2std2F2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ0Y7QURBRTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxnRUFBQTtFQUNBLHdEQUFBO0FDRUo7QURBRTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7QUNFSjtBREFFO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtBQ0VKO0FEQUU7RUFDRSw0QkFBQTtFQUNBLG9CQUFBO0FDRUo7QURBRTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7QUNFSjtBREFFO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtBQ0VKO0FERUE7RUFDRTtJQUNFLDhCQUFBO0lBQ0Esc0JBQUE7RUNDRjtFREVBO0lBQ0UsNEJBQUE7SUFDQSxvQkFBQTtFQ0FGO0FBQ0Y7QURJQTtFQUNFO0lBQ0UsOEJBQUE7SUFDQSxzQkFBQTtFQ0ZGO0VES0E7SUFDRSw0QkFBQTtJQUNBLG9CQUFBO0VDSEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5raXQtY3NzL3NrLXdhdmUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay13YXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgLnNrLXJlY3Qge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2std2F2ZVN0cmV0Y2hEZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbjogc2std2F2ZVN0cmV0Y2hEZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICB9XG4gIC5zay1yZWN0MSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xLjJzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMnM7XG4gIH1cbiAgLnNrLXJlY3QyIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcbiAgfVxuICAuc2stcmVjdDMge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG4gIH1cbiAgLnNrLXJlY3Q1IHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcbiAgfVxuICAuc2stcmVjdDQge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xuICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay13YXZlU3RyZXRjaERlbGF5IHtcbiAgMCUsIDQwJSwgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjQpO1xuICAgIHRyYW5zZm9ybTogc2NhbGVZKDAuNCk7XG4gIH1cblxuICAyMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gIH1cbn1cblxuXG5Aa2V5ZnJhbWVzIHNrLXdhdmVTdHJldGNoRGVsYXkge1xuICAwJSwgNDAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcbiAgfVxuXG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgfVxufVxuIiwiLnNrLXdhdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLnNrLXdhdmUgLnNrLXJlY3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiA2cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLXdlYmtpdC1hbmltYXRpb246IHNrLXdhdmVTdHJldGNoRGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uOiBzay13YXZlU3RyZXRjaERlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG59XG4uc2std2F2ZSAuc2stcmVjdDEge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTEuMnM7XG59XG4uc2std2F2ZSAuc2stcmVjdDIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMXM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7XG59XG4uc2std2F2ZSAuc2stcmVjdDMge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTFzO1xuICBhbmltYXRpb24tZGVsYXk6IC0xcztcbn1cbi5zay13YXZlIC5zay1yZWN0NSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcbn1cbi5zay13YXZlIC5zay1yZWN0NCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLXdhdmVTdHJldGNoRGVsYXkge1xuICAwJSwgNDAlLCAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDAuNCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcbiAgfVxuICAyMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2std2F2ZVN0cmV0Y2hEZWxheSB7XG4gIDAlLCA0MCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjQpO1xuICB9XG4gIDIwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/spinner/spinkits.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/spinner/spinkits.ts ***!
    \********************************************/

  /*! exports provided: Spinkit */

  /***/
  function srcAppSharedSpinnerSpinkitsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Spinkit", function () {
      return Spinkit;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Spinkit = {
      skChasingDots: 'sk-chasing-dots',
      skCubeGrid: 'sk-cube-grid',
      skDoubleBounce: 'sk-double-bounce',
      skRotatingPlane: 'sk-rotationg-plane',
      skSpinnerPulse: 'sk-spinner-pulse',
      skThreeBounce: 'sk-three-bounce',
      skWanderingCubes: 'sk-wandering-cubes',
      skWave: 'sk-wave',
      skLine: 'sk-line-material'
    };
    /***/
  },

  /***/
  "./src/app/shared/spinner/spinner.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/shared/spinner/spinner.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedSpinnerSpinnerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999;\n}\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 0.7;\n  background-color: #f1f1f1;\n}\n\n.colored-parent, .colored > div {\n  background-color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NndF9qcHJfbGluX3Bhd2FuL0RvY3VtZW50cy9udXVlZC1wcm9kL251dWVkLXVpL251dWVkLXVpLWFwcC9zcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaHR0cC1sb2FkZXIge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmxvYWRlci1iZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTcwKTtcbiAgb3BhY2l0eTogLjc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbi5jb2xvcmVkLXBhcmVudCwgLmNvbG9yZWQgPiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xufVxuIiwiI2h0dHAtbG9hZGVyIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5sb2FkZXItYmcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eT03MCk7XG4gIG9wYWNpdHk6IDAuNztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbn1cblxuLmNvbG9yZWQtcGFyZW50LCAuY29sb3JlZCA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/spinner/spinner.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/spinner/spinner.component.ts ***!
    \*****************************************************/

  /*! exports provided: SpinnerComponent */

  /***/
  function srcAppSharedSpinnerSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
      return SpinnerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _spinkits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./spinkits */
    "./src/app/shared/spinner/spinkits.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var SpinnerComponent = /*#__PURE__*/function () {
      function SpinnerComponent(router, document) {
        var _this17 = this;

        _classCallCheck(this, SpinnerComponent);

        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.Spinkit = _spinkits__WEBPACK_IMPORTED_MODULE_2__["Spinkit"];
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.spinner = _spinkits__WEBPACK_IMPORTED_MODULE_2__["Spinkit"].skLine;
        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
            _this17.isSpinnerVisible = true;
          } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
            _this17.isSpinnerVisible = false;
          }
        }, function (error) {
          _this17.isSpinnerVisible = false;
        });
      }

      _createClass(SpinnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.isSpinnerVisible = false;
        }
      }]);

      return SpinnerComponent;
    }();

    SpinnerComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SpinnerComponent.prototype, "backgroundColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SpinnerComponent.prototype, "spinner", void 0);
    SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-spinner',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./spinner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/spinner/spinner.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./spinner.component.scss */
      "./src/app/shared/spinner/spinner.component.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./spinkit-css/sk-double-bounce.scss */
      "./src/app/shared/spinner/spinkit-css/sk-double-bounce.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./spinkit-css/sk-chasing-dots.scss */
      "./src/app/shared/spinner/spinkit-css/sk-chasing-dots.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./spinkit-css/sk-cube-grid.scss */
      "./src/app/shared/spinner/spinkit-css/sk-cube-grid.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./spinkit-css/sk-rotating-plane.scss */
      "./src/app/shared/spinner/spinkit-css/sk-rotating-plane.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./spinkit-css/sk-spinner-pulse.scss */
      "./src/app/shared/spinner/spinkit-css/sk-spinner-pulse.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./spinkit-css/sk-three-bounce.scss */
      "./src/app/shared/spinner/spinkit-css/sk-three-bounce.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./spinkit-css/sk-wandering-cubes.scss */
      "./src/app/shared/spinner/spinkit-css/sk-wandering-cubes.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./spinkit-css/sk-wave.scss */
      "./src/app/shared/spinner/spinkit-css/sk-wave.scss"))["default"], tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./spinkit-css/sk-line-material.scss */
      "./src/app/shared/spinner/spinkit-css/sk-line-material.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]))], SpinnerComponent);
    /***/
  },

  /***/
  "./src/app/shared/todo/index.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/todo/index.ts ***!
    \**************************************/

  /*! exports provided: Todo */

  /***/
  function srcAppSharedTodoIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Todo", function () {
      return Todo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Todo = function Todo(text, type, isChecked) {
      _classCallCheck(this, Todo);

      this.text = text;
      this.type = type;
      this.isChecked = isChecked;
    };
    /***/

  },

  /***/
  "./src/app/shared/todo/todo.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/todo/todo.service.ts ***!
    \*********************************************/

  /*! exports provided: TodoService */

  /***/
  function srcAppSharedTodoTodoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoService", function () {
      return TodoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./index */
    "./src/app/shared/todo/index.ts");

    var TodoService = /*#__PURE__*/function () {
      function TodoService() {
        _classCallCheck(this, TodoService);

        this.items = [new _index__WEBPACK_IMPORTED_MODULE_2__["Todo"]('Hey.. Attach your new file', 'Java', false), new _index__WEBPACK_IMPORTED_MODULE_2__["Todo"]('Navigation working', 'Angular 2', true), new _index__WEBPACK_IMPORTED_MODULE_2__["Todo"]('Files submited successfully', 'Codeigniter', false)];
      }

      _createClass(TodoService, [{
        key: "getTodoList",
        value: function getTodoList() {
          return this.items;
        }
      }, {
        key: "deleteItem",
        value: function deleteItem(item) {
          this.items.splice(this.items.indexOf(item), 1);
        }
      }, {
        key: "additem",
        value: function additem(item) {
          this.items.push(item);
        }
      }]);

      return TodoService;
    }();

    TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TodoService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: serverAddress, callbackURL, client_id, client_secret, domain, environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "serverAddress", function () {
      return serverAddress;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "callbackURL", function () {
      return callbackURL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "client_id", function () {
      return client_id;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "client_secret", function () {
      return client_secret;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "domain", function () {
      return domain;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var serverAddress = 'https://nuuedscore.com:9090/';
    var callbackURL = "https://nuuedscore.com/app/#/auth/socialresponse";
    var client_id = "nuued";
    var client_secret = "secret";
    var domain = "https://nuuedscore.com/";
    var environment = {
      production: false,
      apiUrl: serverAddress,
      client_id: client_id,
      client_secret: client_secret,
      callbackURL: callbackURL,
      domain: domain
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();

      if (window) {
        window.console.log = function () {};
      }
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/cgt_jpr_lin_pawan/Documents/nuued-prod/nuued-ui/nuued-ui-app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map