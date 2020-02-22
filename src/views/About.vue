<template>
  <v-container>
    <v-row class="text-left">
      <v-col>
        <h1
          class="display-3 font-weight-bold mb-3 mt-10"
          aria-label="intro to Karl"
        >Karl Emil James Koch.</h1>
        <h2
          class="display-1 font-weight-medium mt-12 mb-6"
          aria-label="intro to Karl"
        >I'm a frontend designer.</h2>
        <h2 class="display-1 font-weight-medium mb-3">
          I currently lead frontend design at
          <a
            href="https://www.neuerenergy.com"
            class="orange--text font-weight-bold"
            target="_blank"
          >NeuerEnergy</a>&nbsp;
          <sup>
            <v-icon class="orange--text" small>mdi-open-in-new</v-icon>
          </sup> in London, UK.
        </h2>
      </v-col>
      <v-col class="mb-5" cols="12">
        <p class="body-1 mb-3" aria-label="about Karl">
          I started out my career with a deep love of psychology and a Masters in Fine Art creating behaviour-influencing sculptures and digital installations.
          Now, having spent 6 years bringing design thinking practices to rare diseases, I lead a frontend design team delivering elegant persona-driven solutions to change the face of renewable energy.
        </p>
        <p
          class="body-1 mb-3"
        >I regularly practice mindfulness and meditation, and I’m an art, design and architecture nerd that absolutely loves exploring and learning about how anything is built.</p>
        <p class="body-1 mb-3">
          Previously, I've also worked for
          <a
            href="https://www.cognite.co"
            class="teal--text"
          >Cognite</a>, Incuna and
          <a href="https://www.apple.com/retail/" class="teal--text">Apple</a>.
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
            class="teal--text"
          >email</a>. Due to the sensitivity of the projects I've worked on, I'm not permitted to list them here. I'll be adding a way to access this online soon, behind a login.
        </p>
        <p
          class="body-1 mb-3"
        >This website was designed and built by me in Vue.js. In some ways, it provides an idea of my personal design aesthetic and development style.</p>
      </v-col>
    </v-row>
    <v-divider />
    <v-row class="text-left">
      <v-col cols="12" aria-label="Karl's other interests">
        <h2 class="display font-weight-bold mb-3 mt-6">On the side.</h2>
      </v-col>
      <v-col cols="12" lg="8" md="8" sm="6">
        <h3 class="mb-3">Make Me A Cocktail</h3>
        <p
          class="body-1"
        >I'm the Design Lead for Make Me A Cocktail. We're currently in the process of redesigning and rebuilding the site.</p>
      </v-col>
      <v-col class="mb-3 py-0" cols="12" sm="6" md="4" lg="4">
        <v-card href="https://www.makemeacocktail.com/" target="_blank">
          <v-img alt="Make Me A Cocktail visual" src="../assets/mmac.webp"></v-img>
          <v-card-title class="subtitle-1">
            Make Me A Cocktail
            <v-spacer />
            <v-icon class="ml-4">mdi-open-in-new</v-icon>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" lg="8" md="8" sm="6">
        <h3 class="mb-3">Kanic</h3>
        <p class="body-1">I'm also currently building something new with some great people.</p>
      </v-col>
      <v-col class="mb-6 py-0" cols="12" sm="6" md="4" lg="4">
        <v-card href="https://www.kanic.co/" target="_blank">
          <v-img alt="Kanic logo visual" src="../assets/kanic.webp"></v-img>
          <v-card-title class="subtitle-1">
            Kanic
            <v-spacer />
            <v-icon class="ml-4">mdi-open-in-new</v-icon>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-divider />
    <v-row class="ml-1 mr-1">
      <v-col cols="6">
        <h2
          class="text-left display font-weight-bold mb-3 mt-10"
          aria-label="Karl's posts"
        >Latest Posts.</h2>
      </v-col>
      <v-spacer />
      <v-col cols="6" class="text-right mb-2">
        <v-btn text class="mt-10 ml-4 mb-2" to="/posts">
          More
          <v-icon class="ml-2">mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="mt-3 mb-5">
      <v-col v-for="post in posts.slice(0, 2)" :key="`${post.id}`" cols="12" sm="6">
        <Posts :post="post" class="justify-center" />
      </v-col>
    </v-row>
    <v-divider />
    <v-row class="text-left mt-10">
      <v-col cols="6">
        <h2 class="display font-weight-bold" aria-label="Karl's tech setup">Uses.</h2>
      </v-col>
      <v-spacer />
      <v-col cols="6" class="text-right mb-2">
        <v-btn text class="ml-4 mb-2" to="/uses">
          My setup
          <v-icon class="ml-2">mdi-arrow-right</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12">
        <p
          class="body-1 mb-3"
        >As a frontend designer, I use a variety of things to stay productive. Check out my hardware and software setup and get in touch if you have any questions.</p>
      </v-col>
    </v-row>
    <v-divider />
    <v-row class="ml-1 mr-1">
      <h2 class="display font-weight-bold mb-3 mt-10" aria-label="Karl's posts">Currently reading.</h2>
      <p
        class="body-1 mb-3 text-left"
      >I don't make any money from these links, but if you buy a book through one of the Amazon links then a portion of your purchase goes to charity.</p>
      <v-row>
        <v-col v-for="book in books" :key="`${book.id}`" cols="6" md="3">
          <Books :book="book" />
        </v-col>
      </v-row>
    </v-row>
    <v-row class="text-left">
      <v-col class="mb-5" cols="12">
        <h2
          class="display font-weight-bold mb-3"
          aria-label="Karl's music playlist"
        >Currently playing.</h2>
          <v-row>
          <v-col v-for="music in musics" :key="`${music.id}`" cols="12" md="6">
            <Musics :music="music" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-divider />
    <v-row class="text-left">
      <v-col cols="12" class="mt-5 mb-5">
        <p class="body-1">
          This site was built in
          <a href="https://vuejs.org/" target="_blank" class="teal--text">Vue</a> utilising the
          <a href="https://vuetifyjs.com" target="_blank" class="teal--text">Vuetify</a> library and is deployed via
          <a
            href="https://zeit.co/"
            target="_blank"
            class="teal--text"
          >Zeit Now</a>.
        </p>
        <p class="body-1">
          This site uses
          <a
            href="https://tribby.com/fonts/barlow/"
            target="_blank"
            class="teal--text"
          >Barlow</a> by Jeremy Tribby. Many thanks to him for making it available open-source.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Posts from "../components/Posts";
import postsData from "../data/posts.json";
import Books from "../components/Books";
import booksData from "../data/books.json";
import Musics from "../components/Musics";
import musicsData from "../data/musics.json";

export default {
  name: "About",
  components: {
    Posts,
    Books,
    Musics
  },
  data() {
    return {
      posts: postsData,
      books: booksData,
      musics: musicsData
    };
  }
};
</script>
