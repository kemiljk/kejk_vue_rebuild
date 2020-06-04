<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12">
        <v-btn 
          text
          @click="$router.go(-1)" 
        >
          <v-icon class="mr-2">
            mdi-arrow-left
          </v-icon>Back
        </v-btn>
        <v-img
          :src="`${hero}`"
          class="mt-10 img"
          alt="image of Enel Dashboard on a desktop"
        />
        <h1
          class="display-2 font-weight-bold mb-3 mt-10"
        >
          Enel Dashboard.
        </h1>
        <h2
          class="headline mb-3 mt-2"
        >
          Downtime prediction in real-time.
        </h2>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="12">
        <h3 class="mb-4">
          What is it?
        </h3>
        <p>
          The Enel internal dashboard was developed as a product to help our client validate and promote a pioneering new approach to predictive maintenance in energy storage systems. The dashboard's sole intention was to receive datasets, ingest the data and be parsed through a machine learning algorithm that populated the dashboard with estimated predictions of battery downtime based on historic datasets.
        </p>
        <h4 class="mb-4">
          My role
        </h4>
        <p class="mt-4">
          My role consisted of the following:
        </p>
        <ul>
          <li>In-person interview with the end client</li>
          <li>Planning and paper prototyping</li>
          <li>Development of sitemap and information architecture</li>
          <li>Creation of high-fidelity wireframes and prototype in Adobe XD</li>
          <li>Creation of final UI in Adobe XD</li>
          <li>Provision of files to development and functional documentation</li>
          <li>Some minor frontend development in lit-element/Web Components</li>
        </ul>
        <section aria-label="summary">
          <h4 class="mb-4 mt-4">
            Summary
          </h4>
          <p>
            We were approached by Enel to develop a dashboard capable of predicting battery downtime in renewable energy production plants. Having been provided with a clear goal of developing an internal dashboard capable of supporting our client's requirement to sell his vision to his boss.
          </p>
          <p>
            From wider discussions, we realised that complex graphs and overly detailed visuals were not going to be applicable as our client wanted simple numbers to validate the success or failure of the project at a glance, with the opportunity to view graphs if desired.
          </p>
          <p>
            The project was a complete success and led to our client being promoted to focus his efforts company-wide. Despite having a very poor and minimal dataset, our data scientist was able to develop an algorithm that had a 60%+ predictability score.
          </p>
          <p>
            This project is now due to evolve from a single dashboard into a production ready application that can be distributed across the organisation and lead to increased uptime in renewable energy generation.
          </p>
          <p>
            The project is still in active development and phase two is currently in the pre-planning phase.
          </p>
        </section>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col
        v-for="image in images"
        :key="`${image.id}`"
        cols="12"
      >
        <v-img
          :src="`${image.img}`"
          class="img"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import enelImages from '../../data/enelImages.json'

export default {
  name: "Enel",
  data() {
    return {
      images: enelImages,
      hero: "https://res.cloudinary.com/kejk/image/upload/v1583872652/Enel_Header_ckjyvm.png",
    };
  }
};
</script>

https://res.cloudinary.com/kejk/image/upload/v1583872652/Enel_Header_ckjyvm.png