/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "5a74");
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bd3":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(true);
// imports


// module
exports.push([module.i, ".pages-container[data-v-d44d8a3e]{padding:0 20px}.pages .item[data-v-d44d8a3e]{margin-bottom:20px;text-align:center;color:#999}img.responsive[data-v-d44d8a3e]{width:100%;height:auto}", "", {"version":3,"sources":["E:/Projects/sproutloud/techne/src/components/widgets/E:/Projects/sproutloud/techne/src/components/widgets/E:/Projects/sproutloud/techne/src/components/widgets/src/components/widgets/PageWidget.vue"],"names":[],"mappings":"AAyBA,kCACA,cACA,CAEA,8BACA,mBACA,kBACA,UACA,CACA,gCACA,WACA,WACA,CAAA","file":"PageWidget.vue?vue&type=style&index=0&id=d44d8a3e&scoped=true&lang=css&","sourcesContent":["<template>\r\n    <div class=\"pages-container\">\r\n        PAGES\r\n        <div class=\"pages\">\r\n            <div class=\"item\">\r\n                <img class=\"responsive\" src=\"../../assets/placeholder.png\"/>\r\n                <small>Frontpage</small>\r\n            </div>\r\n            <div class=\"item\">\r\n                <img class=\"responsive\" src=\"../../assets/placeholder.png\"/>\r\n                <small>Backside</small>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>\r\n<script>\r\nexport default {\r\n    name: \"PageWidget\",\r\n    props: {},\r\n    methods:{\r\n\r\n    }\r\n}\r\n</script>\r\n<style scoped> \r\n    .pages-container{\r\n        padding: 0 20px;\r\n    }  \r\n    .pages {}\r\n    .pages .item{\r\n        margin-bottom: 20px;\r\n        text-align:center;\r\n        color:#999;\r\n    } \r\n    img.responsive {\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n\r\n</style>\r\n\r\n\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "0e83":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(true);
// imports


// module
exports.push([module.i, ".tree-components[data-v-2ab9ee84]::-webkit-scrollbar{width:4px}.tree-components[data-v-2ab9ee84]::-webkit-scrollbar-track{background:#eee}.tree-components[data-v-2ab9ee84]::-webkit-scrollbar-thumb{background:#ccc}.tree-components[data-v-2ab9ee84]{max-height:400px;overflow-y:scroll;padding-right:30px}.actions[data-v-2ab9ee84]{margin:10px auto}", "", {"version":3,"sources":["E:/Projects/sproutloud/techne/src/components/widgets/E:/Projects/sproutloud/techne/src/components/widgets/E:/Projects/sproutloud/techne/src/components/widgets/src/components/widgets/TreeWidget.vue"],"names":[],"mappings":"AAwCA,qDACA,SACA,CACA,2DACA,eACA,CACA,2DACA,eACA,CACA,kCACA,iBACA,kBACA,kBACA,CAEA,0BACA,gBACA,CAAA","file":"TreeWidget.vue?vue&type=style&index=0&id=2ab9ee84&scoped=true&lang=css&","sourcesContent":["<template>\r\n    <div class=\"tree-container\">\r\n        <div class=\"tree-components\">\r\n            <text-component></text-component>\r\n            <text-component></text-component>\r\n            <text-component></text-component>\r\n            <text-component></text-component>\r\n            <text-component></text-component>\r\n            <text-component></text-component>\r\n            <text-component></text-component>\r\n            <text-component></text-component>\r\n            <text-component></text-component>\r\n        </div>\r\n        <div class=\"actions\">\r\n            <ui-button label=\"Preview Creative\"/>\r\n            <ui-button label=\"Reset Customization\"/>\r\n        </div>\r\n    </div>\r\n</template>\r\n<script>\r\nimport UiButton from '../utils/UiButton'\r\nimport TextComponent from '../elements/TextComponent'\r\nexport default {\r\n    name: \"TreeWidget\",\r\n    props: {\r\n        template_id: {type: String, required: true}\r\n    },\r\n    components:{\r\n        'ui-button'      : UiButton,\r\n        'text-component' : TextComponent\r\n    },\r\n    methods:{\r\n\r\n    }\r\n}\r\n</script>\r\n<style scoped>\r\n    .tree-container{\r\n    }\r\n    \r\n    .tree-components::-webkit-scrollbar {\r\n        width: 4px;\r\n    }\r\n    .tree-components::-webkit-scrollbar-track {\r\n        background:#EEE;\r\n    }\r\n    .tree-components::-webkit-scrollbar-thumb {\r\n        background:#CCC\r\n    }\r\n    .tree-components{\r\n        max-height:400px;\r\n        overflow-y: scroll;\r\n        padding-right:30px;\r\n    }\r\n\r\n    .actions{\r\n        margin: 10px auto;\r\n    }\r\n</style>\r\n\r\n\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "2350":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "2be1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextComponent_vue_vue_type_style_index_0_id_44d300b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8255");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextComponent_vue_vue_type_style_index_0_id_44d300b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextComponent_vue_vue_type_style_index_0_id_44d300b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextComponent_vue_vue_type_style_index_0_id_44d300b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextComponent_vue_vue_type_style_index_0_id_44d300b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextComponent_vue_vue_type_style_index_0_id_44d300b8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "35d6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesToShadowDOM; });


function addStylesToShadowDOM (parentId, list, shadowRoot) {
  var styles = listToStyles(parentId, list)
  addStyles(styles, shadowRoot)
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

function addStyles (styles /* Array<StyleObject> */, shadowRoot) {
  const injectedStyles =
    shadowRoot._injectedStyles ||
    (shadowRoot._injectedStyles = {})
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var style = injectedStyles[item.id]
    if (!style) {
      for (var j = 0; j < item.parts.length; j++) {
        addStyle(item.parts[j], shadowRoot)
      }
      injectedStyles[item.id] = true
    }
  }
}

function createStyleElement (shadowRoot) {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  shadowRoot.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */, shadowRoot) {
  var styleElement = createStyleElement(shadowRoot)
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "40f8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9bc7");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("2c293c14", content, shadowRoot)
};

/***/ }),

/***/ "5a74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (Object({"NODE_ENV":"production","BASE_URL":"http://localhost:8081/"}).NEED_CURRENTSCRIPT_POLYFILL) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "Vue"
var external_Vue_ = __webpack_require__("8bbf");
var external_Vue_default = /*#__PURE__*/__webpack_require__.n(external_Vue_);

// CONCATENATED MODULE: ./node_modules/@vue/web-component-wrapper/dist/vue-wc-wrapper.js
const camelizeRE = /-(\w)/g;
const camelize = str => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
};

const hyphenateRE = /\B([A-Z])/g;
const hyphenate = str => {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
};

function getInitialProps (propsList) {
  const res = {};
  propsList.forEach(key => {
    res[key] = undefined;
  });
  return res
}

function injectHook (options, key, hook) {
  options[key] = [].concat(options[key] || []);
  options[key].unshift(hook);
}

function callHooks (vm, hook) {
  if (vm) {
    const hooks = vm.$options[hook] || [];
    hooks.forEach(hook => {
      hook.call(vm);
    });
  }
}

function createCustomEvent (name, args) {
  return new CustomEvent(name, {
    bubbles: false,
    cancelable: false,
    detail: args
  })
}

const isBoolean = val => /function Boolean/.test(String(val));
const isNumber = val => /function Number/.test(String(val));

function convertAttributeValue (value, name, { type } = {}) {
  if (isBoolean(type)) {
    if (value === 'true' || value === 'false') {
      return value === 'true'
    }
    if (value === '' || value === name) {
      return true
    }
    return value != null
  } else if (isNumber(type)) {
    const parsed = parseFloat(value, 10);
    return isNaN(parsed) ? value : parsed
  } else {
    return value
  }
}

function toVNodes (h, children) {
  const res = [];
  for (let i = 0, l = children.length; i < l; i++) {
    res.push(toVNode(h, children[i]));
  }
  return res
}

function toVNode (h, node) {
  if (node.nodeType === 3) {
    return node.data.trim() ? node.data : null
  } else if (node.nodeType === 1) {
    const data = {
      attrs: getAttributes(node),
      domProps: {
        innerHTML: node.innerHTML
      }
    };
    if (data.attrs.slot) {
      data.slot = data.attrs.slot;
      delete data.attrs.slot;
    }
    return h(node.tagName, data)
  } else {
    return null
  }
}

function getAttributes (node) {
  const res = {};
  for (let i = 0, l = node.attributes.length; i < l; i++) {
    const attr = node.attributes[i];
    res[attr.nodeName] = attr.nodeValue;
  }
  return res
}

function wrap (Vue, Component) {
  const isAsync = typeof Component === 'function' && !Component.cid;
  let isInitialized = false;
  let hyphenatedPropsList;
  let camelizedPropsList;
  let camelizedPropsMap;

  function initialize (Component) {
    if (isInitialized) return

    const options = typeof Component === 'function'
      ? Component.options
      : Component;

    // extract props info
    const propsList = Array.isArray(options.props)
      ? options.props
      : Object.keys(options.props || {});
    hyphenatedPropsList = propsList.map(hyphenate);
    camelizedPropsList = propsList.map(camelize);
    const originalPropsAsObject = Array.isArray(options.props) ? {} : options.props || {};
    camelizedPropsMap = camelizedPropsList.reduce((map, key, i) => {
      map[key] = originalPropsAsObject[propsList[i]];
      return map
    }, {});

    // proxy $emit to native DOM events
    injectHook(options, 'beforeCreate', function () {
      const emit = this.$emit;
      this.$emit = (name, ...args) => {
        this.$root.$options.customElement.dispatchEvent(createCustomEvent(name, args));
        return emit.call(this, name, ...args)
      };
    });

    injectHook(options, 'created', function () {
      // sync default props values to wrapper on created
      camelizedPropsList.forEach(key => {
        this.$root.props[key] = this[key];
      });
    });

    // proxy props as Element properties
    camelizedPropsList.forEach(key => {
      Object.defineProperty(CustomElement.prototype, key, {
        get () {
          return this._wrapper.props[key]
        },
        set (newVal) {
          this._wrapper.props[key] = newVal;
        },
        enumerable: false,
        configurable: true
      });
    });

    isInitialized = true;
  }

  function syncAttribute (el, key) {
    const camelized = camelize(key);
    const value = el.hasAttribute(key) ? el.getAttribute(key) : undefined;
    el._wrapper.props[camelized] = convertAttributeValue(
      value,
      key,
      camelizedPropsMap[camelized]
    );
  }

  class CustomElement extends HTMLElement {
    constructor () {
      super();
      this.attachShadow({ mode: 'open' });

      const wrapper = this._wrapper = new Vue({
        name: 'shadow-root',
        customElement: this,
        shadowRoot: this.shadowRoot,
        data () {
          return {
            props: {},
            slotChildren: []
          }
        },
        render (h) {
          return h(Component, {
            ref: 'inner',
            props: this.props
          }, this.slotChildren)
        }
      });

      // Use MutationObserver to react to future attribute & slot content change
      const observer = new MutationObserver(mutations => {
        let hasChildrenChange = false;
        for (let i = 0; i < mutations.length; i++) {
          const m = mutations[i];
          if (isInitialized && m.type === 'attributes' && m.target === this) {
            syncAttribute(this, m.attributeName);
          } else {
            hasChildrenChange = true;
          }
        }
        if (hasChildrenChange) {
          wrapper.slotChildren = Object.freeze(toVNodes(
            wrapper.$createElement,
            this.childNodes
          ));
        }
      });
      observer.observe(this, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
    }

    get vueComponent () {
      return this._wrapper.$refs.inner
    }

    connectedCallback () {
      const wrapper = this._wrapper;
      if (!wrapper._isMounted) {
        // initialize attributes
        const syncInitialAttributes = () => {
          wrapper.props = getInitialProps(camelizedPropsList);
          hyphenatedPropsList.forEach(key => {
            syncAttribute(this, key);
          });
        };

        if (isInitialized) {
          syncInitialAttributes();
        } else {
          // async & unresolved
          Component().then(resolved => {
            if (resolved.__esModule || resolved[Symbol.toStringTag] === 'Module') {
              resolved = resolved.default;
            }
            initialize(resolved);
            syncInitialAttributes();
          });
        }
        // initialize children
        wrapper.slotChildren = Object.freeze(toVNodes(
          wrapper.$createElement,
          this.childNodes
        ));
        wrapper.$mount();
        this.shadowRoot.appendChild(wrapper.$el);
      } else {
        callHooks(this.vueComponent, 'activated');
      }
    }

    disconnectedCallback () {
      callHooks(this.vueComponent, 'deactivated');
    }
  }

  if (!isAsync) {
    initialize(Component);
  }

  return CustomElement
}

/* harmony default export */ var vue_wc_wrapper = (wrap);

// EXTERNAL MODULE: ./node_modules/css-loader/lib/css-base.js
var css_base = __webpack_require__("2350");

// EXTERNAL MODULE: ./node_modules/vue-style-loader/lib/addStylesShadow.js + 1 modules
var addStylesShadow = __webpack_require__("35d6");

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

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5e16b9f5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Customization.vue?vue&type=template&id=786b6306&shadow
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('CustomizationLayout',{attrs:{"template_id":_vm.template_id,"assignment_id":_vm.assignment_id}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/Customization.vue?vue&type=template&id=786b6306&shadow

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5e16b9f5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/layout/CustomizationLayout.vue?vue&type=template&id=7755daa0&scoped=true&
var CustomizationLayoutvue_type_template_id_7755daa0_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"customization-container"},[_c('div',{staticClass:"customization-header"},[_c('div',{staticClass:"heading"},[_vm._v("\n            Customize your creative\n        ")]),_c('div',{staticClass:"right-buttons"},[_c('ui-button',{attrs:{"label":"Back"},on:{"click":_vm.goTo}}),_c('ui-button',{staticClass:"m-l-5",attrs:{"label":"Continue"},on:{"click":_vm.goTo}})],1)]),_c('div',{staticClass:"customization-content"},[_c('div',{staticClass:"treeview"},[_c('tree-widget',{attrs:{"template_id":"TM0000002"}})],1),_c('div',{staticClass:"pageview"},[_c('page-widget')],1),_c('div',{staticClass:"preview"},[_c('preview-widget')],1)])])}
var CustomizationLayoutvue_type_template_id_7755daa0_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/layout/CustomizationLayout.vue?vue&type=template&id=7755daa0&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5e16b9f5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/utils/UiButton.vue?vue&type=template&id=2c6b6413&scoped=true&
var UiButtonvue_type_template_id_2c6b6413_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"ui-button",on:{"click":_vm.clicked}},[_vm._v("\n    "+_vm._s(_vm.label)+"\n")])}
var UiButtonvue_type_template_id_2c6b6413_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/utils/UiButton.vue?vue&type=template&id=2c6b6413&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/utils/UiButton.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var UiButtonvue_type_script_lang_js_ = ({
  name: "UiButton",
  props: {
    label: {
      type: String,
      required: true,
      default: "Button"
    }
  },
  methods: {
    clicked() {
      this.$emit("click", {
        btn: this.label
      });
    }

  }
});
// CONCATENATED MODULE: ./src/components/utils/UiButton.vue?vue&type=script&lang=js&
 /* harmony default export */ var utils_UiButtonvue_type_script_lang_js_ = (UiButtonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/utils/UiButton.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("ca32")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = normalizeComponent(
  utils_UiButtonvue_type_script_lang_js_,
  UiButtonvue_type_template_id_2c6b6413_scoped_true_render,
  UiButtonvue_type_template_id_2c6b6413_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "2c6b6413",
  null
  ,true
)

/* harmony default export */ var UiButton = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5e16b9f5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/TreeWidget.vue?vue&type=template&id=2ab9ee84&scoped=true&
var TreeWidgetvue_type_template_id_2ab9ee84_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tree-container"},[_c('div',{staticClass:"tree-components"},[_c('text-component'),_c('text-component'),_c('text-component'),_c('text-component'),_c('text-component'),_c('text-component'),_c('text-component'),_c('text-component'),_c('text-component')],1),_c('div',{staticClass:"actions"},[_c('ui-button',{attrs:{"label":"Preview Creative"}}),_c('ui-button',{attrs:{"label":"Reset Customization"}})],1)])}
var TreeWidgetvue_type_template_id_2ab9ee84_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/widgets/TreeWidget.vue?vue&type=template&id=2ab9ee84&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5e16b9f5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/elements/TextComponent.vue?vue&type=template&id=44d300b8&scoped=true&
var TextComponentvue_type_template_id_44d300b8_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-component"},[_c('label',[_vm._v("Text Component")]),_c('text-box')],1)}
var TextComponentvue_type_template_id_44d300b8_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/elements/TextComponent.vue?vue&type=template&id=44d300b8&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5e16b9f5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/utils/TextBox.vue?vue&type=template&id=3fb915ca&scoped=true&
var TextBoxvue_type_template_id_3fb915ca_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var TextBoxvue_type_template_id_3fb915ca_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text-wrapper"},[_c('input',{staticClass:"text-box",attrs:{"type":"text","name":"textelement"}})])}]


// CONCATENATED MODULE: ./src/components/utils/TextBox.vue?vue&type=template&id=3fb915ca&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/utils/TextBox.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var TextBoxvue_type_script_lang_js_ = ({
  name: "TextBox",
  props: {}
});
// CONCATENATED MODULE: ./src/components/utils/TextBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var utils_TextBoxvue_type_script_lang_js_ = (TextBoxvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/utils/TextBox.vue



