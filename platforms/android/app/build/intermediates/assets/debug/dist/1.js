// { "framework": "Vue"} 

webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(6)
)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(14)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\IdeaProjects\\worker-app-weex\\src\\components\\Login.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-9fcfedee"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "scroller": {
    "position": "fixed",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0
  },
  "header": {
    "marginTop": "120",
    "marginBottom": "30"
  },
  "title": {
    "color": "#444444",
    "textAlign": "center",
    "fontWeight": "bold",
    "fontSize": "56"
  },
  "logo": {
    "flexDirection": "row",
    "justifyContent": "center",
    "marginBottom": "60"
  },
  "input-wrapper": {
    "marginTop": 0,
    "marginBottom": "20",
    "marginLeft": "60",
    "marginRight": "60"
  },
  "input": {
    "fontSize": "30",
    "height": "80",
    "paddingLeft": "90",
    "paddingTop": "15",
    "paddingBottom": "15",
    "borderWidth": "1",
    "borderColor": "#26a2ff",
    "borderRadius": "10",
    "outline": "none"
  },
  "input-img": {
    "position": "absolute",
    "top": "22",
    "left": "30",
    "width": "35",
    "height": "35",
    "color": "#999999",
    "fontSize": "35"
  },
  "btn_box": {
    "flexDirection": "row",
    "justifyContent": "center",
    "marginTop": "30",
    "marginBottom": "60"
  },
  "btn": {
    "width": "650"
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wxcButton = __webpack_require__(8);

var _wxcButton2 = _interopRequireDefault(_wxcButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  components: {
    WxcButton: _wxcButton2.default
  },
  data: function data() {
    return {
      scrollerWidth: 0,
      scrollerHeight: 0,
      form: {
        workerNumber: '',
        password: ''
      }
    };
  },
  created: function created() {
    function plusReady() {}
    if (window.plus) {
      plusReady();
    } else {
      document.addEventListener('plusready', plusReady, false);
    }
  },
  mounted: function mounted() {
    this.scrollerHeight = document.documentElement.clientHeight;
    this.scrollerWidth = document.documentElement.clientWidth;
  },

  methods: {
    loginSystem: function loginSystem() {
      var _this = this;

      if (!this.form.workerNumber) {
        modal.toast({
          message: '请输入工号',
          duration: 1
        });
        return;
      }
      if (!this.form.password) {
        modal.toast({
          message: '请输入密码',
          duration: 1
        });
        return;
      }
      this.$store.dispatch('LoginByUsername', this.form).then(function () {
        console.log(123);
        _this.$emit('loginStatus', _this.$store.getters.loginStatus);
        if (window.plus.storage.getItem('needChangePwd') === 'true') {
          _this.$router.replace({ path: '/mine/changePwd.vue', query: { needChangePwd: true } });
          modal.toast({
            message: '密码为初始密码，请先修改密码！',
            duration: 1
          });
        } else {
          modal.toast({
            message: '登录成功',
            duration: 1
          });
        }
      }).catch(function (e) {
        console.log(e);
      });
    }
  }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(9);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(11)

/* template */
var __vue_template__ = __webpack_require__(13)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\IdeaProjects\\worker-app-weex\\node_modules\\weex-ui\\packages\\wxc-button\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-77c133fc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  "wxc-btn": {
    "width": "702",
    "height": "88",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "12",
    "opacity": 1
  },
  "btn-text": {
    "textOverflow": "ellipsis",
    "lines": 1,
    "fontSize": "36",
    "color": "#ffffff"
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//
//
//
//
//
//
//
//

var _type = __webpack_require__(12);

exports.default = {
  props: {
    text: {
      type: String,
      default: '确认'
    },
    size: {
      type: String,
      default: 'none'
    },
    type: {
      type: String,
      default: 'red'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    btnStyle: Object,
    textStyle: Object,
    disabledStyle: Object
  },
  computed: {
    mrBtnStyle: function mrBtnStyle() {
      var type = this.type,
          disabled = this.disabled,
          btnStyle = this.btnStyle,
          size = this.size,
          disabledStyle = this.disabledStyle;


      var mrBtnStyle = _extends({}, _type.STYLE_MAP[type], btnStyle, _type.BUTTON_STYLE_MAP[size]);

      var disabledInStyle = { opacity: 0.2 };
      if (type === 'white') {
        disabledInStyle = { backgroundColor: 'rgba(0, 0, 0, 0.1)' };
      }

      return disabled ? _extends({}, mrBtnStyle, disabledInStyle, disabledStyle, {
        borderWidth: 0
      }) : mrBtnStyle;
    },
    mrTextStyle: function mrTextStyle() {
      var type = this.type,
          disabled = this.disabled,
          textStyle = this.textStyle,
          size = this.size;

      var mrTextStyle = _extends({}, _type.TEXT_STYLE_MAP[type], textStyle, _type.TEXT_FONTSIZE_STYLE_MAP[size]);
      return disabled ? _extends({}, mrTextStyle, { color: '#FFFFFF' }) : mrTextStyle;
    }
  },
  methods: {
    onClicked: function onClicked(e) {
      var type = this.type,
          disabled = this.disabled;

      this.$emit('wxcButtonClicked', { e: e, type: type, disabled: disabled });
    }
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var STYLE_MAP = exports.STYLE_MAP = {
  red: {
    backgroundColor: '#FF5000'
  },
  yellow: {
    backgroundColor: '#FFC900'
  },
  white: {
    backgroundColor: '#FFFFFF',
    borderColor: '#A5A5A5',
    borderWidth: '1px'
  },
  blue: {
    backgroundColor: '#0F8DE8'
  },
  green: {
    backgroundColor: '#19be6b'
  }
};

var TEXT_STYLE_MAP = exports.TEXT_STYLE_MAP = {
  red: {
    color: '#FFFFFF'
  },
  yellow: {
    color: '#FFFFFF'
  },
  blue: {
    color: '#FFFFFF'
  },
  white: {
    color: '#3D3D3D'
  },
  green: {
    color: '#FFFFFF'
  }
};

var BUTTON_STYLE_MAP = exports.BUTTON_STYLE_MAP = {
  full: {
    width: '702px',
    height: '88px'
  },
  big: {
    width: '339px',
    height: '70px'
  },
  medium: {
    width: '218px',
    height: '60px'
  },
  small: {
    width: '157px',
    height: '44px'
  }
};

var TEXT_FONTSIZE_STYLE_MAP = exports.TEXT_FONTSIZE_STYLE_MAP = {
  full: {
    fontSize: '36px'
  },
  big: {
    fontSize: '32px'
  },
  medium: {
    fontSize: '28px'
  },
  small: {
    fontSize: '24px'
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wxc-btn"],
    style: _vm.mrBtnStyle,
    attrs: {
      "accessible": true,
      "ariaLabel": _vm.text
    },
    on: {
      "click": _vm.onClicked
    }
  }, [_c('text', {
    staticClass: ["btn-text"],
    style: _vm.mrTextStyle
  }, [_vm._v(_vm._s(_vm.text))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('scroller', {
    staticClass: ["scroller"]
  }, [_vm._m(0), _vm._m(1), _c('div', {
    staticClass: ["login"]
  }, [_c('div', {
    staticClass: ["input-wrapper"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "text",
      "placeholder": "请输入工号",
      "value": (_vm.form.workerNumber)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.form, "workerNumber", $event.target.attr.value)
      }
    }
  }), _c('text', {
    staticClass: ["iconfont", "input-img"]
  }, [_vm._v("")])]), _c('div', {
    staticClass: ["input-wrapper"]
  }, [_c('input', {
    staticClass: ["input"],
    attrs: {
      "type": "password",
      "placeholder": "请输入密码",
      "value": (_vm.form.password)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.form, "password", $event.target.attr.value)
      }
    }
  }), _c('text', {
    staticClass: ["iconfont", "input-img"]
  }, [_vm._v("")])])]), _c('div', {
    staticClass: ["btn_box"]
  }, [_c('wxc-button', {
    staticClass: ["btn"],
    attrs: {
      "text": "立即登录",
      "type": "blue"
    },
    on: {
      "wxcButtonClicked": _vm.loginSystem
    }
  })], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["header"]
  }, [_c('text', {
    staticClass: ["title"]
  }, [_vm._v("欢迎使用生产管理系统")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["logo"]
  }, [_c('image', {
    staticClass: ["logoImg"],
    staticStyle: {
      width: "520px",
      height: "420px"
    },
    attrs: {
      "src": "/src/assets/product.jpg"
    }
  })])
}]}
module.exports.render._withStripped = true

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(21)

/* template */
var __vue_template__ = __webpack_require__(22)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\IdeaProjects\\worker-app-weex\\src\\components\\Index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Login = __webpack_require__(5);

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//

exports.default = {
  name: 'Index',
  components: {
    Login: _Login2.default
  },
  data: function data() {
    return {
      isLogin: false
    };
  },
  activated: function activated() {
    if (this.$route.params.isLogin !== undefined) {
      this.isLogin = this.$route.params.isLogin;
    }
    var that = this;
    function plusReady() {
      var token = window.plus.storage.getItem('token');
      var startTime = parseInt(window.plus.storage.getItem('startTime'));
      var needChangePwd = window.plus.storage.getItem('needChangePwd') === 'true';
      if (needChangePwd) {
        this.$router.replace({ path: '/mine/changePwd.vue', query: { needChangePwd: true } });
        modal.toast({
          message: '密码为初始密码，请先修改密码！',
          duration: 1
        });
      }
      if (token && startTime) {
        var date = new Date();
        var endTime = date.getTime();
        var time = Math.floor((endTime - startTime) / 86400000);
        if (time > 30) {
          modal.toast({
            message: '登录信息已过期，请重新登录',
            duration: 1
          });
          that.isLogin = false;
        } else {
          that.isLogin = true;
        }
      } else {
        that.isLogin = false;
      }
    }
    if (window.plus) {
      plusReady();
    } else {
      document.addEventListener('plusready', plusReady, false);
    }
  },
  created: function created() {},
  mounted: function mounted() {},

  methods: {
    judgeLogin: function judgeLogin(isLogin) {
      this.isLogin = isLogin;
    }
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('Login', {
    on: {
      "loginStatus": _vm.judgeLogin
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
]);