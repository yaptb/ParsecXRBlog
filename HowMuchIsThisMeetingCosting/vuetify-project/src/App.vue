<template>
  <v-responsive>
    <v-app>
      <v-main>
        <v-container class="fill-height" :max-width="900">
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>
