(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vueSelectSides"] = factory();
	else
		root["vueSelectSides"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "000a":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAADPCAIAAADd4xIIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGRTg5QjY0OTJGRENFOTExQTcyN0JGQjE2Q0U4NTJGNCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxN0I3RjlFOERDMzUxMUU5OUNGMENGMTgxMDdDQ0YwNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxN0I3RjlFN0RDMzUxMUU5OUNGMENGMTgxMDdDQ0YwNiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkZGODlCNjQ5MkZEQ0U5MTFBNzI3QkZCMTZDRTg1MkY0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkZFODlCNjQ5MkZEQ0U5MTFBNzI3QkZCMTZDRTg1MkY0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+MCkBLgAACcFJREFUeNrsnd1vFccZhw/B5KL9D8pF75K75C4iN70g7V9QqemHKjVpKA1VaUmR0qYJTaUoqioSmZAEtZRAjWrArmvs2C4GgvEHsV3HOP7+IBh/HYyP8efBPmd3dne6Vq+byu7MnNmd5ycufGVmfvP4feedfXdnl5Qyg1yS3FgKus8GvZXxD4b/6zLcd0fRg9Gg+6NgsC4TeCUZALS5wVm2X3R8EI42l3YY0Jb+eCZay8Ox5owFWyZoS+/+bOmeaHsvGLickZElQ4K2NMrfFG0nRefpTCisGhe0pSygyeDzatHyrlyft3B00JamLdqI33QsmumxdoTQlgoFnmh/X7R/mIkCm4cJbckPaXN9Xu0rcmnS/qFCW5IVCtHyjvj0z5koTMR4oS2xIS037tceieaHEzRmaEvmPu32Jb/pjVI9gII2Z+RvevWvhkP1SRw7tCVJcnnKu3QwWhhL6PihLTklweQtv/plWVhL7hSgLSEbta4z/tW3LT9Og7YUFJ9hXBAEn/0tBVOBNrslil71y+HEjXTMBtosrgkePfSqDkYzn6VmRtBmK2r5Be+v340eTqZpUtBmJWrr88Vzz8vl6ZTNC9rsQ21lpljxfbkym76pQZtlqC3d20Jt7X4qZ/cYC2xTVJtNMWrQZhNqm8vFiu+lGDVoswg17/wPU7lXgzbLFHjexQPR/FDqJwptJQ9r0rv8qzQd4UKbvRKtJ8Khjx2ZLLSVUuFos2gtd2e+0FYyRdl+//KRjEtfNIO2Eu3Winmv6qfS23Bq1tBWmsrAr/1luo/WoM2ayqD9/XD8uoMThzbjlcFUl7hZ7ubcoc1sCi2s+bVHkv56AbQlQ37DbxzcrkFbKXLo+PVwuNFlB6DNVA7dWPIbXnPcBGgzlUOb3pD5BWhD+nPoWLPjORTaTEkU/MbXsQHajMDW/oHM5/AB2rQryk1sfTsSQZuJwHblzcR90w/aklkcTN6K/+EDtBlIooG48ntsgDYTCvqqotw4PkCbgcAWiraT2ABtRgLbYJ3LT9+hzeyOrfUENkCbkcA21CCXp/AB2kzs2IJOjnOhzYjC0SvJug0I2hIs0X0WE6DNSBZdvGPzZbTQlq76oOc8JkCbCcnCajhQiw/QZiSw9V6QxXV8gDYj1Wh/DSZAm5H6IDcelwj4AG1GAttgPSZAm6lN2wivVEGbmTQ6PyyX7uEDtBlJo8MNmABtRiQlaRTajKXRofRdtgdttqbRyQ5MgDZTtE18ggnQZoY1Ec31YQO0GYFtttfZz5pCm/ESYbobE6DNFG1u3IYGbTawFkZzvdgAbUZgWxhz7eogaCsdbbOkUWgzRpsDtyVDm0WZFBOgzVSJsDiBDdBmBLbl6Ywo4sO2VKbwd4Xj14Ouv4TZgYxvU6X2+Fd3732q7NkDu594TuFvlTllaXT3k98s2/dSPMh4qBb55m/ESxl0nlb4IHiXVHTTtLhx3PLv4+35xs/37D+q6rfFk42nrGBU+4/GA7PZN1UzVZZJY/zt/xRjPEKFd9DK1VkFUe2J5yxH7T9/pXH0tYi2ON4mYt8QJ3p1tM0p2Mc8eyAZ+619L1lEW3R/IBlbe3XjjFazCtz/2lPJqCUVjdOtmlTRHjX+RZFcy7rj265dGYtoS8rf6FbdpwS2fC4TCndywtY5gz20qcrrSdl/yM1l2/aRidjvqqEtrlmcqq3kIzV38sU1slO1vLLT3T37jz629+mg60yY7c/4mxa59fhXdu99euv4VBFqW7RtLCtbyxvHo2x/2b4fx4OMh2qRb/5mvJRbx/Xqjo2Une46paDztN/8Fj5QkxqpbR8tYgK0maKtmMcEaEPQlj6FPh5Am6lMKgqYAG3IatFNuSMpPVCkm3Lbcqqb0qv4gaoPadFNuf2o5l43pZqoRjflDuRaN6WqO1/optyJ3OumVLP9oJsy1ScXqp4JR6FTvtFNuaN9kqpuysKqUzmBbspSjlMVbXRT7ihmONZNqeq8zbVuSpX9beH4NUe6KTff/LrK/P7kt+imRIZoc0c8J0XQhqANIWhD0IYQtKFSiW7K0otuym3LqW5KhedtdFNuP6o51U0ZeMqiGt2UO/HfpW5KubmibB9DN+UO5FQ3paoGkAzdlOmWkj2q3HjoWi1JN+WO9kkquimVfN85WTmBbsqSjVMhbXRT7ihmuNRNqZA2uin/H++c6KYsfvRttRd8002J/qsK7zwj8wv4QE2qv6otrIEatJmiLccNuNBmStHCOCZAmzHaRjEB2kzRRiaFNkObtuJ6ND+MD9BmJLDN9ChsN4I29L9oQ9BmRqHSRwjQhr40tj0YwQRoM4WaVW/3QFua0+idFkyANmiDtnRJFlajudv4AG1GNm1321z7sjO0lUzB2DVMgDYjabSYV/h1AmhDX1ofjF/j7APaTNHWX4MJ0GZE/mY41YkN0GakPhi9QjUKbabSaN8lTIA2E4oejITT3fgAbUbSaM/5DO/bQpuRyBaGI43YAG1GdmwjTbKwhg/QZiKwiVunsAHajOzYBut4vQraTNHWdQYToM1IFs1+Hs0P4QO0mZC4WY4J0GakFJ3soCkc2kwFtpZ3MQHajOzYZnqi2V58gDb9kpH/yR+xAdpMKLh9MZr+Fz5Am/645m1QikKbqcDWfpLPN0ObkcD2aFF0n8MHaDMhv+lYRhTwAdr059DeynCkCR+gTX8OLa6L63+AA2gzIXH1LVomoc1IDh2sC/qqgADa9OfQlRnR+FtecoE2A6xJr+awLOYhANr0b9c6T0dzfSw/tGlXzJng6Tu0mUih+QWv+lAmFKw9tGlWKLzqn8m1+yw8tGmX33SM24OgzUhcG24IeitZcmjTj9q9Tq/2FdYb2vQXoYtf+FUHuewR2vQXoYVVr/JHPAyFNv2oFfNe5QtyZZaVhjbNqHkbMWrRLDcGQZv2ukD4F17kvAPa9CvwvX/8IpzqYoGtUlk6UbvwYni3ndUltukuC9ZBjdhmqgI99zy3vxPb9KO2mvXOfQfUiG3aFc31eZd+IvM5VhTa9Cocu+rVHOb1Y2jTX4D2VvqNr3PxGbRplij49a8Gg3WsIrRp3qg9vOtXH4oWxlhCaNO8Ubtz0//7Ielx+za06c2eRf/a20FPBW8dQ5vm7Lkw6tccjnITLBu06ZSUwe2L/j9/R/8ttGkOaYtf+A2vRdyBDG2ay4FA3Dol2t7LBD5LBW06Q9pcn//xrznjgDbNm7TVrGg5HgzUUnhCm06Jouj4UHz6p/gH1gbatCnwg76LouMUH+mANq2lgAj6a0TrCTiDNq3xzAuG6sXNcrk6x0pAm7Y6oLAW9FQE3WflxhJr4I7+LcAACX1bvLjPNHEAAAAASUVORK5CYII="

/***/ }),

