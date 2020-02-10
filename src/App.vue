<template>
  <v-app id="app" :dark="$isDark">
    <v-app-bar app>
      <v-toolbar-title class="logo">KEJK</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="toggleTheme" text>
        <v-icon>mdi-invert-colors</v-icon>
      </v-btn>
      <v-btn
        v-for="link in links"
        :key="`${link.label}--page-link`"
        class="my-2"
        text
        :to="link.url"
      >{{ link.label }}</v-btn>
    </v-app-bar>
    <v-content>
      <v-responsive width="900px">
        <router-view></router-view>
      </v-responsive>
    </v-content>
    <v-footer app>
      <v-row justify="end" no-gutters>
        <!-- <v-btn href="https://www.twitter.com/_kejk" target="_blank" text>Twitter</v-btn>
        <v-btn href="https://github.com/kemiljk" target="_blank" text>Github</v-btn>
        <v-btn
          href="https://music.apple.com/gb/album/cornerstone/1300802348"
          target="_blank"
          text
        >Music</v-btn> -->
      <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :transition="transition"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="orange"
          fab
        >
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-account-circle</v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        dark
        small
        color="teal"
        href="mailto:hi@kejk.co"
      >
        <v-icon>mdi-email</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="light-blue"
        href="https://www.twitter.com/_kejk"
        target="_blank"
      >
        <v-icon>mdi-twitter</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
        href="https://music.apple.com/gb/album/cornerstone/1300802348"
        target="_blank"
      >
        <v-icon>mdi-music</v-icon>
      </v-btn>
    </v-speed-dial>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      links: [
        {
          label: "About",
          url: "/"
        },
        {
          label: "Uses",
          url: "/uses"
        },
        {
          label: "Login",
          url: "/login"
        }
      ]
    };
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>