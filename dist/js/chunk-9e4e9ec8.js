(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e4e9ec8"],{"7fc1":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{staticClass:"text-left"},[a("v-col",{attrs:{cols:"12"}},[a("v-btn",{attrs:{to:"/portfolio"}},[a("v-icon",{staticClass:"mr-2"},[e._v(" mdi-chevron-left ")]),e._v("Back ")],1),a("v-img",{staticClass:"mt-10 img",attrs:{src:""+e.hero,alt:"core Project Nimbus home page"}}),a("h1",{staticClass:"display-2 font-weight-bold mb-3 mt-10"},[e._v(" Project Nimbus. ")]),a("h2",{staticClass:"headline mb-3 mt-2"},[e._v(" Automation for the non-technical. ")])],1)],1),a("v-row",{staticClass:"text-left"},[a("v-col",{attrs:{cols:"12"}},[a("h3",{staticClass:"mb-4"},[e._v(" What is it? ")]),a("p",[e._v(" Project Nimbus website started after we noticed the significant amount of time it took to launch a website for one of our clients. This issue occurred at both the initial launch phase as well as during any deployment process from "),a("code",[e._v("Dev > Staging > Live")]),e._v(". This website aims to democratise the process of website capture and deployment so that Project Managers are able to do staged deploys without requiring dev support. ")]),a("h4",{staticClass:"mb-4"},[e._v(" My role ")]),a("p",{staticClass:"mt-4"},[e._v(" My role consisted of the following: ")]),a("ul",[a("li",[e._v("Research based on stakeholder whiteboard session")]),a("li",[e._v("Identification and consolidation of core requirements spec")]),a("li",[e._v("Creation of simple user journey diagrams to identify the pain points of developers and project managers")]),a("li",[e._v("Development of information architecture")]),a("li",[e._v("Creation of low-fidelity wireframes")]),a("li",[e._v("Creation of high-fidelity wireframes and prototype")]),a("li",[e._v("Conceptulisation and development of final brand identity and marque")]),a("li",[e._v("Creation of full designs, including a design system and component set")]),a("li",[e._v("Provision of files and functional spec to development")])]),a("section",{attrs:{"aria-label":"summary"}},[a("h4",{staticClass:"mb-4 mt-4"},[e._v(" Summary ")]),a("p",[e._v(" Our internal project teams regularly had to screenshot entire websites, including all popups and modal information to create a consolidated PDF that captures the state of the site at the point of approval. This is a legal and compliance issue for thei clients and is an absolute requirement of all digital jobs due to the fluidity of development. ")]),a("p",[e._v(" We focused on evaluating the core problems and created a wishlist that covered versions 1-1.4 based on prioritisation. The intial featureset will include the ability to trigger a screenshot capture of an entire website with all popups triggered and untriggered. It will also show visibly what IP address the site is currently active on so we know when the site hits the live DNS. The project team will also be capable of pushing the sites between Dev, Staging and Live via simple boolean toggles, check off a common pre-launch checklist, see the site's Google Lighthouse usability score, and both run a browser test on common browsers to get a pass/fail response and also create a sitemap via a single click. ")]),a("p",[e._v(" There's a lot here, but these are all small–medium tasks that were regularly repeated, so creating automated tools to perform these will save countless hours. We estimated that a project manager spends around 6 hours a day completing each of these steps when required. This saving outweighs the initial project build time by many times and was therefore previously given the greenlight by the management team. ")]),a("p",[e._v(" This project is a work in progress and is migrating to be the key focus of "),a("a",{staticClass:"teal--text",attrs:{href:"https://www.kanic.co",target:"_blank"}},[e._v("Kanic")]),e._v(". ")])])])],1),a("v-row",{staticClass:"text-left"},e._l(e.images,(function(e){return a("v-col",{key:""+e.id,attrs:{cols:"12"}},[a("v-img",{staticClass:"img",attrs:{src:""+e.img}})],1)})),1)],1)},s=[],o=a("fac6"),n={name:"Nimbus",data:function(){return{images:o,hero:"https://res.cloudinary.com/kejk/image/upload/v1564640894/nimbusHeader_lkufvy.png"}}},r=n,l=a("2877"),c=a("6544"),d=a.n(c),u=a("8336"),p=a("62ad"),m=a("a523"),h=a("132d"),f=a("adda"),g=a("0fd9"),v=Object(l["a"])(r,i,s,!1,null,null,null);t["default"]=v.exports;d()(v,{VBtn:u["a"],VCol:p["a"],VContainer:m["a"],VIcon:h["a"],VImg:f["a"],VRow:g["a"]})},a523:function(e,t,a){"use strict";a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("20f6"),a("4b85"),a("a15b"),a("498a");var i=a("a026");function s(e){return i["a"].extend({name:"v-".concat(e),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,a){var i=a.props,s=a.data,o=a.children;s.staticClass="".concat(e," ").concat(s.staticClass||"").trim();var n=s.attrs;if(n){s.attrs={};var r=Object.keys(n).filter((function(e){if("slot"===e)return!1;var t=n[e];return e.startsWith("data-")?(s.attrs[e]=t,!1):t||"string"===typeof t}));r.length&&(s.staticClass+=" ".concat(r.join(" ")))}return i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),t(i.tag,s,o)}})}var o=a("d9f7");t["a"]=s("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(e,t){var a,i=t.props,s=t.data,n=t.children,r=s.attrs;return r&&(s.attrs={},a=Object.keys(r).filter((function(e){if("slot"===e)return!1;var t=r[e];return e.startsWith("data-")?(s.attrs[e]=t,!1):t||"string"===typeof t}))),i.id&&(s.domProps=s.domProps||{},s.domProps.id=i.id),e(i.tag,Object(o["a"])(s,{staticClass:"container",class:Array({"container--fluid":i.fluid}).concat(a||[])}),n)}})},fac6:function(e){e.exports=JSON.parse('[{"id":1,"img":"https://res.cloudinary.com/kejk/image/upload/v1564656885/ezgif.com-resize_dsjbed.gif"},{"id":2,"img":"https://res.cloudinary.com/kejk/image/upload/v1564640708/nimbusHeader_nzspy6.png"},{"id":3,"img":"https://res.cloudinary.com/kejk/image/upload/v1588835897/mobile-signup_4_lsa5rx.png"},{"id":4,"img":"https://res.cloudinary.com/kejk/image/upload/v1588835897/mobile-signup_5_e3fglx.png"}]')}}]);