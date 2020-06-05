<template>
  <v-card
    v-if="project.extTrue" 
    :href="`${project.url}`" 
    :target="`${project.ext}`"
    hover
    rel="noreferrer"
  >
    <v-img :src="`${project.img}`" />
    <v-card-title class="subtitle-1">
      {{ project.title }}
      <v-spacer />
      <v-icon class="ml-4">
        mdi-open-in-new
      </v-icon>
    </v-card-title>
  </v-card>
  <v-card
    v-else
    hover
    :to="`${project.url}`"
    rel="noreferrer"
  >
    <v-img :src="`${project.img}`" />
    <v-card-title class="subtitle-1">
      {{ project.title }}
      <v-spacer />
      <v-icon class="ml-4">
        mdi-arrow-right
      </v-icon>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "Projects",
  props: {
    project: {
      type: String,
      default: 'No projects are loaded'
    }
  }
};
</script>