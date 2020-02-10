<template>
  <v-container>
    <v-row class="text-left">
      <v-col>
        <h1
          class="display-2 font-weight-bold mb-3 mt-10"
          aria-label="intro to Karl"
        >Karl Emil James Koch.</h1>
        <h2
          class="display-1 font-weight-bold mb-3"
          aria-label="intro to Karl"
        >I'm a designer and frontend developer.</h2>
        <h2 class="display-1 font-weight-bold mb-3">
          I lead design and frontend development at
          <a
            href="https://www.neuerenergy.com"
            class="orange--text"
            target="_blank"
          >NeuerEnergy</a> in London, UK.
        </h2>
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
          <a href="https://www.cognite.co" class="teal--text">Cognite</a>, Incuna and
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
          >email</a>. Due to the sensitivity of the projects I've worked on, I'm not permitted to list them here. I'll be adding a way to access this online soon, behind the Login section.
        </p>
        <p
          class="body-1 mb-3"
        >This website was designed and built by me, from scratch, in Vue.js. In some ways, it provides an idea of my personal design aesthetic and development style.</p>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col class="mb-5" cols="12" lg="8" md="6" sm="6" aria-label="Karl's other interests">
        <h2 class="display font-weight-bold mb-3">On the side.</h2>
        <p
          class="body-1 mb-3"
        >I'm the Design Lead for Make Me A Cocktail. We're currently in the process of redesigning and rebuilding the site.</p>
        <v-btn
          href="https://makemeacocktail.com/"
          target="_blank"
          class="teal--text font-weight-bold"
        >Make Me A Cocktail</v-btn>
      </v-col>
      <v-col class="mb-5" cols="12" sm="6" md="6" lg="4">
        <v-img alt="Make Me A Cocktail visual" src="../assets/mmac.png" class="rounded-img"></v-img>
      </v-col>
      <v-col class="mb-5" cols="12" lg="8" md="6" sm="6">
        <p class="body-1 mb-3">I'm also currently building something new with some great people.</p>
        <v-btn href="https://www.kanic.co" target="_blank" class="teal--text font-weight-bold">Kanic</v-btn>
      </v-col>
      <v-col class="mb-5" cols="12" sm="6" md="6" lg="4">
        <v-img alt="Kanic logo visual" src="../assets/kanic.png" class="rounded-img"></v-img>
      </v-col>
    </v-row>
    <v-row class="ml-1 mr-1">
      <h2 class="display font-weight-bold mb-3" aria-label="Karl's posts">Posts.</h2>
      <v-row>
        <v-col v-for="post in posts" :key="`${post.id}`" cols="12" md="6">
          <Posts :post="post" class="justify-center" />
        </v-col>
      </v-row>
    </v-row>
    <v-row class="text-left">
      <v-col class="mb-5" cols="12" md="8">
        <h2 class="display font-weight-bold mb-3" aria-label="Karl's tech setup">Uses.</h2>
        <p
          class="body-1 mb-3"
        >If you want to see the hardware and software I use on a daily basis to get work done, you can check it out on the Uses tab at the top.</p>
      </v-col>
    </v-row>
    <v-row class="ml-1 mr-1">
      <h2 class="display font-weight-bold mb-3" aria-label="Karl's posts">Currently reading.</h2>
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
        <iframe
          allow="autoplay *; encrypted-media *;"
          frameborder="0"
          height="450"
          style="width:100%;max-width:900px;overflow:hidden;background:transparent; border-radius: 8px; box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/gb/playlist/pure-metal/pl.u-jZgo9Tqqaarj"
        ></iframe>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Posts from "../components/Posts";
import postsData from "../data/posts.json";
import Books from "../components/Books";
import booksData from "../data/books.json";

export default {
  name: "About",
  components: {
    Posts,
    Books
  },
  data() {
    return {
      posts: postsData,
      books: booksData
    };
  }
};
</script>
