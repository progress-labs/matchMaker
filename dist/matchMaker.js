!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.matchMaker=t():e.matchMaker=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r={queue:{},registerCallback:function(e,t){var n=t;this.queue[e]=this.queue[e]||[],this.queue[e].push(n)},runCallbacks:function(e,t,n=!0,r=!0){var u=window.matchMedia(e);let o=u.matches;o&&n&&t(u.matches),u.addListener(e=>{o=e.matches,t(e.matches)})},register:function(e,t,n,r){this.registerCallback(e,t),this.runCallbacks(e,t,n)},deresgister:function(e,t){const n=this.queue[e],r=n.findIndex(function(e){return e==t});n.splice(r,1)}};t.default=r}])});