<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12">
        <v-btn 
          text
          to="/"
        >
          <v-icon class="mr-2">
            mdi-arrow-left
          </v-icon>Back
        </v-btn>
        <h1
          class="display-2 font-weight-bold mb-3 mt-10"
          aria-label="intro to Karl"
        >
          /Posts.
        </h1>
        <h2
          class="display font-weight-bold mb-3 mt-10"
          aria-label="Karl's posts"
        >
          Thoughts on development and design.
        </h2>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="12">
        <v-row class="mt-3 mb-5">
      <v-col
        v-for="blog in blogs"
        :key="blog._id"
        cols="12"
        sm="6"
      >
        <BlogCard
          :blog="blog"
          class="justify-center"
        />
      </v-col>
    </v-row>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="12">
      <h3
          class="headline font-weight-bold mb-3 mt-10"
        >
          External posts.
        </h3>
      </v-col>
    </v-row>
    <v-row class="mt-3 mb-5">
      <v-col
        v-for="post in posts"
        :key="post._id"
        cols="12"
        sm="6"
      >
        <PostCard
          :post="post"
          class="justify-center"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PostCard from "../components/PostCard";
import BlogCard from "../components/BlogCard";

const Cosmic = require("cosmicjs");
const api = Cosmic();
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: "d1ffcb90-35a5-11eb-b56f-05f2cd29bdde",
  read_key: "uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK"
});

export default {
  name: "Posts",
  components: {
    PostCard,
    BlogCard
  },
  data() {
    return {
      loading: false,
      posts: {},
      blogs: {},
      slug: ""
    };
  },
  mounted() {
    this.slug = this.$route.params.slug;
    this.getBlogsData();
    this.getPostsData();
  },
  methods: {
    getBlogsData() {
      this.error = this.blog = null;
      this.loading = true;
      bucket
        .getObjects({
          type: "blogs",
          props: "_id,slug,title,content,metadata"
        })
        .then(data => {
          const blogs = data.objects;
          this.loading = false;
          this.blogs = blogs;
        });
    },
    getPostsData() {
            this.error = this.post = null;
            this.loading = true;
            bucket
            .getObjects({
                type: "posts",
                props: "_id,slug,title,content,metadata"
            })
            .then(data => {
                const posts = data.objects;
                this.loading = false;
                this.posts = posts;
            });
        },
  }
};
</script>
