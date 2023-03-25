/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/common.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/common.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/search_button.png */ \"./src/assets/search_button.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --background-color: #222;\\n  --primary-color: #f33f3f;\\n  --modal-background-color: #212122;\\n  --modal-color: #f1f1f1;\\n  --modal-button-background: #383839;\\n  --line: 1px solid rgba(255, 255, 255, 0.3);\\n}\\n\\n* {\\n  box-sizing: border-box !important;\\n}\\n\\nbody {\\n  font-family: \\\"Noto Sans KR\\\", sans-serif;\\n  font-size: 14px;\\n  background-color: var(--background-color);\\n  color: #fff;\\n  /* hidden scroll */\\n  -ms-overflow-style: none;\\n  scrollbar-width: none;\\n}\\n\\nbody::-webkit-scrollbar,\\ndialog::-webkit-scrollbar {\\n  /* hidden scroll */\\n  display: none;\\n}\\n\\nbutton {\\n  cursor: pointer;\\n}\\n\\nmovie-item {\\n  list-style: none;\\n}\\n\\n#app {\\n  padding-bottom: 48px;\\n}\\n\\n*:focus {\\n  outline: none;\\n}\\n\\n.none-display {\\n  display: none;\\n}\\n\\n.item-view,\\n.item-test {\\n  width: 100%;\\n}\\n\\n.item-view {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  width: 1200px;\\n  margin: 0 auto;\\n  padding: 0 20px;\\n}\\n\\n.item-view h2 {\\n  font-size: 2rem;\\n  font-weight: bold;\\n  user-select: none;\\n}\\n\\n/* https://andrew.hedges.name/experiments/aspect_ratio/ */\\n\\nul.item-list {\\n  display: grid;\\n  margin: 48px 0;\\n  grid-template-columns: repeat(5, 200px);\\n  grid-column-gap: 40px;\\n  grid-row-gap: 48px;\\n}\\n\\n.item-card {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.item-thumbnail {\\n  border-radius: 8px;\\n  width: 100%;\\n  height: 300px;\\n  background-size: contain;\\n  cursor: pointer;\\n}\\n\\n.item-title {\\n  display: -webkit-box;\\n  margin-top: 14px;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  -webkit-box-orient: vertical;\\n  -webkit-line-clamp: 1;\\n  font-size: 19px;\\n  font-weight: bold;\\n  line-height: 1.5;\\n}\\n\\n.item-title.skeleton {\\n  height: 20px;\\n}\\n\\n.item-score {\\n  display: flex;\\n  align-items: center;\\n  margin-top: 10px;\\n  font-size: 18px;\\n}\\n\\n.item-score.skeleton {\\n  display: block;\\n}\\n\\n.item-score > img {\\n  margin-right: 8px;\\n}\\n\\n.item-score::after {\\n  margin-left: 8px;\\n}\\n\\n.item-title.skeleton::after,\\n.item-score.skeleton::after {\\n  font-size: 0;\\n  content: \\\"loading\\\";\\n}\\n\\n.full-width {\\n  width: 100%;\\n}\\n\\n.last-item {\\n  margin-top: 48px;\\n}\\n\\nbutton.btn {\\n  border: 0;\\n  border-radius: 8px;\\n  height: 30px;\\n  color: #fff;\\n}\\n\\nbutton.primary {\\n  background: var(--primary-color);\\n}\\n\\n.item-card .skeleton {\\n  background: linear-gradient(-90deg, #aaa, #f0f0f0, #aaa, #f0f0f0);\\n  background-size: 400%;\\n  animation: skeleton-animation 5s infinite ease-out;\\n  border-radius: 8px;\\n}\\n\\n@keyframes skeleton-animation {\\n  0% {\\n    background-position: 0% 50%;\\n  }\\n  50% {\\n    background-position: 100% 50%;\\n  }\\n  100% {\\n    background-position: 0% 50%;\\n  }\\n}\\n\\nheader {\\n  width: 100%;\\n  min-width: 1200px;\\n  height: 72px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 20px;\\n  border-bottom: var(--line);\\n  box-shadow: rgba(255, 255, 255, 0.4) -1px -2px 4px,\\n    rgba(255, 255, 255, 0.3) 0px 6px 13px -3px,\\n    rgba(255, 255, 255, 0.2) 0px -3px 0px inset;\\n  margin-bottom: 48px;\\n}\\n\\nheader h1 {\\n  user-select: none;\\n  font-weight: bold;\\n  letter-spacing: -0.1rem;\\n}\\n\\nbutton.logo {\\n  top: 18px;\\n  background: transparent;\\n  padding: 0;\\n  font-size: 34px;\\n  color: var(--primary-color);\\n  border: 0;\\n}\\n\\nheader > .search-box {\\n  display: flex;\\n  background: #fff;\\n  padding: 8px 12px;\\n  border-radius: 4px;\\n}\\n\\nheader .search-box > input {\\n  border: 0;\\n  padding: 0;\\n  font-size: 14px;\\n}\\n\\nheader .search-box > .search-button {\\n  width: 14px;\\n  margin-top: 2px;\\n  border: 0;\\n  text-indent: -1000rem;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") transparent no-repeat 0 1px;\\n  background-size: contain;\\n}\\n\\n#no-result {\\n  line-height: 2;\\n  padding: 0 20px;\\n}\\n\\n#no-result > h2 {\\n  margin: 50px 0 32px;\\n}\\n\\n#no-result > p {\\n  margin-bottom: 10px;\\n}\\n\\n.modal-backdrop {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  z-index: -1;\\n  width: 100%;\\n  height: 100%;\\n  background: rgba(0, 0, 0, 0.4);\\n}\\n\\n#movie-detail {\\n  width: 826px;\\n  margin: 223px auto 0;\\n  padding: 0;\\n  font-size: 18px;\\n  color: var(--modal-color);\\n  border: 0;\\n  z-index: 1;\\n}\\n\\n#movie-detail .modal {\\n  padding: 18px;\\n  background: var(--modal-background-color);\\n}\\n\\n#movie-detail h2 {\\n  padding-bottom: 18px;\\n  text-align: center;\\n  font-weight: 600;\\n  font-size: 20px;\\n  border-bottom: var(--line);\\n}\\n\\n#movie-detail button {\\n  width: 36px;\\n  height: 36px;\\n  position: absolute;\\n  top: 12px;\\n  right: 18px;\\n  border-radius: 50%;\\n  background: var(--modal-button-background);\\n}\\n\\n#movie-detail button i {\\n  color: #fff;\\n  font-size: 16px;\\n}\\n\\n#detail-wrap {\\n  display: flex;\\n  height: 536px;\\n  padding-top: 32px;\\n}\\n\\n#detail-wrap > .item-thumbnail {\\n  flex: 1.4;\\n  height: calc(100% - 32px);\\n  margin: 0 32px 30px 0;\\n  cursor: default;\\n}\\n\\n#detail {\\n  position: relative;\\n  flex: 1.9;\\n}\\n\\n#detail .overview {\\n  display: -webkit-box;\\n  line-height: 1.8;\\n  font-size: 16px;\\n  margin-top: 14px;\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  -webkit-box-orient: vertical;\\n  -webkit-line-clamp: 10;\\n}\\n\\n#detail > #genre-and-score {\\n  display: flex;\\n  align-items: center;\\n  margin-bottom: 16px;\\n}\\n\\n#detail .item-genres {\\n  padding-bottom: 2px;\\n}\\n\\n#detail .item-score {\\n  margin: 0;\\n  margin-left: 18px;\\n}\\n\\n#detail .item-score > span {\\n  padding-bottom: 2px;\\n}\\n\\n#user-ratings-section {\\n  display: flex;\\n  align-items: center;\\n  position: absolute;\\n  bottom: 30px;\\n  width: 100%;\\n  height: 64px;\\n  padding: 0 16px;\\n  background: #383839;\\n  border-radius: 16px;\\n}\\n\\n#user-ratings-section > h3 {\\n  margin-right: 12px;\\n  padding-bottom: 2px;\\n}\\n\\n.ratings {\\n  position: relative;\\n  font-size: 2rem;\\n  color: #ddd;\\n}\\n\\n.ratings > .stars {\\n  display: flex;\\n}\\n\\n.ratings input {\\n  width: 100%;\\n  height: 100%;\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  opacity: 0;\\n  cursor: pointer;\\n}\\n\\n#filled-stars {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  width: 0;\\n  overflow: hidden;\\n  pointer-events: none;\\n}\\n\\n#user-ratings-section > p,\\n#user-ratings-section > span {\\n  padding-left: 12px;\\n  font-size: 16px;\\n}\\n\\n/* Top button */\\n#top-button {\\n  position: fixed;\\n  right: 3%;\\n  bottom: 0;\\n  width: 50px;\\n  height: 50px;\\n  margin: 0;\\n  padding: 0;\\n  text-align: center;\\n  color: var(--modal-color);\\n  background: var(--modal-background-color);\\n  border: 3.5px solid var(--modal-background-color);\\n  border-radius: 50%;\\n  opacity: 0;\\n  transition: 0.7s ease;\\n}\\n\\n#top-button.active {\\n  opacity: 1;\\n  bottom: 34px;\\n  cursor: pointer;\\n}\\n\\n#top-button > button {\\n  border-radius: 50%;\\n}\\n\\n#top-button-icon {\\n  text-align: center;\\n  font-size: 40px;\\n}\\n\\n@media screen and (max-width: 834px) {\\n  .item-view {\\n    width: auto;\\n    margin: 0 auto;\\n  }\\n\\n  .item-view h2 {\\n    padding-left: 18px;\\n    font-weight: 600;\\n    font-size: 28px;\\n  }\\n\\n  ul.item-list {\\n    width: 100%;\\n    margin: 36px auto;\\n    justify-content: center;\\n    grid-template-columns: repeat(3, 180px);\\n    grid-column-gap: 50px;\\n  }\\n\\n  .item-thumbnail {\\n    width: 180px;\\n    height: 270px;\\n  }\\n\\n  header {\\n    min-width: auto;\\n  }\\n\\n  #no-result {\\n    padding: 0 30px;\\n  }\\n\\n  #no-result > p,\\n  #no-result > ul {\\n    padding-left: 18px;\\n  }\\n\\n  #movie-detail {\\n    width: 740px;\\n  }\\n\\n  #user-ratings-section {\\n    height: 54px;\\n    padding: 0 14px;\\n  }\\n\\n  #user-ratings-section > h3 {\\n    margin-right: 6px;\\n    padding-bottom: 2px;\\n    text-align: center;\\n    font-size: 12px;\\n    line-height: 1.4;\\n  }\\n\\n  #user-ratings-section > p,\\n  #user-ratings-section > span {\\n    padding-left: 8px;\\n    font-size: 14px;\\n  }\\n\\n  /* Top button */\\n  #top-button.active {\\n    bottom: 28px;\\n  }\\n}\\n\\n@media screen and (max-width: 662px) {\\n  #movie-detail .modal {\\n    width: 100%;\\n  }\\n\\n  .item-view {\\n    width: 390px;\\n    margin: 0 auto;\\n  }\\n\\n  .item-view h2 {\\n    padding-left: 5px;\\n    font-size: 20px;\\n  }\\n\\n  ul.item-list {\\n    margin: 30px auto;\\n    grid-template-columns: repeat(2, 170px);\\n    grid-column-gap: 40px;\\n  }\\n\\n  .item-thumbnail {\\n    width: 170px;\\n    height: 255px;\\n  }\\n\\n  .item-title {\\n    font-size: 17px;\\n  }\\n\\n  .item-score {\\n    margin-top: 8px;\\n    font-size: 16px;\\n  }\\n\\n  header {\\n    min-width: 390px;\\n    margin-bottom: 40px;\\n  }\\n\\n  .logo {\\n    position: absolute;\\n    top: 26px;\\n    z-index: 0;\\n  }\\n\\n  header > .search-box {\\n    z-index: 1;\\n  }\\n\\n  header .search-input {\\n    width: 0;\\n    opacity: 0;\\n    transition: all 0.8s ease;\\n  }\\n\\n  header .search-input.extended {\\n    width: 312px;\\n    opacity: 1;\\n  }\\n\\n  #no-result > p,\\n  #no-result > ul {\\n    padding: 0;\\n  }\\n  #movie-detail h2 {\\n    text-align: left;\\n  }\\n\\n  #movie-detail .modal {\\n    position: fixed;\\n    bottom: 0;\\n    left: 0;\\n  }\\n\\n  #detail-wrap > .item-thumbnail {\\n    display: none;\\n  }\\n\\n  #user-ratings-section {\\n    justify-content: center;\\n  }\\n  #user-ratings-section > h3 {\\n    margin-right: 14px;\\n  }\\n\\n  #user-ratings-section > p,\\n  #user-ratings-section > span {\\n    padding-left: 14px;\\n  }\\n\\n  .message {\\n    display: none;\\n  }\\n\\n  /* Top button */\\n  #top-button {\\n    right: 1.6%;\\n  }\\n\\n  #top-button.active {\\n    bottom: 18px;\\n  }\\n}\\n\\n@media screen and (max-width: 390px) {\\n  .item-view {\\n    padding: 0 32px;\\n  }\\n\\n  .item-view h2 {\\n    font-size: 24px;\\n  }\\n\\n  ul.item-list {\\n    margin: 30px auto;\\n    grid-template-columns: repeat(1, 100%);\\n    grid-column-gap: 40px;\\n  }\\n\\n  .item-thumbnail {\\n    width: 326px;\\n    height: 485.7px;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/css/common.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/\\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml,\\nbody,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\nbody {\\n  line-height: 1;\\n}\\nol,\\nul {\\n  list-style: none;\\n}\\nblockquote,\\nq {\\n  quotes: none;\\n}\\nblockquote:before,\\nblockquote:after,\\nq:before,\\nq:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/css/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/common.css":
/*!****************************!*\
  !*** ./src/css/common.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./common.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/common.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/css/common.css?");

/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/reset.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/css/reset.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://javascript-movie-review/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/components/NoResultsMessage.ts":
/*!********************************************!*\
  !*** ./src/components/NoResultsMessage.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NoResultsMessage)\n/* harmony export */ });\n/* harmony import */ var _domain_movieApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/movieApi */ \"./src/domain/movieApi.ts\");\n\nclass NoResultsMessage extends HTMLElement {\n    constructor() {\n        super();\n        this.render();\n    }\n    render() {\n        this.innerHTML = `\n    <section id=\"no-result\" class=\"center item-list\">\n      <h2>\n        \"${_domain_movieApi__WEBPACK_IMPORTED_MODULE_0__.movieApi.urlParams.get(\"query\")}\"에 일치하는 검색 결과가 없습니다.\n      </h2>\n      <p>[ 제안 ]</p>\n      <ul>\n        <li>다른 키워드를 입력하세요.</li>\n        <li>특수 문자가 포함되어 있다면 제거해 주세요.</li>\n        <li>더 짧은 키워드를 입력해 보세요.</li>\n        <li>띄어쓰기를 확인하세요.</li>\n      </ul>\n    </section>\n    `;\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/NoResultsMessage.ts?");

