export const state = () => ({
  listItems: [],
  userLoggedIn: false
})

export const mutations = {
  setProjects(state, response) {
    state.listItems = response
  },

  setNewProjectName (state, payload) {
    const newNameProject = state.listItems.find(item => item.id === payload.id)
    newNameProject.name = payload.projectName
  },

  setUserLoggedIn (state, newValue) {
    state.userLoggedIn = newValue
  }
}

export const actions = {
    async submitData (context, payload) {
      try {
        let response = await (await fetch('https://api.quwi.com/v2/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          email: payload.email,
          password: payload.password
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        })).json()
        if (response.token) {
          context.commit("setUserLoggedIn", true)
          localStorage.setItem("token", response.token)
          this.$router.push('/')
        }
      } catch (error) {
        alert('Error, please try again later')
      }
    },

    async getProjects (context) {
      if (typeof window !== 'undefined') {
      let token = localStorage.getItem('token')
      const response = await(await fetch ('https://api.quwi.com/v2/projects-manage/index?filters[is_active]=1&sort=dta_create', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })).json()
      context.commit("setProjects", response.projects)
      }
    },

    async changeProjectName (context, payload) {
      try {
        const token = localStorage.getItem('token')
        if(token && token !== 'undefined') {
          const response = await (await fetch (`https://api.quwi.com/v2/projects-manage/update?id=${payload.id}`, {
            method: 'POST',
            body: JSON.stringify({
              name: payload.projectName
            }),
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          })).json()
        context.commit('setNewProjectName', payload)
        }
      } catch (error) {
        alert('Error, please try again later')
      }
    }
}
