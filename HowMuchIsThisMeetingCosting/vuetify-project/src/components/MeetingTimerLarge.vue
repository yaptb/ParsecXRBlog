
<template>

    <div>

        <!-- form-->

            <div  class="text-center mt-8 mb-8 "   
            @mouseover="hover = true"
            @mouseleave="hover = false"
            >

              <span style="font-size:120pt">
                {{ MeetingTimerState.cost_display_string }}
              </span>


              <div v-show="!hover"></div>  
              <div v-show="hover">
                <div class="text-center" >
               <v-btn @click="toggleZoom" > Focus Off </v-btn>
              </div>

              <div class="text-center  mt-4" >
                {{ MeetingTimerState.timer_display_string }}
                {{ MeetingTimerState.status_display_string }}
                <p >(move mouse to hide)</p>
              </div>
            </div>

            </div>

        </div>

</template>


<script setup>

import { MeetingTimerState } from './utilities/timerstate';
import {ref} from 'vue'

const hover = ref(false)
const emit =defineEmits(['on-zoom-toggle'])


function toggleZoom(){
  emit('on-zoom-toggle')
}


</script>