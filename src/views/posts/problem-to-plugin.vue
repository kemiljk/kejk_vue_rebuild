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
      <v-col cols="12">
        <p>As I've mentioned before, I've long had a passion for learning new skills and that's especially true when it comes to picking up new frontend development skills.</p>
        <p>When I started learning Vue, I chose to utilise the Vuetify library to speed up the process and allow me to focus less on creating CSS and more on learning the necessary JavaScript and language specifics. Using the Vuetify library taught me the basics of working with APIs to leverage specific behaviour.</p>
        <p>When I moved over to using Figma as my main design tool outside of my day job, I wanted to find ways to make the process of handing over to development easier. Although Figma does a great job of providing CSS directly to a developer, it renders the font sizes as pixels much like any other design tool does.</p>
        <p>I was desperate to have an easier way to provide the relevant Rem or Em values to developers (including myself) so that I didn't have to find an online converter or just make up random values to try and find the closest match. And that's how <a
            href="https://www.figma.com/community/plugin/837070613195594890/Px-%E2%80%BA%E2%80%BA-Em"
            target="_blank"
            class="teal--text"
          >Px ›› Em</a> was born.</p>
        <p>Over one evening, I was able to dig into the Figma API documentation, make sense of what was possible and create a basic proof of concept that did what I needed it to do.</p>
        <p>Over the course of the following few days, I made adjustments and updates to the plugin, enabling some extra functionality for changing the base Px value from the browser default of 16px and also allowing for the conversion ration to be changed based on some common scales (including the Golden Ratio).</p>
        <p>The core Px ›› Em functionality is:</p>
        <ul>
          <li>Open the plugin without selections to convert any number to ems</li>
          <li>Select a text node anywhere in your files and open the plugin to see the current pixel value and convert it to ems</li>
          <li>Change the current selection to update the input value and enable a new conversion</li>
          <li>Change the baseline px value to whatever you want it to be and see the relevant changes in em conversion</li>
          <li>Change the scale by which you want to convert based on common scales used</li>
        </ul>
      </v-col>
      <v-row class="mt-3 mb-5">
      <v-col v-for="post in posts" :key="`${post.id}`" cols="12" sm="6">
        <Posts :post="post" class="justify-center" />
      </v-col>
    </v-row>
    </v-row>
  </v-container>
</template>

<script>
import Posts from '../../components/Posts';
import postsData from "../../data/pxToEmImages.json";

export default {
  name: "ProblemToPlugin",
  components: {
    Posts
  },
  data() {
    return {
      posts: postsData
    }
  }
};
</script>