<template>
  <!-- form-->
  <v-card class="py-4" rounded="lg" variant="outlined">
    <template #subtitle>
      <div class="text-subtitle-1"> Enter the number of attendees and the average cost per hour per person </div>
    </template>
    <template #text>
      <v-form @submit.prevent>
        <v-text-field v-model="num_attendees" :rules="num_attendees_rules" label="Number of Attendees:"></v-text-field>
        <v-text-field v-model="cost_per_hour" :rules="cost_per_hour_rules" label="Average Cost Per Hour"></v-text-field>
        <v-btn class="mt-2" block @click="form_submit">{{ props.submit_button_text }}</v-btn>
      </v-form>
    </template>
  </v-card>
</template>
<script setup lang="ts">

import { ref, reactive, defineEmits } from 'vue'
import { MeetingTimerState } from "./utilities/timerstate"


const emit = defineEmits(['meeting_form_submit'])
const props = defineProps(['submit_button_text'])


const num_attendees = ref(MeetingTimerState.no_particpants)
const cost_per_hour = ref(MeetingTimerState.avg_cost_per_hour)


const num_attendees_rules = reactive(
  [
    (value: string) => {
      if (value) {
        let n = parseInt(value);
        if (n > 0 && n < 1000)
          return true;
      }
      return 'You must enter a number of attendees between 1 and 1000';
    },
  ])

const cost_per_hour_rules = reactive(
  [
    (value: string) => {
      if (value) {
        let n = parseFloat(value);
        if (n > 0 && n < 100000)
          return true;
      }
      return 'You must enter an average cost per hour greater than zero'
    },
  ]
)

function form_submit() {
  MeetingTimerState.no_particpants = num_attendees.value
  MeetingTimerState.avg_cost_per_hour = cost_per_hour.value
  //MeetingTimerState.resetTimer()
  emit('meeting_form_submit')
}

</script>
