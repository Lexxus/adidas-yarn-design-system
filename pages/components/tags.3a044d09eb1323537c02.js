webpackJsonp([5],{"9RpU":function(t,s,a){"use strict";var e=a("9hj0");s.a={data:function(){return{tags:["size: 8-","color: scarlet","sport: running","technology: boost"]}},components:{Tag:e.a}}},"9hj0":function(t,s,a){"use strict";var e=a("WFbS"),n=a("ZV5h"),i=a("VU/8")(e.a,n.a,!1,null,null,null);s.a=i.exports},VDMQ:function(t,s,a){"use strict";var e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("page-title",[a("p",[t._v(t._s(t.$t("views.components.name")))]),a("h2",[t._v(t._s(t.$t("views.components-tags.name")))])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-xs-12 col-sm-10 col-sm-offset-1"},[a("section",{staticClass:"section"},[a("h5",[t._v(t._s(t.$t("views.components-tags.horizontal")))]),a("span",{staticClass:"tag-list tag-list--horizontal"},t._l(t.tags,function(t){return a("tag",{key:t,attrs:{label:t}})}))]),a("section",{staticClass:"section"},[a("h5",[t._v(t._s(t.$t("views.components-tags.vertical")))]),a("span",{staticClass:"tag-list tag-list--vertical"},t._l(t.tags,function(t){return a("tag",{key:t,attrs:{label:t}})}))]),a("section",{staticClass:"section"},[a("h5",[t._v(t._s(t.$t("views.components-tags.selected")))]),a("span",{staticClass:"tag-list tag-list--horizontal"},t._l(t.tags,function(t){return a("tag",{key:t,attrs:{label:t,selected:!0}})}))]),a("section",{staticClass:"section"},[a("h5",[t._v(t._s(t.$t("views.components-tags.removable")))]),a("span",{staticClass:"tag-list tag-list--horizontal"},t._l(t.tags,function(t){return a("tag",{key:t,attrs:{label:t,removable:!0}})}))])])])],1)},staticRenderFns:[]};s.a=e},WFbS:function(t,s,a){"use strict";s.a={props:["label","removable","selected"]}},ZV5h:function(t,s,a){"use strict";var e={render:function(){var t=this.$createElement,s=this._self._c||t;return s("span",{staticClass:"tag",class:{"tag--selected":this.selected}},[s("span",{staticClass:"tag__label"},[this._v(this._s(this.label))]),this.removable?s("button",{staticClass:"tag__icon tag__icon--remove yarn-icon yarn-icon--close"}):this._e()])},staticRenderFns:[]};s.a=e},mAO9:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("9RpU"),n=a("VDMQ"),i=a("VU/8")(e.a,n.a,!1,null,null,null);s.default=i.exports}});