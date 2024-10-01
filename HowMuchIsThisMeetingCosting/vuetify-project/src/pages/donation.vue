<template>
    <v-row>
        <v-col cols="12">
            <div class="text-center">
                <div class="text-body-2 font-weight-light mb-n1">How much is this meeting</div>
                <h1 class="text-h2 font-weight-bold">Costing?</h1>
            </div>
        </v-col>
        <v-col cols="12">
            <v-card class="py-4" rounded="lg" variant="outlined" title="Thanks!">
                <v-card-text class="pt-4"> Thanks for donating to support this site. May your future meetings be short,
                    constructive and cost-effective! </v-card-text>
                <template v-slot:actions>
                    <v-btn class="ms-auto" text="Home" @click="goHome"></v-btn>
                </template>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

function goHome() {
    router.push('/')
}

</script>