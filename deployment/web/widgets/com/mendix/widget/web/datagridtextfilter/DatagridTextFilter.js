define(["react"],(function(e){"use strict";var t,a,l=(function(e){
/*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
!function(){var t={}.hasOwnProperty;function a(){for(var e=[],l=0;l<arguments.length;l++){var r=arguments[l];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)&&r.length){var u=a.apply(null,r);u&&e.push(u)}else if("object"===n)for(var s in r)t.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):window.classNames=a}()}(a={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&a.path)}},a.exports),a.exports);const r=({className:t,bootstrapStyle:a,children:r})=>e.Children.count(r)>0?e.createElement("div",{className:l("alert alert-".concat(a),t)},r):null;var n;r.displayName="Alert",function(e){e.Number="number",e.DateTime="datetime"}(n||(n={}));const u=[{value:"contains",label:"Contains"},{value:"startsWith",label:"Starts with"},{value:"endsWith",label:"Ends with"},{value:"greater",label:"Greater than"},{value:"greaterEqual",label:"Greater than or equal"},{value:"equal",label:"Equal"},{value:"notEqual",label:"Not equal"},{value:"smaller",label:"Smaller than"},{value:"smallerEqual",label:"Smaller than or equal"}];function s(t){const[a,r]=e.useState(t.defaultFilter),[n,s]=e.useState(!1),o=e.useRef(null);var i,c;i=o,c=()=>s(!1),e.useEffect((()=>{const e=e=>{i.current&&!i.current.contains(e.target)&&c()};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[i,c]);const d=e.useCallback((e=>{r(e),t.onChange(e),s(!1)}),[t.onChange]);return e.createElement("div",{className:"filter-selector"},e.createElement("div",{className:"filter-selector-content",ref:o},e.createElement("button",{"aria-controls":"".concat(t.name,"-filter-selectors"),"aria-expanded":n,"aria-haspopup":!0,"aria-label":t.ariaLabel,className:l("btn btn-default filter-selector-button button-icon",a),onClick:()=>s((e=>!e))}," "),n&&e.createElement("ul",{id:"".concat(t.name,"-filter-selectors"),className:"filter-selectors",role:"menu","data-focusindex":0},u.map(((t,r)=>e.createElement("li",{className:l({"filter-selected":a===t.value}),key:r,onClick:()=>d(t.value),onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),d(t.value))},role:"menuitem",tabIndex:0},e.createElement("div",{className:l("filter-icon",t.value),"aria-hidden":!0}),e.createElement("div",{className:"filter-label"},t.label)))))))}function o(t){var a;const[r,n]=e.useState(t.defaultFilter),[u,o]=e.useState(""),[i,c]=e.useState(""),d=e.useRef(null);e.useEffect((()=>{t.value&&(c(t.value),o(t.value))}),[t.value]),e.useEffect((()=>{t.filterDispatcher&&t.filterDispatcher({filter:(e,t)=>{if(!u)return!0;const a=t.get(e).displayValue.toLowerCase();if(!a)return!1;const l=u.toLowerCase();switch(r){case"contains":return a.includes(l);case"startsWith":return a.startsWith(l);case"endsWith":return a.endsWith(l);case"greater":return a>l;case"greaterEqual":return a>=l;case"equal":return a===l;case"notEqual":return a!==l;case"smaller":return a<l;case"smallerEqual":return a<=l}}})}),[t.filterDispatcher,u,r]);const m=e.useCallback(((e,t)=>{let a=null;return(...l)=>{null!==a&&(clearTimeout(a),a=null),a=setTimeout((()=>e(...l)),t)}})((e=>o(e)),t.delay),[t.delay]),f=e.useCallback((()=>{d.current&&d.current.focus()}),[d]);return e.createElement("div",{className:"filter-container","data-focusindex":null!==(a=t.tabIndex)&&void 0!==a?a:0},t.adjustable&&e.createElement(s,{ariaLabel:t.screenReaderButtonCaption,name:t.name,defaultFilter:t.defaultFilter,onChange:e=>{n(e),f()}}),e.createElement("input",{"aria-label":t.screenReaderInputCaption,className:l("form-control",{"filter-input":t.adjustable}),onChange:e=>{c(e.target.value),m(e.target.value)},placeholder:t.placeholder,ref:d,type:"text",value:i}))}return function(t){const a=window["com.mendix.widgets.web.datagrid.filterContext"],l=e.createElement(r,{bootstrapStyle:"danger"},"The data grid text filter widget must be placed inside the header of the Data grid 2.0 widget.");return(null==a?void 0:a.Consumer)?e.createElement(a.Consumer,null,(a=>{var r,n,u,s;return a?e.createElement(o,{adjustable:t.adjustable,defaultFilter:t.defaultFilter,delay:t.delay,filterDispatcher:a,name:t.name,placeholder:null===(r=t.placeholder)||void 0===r?void 0:r.value,screenReaderButtonCaption:null===(n=t.screenReaderButtonCaption)||void 0===n?void 0:n.value,screenReaderInputCaption:null===(u=t.screenReaderInputCaption)||void 0===u?void 0:u.value,tabIndex:t.tabIndex,value:null===(s=t.defaultValue)||void 0===s?void 0:s.value}):l})):l}}));
