import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: "#000",
        secondary: "",
        accent: "",
        success: "",
        anchor: '#039688',
      },
      dark: {
        primary: "#fff",
        secondary: "",
        accent: "",
        success: "",
        anchor: '#039688',
      },
    },
  }
});