/***/ "2a19":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3640":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_grouped_sort_list_vue_vue_type_style_index_0_id_343c3a30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2a19");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_grouped_sort_list_vue_vue_type_style_index_0_id_343c3a30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_grouped_sort_list_vue_vue_type_style_index_0_id_343c3a30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_grouped_sort_list_vue_vue_type_style_index_0_id_343c3a30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3c7a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "66cb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mirror_sort_list_vue_vue_type_style_index_0_id_72dc01ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3c7a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mirror_sort_list_vue_vue_type_style_index_0_id_72dc01ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mirror_sort_list_vue_vue_type_style_index_0_id_72dc01ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mirror_sort_list_vue_vue_type_style_index_0_id_72dc01ce_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9224":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"vue-select-sides\",\"version\":\"1.0.6\",\"description\":\"select sides component for vue\",\"license\":\"MIT\",\"private\":false,\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/juliorosseti/vue-select-sides\"},\"main\":\"dist/vueSelectSides.umd.js\",\"unpkg\":\"dist/vueSelectSides.umd.min.js\",\"scripts\":{\"serve\":\"vue-cli-service serve  --target lib --name vueSelectSides ./example/main.js \",\"build\":\"yarn run build:example && yarn run build:npm\",\"lint\":\"vue-cli-service lint\",\"i18n:report\":\"vue-cli-service i18n:report --src './src/**/*.?(js|vue)' --locales './src/locales/**/*.json'\",\"build:example\":\"vue-cli-service build --target lib --dest ./docs --formats umd --name vueSelectSides ./example/App.vue\",\"build:npm\":\"vue-cli-service build --target lib --name vueSelectSides ./src/index.js\"},\"files\":[\"dist\",\"styles\"],\"keywords\":[\"vue\",\"vuejs\",\"component\",\"select list\",\"multiselect\",\"multipleselect\",\"multiple\",\"select\",\"select 2 sides\",\"multiselect 2 sides\"],\"dependencies\":{\"vue-gtag\":\"^1.6.2\"},\"devDependencies\":{\"@vue/cli-plugin-babel\":\"^4.1.0\",\"@vue/cli-plugin-eslint\":\"^4.1.0\",\"@vue/cli-service\":\"^4.1.0\",\"babel-eslint\":\"^10.0.3\",\"core-js\":\"^3.4.3\",\"eslint\":\"^5.16.0\",\"eslint-plugin-vue\":\"^5.0.0\",\"node-sass\":\"^4.13.0\",\"sass-loader\":\"^8.0.0\",\"sort-by\":\"^1.2.0\",\"style-resources-loader\":\"^1.3.2\",\"vue\":\"^2.6.10\",\"vue-cli-plugin-i18n\":\"^0.6.0\",\"vue-i18n\":\"^8.0.0\",\"vue-template-compiler\":\"^2.6.10\"},\"eslintConfig\":{\"root\":true,\"env\":{\"node\":true},\"extends\":[\"plugin:vue/essential\",\"eslint:recommended\"],\"rules\":{},\"parserOptions\":{\"parser\":\"babel-eslint\"}},\"browserslist\":[\"> 1%\",\"last 2 versions\"]}");

/***/ }),

/***/ "a9cd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d678":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a9cd");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"aa149d74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/App.vue?vue&type=template&id=7a2119e3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ex"},[_c('header',[_vm._m(0),_c('h2',[_vm._v("Vue select sides")]),_c('h3',[_vm._v("Examples")]),_c('br'),_c('a',{attrs:{"href":_vm.repo,"target":"_blank"}},[_vm._v(_vm._s(_vm.repo))])]),_c('hr'),_c('div',{class:("the-body " + _vm.affix)},[_vm._m(1),_c('section',[_c('div',{staticClass:"ex-section",attrs:{"id":"mirror-basic"}},[_c('div',{staticClass:"ex-section-title"},[_c('h3',[_vm._v("01) Mirror - basic")]),_c('a',{attrs:{"href":(_vm.repoExamples + "mirror-basic.vue"),"target":"_blank"}},[_vm._v(" View source ")])]),_c('example-mirror-01')],1),_c('hr'),_c('div',{staticClass:"ex-section",attrs:{"id":"mirror-with-selecteds"}},[_c('div',{staticClass:"ex-section-title"},[_c('h3',[_vm._v("02) Mirror - with selecteds")]),_c('a',{attrs:{"href":(_vm.repoExamples + "mirror-with-selecteds.vue"),"target":"_blank"}},[_vm._v(" View source ")])]),_c('example-mirror-02')],1),_c('hr'),_c('div',{staticClass:"ex-section",attrs:{"id":"mirror-only-list"}},[_c('div',{staticClass:"ex-section-title"},[_c('h3',[_vm._v("03) Mirror - only list (search and footer removed)")]),_c('a',{attrs:{"href":(_vm.repoExamples + "mirror-only-list.vue"),"target":"_blank"}},[_vm._v(" View source ")])]),_c('example-mirror-03')],1),_c('hr'),_c('div',{staticClass:"ex-section",attrs:{"id":"mirror-sort-list"}},[_c('div',{staticClass:"ex-section-title"},[_c('h3',[_vm._v("04) Mirror - sort list")]),_c('a',{attrs:{"href":(_vm.repoExamples + "mirror-sort-list.vue"),"target":"_blank"}},[_vm._v(" View source ")])]),_c('example-mirror-04')],1),_c('hr'),_c('div',{staticClass:"ex-section",attrs:{"id":"mirror-placeholder-search"}},[_c('div',{staticClass:"ex-section-title"},[_c('h3',[_vm._v("05) Mirror - placeholder search")]),_c('a',{attrs:{"href":(_vm.repoExamples + "mirror-placeholder-search.vue"),"target":"_blank"}},[_vm._v(" View source ")])]),_c('example-mirror-06')],1),_c('hr'),_c('div',{staticClass:"ex-section",attrs:{"id":"grouped-basic"}},[_c('div',{staticClass:"ex-section-title"},[_c('h3',[_vm._v("01) Grouped - basic")]),_c('a',{attrs:{"href":(_vm.repoExamples + "grouped-basic.vue"),"target":"_blank"}},[_vm._v(" View source ")])]),_c('example-grouped-01')],1),_c('hr'),_c('div',{staticClass:"ex-section",attrs:{"id":"grouped-with-selecteds"}},[_c('div',{staticClass:"ex-section-title"},[_c('h3',[_vm._v("02) Grouped - with selecteds")]),_c('a',{attrs:{"href":(_vm.repoExamples + "grouped-with-selecteds.vue"),"target":"_blank"}},[_vm._v(" View source ")])]),_c('example-grouped-02')],1),_c('hr'),_c('div',{staticClass:"ex-section",attrs:{"id":"grouped-only-list"}},[_c('div',{staticClass:"ex-section-title"},[_c('h3',[_vm._v("03) Grouped - only list (search and footer removed)")]),_c('a',{attrs:{"href":(_vm.repoExamples + "grouped-only-list.vue"),"target":"_blank"}},[_vm._v(" View source ")])]),_c('example-grouped-03')],1),_c('hr'),_c('div',{staticClass:"ex-section",attrs:{"id":"grouped-sort-list"}},[_c('div',{staticClass:"ex-section-title"},[_c('h3',[_vm._v("04) Grouped - sort list")]),_c('a',{attrs:{"href":(_vm.repoExamples + "grouped-sort-list.vue"),"target":"_blank"}},[_vm._v(" View source ")])]),_c('example-grouped-04')],1),_c('hr'),_c('div',{staticClass:"ex-section",attrs:{"id":"grouped-sort-selected-first"}},[_c('div',{staticClass:"ex-section-title"},[_c('h3',[_vm._v("05) Grouped - sort selected to top list")]),_c('a',{attrs:{"href":(_vm.repoExamples + "grouped-sort-selected-first.vue"),"target":"_blank"}},[_vm._v(" View source ")])]),_c('example-grouped-05')],1),_c('div',{staticClass:"ex-section",attrs:{"id":"grouped-placeholder-search"}},[_c('div',{staticClass:"ex-section-title"},[_c('h3',[_vm._v("06) Grouped - placeholder search")]),_c('a',{attrs:{"href":(_vm.repoExamples + "grouped-placeholder-search.vue"),"target":"_blank"}},[_vm._v(" View source ")])]),_c('example-grouped-06')],1)])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('img',{attrs:{"src":__webpack_require__("000a")}})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',[_c('div',[_c('ul',[_c('li',[_c('strong',[_vm._v("Mirror")])]),_c('ul',[_c('li',[_c('a',{attrs:{"href":"#mirror-basic"}},[_vm._v("01) Basic")])]),_c('li',[_c('a',{attrs:{"href":"#mirror-with-selecteds"}},[_vm._v("02) With selecteds")])]),_c('li',[_c('a',{attrs:{"href":"#mirror-only-list"}},[_vm._v("03) Only list")])]),_c('li',[_c('a',{attrs:{"href":"#mirror-sort-list"}},[_vm._v("04) Sort list")])]),_c('li',[_c('a',{attrs:{"href":"#mirror-placeholder-search"}},[_vm._v(" 05) Placeholder search ")])])])]),_c('ul',[_c('li',[_c('strong',[_vm._v("Grouped")])]),_c('ul',[_c('li',[_c('a',{attrs:{"href":"#grouped-basic"}},[_vm._v("01) Basic")])]),_c('li',[_c('a',{attrs:{"href":"#grouped-with-selecteds"}},[_vm._v("02) With selecteds")])]),_c('li',[_c('a',{attrs:{"href":"#grouped-only-list"}},[_vm._v("03) Only list")])]),_c('li',[_c('a',{attrs:{"href":"#grouped-sort-list"}},[_vm._v("04) Sort list")])]),_c('li',[_c('a',{attrs:{"href":"#grouped-sort-selected-first"}},[_vm._v(" 05) Sort selected first ")])]),_c('li',[_c('a',{attrs:{"href":"#grouped-placeholder-search"}},[_vm._v(" 06) Placeholder search ")])])])])])])}]


