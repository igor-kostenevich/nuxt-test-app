<template>
  <div class="container">
    <div class="form">
    <a href="/">
      <img src="@/static/quwi-logo.svg" class="img-form">
    </a>
    <form>
      <p class="error" v-if="errorMessage">Enter login or password</p>
      <div>
        <input type="text" placeholder="Email" class="form-input" v-model="emailValue">
      </div>
      <div>
        <input type="password" placeholder="Password" class="form-input" v-model="passwordValue">
      </div>
      <div @click="submitHandler" class="btn-login">
          <span class="btn">Login</span>
      </div>
      <a href="#" style="color: #2975dc;">Forgot password?</a>
    </form>
  </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Form',
  data () {
    return {
      emailValue: '',
      passwordValue: '',
      errorMessage: false
    }
  },
  methods: {
    ...mapActions(['submitData']),
    submitHandler () {
      if(this.emailValue && this.passwordValue) {
        this.submitData({
          email: this.emailValue,
          password: this.passwordValue,
          incorrectData: this.incorrectData
      })
      } else if (!this.emailValue || !this.passwordValue) {
        this.errorMessage = true
      }
    }
  }
}
</script>


<style scoped>

* {
  box-sizing: border-box;
  text-decoration: initial;
}

.form {
 width: 400px;
 margin: auto;
 text-align: center;
 background: #fff;
 border: 1px solid #fff;
 box-shadow: 0 0 12px #adadad;
 border-radius: 15px;
 padding: 25px 40px 35px;
}

.form-input {
  border: 1px solid #dadada;
  border-radius: 5px;
  padding: 15px;
  width: 100%;
  margin-bottom: 20px;
}

.img-form{
  margin-bottom: 40px;
}

.container {
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
}

.btn-login {
  background: #2668c1;
  height: 52px;
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
}

.btn-login:hover {
  opacity: 0.7;
}

.btn {
  font-size: 18px;
  font-weight: 400;
  color: #fff;
}

.error {
  color: #ff0000;
}

</style>