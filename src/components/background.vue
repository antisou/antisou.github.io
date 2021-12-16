<template>
    <div class="video-container">
        <video loop class="video" ref="video">
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
                    <button :disabled="!loadedVideo" :class="['popup__button', disable]" @click="this.$refs.video.play(), clicked = true" >Ok</button>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
import video from '../background/video.webm'
import icon from "../icon/win95iconnetwork.png"
export default {
    data() {
        return {
            icon,
            video,
            clicked: false,
            loadedVideo: false
        }
    },
    computed: {
        text(){
            return this.loadedVideo ? 'Website loaded' : 'Loading the website'
        },
        disable(){
            return this.loadedVideo ? 'popup__button--enabled' : 'popup__button--disabled'
        }
    },
    mounted(){
        document.addEventListener('visibilitychange', ()=>{
            if(document.visibilityState === 'visible' && this.clicked){
                this.$refs.video.play()
            }else{
                this.$refs.video.pause()
            }
        })
        this.$refs.video.addEventListener('loadeddata', ()=>this.loadedVideo = true)
    }
}
</script>

<style>

</style>