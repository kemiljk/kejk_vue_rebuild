<template>
  <v-app :dark="$isDark">
    <v-app-bar app>
      <v-toolbar-title class="logo d-none d-sm-block font-weight-black">KEJK</v-toolbar-title>
      <v-toolbar-title class="logo d-sm-none font-weight-black">K</v-toolbar-title>
      <v-spacer />
      <v-btn icon class="mr-1" alt="Toggle colour theme" @click="toggleTheme">
        <v-icon v-if="this.$vuetify.theme.dark">mdi-white-balance-sunny</v-icon>
        <v-icon v-else>mdi-brightness-3</v-icon>
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
        <router-view />
      </v-responsive>
    </v-content>
    <v-footer app>
      <v-col class="text-left" cols="12">
        <v-row justify="end" no-gutters>
          <v-speed-dial v-model="fab" absolute bottom right alt="Contact Karl">
            <template v-slot:activator>
              <v-btn v-model="fab" color="teal" fab>
                <v-icon v-if="fab" class="white--text">mdi-close</v-icon>
                <v-icon v-else class="white--text">mdi-account-circle</v-icon>
              </v-btn>
            </template>
            <v-btn fab dark small color="teal" href="mailto:karl@kejk.tech" alt="Email Karl">
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
              color="#6670f9"
              href="https://dev.to/_kejk"
              target="_blank"
              alt="Karl's LinkedIn"
            >
              <v-icon>mdi-dev-to</v-icon>
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
          <v-icon>mdi-vuejs</v-icon>&nbsp;in London.
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
          label: "Lazy PDF",
          url: "https://www.lazypdf.tech/"
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