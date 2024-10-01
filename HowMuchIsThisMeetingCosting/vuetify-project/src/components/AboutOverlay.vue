<template>
  <v-dialog v-model="props.showOverlay" width="auto">
    <v-card max-width="600" title="How Much Is This Meeting Costing">
      <v-card-text class="bg-surface-light pt-4"> This website is dedicated to everyone who has sat in an unnecessary
        meetings, wondering how much it is costing. You are not alone!<br /> Please consider donating if you would like
        to help cover the cost of hosting this site <div class="text-center">
          <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="hosted_button_id" value="78JA5R78QBW2S" />
            <input type="image" src="https://www.paypalobjects.com/en_AU/i/btn/btn_donate_LG.gif" border="0"
              name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_AU/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </div>
      </v-card-text>
      <template v-slot:actions>
        <v-btn class="ms-auto" text="Close" @click="closeOverlay"></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">


const emit = defineEmits(['on-close-overlay'])
const props = defineProps(['showOverlay'])

function closeOverlay() {
  emit('on-close-overlay')
}

</script>