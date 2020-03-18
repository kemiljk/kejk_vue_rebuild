<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12">
        <v-btn :to="'/portfolio'">
          <v-icon class="mr-2">
            mdi-chevron-left
          </v-icon>Back
        </v-btn>
        <v-img
          :src="`${hero}`"
          class="mt-10 img"
          alt="core NeuerEnergy Scenario Analysis page"
        />
        <h1
          class="display-2 font-weight-bold mb-3 mt-10"
        >
          NeuerEnergy.
        </h1>
        <h2
          class="headline mb-3 mt-2"
        >
          Removing the barriers to corporate carbon neutrality.
        </h2>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="12">
        <v-btn
          href="https://www.neuerenergy.com"
          color="teal"
          target="_blank"
          class="white--text"
        >
          NeuerEnergy
          <v-icon 
            class="ml-2 white--text" 
            small
          >
            mdi-open-in-new
          </v-icon>
        </v-btn>
        <h3 class="mb-4 mt-8">
          What is it?
        </h3>
        <p>
          NeuerEnergy brings businesses together with a simplified marketplace of established renewable energy providers and exciting new eco-friendly projects.
          Using sophisticated AI-driven automation, the seamless cloud-based platform helps businesses diversify an energy mix tailored for their individual business needs – aggregating local suppliers with side-by-side pricing structures and automating complex multi-provider Power Purchase Agreements (PPAs) for them. The user-friendly performance dashboard then helps customers keep track of their total CO<sub>2</sub> reduction, perform cost benefit analysis and effortlessly port agreements to new suppliers. 
        </p>
        <h4 class="mb-4">
          My role
        </h4>
        <p>
          We are a small team of eight, working to deliver a comprehensive and powerful product for corporate and industrial customers.
        </p>
        <p>My role consisted of the following:</p>
        <ul>
          <li>Requirement gathering and planning sessions with the product owner</li>
          <li>Planning and paper prototyping</li>
          <li>Creation of block frames and high-fidelity wireframes</li>
          <li>Creation of final UI in Adobe XD</li>
          <li>Creation of initial prototype in HTML, CSS & JS</li>
          <li>Creation of second prototype in Vue.js</li>
          <li>Design and frontend development leadership</li>
          <li>Product management (sprint planning and retrospectives)</li>
          <li>Some production-ready development in CSS and Web Components using lit-element</li>
        </ul>
        <p class="mt-4">
          Role beyond product development:
        </p>
        <ul>
          <li>Brand development and ownership</li>
          <li>Social media planning and execution</li>
        </ul>
        <section aria-label="summary">
          <h4 class="mb-4 mt-4">
            Summary
          </h4>
          <p>
            NeuerEnergy is a first-of-its-kind product, providing a seamless and connected experience for corporate and industrial customers to manage their carbon reduction targets through long-term PPAs. Generator partners are integrated into the platform to obtain access to these customers whilst also benefiting from comprehensive predictive maintenance and plant planning toolsets.
          </p>
          <p>
            During its development, NeuerEnergy has had many iterations. The product-market fit has been clear from day one, but the intended output has always been tricky to pin down. This project is still in active development and is currently nearing its alpha production launch.
          </p>
          <p>
            We're building the application using lit-element and the Web Components standard to ensure interoperability across all browsers and platforms, without relying on the heaviness of a framework. We've also developed the application to be an single-page app and a serverless architecture through Azure Functions. 
          </p>
          <p>
            The app relies heavily on our team maintaining a tight relationship from Data Science (writing machine learning algorithms and data APIs in Python), to backend development (working in C# and Azure Functions), to frontend development (working in lit-element and Web Components). Across all of this sits my immediate team, working through Customer Experience, User/platform Experience, User Interface and some additional frontend development support. 
          </p>
          <p>
            The project is still in active development but is nearing its alpha launch.
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
import neuerEnergyImages from '../../data/neuerEnergyImages.json'

export default {
  name: "NeuerEnergy",
  data() {
    return {
      images: neuerEnergyImages,
      hero: "https://res.cloudinary.com/kejk/image/upload/v1584533959/NeuerEnergy_Header_s341wh.png",
    };
  }
};
</script>