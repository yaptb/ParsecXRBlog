<template>

    <div id="timer-div">
        <span id="timer-display">{{ timerString }}</span>
    </div>

    <div id="controls-div">
        <button @click="startTimer">Start</button>
        <button @click="stopTimer">Stop</button>
        <button @click="resetTimer">Reset</button>
    </div>

</template>


<script lang="ts" setup>

import {ref} from 'vue'


const timerString = ref('00:00:00')
let numberOfSeconds:number =0
let isTimerRunning:boolean = false


function updateTimerDisplay()
{
    let hours = Math.floor(numberOfSeconds/3600)
    let mSecs = numberOfSeconds - hours*3600
    let mins = Math.floor(mSecs/60)
    let secs = mSecs - mins*60

    let hourString = hours.toString().padStart(2,'0')
    let minString = mins.toString().padStart(2,'0')
    let secString = secs.toString().padStart(2,'0')
    
    timerString.value = hourString + ':' + minString +':'+secString
}


function startTimer(){
    console.log('timer reset')
    isTimerRunning = true    
}

function stopTimer(){
    console.log('timer reset')
    isTimerRunning = false
}

function resetTimer(){
    console.log('timer reset')
    numberOfSeconds = 0
}

function timerCallback(){
    if(isTimerRunning)
        numberOfSeconds = numberOfSeconds+1;
    updateTimerDisplay();
}

//start a 1 second callback
window.setInterval(timerCallback, 1000);

</script>
  