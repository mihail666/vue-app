import { getDatabase, ref, push, set } from 'firebase/database'
export default {
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async CREATE_TIKET ({ commit, dispatch }, { titleTiket, descTiket }) {
      const uid = await dispatch('GET_UID')
      const db = getDatabase()
      set(push(ref(db, 'tikets')), {
        title: titleTiket,
        description: descTiket,
        userID: uid
      }).catch((e) => {
        commit('SET_ERROR', e)
        console.log(e)
      })
      console.log('CREATE_TIKET')
    }
    // async CREATE_TIKET ({ commit, dispatch }, { title, description }) {
    //   const uid = await dispatch('GET_UID')
    //   const db = getDatabase()
    //   set(push(ref(db, `users/${uid}/category`)), {
    //     title: title,
    //     description: description,
    //     userID: uid
    //   }).then(() => {
    //     console.log('CREATE_TIKET')
    //     // dispatch('GET_CATEGORIES')
    //   })
    // }
  }
}
