<template>
  <v-container>
    <v-row class="text-left">
      <v-col class="mb-4">
        <v-btn 
          text
          @click="$router.go(-1)" 
        >
          <v-icon class="mr-2">
            mdi-arrow-left
          </v-icon>Back
        </v-btn>
        <h1 class="display-2 font-weight-bold mb-12 mt-10">
          /Uses.
        </h1>
        <p
          class="body-1 mb-3"
        >
          I use a variety of tools to get my work done on a daily basis. Being a designer and frontend developer, I have to switch between two very different but complimentary workflows.
        </p>
        <p
          class="body-1 mb-3"
        >
          As much as possible, I try to integrate these two workflows to reduce cognitive load and improve productivity.
        </p>
        <p
          class="body-1 mb-3"
        >
          I'm primarily a designer first but I learned the fundamentals of web development by hacking other peoples' MySpace pages back when that was a real thing.
        </p>
        <p class="body-1 mb-3">
          Now, I'm exploring building frontends in
          <a
            href="http://vuejs.org"
            target="_blank"
            rel="noreferrer"
            class="teal--text"
          >Vue.js</a> and utilising the amazing
          <a
            href="http://vuetifyjs.com"
            target="_blank"
            rel="noreferrer"
            class="teal--text"
          >Vuetify</a> library. As a developer who started with bare HTML and CSS and stayed that way for a while, I couldn't recommend Vue more to designers who're looking to code. Primarily building your application in semantic HTML whilst leveraging the power of JavaScript makes it a one of a kind framework that allows me to write fast, performant code.
        </p>
        <p class="body-1 mb-3">
            I'm also now exploring the wonders of <a
            href="https://developer.apple.com/documentation/swiftui"
            target="_blank"
            rel="noreferrer"
            class="teal--text"
          >SwiftUI</a> which is leading to a whole new experience of developing. 
        </p>
      </v-col>
    </v-row>
    <v-divider />
    <v-row class="text-left">
      <v-col
        class="mb-4 mt-4"
        cols="12"
      >
        <h3 class="headline font-weight-bold mb-3">
          Design.
        </h3>
        <p
          class="body-1 mb-3"
        >
          My design tools are simple and straightforward. I keep it lean and minimal.
        </p>
        <ul class="body-1 mb-4">
          <li class="mb-3">
            <a
              href="https://www.figma.com"
              target="_blank"
              rel="noreferrer"
              class="teal--text"
            >Figma</a> is my design tool of choice. It's constantly updated and has such a flexible and vast ecosystem of plugins that I can't see myself using anything else. You can find me over at
            <a
              href="https://www.figma.com/@_kejk"
              target="_blank"
              rel="noreferrer"
              class="teal--text"
            >@_kejk</a> where I've released the <a
            href="https://www.figma.com/community/plugin/837070613195594890/Px-%E2%80%BA%E2%80%BA-Em"
            target="_blank" 
            rel="noreferrer"
            class="teal--text"
          >Px ›› Em</a> plugin.
          </li>
          <li class="mb-3">
            <a
              href="https://developer.apple.com/documentation/swiftui"
              target="_blank"
              rel="noreferrer"
              class="teal--text"
            >SwiftUI</a> is slowly becoming a prototyping and design/build tool for me. It allows me to create custom designs and production-ready code, whilst utilising the constraints of iOS by default. This increases the rate of design exploration but also helps with the final real-world application when working with engineers.
          </li>
          <li>
            <a
              href="https://framer.com/"
              target="_blank"
              rel="noreferrer"
              class="teal--text"
            >Framer</a> is slowly becoming a tool I use more often for more complex prototyping when not building direct in SwiftUI. It's now eaiser than ever to build complex interactions using just the tools at hand whilst also being able to modify and amplify those interactions with knowledge of JavaScript and primarily React.
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-divider />
    <v-row class="text-left">
      <v-col
        class="mb-4 mt-4"
        cols="12"
      >
        <h3 class="headline font-weight-bold mb-3">
          Development.
        </h3>
        <p
          class="body-1 mb-3"
        >
          Like with design, I keep my development toolset minimal but have a few more pieces of software I need.
        </p>
        <ul class="body-1 mb-4">
          <li class="mb-3">
            <strong>Languages:</strong> HTML, CSS/SCSS, JavaScript and Swift
          </li>
          <li class="mb-3">
            <strong>Frameworks / Libraries / Tools:</strong> Vue.js, Veutify, Git, SwiftUI
          </li>
          <li class="mb-3">
            <a
              href="https://www.adobe.com/products/xd.html"
              target="_blank"
              rel="noreferrer"
              class="teal--text"
            >VSCode</a> is my editor of choice. I currently use GitHub's new
            <a
              href="https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme"
              target="_blank"
              rel="noreferrer"
              class="teal--text"
            >GitHub</a> theme with a custom set of a few background colours to create a pure black environment along with
            <a
              href="https://www.jetbrains.com/lp/mono/"
              target="_blank"
              rel="noreferrer"
              class="teal--text"
            >JetBrains Mono</a> as my default code font with ligatures set to true.
          </li>
          <li class="mb-3">
            <a
              href="https://developer.apple.com/xcode/"
              target="_blank"
              rel="noreferrer"
              class="teal--text"
            >Xcode</a> has gotten so much better recently, especially with Xcode 12. Live previews of SwiftUI code make it the defacto choice for iOS prototyping and dev.
          </li>
          <li class="mb-3">
            <a
              href="https://ohmyz.sh"
              target="_blank"
              rel="noreferrer"
              class="teal--text"
            >ZSH</a> is my default terminal shell
            in Hyper with a basic custom theme set.
          </li>
          <li>
            <a
              href="https://www.mozilla.org/en-GB/firefox/developer/"
              target="_blank"
              rel="noreferrer"
              class="teal--text"
            >Firefox Developer Edition</a> is the dev browser I tend to use. It offers
            an extremely powerful set of dev tools whilst maintaining the privacy I want to have online.
            Although colour rendering is very different when compared with Safari or Chrome, the dev
            tools alone make it the best fit for me. I do still use Chrome from time to time though, always safer to use multiple!
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-divider />
    <v-row class="text-left">
      <v-col
        class="mb-4 mt-4"
        cols="12"
      >
        <h3 class="headline font-weight-bold mb-3">
          Hardware.
        </h3>
        <p
          class="body-1 mb-3"
        >
          I don't use a lot of hardware, and it varies if I'm travelling but here's my common EDC.
        </p>
        <ul class="body-1 mb-6">
          <li class="mb-3">
            <a
              href="https://www.apple.com/uk/iphone-12/"
              target="_blank"
              rel="noreferrer"
              class="teal--text"
            >
              iPhone
              12
            </a> in black.
          </li>
          <li class="mb-3">Apple Watch Series 5 [no longer sold] in Space Grey.
          </li>
          <li class="mb-3">
            <a
              href="https://www.apple.com/uk/ipad-air/"
              target="_blank"
              rel="noreferrer"
              class="teal--text"
            >
            iPad Air (2020)</a> in Space Grey with the
            <a
              href="https://www.apple.com/uk/ipad-keyboards/"
              target="_blank"
              rel="noreferrer"
              class="teal--text"
            >Magic Keyboard</a> and
            <a
              href="https://www.apple.com/uk/apple-pencil"
              target="_blank"
              rel="noreferrer"
              class="teal--text"
            >second generation Apple Pencil</a>.
          </li>
          <li class="mb-3">
            <a
              href="https://www.apple.com/uk/macbook-pro-13/"
              target="_blank"
              rel="noreferrer"
              class="teal--text"
            >MacBook Pro 13" (2020)</a> in space grey with the
            <a
              href="https://www.keychron.com/pages/k6"
              target="_blank"
              rel="noreferrer"
              class="teal--text"
            >Keychron K6 keyboard</a>,
            <a
              href="https://smile.amazon.co.uk/gp/product/B07W6JG6Z7/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
              target="_blank"
              rel="noreferrer"
              class="teal--text"
            >Logitech MX Master 3 mouse</a> and a <a
              href="https://smile.amazon.co.uk/dp/B084XR8RPB/ref=cm_sw_r_cp_tai_W4bbFbAX7S70V"
              target="_blank"
              rel="noreferrer"
              class="teal--text"
            >Lenovo L28u-30</a> monitor
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Uses",

  data() {
    return {
      links: [
        {
          label: "About",
          url: "/"
        }
      ]
    };
  }
};
</script>