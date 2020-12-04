<template>
  <v-row class="mx-4 mx-lg-16">
    <v-col cols="12" md="12">
      <v-row class="text-left">
        <v-btn 
            text
            @click="$router.go(-1)" 
          >
          <v-icon class="mr-2">
            mdi-arrow-left
          </v-icon>
          Back to all posts
        </v-btn>
      </v-row>
      <Blog :blog="blog" class="justify-center" />
    </v-col>
  </v-row>
</template>

<script>
import Blog from "../components/Blog";

const Cosmic = require("cosmicjs");
const api = Cosmic();
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: "d1ffcb90-35a5-11eb-b56f-05f2cd29bdde",
  read_key: "uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK"
});

export default {
  name: "BlogView",
  components: {
    Blog
  },
  data() {
    return {
      loading: false,
      blog: {},
      slug: ""
    };
  },
  created() {
    this.slug = this.$route.params.slug;
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = this.blog = null;
      this.loading = true;
      bucket
        .getObject({
          slug: this.slug
        })
        .then(data => {
          console.log(data);
          this.blog = data.object;
          this.loading = false;
        });
    },
  }
};
</script>