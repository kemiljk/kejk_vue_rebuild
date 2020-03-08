<template>
  <v-container>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title class="pb-0">
        <h1 class="mb-6">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Username"
            prepend-icon="mdi-account-circle"
            v-model="username"
            :rules="usernameRules"
            color="teal"
          />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            v-model="password"
            :rules="passwordRules"
            color="teal"
          />
        </v-form>
      </v-card-text>
      <v-divider />
      <v-card-actions @submit.prevent="submit">
        <v-spacer />
        <v-btn href="mailto:karlemilkoch@me.com" class="mr-2">Request access</v-btn>
        <div v-if="password === correctPassword && username === correctUsername">
        <v-btn color="orange black--text" v-for="link in links" :key="`${link.label}`" :to="`${link.url}`" type="submit">Login</v-btn>
        </div>
        <div v-else>
        <v-btn type="submit" text :disabled="submitStatus">Login</v-btn>
        </div>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

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
      username: "",
      usernameRules: [
        value =>
          value.includes("portfolio") || "Username must be the one provided"
      ],
      password: "",
      passwordRules: [
        value => value.includes("portfolio-access-granted") || "Password must be the one provided",
      ],
      correctUsername: "portfolio",
      correctPassword: "portfolio-access-granted",
      validations: {
        email: {
          required
        },
        password: {
          required
        }
      },
    }
  }
};
</script>