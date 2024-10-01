
import {ref} from 'vue'

 class MeetingTimer{

    focus_mode=false
    currency_symbol="$"
    avg_cost_per_hour = 100.0
    no_particpants = 1
    number_of_seconds =0
    is_timer_running = false

    settings_display_string = ref("")
    status_display_string = ref("stopped")
    timer_display_string = ref("00:00:00")
    cost_display_string = ref(this.currency_symbol+"00.00")
    millicent_display_string = ref(".00")    
       
    constructor(){
    }
    
    updateTimerDisplay()
    {
        let hours = Math.floor(this.number_of_seconds/3600)
        let mSecs = this.number_of_seconds - hours*3600
        let mins = Math.floor(mSecs/60)
        let secs = mSecs - mins*60

        let hourString = hours.toString().padStart(2,'0')
        let minString = mins.toString().padStart(2,'0')
        let secString = secs.toString().padStart(2,'0')
        
        this.timer_display_string.value= hourString + ':' + minString +':'+secString

        let cost_per_second = (this.avg_cost_per_hour*this.no_particpants)/3600
        let total_cost = cost_per_second*this.number_of_seconds
        let dollars = Math.floor(total_cost/100)
        let cents = Math.floor(total_cost-(dollars*100))
        let millicents = Math.floor( (total_cost-(dollars*100)-cents)*100 )
        let dollarString = dollars.toString()
        let centsString = cents.toString().padStart(2,'0')
        let millicentsString = millicents.toString().padStart(2,'0')
        
        this.cost_display_string.value= this.currency_symbol + dollarString +'.'+centsString
        this.millicent_display_string.value = "."+millicentsString.padStart(2,'0')
        this.settings_display_string.value=`number of people: ${this.no_particpants} avg cost per hour: `+this.avg_cost_per_hour.toString()    

        if(this.is_timer_running)
            this.status_display_string.value="running"
        else
            this.status_display_string.value="stopped"
    }
    
    startTimer(){
        console.log('timer start' + this)
        this.status_display_string.value="running"
        this.is_timer_running =  true
    }
    
    stopTimer(){
        console.log('timer Stopped')
        this.status_display_string.value="stopped"
        this.is_timer_running = false
    }
    
    resetTimer(){
        console.log('timer reset')
        this.status_display_string.value = "reset"
        this.number_of_seconds = 0
    }
    
    timerCallback(){

        if(this.is_timer_running)
        {
            this.number_of_seconds = this.number_of_seconds+1
        }
 
        this.updateTimerDisplay()
    }
    
    initialize(){
        window.setInterval(this.timerCallback.bind(this), 1000)
    }
}

const MeetingTimerState =new MeetingTimer()

export {MeetingTimerState}

