<template>
  <v-container>
      <v-btn 
          v-for="link in links"
					:key="`${link.label}--page-link`"
					class="my-2"
					:to="link.url"
				>
					<v-icon left>mdi-chevron-left</v-icon>{{ link.label }}
        </v-btn>
    <v-row class="text-left">
      <v-col class="mb-4" cols="12" md="6">
        <h1
          class="display-1 font-weight-bold mb-3"
        >I'm Karl, a human-centred designer and frontend developer.</h1>
        <h1 class="display-1 font-weight-bold mb-3">I lead design at NeuerEnergy in London, UK.</h1>
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