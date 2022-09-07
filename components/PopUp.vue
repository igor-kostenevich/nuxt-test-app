<template>
  <div class="container-popup">
    <div class="popup-main">
      <div>
        <p @click="closePopUp" class="closePopUp">x</p>
        <p class="popup-title">Change Project Name</p>
        <input type="text" v-model="projectNameValue" placeholder="Enter a new name">
        <div>
        <div @click="editTitleProjectHandler" class="btn-edit">
            <span class="btn">Edit Name</span>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PopUp',
  props: {
    newPopupVisible: {
      type: Boolean
    },
    id: {
      type: Number
    }
  },
  data() {
    return {
      projectNameValue: ''
    }
  },
  methods:{
    ...mapActions(['changeProjectName']),
    async editTitleProjectHandler () {
      await this.changeProjectName({
        id: this.id,
        projectName: this.projectNameValue
      })
      this.closePopUp()
    },
    closePopUp () {
      this.$emit('update:visible', this.newPopupVisible)
    },
  }
}

</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: GoogleSans,Arial,sans-serif;
  font-size: 16px;
  text-decoration: none;
}

.popup-main {
  width: 300px;
  display: flex;
  justify-content: center;
  background: #fff;
  border-radius: 5px;
  padding: 39px 0;
  position: relative;
}

.container-popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  background: rgba(0,0,0,0.67059);
  overflow: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

input {
  border: 1px solid #dadada;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 15px;
}

.closePopUp {
  position: absolute;
  left: 275px;
  top: -10px;
  cursor: pointer;
}

.btn-edit {
  background: #2668c1;
  height: 30px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
}

.popup-title {
  margin: 0px 0 30px 0;
  text-align: center;
  font-weight: bold;
}

</style>
