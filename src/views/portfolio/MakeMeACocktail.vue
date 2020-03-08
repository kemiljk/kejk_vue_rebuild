<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12">
        <v-btn :to="'/portfolio'">
          <v-icon class="mr-2">mdi-chevron-left</v-icon>Back
        </v-btn>
        <h1
          class="display-2 font-weight-bold mb-3 mt-10"
        >Make Me A Cocktail.</h1>
        <h2
          class="headline font-weight-bold mb-3 mt-10"
        >Subtitle.</h2>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="12">
        <p>Body content</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Make Me A Cocktail"
};
</script>