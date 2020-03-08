<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12">
        <v-btn :to="'/portfolio'">
          <v-icon class="mr-2">mdi-chevron-left</v-icon>Back
        </v-btn>
        <v-img :src="`${hero}`" class="mt-10 img" alt="core Make Me a Cocktail home page" />
        <h1
          class="display-2 font-weight-bold mb-3 mt-10"
        >Make Me A Cocktail.</h1>
        <h2
          class="headline mb-3 mt-2"
        >The world's best cocktail resource.</h2>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="12">
        <h3 class="mb-4">What is it?</h3>
          <p>
              Make Me A Cocktail (MMAC) is an online resource where at it's core users can enter what ingredients they have and get shown what they can make with the said ingredients. It utilises a clever substitution algorithm to broaden users results while still
              allowing cocktails to be exact and accurate.
          </p>
          <p>
              The website contains over 3000 cocktails to be searched over, with clear instructions and pictures to help users make the best cocktails they can.
          </p>
          <h4 class="mb-4">My role</h4>
          <p>
              I was hired by Nick Wilkins, CEO of Make Me A Cocktail directly to work on refining the design of the new version 5 build of the website. Nick and his team had spent a lot of time developing a new core user journey along with a substantial update in technology
              and architecture. The team wanted my focus to be on a few core pages and ensure they retained the existing look and feel but with the opportunity to add some new elements of design. This involved a lot of data analysis and
              regular discussions with Nick and the team to identify key road blocks for users and opportunities to improve the overall experience. Direct end-user testing wasn't available for this iteration but is planned for a future version
              6 update.
          </p>
          <p>
              During my website assessment, I noticed a glaring need for refining and updating the website design system to create a more unified and modern look and feel without losing the existing design language.
          </p>
          <p>
            My role consisted of the following:
            <ul>
                <li>Working with the site owner to identify current pain points and opportunities for improvement</li>
                <li>Identification and consolidation of core requirements</li>
                <li>Analysis of current website analytical data and the new proposed user journey</li>
                <li>Creation of low-fidelity wireframes</li>
                <li>Creation of high-fidelity wireframes and prototype</li>
                <li>Creation of full designs, including a new design system and component set</li>
                <li>Provision of files to development</li>
            </ul>
          </p>
          <section aria-label="summary">
            <h4 class="mb-4">Summary</h4>
            <p>
                Make Me A Cocktail is a very successful website that caters to a wide audience of cocktail lovers, providing a much needed single source of truth when looking for cocktail recipes.
            </p>
            <p>
                I was approached to provide guidance on the user experience and final design of several new pages following a major version 5 update. It was important for me to maintain the existing design language but I was given creative license to adapt and advance
                the existing platform. During the design stage I felt it necessary to start to think about developing a new design system, one that create greater harmony to the elements on a page, one that unified the interface language
                through consistent use of a bespoke icon set, one that ensured the most optimal experience across desktop and mobile.
            </p>
            <p>
                The success of these three page updates has led to me securing an ongoing agreement to support further development of the site from both an advisory and designer's perspective.
            </p>
            <p>
                Version 5 is in the process of rolling out.
            </p>
          </section>
          <section class="mt-8">
            <v-btn :href="`${url}`" target="_blank" alt="link to app store">Make Me A Cocktail<v-icon class="ml-2">mdi-open-in-new</v-icon></v-btn>
          </section>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col v-for="image in images" :key="`${image.id}`" cols="12">
          <v-img :src="`${image.img}`" class="img"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import mmacImages from '../../data/mmacImages.json'

export default {
  name: "Make Me A Cocktail",
  data() {
    return {
      images: mmacImages,
      hero: "https://res.cloudinary.com/kejk/image/upload/v1566072477/Mockup_mkblp7.png",
      url: "https://www.makemeacocktail.com"
    };
  }
};
</script>