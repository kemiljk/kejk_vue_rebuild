<template>
    <v-card hover :href="`${project.url}`" rel="noreferrer">
    <v-img :src="`${project.img}`"></v-img>
        <v-card-title class="subtitle-1">
        {{ project.title }}
        <v-spacer />
        <v-icon class="ml-4">mdi-arrow-right</v-icon>
        </v-card-title>
    </v-card>
</template>

<script>
export default {
  name: "Projects",
  props: {
    project: {
      type: String
    }
  }
};
</script>