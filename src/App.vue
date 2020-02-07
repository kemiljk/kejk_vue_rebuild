<template>
  <v-app>
    <v-app-bar app>
      <div class="d-flex align-center">
        <span class="logo">KEJK</span>
      </div>
      <v-spacer></v-spacer>
      <v-btn @click="toggleTheme" text>
        <v-icon>mdi-invert-colors</v-icon>
      </v-btn>
      <v-btn href="mailto:hi@kejk.co" target="_blank" text>
        <span>Email</span>
      </v-btn>
      <v-btn href="https://www.twitter.com/_kejk" target="_blank" text>
        <span>Twitter</span>
      </v-btn>
      <v-btn href="https://github.com/kemiljk" target="_blank" text>
        <span>Github</span>
      </v-btn>
      <v-btn
        href="https://music.apple.com/gb/album/cornerstone/1300802348"
        target="_blank"
        text
      
      >
        <span>Music</span>
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
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.image
    }
  },
  data: () => ({
    //
  })
};
</script>