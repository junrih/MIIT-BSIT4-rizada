System.register(["./index-legacy-BVht0oRT.js"],(function(t,e){"use strict";var i,o,s,n;return{setters:[t=>{i=t.ab,o=t.ac,s=t.af,n=t.ad}],execute:function(){t("pwa_toast",function(){function t(t){n(this,t),this.message=void 0,this.duration=2e3,this.closing=null}return t.prototype.hostData=function(){var t={out:!!this.closing};return null!==this.closing&&(t.in=!this.closing),{class:t}},t.prototype.componentDidLoad=function(){var t=this;setTimeout((function(){t.closing=!1})),setTimeout((function(){t.close()}),this.duration)},t.prototype.close=function(){var t=this;this.closing=!0,setTimeout((function(){t.el.parentNode.removeChild(t.el)}),1e3)},t.prototype.__stencil_render=function(){return i("div",{class:"wrapper"},i("div",{class:"toast"},this.message))},Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:!1,configurable:!0}),t.prototype.render=function(){return i(s,this.hostData(),this.__stencil_render())},t}()).style=':host{position:fixed;bottom:20px;left:0;right:0;display:-ms-flexbox;display:flex;opacity:0}:host(.in){-webkit-transition:opacity 300ms;transition:opacity 300ms;opacity:1}:host(.out){-webkit-transition:opacity 1s;transition:opacity 1s;opacity:0}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.toast{font-family:-apple-system, system-ui, "Helvetica Neue", Roboto, sans-serif;background-color:#eee;color:black;border-radius:5px;padding:10px 15px;font-size:14px;font-weight:500;-webkit-box-shadow:0px 1px 2px rgba(0, 0, 0, 0.20);box-shadow:0px 1px 2px rgba(0, 0, 0, 0.20)}'}}}));
