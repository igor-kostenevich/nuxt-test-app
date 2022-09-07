<template>
  <div>
    <ListItem
      v-for="project in listItems"
      :project="project"
      :key="project.id"
    />
  </div>
</template>

<script>
import ListItem from '~/components/ListItem.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Projects',
  components: {
    ListItem
  },
  methods: {
    ...mapActions(['getProjects', 'setUserLoggedIn']),
  },
  computed: {
    ...mapState(['listItems']),
  },
  created () {
      this.getProjects()
      if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token')
        if (!token || token === 'underfined') {
          this.$router.push('/signin')
          this.setUserLoggedIn(false)
        } else {
          this.setUserLoggedIn(true)
        }
      }
    }
}

</script>
