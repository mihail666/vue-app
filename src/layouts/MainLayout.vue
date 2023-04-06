<template>
  <div class="main-layout">
    <app-loader v-if="loading"/>
      <div v-else>
        <app-sidebar
        :userInfo="INFO"
        @toggleMenu="addFull()"/>

      <main
        class="container"
        :class="{full: fullSize }"
      >
        <div class="page">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AppLoader from '@/components/appLoader.vue'
import appSidebar from '@/components/appSidebar.vue'
export default {
  components: { appSidebar, AppLoader },
  data: () => ({
    fullSize: false,
    loading: true
  }),
  computed: {
    ...mapGetters([
      'INFO',
      'TIKETS'
    ])
  },
  methods: {
    addFull () {
      this.fullSize = !this.fullSize
    }
  },
  async mounted () {
    await this.$store.dispatch('GET_TIKETS')
    await this.$store.dispatch('GET_INFO').then(() => {
      setTimeout(() => {
        this.loading = false
      }, 1500)
    })
  }
}
</script>

<style lang="scss">

</style>