/***/ }),

/***/ "./src/components/Skeleton.ts":
/*!************************************!*\
  !*** ./src/components/Skeleton.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Skeleton)\n/* harmony export */ });\nclass Skeleton extends HTMLElement {\n    constructor() {\n        super();\n        this.render();\n    }\n    render() {\n        this.innerHTML = `\n      <li class=\"movie-skeleton\">\n        <div class=\"item-card\">\n          <div class=\"item-thumbnail skeleton\"></div>\n          <div class=\"item-title skeleton\"></div>\n          <div class=\"item-score skeleton\"></div>\n        </div>\n      </li>\n    `;\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/Skeleton.ts?");

/***/ }),

/***/ "./src/components/header/headerHandler.ts":
/*!************************************************!*\
  !*** ./src/components/header/headerHandler.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initLogo\": () => (/* binding */ initLogo),\n/* harmony export */   \"initSearchBox\": () => (/* binding */ initSearchBox)\n/* harmony export */ });\n/* harmony import */ var _utils_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/selector */ \"./src/utils/selector.ts\");\n/* harmony import */ var _domain_movieApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain/movieApi */ \"./src/domain/movieApi.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ \"./src/constants/index.ts\");\n/* harmony import */ var _movieStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../movieStore */ \"./src/movieStore.ts\");\n\n\n\n\nconst { SEARCHED_MOVIE } = _constants__WEBPACK_IMPORTED_MODULE_2__.PATH;\nconst initSearchBox = () => {\n    (0,_utils_selector__WEBPACK_IMPORTED_MODULE_0__.$)(\".search-box\").addEventListener(\"submit\", (event) => {\n        event.preventDefault();\n        if (event.target instanceof HTMLFormElement) {\n            const formData = new FormData(event.target);\n            const keyword = String(formData.get(\"search-bar\")).trim();\n            if (keyword.length < 1)\n                return handleMobileSearchBox(event);\n            _domain_movieApi__WEBPACK_IMPORTED_MODULE_1__.movieApi.urlParams.set(\"query\", keyword);\n            resetMoviesAndPages();\n            _domain_movieApi__WEBPACK_IMPORTED_MODULE_1__.movieApi.showMovies(SEARCHED_MOVIE, keyword);\n            toggleLogo();\n        }\n    });\n};\nconst initLogo = () => {\n    (0,_utils_selector__WEBPACK_IMPORTED_MODULE_0__.$)(\"button.logo\").addEventListener(\"click\", () => {\n        resetMoviesAndPages();\n        (0,_utils_selector__WEBPACK_IMPORTED_MODULE_0__.$)(\".search-box\").reset();\n        _domain_movieApi__WEBPACK_IMPORTED_MODULE_1__.movieApi.showMovies();\n        toggleLogo();\n    });\n};\nconst toggleLogo = () => {\n    if (_domain_movieApi__WEBPACK_IMPORTED_MODULE_1__.movieApi.url.pathname.includes(_constants__WEBPACK_IMPORTED_MODULE_2__.PATH.POPULAR_MOVIE)) {\n        (0,_utils_selector__WEBPACK_IMPORTED_MODULE_0__.$)(\"button.logo\").classList.add(\"none-display\");\n        (0,_utils_selector__WEBPACK_IMPORTED_MODULE_0__.$)(\"img.logo\").classList.remove(\"none-display\");\n    }\n    else {\n        (0,_utils_selector__WEBPACK_IMPORTED_MODULE_0__.$)(\"button.logo\").classList.remove(\"none-display\");\n        (0,_utils_selector__WEBPACK_IMPORTED_MODULE_0__.$)(\"img.logo\").classList.add(\"none-display\");\n    }\n};\nconst resetMoviesAndPages = () => {\n    _movieStore__WEBPACK_IMPORTED_MODULE_3__.movieStore.movies = [];\n    _domain_movieApi__WEBPACK_IMPORTED_MODULE_1__.movieApi.urlParams.set(\"page\", \"1\");\n    _domain_movieApi__WEBPACK_IMPORTED_MODULE_1__.movieApi.totalPage = 2;\n};\nconst handleMobileSearchBox = (event) => {\n    if (!(event.target instanceof HTMLFormElement))\n        return;\n    if (getComputedStyle(event.target).zIndex !== \"1\")\n        return;\n    const inputBox = event.target.firstElementChild;\n    if (inputBox instanceof HTMLInputElement) {\n        inputBox.classList.add(\"extended\");\n        restoreMobileSearchBox(inputBox, event.target);\n    }\n};\nconst restoreMobileSearchBox = (inputBox, searchBox) => {\n    searchBox.addEventListener(\"mouseleave\", () => {\n        if (window.innerWidth > 390)\n            return;\n        window.addEventListener(\"resize\", () => {\n            if (window.innerWidth <= 390)\n                return searchBox.reset();\n        });\n        inputBox.classList.remove(\"extended\");\n        searchBox.reset();\n    });\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/header/headerHandler.ts?");

