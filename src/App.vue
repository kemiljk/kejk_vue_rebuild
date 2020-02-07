<template>
  <v-app>
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
				>
					{{ link.label }}
        </v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
  </v-content>
    <v-footer app>
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn href="mailto:hi@kejk.co" target="_blank" text>
        Email
      </v-btn>
      <v-btn href="https://www.twitter.com/_kejk" target="_blank" text>
        Twitter
      </v-btn>
      <v-btn href="https://github.com/kemiljk" target="_blank" text>Github
      </v-btn>
      <v-btn
        href="https://music.apple.com/gb/album/cornerstone/1300802348"
        target="_blank"
        text>Music
      </v-btn>
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
					label: 'About',
					url: '/'
				},
				{
					label: 'Uses',
					url: '/uses'
        }
      ]
    }
  },
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      this.image
    }
  },
};

</script>