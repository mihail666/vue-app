<template>
  <div class="profile">
    <h1>Profile</h1>
    <div class="profile__container grid">
      <div class="profile__card" v-for="u in userInfo" :key="u.id">
        <h1 class="profile__title">Info</h1>

        <div class="profile__data">

          <div class="profile__data-group">
            <i class="ri-user-shared-line auth__icon"></i>
            <h2 class="profile__subtitle">{{ u.name }} {{ u.surName }}</h2>
          </div>

          <div class="profile__data-group">
            <i class="ri-mail-add-line profile__icon"></i> E-mail: {{ u.Email }}
          </div>

          <div class="profile__data-group">
            <i class="ri-cake-2-line profile__icon"></i> Birth date: {{ u.birthDate }}
          </div>

          <div class="profile__data-group">
            <i class="ri-building-2-line profile__icon"></i> City: {{ u.city }}
          </div>

        </div>
      </div>
      <app-select
        :parameters="cities"
        :selectedPar="city"
        @selectParameter="selectCity"
      />
    </div>
  </div>
</template>

<script>
import AppSelect from '@/components/appSelect.vue'

export default {
  name: 'ProfileView',
  components: { AppSelect },
  data: () => ({
    userInfo: [
      { name: 'Mihail', surName: 'Filippov', Email: 'f1l1ppovmr@gmail.com', birthDate: '2001-11-09', city: 'Orenburg' }
    ],
    cities: [
      'Moscow', 'Orenburg', 'Rostov', 'Orsk', 'Saint Petersburg', 'Voronezh', 'Sorochinsk', 'Samara', 'Ufar'
    ],
    visible: false,
    city: 'Your city'
  }),
  methods: {
    selectCity (p) {
      this.city = p
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss';

.profile {
  &__container {
    padding-top: 2rem;
  }

  &__card {
    position: relative;
    width: 400px;
    background-color: $container-color;
    padding: 2rem 1.5rem 1.5rem;
    border-radius: 1rem;
    overflow: hidden;
  }

  &__title,
  &__subtitle {
    position: relative;
  }

  &__title {
    font-size: $h1-font-size;
    margin-bottom: 1rem;
    padding-bottom: .5rem;
    border-bottom: 3px solid hsl(219, 4%, 20%);
  }

  &__subtitle {
    font-size: $h2-font-size;
    color: $text-color;
    font-weight: 400;
  }

  &__data {
    display: grid;
    grid-template-columns: repeat(1, max-content);
    gap: 1rem 1.25rem;
    margin: 2rem 0;
  }

  &__data-group {
    display: inline-flex;
    align-items: center;
    column-gap: .9rem;
    font-size: $normal-font-size;
    color: $white-color;

    i {
      font-size: 1.4rem;
    }
  }
}
</style>