function TextBox_injectStyles (context) {
  
  var style0 = __webpack_require__("6e4f")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var TextBox_component = normalizeComponent(
  utils_TextBoxvue_type_script_lang_js_,
  TextBoxvue_type_template_id_3fb915ca_scoped_true_render,
  TextBoxvue_type_template_id_3fb915ca_scoped_true_staticRenderFns,
  false,
  TextBox_injectStyles,
  "3fb915ca",
  null
  ,true
)

/* harmony default export */ var TextBox = (TextBox_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/elements/TextComponent.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var TextComponentvue_type_script_lang_js_ = ({
  name: "TextComponent",
  props: {},
  components: {
    'text-box': TextBox
  },

  data() {
    return {};
  },

  created() {}

});
// CONCATENATED MODULE: ./src/components/elements/TextComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var elements_TextComponentvue_type_script_lang_js_ = (TextComponentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/elements/TextComponent.vue



function TextComponent_injectStyles (context) {
  
  var style0 = __webpack_require__("2be1")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var TextComponent_component = normalizeComponent(
  elements_TextComponentvue_type_script_lang_js_,
  TextComponentvue_type_template_id_44d300b8_scoped_true_render,
  TextComponentvue_type_template_id_44d300b8_scoped_true_staticRenderFns,
  false,
  TextComponent_injectStyles,
  "44d300b8",
  null
  ,true
)

/* harmony default export */ var TextComponent = (TextComponent_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/TreeWidget.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var TreeWidgetvue_type_script_lang_js_ = ({
  name: "TreeWidget",
  props: {
    template_id: {
      type: String,
      required: true
    }
  },
  components: {
    'ui-button': UiButton,
    'text-component': TextComponent
  },
  methods: {}
});
// CONCATENATED MODULE: ./src/components/widgets/TreeWidget.vue?vue&type=script&lang=js&
 /* harmony default export */ var widgets_TreeWidgetvue_type_script_lang_js_ = (TreeWidgetvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/widgets/TreeWidget.vue



function TreeWidget_injectStyles (context) {
  
  var style0 = __webpack_require__("d00f")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var TreeWidget_component = normalizeComponent(
  widgets_TreeWidgetvue_type_script_lang_js_,
  TreeWidgetvue_type_template_id_2ab9ee84_scoped_true_render,
  TreeWidgetvue_type_template_id_2ab9ee84_scoped_true_staticRenderFns,
  false,
  TreeWidget_injectStyles,
  "2ab9ee84",
  null
  ,true
)

/* harmony default export */ var TreeWidget = (TreeWidget_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5e16b9f5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/PageWidget.vue?vue&type=template&id=d44d8a3e&scoped=true&
var PageWidgetvue_type_template_id_d44d8a3e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var PageWidgetvue_type_template_id_d44d8a3e_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pages-container"},[_vm._v("\n    PAGES\n    "),_c('div',{staticClass:"pages"},[_c('div',{staticClass:"item"},[_c('img',{staticClass:"responsive",attrs:{"src":__webpack_require__("5b4d")}}),_c('small',[_vm._v("Frontpage")])]),_c('div',{staticClass:"item"},[_c('img',{staticClass:"responsive",attrs:{"src":__webpack_require__("5b4d")}}),_c('small',[_vm._v("Backside")])])])])}]


// CONCATENATED MODULE: ./src/components/widgets/PageWidget.vue?vue&type=template&id=d44d8a3e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/PageWidget.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PageWidgetvue_type_script_lang_js_ = ({
  name: "PageWidget",
  props: {},
  methods: {}
});
// CONCATENATED MODULE: ./src/components/widgets/PageWidget.vue?vue&type=script&lang=js&
 /* harmony default export */ var widgets_PageWidgetvue_type_script_lang_js_ = (PageWidgetvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/widgets/PageWidget.vue



function PageWidget_injectStyles (context) {
  
  var style0 = __webpack_require__("a238")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var PageWidget_component = normalizeComponent(
  widgets_PageWidgetvue_type_script_lang_js_,
  PageWidgetvue_type_template_id_d44d8a3e_scoped_true_render,
  PageWidgetvue_type_template_id_d44d8a3e_scoped_true_staticRenderFns,
  false,
  PageWidget_injectStyles,
  "d44d8a3e",
  null
  ,true
)

/* harmony default export */ var PageWidget = (PageWidget_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5e16b9f5-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/PreviewWidget.vue?vue&type=template&id=c8e10456&scoped=true&
var PreviewWidgetvue_type_template_id_c8e10456_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var PreviewWidgetvue_type_template_id_c8e10456_scoped_true_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"preview-container"},[_vm._v("\n    PREVIEW\n    "),_c('div',{staticClass:"preview-item"},[_c('img',{staticClass:"responsive",attrs:{"src":__webpack_require__("5b4d")}})])])}]


// CONCATENATED MODULE: ./src/components/widgets/PreviewWidget.vue?vue&type=template&id=c8e10456&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/widgets/PreviewWidget.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var PreviewWidgetvue_type_script_lang_js_ = ({
  name: "PreviewWidget",
  props: {},
  methods: {}
});
// CONCATENATED MODULE: ./src/components/widgets/PreviewWidget.vue?vue&type=script&lang=js&
 /* harmony default export */ var widgets_PreviewWidgetvue_type_script_lang_js_ = (PreviewWidgetvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/widgets/PreviewWidget.vue



function PreviewWidget_injectStyles (context) {
  
  var style0 = __webpack_require__("e872")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var PreviewWidget_component = normalizeComponent(
  widgets_PreviewWidgetvue_type_script_lang_js_,
  PreviewWidgetvue_type_template_id_c8e10456_scoped_true_render,
  PreviewWidgetvue_type_template_id_c8e10456_scoped_true_staticRenderFns,
  false,
  PreviewWidget_injectStyles,
  "c8e10456",
  null
  ,true
)

/* harmony default export */ var PreviewWidget = (PreviewWidget_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/layout/CustomizationLayout.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var CustomizationLayoutvue_type_script_lang_js_ = ({
  name: "CustomizationLayout",
  props: {},
  components: {
    'ui-button': UiButton,
    'tree-widget': TreeWidget,
    'page-widget': PageWidget,
    'preview-widget': PreviewWidget
  },
  methods: {
    goTo(data) {
      window.console.log(data);
    }

  }
});
// CONCATENATED MODULE: ./src/components/layout/CustomizationLayout.vue?vue&type=script&lang=js&
 /* harmony default export */ var layout_CustomizationLayoutvue_type_script_lang_js_ = (CustomizationLayoutvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/layout/CustomizationLayout.vue



function CustomizationLayout_injectStyles (context) {
  
  var style0 = __webpack_require__("f5d2")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var CustomizationLayout_component = normalizeComponent(
  layout_CustomizationLayoutvue_type_script_lang_js_,
  CustomizationLayoutvue_type_template_id_7755daa0_scoped_true_render,
  CustomizationLayoutvue_type_template_id_7755daa0_scoped_true_staticRenderFns,
  false,
  CustomizationLayout_injectStyles,
  "7755daa0",
  null
  ,true
)

/* harmony default export */ var CustomizationLayout = (CustomizationLayout_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/Customization.vue?vue&type=script&lang=js&shadow
//
//
//
//

/* harmony default export */ var Customizationvue_type_script_lang_js_shadow = ({
  name: 'Customization',
  props: {
    template_id: {
      type: String,
      default: null
    },
    assignment_id: {
      type: String,
      default: null
    }
  },
  components: {
    CustomizationLayout: CustomizationLayout
  },

  mounted() {
    window.console.log("Canvas Created!");
  }

});
// CONCATENATED MODULE: ./src/Customization.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ var src_Customizationvue_type_script_lang_js_shadow = (Customizationvue_type_script_lang_js_shadow); 
// CONCATENATED MODULE: ./src/Customization.vue?shadow





/* normalize component */

var Customizationshadow_component = normalizeComponent(
  src_Customizationvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ var Customizationshadow = (Customizationshadow_component.exports);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-wc.js




// runtime shared by every component chunk





window.customElements.define('customization-layout', vue_wc_wrapper(external_Vue_default.a, Customizationshadow))

/***/ }),

/***/ "5b4d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/placeholder.6ad6c4d5.png";

/***/ }),

/***/ "5cc0":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"TextComponent.vue?vue&type=style&index=0&id=44d300b8&scoped=true&lang=css&","sourceRoot":""}]);

// exports


/***/ }),