// CONCATENATED MODULE: ./example/App.vue?vue&type=template&id=7a2119e3&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"aa149d74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/mirror-basic.vue?vue&type=template&id=6aea3b56&
var mirror_basicvue_type_template_id_6aea3b56_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ex-lib"},[_c('vue-select-sides',{attrs:{"type":"mirror","list":_vm.list},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}}),_c('div',{staticClass:"ex-result"},[_c('h4',[_vm._v("Result")]),_c('pre',[_vm._v(_vm._s(_vm.selected))])])],1)}
var mirror_basicvue_type_template_id_6aea3b56_staticRenderFns = []


// CONCATENATED MODULE: ./example/components/mirror-basic.vue?vue&type=template&id=6aea3b56&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/mirror-basic.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var mirror_basicvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      selected: [],
      list: [{
        value: "afghanistan",
        label: "Afghanistan"
      }, {
        value: "akrotiri",
        label: "Akrotiri"
      }, {
        value: "albania",
        label: "Albania"
      }, {
        value: "algeria",
        label: "Algeria"
      }, {
        value: "american-samoa",
        label: "American Samoa"
      }, {
        value: "andorra",
        label: "Andorra"
      }, {
        value: "angola",
        label: "Angola"
      }, {
        value: "anguilla",
        label: "Anguilla"
      }, {
        value: "antarctica",
        label: "Antarctica"
      }, {
        value: "antigua-and-barbuda",
        label: "Antigua and Barbuda"
      }, {
        value: "argentina",
        label: "Argentina"
      }, {
        value: "armenia",
        label: "Armenia"
      }, {
        value: "aruba",
        label: "Aruba"
      }, {
        value: "ashmore-and-cartier-islands",
        label: "Ashmore and Cartier Islands"
      }, {
        value: "australia",
        label: "Australia"
      }, {
        value: "austria",
        label: "Austria"
      }, {
        value: "azerbaijan",
        label: "Azerbaijan"
      }, {
        value: "bahamas-the",
        label: "Bahamas, The"
      }, {
        value: "bahrain",
        label: "Bahrain"
      }, {
        value: "bangladesh",
        label: "Bangladesh"
      }, {
        value: "barbados",
        label: "Barbados"
      }, {
        value: "bassas-da-india",
        label: "Bassas da India"
      }, {
        value: "belarus",
        label: "Belarus"
      }, {
        value: "belgium",
        label: "Belgium"
      }, {
        value: "belize",
        label: "Belize"
      }, {
        value: "benin",
        label: "Benin"
      }, {
        value: "bermuda",
        label: "Bermuda"
      }, {
        value: "bhutan",
        label: "Bhutan"
      }, {
        value: "bolivia",
        label: "Bolivia"
      }, {
        value: "bosnia-and-herzegovina",
        label: "Bosnia and Herzegovina"
      }, {
        value: "botswana",
        label: "Botswana"
      }, {
        value: "bouvet-island",
        label: "Bouvet Island"
      }, {
        value: "brazil",
        label: "Brazil"
      }, {
        value: "british-indian-ocean-territory",
        label: "British Indian Ocean Territory"
      }, {
        value: "british-virgin-islands",
        label: "British Virgin Islands"
      }, {
        value: "brunei",
        label: "Brunei"
      }, {
        value: "bulgaria",
        label: "Bulgaria"
      }, {
        value: "burkina-faso",
        label: "Burkina Faso"
      }, {
        value: "burma",
        label: "Burma"
      }, {
        value: "burundi",
        label: "Burundi"
      }, {
        value: "cambodia",
        label: "Cambodia"
      }, {
        value: "cameroon",
        label: "Cameroon"
      }, {
        value: "canada",
        label: "Canada"
      }, {
        value: "cape-verde",
        label: "Cape Verde"
      }, {
        value: "cayman-islands",
        label: "Cayman Islands"
      }, {
        value: "central-african-republic",
        label: "Central African Republic"
      }, {
        value: "chad",
        label: "Chad"
      }, {
        value: "chile",
        label: "Chile"
      }, {
        value: "china",
        label: "China"
      }, {
        value: "christmas-island",
        label: "Christmas Island"
      }, {
        value: "clipperton-island",
        label: "Clipperton Island"
      }, {
        value: "cocos-(keeling)-islands",
        label: "Cocos (Keeling) Islands"
      }, {
        value: "colombia",
        label: "Colombia"
      }, {
        value: "comoros",
        label: "Comoros"
      }, {
        value: "congo-democratic-republic-of-the",
        label: "Congo, Democratic Republic of the"
      }, {
        value: "congo-republic-of-the",
        label: "Congo, Republic of the"
      }, {
        value: "cook-islands",
        label: "Cook Islands"
      }, {
        value: "coral-sea-islands",
        label: "Coral Sea Islands"
      }, {
        value: "costa-rica",
        label: "Costa Rica"
      }, {
        value: "cote-d'ivoire",
        label: "Cote d'Ivoire"
      }, {
        value: "croatia",
        label: "Croatia"
      }, {
        value: "cuba",
        label: "Cuba"
      }, {
        value: "cyprus",
        label: "Cyprus"
      }, {
        value: "czech-republic",
        label: "Czech Republic"
      }, {
        value: "denmark",
        label: "Denmark"
      }, {
        value: "dhekelia",
        label: "Dhekelia"
      }, {
        value: "djibouti",
        label: "Djibouti"
      }, {
        value: "dominica",
        label: "Dominica"
      }, {
        value: "dominican-republic",
        label: "Dominican Republic"
      }, {
        value: "ecuador",
        label: "Ecuador"
      }, {
        value: "egypt",
        label: "Egypt"
      }, {
        value: "el-salvador",
        label: "El Salvador"
      }, {
        value: "equatorial-guinea",
        label: "Equatorial Guinea"
      }, {
        value: "eritrea",
        label: "Eritrea"
      }, {
        value: "estonia",
        label: "Estonia"
      }, {
        value: "ethiopia",
        label: "Ethiopia"
      }, {
        value: "europa-island",
        label: "Europa Island"
      }, {
        value: "falkland-islands-(islas-malvinas)",
        label: "Falkland Islands (Islas Malvinas)"
      }, {
        value: "faroe-islands",
        label: "Faroe Islands"
      }, {
        value: "fiji",
        label: "Fiji"
      }, {
        value: "finland",
        label: "Finland"
      }, {
        value: "france",
        label: "France"
      }, {
        value: "french-guiana",
        label: "French Guiana"
      }, {
        value: "french-polynesia",
        label: "French Polynesia"
      }, {
        value: "french-southern-and-antarctic-lands",
        label: "French Southern and Antarctic Lands"
      }, {
        value: "gabon",
        label: "Gabon"
      }, {
        value: "gambia-the",
        label: "Gambia, The"
      }, {
        value: "gaza-strip",
        label: "Gaza Strip"
      }, {
        value: "georgia",
        label: "Georgia"
      }, {
        value: "germany",
        label: "Germany"
      }, {
        value: "ghana",
        label: "Ghana"
      }, {
        value: "gibraltar",
        label: "Gibraltar"
      }, {
        value: "glorioso-islands",
        label: "Glorioso Islands"
      }, {
        value: "greece",
        label: "Greece"
      }, {
        value: "greenland",
        label: "Greenland"
      }, {
        value: "grenada",
        label: "Grenada"
      }, {
        value: "guadeloupe",
        label: "Guadeloupe"
      }, {
        value: "guam",
        label: "Guam"
      }, {
        value: "guatemala",
        label: "Guatemala"
      }, {
        value: "guernsey",
        label: "Guernsey"
      }, {
        value: "guinea",
        label: "Guinea"
      }, {
        value: "guinea-bissau",
        label: "Guinea-Bissau"
      }, {
        value: "guyana",
        label: "Guyana"
      }, {
        value: "haiti",
        label: "Haiti"
      }, {
        value: "heard-island-and-mcdonald-islands",
        label: "Heard Island and McDonald Islands"
      }, {
        value: "holy-see-(vatican-city)",
        label: "Holy See (Vatican City)"
      }, {
        value: "honduras",
        label: "Honduras"
      }, {
        value: "hong-kong",
        label: "Hong Kong"
      }, {
        value: "hungary",
        label: "Hungary"
      }, {
        value: "iceland",
        label: "Iceland"
      }, {
        value: "india",
        label: "India"
      }, {
        value: "indonesia",
        label: "Indonesia"
      }, {
        value: "iran",
        label: "Iran"
      }, {
        value: "iraq",
        label: "Iraq"
      }, {
        value: "ireland",
        label: "Ireland"
      }, {
        value: "isle-of-man",
        label: "Isle of Man"
      }, {
        value: "israel",
        label: "Israel"
      }, {
        value: "italy",
        label: "Italy"
      }, {
        value: "jamaica",
        label: "Jamaica"
      }, {
        value: "jan-mayen",
        label: "Jan Mayen"
      }, {
        value: "japan",
        label: "Japan"
      }, {
        value: "jersey",
        label: "Jersey"
      }, {
        value: "jordan",
        label: "Jordan"
      }, {
        value: "juan-de-nova-island",
        label: "Juan de Nova Island"
      }, {
        value: "kazakhstan",
        label: "Kazakhstan"
      }, {
        value: "kenya",
        label: "Kenya"
      }, {
        value: "kiribati",
        label: "Kiribati"
      }, {
        value: "korea-north",
        label: "Korea, North"
      }, {
        value: "korea-south",
        label: "Korea, South"
      }, {
        value: "kuwait",
        label: "Kuwait"
      }, {
        value: "kyrgyzstan",
        label: "Kyrgyzstan"
      }, {
        value: "laos",
        label: "Laos"
      }, {
        value: "latvia",
        label: "Latvia"
      }, {
        value: "lebanon",
        label: "Lebanon"
      }, {
        value: "lesotho",
        label: "Lesotho"
      }, {
        value: "liberia",
        label: "Liberia"
      }, {
        value: "libya",
        label: "Libya"
      }, {
        value: "liechtenstein",
        label: "Liechtenstein"
      }, {
        value: "lithuania",
        label: "Lithuania"
      }, {
        value: "luxembourg",
        label: "Luxembourg"
      }, {
        value: "macau",
        label: "Macau"
      }, {
        value: "macedonia",
        label: "Macedonia"
      }, {
        value: "madagascar",
        label: "Madagascar"
      }, {
        value: "malawi",
        label: "Malawi"
      }, {
        value: "malaysia",
        label: "Malaysia"
      }, {
        value: "maldives",
        label: "Maldives"
      }, {
        value: "mali",
        label: "Mali"
      }, {
        value: "malta",
        label: "Malta"
      }, {
        value: "marshall-islands",
        label: "Marshall Islands"
      }, {
        value: "martinique",
        label: "Martinique"
      }, {
        value: "mauritania",
        label: "Mauritania"
      }, {
        value: "mauritius",
        label: "Mauritius"
      }, {
        value: "mayotte",
        label: "Mayotte"
      }, {
        value: "mexico",
        label: "Mexico"
      }, {
        value: "micronesia-federated-states-of",
        label: "Micronesia, Federated States of"
      }, {
        value: "moldova",
        label: "Moldova"
      }, {
        value: "monaco",
        label: "Monaco"
      }, {
        value: "mongolia",
        label: "Mongolia"
      }, {
        value: "montserrat",
        label: "Montserrat"
      }, {
        value: "morocco",
        label: "Morocco"
      }, {
        value: "mozambique",
        label: "Mozambique"
      }, {
        value: "namibia",
        label: "Namibia"
      }, {
        value: "nauru",
        label: "Nauru"
      }, {
        value: "navassa-island",
        label: "Navassa Island"
      }, {
        value: "nepal",
        label: "Nepal"
      }, {
        value: "netherlands",
        label: "Netherlands"
      }, {
        value: "netherlands-antilles",
        label: "Netherlands Antilles"
      }, {
        value: "new-caledonia",
        label: "New Caledonia"
      }, {
        value: "new-zealand",
        label: "New Zealand"
      }, {
        value: "nicaragua",
        label: "Nicaragua"
      }, {
        value: "niger",
        label: "Niger"
      }, {
        value: "nigeria",
        label: "Nigeria"
      }, {
        value: "niue",
        label: "Niue"
      }, {
        value: "norfolk-island",
        label: "Norfolk Island"
      }, {
        value: "northern-mariana-islands",
        label: "Northern Mariana Islands"
      }, {
        value: "norway",
        label: "Norway"
      }, {
        value: "oman",
        label: "Oman"
      }, {
        value: "pakistan",
        label: "Pakistan"
      }, {
        value: "palau",
        label: "Palau"
      }, {
        value: "panama",
        label: "Panama"
      }, {
        value: "papua-new-guinea",
        label: "Papua New Guinea"
      }, {
        value: "paracel-islands",
        label: "Paracel Islands"
      }, {
        value: "paraguay",
        label: "Paraguay"
      }, {
        value: "peru",
        label: "Peru"
      }, {
        value: "philippines",
        label: "Philippines"
      }, {
        value: "pitcairn-islands",
        label: "Pitcairn Islands"
      }, {
        value: "poland",
        label: "Poland"
      }, {
        value: "portugal",
        label: "Portugal"
      }, {
        value: "puerto-rico",
        label: "Puerto Rico"
      }, {
        value: "qatar",
        label: "Qatar"
      }, {
        value: "reunion",
        label: "Reunion"
      }, {
        value: "romania",
        label: "Romania"
      }, {
        value: "russia",
        label: "Russia"
      }, {
        value: "rwanda",
        label: "Rwanda"
      }, {
        value: "saint-helena",
        label: "Saint Helena"
      }, {
        value: "saint-kitts-and-nevis",
        label: "Saint Kitts and Nevis"
      }, {
        value: "saint-lucia",
        label: "Saint Lucia"
      }, {
        value: "saint-pierre-and-miquelon",
        label: "Saint Pierre and Miquelon"
      }, {
        value: "saint-vincent-and-the-grenadines",
        label: "Saint Vincent and the Grenadines"
      }, {
        value: "samoa",
        label: "Samoa"
      }, {
        value: "san-marino",
        label: "San Marino"
      }, {
        value: "sao-tome-and-principe",
        label: "Sao Tome and Principe"
      }, {
        value: "saudi-arabia",
        label: "Saudi Arabia"
      }, {
        value: "senegal",
        label: "Senegal"
      }, {
        value: "serbia-and-montenegro",
        label: "Serbia and Montenegro"
      }, {
        value: "seychelles",
        label: "Seychelles"
      }, {
        value: "sierra-leone",
        label: "Sierra Leone"
      }, {
        value: "singapore",
        label: "Singapore"
      }, {
        value: "slovakia",
        label: "Slovakia"
      }, {
        value: "slovenia",
        label: "Slovenia"
      }, {
        value: "solomon-islands",
        label: "Solomon Islands"
      }, {
        value: "somalia",
        label: "Somalia"
      }, {
        value: "south-africa",
        label: "South Africa"
      }, {
        value: "south-georgia-and-the-south",
        label: "South Georgia and the South Sandwich Islands"
      }, {
        value: "spain",
        label: "Spain"
      }, {
        value: "spratly-islands",
        label: "Spratly Islands"
      }, {
        value: "sri-lanka",
        label: "Sri Lanka"
      }, {
        value: "sudan",
        label: "Sudan"
      }, {
        value: "suriname",
        label: "Suriname"
      }, {
        value: "svalbard",
        label: "Svalbard"
      }, {
        value: "swaziland",
        label: "Swaziland"
      }, {
        value: "sweden",
        label: "Sweden"
      }, {
        value: "switzerland",
        label: "Switzerland"
      }, {
        value: "syria",
        label: "Syria"
      }, {
        value: "taiwan",
        label: "Taiwan"
      }, {
        value: "tajikistan",
        label: "Tajikistan"
      }, {
        value: "tanzania",
        label: "Tanzania"
      }, {
        value: "thailand",
        label: "Thailand"
      }, {
        value: "timor-leste",
        label: "Timor-Leste"
      }, {
        value: "togo",
        label: "Togo"
      }, {
        value: "tokelau",
        label: "Tokelau"
      }, {
        value: "tonga",
        label: "Tonga"
      }, {
        value: "trinidad-and-tobago",
        label: "Trinidad and Tobago"
      }, {
        value: "tromelin-island",
        label: "Tromelin Island"
      }, {
        value: "tunisia",
        label: "Tunisia"
      }, {
        value: "turkey",
        label: "Turkey"
      }, {
        value: "turkmenistan",
        label: "Turkmenistan"
      }, {
        value: "turks-and-caicos-islands",
        label: "Turks and Caicos Islands"
      }, {
        value: "tuvalu",
        label: "Tuvalu"
      }, {
        value: "uganda",
        label: "Uganda"
      }, {
        value: "ukraine",
        label: "Ukraine"
      }, {
        value: "united-arab-emirates",
        label: "United Arab Emirates"
      }, {
        value: "united-kingdom",
        label: "United Kingdom"
      }, {
        value: "united-states",
        label: "United States"
      }, {
        value: "uruguay",
        label: "Uruguay"
      }, {
        value: "uzbekistan",
        label: "Uzbekistan"
      }, {
        value: "vanuatu",
        label: "Vanuatu"
      }, {
        value: "venezuela",
        label: "Venezuela"
      }, {
        value: "vietnam",
        label: "Vietnam"
      }, {
        value: "virgin-islands",
        label: "Virgin Islands"
      }, {
        value: "wake-island",
        label: "Wake Island"
      }, {
        value: "wallis-and-futuna",
        label: "Wallis and Futuna"
      }, {
        value: "west-bank",
        label: "West Bank"
      }, {
        value: "western-sahara",
        label: "Western Sahara"
      }, {
        value: "yemen",
        label: "Yemen"
      }, {
        value: "zambia",
        label: "Zambia"
      }, {
        value: "zimbabwe",
        label: "Zimbabwe"
      }]
    };
  }
});
// CONCATENATED MODULE: ./example/components/mirror-basic.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_mirror_basicvue_type_script_lang_js_ = (mirror_basicvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./example/components/mirror-basic.vue





