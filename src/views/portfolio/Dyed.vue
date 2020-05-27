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
          alt="image of DyeD prototype on devices"
        />
        <h1
          class="display-2 font-weight-bold mb-3 mt-10"
        >
          Dyed.
        </h1>
        <h2
          class="headline mb-3 mt-2"
        >
          Dry eye is more than just an irritation.
        </h2>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="12">
        <h3 class="mb-4">
          What is it?
        </h3>
        <p>
          DyeD was conceived when our client approached us about wanting to improve the management of dry eye disease, especially with non-expert healthcare professionals who don't have the same level of expensive equipment that the expert centres do. Dry eye disease
          is a life altering condition but it benefits from a very fast response to treatment when caught.
        </p>
        <h4 class="mb-4">
          My role
        </h4>
        <p>
          I was involved in many aspects of the DyeD project, from conception of technology and interface, through to defining the machine learning model and interface for the app.
        </p>
        <p class="mt-4">
          My role consisted of the following:
        </p>
        <ul>
          <li>Skype-based interviews</li>
          <li>Development of sitemap and information architecture</li>
          <li>Creation of high-fidelity wireframes and prototype</li>
          <li>Conceptulisation and development of final brand identity and marque</li>
          <li>Conception and delivery of interface</li>
          <li>Provision of files and functional spec to development</li>
          <li>Vision for phase 2</li>
          <li>Alpha and beta test guides and research script writing</li>
          <li>Expert interviews to evaluate stakeholder feedback</li>
        </ul>
        <section aria-label="summary">
          <h4 class="mb-4 mt-4">
            Summary
          </h4>
          <p>
            We were approached by our client to think about how to create a tool that might help general practitioners to capture images of Fluoroscene dyed eyes and grade them accordingly based on the industry recognised Oxford Rating Scale.
          </p>
          <p>
            The current approach involves looking at either a paper representation of the Oxford Rating Scale or just recalling it from memory and then, using their best judgement, comparing the real-time image of the eye to this mental or paper model. Often, the
            reality of the image is mismatched with the true severity (patients are often <i>under</i> graded when assessed).
          </p>
          <p>
            This project is still in development and the visuals provided here are simply conceptual ideas that are by no-means final. We've completed a significant amount of scoping with provision of multi-phase scope of works being agreed, a functional spec being
            written, wireframes and content maps being defined and experts (for research and validation) being onboarded for the alpha phase.
          </p>
          <p>
            Phase two is penned to use a machine learning model (silently trained during phase one) to start offering up predictive insight based on patterns found in the newly created library of graded images. This will be a first-of-its-kind predictive algorithm
            for dry eye disease.
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
import dyedImages from '../../data/dyedImages.json'

export default {
  name: "Dyed",
  data() {
    return {
      images: dyedImages,
      hero: "https://res.cloudinary.com/kejk/image/upload/v1584049333/iphone-xs-with-a-journal-on-the-right-side_afo3ki.jpg",
    }
  }
};
</script>