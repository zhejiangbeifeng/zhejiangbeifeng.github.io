webpackJsonp([2,5],[,,,function(t,e,n){var o,i;n(9),o=n(14),i=n(12),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},function(t,e,n){e=t.exports=n(1)(),e.push([t.id,"@component-namespace mint{@component popup{position:fixed;background:#fff;top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;@descendent top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}@descendent right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}@descendent bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}@descendent left{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}}}.popup-slide-bottom-transition,.popup-slide-left-transition,.popup-slide-right-transition,.popup-slide-top-transition{-webkit-transition:-webkit-transform .3s ease-out .1s;transition:-webkit-transform .3s ease-out .1s;transition:transform .3s ease-out .1s;transition:transform .3s ease-out .1s,-webkit-transform .3s ease-out .1s}.popup-slide-top-enter,.popup-slide-top-leave{-webkit-transform:translate3d(-50%,-100%,0);transform:translate3d(-50%,-100%,0)}.popup-slide-right-enter,.popup-slide-right-leave{-webkit-transform:translate3d(100%,-50%,0);transform:translate3d(100%,-50%,0)}.popup-slide-bottom-enter,.popup-slide-bottom-leave{-webkit-transform:translate3d(-50%,100%,0);transform:translate3d(-50%,100%,0)}.popup-slide-left-enter,.popup-slide-left-leave{-webkit-transform:translate3d(-100%,-50%,0);transform:translate3d(-100%,-50%,0)}.popup-fade-transition{-webkit-transition:opacity .3s;transition:opacity .3s}.popup-fade-enter,.popup-fade-leave{opacity:0}","",{version:3,sources:["/./node_modules/mint-ui/packages/popup/src/popup.vue"],names:[],mappings:"AAOA,0BACE,iBACE,eAAgB,AAChB,gBAAiB,AACjB,QAAS,AACT,SAAU,AACV,2CAA8C,AACtC,mCAAsC,AAC9C,mCAAoC,AAC5B,2BAA4B,AAEpC,gBACE,MAAO,AACP,WAAY,AACZ,YAAa,AACb,SAAU,AACV,wCAA2C,AACnC,+BAAmC,CAC5C,AAED,kBACE,QAAS,AACT,QAAS,AACT,YAAa,AACb,UAAW,AACX,wCAA2C,AACnC,+BAAmC,CAC5C,AAED,mBACE,SAAU,AACV,WAAY,AACZ,SAAU,AACV,SAAU,AACV,wCAA2C,AACnC,+BAAmC,CAC5C,AAED,iBACE,QAAS,AACT,WAAY,AACZ,YAAa,AACb,OAAQ,AACR,wCAA2C,AACnC,+BAAmC,CAC5C,CACF,CACF,AAED,sHAIE,sDAAyD,AACzD,8CAAiD,AACjD,sCAAyC,AACzC,wEAA+E,CAChF,AAED,8CAEE,4CAA+C,AACvC,mCAAuC,CAChD,AAED,kDAEE,2CAA8C,AACtC,kCAAsC,CAC/C,AAED,oDAEE,2CAA8C,AACtC,kCAAsC,CAC/C,AAED,gDAEE,4CAA+C,AACvC,mCAAuC,CAChD,AAED,uBACE,+BAAgC,AAChC,sBAAwB,CACzB,AAED,oCAEE,SAAW,CACZ",file:"popup.vue",sourcesContent:["\n\n\n\n\n\n\n@component-namespace mint {\n  @component popup {\n    position: fixed;\n    background: #fff;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate3d(-50%, -50%, 0);\n            transform: translate3d(-50%, -50%, 0);\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n\n    @descendent top {\n      top: 0;\n      right: auto;\n      bottom: auto;\n      left: 50%;\n      -webkit-transform: translate3d(-50%, 0, 0);\n              transform: translate3d(-50%, 0, 0);\n    }\n\n    @descendent right {\n      top: 50%;\n      right: 0;\n      bottom: auto;\n      left: auto;\n      -webkit-transform: translate3d(0, -50%, 0);\n              transform: translate3d(0, -50%, 0);\n    }\n\n    @descendent bottom {\n      top: auto;\n      right: auto;\n      bottom: 0;\n      left: 50%;\n      -webkit-transform: translate3d(-50%, 0, 0);\n              transform: translate3d(-50%, 0, 0);\n    }\n\n    @descendent left {\n      top: 50%;\n      right: auto;\n      bottom: auto;\n      left: 0;\n      -webkit-transform: translate3d(0, -50%, 0);\n              transform: translate3d(0, -50%, 0);\n    }\n  }\n}\n\n.popup-slide-top-transition,\n.popup-slide-right-transition,\n.popup-slide-bottom-transition,\n.popup-slide-left-transition {\n  -webkit-transition: -webkit-transform .3s ease-out 100ms;\n  transition: -webkit-transform .3s ease-out 100ms;\n  transition: transform .3s ease-out 100ms;\n  transition: transform .3s ease-out 100ms, -webkit-transform .3s ease-out 100ms;\n}\n\n.popup-slide-top-enter,\n.popup-slide-top-leave {\n  -webkit-transform: translate3d(-50%, -100%, 0);\n          transform: translate3d(-50%, -100%, 0);\n}\n\n.popup-slide-right-enter,\n.popup-slide-right-leave {\n  -webkit-transform: translate3d(100%, -50%, 0);\n          transform: translate3d(100%, -50%, 0);\n}\n\n.popup-slide-bottom-enter,\n.popup-slide-bottom-leave {\n  -webkit-transform: translate3d(-50%, 100%, 0);\n          transform: translate3d(-50%, 100%, 0);\n}\n\n.popup-slide-left-enter,\n.popup-slide-left-leave {\n  -webkit-transform: translate3d(-100%, -50%, 0);\n          transform: translate3d(-100%, -50%, 0);\n}\n\n.popup-fade-transition {\n  -webkit-transition: opacity .3s;\n  transition: opacity .3s;\n}\n\n.popup-fade-enter,\n.popup-fade-leave {\n  opacity: 0;\n}\n"],sourceRoot:"webpack://"}])},function(t,e,n){e=t.exports=n(1)(),e.push([t.id,".popup-root[_v-061b874e]{top:0;bottom:0;left:0;right:0;width:100%;height:100%;position:fixed;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;z-index:1000}.mint-popup[_v-061b874e]{width:60%;-ms-flex-item-align:center;align-self:center;height:70%;background:#fff}.title[_v-061b874e]{font-size:20px;font-weight:700;margin-bottom:16px}.content-box[_v-061b874e]{overflow-y:scroll;overflow-x:hidden;height:90%;display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:44px;padding:4px 4px 4px 32px}.content-box>img[_v-061b874e]{width:300px;height:300px}.info[_v-061b874e]{padding-right:16px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:scroll;margin-left:16px}.close[_v-061b874e]{display:block;width:32px;height:32px;background:url("+n(7)+") no-repeat 50%;background-size:24px;position:absolute;right:16px;top:8px}","",{version:3,sources:["/./src/components/PopupDetail.vue"],names:[],mappings:"AAoBA,yBACE,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,WAAY,AACZ,YAAa,AACb,eAAgB,AAChB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,YAAc,CACf,AAED,yBACE,UAAW,AACX,2BAA4B,AACxB,kBAAmB,AACvB,WAAY,AACZ,eAAoB,CACrB,AAED,oBACE,eAAgB,AAChB,gBAAiB,AACjB,kBAAoB,CACrB,AAED,0BACE,kBAAmB,AACnB,kBAAmB,AACnB,WAAY,AACZ,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,gBAAiB,AACjB,wBAA0B,CAC3B,AAED,8BACE,YAAa,AACb,YAAc,CACf,AAED,mBACE,mBAAoB,AACpB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,gBAAiB,AACjB,gBAAkB,CACnB,AAED,oBACE,cAAe,AACf,WAAY,AACZ,YAAa,AACb,uDAA4D,AAC5D,qBAAsB,AACtB,kBAAmB,AACnB,WAAY,AACZ,OAAS,CACV",file:"PopupDetail.vue",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.popup-root[_v-061b874e] {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  z-index: 1000;\n}\n\n.mint-popup[_v-061b874e] {\n  width: 60%;\n  -ms-flex-item-align: center;\n      align-self: center;\n  height: 70%;\n  background: #ffffff;\n}\n\n.title[_v-061b874e] {\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: 16px;\n}\n\n.content-box[_v-061b874e] {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  height: 90%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 44px;\n  padding: 4px 4px 4px 32px;\n}\n\n.content-box > img[_v-061b874e] {\n  width: 300px;\n  height: 300px;\n}\n\n.info[_v-061b874e] {\n  padding-right: 16px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  overflow: scroll;\n  margin-left: 16px;\n}\n\n.close[_v-061b874e] {\n  display: block;\n  width: 32px;\n  height: 32px;\n  background: url("../assets/img/close.png") no-repeat center;\n  background-size: 24px;\n  position: absolute;\n  right: 16px;\n  top: 8px;\n}\n\n'],sourceRoot:"webpack://"}])},function(t,e,n){e=t.exports=n(1)(),e.push([t.id,".v-modal-enter{animation:v-modal-in .2s ease}.v-modal-leave{animation:v-modal-out .2s ease forwards}@keyframes v-modal-in{0%{opacity:0}}@keyframes v-modal-out{to{opacity:0}}.v-modal{position:fixed;left:0;top:0;width:100%;height:100%;opacity:.5;background:#000}","",{version:3,sources:["/./node_modules/mint-ui/node_modules/vue-popup/lib/popup.css"],names:[],mappings:"AAAA,eAAe,6BAA6B,CAAC,eAAe,uCAAuC,CAAC,sBAAsB,GAAG,SAAS,CAAC,CAAC,uBAAuB,GAAG,SAAS,CAAC,CAAC,SAAS,eAAe,OAAO,MAAM,WAAW,YAAY,WAAW,eAAe,CAAC",file:"popup.css",sourcesContent:[".v-modal-enter{animation:v-modal-in .2s ease}.v-modal-leave{animation:v-modal-out .2s ease forwards}@keyframes v-modal-in{0%{opacity:0}}@keyframes v-modal-out{to{opacity:0}}.v-modal{position:fixed;left:0;top:0;width:100%;height:100%;opacity:.5;background:#000}\n/*# sourceMappingURL=popup.css.map*/"],sourceRoot:"webpack://"}])},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABR0lEQVRYR+2WsXHDMAxFwYK9R4g3CAtBZewJ4g2cjJBJMkKSDZIJYpeCCnkDewT3LOijTsr5dBIJIIUaqSWh//TxgZOBmR8zsz4sAIsDkw40TbPy3r+HEH7KsvzWhLWqqp0x5tla++acu469YxKgrutNCOG3K3pFxE8JBBG9AMBHrDHGbIuiOIgA4mUiiqJ7KcS9OAB8IWKEGX2yIZRCSMRbdzi2ciGk4mwATjs04iKAFIRWXAwwBtG1sE17LnDiKZjKxyAT/bVk2tVTkICIc/3UnR8RccMJ9PAOawqGRYOe98fiZaXNwN+Giz3v1MXLqqcWOTCVdu6e+FcIc6OmhWA5kBPvv0wDkQXgimshkgBScQ1E6ofkwXt/1m64+3ZYa9fOuYsohET0CACNZr2OOOEQ8SQC0Gw1TU02hJqXSmoWgMWB2R24AdsasyEyzMZrAAAAAElFTkSuQmCC"},function(t,e,n){var o=n(4);"string"==typeof o&&(o=[[t.id,o,""]]);n(2)(o,{});o.locals&&(t.exports=o.locals)},function(t,e,n){var o=n(5);"string"==typeof o&&(o=[[t.id,o,""]]);n(2)(o,{});o.locals&&(t.exports=o.locals)},function(t,e,n){var o=n(6);"string"==typeof o&&(o=[[t.id,o,""]]);n(2)(o,{});o.locals&&(t.exports=o.locals)},function(t,e){t.exports=" <div v-show=visible class=mint-popup :class=\"[position ? 'mint-popup-' + position : '']\" :transition=popupTransition> <slot></slot> </div> "},function(t,e){t.exports=' <div v-show=show class=popup-root _v-061b874e=""> <mt-popup :visible.sync=show class=mint-popup position=top _v-061b874e=""> <a href=javascript:; @click=toggleBar() title=关闭 hidefocus=true class=close _v-061b874e=""></a> <div class=content-box _v-061b874e=""> <img :src=item.image alt="" _v-061b874e=""> <div class=info _v-061b874e=""> <span class=title _v-061b874e="">{{item.title}}</span> <span class=desc v-if="item.desc != \'水稻收割机皮带\'" v-html=item.desc _v-061b874e=""></span> </div> </div> </mt-popup> </div> '},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(16),A=o(i);n(10),e["default"]={name:"mt-popup",mixins:[A["default"]],props:{modal:{"default":!0},closeOnClickModal:{"default":!0},lockScroll:{"default":!1},popupTransition:{type:String,"default":"popup-slide"},position:{type:String,"default":""}},compiled:function(){"popup-fade"!==this.popupTransition&&(this.popupTransition="popup-slide-"+this.position)},ready:function(){this.visible&&(this.rendered=!0,this.open())}}},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(15),A=o(i);e["default"]={props:["show","item"],methods:{toggleBar:function(){this.show=!this.show}},data:function(){return{}},components:{MtPopup:A["default"]}}},function(t,e,n){var o,i;n(8),o=n(13),i=n(11),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)},function(t,e,n){!function(e,o){t.exports=o(n(17))}(this,function(t){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,e,n){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/lib/",e(e.s=5)}([function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),A=o(i),s=n(2),a=n(1),r=o(a);n(3);var l=1,p=[],d=function(t){if(p.indexOf(t)===-1){var e=function(t){var e=t.__vue__;if(!e){var n=t.previousSibling;n.__vue__&&(e=n.__vue__)}return e};A["default"].transition(t,{afterEnter:function(t){var n=e(t);n&&n.doAfterOpen&&n.doAfterOpen()},afterLeave:function(t){var n=e(t);n&&n.doAfterClose&&n.doAfterClose()}})}},c=function u(t){return 3===t.nodeType&&(t=t.nextElementSibling||t.nextSibling,u(t)),t};e["default"]={props:{visible:{type:Boolean,twoWay:!0,"default":!1},transition:{type:String,"default":""},openDelay:{},closeDelay:{},zIndex:{},modal:{type:Boolean,"default":!1},lockScroll:{type:Boolean,"default":!0},modalClass:{},closeOnPressEscape:{type:Boolean,"default":!1},closeOnClickModal:{type:Boolean,"default":!1}},created:function(){this.transition&&d(this.transition)},compiled:function(){this._popupId="popup-"+l++,r["default"].register(this._popupId,this)},beforeDestroy:function(){r["default"].deregister(this._popupId),r["default"].closeModal(this._popupId)},data:function(){return{bodyOverflow:null,rendered:!1}},watch:{visible:function(t){var e=this;if(t){if(this._opening)return;this.rendered?this.open():(this.rendered=!0,A["default"].nextTick(function(){e.open()}))}else this.close()}},methods:{open:function(t){var e=this;if(!this.rendered)return this.rendered=!0,void(this.visible=!0);var n=(0,s.merge)({},this,t);this._closeTimer&&(clearTimeout(this._closeTimer),this._closeTimer=null),clearTimeout(this._openTimer);var o=Number(n.openDelay);o>0?this._openTimer=setTimeout(function(){e._openTimer=null,e.doOpen(n)},o):this.doOpen(n)},doOpen:function(t){if(!this.willOpen||this.willOpen()){this._opening=!0,this.visible=!0;var e=c(this.$el),n=t.modal,o=t.zIndex;o&&(r["default"].zIndex=o),n&&(this._closing&&(r["default"].closeModal(this._popupId),this._closing=!1),r["default"].openModal(this._popupId,r["default"].nextZIndex(),e,t.modalClass),t.lockScroll&&(this.bodyOverflow||(this.bodyOverflow=document.body.style.overflow),document.body.style.overflow="hidden")),"static"===getComputedStyle(e).position&&(e.style.position="absolute"),n?e.style.zIndex=r["default"].nextZIndex():o&&(e.style.zIndex=o),this.onOpen&&this.onOpen(),this.transition||this.doAfterOpen()}},doAfterOpen:function(){this._opening=!1},close:function(){var t=this;if(!this.willClose||this.willClose()){null!==this._openTimer&&(clearTimeout(this._openTimer),this._openTimer=null),clearTimeout(this._closeTimer);var e=Number(this.closeDelay);e>0?this._closeTimer=setTimeout(function(){t._closeTimer=null,t.doClose()},e):this.doClose()}},doClose:function(){this.visible=!1,this._closing=!0,this.onClose&&this.onClose(),this.lockScroll&&this.modal&&"hidden"!==this.bodyOverflow&&(document.body.style.overflow=this.bodyOverflow),this.transition||this.doAfterClose()},doAfterClose:function(){r["default"].closeModal(this._popupId),this._closing=!1}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=A.modalDom;return t||(t=document.createElement("div"),A.modalDom=t,t.addEventListener("touchmove",function(t){t.preventDefault(),t.stopPropagation()})),t},o=function(){A.doOnModalClick&&A.doOnModalClick()},i={},A={zIndex:1e3,getInstance:function(t){return i[t]},register:function(t,e){t&&e&&(i[t]=e)},deregister:function(t){t&&(i[t]=null,delete i[t])},nextZIndex:function(){return A.zIndex++},modalStack:[],doOnModalClick:function(){var t=A.modalStack[A.modalStack.length-1];if(t){var e=A.getInstance(t.id);e&&e.closeOnClickModal&&e.close()}},openModal:function(t,e,i,A){if(t&&void 0!==e){for(var s=this.modalStack,a=0,r=s.length;a<r;a++){var l=s[a];if(l.id===t)return}var p=n();if(setTimeout(function(){p.addEventListener("click",o)},300),p.classList.add("v-modal"),p.classList.add("v-modal-enter"),A){var d=A.trim().split(/\s+/);d.forEach(function(t){return p.classList.add(t)})}setTimeout(function(){p.classList.remove("v-modal-enter")},200),i&&i.parentNode&&11!==i.parentNode.nodeType?i.parentNode.appendChild(p):document.body.appendChild(p),e&&(p.style.zIndex=e),p.style.display="",this.modalStack.push({id:t,zIndex:e,modalClass:A})}},closeModal:function(t){var e=this.modalStack,i=n();if(e.length>0){var A=e[e.length-1];if(A.id===t){if(A.modalClass){var s=A.modalClass.trim().split(/\s+/);s.forEach(function(t){return i.classList.remove(t)})}e.pop(),e.length>0&&(i.style.zIndex=e[e.length-1].zIndex)}else for(var a=e.length-1;a>=0;a--)if(e[a].id===t){e.splice(a,1);break}}0===e.length&&(i.classList.add("v-modal-leave"),setTimeout(function(){0===e.length&&(i.parentNode&&i.parentNode.removeChild(i),i.style.display="none"),i.removeEventListener("click",o),i.classList.remove("v-modal-leave")},200))}};window.addEventListener("keydown",function(t){if(27===t.keyCode&&A.modalStack.length>0){var e=A.modalStack[A.modalStack.length-1];if(!e)return;var n=A.getInstance(e.id);n.closeOnPressEscape&&n.close()}}),e["default"]=A},function(t,e){"use strict";function n(t){for(var e=1,n=arguments.length;e<n;e++){var o=arguments[e];for(var i in o)if(o.hasOwnProperty(i)){var A=o[i];void 0!==A&&(t[i]=A)}}return t}Object.defineProperty(e,"__esModule",{value:!0}),e.merge=n},function(t,e){},function(e,n){e.exports=t},function(t,e,n){t.exports=n(0)}])})},,,,,function(t,e,n){e=t.exports=n(1)(),e.push([t.id,'div.numImg[_v-83cf690a]{width:100%;height:300px;cursor:default;overflow:hidden;display:block;outline:none;margin:0 auto;position:relative;z-index:1;background:url("http://11149325.s21i-11.faiusr.com/2/ABUIABACGAAgmsCwvAUoisHD-QUwgA84rAI.jpg") no-repeat 50% 50%}div.products-content[_v-83cf690a]{width:75%;margin:120px auto 0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}div.products-content>span.sub-title[_v-83cf690a]{color:#1564e9;font-size:18px;margin-top:8px}div.products-content>span.product-info[_v-83cf690a]{margin-top:40px;color:#999;font-size:14px;line-height:1.5}div.products-img-list>ul[_v-83cf690a]{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-top:32px}div.products-img-list>ul>li[_v-83cf690a],div.products-img-list>ul[_v-83cf690a]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}div.products-img-list>ul>li[_v-83cf690a]{width:23%;margin:8px 4px;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column}div.products-img-list>ul>li>img[_v-83cf690a]{height:260px;width:100%}div.products-img-list>ul>li>span[_v-83cf690a]{-ms-flex-item-align:center;align-self:center;margin-top:2px}div.products-bottom[_v-83cf690a]{color:#fff;margin-top:70px;margin-bottom:1px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:100px 0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#5d94fb url("http://11149325.s21i-11.faiusr.com/2/ABUIABACGAAgo-itvAUo0-L9zQEwgA849AM.jpg") no-repeat 50%}div.products-bottom>h1[_v-83cf690a],div.products-bottom>span[_v-83cf690a]{-ms-flex-item-align:center;align-self:center}div.products-bottom>span[_v-83cf690a]{font-size:18px;margin-top:8px}',"",{version:3,sources:["/./src/tab/Product.vue"],names:[],mappings:"AA4BA,wBACE,WAAY,AACZ,aAAc,AACd,eAAgB,AAChB,gBAAiB,AACjB,cAAe,AACf,aAAc,AACd,cAAe,AACf,kBAAmB,AACnB,UAAW,AACX,gHAAkH,CACnH,AAED,kCACE,UAAW,AACX,oBAA0B,AAC1B,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,qBAAuB,CAChC,AAED,iDACE,cAAe,AACf,eAAgB,AAChB,cAAgB,CACjB,AAED,oDACE,gBAAiB,AACjB,WAAY,AACZ,eAAgB,AAChB,eAAiB,CAClB,AAED,sCAIE,8BAA+B,AAE3B,uBAAwB,AACpB,mBAAoB,AAC5B,mBAAoB,AAChB,eAAgB,AACpB,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,eAAiB,CAClB,AAED,+EAfE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AAEd,4BAA8B,CAsB/B,AAXD,yCACE,UAAW,AAEX,eAAgB,AAIhB,4BAA6B,AAEzB,0BAA2B,AACvB,qBAAuB,CAChC,AAED,6CACE,aAAc,AACd,UAAY,CACb,AAED,8CACE,2BAA4B,AACxB,kBAAmB,AACvB,cAAgB,CACjB,AAED,iCACE,WAAe,AACf,gBAAiB,AACjB,kBAAmB,AACnB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,gBAAiB,AACjB,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,oHAAyH,CAC1H,AAOD,0EAJE,2BAA4B,AACxB,iBAAmB,CAQxB,AALD,sCACE,eAAgB,AAGhB,cAAgB,CACjB",file:"Product.vue",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ndiv.numImg[_v-83cf690a] {\n  width: 100%;\n  height: 300px;\n  cursor: default;\n  overflow: hidden;\n  display: block;\n  outline: none;\n  margin: 0 auto;\n  position: relative;\n  z-index: 1;\n  background: url("http://11149325.s21i-11.faiusr.com/2/ABUIABACGAAgmsCwvAUoisHD-QUwgA84rAI.jpg") no-repeat 50% 50%;\n}\n\ndiv.products-content[_v-83cf690a] {\n  width: 75%;\n  margin: 120px auto 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\ndiv.products-content > span.sub-title[_v-83cf690a] {\n  color: #1564E9;\n  font-size: 18px;\n  margin-top: 8px;\n}\n\ndiv.products-content > span.product-info[_v-83cf690a] {\n  margin-top: 40px;\n  color: #999;\n  font-size: 14px;\n  line-height: 1.5;\n}\n\ndiv.products-img-list > ul[_v-83cf690a] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 32px;\n}\n\ndiv.products-img-list > ul > li[_v-83cf690a] {\n  width: 23%;\n  /*height: 260px;*/\n  margin: 8px 4px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\ndiv.products-img-list > ul > li > img[_v-83cf690a] {\n  height: 260px;\n  width: 100%;\n}\n\ndiv.products-img-list > ul > li > span[_v-83cf690a] {\n  -ms-flex-item-align: center;\n      align-self: center;\n  margin-top: 2px;\n}\n\ndiv.products-bottom[_v-83cf690a] {\n  color: #ffffff;\n  margin-top: 70px;\n  margin-bottom: 1px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 100px 0;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: #5d94fb url("http://11149325.s21i-11.faiusr.com/2/ABUIABACGAAgo-itvAUo0-L9zQEwgA849AM.jpg") no-repeat center;\n}\n\ndiv.products-bottom > h1[_v-83cf690a] {\n  -ms-flex-item-align: center;\n      align-self: center;\n}\n\ndiv.products-bottom > span[_v-83cf690a] {\n  font-size: 18px;\n  -ms-flex-item-align: center;\n      align-self: center;\n  margin-top: 8px;\n}\n\n'],sourceRoot:"webpack://"}])},,,,,function(t,e,n){var o=n(21);"string"==typeof o&&(o=[[t.id,o,""]]);n(2)(o,{});o.locals&&(t.exports=o.locals)},,,,,function(t,e){t.exports=' <div class=products _v-83cf690a=""> <div class=numImg _v-83cf690a=""></div> <div class=products-content _v-83cf690a=""> <h1 _v-83cf690a="">PRODUCTS</h1> <span class=sub-title _v-83cf690a="">产品展示</span> <span class=product-info _v-83cf690a="">公司遵循“诚信、共享、合作、双赢的发展理念，坚持”以服务、信誉第一“的经营宗旨，致力于网上网下推广和高质量高安全的橡胶商品，以诚信同荣的饱满精神提供给用户最满意的产品。我们自产自销，物美价廉。是您最佳的选择！</span> <div class=products-img-list _v-83cf690a=""> <ul _v-83cf690a=""> <li v-for="item in list" @click=showPopup(item) _v-83cf690a=""> <img :src=item.image alt="" _v-83cf690a=""> <span _v-83cf690a="">{{item.title}}</span> </li> </ul> </div> </div> <div class=products-bottom _v-83cf690a=""> <h1 _v-83cf690a="">客户至上,为客户创造最大价值</h1> <span _v-83cf690a="">CUSTOMER FIRST,TO CREAT THE GREATST CALUE</span> </div> <popup-detail v-if=show :item.sync=currentItem :show.sync=show _v-83cf690a=""></popup-detail> </div> '},,,,,,,,,,function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),A=o(i);e["default"]={methods:{showPopup:function(t){this.currentItem=t,this.show=!this.show}},data:function(){return{show:!1,currentItem:void 0,list:[{image:"http://oh4v7btvw.bkt.clouddn.com/%E7%AC%AC%E4%B8%89%E4%BB%A3%E7%A1%AC%E7%BA%BF%E7%BB%B3%E9%AB%98%E5%93%81%E8%B4%A8%E4%B8%89%E8%A7%92%E5%B8%A6.jpg",title:"第三代硬线绳高品质三角带",desc:"公司率先在国内研发成功新一代高品质包布三角带（即第三代新品聚酯硬线绳三角带），填补国内空白，质量达到国际先进水平，荣获国家重点新产品、国家发明专利。以“四大核心”创新创造精品，新材料：高模低缩硬线绳骨架材料，优质橡胶及助剂新材料；新工艺：具有自主知识产权国家发明专利的全新独创的制造工艺；新配方：氯丁胶多胶种复合材料；新装备：具有国际一流水平的智能装备生产线。拥有卓越性能，国际先进水平：高强度、耐冲击、大功率超负荷不伸长、耐高温、耐油、免调整，特别适用重型机械传动，摩擦系数大，传递效率高，使用寿命长。高品质包布V带是在普通V带的基础上进行材料工艺上的革新：一是拉伸强度提高了10%以上，最大特点运转过程中不易伸长，而传统三角带易伸长，特别在C、D型高负荷工况下非常明显。二是A、B型参考力伸张率降到≤4%,普通V带的标准为≤8%。三是实际寿命比普通V带标准大大提高。四是其创新点在于由传统的软聚酯线绳改变为硬聚酯线绳，从而大大提高了线绳强度和减少收缩，同时研究浸胶布配方、线绳浸胶配方，粘合、伸张胶配方，底胶配方，并采用切割式工艺，属国内首创，填补了国内空白。本公司硬线绳三角带经过几年的推广与发展，深受用户的好评，产品供不应求，已初步形成替代聚酯软线绳老产品的趋势。"},{image:"http://oh4v7btvw.bkt.clouddn.com/%E9%AB%98%E9%80%9F%E9%98%B2%E6%B2%B9%E5%B8%A6.jpg",title:"高速防油带",desc:"有SPZ.SPA.SPB.SPC.3V.5V.8V等型号"},{image:"http://oh4v7btvw.bkt.clouddn.com/%E5%88%87%E8%BE%B9%E5%B8%A61.jpg",title:"切边带",desc:" 切边带上下用包布包住，侧面露面橡胶，为提高挠曲性能而在下层设计有齿型凹槽的V型带。 有10.13.17.22.XPZ.XPA.XPB.XPC等型号"},{image:"http://oh4v7btvw.bkt.clouddn.com/%E5%86%9C%E6%9C%BA%E5%B8%A6%E3%80%81%E6%94%B6%E5%89%B2%E6%9C%BA%E7%9A%AE%E5%B8%A6.jpg",title:"农机带、收割机皮带",desc:" 随着联合收割机，插秧机等农机变得高性能化和更加紧凑，皮带反响挠曲严重，发热量大且突发荷载的冲击增大等现象越来越多，原有的皮带显然无法满足与之相应的质量要求。<br>“贝丰”农机带进行了重大的技术革新，在生产工艺上融合了包布V带与切边V带的优点，在工艺装备上采用了国际领先的膨胀鼓成型设备，主体材料采用耐挠曲性，耐热性，耐油性、耐磨极佳的复合材料，骨架材料采用特制的聚酯硬线或芳纶线精制而成，完全满足了农机的特殊使用要求，产品质量达到国际先进水平，完全能替代原机配套皮带。 <br>“贝丰”农机带主要产品有：农机变速V带HG、HH、HI、HJ、HK、HL、HM、HN、HO系列；水稻收割机皮带SA、SB、SC系列（阪东SA、SB、SC型，东一LA、LB、LC型）；联组V带系列。产品应用于全喂式联合收割机、半喂式联合收割机等农业机械设备。 <br><br>水稻收割机皮带： <br>据调查，水稻收割机的故障率较高，而且皮带、轴承等易损件的断裂、磨损依然是影响联合收割机可靠性的主要因素之一。为之，本公司增加技术投入，引进国外先进技术生产水稻收割机皮带，攻克皮带易断裂、磨损等难题，产品经多家生产企业配套使用，一致认为质量已达到国际先进水平。水稻收割机皮带有SA、SB、SC系列（阪东SA、SB、SC型，东一LA、LB、LC型）。 "},{image:"http://oh4v7btvw.bkt.clouddn.com/%E5%8F%98%E9%80%9F%E5%B8%A6%EF%BC%8C%E6%97%A0%E6%9E%81%E5%8F%98%E9%80%9F%E5%B8%A6.jpg",title:"变速带，无极变速带",desc:"无极变速带具有结构简单，传到平稳，能吸收振动，维修方便，可以实现无极变速。"},{image:"http://oh4v7btvw.bkt.clouddn.com/%E5%88%87%E8%BE%B9%E5%B8%A6.jpg",title:"切边带",desc:"切边带上下用包布包住，侧面露面橡胶，为提高挠曲性能而在下层设计有齿型凹槽的V型带。"},{image:"http://oh4v7btvw.bkt.clouddn.com/%E9%AB%98%E5%93%81%E8%B4%A8%E5%8C%85%E5%B8%83%E5%B8%A6%EF%BC%8C%E5%8C%85%E5%B8%83V%E5%B8%A6.jpg",title:"高品质包布带，包布V带",desc:"公司率先在国内研发成功新一代高品质包布三角带（即第三代新品聚酯硬线绳三角带），填补国内空白，质量达到国际先进水平，荣获国家重点新产品、国家发明专利。以“四大核心”创新创造精品，新材料：高模低缩硬线绳骨架材料，优质橡胶及助剂新材料；新工艺：具有自主知识产权国家发明专利的全新独创的制造工艺；新配方：氯丁胶多胶种复合材料；新装备：具有国际一流水平的智能装备生产线。拥有卓越性能，国际先进水平：高强度、耐冲击、大功率超负荷不伸长、免调整，特别适用重型机械传动，摩擦系数大，传递效率高，使用寿命长。 <br>高品质包布V带是在普通V带的基础上进行材料工艺上的革新：一是拉伸强度提高了10%以上，最大特点运转过程中不易伸长，而传统三角带易伸长，特别在C、D型高负荷工况下非常明显。二是A、B型参考力伸张率降到≤4%,普通V带的标准为≤8%。三是实际寿命比普通V带标准大大提高。四是其创新点在于由传统的软聚酯线绳改变为硬聚酯线绳，从而大大提高了线绳强度和减少收缩，同时研究浸胶布配方、线绳浸胶配方，粘合、伸张胶配方，底胶配方，并采用切割式工艺，属国内首创，填补了国内空白。 <br>本公司硬线绳三角带经过几年的推广与发展，深受用户的好评，产品供不应求，已初步形成替代聚酯软线绳老产品的趋势。"},{image:"http://oh4v7btvw.bkt.clouddn.com/%E6%B1%BD%E8%BD%A6%E5%90%8C%E6%AD%A5%E5%B8%A6.jpg",title:"汽车同步带",desc:"同步带传动是利用带齿于带轮的啮合来传递动力的一种新型的传动方式，它兼有齿轮传动，链传动和带传动的各种优点。"},{image:"http://oh4v7btvw.bkt.clouddn.com/%E5%B7%A5%E4%B8%9A%E5%90%8C%E6%AD%A5%E5%B8%A6.jpg",title:"工业同步带",desc:"同步带传动是利用带齿于带轮的啮合来传递动力的一种新型的传动方式，它兼有齿轮传动，链传动和带传动的各种优点。"},{image:"http://oh4v7btvw.bkt.clouddn.com/%E8%81%94%E7%BB%84V%E5%B8%A6%EF%BC%8C%E8%81%94%E7%BB%84V%E5%9E%8B%E5%B8%A6.jpg",title:"联组V带，联组V型带",desc:"联组型V带上由具有高模量线绳和特殊配方的氯丁胶化合物组成，一次成型硫化，具有良好的整体性。各条带受力均匀，运行平稳，承载传力高，使用寿命长不易抖动和翻带，适用于脉动负荷和有冲击振动的场合，特别适用于高直地面的平行轴传动。 <br><br>需要在一个带轮套上几条V型带时，按照所需数目进行连接而成的胶带，防止因带长不一造成寿命降低。"},{image:"http://oh4v7btvw.bkt.clouddn.com/%E8%BE%93%E9%80%81%E5%B8%A6%EF%BC%8C%E5%B0%BC%E9%BE%99%E8%BE%93%E9%80%81%E5%B8%A6%EF%BC%8C%E8%81%9A%E6%B0%A8%E9%85%AF%E8%BE%93%E9%80%81%E5%B8%A6.jpg",title:"输送带，尼龙输送带，聚氨酯输送带",desc:"贝丰输送带，产品包括：尼龙输送带，聚氨酯输送带，普通输送带，耐热输送带，耐油输送带，耐酸碱输送带，环形输送带。"},{image:"http://oh4v7btvw.bkt.clouddn.com/%E5%90%8C%E6%AD%A5%E5%B8%A6%E8%BD%AE%EF%BC%8C%E4%BC%A0%E5%8A%A8%E5%B8%A6%E8%BD%AE.jpg",title:"同步带轮，传动带轮",desc:"1. 本公司生产的带轮既为国产化设备的同步带配套，又能代替进口带轮使用； <br>2. 用户定制同步带轮，请提供带轮图纸（图中可不必绘制带轮的齿形尺寸），本公司也可按用户提供的型号，带轮内孔，键槽，宽度等尺寸为用户绘制轮带图纸；也可以为用户提供测绘带轮等服务； <br>3. 同步带轮的外径公差，端面跳动量，径向跳动量符合表1，表2，表3，规定； <br>4. 各种规格型号的同步带选用带轮齿面宽度须符合表4规定要求； <br>5. 带轮的外径，档边尺寸按附表现规定选用； <br>6. 附表中没有列出的带轮规格，本公司也可生产； <br>7. 制造带轮用材质以碳素钢为主，如需要也可以用铝合金，尼龙等材料加工；带轮外径大于250mm，采用铸铁。"}]}},components:{PopupDetail:A["default"]}}},,,,,function(t,e,n){var o,i;n(26),o=n(41),i=n(31),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}]);
//# sourceMappingURL=2.82bda58bd57865da977f.js.map