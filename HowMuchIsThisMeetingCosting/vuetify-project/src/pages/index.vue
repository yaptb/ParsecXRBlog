<template>
  <!-- <v-container > -->
  <!--  <v-responsive class="mx-auto" max-width="900"> -->
  <v-row>
    <v-col cols="12">
      <AboutOverlay :show-overlay="showAbout" @on-close-overlay="hide_about_overlay" />
      <div v-show="showBanner" class="text-center">
        <div class="text-body-2 font-weight-light mb-n1">How much is this meeting</div>
        <h1 class="text-h2 font-weight-bold">Costing?</h1>
      </div>
    </v-col>
    <v-col cols="12">
      <MeetingForm v-show="showMeetingForm" v-on:meeting_form_submit="on_meeting_form_submit"
        :submit_button_text="submitButtonText" />
      <MeetingTimerLarge @on-zoom-toggle="toggleZoom" v-show="showMeetingTimerLarge" />
      <MeetingTimerSmall @on-settings="toggle_meeting_form" @on-zoom-toggle="toggleZoom"
        @on-show-about-overlay="show_about_overlay" v-show="showMeetingTimerSmall" />
    </v-col>
  </v-row>
  <!--     </v-responsive> -->
  <!--  </v-container> -->
  <v-footer v-show="!zoomMode" app>
    <v-row justify="center" no-gutters>
      <v-btn @click="toggleTheme">Light/Dark</v-btn>
    </v-row>
  </v-footer>
</template>
<script setup lang="ts">

import { useTheme } from 'vuetify'
import { onMounted, ref } from 'vue'
import AboutOverlay from '@/components/AboutOverlay.vue'
import MeetingForm from '@/components/MeetingForm.vue';
import MeetingTimerSmall from '@/components/MeetingTimerSmall.vue';
import MeetingTimerLarge from '@/components/MeetingTimerLarge.vue';
import { MeetingTimerState } from '@/components/utilities/timerstate';


const showBanner = ref(true)
const showAbout = ref(false)
const showMeetingForm = ref(false)
const showMeetingTimerSmall = ref(false)
const showMeetingTimerLarge = ref(false)
const zoomMode = ref(false)
const submitButtonText = ref('Go')

function reveal_meeting_form() {

  showBanner.value = true
  showMeetingForm.value = true
  showMeetingTimerLarge.value = false
}

function toggle_meeting_form() {
  if (showMeetingForm.value)
    on_meeting_form_submit()
  else
    reveal_meeting_form()

}


function on_meeting_form_submit() {
  showMeetingForm.value = false
  showBanner.value = true
  showMeetingTimerSmall.value = true;
  showMeetingTimerLarge.value = false
  submitButtonText.value = "Update"
}



function toggleZoom() {

  zoomMode.value = (!zoomMode.value)

  if (zoomMode.value) {

    showBanner.value = false
    showMeetingForm.value = false
    showMeetingTimerLarge.value = true
    showMeetingTimerSmall.value = false
  }
  else {
    showBanner.value = true
    showMeetingTimerLarge.value = false
    showMeetingTimerSmall.value = true
  }

}

function show_about_overlay() {
  console.log("Show about overlay")
  showAbout.value = true
}

function hide_about_overlay() {
  showAbout.value = false
}

onMounted(() => {
  window.setTimeout(reveal_meeting_form, 500)
  MeetingTimerState.initialize()
})



const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}


</script>
