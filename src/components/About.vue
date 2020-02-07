<template>
  <v-container>
    <v-row class="text-left">
      <v-col class="mb-4" cols="12" md="6">
        <h1
          class="display-1 font-weight-bold mb-3"
        >I'm Karl, a human-centred designer and frontend developer.</h1>
        <h1 class="display-1 font-weight-bold mb-3">I lead design at NeuerEnergy in London, UK.</h1>
      </v-col>

      <v-col class="mb-5" cols="12" md="6">
        <p class="body-1 mb-3">
          I started out my career with a deep love of psychology and a Masters in Fine Art creating behaviour-influencing sculptures and digital installations.
          Now, having spent 6 years bringing design thinking practices to rare diseases, I lead a design team delivering elegant human-centric solutions to change the face of renewable energy.
        </p>
        <p
          class="body-1 mb-3"
        >I regularly practice mindfulness and meditation, and I’m an art, design and architecture nerd that absolutely loves exploring and learning about how anything is built.</p>
        <p class="body-1 mb-3">I've also worked for Cognite, Incuna and Apple.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader"
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify"
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify"
      }
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com"
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com"
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify"
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs"
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify"
      }
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/layout/pre-defined"
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions"
      }
    ]
  })
};
</script>
