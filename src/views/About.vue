<template>
  <v-container>
    <v-row class="text-left">
      <v-col>
        <p class="text-uppercase title mt-10" style="line-height: 16pt">
          Senior UX/UI Designer
          <br />at
          <strong>NeuerEnergy</strong>
        </p>
        <h1
          class="display-3 font-weight-bold mb-10 pt-10"
          aria-label="intro to Karl"
        >Karl Emil James Koch.</h1>
        <h2 class="display-1 font-weight-medium pt-10 mb-3">
          I currently lead product design at
          <a
            href="https://www.neuerenergy.com"
            class="teal--text font-weight-bold"
            target="_blank"
            rel="noreferrer"
          >NeuerEnergy</a>
          &nbsp;
          <sup>
            <v-icon class="teal--text" small>mdi-open-in-new</v-icon>
          </sup> in London, UK.
        </h2>
      </v-col>
      <v-col class="mb-5" cols="12">
        <p
          class="body-1 mb-3"
          aria-label="about Karl"
        >I started out my career with a deep love of psychology and a Masters in Fine Art creating behaviour-influencing sculptures and digital installations.</p>
        <p
          class="body-1 mb-3"
        >Now, having spent 6 years bringing design thinking practices to rare diseases, I lead a product design team delivering elegant persona-driven solutions to change the face of renewable energy.</p>
        <p
          class="body-1 mb-3"
        >I regularly practice mindfulness and meditation, and I’m an art, design and architecture nerd that absolutely loves exploring and learning about how anything is built.</p>
        <p
          class="body-1 mb-3"
        >I closely follow Dieter Rams' Ten Principles For Good Design, using these as a wayfinder when planning and executing on any design or development decision and any implementation detail. As true as they were in the 1970's, these declarations are even more relevant today in a world of complexity and abundance.</p>
        <p class="body-1 mb-3">
          Previously, I've worked for
          <a
            href="https://www.cognite.co"
            target="_blank"
            rel="noreferrer"
            class="teal--text"
          >Cognite</a>, Incuna and
          <a
            href="https://www.apple.com/retail/"
            target="_blank"
            rel="noreferrer"
            class="teal--text"
          >Apple</a>.
        </p>
      </v-col>
    </v-row>
    <v-divider />
    <v-row class="text-left">
      <v-col cols="6">
        <h2
          class="text-left display font-weight-bold mb-3 mt-10"
          aria-label="Karl's portfolio"
        >Portfolio.</h2>
      </v-col>
      <v-spacer />
      <v-col cols="6" class="text-right mb-2">
        <v-btn text class="mt-10 ml-4 mb-2" to="/login">
          Login
          <v-icon class="ml-2" small>mdi-lock</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col class="mb-3 py-0" cols="12" sm="6" md="4" lg="4">
        <v-card href="mailto:karl@kejk.tech">
          <v-img alt="Portfolio visual" src="../assets/portfolio.webp" />
          <v-card-title class="subtitle-1">
            Request access
            <v-spacer />
            <v-icon class="ml-4">mdi-email</v-icon>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" lg="8" md="8" sm="6">
        <p
          class="body-1"
        >If you would like to see my portfolio or CV, you can request access by clicking the request access card. Due to the sensitivity of the projects I've worked on, I'm not permitted to list them here. You can see some of my other work in progess via the public access projects or my Dribbble.</p>
        <v-btn
          ref="noreferrer"
          color="orange"
          to="/public-projects"
          class="mt-2 mb-4 black--text" 
        >
          <v-icon class="mr-2 black--text" small>mdi-pencil-ruler</v-icon>Public Projects
        </v-btn>
        <v-btn
          ref="noreferrer"
          color="pink"
          href="http://_kejk.dribbble.com/"
          class="mt-2 ml-4 mb-4 white--text"
          target="_blank"
        >
          <v-icon class="mr-2 white--text" small>mdi-basketball</v-icon>Dribbble
        </v-btn>
      </v-col><!-- 
      <v-col class="mb-3 py-0" cols="12" sm="6" md="4" lg="4">
        <v-card href="https://calendly.com/kejk/60min" target="_blank" rel="noreferrer">
          <v-img alt="Calendar visual" src="../assets/calendly.webp" />
          <v-card-title class="subtitle-1">
            Book an appointment
            <v-spacer />
            <v-icon class="ml-4">mdi-calendar-clock</v-icon>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" lg="8" md="8" sm="6">
        <p
          class="body-1"
        >If you want to book some time to have a chat, you can book a slot. I'll always make myself available for questions, advice or mentorship if I can.</p>
        <p class="body-1">We could talk about:</p>
        <ul>
          <li>User experience, user interface, a11y, design leadership</li>
          <li>HTML, CSS/SCSS, Vue.js, Git</li>
          <li>Minimalism, meditation, mindfulness</li>
          <li>Guitars, metal or post rock</li>
        </ul>
      </v-col> -->
    </v-row>
    <v-row class="text-left">
      <v-col cols="12">
        <p class="body-1 mt-3 mb-3">
          This website was designed and built by me in
          <a
            href="https://vuejs.org/"
            target="_blank"
            rel="noreferrer"
            class="teal--text"
          >Vue</a> utilising the
          <a
            href="https://vuetifyjs.com"
            target="_blank"
            rel="noreferrer"
            class="teal--text"
          >Vuetify</a> library. It's a good indicator of my personal design aesthetic and approach to development.
        </p>
      </v-col>
    </v-row>
    <v-divider />
    <v-row class="text-left">
      <v-col cols="12" aria-label="Karl's other interests">
        <h2 class="display font-weight-bold mb-3 mt-6">On the side.</h2>
        <p
          class="body-1"
        >
          In my downtime I lead design at  <strong>Make Me A Cocktail</strong> and have released both a Figma plugin and a standalone macOS app. <strong>Px ›› Em</strong> is a plugin for Figma that converts either a text selection or an entered value from <code>pixels</code> to the related <code>em</code> value.  <strong>Lazy PDF</strong> is a free interfaceless macOS utility that allows you to effortlessly create a PDF from a set of selected images.
        </p>
      </v-col>
      <v-col class="mb-3 py-0" cols="12" md="4">
        <v-card href="https://www.makemeacocktail.com/" target="_blank" rel="noreferrer">
          <v-img alt="Make Me A Cocktail visual" src="../assets/mmac.webp" />
          <v-card-title class="subtitle-1">
            Make Me A Cocktail
            <v-spacer />
            <v-icon class="ml-4">mdi-open-in-new</v-icon>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col class="mb-3 py-0" cols="12" md="4">
        <v-card href="https://www.figma.com/community/plugin/837070613195594890/Px-%E2%80%BA%E2%80%BA-Em" target="_blank" rel="noreferrer" class="mb-3">
          <v-img alt="Lazy PDF logo visual" src="../assets/px2em.webp" />
          <v-card-title class="subtitle-1">
            Px ›› Em Figma Plugin
            <v-spacer />
            <v-icon class="ml-4">mdi-open-in-new</v-icon>
          </v-card-title>
        </v-card>
      </v-col>
      </v-col>
      <v-col class="mb-3 py-0" cols="12" md="4">
        <v-card href="https://www.lazypdf.tech" target="_blank" rel="noreferrer" class="mb-3">
          <v-img alt="Lazy PDF logo visual" src="../assets/lazyPDF.webp" />
          <v-card-title class="subtitle-1">
            Lazy PDF app
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
      <p class="body-1 mb-3 text-left">
        I don't make any money from these links, but if you buy a book through one of the Amazon links then a portion of your purchase goes to charity thanks to
        <a
          href="https://smile.amazon.com"
          target="_blank"
          rel="noreferrer"
          class="teal--text"
        >Amazon Smile</a>.
      </p>
      <v-row>
        <v-col v-for="book in books" :key="`${book.id}`" cols="6" md="3">
          <Books :book="book" />
        </v-col>
      </v-row>
    </v-row>
    <v-row class="text-left">
      <v-col class="mb-5">
        <h2
          class="display font-weight-bold mb-3"
          aria-label="Karl's music playlist"
        >Currently playing.</h2>
        <v-row>
          <v-col v-for="music in musics" :key="`${music.id}`" cols="12" sm="6">
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
          <a
            href="https://vuejs.org/"
            target="_blank"
            rel="noreferrer"
            class="teal--text"
          >Vue</a> utilising the
          <a
            href="https://vuetifyjs.com"
            target="_blank"
            rel="noreferrer"
            class="teal--text"
          >Vuetify</a> library and is deployed via
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noreferrer"
            class="teal--text"
          >Vercel Now</a>.
        </p>
        <p class="body-1">
          The font rendered throughout is
          <a
            href="http://atipofoundry.com/fonts/archia"
            target="_blank"
            rel="noreferrer"
            class="teal--text"
          >Archia</a> by Atipo.
        </p>
        <p
          class="body-1"
        >This website doesn't use cookies or analytics scripts because I don't need to track you. All it does is use localstorage to save session state for faster re-loading.</p>
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
