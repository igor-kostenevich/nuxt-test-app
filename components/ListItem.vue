<template>
  <div>
    <div class="container" @click="isPopupVisible = true">
      <div class="course-name">
        <img :src="project.logo_url" class="img-course">
        <p>{{ project.name }}</p>
      </div>
      <div>
        <p class="active-course">Active</p>
      </div>
      <div>
        <div class="cours-time">
          <p>time this week</p>
          <p><strong>{{ project.spent_sec_all_time }}</strong></p>
        </div>
        <div class="cours-time">
          <p>this month</p>
          <p><strong>{{ project.spent_sec_all_time }}</strong></p>
        </div>
        <div class="cours-time">
          <p>total</p>
          <p><strong>{{ project.spent_sec_all_time }}</strong></p>
        </div>
      </div>
    </div>
    <PopUp
      v-if="isPopupVisible"
      :visible.sync="isPopupVisible"
      :id="project.id"
    />
  </div>
</template>

<script>
import PopUp from '@/components/PopUp.vue'

export default {
  name: 'ListItem',
  props: {
    project: {
      type: Object
    },
  },
  components: {
    PopUp
  },
  data () {
    return {
      isPopupVisible: false,
    }
  }
}

</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #c9c9c9;
  border-radius: 5px;
  padding: 20px 30px;
  width: 760px;
  margin: auto;
  cursor: pointer;
  margin-bottom: 20px;
  position: relative;
}

.cours-time {
  display: flex;
  justify-content: space-between;
}

.course-name {
  display: flex;
  align-items: center;
}

.active-course {
  color: #055305;
  font-weight: bold;
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
}

.img-course {
  margin-right: 25px;
  width: 40px;
}

.cours-time p {
  margin-left: 15px;
}

p {
  margin: 0;
}

</style>
