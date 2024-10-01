
<template>
          
        <!-- form-->
        <v-card
        class="py-4"
        rounded="lg"
        variant="outlined"
        >

          <template #text>

            <div class="">
            </div>

            <div>
            </div>

            <div class="text-h1 text-center mt-8 mb-8 " >

              <span style="font-size:100pt">
                {{ MeetingTimerState.cost_display_string }}
              </span>

            </div>

          </template>

          <div class="text-center" >
 
            <v-tooltip text="Start the meeting timer">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" @click="startTimer"> Start </v-btn>
              </template>
            </v-tooltip>

            <v-tooltip text="Pause the meeting timer">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" @click="stopTimer">  Stop </v-btn>
              </template>
            </v-tooltip>


            <v-tooltip text="Reset the meeting timer">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" @click="resetTimer" >Reset </v-btn>
              </template>
            </v-tooltip>

            <v-tooltip text="Change the meeting settings">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" @click="showSettings" > Settings </v-btn>
              </template>
            </v-tooltip>

            <v-tooltip text="Enable focus mode">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" @click="toggleZoom" > Focus </v-btn>
              </template>
            </v-tooltip>

        </div>

          <div class="text-center mt-4" >
            {{ MeetingTimerState.timer_display_string }}
            {{ MeetingTimerState.status_display_string }}<br/>
            {{ MeetingTimerState.settings_display_string }}
          </div>

          <div class="text-center  mt-4" >
            <v-tooltip text="About this site">
              <template v-slot:activator="{ props }">
                <v-btn variant="plain"  size="small" v-bind="props" @click="showAboutOverlay" > About </v-btn>
              </template>
            </v-tooltip>
          </div>

        </v-card>




</template>


<script setup>

import { MeetingTimerState } from './utilities/timerstate';

const emit = defineEmits(['on-zoom-toggle', 'on-settings', 'on-show-about-overlay'])

function startTimer(){
  MeetingTimerState.startTimer()
}

function stopTimer(){
  MeetingTimerState.stopTimer()
}

function resetTimer(){

  MeetingTimerState.resetTimer()
}


function toggleZoom(){
  emit('on-zoom-toggle')
}

function showSettings(){
  emit('on-settings')
}

function showAboutOverlay(){
  emit('on-show-about-overlay')
}

</script>