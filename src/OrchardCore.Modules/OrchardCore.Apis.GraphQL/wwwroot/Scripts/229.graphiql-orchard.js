"use strict";(self.webpackChunkorchardcore_apis_graphql=self.webpackChunkorchardcore_apis_graphql||[]).push([[229],{9229:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(4631)),l=r(n(88));i.default.defineMode("graphql",l.default)},88:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(435),l=r(n(9655));t.default=function(e){var t=i.onlineParser({eatWhitespace:function(e){return e.eatWhile(i.isIgnored)},lexRules:i.LexRules,parseRules:i.ParseRules,editorConfig:{tabSize:e.tabSize}});return{config:e,startState:t.startState,token:t.token,indent:l.default,electricInput:/^\s*[})\]]/,fold:"brace",lineComment:"#",closeBrackets:{pairs:'()[]{}""',explode:"()[]{}"}}}},9655:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n,r,i=e.levels;return((i&&0!==i.length?i[i.length-1]-((null===(n=this.electricInput)||void 0===n?void 0:n.test(t))?1:0):e.indentLevel)||0)*((null===(r=this.config)||void 0===r?void 0:r.indentUnit)||0)}}}]);