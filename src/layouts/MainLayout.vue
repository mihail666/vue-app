<template>
  <div class="main-layout">
    <app-sidebar />

    <main class="container">
      <div class="page">
        <router-view />
        {{ userInfo }}
      </div>
    </main>
  </div>
</template>

<script>
import appSidebar from '@/components/appSidebar.vue'
export default {
  components: { appSidebar },
  computed: {
    userInfo () {
      return (this.$store.getters.INFO)
    }
  },
  async mounted () {
    await this.$store.dispatch('GET_INFO')
  }
}
</script>

<style lang="scss">

</style>
