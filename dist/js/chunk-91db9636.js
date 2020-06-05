(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91db9636"],{a4e5:function(t){t.exports=JSON.parse('[{"id":0,"img":"https://res.cloudinary.com/kejk/image/upload/v1590265082/CMC_cvaera.png"},{"id":1,"img":"https://res.cloudinary.com/kejk/image/upload/v1590265082/CMC-1_pxggsu.png"},{"id":2,"img":"https://res.cloudinary.com/kejk/image/upload/v1590265055/CMC_tmgd1c.png"},{"id":3,"img":"https://res.cloudinary.com/kejk/image/upload/v1590265053/CMC-1_lug6rr.png"},{"id":4,"img":"https://res.cloudinary.com/kejk/image/upload/v1590265053/CMC-2_y4r2nq.png"},{"id":5,"img":"https://res.cloudinary.com/kejk/image/upload/v1590265054/CMC-3_at5irz.png"}]')},a523:function(t,e,a){"use strict";a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("20f6"),a("4b85"),a("a15b"),a("498a");var s=a("a026");function i(t){return s["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var s=a.props,i=a.data,o=a.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var n=i.attrs;if(n){i.attrs={};var r=Object.keys(n).filter((function(t){if("slot"===t)return!1;var e=n[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));r.length&&(i.staticClass+=" ".concat(r.join(" ")))}return s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),e(s.tag,i,o)}})}var o=a("d9f7");e["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,s=e.props,i=e.data,n=e.children,r=i.attrs;return r&&(i.attrs={},a=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),t(s.tag,Object(o["a"])(i,{staticClass:"container",class:Array({"container--fluid":s.fluid}).concat(a||[])}),n)}})},e042:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-left"},[a("v-col",{attrs:{cols:"12"}},[a("v-btn",{attrs:{text:""},on:{click:function(e){return t.$router.go(-1)}}},[a("v-icon",{staticClass:"mr-2"},[t._v(" mdi-arrow-left ")]),t._v("Back ")],1),a("v-img",{staticClass:"mt-10 img cropped",attrs:{src:""+t.hero,alt:"Stint website page"}}),a("h1",{staticClass:"display-2 font-weight-bold mb-3 mt-10"},[t._v(" CMC design challenge. ")]),a("h2",{staticClass:"headline mb-3 mt-2"},[t._v(" Redesign a feature of any product ")]),a("v-row",{staticClass:"mb-4 mt-8 text-left"},[a("v-col",{attrs:{cols:"12",sm:"10"}},[a("h3",[t._v("What was the challenge?")]),a("p",[t._v("Re-think and redesign a single feature within a digital product of your choice that showcases your skills and abilities to solve a complex problem as a designer.")])]),a("v-col",{attrs:{cols:"12",sm:"2"}},[a("h3",[t._v("Time")]),a("p",[a("em",[t._v("3 hours.")])])])],1),a("h3",{staticClass:"mb-4"},[t._v(" Feature selection ")]),a("p",{staticClass:"mb-4"},[t._v(" Microsoft Azure DevOps – the contextual nature of the mysterious plus symbol at the top of the vertical side navigation. ")]),a("v-row",{staticClass:"text-left"},t._l(t.images.slice(0,2),(function(t){return a("v-col",{key:""+t.id,attrs:{cols:"12"}},[a("v-img",{staticClass:"img",attrs:{src:""+t.img}})],1)})),1),a("h4",{staticClass:"mb-4"},[t._v(" My process ")]),a("p",{staticClass:"mb-4"},[t._v(" The current plus button has a consistent but confusing behaviour that often leads to a lot of forgetfulness on how to access the features hidden behind it. This is an ongoing issue across my current team at NeuerEnergy. The button also doesn’t provide any simple queues or affordances to explain its featureset to a user, particularly a new user. ")]),a("h4",{staticClass:"mb-4"},[t._v(" Expectation ")]),a("p",{staticClass:"mb-4"},[t._v(" As a user, particularly a new user, based on placement and my historic experience with buttons placed next to items, I expect that the plus button’s behaviour is directly tied to the label to its left. ")]),a("p",[t._v("Why? It’s contained by a bottom stroke into a box with the left label.")]),a("p",[t._v("The left label also happens to be the organisation name. Based on the list of features below the organisation name and the icon, my expectation as a user is for it to enable me to add a new feature below based on a predefined list (say, if Artifacts wasn’t there, I would be able to enable it/add it.")]),a("p",[t._v("The reality is, those elements are controlled within the Settings panel at the very bottom of the nav (cut off from the screenshot).")]),a("h4",{staticClass:"mb-4"},[t._v(" Reality ")]),a("p",{staticClass:"mb-4"},[t._v(" So what does it actually do? Well, it’s entirely dependent on what item I have selected in the left navigation. And is even as contextually relevant to a sub item in one of those navigation sections (the plus button includes more features in the ‘Backlogs’ view of Boards, than any other section in there). This leads to an overall confusing user experience and is highly undiscoverable and immediately forgettable. ")]),a("h4",{staticClass:"mb-4"},[t._v(" A new reality ")]),a("p",{staticClass:"mb-4"},[t._v(" Context is king, so whilst all four options focus on greater contextual awareness, the solution in Version 4 is the one that I’m choosing to develop further. ")]),a("h4",{staticClass:"mb-4"},[t._v(" Rationale ")]),a("p",{staticClass:"mb-4"},[t._v(" This approach offers a new paradigm whilst also maintaining some behaviour from the existing approach. This ensures that the mental models developed by current users aren’t greatly impacted by the changes and that equally, the experience is both consistent and better. ")]),a("p",[t._v("One of the fundamentally important aspects for me is that it follows the mantra of ‘less, but better’. One that I swear by in both life and in design.")]),a("p",[t._v("I also chose to promote some page-level features up to this new nav to make them more accessible. This includes any other “create new” functions that were top level on the page but not surfaced in the original nav. This provides consistency of experience.")])],1)],1),a("v-row",{staticClass:"text-left"},t._l(t.images.slice(2,6),(function(t){return a("v-col",{key:""+t.id,attrs:{cols:"12"}},[a("v-img",{staticClass:"img",attrs:{src:""+t.img}})],1)})),1),a("v-row",{staticClass:"d-sm-none d-md-flex"},[a("h3",{staticClass:"ml-3 mt-4"},[t._v(" Prototype built in Figma ")]),a("v-col",{attrs:{cols:"12"}},[a("iframe",{staticStyle:{border:"1px solid rgba(0, 0, 0, 0.1)","border-radius":"8px"},attrs:{width:"890",height:"650",src:"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJAgQ0W58e62GIcegDdP6xZ%2FCMC-Task%3Fnode-id%3D7%253A572%26viewport%3D482%252C180%252C0.16739873588085175%26scaling%3Dmin-zoom%26hotspot-hints%3D0&chrome=DOCUMENTATION",allowfullscreen:""}})])],1)],1)},i=[],o=a("a4e5"),n={name:"CMC",data:function(){return{images:o,hero:"https://res.cloudinary.com/kejk/image/upload/v1590260460/dark-environment-with-imac_poutvu.jpg"}}},r=n,l=a("2877"),c=a("6544"),d=a.n(c),h=a("8336"),u=a("62ad"),m=a("a523"),p=a("132d"),f=a("adda"),g=a("0fd9"),v=Object(l["a"])(r,s,i,!1,null,null,null);e["default"]=v.exports;d()(v,{VBtn:h["a"],VCol:u["a"],VContainer:m["a"],VIcon:p["a"],VImg:f["a"],VRow:g["a"]})}}]);