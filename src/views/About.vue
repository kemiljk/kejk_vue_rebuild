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
            <h3 class="headline font-weight-bold mb-3">Things I've made.</h3>
        </v-col>
        <v-col class="mb-3 py-0" cols="6" sm="3">
            <v-card href="https://apps.apple.com/us/app/id1518887590" target="_blank" rel="noreferrer">
                <v-img alt="Px to Em logo visual" src="../assets/pxtoem.webp" />
                <v-card-title class="subtitle-1">
                    <v-spacer />
                    Hand››over
                    <v-spacer />
                </v-card-title>
            </v-card>
        </v-col>
        <v-col class="mb-3 py-0" cols="6" sm="3">
            <v-card href="https://www.figma.com/community/plugin/837070613195594890/Px-%E2%80%BA%E2%80%BA-Em" target="_blank" rel="noreferrer">
                <v-img alt="Px to Em plugin logo visual" src="../assets/px2em.webp" />
                <v-card-title class="subtitle-1">
                    <v-spacer />
                    Px ›› Em
                    <v-spacer />
                    <strong><span id="install-count" class="black--text badge" /></strong>
                    <v-spacer />
                </v-card-title>
            </v-card>
        </v-col>
        <v-col class="mb-3 py-0" cols="6" sm="3">
            <v-card href="https://www.lazypdf.tech" target="_blank" rel="noreferrer">
                <v-img alt="Lazy PDF logo visual" src="../assets/lazyPDF.webp" />
                <v-card-title class="subtitle-1">
                    <v-spacer />
                    Lazy PDF
                    <v-spacer />
                </v-card-title>
            </v-card>
        </v-col>
        <v-col class="mb-3 py-0" cols="6" sm="3">
            <v-card href="https://apps.apple.com/gb/app/make-me-a-cocktail/id1541820377" target="_blank" rel="noreferrer">
                <v-img alt="Make Me A Cocktail visual" src="https://res.cloudinary.com/kejk/image/upload/v1606907284/mmac_z5flxv.png" />
                <v-card-title class="subtitle-1">
                    <v-spacer />
                    <span class="d-none d-md-flex">Make Me A Cocktail</span>
                    <span class="d-flex d-md-none">MMAC</span>
                    <v-spacer />
                </v-card-title>
            </v-card>
        </v-col>
    </v-row>
    <v-divider class="my-10" />
    <v-row class="text-left">
        <v-col cols="6">
            <h3 class="headline font-weight-bold mb-3">
                Latest Posts.
            </h3>
        </v-col>
        <v-spacer />
        <v-col cols="6" class="text-right mb-2">
            <v-btn text class="ml-4 mb-2" to="/posts">
                More
                <v-icon class="ml-2"> mdi-arrow-right </v-icon>
            </v-btn>
        </v-col>
    </v-row>
    <v-row class="mt-3" v-show="loading = true">
        <v-col v-for="post in posts.slice(0, 1)" :key="post._id" cols="12" sm="6">
            <keep-alive>
                <PostCard :post="post" class="text-left" />
            </keep-alive>
        </v-col>
        <v-col v-for="blog in blogs.slice(0, 1)" :key="blog._id" cols="12" sm="6">
            <keep-alive>
                <BlogCard :blog="blog" class="text-left" />
            </keep-alive>
        </v-col>
    </v-row>
    <v-divider class="my-10" />
    <v-row class="text-left">
        <v-col cols="6">
            <h3 class="headline font-weight-bold mb-3">
                Uses.
            </h3>
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
        <h3 class="headline font-weight-bold mb-3">
            Currently enjoying.
        </h3>
    </v-row>
    <v-row class="mt-3" v-show="loading = true">
        <v-col v-for="media in medias" :key="media._id" cols="12" sm="4">
            <keep-alive>
                <MediaCard :media="media" />
            </keep-alive>
        </v-col>
    </v-row>
    <v-row class="text-left">
        <v-col class="mt-10">
            <h3 class="headline font-weight-bold mb-3">
                Music I've written.
            </h3>
            <v-row>
                <v-col cols="12" sm="9">
                    <iframe src="https://embed.music.apple.com/us/album/cornerstone/1300802348?app=music&amp;itsct=music_box&amp;itscg=30200&amp;ct=albums_cornerstone&amp;ls=1" height="240px" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation" allow="autoplay *; encrypted-media *;" style="width: 100%; max-width: 660px; overflow: hidden; border-top-left-radius: 10px; border-top-right-radius: 10px; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; background-color: transparent; background-position: initial initial; background-repeat: initial initial;"></iframe>
                </v-col>
                <v-col cols="12" sm="3">
                    <a href="https://music.apple.com/us/artist/echoes/79207344?itsct=music_box&amp;itscg=30200&amp;ct=artists_echoes&amp;app=music&amp;ls=1" style="display: inline-block; overflow: hidden; border-top-left-radius: 13px; border-top-right-radius: 13px; border-bottom-right-radius: 13px; border-bottom-left-radius: 13px; width: 250px; height: 83px;"><img src="https://tools.applemediaservices.com/api/badges/listen-on-apple-music/badge/en-US?size=250x83&h=207e623eaf008efd22162551a091d459" alt="Listen on Apple Music" style="border-top-left-radius: 13px; border-top-right-radius: 13px; border-bottom-right-radius: 13px; border-bottom-left-radius: 13px; width: 200px; height:auto;"></a>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import PostCard from "../components/PostCard";
import BlogCard from "../components/BlogCard";
import MediaCard from "../components/MediaCard";

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
        MediaCard,
    },
    data() {
        return {
            loading: false,
            medias: {},
            posts: {},
            books: {},
            slug: "",
        };
    },
    created() {
        fetch("../../api/plugin-stats.js")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                document.getElementById("install-count").prepend(data.install_count);
        })
        .catch((error) => console.error(error));
        this.slug = this.$route.params.slug;
        this.getBlogsData();
        this.getPostsData();
        this.getMediasData();
    },
    watch: {
    '$route': ['getBlogsData', 'getPostsData', 'getMediasData']
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
        getMediasData() {
            this.error = this.media = null;
            this.loading = true;
            bucket
            .getObjects({
                type: "medias",
                props: "_id,title,metadata",
                limit: 3,
            })
            .then(data => {
                const medias = data.objects;
                this.loading = false;
                this.medias = medias;
            });
        },
    },
};
</script>
