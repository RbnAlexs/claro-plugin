(()=>{"use strict";var e,t={194:()=>{const e=window.React,t=window.wp.blocks,r=window.wp.i18n,o=window.wp.blockEditor,a=window.wp.data,l=window.wp.element,n=(0,a.withSelect)((e=>{const{getEntityRecords:t}=e("core");return{categories:t("taxonomy","category",{post:e("core/editor").getCurrentPostId()})||[]}}))((function({attributes:t,setAttributes:a,categories:n}){const{className:c}=t,s=n.length>0?n[0].slug:"default-class";return(0,l.useEffect)((()=>{n.length>0&&a({classCategory:n[0].slug}),s!==c&&a({className:s})}),[n,s,c,a]),(0,e.createElement)("div",{...(0,o.useBlockProps)(),className:s},(0,e.createElement)(o.RichText,{tagName:"h2",value:t.title,allowedFormats:["core/bold","core/italic"],onChange:e=>{a({title:e})},placeholder:(0,r.__)("Add a title","claro-plugin")}),(0,e.createElement)(o.RichText,{tagName:"p",value:t.description,allowedFormats:["core/bold","core/italic"],onChange:e=>{a({description:e})},placeholder:(0,r.__)("Add a description","claro-plugin")}),(0,e.createElement)("div",{className:"instructions"},(0,e.createElement)("span",null,"Current Category: ",s),(0,e.createElement)("br",null),(0,e.createElement)("span",null,"Current CSS Class: ",c),(0,e.createElement)("br",null),(0,e.createElement)("span",null,"If you changed your main category and it doesn't match with out palette color, please reload your editor and update to view your changes in front-end.")))})),c=JSON.parse('{"u2":"create-block/claro-plugin"}');(0,t.registerBlockType)(c.u2,{edit:n,save:function({attributes:t}){const{className:r,classCategory:a,title:l,description:n}=t;return console.log(t),console.log("classCategory: "+a),console.log("className: "+r),(0,e.createElement)("div",{className:a||r},(0,e.createElement)(o.RichText.Content,{tagName:"h2",value:t.title}),(0,e.createElement)(o.RichText.Content,{tagName:"p",value:t.description}))},supports:{multiple:!1},deprecated:[{attributes:{},save:({attributes:e})=>{}}]});const{addFilter:s}=wp.hooks,{select:i}=wp.data;s("editor.BlockListBlock","my-plugin/with-inspector-controls",(function(t){return function(r){return"create-block/claro-plugin"===r.name&&"post"!==i("core/editor").getCurrentPostType()?null:(0,e.createElement)(t,{...r})}}))}},r={};function o(e){var a=r[e];if(void 0!==a)return a.exports;var l=r[e]={exports:{}};return t[e](l,l.exports,o),l.exports}o.m=t,e=[],o.O=(t,r,a,l)=>{if(!r){var n=1/0;for(u=0;u<e.length;u++){for(var[r,a,l]=e[u],c=!0,s=0;s<r.length;s++)(!1&l||n>=l)&&Object.keys(o.O).every((e=>o.O[e](r[s])))?r.splice(s--,1):(c=!1,l<n&&(n=l));if(c){e.splice(u--,1);var i=a();void 0!==i&&(t=i)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[r,a,l]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var a,l,[n,c,s]=r,i=0;if(n.some((t=>0!==e[t]))){for(a in c)o.o(c,a)&&(o.m[a]=c[a]);if(s)var u=s(o)}for(t&&t(r);i<n.length;i++)l=n[i],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(u)},r=globalThis.webpackChunkclaro_plugin=globalThis.webpackChunkclaro_plugin||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var a=o.O(void 0,[431],(()=>o(194)));a=o.O(a)})();