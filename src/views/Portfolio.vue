<template>
  <v-container>
    <v-row class="text-left ml-1 mr-1">
      <v-col cols="12">
        <h1 class="display-2 font-weight-bold mb-3 mt-10" aria-label="intro to Karl">/Portfolio.</h1>
        <h2
          class="display font-weight-bold mb-3 mt-10"
          aria-label="Karl's projects"
        >A sample collection of my work.</h2>
        <v-btn
          ref="noreferrer"
          color="teal"
          href="https://res.cloudinary.com/kejk/image/upload/v1585261635/Karl_Koch_CV_2020_qeobyw.pdf"
          class="mt-4 white--text"
          target="_blank"
        >
          <v-icon class="mr-2 white--text" small>mdi-file-document-outline</v-icon>Résumé
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="mt-3 mb-5">
      <v-col v-for="project in projects" :key="`${project.id}`" cols="12" sm="6">
        <Projects :project="project" class="justify-center" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Projects from "../components/Projects";
import projectsData from "../data/projects.json";

export default {
  name: "Portfolio",
  components: {
    Projects
  },
  data() {
    return {
      links: [
        {
          label: "Portfolio",
          url: "/portfolio"
        }
      ],
      projects: projectsData
    };
  }
};
</script>
