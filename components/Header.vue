<template>
  <div>
    <header>
      <div class="header-menu">
        <div>
        <img src="@/static/quwi-logo.svg">
      </div>
      <div class="navigation">
        <div v-if="!userLoggedIn">
          <span>SIGNUP</span>
        </div>
          <div v-if="userLoggedIn" class="btn">
            <div>
              <span>Projects</span>
            </div>
            <div>
              <span @click="logout">Logout</span>
            </div>
          </div>
      </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Header',
  data () {
    return {
      headerNav: false,
    }
  },
  methods: {
    logout () {
      this.$store.commit('setUserLoggedIn', false)
      localStorage.removeItem('token')
      this.$router.push('/signIn')
    }
  },
  computed: {
    ...mapState(['userLoggedIn'])
  }
}

</script>

<style scoped>
  * {
    font-family: GoogleSans,Arial,sans-serif;
    font-size: 18px;
    text-decoration: none;
  }

  header {
    margin-bottom: 20px;
  }

  .navigation {
    list-style: none;
  }

  ul>li {
    margin-right: 20px;
    list-style: none;
  }

  .header-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dfdfdf;
    box-shadow: 0px 2px 2px #dadada;
  }

  .btn {
    display: flex;
  }

  span {
    margin-right: 30px;
    cursor: pointer;
  }

  </style>