/* normalize component */

var component = normalizeComponent(
  components_mirror_basicvue_type_script_lang_js_,
  mirror_basicvue_type_template_id_6aea3b56_render,
  mirror_basicvue_type_template_id_6aea3b56_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mirror_basic = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"aa149d74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/mirror-with-selecteds.vue?vue&type=template&id=5225bb7e&
var mirror_with_selectedsvue_type_template_id_5225bb7e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ex-lib"},[_c('vue-select-sides',{attrs:{"type":"mirror","list":_vm.list},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}}),_c('div',{staticClass:"ex-result"},[_c('h4',[_vm._v("Result")]),_c('pre',[_vm._v(_vm._s(_vm.selected))])])],1)}
var mirror_with_selectedsvue_type_template_id_5225bb7e_staticRenderFns = []


// CONCATENATED MODULE: ./example/components/mirror-with-selecteds.vue?vue&type=template&id=5225bb7e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/mirror-with-selecteds.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var mirror_with_selectedsvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      selected: ["sudeste", "centro-oeste"],
      list: [{
        value: "sul",
        label: "Sul"
      }, {
        value: "sudeste",
        label: "Sudeste"
      }, {
        value: "norte",
        label: "Norte"
      }, {
        value: "centro-oeste",
        label: "Centro Oeste"
      }, {
        value: "nordeste",
        label: "Nordeste"
      }]
    };
  }
});
// CONCATENATED MODULE: ./example/components/mirror-with-selecteds.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_mirror_with_selectedsvue_type_script_lang_js_ = (mirror_with_selectedsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./example/components/mirror-with-selecteds.vue