/***/ }),

/***/ "./src/components/header/index.ts":
/*!****************************************!*\
  !*** ./src/components/header/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var _headerHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headerHandler */ \"./src/components/header/headerHandler.ts\");\n\nclass Header extends HTMLElement {\n    constructor() {\n        super();\n        this.render();\n        (0,_headerHandler__WEBPACK_IMPORTED_MODULE_0__.initSearchBox)();\n        (0,_headerHandler__WEBPACK_IMPORTED_MODULE_0__.initLogo)();\n    }\n    render() {\n        this.innerHTML = `\n    <header>\n      <h1>\n        <img class=\"logo\" src=\"../assets/logo.png\" alt=\"MovieList 로고\" />\n        <button class=\"logo none-display\"><i class=\"bi bi-house-fill\"></i></button>\n      </h1>\n      <form id=\"search-bar\" class=\"search-box\">\n        <input type=\"text\" placeholder=\"검색\" name=\"search-bar\" class=\"search-input\"/>\n        <button class=\"search-button\">검색</button>\n      </form>\n    </header>\n    `;\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/header/index.ts?");

/***/ }),

/***/ "./src/components/movieDetailModal/index.ts":
/*!**************************************************!*\
  !*** ./src/components/movieDetailModal/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovieDetailModal)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ \"./src/constants/index.ts\");\n\nclass MovieDetailModal extends HTMLElement {\n    constructor() {\n        super();\n    }\n    renderMovieDetail(movie) {\n        this.innerHTML = `\n      <dialog id=\"movie-detail\">\n        <div class=\"modal-backdrop\"></div>\n        <div class=\"modal\">\n          <h2>${movie.title}</h2>\n          <button class=\"modal-close-button\"><i class=\"bi bi-x-lg\"></i></button>\n          <div id=\"detail-wrap\">\n            <img\n              class=\"item-thumbnail skeleton\"\n              src=\"https://image.tmdb.org/t/p/w500${movie.poster}\" \n              onerror=\"\n                this.style.border='1px solid #e2e2e2';\n                this.style.background='var(--background-color)';\n                this.src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';\"\n              loading=\"lazy\" alt=\"${movie.title}\">\n            <article id=\"detail\">\n              <div id=\"genre-and-score\">\n                <h3 class=\"item-genres\">${movie.genres}</h3>\n                <p class=\"item-score\">\n                  <img src=\"./assets/star_filled.png\" alt=\"별점\" />\n                  <span>${movie.ratings.toFixed(1)}</span>\n                </p>\n              </div>\n              <p class=\"overview\">${movie.overview === \"\" ? _constants__WEBPACK_IMPORTED_MODULE_0__.NO_OVERVIEW : movie.overview}</p>\n              <section id=\"user-ratings-section\">\n                <h3>내 별점</h3>\n                <div class=\"ratings\">\n                  <div class=\"stars\">\n                    ${'<img src=\"./assets/star_empty.png\" alt=\"별점\" />'.repeat(5)}\n                  </div>\n                  <div id=\"filled-stars\" class=\"stars\">\n                    ${'<img src=\"./assets/star_filled.png\" alt=\"별점\" />'.repeat(5)}\n                  </div>\n                  <input\n                    id=\"user-ratings-input\"\n                    class=\"${movie.id}-ratings\"\n                    type=\"range\"\n                    value=\"1\"\n                    step=\"2\"\n                    min=\"0\"\n                    max=\"10\"\n                  />\n                </div>\n                <span class=\"user-ratings\">${movie.userRatings}</span>\n                <p class=\"message\">${_constants__WEBPACK_IMPORTED_MODULE_0__.RATING_MESSAGES[movie.userRatings]}</p>\n              </section>\n            </article>\n          </div>\n        </div>\n      </dialog>\n    `;\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/movieDetailModal/index.ts?");

/***/ }),