/***/ "6e4f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextBox_vue_vue_type_style_index_0_id_3fb915ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b91a");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextBox_vue_vue_type_style_index_0_id_3fb915ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextBox_vue_vue_type_style_index_0_id_3fb915ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextBox_vue_vue_type_style_index_0_id_3fb915ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextBox_vue_vue_type_style_index_0_id_3fb915ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextBox_vue_vue_type_style_index_0_id_3fb915ca_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7ea7":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0bd3");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("1d8eec92", content, shadowRoot)
};

/***/ }),

/***/ "8255":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5cc0");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("c9618e4a", content, shadowRoot)
};

/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),

/***/ "99c9":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0e83");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("0c2ce63e", content, shadowRoot)
};

/***/ }),

/***/ "9a29":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("df74");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("a933a1d2", content, shadowRoot)
};

/***/ }),

/***/ "9bc7":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(true);
// imports


// module
exports.push([module.i, "img.responsive[data-v-c8e10456]{width:100%;height:auto}", "", {"version":3,"sources":["E:/Projects/sproutloud/techne/src/components/widgets/E:/Projects/sproutloud/techne/src/components/widgets/E:/Projects/sproutloud/techne/src/components/widgets/src/components/widgets/PreviewWidget.vue"],"names":[],"mappings":"AAoBA,gCACA,WACA,WACA,CAAA","file":"PreviewWidget.vue?vue&type=style&index=0&id=c8e10456&scoped=true&lang=css&","sourcesContent":["<template>\r\n    <div class=\"preview-container\">\r\n        PREVIEW\r\n        <div class=\"preview-item\">\r\n            <img class=\"responsive\" src=\"../../assets/placeholder.png\"/>\r\n        </div>\r\n    </div>\r\n</template>\r\n<script>\r\nexport default {\r\n    name: \"PreviewWidget\",\r\n    props: {},\r\n    methods:{\r\n\r\n    }\r\n}\r\n</script>\r\n<style scoped> \r\n    .preview-container{}  \r\n    .preview-item {} \r\n    img.responsive {\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n</style>\r\n\r\n\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "a238":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageWidget_vue_vue_type_style_index_0_id_d44d8a3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7ea7");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageWidget_vue_vue_type_style_index_0_id_d44d8a3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageWidget_vue_vue_type_style_index_0_id_d44d8a3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageWidget_vue_vue_type_style_index_0_id_d44d8a3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageWidget_vue_vue_type_style_index_0_id_d44d8a3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageWidget_vue_vue_type_style_index_0_id_d44d8a3e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a814":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("aefd");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("73e38975", content, shadowRoot)
};

/***/ }),

