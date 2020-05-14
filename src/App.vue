<template>
  <DefaultLayout>
    <transition>
      <router-view />
    </transition>
  </DefaultLayout>
</template>

<script lang="ts">
import Vue from 'vue'
import DefaultLayout from './layouts/Default.vue'
export default Vue.extend({
  name: 'App',
  components: { DefaultLayout }
})
</script>

<style lang='scss'>
@import './app.scss';
</style>