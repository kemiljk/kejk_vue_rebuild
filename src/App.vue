<template>
  <v-app :dark="$isDark">
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
    <v-footer app
    >
      <v-col
        class="text-center"
        cols="12"
      >
      <v-row justify="end" no-gutters>
        <v-speed-dial
          v-model="fab"
          absolute
          bottom
          right
        >
          <template v-slot:activator>
            <v-btn v-model="fab" color="orange" fab>
              <v-icon v-if="fab">mdi-close</v-icon>
              <v-icon v-else>mdi-account-circle</v-icon>
            </v-btn>
          </template>
          <v-btn fab dark small color="teal" href="mailto:hi@kejk.co">
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
        <strong>Made with <img src="https://res.cloudinary.com/kejk/image/upload/c_scale,w_15/v1581367539/75FDFFBF-1AC9-4DF5-AD77-2D5BF730C584_jvn8tp.png"> in London, UK.</strong>
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