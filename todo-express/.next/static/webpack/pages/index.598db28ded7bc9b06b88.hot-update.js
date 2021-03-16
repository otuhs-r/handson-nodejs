webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Todos.js":
/*!*****************************!*\
  !*** ./components/Todos.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Todos; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_shuto_Documents_workspace_handson_nodejs_todo_express_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_shuto_Documents_workspace_handson_nodejs_todo_express_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_shuto_Documents_workspace_handson_nodejs_todo_express_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_shuto_Documents_workspace_handson_nodejs_todo_express_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\nvar _jsxFileName = \"/Users/shuto/Documents/workspace/handson-nodejs/todo-express/components/Todos.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar pages = {\n  index: {\n    title: 'すべてのToDo',\n    fetchQuery: ''\n  },\n  active: {\n    title: '未完了のToDo',\n    fetchQuery: '?complete=false'\n  },\n  completed: {\n    title: '完了したToDo',\n    fetchQuery: '?complete=true'\n  }\n};\nvar pageLinks = Object.keys(pages).map(function (page, index) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/\".concat(page === 'index' ? '' : page),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      style: {\n        marginRight: 10\n      },\n      children: pages[page].title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }, _this)\n  }, index, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 3\n  }, _this);\n});\nfunction Todos(props) {\n  _s();\n\n  var _this2 = this;\n\n  var _pages$props$page = pages[props.page],\n      title = _pages$props$page.title,\n      fetchQuery = _pages$props$page.fetchQuery;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      todos = _useState[0],\n      setTodos = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    fetch(\"/api/todos\".concat(fetchQuery)).then( /*#__PURE__*/function () {\n      var _ref = Object(_Users_shuto_Documents_workspace_handson_nodejs_todo_express_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_shuto_Documents_workspace_handson_nodejs_todo_express_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(res) {\n        return _Users_shuto_Documents_workspace_handson_nodejs_todo_express_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!res.ok) {\n                  _context.next = 8;\n                  break;\n                }\n\n                _context.t1 = setTodos;\n                _context.next = 4;\n                return res.json();\n\n              case 4:\n                _context.t2 = _context.sent;\n                _context.t0 = (0, _context.t1)(_context.t2);\n                _context.next = 13;\n                break;\n\n              case 8:\n                _context.t3 = alert;\n                _context.next = 11;\n                return res.text();\n\n              case 11:\n                _context.t4 = _context.sent;\n                _context.t0 = (0, _context.t3)(_context.t4);\n\n              case 13:\n                return _context.abrupt(\"return\", _context.t0);\n\n              case 14:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }());\n  }, [props.page]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n      children: todos.map(function (_ref2) {\n        var id = _ref2.id,\n            title = _ref2.title,\n            completed = _ref2.completed;\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            style: completed ? {\n              textDecoration: 'line-through'\n            } : {},\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }, _this2)\n        }, id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this2);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: pageLinks\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Todos, \"4w2FR3x+JAhc2MKl4V8naiLXs70=\");\n\n_c = Todos;\n\nvar _c;\n\n$RefreshReg$(_c, \"Todos\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2Rvcy5qcz9kNTI1Il0sIm5hbWVzIjpbInBhZ2VzIiwiaW5kZXgiLCJ0aXRsZSIsImZldGNoUXVlcnkiLCJhY3RpdmUiLCJjb21wbGV0ZWQiLCJwYWdlTGlua3MiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicGFnZSIsIm1hcmdpblJpZ2h0IiwiVG9kb3MiLCJwcm9wcyIsInVzZVN0YXRlIiwidG9kb3MiLCJzZXRUb2RvcyIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlcyIsIm9rIiwianNvbiIsImFsZXJ0IiwidGV4dCIsImlkIiwidGV4dERlY29yYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHO0FBQ1pDLE9BQUssRUFBRTtBQUFFQyxTQUFLLEVBQUUsVUFBVDtBQUFxQkMsY0FBVSxFQUFFO0FBQWpDLEdBREs7QUFFWkMsUUFBTSxFQUFFO0FBQUVGLFNBQUssRUFBRSxVQUFUO0FBQXFCQyxjQUFVLEVBQUU7QUFBakMsR0FGSTtBQUdaRSxXQUFTLEVBQUU7QUFBRUgsU0FBSyxFQUFFLFVBQVQ7QUFBcUJDLGNBQVUsRUFBRTtBQUFqQztBQUhDLENBQWQ7QUFNQSxJQUFNRyxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUixLQUFaLEVBQW1CUyxHQUFuQixDQUF1QixVQUFDQyxJQUFELEVBQU9ULEtBQVA7QUFBQSxzQkFDdkMscUVBQUMsZ0RBQUQ7QUFBTSxRQUFJLGFBQU1TLElBQUksS0FBSyxPQUFULEdBQW1CLEVBQW5CLEdBQXdCQSxJQUE5QixDQUFWO0FBQUEsMkJBQ0U7QUFBRyxXQUFLLEVBQUU7QUFBRUMsbUJBQVcsRUFBRTtBQUFmLE9BQVY7QUFBQSxnQkFBZ0NYLEtBQUssQ0FBQ1UsSUFBRCxDQUFMLENBQVlSO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixLQUFxREQsS0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUR1QztBQUFBLENBQXZCLENBQWxCO0FBTWUsU0FBU1csS0FBVCxDQUFlQyxLQUFmLEVBQXNCO0FBQUE7O0FBQUE7O0FBQUEsMEJBQ0xiLEtBQUssQ0FBQ2EsS0FBSyxDQUFDSCxJQUFQLENBREE7QUFBQSxNQUMzQlIsS0FEMkIscUJBQzNCQSxLQUQyQjtBQUFBLE1BQ3BCQyxVQURvQixxQkFDcEJBLFVBRG9COztBQUFBLGtCQUdUVyxzREFBUSxDQUFDLEVBQUQsQ0FIQztBQUFBLE1BRzVCQyxLQUg0QjtBQUFBLE1BR3JCQyxRQUhxQjs7QUFJbkNDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxTQUFLLHFCQUFjZixVQUFkLEVBQUwsQ0FDR2dCLElBREg7QUFBQSxvVkFDUSxpQkFBTUMsR0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWFBLEdBQUcsQ0FBQ0MsRUFBakI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsOEJBQ0ZMLFFBREU7QUFBQTtBQUFBLHVCQUNhSSxHQUFHLENBQUNFLElBQUosRUFEYjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsOEJBRUZDLEtBRkU7QUFBQTtBQUFBLHVCQUVVSCxHQUFHLENBQUNJLElBQUosRUFGVjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0QsR0FOUSxFQU1OLENBQUNYLEtBQUssQ0FBQ0gsSUFBUCxDQU5NLENBQVQ7QUFRQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQSxrQkFBUVI7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBQSxnQkFBS0E7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFLRTtBQUFBLGdCQUNHYSxLQUFLLENBQUNOLEdBQU4sQ0FBVTtBQUFBLFlBQUVnQixFQUFGLFNBQUVBLEVBQUY7QUFBQSxZQUFNdkIsS0FBTixTQUFNQSxLQUFOO0FBQUEsWUFBYUcsU0FBYixTQUFhQSxTQUFiO0FBQUEsNEJBQ1Q7QUFBQSxpQ0FDRTtBQUFNLGlCQUFLLEVBQUVBLFNBQVMsR0FBRztBQUFFcUIsNEJBQWMsRUFBRTtBQUFsQixhQUFILEdBQXdDLEVBQTlEO0FBQUEsc0JBQ0d4QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUFTdUIsRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURTO0FBQUEsT0FBVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRixlQWNFO0FBQUEsZ0JBQU1uQjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRjtBQUFBLGtCQURGO0FBa0JEOztHQTlCdUJNLEs7O0tBQUFBLEsiLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvZG9zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJ1xuXG5jb25zdCBwYWdlcyA9IHtcbiAgaW5kZXg6IHsgdGl0bGU6ICfjgZnjgbnjgabjga5Ub0RvJywgZmV0Y2hRdWVyeTogJycgfSxcbiAgYWN0aXZlOiB7IHRpdGxlOiAn5pyq5a6M5LqG44GuVG9EbycsIGZldGNoUXVlcnk6ICc/Y29tcGxldGU9ZmFsc2UnIH0sXG4gIGNvbXBsZXRlZDogeyB0aXRsZTogJ+WujOS6huOBl+OBn1RvRG8nLCBmZXRjaFF1ZXJ5OiAnP2NvbXBsZXRlPXRydWUnIH0sXG59XG5cbmNvbnN0IHBhZ2VMaW5rcyA9IE9iamVjdC5rZXlzKHBhZ2VzKS5tYXAoKHBhZ2UsIGluZGV4KSA9PlxuICA8TGluayBocmVmPXtgLyR7cGFnZSA9PT0gJ2luZGV4JyA/ICcnIDogcGFnZX1gfSBrZXk9e2luZGV4fT5cbiAgICA8YSBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0+e3BhZ2VzW3BhZ2VdLnRpdGxlfTwvYT5cbiAgPC9MaW5rPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2Rvcyhwcm9wcykge1xuICBjb25zdCB7IHRpdGxlLCBmZXRjaFF1ZXJ5IH0gPSBwYWdlc1twcm9wcy5wYWdlXVxuXG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goYC9hcGkvdG9kb3Mke2ZldGNoUXVlcnl9YClcbiAgICAgIC50aGVuKGFzeW5jIHJlcyA9PiByZXMub2tcbiAgICAgICAgPyBzZXRUb2Rvcyhhd2FpdCByZXMuanNvbigpKVxuICAgICAgICA6IGFsZXJ0KGF3YWl0IHJlcy50ZXh0KCkpXG4gICAgICApXG4gIH0sIFtwcm9wcy5wYWdlXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgPHVsPlxuICAgICAgICB7dG9kb3MubWFwKCh7aWQsIHRpdGxlLCBjb21wbGV0ZWQgfSkgPT5cbiAgICAgICAgICA8bGkga2V5PXtpZH0+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17Y29tcGxldGVkID8geyB0ZXh0RGVjb3JhdGlvbjogJ2xpbmUtdGhyb3VnaCcgfSA6IHt9fT5cbiAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICl9XG4gICAgICA8L3VsPlxuICAgICAgPGRpdj57cGFnZUxpbmtzfTwvZGl2PlxuICAgIDwvPlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Todos.js\n");

/***/ })

})