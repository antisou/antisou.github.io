<template>
    <audio :src="audio" @loadeddata="updateData('audio', $event)" loop class="audio" ref="audio"></audio>
    <div class="video-container">
        <video loop muted class="video" @loadeddata="updateData('video', $event)" ref="video">
            <source :src="video"/>
            Your browser does not support the video tag.
        </video>
    </div>
    <teleport to="#app">
        <div class="filter" v-if="!clicked">
            <div class="popup">
                <div class="popup__title">
                    <p class="popup__title-text">vAskettiservice!</p>
                    <div class="popup__title-close">
                        <span class="close-line close-line-left"></span>
                        <span class="close-line close-line-right"></span>
                    </div>
                </div>
                <div class="popup__content">
                    <img :src="icon" alt="" class="icon">
                    <p class="popup__text">Website status:<br> {{ text }}</p>
                </div>
                <div class="popup__button-container">
                    <button :disabled="!(loaded.audio && loaded.video)" :class="['popup__button', disable]" @click="playThings" >Ok</button>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
import video from "../background/filmik.webm"
import audio from "../background/muzyka.mp3"
import icon from "../icon/win95iconnetwork.png"
export default {
    data() {
        return {
            video,
            audio,
            icon,
            clicked: false,
            loaded: {
                video: false,
                audio: false,
            }
        }
    },
    computed: {
        text(){
            return this.loaded.audio && this.loaded.video ? 'Website loaded' : 'Loading the website'
        },
        disable(){
            return this.loaded.audio && this.loaded.video ? 'popup__button--enabled' : 'popup__button--disabled'
        }
    },
    methods: {
        playThings(){
            this.clicked = true
            this.$refs.video.play()
            this.$refs.audio.play()
        },
        updateData(property, event){
            if(event.target.readyState >= 3){
                this.loaded[property] = true
            }
        }
    },
    mounted(){
        document.addEventListener('visibilitychange', ()=>{
            //methods doesnt work even if i bind "this" object, so gotta copy and paste
            if(document.visibilityState === 'visible' && this.clicked){
                this.$refs.video.play()
                this.$refs.audio.play()
            }else{
                this.$refs.video.pause()
                this.$refs.audio.pause()
            }
        })
    }
}
</script>

<style>

</style>