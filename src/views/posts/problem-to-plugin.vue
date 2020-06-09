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
        <h1
          class="display-2 font-weight-bold mb-3 mt-10"
        >
          From Problem to Plugin.
        </h1>
        <h2
          class="headline font-weight-bold mb-3 mt-10"
        >
          Solving a personal problem by winging it.
        </h2>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="6">
        <v-btn
          ref="noreferrer"
          color="purple"
          href="https://www.figma.com/community/plugin/837070613195594890/Px-%E2%80%BA%E2%80%BA-Em"
          class="mt-2 mb-4 white--text"
          target="_blank"
        >
          <img
            src="../../../src/assets/figma.svg"
            alt="Figma icon"
            style="height: 16px"
            class="mr-2"
          >
          Px ›› Em
          <v-icon 
            class="ml-2" 
            small
          >
            mdi-open-in-new
          </v-icon>
        </v-btn>
      </v-col>
      <v-col
        cols="6"
        class="text-right"
      >
        <h3>
          <v-icon color="teal">mdi-cloud-download</v-icon> Installed <span
            id="install-count"
            class="black--text badge"
          />
        </h3>
        <h3 class="mt-3">
          <v-icon color="red">mdi-heart</v-icon> Liked <span
            id="like-count"
            class="black--text badge"
          />
        </h3>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="12">
        <h3 class="mb-3">
          Background
        </h3>
        <p>
          As I've mentioned before, I've long had a passion for learning new skills and that's especially true when it comes to picking up new frontend development skills.
        </p>
        <p>
          When I started learning 
          <a
            href="https://www.vuejs.org"
            target="_blank"
            class="teal--text"
          >Vue</a>, I chose to utilise the <a
            href="https://www.vuetifyjs.com"
            target="_blank"
            class="teal--text"
          >Vuetify</a> library to speed up the process and allow me to focus less on creating CSS and more on learning the necessary JavaScript and language specifics. Using the Vuetify library taught me the basics of working with APIs to leverage specific behaviour.
        </p>
        <p>
          When I moved over to using 
          <a
            href="https://www.figma.com"
            target="_blank"
            class="teal--text"
          >Figma</a> 
          as my main design tool outside of my day job, I wanted to find ways to make the process of handing over to development easier. Although Figma does a great job of handling 
          <a
            href="https://www.figma.com/best-practices/guide-to-developer-handoff/"
            target="_blank"
            class="teal--text"
          >
            developer handoff</a>, 
          it renders the font sizes as pixels much like any other design tool does.
        </p>
        <h3 class="mb-3">
          The solution
        </h3>
        <p>
          I was desperate to have an easier way to provide the relevant Rem or Em values to developers (including myself) so that I didn't have to find an online converter or just make up random values to try and find the closest match. And that's how 
          <a
            href="https://www.figma.com/community/plugin/837070613195594890/Px-%E2%80%BA%E2%80%BA-Em"
            target="_blank"
            class="teal--text"
          >
            Px ›› Em</a> 
          was born.
        </p>
        <p>
          Over one evening, I was able to dig into the 
          <a
            href="https://www.figma.com/plugin-docs/api/api-overview"
            target="_blank"
            class="teal--text"
          >
            Figma API documentation</a>, 
          make sense of what was possible and create a basic proof of concept that did what I needed it to do.
        </p>
        <h3 class="mb-3">
          The final output
        </h3>
        <p>
          Over the course of the following few days, I made adjustments and updates to the plugin, enabling some extra functionality for changing the base Px value from the browser default of 16px and also allowing for the conversion ratio to be changed based on some common scales (including the Golden Ratio).
        </p>
        <h4>The core Px ›› Em functionality is:</h4>
        <ul>
          <li>Open the plugin without selections to convert any number to ems</li>
          <li>Select a text node anywhere in your files and open the plugin to see the current pixel value and convert it to ems</li>
          <li>Change the current selection to update the input value and enable a new conversion</li>
          <li>Change the baseline px value to whatever you want it to be and see the relevant changes in em conversion</li>
          <li>Change the scale by which you want to convert based on common scales used</li>
        </ul>
        <p>
          Creating the code wasn't as complex as first anticipated, so here's a snippet of how the actual calculation works as a function.
          <v-row class="text-left">
            <v-col cols="12"> 
              <iframe
                src="https://carbon.now.sh/embed/hGewflU5VcULx6Z7GmFK"
                style="width:100%; height:20rem; border:0; overflow:hidden;"
                sandbox="allow-scripts allow-same-origin"
              />
            </v-col>
          </v-row>
        </p>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col
        v-for="image in images"
        :key="`${image.id}`"
        cols="12"
      >
        <v-img
          :src="`${image.img}`"
          class="img"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: "ProblemToPlugin",
  data() {
    return {
      images: []
    }
  },
  mounted() {
    this.getPxImages()

    fetch('../../../api/plugin-stats.js')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      document.getElementById('install-count').prepend(data.install_count)
      document.getElementById('like-count').prepend(data.like_count)
    })
    .catch(error => console.error(error));
  },
  methods: {
    getPxImages: function () {
      fetch('../data/pxToEmImages.json')
        .then(response => response.json())
        .then(data => (this.images = data));
    },
  }
};
</script>