/***/ "./src/components/movieDetailModal/movieDetailModalHandler.ts":
/*!********************************************************************!*\
  !*** ./src/components/movieDetailModal/movieDetailModalHandler.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleModal\": () => (/* binding */ handleModal)\n/* harmony export */ });\n/* harmony import */ var _domain_movieDetailApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/movieDetailApi */ \"./src/domain/movieDetailApi.ts\");\n/* harmony import */ var _utils_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/selector */ \"./src/utils/selector.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ \"./src/constants/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nconst handleModal = () => {\n    showModal();\n    closeModal();\n};\nconst showModal = () => {\n    (0,_utils_selector__WEBPACK_IMPORTED_MODULE_1__.$)(\".item-list\").addEventListener(\"click\", (event) => __awaiter(void 0, void 0, void 0, function* () {\n        const target = event.target;\n        if (!(target instanceof HTMLImageElement) || target.alt === \"별점\")\n            return;\n        yield (0,_domain_movieDetailApi__WEBPACK_IMPORTED_MODULE_0__.getMovieDetail)(Number(target.id));\n        const userRatings = localStorage.getItem(target.id);\n        const ratings = `${userRatings ? Number(userRatings) * 10 : 0}%`;\n        (0,_utils_selector__WEBPACK_IMPORTED_MODULE_1__.$)(`#filled-stars`).style.width = ratings;\n        (0,_utils_selector__WEBPACK_IMPORTED_MODULE_1__.$)(\"#movie-detail\").showModal();\n        const bodyStyle = (0,_utils_selector__WEBPACK_IMPORTED_MODULE_1__.$)(\"body\").style;\n        bodyStyle.overflow = \"hidden\";\n        handleUserRatings();\n    }));\n};\nconst closeModal = () => {\n    (0,_utils_selector__WEBPACK_IMPORTED_MODULE_1__.$)(\"#modal\").addEventListener(\"click\", (event) => {\n        const target = event.target;\n        if (!(target instanceof HTMLElement))\n            return;\n        if (isClosing(target.className)) {\n            (0,_utils_selector__WEBPACK_IMPORTED_MODULE_1__.$)(\"#movie-detail\").close();\n            const bodyStyle = (0,_utils_selector__WEBPACK_IMPORTED_MODULE_1__.$)(\"body\").style;\n            bodyStyle.overflow = \"visible\";\n        }\n    });\n};\nconst isClosing = (className) => {\n    return Boolean([\"modal-close-button\", \"bi bi-x-lg\", \"modal-backdrop\"].filter((section) => section === className).length);\n};\nconst handleUserRatings = () => {\n    (0,_utils_selector__WEBPACK_IMPORTED_MODULE_1__.$)(\"#user-ratings-input\").addEventListener(\"input\", (event) => {\n        const target = event.target;\n        if (!(target instanceof HTMLInputElement))\n            return;\n        (0,_utils_selector__WEBPACK_IMPORTED_MODULE_1__.$)(`#filled-stars`).style.width = `${Number(target.value) * 10}%`;\n        const movieId = target.className.replace(\"-ratings\", \"\");\n        localStorage.setItem(movieId, target.value);\n        const ratings = localStorage.getItem(movieId);\n        (0,_utils_selector__WEBPACK_IMPORTED_MODULE_1__.$)(\".user-ratings\").textContent = `${ratings}`;\n        const message = _constants__WEBPACK_IMPORTED_MODULE_2__.RATING_MESSAGES[ratings ? ratings : \"0\"];\n        (0,_utils_selector__WEBPACK_IMPORTED_MODULE_1__.$)(\".message\").textContent = `${message}`;\n    });\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/movieDetailModal/movieDetailModalHandler.ts?");

