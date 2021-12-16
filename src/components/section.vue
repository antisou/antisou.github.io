<template>
  <section :class="[title, 'section']">
    <h1 class="section__title">{{title}}</h1>
    <table class="section__table">
      <tr class="section__tr section__tr-head">
        <th class="section__th" v-for="(cell, index) in thRow" :key="index">
        {{ cell }}
        </th>
      </tr>
      <tr
        class="section__tr section__tr-body"
        v-for="(row, index) in tdRows"
        :key="index"
      >
        <td class="section__td" v-for="(cell, subIndex) in row" :key="subIndex">
          {{ cell }}
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
import { toRef } from "vue";
export default {
  props: {
    content: Object,
    title: String
  },
  setup(props) {
    const contentArr = toRef(props, "content");
    const tdRows = [...contentArr.value];
    const thRow = contentArr.value[0];
    tdRows.shift();
    return { thRow, tdRows };
  },
}
</script>

<style>

</style>