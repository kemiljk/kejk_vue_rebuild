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
        <h1 class="display-2 font-weight-bold mb-3 mt-10">
          KEJK.tech.
        </h1>
        <h2 class="headline mb-3 mt-2">
          From HTML & CSS
          <v-icon>mdi-arrow-right</v-icon>Vue.js.
        </h2>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="12">
        <p>Case study coming soon. For now, this website is itself, the case study.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Dyed"
};
</script>