/* normalize component */

var mirror_with_selecteds_component = normalizeComponent(
  components_mirror_with_selectedsvue_type_script_lang_js_,
  mirror_with_selectedsvue_type_template_id_5225bb7e_render,
  mirror_with_selectedsvue_type_template_id_5225bb7e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mirror_with_selecteds = (mirror_with_selecteds_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"aa149d74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/mirror-only-list.vue?vue&type=template&id=615b489c&
var mirror_only_listvue_type_template_id_615b489c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ex-lib"},[_c('vue-select-sides',{attrs:{"type":"mirror","list":_vm.list,"search":_vm.search,"total":_vm.total,"toggle-all":_vm.toggleAll},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}}),_c('div',{staticClass:"ex-result"},[_c('h4',[_vm._v("Result")]),_c('pre',[_vm._v(_vm._s(_vm.selected))])])],1)}
var mirror_only_listvue_type_template_id_615b489c_staticRenderFns = []


// CONCATENATED MODULE: ./example/components/mirror-only-list.vue?vue&type=template&id=615b489c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/mirror-only-list.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var mirror_only_listvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      search: false,
      toggleAll: false,
      total: false,
      selected: [],
      list: [{
        value: "sul",
        label: "Sul"
      }, {
        value: "sudeste",
        label: "Sudeste"
      }, {
        value: "norte",
        label: "Norte"
      }, {
        value: "centro-oeste",
        label: "Centro Oeste"
      }, {
        value: "nordeste",
        label: "Nordeste"
      }]
    };
  }
});
// CONCATENATED MODULE: ./example/components/mirror-only-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_mirror_only_listvue_type_script_lang_js_ = (mirror_only_listvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./example/components/mirror-only-list.vue





/* normalize component */

var mirror_only_list_component = normalizeComponent(
  components_mirror_only_listvue_type_script_lang_js_,
  mirror_only_listvue_type_template_id_615b489c_render,
  mirror_only_listvue_type_template_id_615b489c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mirror_only_list = (mirror_only_list_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"aa149d74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/mirror-sort-list.vue?vue&type=template&id=72dc01ce&scoped=true&
var mirror_sort_listvue_type_template_id_72dc01ce_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ex-lib"},[_c('vue-select-sides',{attrs:{"type":"mirror","order-by":_vm.order,"list":_vm.list},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}}),_c('div',{staticClass:"ex-result"},[_c('h4',[_vm._v("Result")]),_c('div',{staticClass:"ex-label-radio"},[_c('label',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.order),expression:"order"}],attrs:{"type":"radio","id":"asc","value":"asc"},domProps:{"checked":_vm._q(_vm.order,"asc")},on:{"change":function($event){_vm.order="asc"}}}),_vm._v(" ASC ")]),_c('label',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.order),expression:"order"}],attrs:{"type":"radio","id":"desc","value":"desc"},domProps:{"checked":_vm._q(_vm.order,"desc")},on:{"change":function($event){_vm.order="desc"}}}),_vm._v(" DESC ")])]),_c('pre',[_c('b',[_vm._v("Order")]),_vm._v(": "+_vm._s(_vm.order)+"."),_c('br'),_c('br'),_vm._v(_vm._s(_vm.selected))])])],1)}
var mirror_sort_listvue_type_template_id_72dc01ce_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./example/components/mirror-sort-list.vue?vue&type=template&id=72dc01ce&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/mirror-sort-list.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var mirror_sort_listvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      order: "asc",
      selected: [],
      list: [{
        value: "norte",
        label: "Norte"
      }, {
        value: "sul",
        label: "Sul"
      }, {
        value: "centro-oeste",
        label: "Centro Oeste"
      }, {
        value: "sudeste",
        label: "Sudeste"
      }, {
        value: "nordeste",
        label: "Nordeste"
      }]
    };
  }
});
// CONCATENATED MODULE: ./example/components/mirror-sort-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_mirror_sort_listvue_type_script_lang_js_ = (mirror_sort_listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./example/components/mirror-sort-list.vue?vue&type=style&index=0&id=72dc01ce&lang=scss&scoped=true&
var mirror_sort_listvue_type_style_index_0_id_72dc01ce_lang_scss_scoped_true_ = __webpack_require__("66cb");

// CONCATENATED MODULE: ./example/components/mirror-sort-list.vue






/* normalize component */

var mirror_sort_list_component = normalizeComponent(
  components_mirror_sort_listvue_type_script_lang_js_,
  mirror_sort_listvue_type_template_id_72dc01ce_scoped_true_render,
  mirror_sort_listvue_type_template_id_72dc01ce_scoped_true_staticRenderFns,
  false,
  null,
  "72dc01ce",
  null
  
)

/* harmony default export */ var mirror_sort_list = (mirror_sort_list_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"aa149d74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/mirror-placeholder-search.vue?vue&type=template&id=9f62165c&
var mirror_placeholder_searchvue_type_template_id_9f62165c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ex-lib"},[_c('vue-select-sides',{attrs:{"type":"mirror","list":_vm.list,"placeholder-search-left":"Yay! Search items...","placeholder-search-right":"Yay! Search selected items..."},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}}),_c('div',{staticClass:"ex-result"},[_c('h4',[_vm._v("Result")]),_c('pre',[_vm._v(_vm._s(_vm.selected))])])],1)}
var mirror_placeholder_searchvue_type_template_id_9f62165c_staticRenderFns = []


// CONCATENATED MODULE: ./example/components/mirror-placeholder-search.vue?vue&type=template&id=9f62165c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/mirror-placeholder-search.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var mirror_placeholder_searchvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      selected: ["sul", "sudeste"],
      list: [{
        value: "sul",
        label: "Sul"
      }, {
        value: "sudeste",
        label: "Sudeste"
      }, {
        value: "norte",
        label: "Norte"
      }, {
        value: "centro-oeste",
        label: "Centro Oeste"
      }, {
        value: "nordeste",
        label: "Nordeste"
      }]
    };
  }
});
// CONCATENATED MODULE: ./example/components/mirror-placeholder-search.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_mirror_placeholder_searchvue_type_script_lang_js_ = (mirror_placeholder_searchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./example/components/mirror-placeholder-search.vue