/***/ }),

/***/ "./src/components/movieList/index.ts":
/*!*******************************************!*\
  !*** ./src/components/movieList/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovieList)\n/* harmony export */ });\n/* harmony import */ var _domain_movieApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/movieApi */ \"./src/domain/movieApi.ts\");\n/* harmony import */ var _movieStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../movieStore */ \"./src/movieStore.ts\");\n/* harmony import */ var _movieListHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movieListHandler */ \"./src/components/movieList/movieListHandler.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ \"./src/constants/index.ts\");\n\n\n\n\nconst { POPULAR_MOVIE } = _constants__WEBPACK_IMPORTED_MODULE_3__.PATH;\nclass MovieList extends HTMLElement {\n    constructor() {\n        super();\n        this.innerHTML = `\n    <section class=\"item-view\">\n      <h2>지금 인기 있는 영화</h2>\n      <ul class=\"item-list\">${(0,_movieListHandler__WEBPACK_IMPORTED_MODULE_2__.makeSkeletons)()}</ul>\n    </section>\n    `;\n    }\n    renderMovies() {\n        this.innerHTML = `\n    <section class=\"item-view\">\n      ${_movieStore__WEBPACK_IMPORTED_MODULE_1__.movieStore.movies.length > 0\n            ? `<h2>${_domain_movieApi__WEBPACK_IMPORTED_MODULE_0__.movieApi.url.pathname.includes(POPULAR_MOVIE)\n                ? \"지금 인기 있는 영화\"\n                : `\"${_domain_movieApi__WEBPACK_IMPORTED_MODULE_0__.movieApi.urlParams.get(\"query\")}\" 검색 결과`}</h2>\n            <ul class=\"item-list\">\n              ${_movieStore__WEBPACK_IMPORTED_MODULE_1__.movieStore.movies.map((movie) => this.renderMovie(movie))\n                .join(\"\")}\n            </ul>`\n            : `<no-results-message></no-results-message>`}\n    </section>\n    `;\n    }\n    renderMovie(movie) {\n        return `\n    <li>\n      <div class=\"item-card\">\n        <img\n          id=\"${movie.id}\"\n          class=\"item-thumbnail skeleton\"\n          src=\"https://image.tmdb.org/t/p/w500/${movie.poster}\"\n          onerror=\"\n            this.style.border='1px solid #e2e2e2';\n            this.style.background='var(--background-color)';\n            this.src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg';\n          \"\n          loading=\"lazy\"\n          alt=\"${movie.title}\"\n        />\n        <p class=\"item-title\">${movie.title}</p>\n        <p class=\"item-score\">\n          <img src=\"./assets/star_${movie.ratings > 0 ? \"filled\" : \"empty\"}.png\" alt=\"별점\" /> ${movie.ratings.toFixed(1)}\n        </p>\n      </div>\n    </li>\n    `;\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/movieList/index.ts?");

