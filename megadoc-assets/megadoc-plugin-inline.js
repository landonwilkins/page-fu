exports["megadoc-plugin-inline"]=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";t.name="megadoc-plugin-inline",t.outletOccupants=[{name:"Layout::NotFound",key:"Inline::NotFound",component:n(2)}]},function(e,t,n){"use strict";var r=n(3),o=r.PropTypes,a=r.createClass({displayName:"NotFound",propTypes:{redirectUrl:o.string.isRequired},render:function(){return r.createElement("div",{className:"not-found"},r.createElement("div",null,r.createElement("div",{className:"icon icon-earth margin-tb-s",style:{fontSize:"196px"}}),r.createElement("p",null,"While the Earth ",r.createElement("em",null,"is")," huge, you seem to have hit somewhere that just doesn't exist!")),r.createElement("div",{className:"margin-tb-m"},r.createElement("a",{href:this.props.redirectUrl},"Okay, take me somewhere that ",r.createElement("em",null,"does")," exist.")))}});e.exports=a},function(e,t){e.exports=MEGADOC_PUBLIC_MODULES.react}]);