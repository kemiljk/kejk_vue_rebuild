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
        <h1
          class="display-2 font-weight-bold mb-3 mt-10"
        >
          Why we should replace the term ‘user’ with human.
        </h1>
        <h2 class="headline font-weight-bold mb-3 mt-10">
          Design is about people.
        </h2>
      </v-col>
    </v-row>
    <v-row class="text-left">
      <v-col cols="12">
        <p>Working in the healthcare sector, it’s sometimes hard to forget those people that you affect the most through the work you do. It can be right there in front of you, seeing children living longer lives because of the work you and the healthcare company you support do. But it’s also sometimes easy to think about those end individuals as ‘users’.</p>
        <p>User Experience is a hot topic and has been for some time. Really, it was birthed in Silicon Valley as a way of thinking about the end person using your product and avoid a narrow focus on delivering a solution that you (as in the company) think is the right thing. The problem with a user focus is that it’s easy to abstract the term user into being a statistic. A user is a term we attribute onto a person that uses our product, but it is far too easy for that to become a percentage on a spreadsheet or a cumulative number that appears on an analytics report. Treating the people we affect most as users can have a negative effect on how we think about our products and lead us to believe that our focus is on increasing that percentage or building up those numbers, only.</p>
        <p>Human-centered design is a term that's been explored and advocated for by many established designers from David and Tom Kelley, to Donald Norman and even into architecture by way of Mike Cooley.</p>
        <p>My argument is for a permanant change, a move away from user-centricity and user experience and towards human-centricity and human-experience. By doing this, we can’t abstract away who we are affecting. Those directly effected are other humans and as such, it helps focus the mind on doing our best work and allows to think more wholly about what we’re creating.</p>
        <p>Numbers are important, we need to keep an eye on those analytics reports and the statistics from audience feedback, but that needn’t draw away from the very humans that we are affecting. Sometimes, decisions that may seem bad statistically, are actually right ethically. Making decisions that directly impact on the humans using your product are often some of the hardest and most important. Losing sight of those real people that you’re affecting with every slight change of pixels on a UI, removal of ‘old’ functionality or choice of distribution platform, can have lasting effects on their respect for your company and the values you represent.</p>
        <p>So think carefully about every decision you make as a brand and contemplate the impact on the humans you’re working for, because no matter what you believe, the other humans of this earth are the people you’re helping and those humans need you to care about them first. You work for them, whether it feels like it or not.</p>
        <p>Humans are not users, users are humans.</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HumanCentricity"
};
</script>