(this.webpackJsonpinter_scrap_ra=this.webpackJsonpinter_scrap_ra||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),a=n(4),i=n.n(a),l=(n(14),n(5)),o=n(6),h=n(2),d=n(8),j=n(7),u=(n(15),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).state={itemReviews:[],search_string:""},c.handleChange=c.handleChange.bind(Object(h.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(h.a)(c)),c.getCookie=c.getCookie.bind(Object(h.a)(c)),c}return Object(o.a)(n,[{key:"getCookie",value:function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var r=n[c].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t}},{key:"handleChange",value:function(e){var t=e.target.value;this.setState({search_string:t})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=this.state.search_string,c="/scrap/"+n.replace(" ","");console.log("ITEM",n.replace("%20","")),fetch(c).then((function(e){return e.json()})).then((function(e){return t.setState({itemReviews:e,search_string:""})})).catch((function(e){console.log("ERROR:",e)}))}},{key:"render",value:function(){var e=this.state.itemReviews;return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("form",{onSubmit:this.handleSubmit,className:"form-wrapper",children:[Object(c.jsx)("input",{onChange:this.handleChange,className:"form-control",value:this.state.search_string,type:"text",placeholder:"Search a product",name:"search_string"}),Object(c.jsx)("input",{className:"btn btn-primary center-item",type:"submit",placeholder:"Search"})]}),Object(c.jsxs)("div",{className:"review-wrapper flex-wrapper",children:[Object(c.jsx)("span",{style:{flex:1},children:"Product"}),Object(c.jsx)("span",{style:{flex:1},children:"Customer"}),Object(c.jsx)("span",{style:{flex:1},children:"Rating"}),Object(c.jsx)("span",{style:{flex:1},children:"heading"}),Object(c.jsx)("span",{style:{flex:2},children:"Comment"})]}),Object(c.jsx)("div",{className:"review-wrapper",children:e.map((function(e,t){return Object(c.jsxs)("div",{className:"review-wrapper flex-wrapper",children:[Object(c.jsx)("div",{style:{flex:1},children:Object(c.jsx)("span",{children:e.product})}),Object(c.jsx)("div",{style:{flex:1},children:Object(c.jsx)("span",{children:e.customer})}),Object(c.jsx)("div",{style:{flex:1},children:Object(c.jsx)("span",{children:e.rating})}),Object(c.jsx)("div",{style:{flex:1},children:Object(c.jsx)("span",{children:e.heading})}),Object(c.jsx)("div",{style:{flex:2},children:Object(c.jsx)("span",{children:e.comment})})]},t)}))})]})}}]),n}(s.a.Component)),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.0ce37526.chunk.js.map