<template>
  <div class="section__account">
    <div class="section__img-container">
      <img :src="ss" alt="cs:go screenshot" class="section__img">
    </div>
    <list v-for="(obj, name) in contentReactive" :key="name" :title="name" :content="obj"></list>
  </div>
</template>

<script>
import {toRefs} from 'vue'
import list from "@/components/list.vue"
export default {
  props: {
    content: Object,
  },
  components: {
    list
  },
  setup(props){
      const contentReactive = toRefs(props).content.value, ss = contentReactive['CS:GO'].screenshot
      delete contentReactive['CS:GO'].screenshot
      return {ss, contentReactive}
  }
}
</script>

<style>

</style>