/***/ }),

/***/ "./src/components/movieList/movieListHandler.ts":
/*!******************************************************!*\
  !*** ./src/components/movieList/movieListHandler.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeSkeletons\": () => (/* binding */ makeSkeletons),\n/* harmony export */   \"updateMovies\": () => (/* binding */ updateMovies)\n/* harmony export */ });\n/* harmony import */ var _domain_movieApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain/movieApi */ \"./src/domain/movieApi.ts\");\n/* harmony import */ var _utils_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/selector */ \"./src/utils/selector.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ \"./src/constants/index.ts\");\n/* harmony import */ var _movieDetailModal_movieDetailModalHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movieDetailModal/movieDetailModalHandler */ \"./src/components/movieDetailModal/movieDetailModalHandler.ts\");\n/* harmony import */ var _components_topButton_topButtonHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/topButton/topButtonHandler */ \"./src/components/topButton/topButtonHandler.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\nconst updateMovies = () => {\n    (0,_utils_selector__WEBPACK_IMPORTED_MODULE_1__.$)(\"#movie-list\").renderMovies();\n    observeMovieIntersection();\n    (0,_movieDetailModal_movieDetailModalHandler__WEBPACK_IMPORTED_MODULE_3__.handleModal)();\n    (0,_components_topButton_topButtonHandler__WEBPACK_IMPORTED_MODULE_4__.backToTop)();\n};\nconst observeMovieIntersection = () => {\n    const observer = new IntersectionObserver((entries, observer) => {\n        entries.forEach((entry) => {\n            if (isStoppingObservation(entry))\n                return;\n            loadMoreMovies().then(() => {\n                observer.unobserve(entry.target);\n                observer.observe(entry.target);\n            });\n        });\n    });\n    const moviesOrNoResult = (0,_utils_selector__WEBPACK_IMPORTED_MODULE_1__.$)(\".item-view\").lastElementChild;\n    if (moviesOrNoResult && moviesOrNoResult.className !== \"item-list\")\n        return;\n    observer.observe((0,_utils_selector__WEBPACK_IMPORTED_MODULE_1__.$)(\".item-list > li:nth-last-child(3)\"));\n};\nconst isStoppingObservation = (entry) => {\n    const currentPage = Number(_domain_movieApi__WEBPACK_IMPORTED_MODULE_0__.movieApi.urlParams.get(\"page\"));\n    return (entry.intersectionRatio <= 0 ||\n        !entry.isIntersecting ||\n        currentPage === _domain_movieApi__WEBPACK_IMPORTED_MODULE_0__.movieApi.totalPage);\n};\nconst loadMoreMovies = () => __awaiter(void 0, void 0, void 0, function* () {\n    (0,_utils_selector__WEBPACK_IMPORTED_MODULE_1__.$)(\".item-list\").insertAdjacentHTML(\"beforeend\", makeSkeletons());\n    const currentPage = Number(_domain_movieApi__WEBPACK_IMPORTED_MODULE_0__.movieApi.urlParams.get(\"page\"));\n    _domain_movieApi__WEBPACK_IMPORTED_MODULE_0__.movieApi.urlParams.set(\"page\", `${currentPage + 1}`);\n    const path = _domain_movieApi__WEBPACK_IMPORTED_MODULE_0__.movieApi.url.pathname.replace(\"/3/\", \"\");\n    _domain_movieApi__WEBPACK_IMPORTED_MODULE_0__.movieApi.showMovies(path, `${_domain_movieApi__WEBPACK_IMPORTED_MODULE_0__.movieApi.urlParams.get(\"query\")}`);\n});\nconst makeSkeletons = () => {\n    return \"<movie-skeleton></movie-skeleton>\".repeat(_constants__WEBPACK_IMPORTED_MODULE_2__.MOVIE_COUNT_IN_ONE_PAGE);\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/movieList/movieListHandler.ts?");