/* normalize component */

var mirror_placeholder_search_component = normalizeComponent(
  components_mirror_placeholder_searchvue_type_script_lang_js_,
  mirror_placeholder_searchvue_type_template_id_9f62165c_render,
  mirror_placeholder_searchvue_type_template_id_9f62165c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var mirror_placeholder_search = (mirror_placeholder_search_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"aa149d74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/grouped-basic.vue?vue&type=template&id=8f47e5d4&
var grouped_basicvue_type_template_id_8f47e5d4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ex-lib"},[_c('vue-select-sides',{attrs:{"type":"grouped","list":_vm.list},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}}),_c('div',{staticClass:"ex-result"},[_c('h4',[_vm._v("Result")]),_c('pre',[_vm._v(_vm._s(_vm.selected))])])],1)}
var grouped_basicvue_type_template_id_8f47e5d4_staticRenderFns = []


// CONCATENATED MODULE: ./example/components/grouped-basic.vue?vue&type=template&id=8f47e5d4&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/grouped-basic.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var grouped_basicvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      selected: {},
      list: [{
        value: "sul",
        label: "Sul",
        children: [{
          value: "santa-catarina",
          label: "Santa Catarina"
        }, {
          value: "rio-grande-do-sul",
          label: "Rio Grande do Sul"
        }, {
          value: "parana",
          label: "Paraná"
        }]
      }, {
        value: "sudeste",
        label: "Sudeste",
        children: [{
          value: "minas-gerais",
          label: "Minas Gerais"
        }, {
          value: "sao-paulo",
          label: "São Paulo"
        }, {
          value: "espirito-santo",
          label: "Espírito Santo"
        }, {
          value: "rio-de-janeiro",
          label: "Rio de Janeiro"
        }]
      }, {
        value: "norte",
        label: "Norte",
        children: [{
          value: "acre",
          label: "Acre"
        }, {
          value: "amapa",
          label: "Amapá"
        }, {
          value: "roraima",
          label: "Roraima"
        }, {
          value: "tocantins",
          label: "Tocantins"
        }, {
          value: "para",
          label: "Pará"
        }, {
          value: "rondonia",
          label: "Rondônia"
        }, {
          value: "amazonas",
          label: "Amazonas"
        }]
      }, {
        value: "centro-oeste",
        label: "Centro Oeste",
        children: [{
          value: "mato-grosso",
          label: "Mato Grosso"
        }, {
          value: "mato-grosso-do-sul",
          label: "Mato Grosso do Sul"
        }, {
          value: "goias",
          label: "Goiás"
        }, {
          value: "distrito-federal",
          label: "Distrito Federal"
        }]
      }, {
        value: "nordeste",
        label: "Nordeste",
        children: [{
          value: "bahia",
          label: "Bahia"
        }, {
          value: "sergipe",
          label: "Sergipe"
        }, {
          value: "alagoas",
          label: "Alagoas"
        }, {
          value: "paraiba",
          label: "Paraíba"
        }, {
          value: "pernambuco",
          label: "Pernambuco"
        }, {
          value: "rio-grande-do-norte",
          label: "Rio Grande do Norte"
        }, {
          value: "ceara",
          label: "Ceará"
        }, {
          value: "piaui",
          label: "Piauí"
        }, {
          value: "maranhao",
          label: "Maranhão"
        }, {
          value: "mato-grosso",
          label: "Mato Grosso"
        }, {
          value: "mato-grosso-do-sul",
          label: "Mato Grosso do Sul"
        }, {
          value: "goias",
          label: "Goiás"
        }, {
          value: "distrito-federal",
          label: "Distrito Federal"
        }]
      }]
    };
  }
});
// CONCATENATED MODULE: ./example/components/grouped-basic.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_grouped_basicvue_type_script_lang_js_ = (grouped_basicvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./example/components/grouped-basic.vue





/* normalize component */

var grouped_basic_component = normalizeComponent(
  components_grouped_basicvue_type_script_lang_js_,
  grouped_basicvue_type_template_id_8f47e5d4_render,
  grouped_basicvue_type_template_id_8f47e5d4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var grouped_basic = (grouped_basic_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"aa149d74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/grouped-with-selecteds.vue?vue&type=template&id=8d600d5c&
var grouped_with_selectedsvue_type_template_id_8d600d5c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ex-lib"},[_c('vue-select-sides',{attrs:{"type":"grouped","list":_vm.list},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}}),_c('div',{staticClass:"ex-result"},[_c('h4',[_vm._v("Result")]),_c('pre',[_vm._v(_vm._s(_vm.selected))])])],1)}
var grouped_with_selectedsvue_type_template_id_8d600d5c_staticRenderFns = []


// CONCATENATED MODULE: ./example/components/grouped-with-selecteds.vue?vue&type=template&id=8d600d5c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/grouped-with-selecteds.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var grouped_with_selectedsvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      selected: {
        sudeste: ["minas-gerais"],
        norte: ["acre", "roraima"]
      },
      list: [{
        value: "sul",
        label: "Sul",
        children: [{
          value: "santa-catarina",
          label: "Santa Catarina"
        }, {
          value: "rio-grande-do-sul",
          label: "Rio Grande do Sul"
        }, {
          value: "parana",
          label: "Paraná"
        }]
      }, {
        value: "sudeste",
        label: "Sudeste",
        children: [{
          value: "minas-gerais",
          label: "Minas Gerais"
        }, {
          value: "sao-paulo",
          label: "São Paulo"
        }, {
          value: "espirito-santo",
          label: "Espírito Santo"
        }, {
          value: "rio-de-janeiro",
          label: "Rio de Janeiro"
        }]
      }, {
        value: "norte",
        label: "Norte",
        children: [{
          value: "acre",
          label: "Acre"
        }, {
          value: "amapa",
          label: "Amapá"
        }, {
          value: "roraima",
          label: "Roraima"
        }, {
          value: "tocantins",
          label: "Tocantins"
        }, {
          value: "para",
          label: "Pará"
        }, {
          value: "rondonia",
          label: "Rondônia"
        }, {
          value: "amazonas",
          label: "Amazonas"
        }]
      }, {
        value: "centro-oeste",
        label: "Centro Oeste",
        children: [{
          value: "mato-grosso",
          label: "Mato Grosso"
        }, {
          value: "mato-grosso-do-sul",
          label: "Mato Grosso do Sul"
        }, {
          value: "goias",
          label: "Goiás"
        }, {
          value: "distrito-federal",
          label: "Distrito Federal"
        }]
      }, {
        value: "nordeste",
        label: "Nordeste",
        children: [{
          value: "bahia",
          label: "Bahia"
        }, {
          value: "sergipe",
          label: "Sergipe"
        }, {
          value: "alagoas",
          label: "Alagoas"
        }, {
          value: "paraiba",
          label: "Paraíba"
        }, {
          value: "pernambuco",
          label: "Pernambuco"
        }, {
          value: "rio-grande-do-norte",
          label: "Rio Grande do Norte"
        }, {
          value: "ceara",
          label: "Ceará"
        }, {
          value: "piaui",
          label: "Piauí"
        }, {
          value: "maranhao",
          label: "Maranhão"
        }, {
          value: "mato-grosso",
          label: "Mato Grosso"
        }, {
          value: "mato-grosso-do-sul",
          label: "Mato Grosso do Sul"
        }, {
          value: "goias",
          label: "Goiás"
        }, {
          value: "distrito-federal",
          label: "Distrito Federal"
        }]
      }]
    };
  }
});
// CONCATENATED MODULE: ./example/components/grouped-with-selecteds.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_grouped_with_selectedsvue_type_script_lang_js_ = (grouped_with_selectedsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./example/components/grouped-with-selecteds.vue





/* normalize component */

