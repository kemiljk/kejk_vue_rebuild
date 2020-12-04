<template>
<v-container>
    <v-row class="text-left">
        <v-col>
            <h1 class="display-3 font-weight-bold mb-10 pt-12 mt-12" aria-label="intro to Karl">
                Karl Emil James Koch.
            </h1>
            <h2 class="headline font-weight-medium pt-10 mb-3">
                Currently designing the Home as a Service at
                <a href="https://www.homehero.co.uk" class="teal--text accent-2 font-weight-bold" target="_blank" rel="noreferrer">HomeHero</a>
                <sup>
                    <v-icon class="teal--text accent-2" small>mdi-open-in-new</v-icon>
                </sup>
                in London, UK.
            </h2>
        </v-col>
    </v-row>
    <v-divider class="my-10" />
    <v-row class="text-left">
        <v-col cols="12" aria-label="Karl's other interests">
            <h2 class="display font-weight-bold mb-3">Things I've made.</h2>
        </v-col>
        <v-col class="mb-3 py-0" cols="12" sm="3">
            <v-card href="https://apps.apple.com/us/app/id1518887590" target="_blank" rel="noreferrer">
                <v-img alt="Px to Em logo visual" src="../assets/pxtoem.webp" />
                <v-card-title class="subtitle-1">
                    <v-spacer />
                    Hand››over
                    <v-spacer />
                </v-card-title>
            </v-card>
        </v-col>
        <v-col class="mb-3 py-0" cols="12" sm="3">
            <v-card href="https://www.figma.com/community/plugin/837070613195594890/Px-%E2%80%BA%E2%80%BA-Em" target="_blank" rel="noreferrer">
                <v-img alt="Px to Em plugin logo visual" src="../assets/px2em.webp" />
                <v-card-title class="subtitle-1">
                    Px ›› Em
                    <v-spacer />
                    <strong><span id="install-count" class="black--text badge" /></strong>
                    <v-spacer />
                </v-card-title>
            </v-card>
        </v-col>
        <v-col class="mb-3 py-0" cols="12" sm="3">
            <v-card href="https://www.lazypdf.tech" target="_blank" rel="noreferrer">
                <v-img alt="Lazy PDF logo visual" src="../assets/lazyPDF.webp" />
                <v-card-title class="subtitle-1">
                    <v-spacer />
                    Lazy PDF
                    <v-spacer />
                </v-card-title>
            </v-card>
        </v-col>
        <v-col class="mb-3 py-0" cols="12" sm="3">
            <v-card href="https://apps.apple.com/gb/app/make-me-a-cocktail/id1541820377" target="_blank" rel="noreferrer">
                <v-img alt="Make Me A Cocktail visual" src="https://res.cloudinary.com/kejk/image/upload/v1606907284/mmac_z5flxv.png" />
                <v-card-title class="subtitle-1">
                    <v-spacer />
                    Make Me A Cocktail
                    <v-spacer />
                </v-card-title>
            </v-card>
        </v-col>
    </v-row>
    <v-divider class="my-10" />
    <v-row class="text-left">
        <v-col cols="6">
            <h2 class="text-left display font-weight-bold mb-3" aria-label="Karl's posts">
                Latest Posts.
            </h2>
        </v-col>
        <v-spacer />
        <v-col cols="6" class="text-right mb-2">
            <v-btn text class="ml-4 mb-2" to="/posts">
                More
                <v-icon class="ml-2"> mdi-arrow-right </v-icon>
            </v-btn>
        </v-col>
    </v-row>
    <v-row class="mt-3">
        <v-col v-for="post in posts.slice(0, 1)" :key="`${post.id}`" cols="12" sm="6">
            <PostCard :post="post" class="text-left" />
        </v-col>
        <v-col v-for="blog in blogs.slice(0, 1)" :key="blog._id" cols="12" sm="6">
            <BlogCard :blog="blog" class="text-left" />
        </v-col>
    </v-row>
    <v-divider class="my-10" />
    <v-row class="text-left">
        <v-col cols="6">
            <h2 class="display font-weight-bold" aria-label="Karl's tech setup">
                Uses.
            </h2>
        </v-col>
        <v-spacer />
        <v-col cols="6" class="text-right mb-2">
            <v-btn text class="ml-4 mb-2" to="/uses">
                My setup
                <v-icon class="ml-2"> mdi-arrow-right </v-icon>
            </v-btn>
        </v-col>
        <v-col cols="12">
            <p class="body-1">
                As a product designer and developer, I use a variety of things to stay
                productive. Check out my hardware and software setup and get in touch
                if you have any questions.
            </p>
        </v-col>
    </v-row>
    <v-divider class="mt-10 mb-10" />
    <v-row class="ml-1 mr-1">
        <h2 class="display font-weight-bold mb-3" aria-label="Karl's posts">
            Currently reading.
        </h2>
        <v-row>
            <v-col v-for="book in books" :key="`${book.id}`" cols="6" sm="4">
                <Books :book="book" />
            </v-col>
        </v-row>
    </v-row>
    <v-row class="text-left">
        <v-col class="mt-10">
            <h2 class="display font-weight-bold mb-3" aria-label="Karl's music playlist">
                Currently playing.
            </h2>
            <v-row>
                <v-col v-for="music in musics" :key="`${music.id}`" cols="12" sm="6">
                    <Musics :music="music" />
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import PostCard from "../components/PostCard";
import BlogCard from "../components/BlogCard";
import Books from "../components/Books";
import Musics from "../components/Musics";

const Cosmic = require("cosmicjs");
const api = Cosmic();
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: "d1ffcb90-35a5-11eb-b56f-05f2cd29bdde",
  read_key: "uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK"
});

export default {
    name: "About",
    components: {
        PostCard,
        BlogCard,
        Books,
        Musics,
    },
    data() {
        return {
            posts: [],
            books: [],
            musics: [],
            loading: false,
            blogs: {},
            slug: "",
        };
    },
    created() {
        this.slug = this.$route.params.slug;
        this.getBlogsData();
        this.getPostsData();
        this.getBooksData();
        this.getMusicsData();
    },
    mounted() {

        fetch("../../api/plugin-stats.js")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                document.getElementById("install-count").prepend(data.install_count);
                document.getElementById("like-count").prepend(data.like_count);
            })
            .catch((error) => console.error(error));
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
        getPostsData: function () {
            fetch("/data/posts.json")
                .then((response) => response.json())
                .then((data) => (this.posts = data));
        },
        getBooksData: function () {
            fetch("/data/books.json")
                .then((response) => response.json())
                .then((data) => (this.books = data));
        },
        getMusicsData: function () {
            fetch("/data/musics.json")
                .then((response) => response.json())
                .then((data) => (this.musics = data));
        },
    },
};
</script>
