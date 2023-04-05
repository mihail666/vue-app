<template>
  <div class="table table__container">
    <ul class="table__content">

      <li class="table__header">
        <div class="col col-1">Id</div>
        <div class="col col-2">Tiket title</div>
        <div class="col col-3">Tiket description</div>
        <div class="col col-4">Open</div>
      </li>

      <li class="table__row" v-for="(t, idx) of paginatedTikets" :key="t.id">
        <div class="col col-1" data-label="Tiket Id">{{ idx }}</div>
        <div class="col col-2" data-label="Tiket title">{{ t.title }}</div>
        <div class="col col-3" data-label="Tiket description">{{ t.description }}</div>
        <button class="col col-4 table__btn" data-label="Open">
          <i class="ri-arrow-right-fill"></i>
        </button>
      </li>
    </ul>
  </div>

  <div class="">
    <div class="table__pagination">
      <div class="table__page-number" v-for="p in pages" :key="p" :class="{ 'crm-page_selected': p === state.pageNumber }"
        @click="nextPage(p)">
        {{ p }}
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  setup (props) {
    const state = reactive({
      pageNumber: 1,
      perPage: 2
    })
    const pages = computed(() => { return Math.ceil(props.tiketsArr.length / 2) })
    const paginatedTikets = computed(() => {
      const from = (state.pageNumber - 1) * state.perPage
      const to = from + state.perPage
      return props.tiketsArr.slice(from, to)
    })
    function nextPage (page) {
      console.log(page)
      state.pageNumber = page
    }
    return { state, pages, paginatedTikets, nextPage }
  },
  props: {
    tiketsArr: {
      type: Array
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss';

.table {
  position: relative;

  &__container {
    max-width: 1800px;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
  }

  &__content {
    li {
      border-radius: 3px;
      padding: 25px 30px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 25px;
      font-size: $normal-font-size;
      font-weight: $font-medium;
      color: $white-color;
    }

    .table__header {
      background-color: $container-color;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }

    .table__row {
      background-color: $container-color;
      box-shadow: 0px 0px 2px 1px hsl(219, 4%, 20%);

    }
    .col-1 {
      min-width: 30px;
      flex-basis: 5%;
    }

    .col-2 {
      flex-basis: 20%;
    }

    .col-3 {
      flex-basis: 70%;
    }

    .col-4 {
      width: 50px;
    }
    .col-1,
    .col-2,
    .col-3 {
      margin: 0 .5rem;
      border-right: 3px solid hsl(219, 4%, 20%);
    }
    .col-4 {
      margin: 0 .5rem;
      text-align: center;
    }
    .table__btn{
      background: none;
      border: none;
      color: $white-color;
      font-size: 1.4rem;
      cursor: pointer;
    }
  }

  &__pagination {
    position: absolute;
    bottom: 0;
    margin-bottom: 2rem;
    display: flex;
    gap: 1rem;
  }

  &__page-number {
    padding: .2rem .5rem;
    font-size: $normal-font-size;
    font-weight: $font-bold;
    border-radius: .2rem;
    background-color: $first-color-alt;
    color: $black-color;
  }
}
</style>
