<template>
  <div id="app">
    <MyPreloader />
    <MyHeader />
    <MyHero />
    <MyAbout />
    <MyPortofolio />
    <MyFooter />
  </div>
</template>

<script>
import MyPreloader from './components/Preloader.vue'
import MyHeader from './components/Header.vue'
import MyHero from './components/Hero.vue'
import MyAbout from './components/About.vue'
import MyPortofolio from './components/Portofolio.vue'
import MyFooter from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    MyPreloader,
    MyHeader,
    MyHero,
    MyAbout,
    MyPortofolio,
    MyFooter
  }
}
</script>

<style>
/* Add relevant styles here */
</style>