/***/ }),

/***/ "./src/components/topButton/index.ts":
/*!*******************************************!*\
  !*** ./src/components/topButton/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TopButton)\n/* harmony export */ });\nclass TopButton extends HTMLElement {\n    constructor() {\n        super();\n        this.render();\n    }\n    render() {\n        this.innerHTML = `\n    <button id=\"top-button\">\n      <i id=\"top-button-icon\" class=\"bi bi-arrow-up-circle-fill\"></i>\n    </button>\n    `;\n    }\n}\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/topButton/index.ts?");

/***/ }),

/***/ "./src/components/topButton/topButtonHandler.ts":
/*!******************************************************!*\
  !*** ./src/components/topButton/topButtonHandler.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"backToTop\": () => (/* binding */ backToTop)\n/* harmony export */ });\n/* harmony import */ var _utils_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/selector */ \"./src/utils/selector.ts\");\n\nconst backToTop = () => {\n    (0,_utils_selector__WEBPACK_IMPORTED_MODULE_0__.$)(\"#top-button\").addEventListener(\"click\", (event) => {\n        event.preventDefault();\n        window.scrollTo({ top: 0, behavior: \"smooth\" });\n    });\n    const observer = new IntersectionObserver((entries) => {\n        entries.forEach((entry) => {\n            if (entry.intersectionRatio <= 0)\n                return;\n            if (entry.isIntersecting)\n                (0,_utils_selector__WEBPACK_IMPORTED_MODULE_0__.$)(\"#top-button\").classList.toggle(\"active\");\n        });\n    });\n    if ((0,_utils_selector__WEBPACK_IMPORTED_MODULE_0__.$)(\".item-list\").childElementCount >= 26) {\n        observer.observe((0,_utils_selector__WEBPACK_IMPORTED_MODULE_0__.$)(\".item-list > li:nth-child(26)\"));\n    }\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/components/topButton/topButtonHandler.ts?");

/***/ }),

/***/ "./src/constants/index.ts":
/*!********************************!*\
  !*** ./src/constants/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"API\": () => (/* binding */ API),\n/* harmony export */   \"MOVIE_COUNT_IN_ONE_PAGE\": () => (/* binding */ MOVIE_COUNT_IN_ONE_PAGE),\n/* harmony export */   \"NO_OVERVIEW\": () => (/* binding */ NO_OVERVIEW),\n/* harmony export */   \"PATH\": () => (/* binding */ PATH),\n/* harmony export */   \"RATING_MESSAGES\": () => (/* binding */ RATING_MESSAGES)\n/* harmony export */ });\nconst MOVIE_COUNT_IN_ONE_PAGE = 20;\nconst API = {\n    URL: \"https://api.themoviedb.org/3/\",\n    LANGUAGE: \"ko\",\n};\nconst PATH = {\n    POPULAR_MOVIE: \"movie/popular\",\n    SEARCHED_MOVIE: \"search/movie\",\n};\nconst RATING_MESSAGES = {\n    \"0\": \"별점 미등록\",\n    \"2\": \"최악이에요\",\n    \"4\": \"별로예요\",\n    \"6\": \"보통이에요\",\n    \"8\": \"재밌어요\",\n    \"10\": \"명작이에요\",\n};\nconst NO_OVERVIEW = \"영화사에서 제공받은 줄거리가 없습니다.\";\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/constants/index.ts?");

/***/ }),

/***/ "./src/domain/movieApi.ts":
/*!********************************!*\
  !*** ./src/domain/movieApi.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"movieApi\": () => (/* binding */ movieApi)\n/* harmony export */ });\n/* harmony import */ var _movieStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../movieStore */ \"./src/movieStore.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nconst { URL: API_URL, LANGUAGE } = _constants__WEBPACK_IMPORTED_MODULE_1__.API;\nconst { POPULAR_MOVIE } = _constants__WEBPACK_IMPORTED_MODULE_1__.PATH;\nconst movieApi = {\n    url: new URL(API_URL),\n    urlParams: new URLSearchParams(),\n    totalPage: 2,\n    showMovies(endpoint = POPULAR_MOVIE, keyword = \"\") {\n        fetchMovieInfo(endpoint, keyword);\n    },\n};\nconst fetchMovieInfo = (endpoint, keyword) => __awaiter(void 0, void 0, void 0, function* () {\n    const movieUrl = buildMovieUrl(endpoint, keyword);\n    const movieApiData = yield fetch(movieUrl).then((response) => response.json());\n    catchError(movieApiData);\n    saveMovieInfoResponse(movieApiData);\n});\nconst buildMovieUrl = (endpoint, keyword) => {\n    var _a;\n    movieApi.url = new URL(endpoint, API_URL);\n    const urlParams = new URLSearchParams(`api_key=${\"MISSING_ENV_VAR\".API_KEY}`);\n    urlParams.set(\"language\", LANGUAGE);\n    urlParams.set(\"page\", (_a = movieApi.urlParams.get(\"page\")) !== null && _a !== void 0 ? _a : \"1\");\n    urlParams.set(\"query\", keyword);\n    movieApi.urlParams = urlParams;\n    return `${movieApi.url}?${urlParams}`;\n};\nconst catchError = (movieApiData) => {\n    try {\n        if (movieApiData.success === false)\n            throw new Error(movieApiData.status_message);\n    }\n    catch (error) {\n        if (error instanceof Error)\n            return alert(error.message);\n    }\n};\nconst saveMovieInfoResponse = (movieApiData) => {\n    movieApi.totalPage = movieApiData.total_pages;\n    _movieStore__WEBPACK_IMPORTED_MODULE_0__.movieStore.appendMovies(convertApiResponseToMovieList(movieApiData.results));\n};\nconst convertApiResponseToMovieList = (results) => {\n    return results.map((movie) => {\n        return {\n            poster: movie.poster_path,\n            title: movie.title,\n            ratings: movie.vote_average,\n            id: movie.id,\n        };\n    });\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/domain/movieApi.ts?");

