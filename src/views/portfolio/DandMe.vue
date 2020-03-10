<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12">
        <v-btn :to="'/portfolio'">
          <v-icon class="mr-2">mdi-chevron-left</v-icon>Back
        </v-btn>
        <v-img :src="`${hero}`" class="mt-10 img" alt="image of duchenne and me app in use"></v-img>
        <h1
          class="display-2 font-weight-bold mb-3 mt-10"
        >Duchenne and Me.</h1>
        <h2
          class="headline mb-3 mt-2"
        >Stay on top of your Duchenne.</h2>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="12">
        <h3 class="mb-4">What is it?</h3>
          <p>
              Duchenne and Me is an app for parents, carers and patients with Duchenne Muscular Dystrophy, a debilitating and fatal muscle wastage disease. Duchenne and Me was developed to help manage the day to day challenges of living with Duchenne from both patient
              and carer perspectives. It is a one-of-a-kind product, tailored specifically, but not exclusively, to Duchenne.
          </p>
          <h4 class="mb-4">My role</h4>
          <p>We were a small team when we started the app project so I had to be flexible in how I supported the wider team. My involvement covered a wide spectrum from research, wireframing and prototyping, through to the final information
              architecture, user interface and management of rollout. We performed significant user testing throughout, working closely with one particular parent of a child with Duchenne and made major revisions to the interface based on
              this continuous feedback.
          </p>
          <p>
            My role consisted of the following:
            <ul>
                <li>In-person interviews/group session</li>
                <li>Planning and paper prototyping</li>
                <li>Development of sitemap and information architecture</li>
                <li>Creation of high-fidelity wireframes and prototype in InVision</li>
                <li>Creation of final UI in Sketch</li>
                <li>Provision of files and functional spec to development</li>
                <li>Beta test setup and second round research/feedback</li>
                <li>Some minor development</li>
            </ul>
          </p>
          <section aria-label="summary">
            <h4 class="mb-4">Summary</h4>
            <p>
                Following an approach from our client about creating something that would provide a service to medicine, we ran a workshop with key advocates in the Duchenne field to identify the potential needs of a tool to help in their day to day experiences.
            </p>
            <p>
                The research led to the idea of an app which we ideated in the session via paper prototypes and subsequently drew up a development plan that we used to inform the relevant project phases moving forwards.
            </p>
            <p>
                The app we created was a huge success despite several challenging moments throughout its process (almost resulting in it not going live in time for Rare Disease Day!) and has gone on to receive commendation for its value by the PM Society's digital product
                committee and industry experts.
            </p>
            <p>
                From overseeing analytics from phase one into phase two, we can see that app retention rates are at around 83% on average and we continue to receive positive reviews from nurses and doctors who've shared the app with their patients.
            </p>
            <p>
                The project is still in active development and phase two is currently in rollout phase throughout the EU.
            </p>
        </section>
        <section class="mt-8">
            <v-btn :href="`${url}`" target="_blank" alt="link to app store">Duchenne and Me<v-icon class="ml-2">mdi-open-in-new</v-icon></v-btn>
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
import duchenneImages from '../../data/duchenneImages.json'

export default {
  name: "Duchenne and Me",
  data() {
    return {
      images: duchenneImages,
      hero: "https://res.cloudinary.com/kejk/image/upload/v1563370319/woman-standing-with-iphone-x_stxmmn.jpg",
      url: "https://itunes.apple.com/us/app/duchenne-and-me/id1285029104?ls=1&mt=8",
    };
  }
};
</script>