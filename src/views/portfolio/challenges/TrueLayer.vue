<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12">
        <v-btn 
          text
          @click="$router.go(-1)" 
        >
          <v-icon class="mr-2">
            mdi-arrow-left
          </v-icon>Back
        </v-btn>
        <v-img :src="`${hero}`" class="mt-10 img cropped" alt="TrueLayer website page" />
        <h1 class="display-2 font-weight-bold mb-3 mt-10">TrueLayer design challenge.</h1>
        <h2 class="headline mb-3 mt-2">Build our Press page</h2>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="12">
        <v-btn
          href="https://kemiljk.github.io/truelayer-press-page/"
          color="teal"
          target="_blank"
          class="white--text"
        >
          <v-icon class="mr-2 white--text" small>mdi-github</v-icon>TrueLayer Press Page
          <v-icon class="ml-2 white--text" small>mdi-open-in-new</v-icon>
        </v-btn>
        <v-row class="mb-4 mt-8">
          <v-col cols="12" sm="10">
            <h3>What was the challenge?</h3>
            <p>We would like you to create a new static page for our website called "Press".</p>
          </v-col>
          <v-col cols="12" sm="2">
            <h3>Time</h3>
            <p><em>10 hours.</em></p>
          </v-col>
        </v-row>
        <h4 class="mb-4">My process</h4>
        <p>This challenge involved creating the page with no mockups provided, no access to source code and simply a brand guidelines PDF to work from.</p>
        <h4 class="mt-4">Wayfinding/Research/References:</h4>
        <ul>
          <li>I chose to reference a non-exhaustive list of press pages and news organisations to help influence structuring of the page</li>
          <li>It felt logical to pull from these types of pages instead of reinventing the wheel as I wanted to ensure the site was user accessible and intuitive to navigate</li>
        </ul>
        <h4 class="mt-4">Decision process:</h4>
        <ul>
          <li>I wanted to remain close to TrueLayer's brand. I firstly chose to review the live site in its entirety and record the page templates that I could notice</li>
          <li>Initially I thought about mirroring the About us/Contact us pages as I felt Press should live alongside these, but decided against this and chose to create a bespoke layout that honoured some of the existing styling but with some custom elements</li>
          <li>I chose to blockframe this to get something in place to work from structurally</li>
          <li>Once I had a basic structure ready, I needed to go about obtaining the classes and structure of the site to build from</li>
          <ul>
            <li>Using inspect element, I deconstructed the page source and pulled the bare HTML page and relevant CSS and JS files</li>
            <li>I did not choose to use any specific additional frameworks or libraries beyond JQuery and Bootstrap</li>
          </ul>
          <li>I then went about destructuring the HTML to create a basic structure that felt akin to the blockframe as well as TrueLayer's brand guidelines</li>
          <li>Once this was done, I could build the relevant blocks up inline, following the TrueLayer styleguide as best as I could from inspecting source and reviewing the CSS files</li>
          <li>Finally, once I had a clear structure and all blocks and classes in place, I could go about creating the custom classes I needed and designing some bespoke illustrations</li>
        </ul>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col v-for="image in images" :key="`${image.id}`" cols="12">
        <v-img :src="`${image.img}`" class="img" />
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="12">
        <h3 id="main-content" class="mt-4 mb-2">Main content</h3>
        <h4 id="article-hero">Article hero</h4>
        <ul>
          <li>The article hero is the first bespoke object I created, it&#39;s the page hero article and is reserved for the most important announcements</li>
          <li>This announcement may not always be the most recent if there&#39;s something that TrueLayer want to call out for a longer period</li>
          <li>The hero features some custom CSS classes</li>
        </ul>
        <h4 id="article-grid" class="mt-4">Article grid</h4>
        <ul>
          <li>I chose to build a bespoke CSS Grid for the More Articles section</li>
          <li>This Grid uses a 1/3 2/3 split for grid objects that flips for each row (on desktop) as well as a 3/3 grid, on mobile breakpoints, this switches to a full width grid</li>
          <li>If I was to build this with a framework or more JS, then I&#39;d utilise a component here to render the cards from JSON or an API fetch, this way the HTML will be slim (important for if there were lots of articles to pull)</li>
          <li>
            I implemented some JavaScript/JQuery to enable the
            <code>Load More</code> button to function and demonstrate intended functionality (notice the button disappears when there are no more articles to display)
          </li>
          <li>I created some further custom classes for this so I could build my own grid and bring in some hover effects</li>
          <li>
            I&#39;ve referenced an
            <code>Archive</code> view, this would ideally either navigate to a new page (as implied in the current code) or possibly swap out the article view in place if it utilised components and a routing table
          </li>
        </ul>
        <h4
          id="twitter-card-thoughts-for-the-future"
          class="mt-4"
        >Twitter card / thoughts for the future</h4>
        <ul>
          <li>The Twitter card featured some further customisation</li>
          <li>
            This section was intended as a place to show what people are saying about TrueLayer around the web, in this current implementation it&#39;s just the
            <a
              href="https://www.twitter.com/truelayer"
              target="_blank"
              ref="noreferrer"
              class="teal--text"
            >@TrueLayer</a> feed, but I would want to develop this further to include other social feeds where applicable and be less account-focused and more social-listening-focused
          </li>
        </ul>
        <h4 id="end-block" class="mt-4">End block</h4>
        <ul>
          <li>The final block is aimed to be a call to action for people wanting to write specific articles about TrueLayer with their help/direct involvement</li>
          <li>This call to action takes the user to the contact us page</li>
        </ul>
        <h3 id="images" class="mt-4">Images</h3>
        <ul>
          <li>I created two bespoke illustrations in the style of TrueLayer&#39;s brand</li>
          <li>These illustrations are featured in the Hero header and the Twitter section&#39;s bg</li>
        </ul>
        <h3 id="accessibility" class="mt-4">Accessibility</h3>
        <ul>
          <li>I chose to alter one element of the existing system in aid of accessibility. I wanted to record this here so it&#39;s not seen as a mistake.</li>
          <li>The current Sun btn looks great, but the white text at that small size on that yellow background fails common accessibility tests for size and contrast</li>
          <li>
            As such, I&#39;ve created a new text class to temporarily override this behaviour and replace white text with Black (
            <code>#2d2d2d</code> as per guidelines)
          </li>
          <li>I strongly believe this should be considered a global change for better accessibility in general but appreciate this can be tricky when aesthetics are at play</li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import truelayerImages from "../../../data/challenges/truelayerImages.json";

export default {
  name: "TrueLayer",
  data() {
    return {
      images: truelayerImages,
      hero:
        "https://res.cloudinary.com/kejk/image/upload/v1590341602/ipad-pro-on-blue-background-landscape-shadow-2_h08abg.jpg"
    };
  }
};
</script>