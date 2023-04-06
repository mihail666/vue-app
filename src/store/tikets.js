import { getDatabase, ref, push, onValue, set } from 'firebase/database'
export default {
  state: {
    TIKETS: {}
  },
  getters: {
    TIKETS: s => s.TIKETS
  },
  mutations: {
    SET_TIKETS (state, tiketsArr) {
      state.TIKETS = tiketsArr
    },
    CLEAR_TIKETS (state) {
      state.TIKETS = {}
    }
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
    },
    async GET_TIKETS ({ commit }) {
      const db = getDatabase()
      onValue(ref(db, 'tikets'), (snapshot) => {
        const tikets = snapshot.val()
        const tiketsArr = Object.keys(tikets).map(key => ({ ...tikets[key], id: key }))
        commit('SET_TIKETS', tiketsArr)
        console.log('GET_TIKET')
      })
    }
  }
}
