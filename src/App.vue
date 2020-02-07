<template>
  <v-app>
    <v-app-bar app color="white" dark>
      <div class="d-flex align-center">
        <v-img
          alt="KEJK"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="../src/assets/logo.svg"
          width="100"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn href="mailto:hi@kejk.co" target="_blank" text light>
        <span class="mr-2">Email</span>
      </v-btn>
      <v-btn href="https://www.twitter.com/_kejk" target="_blank" text light>
        <span class="mr-2">Twitter</span>
      </v-btn>
      <v-btn href="https://github.com/kemiljk" target="_blank" text light>
        <span class="mr-2">Github</span>
      </v-btn>
      <v-btn
        href="https://music.apple.com/gb/album/cornerstone/1300802348"
        target="_blank"
        text
        light
      >
        <span class="mr-2">Music</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <About />
    </v-content>
  </v-app>
</template>

<script>
import About from "./components/About";

export default {
  name: "App",

  components: {
    About
  },

  data: () => ({
    //
  })
};
</script>