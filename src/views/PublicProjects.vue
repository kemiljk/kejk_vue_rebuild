<template>
  <v-container>
    <v-row class="text-left ml-1 mr-1">
      <v-col cols="12">
        <v-btn 
          text
          @click="$router.go(-1)" 
        >
          <v-icon class="mr-2">
            mdi-arrow-left
          </v-icon>Back
        </v-btn>
        <h1
          class="display-2 font-weight-bold mb-3 mt-10"
          aria-label="intro to Karl"
        >
          /Public–Projects.
        </h1>
        <h2
          class="display font-weight-bold mb-3 mt-10"
          aria-label="Karl's projects"
        >
          <v-icon color="pink">
            mdi-basketball
          </v-icon> Work in Progress via Dribbble
        </h2>
        <p>You can see some work in progress projects here and on my Dribbble account.</p>
        <v-btn
          ref="noreferrer"
          color="pink"
          href="http://_kejk.dribbble.com/"
          class="mt-4 white--text"
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
        v-for="project in projects.slice(7,10)"
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
          Design tasks I've completed.
        </h2>
      </v-col>
    </v-row>
    <v-row class="mt-3 mb-5">
      <v-col 
        v-for="challenge in challenges.slice(1,4)" 
        :key="`${challenge.id}`" 
        cols="12" 
        sm="6"
      >
        <Challenges :challenge="challenge" class="justify-center" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Projects from "../components/Projects";
import Challenges from "../components/Challenges";

export default {
  name: "PublicProjects",
  components: {
    Projects,
    Challenges
  },
  data() {
    return {
      links: [
        {
          label: "Public Projects",
          url: "/public-projects"
        }
      ],
      projects: [],
      challenges: []
    };
  },
  mounted() {
    this.getProjectsData();
    this.getChallengesData();
  },
  methods: {
    getProjectsData: function () {
      fetch('/data/projects.json')
        .then(response => response.json())
        .then(data => (this.projects = data));
    },
    getChallengesData: function () {
      fetch('/data/challenges.json')
        .then(response => response.json())
        .then(data => (this.challenges = data));
    }
  }
};
</script>
