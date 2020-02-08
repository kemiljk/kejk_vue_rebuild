<template>
  <v-container>
      <v-row class="text-left">
        <v-col>
            <h1 class="display-2 font-weight-bold mb-3 mt-10" aria-label="intro to Karl">Coming soon.
            </h1>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Portfolio",

  data() {
    return {
      links: [
        {
          label: "Portfolio",
          url: "/portfolio"
        },
      ]
    };
  }
};
</script>