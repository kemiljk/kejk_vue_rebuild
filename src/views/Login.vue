<template>
  <v-container>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title class="pb-0">
        <h1 class="mb-6">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Username" prepend-icon="mdi-account-circle" />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
          <v-btn 
          color="teal--text" 
          v-for="link in links"
          :key="`${link.label}--portfolio-link`"
          class="my-2 mx-auto"
          text
          :to="link.url"
          disabled
        >{{ link.label }}
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-row>
        <v-col>
            <h2 class="display-1 font-weight-bold mb-3 mt-10 mx-auto" aria-label="intro to Karl">Coming soon.
            </h2>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      showPassword: false,
      links: [
        {
          label: "Portfolio",
          url: "/portfolio"
        },
      ]
    };
  }
};
</script>