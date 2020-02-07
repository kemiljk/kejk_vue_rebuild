<template>
  <v-container>
    <v-row class="text-left">
      <v-col>
        <h1 class="display-1 font-weight-bold mb-3">/Uses.</h1>
        <p
          class="body-1 mb-3"
        >I use a variety of tools to get my work done on a daily basis. Being a designer and frontend developer, I have to switch between two very different but complimentary workflows.</p>
        <p
          class="body-1 mb-3"
        >As much as possible, I try to integrate these two workflows to reduce cognitive load and improve productivity.</p>
        <p
          class="body-1 mb-3"
        >I'm primarily a designer first but I learned the fundamentals of web development by hacking other peoples' MySpace pages back when that was a real thing.</p>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col class="mb-4" cols="12">
        <h2 class="display font-weight-bold mb-3">Design.</h2>
        <p
          class="body-1 mb-3"
        >My design tools are simple and straightforward. I keep it lean and minimal.</p>
        <ul class="body-1 mb-3">
          <li>
            <a href="https://www.adobe.com/products/xd.html" target="_blank">Adobe XD</a> is my design tool of choice. Its flexibility as a wireframing, prototyping and full featured design tool make it perfect for my daily needs.
            The new collaboration beta is a little funky at the moment, but it's going to make for a solid solution when it's ready.
          </li>
          <li>
            <a href="https://overflow.io/" target="_blank">Overflow</a> I sometimes utilise Overflow to create Adobe XD-derived user flows for better visual explanation of page linking and process.
            Usually this is used if a prototype can't convey the idea (i.e. it's too complex) or the team/client needs a visual depiction of all linkages.
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col class="mb-4" cols="12">
        <h2 class="display font-weight-bold mb-3">Development.</h2>
        <p
          class="body-1 mb-3"
        >Like with design, I keep my development toolset minimal but have a few more pieces of software I need.</p>
        <ul class="body-1 mb-3">
          <li>
            <strong>Languages:</strong> HTML, CSS/SASS/SCSS, JavaScript and a small amount of PHP
          </li>
          <li>
            <strong>Frameworks / Libraries / Tools:</strong> Material-UI/Veutify, Git, Vue.js
          </li>
          <li>
            <a href="https://www.adobe.com/products/xd.html" target="_blank">VSCode</a> is my editor of choice. I currently use the
            <a
              href="https://marketplace.visualstudio.com/items?itemName=bobsparadox.seti-black"
              target="_blank"
            >Seti Black</a> theme with a custom set of background colours to create a pure black environment along with
            <a
              href="https://www.jetbrains.com/lp/mono/"
              target="_blank"
            >JetBrains Mono</a> as my default code font with ligatures set to true.
          </li>
        </ul>
        <pre>
          <v-application code>
            {
            <span class="json-attribute">"files.autoSave"</span>: "onFocusChange",
            <span class="json-attribute">"editor.fontFamily"</span>: "JetBrains Mono",
            <span class="json-attribute">"editor.fontLigatures"</span>: <span class="json-boolean">true</span>,
            <span class="json-attribute">"editor.formatOnPaste"</span>: <span class="json-boolean">true</span>,
            <span class="json-attribute">"editor.formatOnSave"</span>: <span class="json-boolean">true</span>,
            <span class="json-attribute">"auto-close-tag.SublimeText3Mode"</span>: <span class="json-boolean">true</span>,
            <span class="json-attribute">"workbench.colorCustomizations"</span>: {
                "editor.background": "#050505",
                "sideBar.background": "#111",
                "terminal.background": "#050505",
                "panel.background": "#050505",
                "activityBar.background": "#050505",
                "tab.inactiveBackground": "#1d1d1d",
            },
            <span
  class="json-attribute"
>"workbench.colorTheme"</span>: "Seti Black",
            <span class="json-attribute">"workbench.iconTheme"</span>: "material-icon-theme",
            <span class="json-attribute">"vsicons.dontShowNewVersionMessage"</span>: <span class="json-boolean">true</span>,
            <span class="json-attribute">"prettier.tabWidth"</span>: <span class="json-boolean">4</span>,
            <span class="json-attribute">"prettier.useTabs"</span>: <span class="json-boolean">true</span>,
            <span class="json-attribute">"editor.fontSize"</span>: <span class="json-boolean">11</span>,
            <span class="json-attribute">"workbench.editor.showTabs"</span>: <span class="json-boolean">true</span>,
            <span class="json-attribute">"editor.minimap.enabled"</span>: <span class="json-boolean">false</span>,
            <span class="json-attribute">"editor.codeLens"</span>: <span class="json-boolean">false</span>,
            <span class="json-attribute">"workbench.activityBar.visible"</span>: <span class="json-boolean">false</span>,
            <span class="json-attribute">"explorer.openEditors.visible"</span>: <span class="json-boolean">0</span>,
            <span class="json-attribute">"workbench.sideBar.location"</span>: "right",
            <span class="json-attribute">"workbench.fontAliasing"</span>: "antialiased",
            <span class="json-attribute">"editor.lineHeight"</span>: <span class="json-boolean">24</span>,
            <span class="json-attribute">"editor.letterSpacing"</span>: <span class="json-boolean">0</span>,
            <span class="json-attribute">"editor.emptySelectionClipboard"</span>: <span class="json-boolean">false</span>,
            <span class="json-attribute">"editor.quickSuggestionsDelay"</span>: <span class="json-boolean">0</span>,
            <span class="json-attribute">"editor.quickSuggestions"</span>: {
                <span class="json-attribute">"strings"</span>: <span class="json-boolean">true</span>,
            },
            <span class="json-attribute">"editor.formatOnType"</span>: <span class="json-boolean">true</span>,
            <span class="json-attribute">"vetur.grammar.customBlocks"</span>: {
                <span class="json-attribute">"docs"</span>: "md",
                <span class="json-attribute">"i18n"</span>: "json",
                <span class="json-attribute">"preview-props"</span>: "json"
            },
            <span class="json-attribute">"workbench.startupEditor"</span>: "newUntitledFile",
            <span class="json-attribute">"[vue]"</span> {
                <span class="json-attribute">"editor.defaultFormatter"</span>: "octref.vetur"
            },
            <span class="json-attribute">"editor.tabSize"</span>: <span class="json-boolean">4</span>,
            }
          </v-application>
        </pre>
        <ul class="body-1 mb-3">
          <li>
            <a href="https://hyper.is" target="_blank">Hyper</a> is my terminal of choice with JetBrains Mono set as my font of choice as well as some custom colour rules.
          </li>
        </ul>
        <pre>
          <v-application code>
            <span class="js-attribute">module.</span><span class="js-function">exports</span><span class="js-attribute"> =</span> {
              <span class="js-config">config</span><span class="js-value">:</span> {
              <span class="js-config">updateChannel</span><span class="js-value">:</span> <span class="js-config">"stable"</span>,
              <span class="js-config">fontSize</span><span class="js-value">:</span> <span class="js-value">12</span>,
              <span class="js-config">fontFamily</span><span class="js-value">:</span> <span class="js-config">"JetBrains Mono"</span>,
              <span class="js-config">fontWeight</span><span class="js-value">:</span> <span class="js-config">"normal"</span>,
              <span class="js-config">fontWeightBold</span><span class="js-value">:</span> <span class="js-config">"bold"</span>,
              <span class="js-config">lineHeight</span><span class="js-value">:</span> <span class="js-value">1.5</span>,
              <span class="js-config">letterSpacing</span><span class="js-value">:</span> <span class="js-value">0</span>,
              <span class="js-config">cursorColor</span><span class="js-value">:</span> <span class="js-config">"#FFDD05"</span>,
              <span class="js-config">cursorAccentColor</span><span class="js-value">:</span> <span class="js-config">"#191919"</span>,
              <span class="js-config">cursorShape</span><span class="js-value">:</span> <span class="js-config">"BLOCK"</span>,
              <span class="js-config">cursorBlink</span><span class="js-value">:</span> <span class="js-value">false</span>,
              <span class="js-config">foregroundColor</span><span class="js-value">:</span> <span class="js-config">"#f6f7f8"</span>,
              <span class="js-config">backgroundColor</span><span class="js-value">:</span> <span class="js-config">"#191919"</span>,
              <span class="js-config">selectionColor</span><span class="js-value">:</span> <span class="js-config">"rgba(248,28,229,0.3)"</span>,
              <span class="js-config">borderColor</span><span class="js-value">:</span> <span class="js-config">"#333"</span>,
              <span class="js-config">css</span><span class="js-value">:</span> <span class="js-config">""</span>,
              <span class="js-config">termCSS</span><span class="js-value">:</span> <span class="js-config">""</span>,
              <span class="js-config">showHamburgerMenu</span><span class="js-value">:</span> <span class="js-config">""</span>,
              <span class="js-config">showWindowControls</span><span class="js-value">:</span> <span class="js-config">""</span>,
              <span class="js-config">padding</span><span class="js-value">:</span> <span class="js-config">"12px 14px"</span>,
              <span class="js-config">colors</span><span class="js-value">:</span> {
                  <span class="js-config">black</span><span class="js-value">:</span> <span class="js-config">"#191919"</span>,
                  <span class="js-config">red</span><span class="js-value">:</span> <span class="js-config">"#C51E14"</span>,
                  <span class="js-config">green</span><span class="js-value">:</span> <span class="js-config">"#1DC121"</span>,
                  <span class="js-config">yellow</span><span class="js-value">:</span> <span class="js-config">"#FFDD05"</span>,
                  <span class="js-config">blue</span><span class="js-value">:</span> <span class="js-config">"#1c475c"</span>,
                  <span class="js-config">magenta</span><span class="js-value">:</span> <span class="js-config">"#C839C5"</span>,
                  <span class="js-config">cyan</span><span class="js-value">:</span> <span class="js-config">"#20C5C6"</span>,
                  <span class="js-config">white</span><span class="js-value">:</span> <span class="js-config">"#C7C7C7"</span>,
                  <span class="js-config">lightBlack</span><span class="js-value">:</span> <span class="js-config">"#686868"</span>,
                  <span class="js-config">lightRed</span><span class="js-value">:</span> <span class="js-config">"#FD6F6B"</span>,
                  <span class="js-config">lightGreen</span><span class="js-value">:</span> <span class="js-config">"#67F86F"</span>,
                  <span class="js-config">lightYellow</span><span class="js-value">:</span> <span class="js-config">"#FFFA72"</span>,
                  <span class="js-config">lightBlue</span><span class="js-value">:</span> <span class="js-config">"#56bdf2"</span>,
                  <span class="js-config">lightMagenta</span><span class="js-value">:</span> <span class="js-config">"#FD7CFC"</span>,
                  <span class="js-config">lightCyan</span><span class="js-value">:</span> <span class="js-config">"#68FDFE"</span>,
                  <span class="js-config">lightWhite</span><span class="js-value">:</span> <span class="js-config">"#FFFFFF"</span>
                },
                <span class="js-config">shell</span><span class="js-value">:</span> <span class="js-config">""</span>,
                <span class="js-config">shellArgs</span><span class="js-value">:</span> [<span class="js-config">"--login"</span>],
                <span class="js-config">env</span><span class="js-value">:</span> {},
                    <span class="js-config">bell</span><span class="js-value">:</span> <span class="js-config">"SOUND"</span>,
                    <span class="js-config">copyOnSelect</span><span class="js-value">:</span> <span class="js-value">false</span>,
                    <span class="js-config">defaultSSHApp</span><span class="js-value">:</span> <span class="js-value">true</span>,
                    <span class="js-config">quickEdit</span><span class="js-value">:</span> <span class="js-value">false</span>,
                    <span class="js-config">macOptionSelectionMode</span><span class="js-value">:</span> <span class="js-config">"vertical"</span>,
                <span class="js-config">webGLRenderer</span><span class="js-value">:</span> <span class="js-value">true</span>
                },
              <span class="js-config">plugins</span><span class="js-value">:</span> [<span class="js-config">"hyper-fading-scrollbar"</span>],
              <span class="js-config">localPlugins</span><span class="js-value">:</span> [],
            };
          </v-application>
        </pre>
        <ul class="body-1 mb-3">
          <li>
            <a href="https://ohmyz.sh" target="_blank">ZSH</a> is my default terminal shell
            in Hyper with a basic custom theme set.
          </li>
          <li>
            <a href="https://numi.app" target="_blank">Numi</a> is an extended custom
            calculator that I use to perform arithmetic and conversions.
          </li>
          <li>
            <a
              href="https://www.mozilla.org/en-GB/firefox/developer/"
              target="_blank"
            >Firefox Developer Edition</a> is the dev browser I tend to use. It offers
            an extremely powerful set of dev tools whilst maintaining the privacy I want to have online.
            Although colour rendering is very different when compared with Safari or Chrome, the dev
            tools alone make it the best fit for me.
          </li>
        </ul>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col class="mb-4" cols="12">
        <h2 class="display font-weight-bold mb-3">Hardware.</h2>
        <p
          class="body-1 mb-3"
        >I don't use a lot of hardware, and it varies if I'm travelling but here's my common EDC.</p>
        <ul class="body-1 mb-3">
          <li>
            <a href="https://www.apple.com/shop/buy-iphone/iphone-xr" target="_blank">
              iPhone
              XR
            </a> in black.
          </li>
          <li>
            <a
              href="https://www.amazon.co.uk/gp/product/B07FB33XWT/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
              target="_blank"
            >Apple Watch Series 5</a> in Space Grey.
          </li>
          <li>
            iPad 9.7" (2018) in Space Grey [no longer sold] with the
            <a
              href="https://www.amazon.co.uk/gp/product/B07FB33XWT/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
              target="_blank"
            >Logitech Slim Folio iPad case</a> and
            <a
              href="https://www.apple.com/shop/product/MK0C2/apple-pencil-1st-generation"
              target="_blank"
            >first generation Apple Pencil</a>.
          </li>
          <li>
            MacBook Pro 15" (2019) in silver [no longer sold] with the
            <a href="https://www.apple.com/apple-watch-series-5/" target="_blank">
              Logitech
              K380 keyboard
            </a>,
            <a
              href="https://www.amazon.co.uk/gp/product/B07W6JG6Z7/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1"
              target="_blank"
            >Logitech MX Master 3 mouse</a> and the TwelveSouth Ghost
            Stand (no longer sold).
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