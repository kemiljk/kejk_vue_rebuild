<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12">
        <v-btn 
          text
          @click="$router.go(-1)" 
        >
          <v-icon class="mr-2">
            mdi-arrow-left
          </v-icon>Back
        </v-btn>
      </v-col>
    </v-row>
    <v-img
      src="../assets/portfolio.webp"
      class="mt-10 img cropped"
      alt="Portfolio overview on mobile devices"
    />
    <v-card
      width="400"
      class="mx-auto mt-5"
    >
      <v-card-title class="pb-0">
        <h3 class="headline font-weight-bold mb-3">
          Login
        </h3>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordRules"
            color="teal"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider />
      <v-card-actions @submit.prevent="submit">
        <v-spacer />
        <v-btn
          href="mailto:karl@kejk.tech"
          class="mr-2"
        >
          <v-icon
            class="mr-2"
            small
          >
            mdi-email
          </v-icon>Request access
        </v-btn>
        <div v-if="password === correctPassword">
          <v-btn
            v-for="link in links"
            :key="`${link.label}`"
            color="teal"
            :to="`${link.url}`"
            type="submit"
            class="white--text"
          >
            <v-icon
              class="mr-2 white-text"
              small
            >
              mdi-lock-open
            </v-icon>Login
          </v-btn>
        </div>
        <div v-else>
          <v-btn
            type="submit"
            text
            :disabled="submitStatus"
          >
            <v-icon
              class="mr-2"
              small
            >
              mdi-lock
            </v-icon>Login
          </v-btn>
        </div>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  name: "Login",

  data() {
    return {
      showPassword: false,
      submitStatus: null,
      links: [
        {
          label: "Portfolio",
          url: "/portfolio"
        }
      ],
      password: "",
      passwordRules: [
        value =>
          value.includes("portfolio-access-granted") ||
          "Password must be the one provided"
      ],
      correctPassword: "portfolio-access-granted",
      validations: {
        password: {
          required
        }
      }
    };
  }
};
</script>