/***/ "ae4c":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(true);
// imports


// module
exports.push([module.i, ".text-wrapper[data-v-3fb915ca]{width:100%}input[type=text][data-v-3fb915ca]{width:100%;padding:5px 10px;margin:8px 0;-webkit-box-sizing:border-box;box-sizing:border-box}", "", {"version":3,"sources":["E:/Projects/sproutloud/techne/src/components/utils/E:/Projects/sproutloud/techne/src/components/utils/E:/Projects/sproutloud/techne/src/components/utils/src/components/utils/TextBox.vue"],"names":[],"mappings":"AAaA,+BACA,UAEA,CACA,kCACA,WACA,iBACA,aACA,8BAAA,qBACA,CAAA","file":"TextBox.vue?vue&type=style&index=0&id=3fb915ca&scoped=true&lang=css&","sourcesContent":["<template>\r\n    <div class=\"text-wrapper\">\r\n        <input class=\"text-box\" type=\"text\" name=\"textelement\">\r\n    </div>\r\n</template>\r\n<script>\r\nexport default {\r\n    name: \"TextBox\",\r\n    props: {},\r\n\r\n}\r\n</script>\r\n<style scoped>\r\n    .text-wrapper{\r\n        width:100%;\r\n\r\n    }\r\n    input[type=text] {\r\n        width: 100%;\r\n        padding: 5px 10px;\r\n        margin: 8px 0;\r\n        box-sizing: border-box;\r\n    }\r\n</style>\r\n\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "aefd":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(true);
// imports


// module
exports.push([module.i, ".customization-container[data-v-7755daa0]{font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif;background:#fff;padding:10px}.customization-header[data-v-7755daa0]{margin:20px auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.heading[data-v-7755daa0]{font-size:25px;color:#000}.right-buttons[data-v-7755daa0]{display:block}.m-r-5[data-v-7755daa0]{margin-right:5px}.m-l-5[data-v-7755daa0]{margin-left:5px}.customization-content[data-v-7755daa0]{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-line-pack:justify;align-content:space-between}.treeview[data-v-7755daa0]{width:20%}.pageview[data-v-7755daa0]{width:15%}.preview[data-v-7755daa0]{width:65%}", "", {"version":3,"sources":["E:/Projects/sproutloud/techne/src/components/layout/E:/Projects/sproutloud/techne/src/components/layout/E:/Projects/sproutloud/techne/src/components/layout/src/components/layout/CustomizationLayout.vue"],"names":[],"mappings":"AA8CA,0CACA,mEACA,gBACA,YACA,CACA,uCACA,iBACA,oBAAA,oBAAA,aACA,yBAAA,sBAAA,6BACA,CACA,0BACA,eACA,UACA,CACA,gCACA,aACA,CACA,wBACA,gBACA,CACA,wBACA,eACA,CACA,wCACA,oBAAA,oBAAA,aACA,2BAAA,2BACA,CACA,2BACA,SACA,CACA,2BACA,SACA,CACA,0BACA,SACA,CAAA","file":"CustomizationLayout.vue?vue&type=style&index=0&id=7755daa0&scoped=true&lang=css&","sourcesContent":["<template>\r\n    <div class=\"customization-container\">\r\n        <div class=\"customization-header\">\r\n            <div class=\"heading\">\r\n                Customize your creative\r\n            </div>\r\n            <div class=\"right-buttons\">\r\n                <ui-button label=\"Back\" @click=\"goTo\"></ui-button>\r\n                <ui-button class=\"m-l-5\" label=\"Continue\" @click=\"goTo\"></ui-button>\r\n            </div>\r\n        </div>\r\n        <div class=\"customization-content\">\r\n            <div class=\"treeview\">\r\n                <tree-widget template_id=\"TM0000002\"/>\r\n            </div>\r\n            <div class=\"pageview\">\r\n                <page-widget/>\r\n            </div>\r\n            <div class=\"preview\">\r\n                <preview-widget/>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>\r\n<script>\r\nimport UiButton from '../utils/UiButton'\r\nimport TreeWidget from '../widgets/TreeWidget'\r\nimport PageWidget from '../widgets/PageWidget'\r\nimport PreviewWidget from '../widgets/PreviewWidget'\r\nexport default {\r\n    name: \"CustomizationLayout\",\r\n    props:{},\r\n    components:{\r\n        'ui-button'         : UiButton,\r\n        'tree-widget'       : TreeWidget,\r\n        'page-widget'       : PageWidget,\r\n        'preview-widget'    : PreviewWidget\r\n    },\r\n    methods:{\r\n        goTo(data){\r\n            window.console.log(data);\r\n        }\r\n    }\r\n}\r\n</script>\r\n<style scoped>\r\n    .customization-container{\r\n        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n        background: #FFF;\r\n        padding: 10px;\r\n    }\r\n    .customization-header{\r\n        margin:20px auto;\r\n        display:flex;\r\n        justify-content: space-between;\r\n    }\r\n    .heading{\r\n        font-size: 25px;\r\n        color:#000;\r\n    }\r\n    .right-buttons{\r\n        display:block;\r\n    }\r\n    .m-r-5{\r\n        margin-right:5px;\r\n    }\r\n    .m-l-5{\r\n        margin-left:5px;\r\n    }\r\n    .customization-content{\r\n        display: flex;\r\n        align-content: space-between;\r\n    }\r\n    .treeview{\r\n        width:20%;\r\n    }\r\n    .pageview{\r\n        width:15%;\r\n    }\r\n    .preview{\r\n        width:65%;\r\n    }\r\n</style>\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "b91a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ae4c");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("60a08ad8", content, shadowRoot)
};

/***/ }),

/***/ "ca32":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiButton_vue_vue_type_style_index_0_id_2c6b6413_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9a29");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiButton_vue_vue_type_style_index_0_id_2c6b6413_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiButton_vue_vue_type_style_index_0_id_2c6b6413_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiButton_vue_vue_type_style_index_0_id_2c6b6413_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiButton_vue_vue_type_style_index_0_id_2c6b6413_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UiButton_vue_vue_type_style_index_0_id_2c6b6413_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d00f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeWidget_vue_vue_type_style_index_0_id_2ab9ee84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("99c9");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeWidget_vue_vue_type_style_index_0_id_2ab9ee84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeWidget_vue_vue_type_style_index_0_id_2ab9ee84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeWidget_vue_vue_type_style_index_0_id_2ab9ee84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeWidget_vue_vue_type_style_index_0_id_2ab9ee84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TreeWidget_vue_vue_type_style_index_0_id_2ab9ee84_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "df74":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("2350")(true);
// imports


// module
exports.push([module.i, ".ui-button[data-v-2c6b6413]{padding:6px 15px;background:#aaa;text-align:center;color:#000;border-radius:3px;cursor:pointer;font-size:12px;border:none}.ui-button[data-v-2c6b6413]:active,.ui-button[data-v-2c6b6413]:focus{outline:none}.ui-button[data-v-2c6b6413]:hover{background:#999;color:#000}", "", {"version":3,"sources":["E:/Projects/sproutloud/techne/src/components/utils/E:/Projects/sproutloud/techne/src/components/utils/E:/Projects/sproutloud/techne/src/components/utils/src/components/utils/UiButton.vue"],"names":[],"mappings":"AAmBA,4BACA,iBACA,gBACA,kBACA,WACA,kBACA,eACA,eACA,WACA,CACA,qEACA,YACA,CACA,kCACA,gBACA,UACA,CAAA","file":"UiButton.vue?vue&type=style&index=0&id=2c6b6413&scoped=true&lang=css&","sourcesContent":["<template>\r\n    <button class=\"ui-button\" v-on:click=clicked>\r\n        {{label}}\r\n    </button>\r\n</template>\r\n<script>\r\nexport default {\r\n    name:\"UiButton\",\r\n    props: {\r\n        label: {type: String, required: true, default: \"Button\"}\r\n    },\r\n    methods:{\r\n        clicked(){\r\n            this.$emit(\"click\",{btn: this.label});\r\n        }\r\n    }\r\n}\r\n</script>\r\n<style scoped>\r\n    .ui-button{\r\n        padding:6px 15px;\r\n        background:#AAA;\r\n        text-align: center;\r\n        color:#000;\r\n        border-radius:3px;\r\n        cursor:pointer;\r\n        font-size:12px;\r\n        border:none;\r\n    }\r\n    .ui-button:focus, .ui-button:active{\r\n        outline: none;\r\n    }\r\n    .ui-button:hover{\r\n        background:#999;\r\n        color:#000;\r\n    }\r\n</style>\r\n\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "e872":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewWidget_vue_vue_type_style_index_0_id_c8e10456_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("40f8");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewWidget_vue_vue_type_style_index_0_id_c8e10456_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewWidget_vue_vue_type_style_index_0_id_c8e10456_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewWidget_vue_vue_type_style_index_0_id_c8e10456_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewWidget_vue_vue_type_style_index_0_id_c8e10456_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PreviewWidget_vue_vue_type_style_index_0_id_c8e10456_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f5d2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizationLayout_vue_vue_type_style_index_0_id_7755daa0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a814");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizationLayout_vue_vue_type_style_index_0_id_7755daa0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizationLayout_vue_vue_type_style_index_0_id_7755daa0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizationLayout_vue_vue_type_style_index_0_id_7755daa0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizationLayout_vue_vue_type_style_index_0_id_7755daa0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomizationLayout_vue_vue_type_style_index_0_id_7755daa0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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


/***/ })

/******/ });
//# sourceMappingURL=customization-layout.js.map