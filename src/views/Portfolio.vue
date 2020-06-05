<template>
  <v-container>
    <v-row class="text-left ml-1 mr-1">
      <v-col cols="12">
        <h1
          class="display-2 font-weight-bold mb-3 mt-10"
          aria-label="intro to Karl"
        >
          /Portfolio.
        </h1>
        <h2
          class="display font-weight-bold mb-3 mt-10"
          aria-label="Karl's projects"
        >
          A sample collection of my work.
        </h2>
        <p>You can see some work in progress projects on my Dribbble account. All portfolio pieces here are finished projects or based on my current employment.</p>
        <v-btn
          ref="noreferrer"
          color="teal"
          href="https://res.cloudinary.com/kejk/image/upload/v1585261635/Karl_Koch_CV_2020_qeobyw.pdf"
          class="mt-4 white--text"
          target="_blank"
        >
          <v-icon
            class="mr-2 white--text"
            small
          >
            mdi-file-document-outline
          </v-icon>Résumé
        </v-btn>
        <v-btn
          ref="noreferrer"
          color="pink"
          href="http://_kejk.dribbble.com/"
          class="mt-4 ml-4 white--text"
          target="_blank"
        >
          <v-icon
            class="mr-2 white--text"
            small
          >
            mdi-basketball
          </v-icon>Dribbble
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="mt-3 mb-10">
      <v-col
        v-for="project in projects.slice(0,4)"
        :key="`${project.id}`"
        cols="12"
        sm="6"
      >
        <Projects
          :project="project"
          class="justify-center"
        />
      </v-col>
    </v-row>
    <v-divider />
    <v-row class="text-left">
      <v-col cols="12">
        <h2
          class="display font-weight-bold mb-3 mt-10"
          aria-label="Karl's projects"
        >
          Other projects I've completed.
        </h2>
      </v-col>
    </v-row>
    <v-row class="mt-3 mb-5">
      <v-col
        v-for="challenge in challenges"
        :key="`${challenge.id}`"
        cols="12"
        sm="6"
      >
        <Challenges
          :challenge="challenge"
          class="justify-center"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Projects from "../components/Projects";
import Challenges from "../components/Challenges";
import projectsData from "../data/projects.json";
import challengesData from "../data/challenges.json";

export default {
  name: "Portfolio",
  components: {
    Projects,
    Challenges
  },
  data() {
    return {
      links: [
        {
          label: "Portfolio",
          url: "/portfolio"
        }
      ],
      projects: projectsData,
      challenges: challengesData
    };
  }
};
</script>
