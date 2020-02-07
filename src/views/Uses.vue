<template>
  <v-container>
    <v-row class="text-left">
      <v-col class="mb-4" cols="12" md="8">
        <h1
          class="display-1 font-weight-bold mb-3"
        >/Uses.</h1>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
    name: "Uses",

    data () {
    return {
      links: [
        {
        label: 'About',
        url: '/'
        }
      ]
    }
  }
};

</script>