var grouped_with_selecteds_component = normalizeComponent(
  components_grouped_with_selectedsvue_type_script_lang_js_,
  grouped_with_selectedsvue_type_template_id_8d600d5c_render,
  grouped_with_selectedsvue_type_template_id_8d600d5c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var grouped_with_selecteds = (grouped_with_selecteds_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"aa149d74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/grouped-only-list.vue?vue&type=template&id=76ea82b6&
var grouped_only_listvue_type_template_id_76ea82b6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ex-lib"},[_c('vue-select-sides',{attrs:{"type":"grouped","list":_vm.list,"search":_vm.search,"total":_vm.total,"toggle-all":_vm.toggleAll},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}}),_c('div',{staticClass:"ex-result"},[_c('h4',[_vm._v("Result")]),_c('pre',[_vm._v(_vm._s(_vm.selected))])])],1)}
var grouped_only_listvue_type_template_id_76ea82b6_staticRenderFns = []


// CONCATENATED MODULE: ./example/components/grouped-only-list.vue?vue&type=template&id=76ea82b6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/grouped-only-list.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var grouped_only_listvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      search: false,
      toggleAll: false,
      total: false,
      selected: {},
      list: [{
        value: "sul",
        label: "Sul",
        children: [{
          value: "santa-catarina",
          label: "Santa Catarina"
        }, {
          value: "rio-grande-do-sul",
          label: "Rio Grande do Sul"
        }, {
          value: "parana",
          label: "Paraná"
        }]
      }, {
        value: "sudeste",
        label: "Sudeste",
        children: [{
          value: "minas-gerais",
          label: "Minas Gerais"
        }, {
          value: "sao-paulo",
          label: "São Paulo"
        }, {
          value: "espirito-santo",
          label: "Espírito Santo"
        }, {
          value: "rio-de-janeiro",
          label: "Rio de Janeiro"
        }]
      }, {
        value: "norte",
        label: "Norte",
        children: [{
          value: "acre",
          label: "Acre"
        }, {
          value: "amapa",
          label: "Amapá"
        }, {
          value: "roraima",
          label: "Roraima"
        }, {
          value: "tocantins",
          label: "Tocantins"
        }, {
          value: "para",
          label: "Pará"
        }, {
          value: "rondonia",
          label: "Rondônia"
        }, {
          value: "amazonas",
          label: "Amazonas"
        }]
      }, {
        value: "centro-oeste",
        label: "Centro Oeste",
        children: [{
          value: "mato-grosso",
          label: "Mato Grosso"
        }, {
          value: "mato-grosso-do-sul",
          label: "Mato Grosso do Sul"
        }, {
          value: "goias",
          label: "Goiás"
        }, {
          value: "distrito-federal",
          label: "Distrito Federal"
        }]
      }, {
        value: "nordeste",
        label: "Nordeste",
        children: [{
          value: "bahia",
          label: "Bahia"
        }, {
          value: "sergipe",
          label: "Sergipe"
        }, {
          value: "alagoas",
          label: "Alagoas"
        }, {
          value: "paraiba",
          label: "Paraíba"
        }, {
          value: "pernambuco",
          label: "Pernambuco"
        }, {
          value: "rio-grande-do-norte",
          label: "Rio Grande do Norte"
        }, {
          value: "ceara",
          label: "Ceará"
        }, {
          value: "piaui",
          label: "Piauí"
        }, {
          value: "maranhao",
          label: "Maranhão"
        }, {
          value: "mato-grosso",
          label: "Mato Grosso"
        }, {
          value: "mato-grosso-do-sul",
          label: "Mato Grosso do Sul"
        }, {
          value: "goias",
          label: "Goiás"
        }, {
          value: "distrito-federal",
          label: "Distrito Federal"
        }]
      }]
    };
  }
});
// CONCATENATED MODULE: ./example/components/grouped-only-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_grouped_only_listvue_type_script_lang_js_ = (grouped_only_listvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./example/components/grouped-only-list.vue





/* normalize component */

var grouped_only_list_component = normalizeComponent(
  components_grouped_only_listvue_type_script_lang_js_,
  grouped_only_listvue_type_template_id_76ea82b6_render,
  grouped_only_listvue_type_template_id_76ea82b6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var grouped_only_list = (grouped_only_list_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"aa149d74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/grouped-sort-list.vue?vue&type=template&id=343c3a30&scoped=true&
var grouped_sort_listvue_type_template_id_343c3a30_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ex-lib"},[_c('vue-select-sides',{attrs:{"type":"grouped","order-by":_vm.order,"list":_vm.list},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}}),_c('div',{staticClass:"ex-result"},[_c('h4',[_vm._v("Result")]),_c('div',{staticClass:"ex-label-radio"},[_c('label',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.order),expression:"order"}],attrs:{"type":"radio","id":"asc","value":"asc"},domProps:{"checked":_vm._q(_vm.order,"asc")},on:{"change":function($event){_vm.order="asc"}}}),_vm._v(" ASC ")]),_c('label',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.order),expression:"order"}],attrs:{"type":"radio","id":"desc","value":"desc"},domProps:{"checked":_vm._q(_vm.order,"desc")},on:{"change":function($event){_vm.order="desc"}}}),_vm._v(" DESC ")])]),_c('pre',[_c('b',[_vm._v("Order")]),_vm._v(": "+_vm._s(_vm.order)+"."),_c('br'),_c('br'),_vm._v(_vm._s(_vm.selected))])])],1)}
var grouped_sort_listvue_type_template_id_343c3a30_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./example/components/grouped-sort-list.vue?vue&type=template&id=343c3a30&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/grouped-sort-list.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var grouped_sort_listvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      order: "asc",
      selected: {
        sudeste: ["minas-gerais"],
        norte: ["acre", "roraima"]
      },
      list: [{
        value: "sul",
        label: "Sul",
        children: [{
          value: "santa-catarina",
          label: "Santa Catarina"
        }, {
          value: "rio-grande-do-sul",
          label: "Rio Grande do Sul"
        }, {
          value: "parana",
          label: "Paraná"
        }]
      }, {
        value: "sudeste",
        label: "Sudeste",
        children: [{
          value: "minas-gerais",
          label: "Minas Gerais"
        }, {
          value: "sao-paulo",
          label: "São Paulo"
        }, {
          value: "espirito-santo",
          label: "Espírito Santo"
        }, {
          value: "rio-de-janeiro",
          label: "Rio de Janeiro"
        }]
      }, {
        value: "norte",
        label: "Norte",
        children: [{
          value: "acre",
          label: "Acre"
        }, {
          value: "amapa",
          label: "Amapá"
        }, {
          value: "roraima",
          label: "Roraima"
        }, {
          value: "tocantins",
          label: "Tocantins"
        }, {
          value: "para",
          label: "Pará"
        }, {
          value: "rondonia",
          label: "Rondônia"
        }, {
          value: "amazonas",
          label: "Amazonas"
        }]
      }, {
        value: "centro-oeste",
        label: "Centro Oeste",
        children: [{
          value: "mato-grosso",
          label: "Mato Grosso"
        }, {
          value: "mato-grosso-do-sul",
          label: "Mato Grosso do Sul"
        }, {
          value: "goias",
          label: "Goiás"
        }, {
          value: "distrito-federal",
          label: "Distrito Federal"
        }]
      }, {
        value: "nordeste",
        label: "Nordeste",
        children: [{
          value: "bahia",
          label: "Bahia"
        }, {
          value: "sergipe",
          label: "Sergipe"
        }, {
          value: "alagoas",
          label: "Alagoas"
        }, {
          value: "paraiba",
          label: "Paraíba"
        }, {
          value: "pernambuco",
          label: "Pernambuco"
        }, {
          value: "rio-grande-do-norte",
          label: "Rio Grande do Norte"
        }, {
          value: "ceara",
          label: "Ceará"
        }, {
          value: "piaui",
          label: "Piauí"
        }, {
          value: "maranhao",
          label: "Maranhão"
        }, {
          value: "mato-grosso",
          label: "Mato Grosso"
        }, {
          value: "mato-grosso-do-sul",
          label: "Mato Grosso do Sul"
        }, {
          value: "goias",
          label: "Goiás"
        }, {
          value: "distrito-federal",
          label: "Distrito Federal"
        }]
      }]
    };
  }
});
// CONCATENATED MODULE: ./example/components/grouped-sort-list.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_grouped_sort_listvue_type_script_lang_js_ = (grouped_sort_listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./example/components/grouped-sort-list.vue?vue&type=style&index=0&id=343c3a30&lang=scss&scoped=true&
var grouped_sort_listvue_type_style_index_0_id_343c3a30_lang_scss_scoped_true_ = __webpack_require__("3640");

// CONCATENATED MODULE: ./example/components/grouped-sort-list.vue






/* normalize component */

var grouped_sort_list_component = normalizeComponent(
  components_grouped_sort_listvue_type_script_lang_js_,
  grouped_sort_listvue_type_template_id_343c3a30_scoped_true_render,
  grouped_sort_listvue_type_template_id_343c3a30_scoped_true_staticRenderFns,
  false,
  null,
  "343c3a30",
  null
  
)

