webpackJsonp([4],{"4FLE":function(a,t,e){"use strict";var s={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"tile"},[e("div",{staticClass:"tile__main",style:{backgroundImage:"url("+a.image+")"}},[a.type?e("div",{staticClass:"tile__main--type"},[a._v("\n      "+a._s(a.type)+"\n    ")]):a._e(),a.flag?e("div",{staticClass:"tile__main--flag"},[e("span",{class:"yarn-icon yarn-icon--"+a.flag})]):a._e()]),e("div",{staticClass:"tile__footer"},[e("div",{staticClass:"tile__footer__group"},[a._v(a._s(a.title))]),e("div",{staticClass:"tile__footer__subheader"},[a._t("default")],2)])])},staticRenderFns:[]};t.a=s},OZb6:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("mjpX"),i=e("qW+e"),l=e("VU/8")(s.a,i.a,!1,null,null,null);t.default=l.exports},"Q5/r":function(a,t,e){"use strict";t.a={props:{title:"",image:"",type:"",flag:""}}},mjpX:function(a,t,e){"use strict";var s=e("ycpw");t.a={data:function(){return{shoes:[{title:"ultraboost st parley",description:"HIGH-PERFORMANCE STABILITY RUNNING SHOES MADE WITH RECYCLED MATERIALS.",image:"https://assets.adidas.com/images/w_320,h_320,f_auto,q_80,fl_lossy/3bc4558765284abda0bea8bf0108873e_9366/Zapatilla_Ultraboost_ST_Parley_Azul_AC8207_01_standard.jpg",type:"running",flag:"footwear"},{title:"Gazelle",description:"A ONE-TO-ONE REISSUE OF THE '91 GAZELLES.",image:"https://assets.adidas.com/images/w_320,h_320,f_auto,q_80,fl_lossy/7e9680514ef94bdeb1a0a92600cbb241_9366/Zapatilla_Gazelle_Azul_B41654_01_standard.jpg",type:"originals",flag:"footwear"},{title:"SST Track Jacket",description:"A TRACK JACKET INSPIRED BY HERITAGE SPORT STYLE.",image:"https://assets.adidas.com/images/w_320,h_320,f_auto,q_80,fl_lossy/9388b0fc4be241679864a8c000c092d2_9366/SST_Track_Jacket_Green_DH3166_21_model.jpg",type:"originals",flag:"apparel"},{title:"Trefoil backpack",description:"A BACKPACK WITH CLASSIC TREFOIL STYLE.",image:"https://assets.adidas.com/images/w_320,h_320,f_auto,q_80,fl_lossy/192a53d878c7465fa770a88100fc5730_9366/Trefoil_Backpack_Black_DJ2170_01_standard.jpg",type:"hardware"},{title:"ID Climaheat Beanie",description:"A SOFT KNIT HAT WITH BUILT-IN INSULATION.",image:"https://assets.adidas.com/images/w_320,h_320,f_auto,q_80,fl_lossy/a27eaf6bf6104a09a199a88f00cdbbfc_9366/ID_Climaheat_Beanie_Orange_DJ1214_01_standard.jpg",type:"hardware"},{title:"All Blacks Ball",description:"A HARD-WEARING RUGBY BALL WITH THE MARK OF CHAMPIONS.",image:"https://assets.adidas.com/images/w_2000,h_2000,f_auto,q_90,fl_lossy/527dcdf8581143098c07a8870123f599_9366/All_Blacks_Ball_Grey_CW9596_01_standard.jpg",type:"hardware",flag:"synthetic"}]}},components:{Tile:s.a}}},"qW+e":function(a,t,e){"use strict";var s={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"container"},[e("page-title",[e("p",[a._v(a._s(a.$t("views.components.name")))]),e("h2",[a._v(a._s(a.$t("views.components-tiles.name")))])]),e("section",{staticClass:"section"},[e("div",{staticClass:"row"},a._l(a.shoes,function(t){return e("div",{key:t.title,staticClass:"col-xs-6 col-sm-4 col-lg-3"},[e("tile",{attrs:{title:t.title,image:t.image,type:t.type,flag:t.flag}},[e("div",{staticClass:"tile__footer__subheader__text"},[a._v("\n            "+a._s(t.description)+"\n          ")])])],1)}))])],1)},staticRenderFns:[]};t.a=s},ycpw:function(a,t,e){"use strict";var s=e("Q5/r"),i=e("4FLE"),l=e("VU/8")(s.a,i.a,!1,null,null,null);t.a=l.exports}});