<template>
  <div class="main-layout">
    <app-sidebar />

    <main class="container">
      <div class="page">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import appSidebar from '@/components/appSidebar.vue'
export default {
  components: { appSidebar }
}
</script>

<style lang="scss">

</style>
