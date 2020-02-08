<template>
  <v-container>
    <v-row class="text-left">
      <v-col>
        <h1
          class="display-1 font-weight-bold mb-3"
          aria-label="intro to Karl"
        >I'm Karl, a human-centred designer and frontend developer.</h1>
        <h1 class="display-1 font-weight-bold mb-3">I lead design and frontend development at NeuerEnergy in London, UK.</h1>
      </v-col>

      <v-col class="mb-5" cols="12">
        <p class="body-1 mb-3" aria-label="about Karl">
          I started out my career with a deep love of psychology and a Masters in Fine Art creating behaviour-influencing sculptures and digital installations.
          Now, having spent 6 years bringing design thinking practices to rare diseases, I lead a design team delivering elegant human-centric solutions to change the face of renewable energy.
        </p>
        <p
          class="body-1 mb-3"
        >I regularly practice mindfulness and meditation, and I’m an art, design and architecture nerd that absolutely loves exploring and learning about how anything is built.</p>
        <p class="body-1 mb-3">
          I've also worked for
          <a href="https://www.cognite.co">Cognite</a>, Incuna and
          <a href="https://www.apple.com/retail/">Apple</a>.
        </p>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col class="mb-5" cols="12" md="8">
        <h2 class="display font-weight-bold mb-3" aria-label="portfolio content">Portfolio.</h2>
        <p class="body-1 mb-3">
          If you would like to see my portfolio or CV, please send me an
          <a
            href="mailto:hi@kejk.co"
          >email</a>. Due to the sensitivity of the projects I've worked on, I'm not permitted to list them here.
        </p>
        <p
          class="body-1 mb-3"
        >This website was designed and built by me, from scratch, in Vue.js. In some ways, it provides an idea of my personal design aesthetic and development style.</p>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col class="mb-5" cols="12" md="8" aria-label="Karl's other interests">
        <h2 class="display font-weight-bold mb-3">On the side.</h2>
        <p
          class="body-1 mb-3"
        >I'm the Design Lead for Make Me A Cocktail. We're currently in the process of redesigning and rebuilding the site.</p>
        <v-btn href="https://www.makemeacocktail.com/" target="_blank">Make Me A Cocktail</v-btn>
      </v-col>
      <v-col class="mb-5" cols="12" md="8">
        <p class="body-1 mb-3">I'm also currently building a new startup, Kanic.</p>
        <v-btn href="https://www.kanic.co" target="_blank">Kanic</v-btn>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col class="mb-5" cols="12" md="8">
        <h2 class="display font-weight-bold mb-3" aria-label="Karl's tech setup">Uses.</h2>
        <p
          class="body-1 mb-3"
        >If you want to see the hardware and software I use on a daily basis to get work done, you can check it out.</p>
        <v-btn
          v-for="link in links"
          :key="`${link.label}--page-link`"
          class="my-2"
          :to="link.url"
        >{{ link.label }}</v-btn>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col class="mb-5" cols="12">
        <h2 class="display font-weight-bold mb-3" aria-label="Karl's music playlist">Currently playing.</h2>
        <iframe allow="autoplay *; encrypted-media *;" frameborder="0" height="450" style="width:100%;max-width:900px;overflow:hidden;background:transparent; border-radius: 8px; box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/gb/playlist/pure-metal/pl.u-jZgo9Tqqaarj"></iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About",

  data() {
    return {
      links: [
        {
          label: "Uses",
          url: "/uses"
        }
      ]
    };
  }
};
</script>
