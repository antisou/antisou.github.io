<template>
  <div id="app">
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item" goTo=".Accounts"><a class="nav__anchor" href="#accounts">Accounts</a></li>
        <li class="nav__item" goTo=".Commends"><a class="nav__anchor" href="#commends">CS:GO commends</a></li>
        <li class="nav__item" goTo=".Comments"><a class="nav__anchor" href="#comments">Steam comments</a></li>
        <li class="nav__item" goTo=".Contact"><a class="nav__anchor" href="#contact">Contact</a></li>
      </ul>
    </nav>
    <main class="main">
      <section class="section main-page">
        <div class="section__text">
          <h1 class="section__title"><a :href="contact.steam" class="section__anchor">vAsketti</a>service!</h1>
          <h2 class="section__title-sub">Stop overpaying for accounts, commends and comments.</h2>
        </div>
      </section>
      <section class="section Accounts">
        <h1 class="section__title">Accounts</h1>
        <account v-for="(obj, i) in accounts" :key="i" :content="obj"></account>
      </section>
      <sectionWithTable v-for="(obj, name) in sections" :key="name" :content="obj" :title="name"></sectionWithTable>
      <section class="section Contact">
        <div class="section__text">
          <h1 class="section__title">Contact</h1>
          <h1 class="section__title">Steam: <a :href="contact.steam" class="section__anchor">vAsketti</a>,</h1>
          <h1 class="section__title">Discord: {{contact.discord}}</h1>
        </div>
      </section>
    </main>
    <background></background>
    <footer class="footer">
      <p class="footer__paragraph">This site was created by <a href="https://canicjusz.github.io">Canicjusz</a>.</p>
    </footer>
  </div>
</template>

<script>
import sectionWithTable from "@/components/section.vue"
import account from "@/components/account.vue"
import background from "@/components/background.vue"
import data from "@/data/accounts.json"
import('@/helpers/scroller.js')

export default {
  name: 'App',
  components: {
    sectionWithTable,
    background,
    account
  },
  setup(){
    const {contact, accounts, sections} = data
    return {contact, accounts, sections}
  }
}
</script>

<style lang="sass">
@import "@/styles/style.sass"
</style>
