<template>
  <div class="auth register">
    <div class="shape shape__big"></div>
    <form class="auth__form" @submit.prevent="registerUser">
      <div class="shape shape__small"></div>
      <h1 class="auth__title">Register account</h1>
      <div class="auth__content">

        <div class="auth__box">
          <i class="ri-mail-add-line auth__icon"></i>
          <div class="auth__box-input">
            <input
              type="email"
              class="auth__input"
              placeholder=" "
              v-model="state.email"
            >
            <label for='' class="auth__label">E-mail</label>
          </div>
        </div>

        <div class="auth__box">
          <i class="ri-user-line auth__icon"></i>
          <div class="auth__box-input">
            <input
              type="text"
              class="auth__input"
              placeholder=" "
              v-model="state.name"
            >
            <label for='' class="auth__label">Name</label>
          </div>
        </div>

        <div class="auth__box">
          <i class="ri-user-shared-line auth__icon"></i>
          <div class="auth__box-input">
            <input
              type="text"
              class="auth__input"
              placeholder=" "
              v-model="state.surname"
            >
            <label for='' class="auth__label">Surname</label>
          </div>
        </div>

        <div class="auth__box">
          <i class="ri-cake-2-line auth__icon"></i>
          <div class="auth__box-input">
            <input
              type="date"
              class="auth__input"
              placeholder=" "
              v-model="state.birthDate"
            >
            <label for='' class="auth__label">birth date</label>
          </div>
        </div>

        <div class="auth__box">
          <i class="ri-building-2-line auth__icon"></i>
          <div class="auth__box-input">
            <select
              type="text"
              class="auth__input"
              placeholder=" "
              v-model="state.city"
            >
              <option >Oren</option>
              <option >SPB</option>
              <option >Moscl</option>
            </select>
            <label for='' class="auth__label">Your city</label>
          </div>
        </div>

        <div class="auth__box">
          <i class="ri-lock-line auth__icon"></i>
          <div class="auth__box-input">
            <input
              id="inputPas"
              type="password"
              class="auth__input"
              placeholder=" "
              v-model="state.password"
            >
            <label for="" class="auth__label">Password</label>
            <div @click="showHiddenPas()">
              <i class="ri-eye-off-line auth__icon-eye" id="iconEye"></i>
            </div>
          </div>
        </div>

        <div class="auth__box">
          <i class="ri-lock-line auth__icon"></i>
          <div class="auth__box-input">
            <input
              id="inputPas2"
              type="password"
              class="auth__input"
              placeholder=" "
              v-model="state.repeatPassword"
            >
            <label for="" class="auth__label">Repeat password</label>
          </div>
        </div>

      </div>

      <div class="auth__check">
        <div class="auth__check-group">
          <input
            type="checkbox"
            class="auth__check-input"
            v-model="state.proof"
          >
          <label for="" class="auth__check-label">proof</label>
        </div>
      </div>

      <button class="auth__button" type="submit">
        Register
        <i class="ri-login-circle-line auth__icon-login"></i>
      </button>

      <p class="auth__register">
        <router-link class="auth__register-link" to="/Login">Go to login</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { email, required, minLength } from '@vuelidate/validators'
export default {
  name: 'RegisterView',
  setup () {
    const state = reactive({
      email: '',
      name: '',
      surname: '',
      birthDate: '',
      city: '',
      password: '',
      repeatPassword: '',
      proof: ''
    })
    const rules = {
      password: { required, minLength: minLength(8) },
      email: { required, email }
    }
    const v$ = useVuelidate(rules, state)
    return { state, v$ }
  },
  data: () => ({}),
  methods: {
    async registerUser () {
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      const formData = {
        email: this.state.email,
        name: this.state.name,
        surname: this.state.surname,
        birthDate: this.state.birthDate,
        city: this.state.city,
        password: this.state.password,
        repeatPassword: this.state.repeatPassword
      }
      try {
        await this.$store.dispatch('REGISTER', formData)
        this.$router.push('/')
      } catch (e) {}
    },
    showHiddenPas () {
      this.$store.dispatch('showRegPas')
    }
  }
}
</script>
