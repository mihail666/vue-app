<template>
  <div class="main-layout">
    <main class="app__content">
      <div class="app__page">
        <router-view />
      </div>
    </main>

    <div class="">
      <a @click.prevent="logout()">
        <i class="ri-logout-box-r-line"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$router.push('/Login')
      this.$store.dispatch('LOGOUT')
    }
  }
}
</script>