/* harmony default export */ var grouped_sort_list = (grouped_sort_list_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"aa149d74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/grouped-sort-selected-first.vue?vue&type=template&id=39bf29bb&
var grouped_sort_selected_firstvue_type_template_id_39bf29bb_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ex-lib"},[_c('vue-select-sides',{attrs:{"type":"grouped","order-by":_vm.order,"sort-selected-up":_vm.sortSelectedUp,"list":_vm.list},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}}),_c('div',{staticClass:"ex-result"},[_c('h4',[_vm._v("Result")]),_c('pre',[_vm._v(_vm._s(_vm.selected))])])],1)}
var grouped_sort_selected_firstvue_type_template_id_39bf29bb_staticRenderFns = []


// CONCATENATED MODULE: ./example/components/grouped-sort-selected-first.vue?vue&type=template&id=39bf29bb&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/grouped-sort-selected-first.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var grouped_sort_selected_firstvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      sortSelectedUp: true,
      order: "asc",
      selected: {
        sudeste: ["minas-gerais"],
        norte: ["acre", "roraima"]
      },
      list: [{
        value: "sul",
        label: "Sul",
        children: [{
          value: "santa-catarina",
          label: "Santa Catarina"
        }, {
          value: "rio-grande-do-sul",
          label: "Rio Grande do Sul"
        }, {
          value: "parana",
          label: "Paraná"
        }]
      }, {
        value: "sudeste",
        label: "Sudeste",
        children: [{
          value: "minas-gerais",
          label: "Minas Gerais"
        }, {
          value: "sao-paulo",
          label: "São Paulo"
        }, {
          value: "espirito-santo",
          label: "Espírito Santo"
        }, {
          value: "rio-de-janeiro",
          label: "Rio de Janeiro"
        }]
      }, {
        value: "norte",
        label: "Norte",
        children: [{
          value: "acre",
          label: "Acre"
        }, {
          value: "amapa",
          label: "Amapá"
        }, {
          value: "roraima",
          label: "Roraima"
        }, {
          value: "tocantins",
          label: "Tocantins"
        }, {
          value: "para",
          label: "Pará"
        }, {
          value: "rondonia",
          label: "Rondônia"
        }, {
          value: "amazonas",
          label: "Amazonas"
        }]
      }, {
        value: "centro-oeste",
        label: "Centro Oeste",
        children: [{
          value: "mato-grosso",
          label: "Mato Grosso"
        }, {
          value: "mato-grosso-do-sul",
          label: "Mato Grosso do Sul"
        }, {
          value: "goias",
          label: "Goiás"
        }, {
          value: "distrito-federal",
          label: "Distrito Federal"
        }]
      }, {
        value: "nordeste",
        label: "Nordeste",
        children: [{
          value: "bahia",
          label: "Bahia"
        }, {
          value: "sergipe",
          label: "Sergipe"
        }, {
          value: "alagoas",
          label: "Alagoas"
        }, {
          value: "paraiba",
          label: "Paraíba"
        }, {
          value: "pernambuco",
          label: "Pernambuco"
        }, {
          value: "rio-grande-do-norte",
          label: "Rio Grande do Norte"
        }, {
          value: "ceara",
          label: "Ceará"
        }, {
          value: "piaui",
          label: "Piauí"
        }, {
          value: "maranhao",
          label: "Maranhão"
        }, {
          value: "mato-grosso",
          label: "Mato Grosso"
        }, {
          value: "mato-grosso-do-sul",
          label: "Mato Grosso do Sul"
        }, {
          value: "goias",
          label: "Goiás"
        }, {
          value: "distrito-federal",
          label: "Distrito Federal"
        }]
      }]
    };
  }
});
// CONCATENATED MODULE: ./example/components/grouped-sort-selected-first.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_grouped_sort_selected_firstvue_type_script_lang_js_ = (grouped_sort_selected_firstvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./example/components/grouped-sort-selected-first.vue





/* normalize component */

var grouped_sort_selected_first_component = normalizeComponent(
  components_grouped_sort_selected_firstvue_type_script_lang_js_,
  grouped_sort_selected_firstvue_type_template_id_39bf29bb_render,
  grouped_sort_selected_firstvue_type_template_id_39bf29bb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var grouped_sort_selected_first = (grouped_sort_selected_first_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"aa149d74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/grouped-placeholder-search.vue?vue&type=template&id=1b4d507e&
var grouped_placeholder_searchvue_type_template_id_1b4d507e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ex-lib"},[_c('vue-select-sides',{attrs:{"type":"grouped","list":_vm.list,"placeholder-search-left":"Yay! Search items...","placeholder-search-right":"Yay! Search children items..."},model:{value:(_vm.selected),callback:function ($$v) {_vm.selected=$$v},expression:"selected"}}),_c('div',{staticClass:"ex-result"},[_c('h4',[_vm._v("Result")]),_c('pre',[_vm._v(_vm._s(_vm.selected))])])],1)}
var grouped_placeholder_searchvue_type_template_id_1b4d507e_staticRenderFns = []


// CONCATENATED MODULE: ./example/components/grouped-placeholder-search.vue?vue&type=template&id=1b4d507e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/components/grouped-placeholder-search.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var grouped_placeholder_searchvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      selected: {
        sul: [],
        sudeste: []
      },
      list: [{
        value: "sul",
        label: "Sul",
        children: [{
          value: "santa-catarina",
          label: "Santa Catarina"
        }, {
          value: "rio-grande-do-sul",
          label: "Rio Grande do Sul"
        }, {
          value: "parana",
          label: "Paraná"
        }]
      }, {
        value: "sudeste",
        label: "Sudeste",
        children: [{
          value: "minas-gerais",
          label: "Minas Gerais"
        }, {
          value: "sao-paulo",
          label: "São Paulo"
        }, {
          value: "espirito-santo",
          label: "Espírito Santo"
        }, {
          value: "rio-de-janeiro",
          label: "Rio de Janeiro"
        }]
      }, {
        value: "norte",
        label: "Norte",
        children: [{
          value: "acre",
          label: "Acre"
        }, {
          value: "amapa",
          label: "Amapá"
        }, {
          value: "roraima",
          label: "Roraima"
        }, {
          value: "tocantins",
          label: "Tocantins"
        }, {
          value: "para",
          label: "Pará"
        }, {
          value: "rondonia",
          label: "Rondônia"
        }, {
          value: "amazonas",
          label: "Amazonas"
        }]
      }, {
        value: "centro-oeste",
        label: "Centro Oeste",
        children: [{
          value: "mato-grosso",
          label: "Mato Grosso"
        }, {
          value: "mato-grosso-do-sul",
          label: "Mato Grosso do Sul"
        }, {
          value: "goias",
          label: "Goiás"
        }, {
          value: "distrito-federal",
          label: "Distrito Federal"
        }]
      }, {
        value: "nordeste",
        label: "Nordeste",
        children: [{
          value: "bahia",
          label: "Bahia"
        }, {
          value: "sergipe",
          label: "Sergipe"
        }, {
          value: "alagoas",
          label: "Alagoas"
        }, {
          value: "paraiba",
          label: "Paraíba"
        }, {
          value: "pernambuco",
          label: "Pernambuco"
        }, {
          value: "rio-grande-do-norte",
          label: "Rio Grande do Norte"
        }, {
          value: "ceara",
          label: "Ceará"
        }, {
          value: "piaui",
          label: "Piauí"
        }, {
          value: "maranhao",
          label: "Maranhão"
        }, {
          value: "mato-grosso",
          label: "Mato Grosso"
        }, {
          value: "mato-grosso-do-sul",
          label: "Mato Grosso do Sul"
        }, {
          value: "goias",
          label: "Goiás"
        }, {
          value: "distrito-federal",
          label: "Distrito Federal"
        }]
      }]
    };
  }
});
// CONCATENATED MODULE: ./example/components/grouped-placeholder-search.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_grouped_placeholder_searchvue_type_script_lang_js_ = (grouped_placeholder_searchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./example/components/grouped-placeholder-search.vue





/* normalize component */

var grouped_placeholder_search_component = normalizeComponent(
  components_grouped_placeholder_searchvue_type_script_lang_js_,
  grouped_placeholder_searchvue_type_template_id_1b4d507e_render,
  grouped_placeholder_searchvue_type_template_id_1b4d507e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var grouped_placeholder_search = (grouped_placeholder_search_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./example/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//












var repo = __webpack_require__("9224").repository.url;

var repoExamples = repo + "/blob/master/example/components/";
/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  components: {
    exampleMirror01: mirror_basic,
    exampleMirror02: mirror_with_selecteds,
    exampleMirror03: mirror_only_list,
    exampleMirror04: mirror_sort_list,
    exampleMirror06: mirror_placeholder_search,
    exampleGrouped01: grouped_basic,
    exampleGrouped02: grouped_with_selecteds,
    exampleGrouped03: grouped_only_list,
    exampleGrouped04: grouped_sort_list,
    exampleGrouped05: grouped_sort_selected_first,
    exampleGrouped06: grouped_placeholder_search
  },
  methods: {
    track: function track() {
      this.$gtag.pageview({
        page_path: "/"
      });
    },
    scrolling: function scrolling() {
      if (window.scrollY >= 275) {
        this.affix = "affixed";
      } else {
        this.affix = "";
      }
    }
  },
  data: function data() {
    return {
      affix: "",
      repoExamples: repoExamples,
      repo: repo
    };
  },
  mounted: function mounted() {
    window.addEventListener("scroll", this.scrolling);
  }
});
// CONCATENATED MODULE: ./example/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var example_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./example/App.vue?vue&type=style&index=0&lang=scss&
var Appvue_type_style_index_0_lang_scss_ = __webpack_require__("d678");

// CONCATENATED MODULE: ./example/App.vue






/* normalize component */

var App_component = normalizeComponent(
  example_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (App_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (App);



/***/ })

/******/ })["default"];
});