<template>
  <v-container>
    <v-row class="text-left">
      <v-col cols="12">
        <v-btn :to="'/portfolio'">
          <v-icon class="mr-2">mdi-chevron-left</v-icon>Back
        </v-btn>
        <v-img :src="`${hero}`" class="mt-10 img cropped" alt="Stint website page" />
        <h1 class="display-2 font-weight-bold mb-3 mt-10">Stint design challenge.</h1>
        <h2 class="headline mb-3 mt-2">Redesign our rating feature</h2>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="12">
        <v-row>
          <v-col cols="12" sm="10">
            <h3 class="mb-4 mt-8">What was the challenge?</h3>
            <p>We would like you to make is as quick as possible for businesses to rate 'Stints'.</p>
          </v-col>
          <v-col cols="12" sm="2">
            <h3 class="mb-4 mt-8">Time</h3>
            <p><em>6 hours.</em></p>
            
          </v-col>
        </v-row>

        <h4 class="mb-4">My process</h4>
        <p class="mb-4">This challenge involved entirely reimagining the approval process of Stints for businesses to increase the rating/approval process</p>
        <ul>
          <li>my focus was on trying to simplify the journey of rating multiple users from a given day without having to dig into each one individually. I wanted to begin a page earlier than stated in the brief as I felt that it enabled a much more effecient way to bulk review a set of stints for a given date.</li>
          <li>The calendar at the top of the first view now shows, with a maximum of 8, how many stints happened on a given day. This plays nicely when viewed as a full calendar view for quick assessment.</li>
          <li>The rating in this example focuses on overall star rating as this feels like the most important value to capture about every stint as it enables a high level picture of how good the student is. The employer is now also able to easily rate all Stints for that date as the same rating, so at a high level, at least each student receives a score.</li>
          <li>By default, 3 cards are shown for a date to maximise space whilst also ensuring quick rating and provide a little more information about a given user than the current implementation.</li>
          <li>At the bottom of the main My Stints page includes a hint at un-rated stints from the past and encourages the user to go back to them to rate.</li>
          <li>The employer has the option to easily load more cards, skip all reviews or review all. The review all option is highlighted as the key focus to try and encourage a review of every candidate.</li>
          <li>The employer is the able to see, at a high level, the date it relates to, total number of stints that occured, how many hours it covered and how many students were involved.</li>
          <li>Each student card is collapsed by default and enables adjustment of star rating, the university they belong to, an ability to select a reason for the rating by inputting reasons in the tag bar</li>
          <li>Once inside the detail view, the approach to defining reasons is customisable and relies on tags. An employer can begin typing in letters to then receive suggested words to include based on a lookup table of historic reasons they’ve used in the past. These are suggested back to the user via the QuickType keyboard on iOS or on many of the available Android keyboards and should be unique to the individual employer using the system.</li>
          <li>If the user has selected a negative value (0-2 stars) then the tags mutate to be red so that it’s clear when rating at speed, that it’s a negative submission. The save button also reverts to red to enhance this fact.</li>
          <li>If a student is given 5 stars, they’re awarded the Student Superstar endorsement status. This gives them a Superstar Status badge (the blue star next to their profile picture) and will rank them above other candidates for jobs.</li>
        </ul>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col v-for="image in images" :key="`${image.id}`" cols="12">
        <v-img :src="`${image.img}`" class="img" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import stintImages from "../../../data/challenges/stintImages.json";

export default {
  name: "Stint",
  data() {
    return {
      images: stintImages,
      hero:
        "https://res.cloudinary.com/kejk/image/upload/v1590258809/iphone-xs-with-macbook-air-in-the-background_l8n1pm.jpg"
    };
  }
};
</script>