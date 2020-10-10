<template>
<v-app>
    <v-app-bar app>
        <v-toolbar-title class="logo font-weight-black"> KEJK </v-toolbar-title>
        <v-spacer />
        <v-btn icon class="mr-1" alt="Toggle colour theme" @click="toggleTheme">
            <v-icon v-if="this.$vuetify.theme.dark">
                mdi-white-balance-sunny
            </v-icon>
            <v-icon v-else> mdi-brightness-3 </v-icon>
        </v-btn>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-md-none" />
        <Nav v-for="nav in navs" :key="`${nav.id}`" :nav="nav" class="d-none d-md-flex" />
        <v-navigation-drawer v-model="drawer" class="d-md-none" right absolute temporary app>
            <v-app-bar-icon @click.stop="drawer = !drawer" class="d-md-none">
                <v-btn class="mt-2" right absolute icon>
                    <v-icon class="text-right">mdi-close</v-icon>
                </v-btn>
            </v-app-bar-icon>
            <v-container class="mt-12 mx-0 px-0">
                <v-list nav>
                    <NavList v-for="nav in navs" :key="`${nav.id}`" :nav="nav" />
                </v-list>
            </v-container>
        </v-navigation-drawer>
    </v-app-bar>
    <v-content>
        <v-responsive width="900px">
            <router-view />
        </v-responsive>
    </v-content>
    <v-footer app color="transparent">
        <v-col class="text-left" cols="12">
            <v-row justify="end" no-gutters>
                <v-speed-dial v-model="fab" absolute bottom right alt="Contact Karl">
                    <template v-slot:activator>
                        <v-btn v-model="fab" color="teal" fab>
                            <v-icon v-if="fab" class="white--text"> mdi-close </v-icon>
                            <v-icon v-else class="white--text"> mdi-link </v-icon>
                        </v-btn>
                    </template>
                    <v-btn fab dark small color="teal" href="mailto:karl@kejk.tech" alt="Email Karl">
                        <v-icon>mdi-email</v-icon>
                    </v-btn>
                    <v-btn fab dark small color="light-blue" href="https://www.twitter.com/_kejk" target="_blank" alt="Karl's Twitter">
                        <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                    <v-btn fab light small color="white" href="https://www.github.com/kemiljk/" target="_blank" alt="Karl's GitHub">
                        <v-icon>mdi-github</v-icon>
                    </v-btn>
                    <v-btn fab dark small color="#ea4c89" href="https://dribbble.com/_kejk" target="_blank" alt="Karl's Dribbble">
                        <v-icon>mdi-basketball</v-icon>
                    </v-btn>
                    <v-btn fab small color="#f24e1d" href="https://www.figma.com/@_kejk" target="_blank" alt="Karl's Figma">
                        <img src="../src/assets/figma.svg" alt="Figma icon" />
                    </v-btn>
                    <v-btn fab dark small color="blue" href="https://www.linkedin.com/in/kejk" target="_blank" alt="Karl's LinkedIn">
                        <v-icon>mdi-linkedin</v-icon>
                    </v-btn>
                    <v-btn fab dark small color="red" href="https://music.apple.com/gb/album/cornerstone/1300802348" target="_blank" alt="Karl's Music with Echoes">
                        <v-icon>mdi-music</v-icon>
                    </v-btn>
                </v-speed-dial>
            </v-row>
        </v-col>
    </v-footer>
</v-app>
</template>

<script>
import Nav from "./components/Nav.vue";
import NavList from "./components/NavList.vue";

export default {
    name: "App",
    components: {
        Nav,
        NavList,
    },
    data() {
        return {
            navs: [],
            multiLine: true,
            drawer: false,
            group: null,
        };
    },
    mounted() {
        this.getNavLinks();
    },
    methods: {
        toggleTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        },
        getNavLinks: function () {
            fetch("../data/nav.json")
                .then((response) => response.json())
                .then((data) => (this.navs = data));
        },
    },
    watch: {
        group() {
            this.drawer = false;
        },
    },
};
</script>
