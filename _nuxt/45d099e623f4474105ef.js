(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1463:function(t,e,r){"use strict";r(1464)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},1464:function(t,e,r){var n=r(28),c=r(37),o=r(60),d=/"/g,l=function(t,e,r,n){var c=String(o(t)),l="<"+e;return""!==r&&(l+=" "+r+'="'+String(n).replace(d,"&quot;")+'"'),l+">"+c+"</"+e+">"};t.exports=function(t,e){var r={};r[t]=e(l),n(n.P+n.F*c((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",r)}},1474:function(t,e,r){"use strict";r.r(e);r(59),r(35),r(33),r(24),r(54),r(1463);var n=r(27),c=r(75);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d=r(11).isAddress,l={data:function(){return{address:null,link:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.d)("metamask",["ethAccount"]),{checkAddress:function(){return!this.address||"0x0000000000000000000000000000000000000000"!==this.address&&(("0"===this.address[0]||"x"===this.address[1])&&d(this.address))}}),watch:{ethAccount:function(t,e){e||(this.address=t)},address:function(){this.link=""}},mounted:function(){this.address=this.ethAccount},methods:{generateLink:function(){this.link="".concat(window.location.origin,"/?referrer=").concat(this.address)},copy:function(){var t=this;navigator.clipboard.writeText(this.link).then((function(){t.$buefy.toast.open({message:t.$t("copied"),type:"is-primary"})}))}}},f=r(17),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"m-container"},[r("div",{staticClass:"token-field"},[r("div",{staticClass:"title"},[t._v(t._s(t.$t("referralProgram")))]),t._v(" "),r("div",{staticClass:"subtitle"},[t._v(t._s(t.$t("referralProgramDesc")))]),t._v(" "),r("label",{staticClass:"label"},[t._v(t._s(t.$t("address")))]),t._v(" "),r("b-field",{attrs:{grouped:""}},[r("b-field",{attrs:{type:t.checkAddress?"":"is-danger",message:t.checkAddress?"":t.$t("wrongAddress"),expanded:""}},[r("b-input",{model:{value:t.address,callback:function(e){t.address=e},expression:"address"}})],1),t._v(" "),r("p",{staticClass:"control"},[r("button",{staticClass:"button is-primary",attrs:{disabled:!t.address||!t.checkAddress},on:{click:t.generateLink}},[t._v("\n          "+t._s(t.$t("generateButton"))+"\n        ")])])],1),t._v(" "),t.link?r("div",[r("a",{staticClass:"button is-text-link has-merkle-link",attrs:{href:t.link}},[t._v(t._s(t.link))]),t._v(" "),r("div",{staticClass:"buttons is-centered"},[r("b-button",{staticClass:"is-next",attrs:{type:"is-primary"},on:{click:t.copy}},[t._v("\n          "+t._s(t.$t("copyLink"))+"\n        ")])],1)]):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports}}]);