<template>
  <v-container>
    <v-row class="text-left">
      <v-col class="mb-4" cols="12">
        <h1
          class="display-1 font-weight-bold mb-3"
        >I'm Karl, a human-centred designer and frontend developer.</h1>
        <h1 class="display-1 font-weight-bold mb-3">I lead design at NeuerEnergy in London, UK.</h1>
      </v-col>

      <v-col class="mb-5" cols="12">
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
    <v-row>
      <v-col class="mb-5" cols="12" md="8">
        <h1 class="display-1 font-weight-bold mb-3">
          Portfolio.
        </h1>
        <p class="body-1 mb-3">
          If you would like to see my portfolio or CV, please send me an <a href="mailto:hi@kejk.co">email</a>. Due to the sensitivity of the projects I've worked on, I'm not permitted to list them here.
        </p>
        <p class="body-1 mb-3">
          This website was designed and built by me, from scratch, in Vue.js. In some ways, it provides an idea of my personal design aesthetic and development style.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mb-5" cols="12" md="8">
        <h1 class="display-1 font-weight-bold mb-3">
          On the side.
        </h1>
        <p class="body-1 mb-3">
          I'm the Design Lead for Make Me A Cocktail. We're currently in the process of redesigning and rebuilding the site.
        </p>
        <v-btn href="https://www.makemeacocktail.com/" target="_blank">Make Me A Cocktail</v-btn>
      </v-col>
      <v-col class="mb-5" cols="12" md="8">
        <p class="body-1 mb-3">
          I'm also currently building a new startup, Kanic.
        </p>
        <v-btn href="https://www.kanic.co" target="_blank">Kanic</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mb-5" cols="12" md="8">
        <h1 class="display-1 font-weight-bold mb-3">
          Uses.
        </h1>
        <p class="body-1 mb-3">
          If you want to see the hardware and software I use on a daily basis to get work done, you can check it out.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="mb-5" cols="12">
        <h1 class="display-1 font-weight-bold mb-3">
        Currently thinking.
        </h1>
        <v-card v-for="link in links" :key="`${link.title}`" cols="12">
          <Links :link="link" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import links from './src/data/links.json'

export default {
  name: "About",

  data: () => ({
    //
  })
};
</script>