/***/ }),

/***/ "./src/domain/movieDetailApi.ts":
/*!**************************************!*\
  !*** ./src/domain/movieDetailApi.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMovieDetail\": () => (/* binding */ getMovieDetail)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.ts\");\n/* harmony import */ var _utils_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/selector */ \"./src/utils/selector.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nconst { URL: API_URL, LANGUAGE } = _constants__WEBPACK_IMPORTED_MODULE_0__.API;\nconst getMovieDetail = (id) => __awaiter(void 0, void 0, void 0, function* () {\n    const movieUrl = buildMovieDetailUrl(id);\n    const movieDetailApi = yield fetch(movieUrl).then((response) => response.json());\n    const userRatings = localStorage.getItem(movieDetailApi.id)\n        ? `${localStorage.getItem(movieDetailApi.id)}`\n        : \"0\";\n    (0,_utils_selector__WEBPACK_IMPORTED_MODULE_1__.$)(\"#modal\").renderMovieDetail(convertApiResponseToMovieDetail(movieDetailApi, userRatings));\n});\nconst buildMovieDetailUrl = (id) => {\n    const url = new URL(`movie/${id}`, API_URL);\n    const urlParams = new URLSearchParams(`api_key=${\"MISSING_ENV_VAR\".API_KEY}`);\n    urlParams.set(\"language\", LANGUAGE);\n    return `${url}?${urlParams}`;\n};\nconst convertApiResponseToMovieDetail = (results, userRatings) => {\n    return {\n        poster: results.poster_path,\n        title: results.title,\n        ratings: results.vote_average,\n        overview: results.overview,\n        genres: results.genres.map((genre) => genre.name).join(\", \"),\n        id: results.id,\n        userRatings: userRatings,\n    };\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/domain/movieDetailApi.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/reset.css */ \"./src/css/reset.css\");\n/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/common.css */ \"./src/css/common.css\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header */ \"./src/components/header/index.ts\");\n/* harmony import */ var _components_movieList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/movieList */ \"./src/components/movieList/index.ts\");\n/* harmony import */ var _components_NoResultsMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/NoResultsMessage */ \"./src/components/NoResultsMessage.ts\");\n/* harmony import */ var _components_Skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Skeleton */ \"./src/components/Skeleton.ts\");\n/* harmony import */ var _components_movieDetailModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/movieDetailModal */ \"./src/components/movieDetailModal/index.ts\");\n/* harmony import */ var _components_topButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/topButton */ \"./src/components/topButton/index.ts\");\n/* harmony import */ var _domain_movieApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./domain/movieApi */ \"./src/domain/movieApi.ts\");\n\n\n\n\n\n\n\n\n\n_domain_movieApi__WEBPACK_IMPORTED_MODULE_8__.movieApi.showMovies();\ncustomElements.define(\"movie-header\", _components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\ncustomElements.define(\"movie-list\", _components_movieList__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\ncustomElements.define(\"no-results-message\", _components_NoResultsMessage__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\ncustomElements.define(\"movie-skeleton\", _components_Skeleton__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\ncustomElements.define(\"movie-detail-modal\", _components_movieDetailModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\ncustomElements.define(\"top-button\", _components_topButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/index.ts?");

/***/ }),

/***/ "./src/movieStore.ts":
/*!***************************!*\
  !*** ./src/movieStore.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"movieStore\": () => (/* binding */ movieStore)\n/* harmony export */ });\n/* harmony import */ var _components_movieList_movieListHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/movieList/movieListHandler */ \"./src/components/movieList/movieListHandler.ts\");\n\nconst movieStore = {\n    movies: Array(),\n    appendMovies(newMovies) {\n        this.movies = [...this.movies, ...newMovies];\n        (0,_components_movieList_movieListHandler__WEBPACK_IMPORTED_MODULE_0__.updateMovies)();\n    },\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/movieStore.ts?");

/***/ }),

/***/ "./src/utils/selector.ts":
/*!*******************************!*\
  !*** ./src/utils/selector.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": () => (/* binding */ $),\n/* harmony export */   \"$$\": () => (/* binding */ $$)\n/* harmony export */ });\nconst $ = (selector) => {\n    const element = document.querySelector(selector);\n    if (element)\n        return element;\n    throw new Error(`존재하지 않는 요소입니다: ${selector}`);\n};\nconst $$ = (selector) => {\n    const elements = document.querySelectorAll(selector);\n    if (elements.length)\n        return elements;\n    throw new Error(`존재하지 않는 요소입니다: ${selector}`);\n};\n\n\n//# sourceURL=webpack://javascript-movie-review/./src/utils/selector.ts?");

/***/ }),

/***/ "./src/assets/search_button.png":
/*!**************************************!*\
  !*** ./src/assets/search_button.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f1bd4269f4446ceae306.png\";\n\n//# sourceURL=webpack://javascript-movie-review/./src/assets/search_button.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;