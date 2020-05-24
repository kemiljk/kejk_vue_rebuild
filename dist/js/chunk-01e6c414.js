(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01e6c414"],{a523:function(t,e,a){"use strict";a("99af"),a("4de4"),a("b64b"),a("2ca0"),a("20f6"),a("4b85"),a("a15b"),a("498a");var o=a("a026");function n(t){return o["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,a){var o=a.props,n=a.data,i=a.children;n.staticClass="".concat(t," ").concat(n.staticClass||"").trim();var r=n.attrs;if(r){n.attrs={};var s=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}));s.length&&(n.staticClass+=" ".concat(s.join(" ")))}return o.id&&(n.domProps=n.domProps||{},n.domProps.id=o.id),e(o.tag,n,i)}})}var i=a("d9f7");e["a"]=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var a,o=e.props,n=e.data,r=e.children,s=n.attrs;return s&&(n.attrs={},a=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),o.id&&(n.domProps=n.domProps||{},n.domProps.id=o.id),t(o.tag,Object(i["a"])(n,{staticClass:"container",class:Array({"container--fluid":o.fluid}).concat(a||[])}),r)}})},d5d5:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-left"},[a("v-col",{attrs:{cols:"12"}},[a("v-btn",{attrs:{to:"/posts"}},[a("v-icon",{staticClass:"mr-2"},[t._v(" mdi-chevron-left ")]),t._v("Back ")],1),a("h1",{staticClass:"display-2 font-weight-bold mb-3 mt-10"},[t._v(" From Regular Designer to Frontend Designer. ")]),a("h2",{staticClass:"headline font-weight-bold mb-3 mt-10"},[t._v(" What learning Vue has taught me about the future of design. ")])],1)],1),a("v-row",{staticClass:"text-left"},[a("v-col",{attrs:{cols:"12"}},[a("p",[t._v("So let's start with some background; I've been tinkering with website code since the early 2000's when MySpace was first on the scene and I was trying to customise the look of my personal MySpace page.")]),a("p",[t._v("At that time, it involved a hell of a lot of inline styling and hacking around to find out what would work and what wouldn't. Thanks to the beauty of 'View Source', it was possible to see the detail of what another person had done, pull that code, and tweak to your heart's content until you broke it again.")]),a("p",[t._v("After MySpace died and I moved on to other, less emo, things I found myself falling away from programming. That was until I started a job in healthcare leading the digital design and development of projects. This all came about organically but I was kinda out of my depth.")]),a("p",[t._v("Luckily, I had a great relationship with the core developer on our team and over time started to tinker again, this time though, in production code (mostly because I did the crappy little jobs that he liked not having to do).")]),a("p",[t._v("What I started to learn, was the magic of development-based design, or frontend design, where I would manipulate the UI (or DOM) inside the browser itself to see how I preferred things. It felt like the old days of tinkering on MySpace again.")]),a("p",[t._v("The more I did it, the more I enjoyed the experience of designing in the browser. I'm not saying you should go away completely from using design tools (I still heavily use "),a("a",{staticClass:"teal--text",attrs:{href:"https://adobe.com/xd",target:"_blank"}},[t._v("Adobe XD")]),t._v(" and "),a("a",{staticClass:"teal--text",attrs:{href:"http://figma.com",target:"_blank"}},[t._v("Figma")]),t._v("), but I am saying that understanding how to design in code is a super power that all digital designers should aim to posess.")]),a("p",[t._v("Here are the key reasons why:")]),a("ol",{staticClass:"mb-3"},[a("li",[t._v("You can see the direct effect of a decision, in the browser, in real time")]),a("li",[t._v("You can learn the langauge of development, allowing for better cross-communication between you and your development team")]),a("li",[t._v("You can increase your output at your company, enabling developers to focus on the logic and complexities whilst you manipulate the styling in production code")]),a("li",[t._v("You can improve your ability to work independently on client projects as a freelancer")])]),a("p",[t._v(" The idea of the Frontend Designer "),a("a",{staticClass:"teal--text",attrs:{href:"https://bradfrost.com/blog/post/frontend-design/",target:"_blank"}},[t._v("isn't new")]),t._v(" but it certainly isn't widespread either. I strongly believe that this hybrid role is the future of design and, with the flexibility of "),a("a",{staticClass:"teal--text",attrs:{href:"https://www.webcomponents.org/",target:"_blank"}},[t._v("Web Components")]),t._v(" and powerful frameworks like Vue, React and Angular enabling better component-driven design, Designers understanding code is going to be more important than ever. ")]),a("p",[t._v(" If you're looking to evolve beyond HTML and CSS as a designer, but find JavaScript scary as hell (like I did) then check out "),a("a",{staticClass:"teal--text",attrs:{href:"https://vuejs.org/",target:"_blank"}},[t._v("Vue")]),t._v(" and follow their extremely powerful and easy to follow documentation. ")])])],1)],1)},n=[],i={name:"FrontendDesigner"},r=i,s=a("2877"),l=a("6544"),d=a.n(l),c=a("8336"),h=a("62ad"),u=a("a523"),p=a("132d"),f=a("0fd9"),g=Object(s["a"])(r,o,n,!1,null,null,null);e["default"]=g.exports;d()(g,{VBtn:c["a"],VCol:h["a"],VContainer:u["a"],VIcon:p["a"],VRow:f["a"]})}}]);