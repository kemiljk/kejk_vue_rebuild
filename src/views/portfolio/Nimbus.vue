<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12">
        <v-btn @click="$router.go(-1)" outlined>
          <v-icon class="mr-2">
            mdi-chevron-left
          </v-icon>Back
        </v-btn>
        <v-img
          :src="`${hero}`"
          class="mt-10 img"
          alt="core Project Nimbus home page"
        />
        <h1
          class="display-2 font-weight-bold mb-3 mt-10"
        >
          Project Nimbus.
        </h1>
        <h2
          class="headline mb-3 mt-2"
        >
          Automation for the non-technical.
        </h2>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="12">
        <h3 class="mb-4">
          What is it?
        </h3>
        <p>
          Project Nimbus website started after we noticed the significant amount of time it took to launch a website for one of our clients. This issue occurred at both the initial launch phase as well as during any deployment process from
          <code>Dev > Staging > Live</code>. This website aims to democratise the process of website capture and deployment so that Project Managers are able to do staged deploys without requiring dev support.
        </p>
        <h4 class="mb-4">
          My role
        </h4>
        <p class="mt-4">
          My role consisted of the following:
        </p>
        <ul>
          <li>Research based on stakeholder whiteboard session</li>
          <li>Identification and consolidation of core requirements spec</li>
          <li>Creation of simple user journey diagrams to identify the pain points of developers and project managers</li>
          <li>Development of information architecture</li>
          <li>Creation of low-fidelity wireframes</li>
          <li>Creation of high-fidelity wireframes and prototype</li>
          <li>Conceptulisation and development of final brand identity and marque</li>
          <li>Creation of full designs, including a design system and component set</li>
          <li>Provision of files and functional spec to development</li>
        </ul>
        <section aria-label="summary">
          <h4 class="mb-4 mt-4">
            Summary
          </h4>
          <p>
            Our internal project teams regularly had to screenshot entire websites, including all popups and modal information to create a consolidated PDF that captures the state of the site at the point of approval. This is a legal and compliance issue for thei clients and is an absolute requirement of all digital jobs due to the fluidity of development.
          </p>
          <p>
            We focused on evaluating the core problems and created a wishlist that covered versions 1-1.4 based on prioritisation. The intial featureset will include the ability to trigger a screenshot capture of an entire website with all popups triggered and untriggered.
            It will also show visibly what IP address the site is currently active on so we know when the site hits the live DNS. The project team will also be capable of pushing the sites between Dev, Staging and Live via simple boolean
            toggles, check off a common pre-launch checklist, see the site's Google Lighthouse usability score, and both run a browser test on common browsers to get a pass/fail response and also create a sitemap via a single click.
          </p>
          <p>
            There's a lot here, but these are all small–medium tasks that were regularly repeated, so creating automated tools to perform these will save countless hours. We estimated that a project manager spends around 6 hours a day completing each of these steps when
            required. This saving outweighs the initial project build time by many times and was therefore previously given the greenlight by the management team.
          </p>
          <p>
            This project is a work in progress and is migrating to be the key focus of <a
              href="https://www.kanic.co"
              class="teal--text"
              target="_blank"
            >Kanic</a>.
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
import nimbusImages from '../../data/nimbusImages.json'

export default {
  name: "Nimbus",
  data() {
    return {
      images: nimbusImages,
      hero: "https://res.cloudinary.com/kejk/image/upload/v1564640894/nimbusHeader_lkufvy.png"
    };
  }
};
</script>