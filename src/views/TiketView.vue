<template>
  <div class="tikets">
    <div class="title__container grid">
      <h1 class="tikets__titile">Tikets list</h1>
    </div>
    <tikets-table :tiketsArr="state.tiketsArr" />
  </div>
</template>

<script>
import TiketsTable from '@/components/tiketsTable.vue'
import { reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'TiketView',
  components: { TiketsTable },
  setup () {
    const store = useStore()
    const state = reactive({
      arr: [],
      tiketsArr: [
        { title: '2', description: ' спи11111сок страни' },
        { title: '4', description: ' список страни' },
        { title: '6', description: ' список сqwerqwerтрани' },
        { title: '8', description: ' список страни' }
      ]
    })

    // const categoriesArr = computed(() => store.getters.categories).value
    // const recordsArr = computed(() => store.getters.records).value

    onMounted(async () => {
      await store.dispatch('GET_TIKET')
      // if (recordsArr.length) {
      //   state.newRecordArr = recordsArr.map(record => {
      //     return {
      //       ...record,
      //       categoryName: categoriesArr.find(c => c.id === record.categoryId).title,
      //       typeClass: record.type === 'income' ? 'green' : 'red',
      //       typeText: record.type === 'income' ? 'Доход' : 'Расход',
      //       filterDate: dateFilter(record.date, 'date time')
      //     }
      //   })
      //   state.recordsNotNull = false
      // }
    })
    return {
      state
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/variables.scss';
.tikets {
  &__container {
    padding-top: 2rem;
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
}
</style>
