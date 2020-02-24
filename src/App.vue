<template>
  <v-app :dark="$isDark">
    <v-app-bar app>
      <v-toolbar-title class="logo d-none d-sm-block font-weight-black">KEJK</v-toolbar-title>
      <v-toolbar-title class="logo d-sm-none font-weight-black">K.</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="toggleTheme" text class="mr-1" alt="Toggle colour theme">
        <v-icon>mdi-invert-colors</v-icon>
      </v-btn>
      <v-btn
        v-for="link in links"
        :key="`${link.label}--page-link`"
        class="my-2 mx-1"
        text
        :to="link.url"
      >
        <v-text class="font-weight-bold">{{ link.label }}</v-text>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-responsive width="900px">
        <router-view></router-view>
      </v-responsive>
    </v-content>
    <v-footer app>
      <v-col class="text-left" cols="12">
        <v-row justify="end" no-gutters>
          <v-speed-dial v-model="fab" absolute bottom right alt="Contact Karl">
            <template v-slot:activator>
              <v-btn v-model="fab" color="orange" fab>
                <v-icon v-if="fab">mdi-close</v-icon>
                <v-icon v-else>mdi-account-circle</v-icon>
              </v-btn>
            </template>
            <v-btn fab dark small color="teal" href="mailto:karlemilkoch@me.com" alt="Email Karl">
              <v-icon>mdi-email</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              small
              color="light-blue"
              href="https://www.twitter.com/_kejk"
              target="_blank"
              alt="Karl's Twitter"
            >
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn
              fab
              light
              small
              color="white"
              href="https://www.github.com/kemiljk/"
              target="_blank"
              alt="Karl's GitHub"
            >
              <v-icon>mdi-git</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              small
              color="blue"
              href="https://www.linkedin.com/in/kejk"
              target="_blank"
              alt="Karl's LinkedIn"
            >
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>
            <v-btn
              fab
              dark
              small
              color="red"
              href="https://music.apple.com/gb/album/cornerstone/1300802348"
              target="_blank"
              alt="Karl's Music with Echoes"
            >
              <v-icon>mdi-music</v-icon>
            </v-btn>
          </v-speed-dial>
        </v-row>
        <strong>
          Made with
          <v-icon>mdi-vuejs</v-icon>in London.
        </strong>
      </v-col>
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
          label: "Posts",
          url: "/posts/"
        },
        {
          label: "Uses",
          url: "/uses/"
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