<template>
<!-- kinda bad but let it be -->
  <p class="section__list-title">{{title}} info:</p>
  <ul class="section__list">
    <li class="section__item" v-for="(item, name) in content" :key="name">
      <a v-if="String(item).match(/http/g)" :href="item">{{item}}</a>
      <span v-else-if="!Array.isArray(item)">
        {{ isNaN(name) ? `${name}: ${item}` : item }}
      </span>
      <list v-else :content="item" :title="name"></list>
    </li>
    <li class="section__item" v-if="content.length === 0">
      none
    </li>
  </ul>
</template>

<script>
import { defineAsyncComponent } from "vue";
const list = defineAsyncComponent(() => import("@/components/list.vue"));
export default {
  components: {
    list,
  },
  props: {
    content: Object,
    title: String,
  }
}
</script>

<style>

</style>